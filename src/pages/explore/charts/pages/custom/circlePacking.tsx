import { View } from '@tarojs/components';
import { useCallback } from 'react';
import Taro from '@tarojs/taro';
import * as d3 from 'd3-hierarchy';
import Chart from '../../echarts';
import '../style.scss';

/**
https://echarts.apache.org/examples/zh/editor.html?c=circle-packing-with-d3
 */
export default function CirclePacking() {
  const onInit = useCallback(myChart => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/option-view.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        run(res.data);

        function run(rawData) {
          const dataWrap = prepareData(rawData);
          initChart(dataWrap.seriesData, dataWrap.maxDepth);
        }
        function prepareData(rawData) {
          const seriesData = [] as any;
          let maxDepth = 0;
          function convert(source, basePath, depth) {
            if (source == null) {
              return;
            }
            if (maxDepth > 5) {
              return;
            }
            maxDepth = Math.max(depth, maxDepth);
            seriesData.push({
              id: basePath,
              value: source.$count,
              depth: depth,
              index: seriesData.length
            });
            for (var key in source) {
              if (source.hasOwnProperty(key) && !key.match(/^\$/)) {
                var path = basePath + '.' + key;
                convert(source[key], path, depth + 1);
              }
            }
          }
          convert(rawData, 'option', 0);
          return {
            seriesData: seriesData,
            maxDepth: maxDepth
          };
        }
        function initChart(seriesData, maxDepth) {
          var displayRoot = stratify();
          function stratify() {
            return d3
              .stratify()
              .parentId(function (d) {
                return d.id.substring(0, d.id.lastIndexOf('.'));
              })(seriesData)
              .sum(function (d) {
                return d.value || 0;
              })
              .sort(function (a, b) {
                return b.value - a.value;
              });
          }
          function overallLayout(params, api) {
            var context = params.context;
            d3
              .pack()
              .size([api.getWidth() - 2, api.getHeight() - 2])
              .padding(3)(displayRoot);
            context.nodes = {};
            displayRoot.descendants().forEach(function (node, index) {
              context.nodes[node.id] = node;
            });
          }
          function renderItem(params, api) {
            var context = params.context;
            // Only do that layout once in each time `setOption` called.
            if (!context.layout) {
              context.layout = true;
              overallLayout(params, api);
            }
            var nodePath = api.value('id');
            var node = context.nodes[nodePath];
            if (!node) {
              // Reder nothing.
              return;
            }
            var isLeaf = !node.children || !node.children.length;
            var focus = new Uint32Array(
              node.descendants().map(function (node) {
                return node.data.index;
              })
            );
            var nodeName = isLeaf
              ? nodePath
                  .slice(nodePath.lastIndexOf('.') + 1)
                  .split(/(?=[A-Z][^A-Z])/g)
                  .join('\n')
              : '';
            var z2 = api.value('depth') * 2;
            return {
              type: 'circle',
              focus: focus,
              shape: {
                cx: node.x,
                cy: node.y,
                r: node.r
              },
              transition: ['shape'],
              z2: z2,
              textContent: {
                type: 'text',
                style: {
                  // transition: isLeaf ? 'fontSize' : null,
                  text: nodeName,
                  fontFamily: 'Arial',
                  width: node.r * 1.3,
                  overflow: 'truncate',
                  fontSize: node.r / 3
                },
                emphasis: {
                  style: {
                    overflow: null,
                    fontSize: Math.max(node.r / 3, 12)
                  }
                }
              },
              textConfig: {
                position: 'inside'
              },
              style: {
                fill: api.visual('color')
              },
              emphasis: {
                style: {
                  fontFamily: 'Arial',
                  fontSize: 12,
                  shadowBlur: 20,
                  shadowOffsetX: 3,
                  shadowOffsetY: 5,
                  shadowColor: 'rgba(0,0,0,0.3)'
                }
              }
            };
          }
          let option = {
            dataset: {
              source: seriesData
            },
            tooltip: {},
            visualMap: [
              {
                show: false,
                min: 0,
                max: maxDepth,
                dimension: 'depth',
                inRange: {
                  color: ['#006edd', '#e0ffff']
                }
              }
            ],
            hoverLayerThreshold: Infinity,
            series: {
              type: 'custom',
              renderItem: renderItem,
              progressive: 0,
              coordinateSystem: 'none',
              encode: {
                tooltip: 'value',
                itemName: 'id'
              }
            }
          };
          myChart.setOption(option);
          myChart.on('click', { seriesIndex: 0 }, function (params) {
            drillDown(params.data.id);
          });
          function drillDown(targetNodeId=null) {
            displayRoot = stratify();
            if (targetNodeId != null) {
              displayRoot = displayRoot.descendants().find(function (node) {
                return node.data.id === targetNodeId;
              });
            }
            // A trick to prevent d3-hierarchy from visiting parents in this algorithm.
            displayRoot.parent = null;
            option.dataset.source = seriesData
            myChart.setOption({...option});
          }
          // // Reset: click on the blank area.
          myChart.getZr().on('click', function (event) {
            if (!event.target) {
              drillDown();
            }
          });
        }

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
  
  return (
    <View>
      <View className="header">Circle Packing with d3</View>
      <View className="body">
        <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />
      </View>
    </View>
  );
}
