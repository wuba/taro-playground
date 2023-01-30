import Taro from '@tarojs/taro';
import { useCallback } from 'react';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=custom-hexbin
 */
const ROOT_PATH = 'https://echarts.apache.org/examples'
export default function HexagonalBinning() {
  function hexBinStatistics(points, r) {
    var dx = r * 2 * Math.sin(Math.PI / 3);
    var dy = r * 1.5;
    var binsById = {} as any;
    var bins = [] as any;
    for (var i = 0, n = points.length; i < n; ++i) {
      var point = points[i];
      var px = point[0];
      var py = point[1];
      if (isNaN(px) || isNaN(py)) {
        continue;
      }
      var pj = Math.round((py = py / dy));
      var pi = Math.round((px = px / dx - (pj & 1) / 2));
      var py1 = py - pj;
      if (Math.abs(py1) * 3 > 1) {
        var px1 = px - pi;
        var pi2 = pi + (px < pi ? -1 : 1) / 2;
        var pj2 = pj + (py < pj ? -1 : 1);
        var px2 = px - pi2;
        var py2 = py - pj2;
        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) {
          pi = pi2 + (pj & 1 ? 1 : -1) / 2;
          pj = pj2;
        }
      }
      var id = pi + '-' + pj;
      var bin = binsById[id];
      if (bin) {
        bin.points.push(point);
      } else {
        bins.push((bin = binsById[id] = { points: [point] }));
        bin.x = (pi + (pj & 1) / 2) * dx;
        bin.y = pj * dy;
      }
    }
    var maxBinLen = -Infinity;
    for (var i = 0; i < bins.length; i++) {
      maxBinLen = Math.max(maxBinLen, bins.length);
    }
    return {
      maxBinLen: maxBinLen,
      bins: bins
    };
  }
  const onInit = useCallback(chart => {
    chart.showLoading();
    Taro.request({
      url: `${ROOT_PATH}/data/asset/data/kawhi-leonard-16-17-regular.json`,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      timeout: 10000,
      success: outeRes => {
        Taro.request({
          url: `${ROOT_PATH}/data/asset/data/nba-court.json`,
          data: {},
          header: {
            'content-type': 'application/json'
          },
          timeout: 10000,
          success: innerRes => {
            const shotData = outeRes.data;
            const nbaCourt = innerRes.data;
            echarts.registerMap('nbaCourt', nbaCourt.borderGeoJSON);
            var backgroundColor = '#333';
            var hexagonRadiusInGeo = 1;
            var hexBinResult = hexBinStatistics(
              shotData.data.map(function (item) {
                // "shot_made_flag" made missed
                var made = item[shotData.schema.indexOf('shot_made_flag')];
                return [
                  item[shotData.schema.indexOf('loc_x')],
                  item[shotData.schema.indexOf('loc_y')],
                  made === 'made' ? 1 : 0
                ];
              }),
              hexagonRadiusInGeo
            );
            var data = hexBinResult.bins.map(function (bin) {
              var made = 0;
              bin.points.forEach(function (point) {
                made += point[2];
              });
              return [
                bin.x,
                bin.y,
                bin.points.length,
                ((made / bin.points.length) * 100).toFixed(2)
              ];
            });
            function renderItemHexBin(params, api) {
              var center = api.coord([api.value(0), api.value(1)]);
              var points = [] as any;
              var pointsBG = [] as any;
              var maxViewRadius = api.size([hexagonRadiusInGeo, 0])[0];
              var minViewRadius = Math.min(maxViewRadius, 4);
              var extentMax = Math.log(Math.sqrt(hexBinResult.maxBinLen));
              var viewRadius = echarts.number.linearMap(
                Math.log(Math.sqrt(api.value(2))),
                [0, extentMax],
                [minViewRadius, maxViewRadius]
              );
              var angle = Math.PI / 6;
              for (var i = 0; i < 6; i++, angle += Math.PI / 3) {
                points.push([
                  center[0] + viewRadius * Math.cos(angle),
                  center[1] + viewRadius * Math.sin(angle)
                ]);
                pointsBG.push([
                  center[0] + maxViewRadius * Math.cos(angle),
                  center[1] + maxViewRadius * Math.sin(angle)
                ]);
              }
              return {
                type: 'group',
                children: [
                  {
                    type: 'polygon',
                    shape: {
                      points: points
                    },
                    style: {
                      stroke: '#ccc',
                      fill: api.visual('color'),
                      lineWidth: 1
                    }
                  },
                  {
                    type: 'polygon',
                    shape: {
                      points: pointsBG
                    },
                    style: {
                      stroke: null,
                      fill: 'rgba(0,0,0,0.5)',
                      lineWidth: 0
                    },
                    z2: -19
                  }
                ]
              };
            }
            function renderItemNBACourt(param, api) {
              return {
                type: 'group',
                children: nbaCourt.geometry.map(function (item) {
                  return {
                    type: item.type,
                    style: {
                      stroke: '#aaa',
                      fill: null,
                      lineWidth: 1.5
                    },
                    shape: {
                      points: item.points.map(api.coord)
                    }
                  };
                })
              };
            }
            const option = {
              backgroundColor: backgroundColor,
              tooltip: {
                backgroundColor: 'rgba(255,255,255,0.9)',
                textStyle: {
                  color: '#333'
                }
              },
              animation: false,
              title: {
                text: 'Some Player',
                subtext: 'Regular Season',
                backgroundColor: backgroundColor,
                top: 10,
                left: 10,
                textStyle: {
                  color: '#eee'
                }
              },
              legend: {
                data: ['bar', 'error']
              },
              geo: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                roam: true,
                silent: true,
                itemStyle: {
                  color: backgroundColor,
                  borderWidth: 0
                },
                map: 'nbaCourt'
              },
              visualMap: {
                type: 'continuous',
                orient: 'horizontal',
                right: 30,
                top: 40,
                min: 0,
                max: 100,
                align: 'bottom',
                text: [null, 'FG:   '],
                dimension: 3,
                calculable: true,
                textStyle: {
                  color: '#eee'
                },
                formatter: '{value} %',
                inRange: {
                  // color: ['rgba(241,222,158, 0.3)', 'rgba(241,222,158, 1)']
                  color: ['green', 'yellow']
                }
              },
              series: [
                {
                  type: 'custom',
                  coordinateSystem: 'geo',
                  geoIndex: 0,
                  renderItem: renderItemHexBin,
                  dimensions: [
                    null,
                    null,
                    'Field Goals Attempted (hexagon size)',
                    'Field Goal Percentage (color)'
                  ],
                  encode: {
                    tooltip: [2, 3]
                  },
                  data: data
                },
                {
                  coordinateSystem: 'geo',
                  type: 'custom',
                  geoIndex: 0,
                  renderItem: renderItemNBACourt,
                  silent: true,
                  data: [0]
                }
              ]
            };
            chart.hideLoading()
            chart.setOption(option)
          },
          fail: err => {
            console.log(err);
            Taro.showToast({
              icon: 'none',
              title: '数据请求失败'
            });
          }
        });

      },
      fail: err => {
        console.log(err);
        Taro.showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      }
    });
  }, []);
  return <Chart onSVGInit={onInit} onSkiaInit={onInit} />;
}
