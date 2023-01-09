import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=custom-wind
 */
const ROOT_PATH = 'https://echarts.apache.org/examples'
export default function windVectors() {
  const [option, setOption] = useState<any>();
  function shuffle(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data-gl/asset/data/winds.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        var p = 0;
        var maxMag = 0;
        var minMag = Infinity;
        var data = [] as any;
        for (var j = 0; j < res.data.ny; j++) {
          for (var i = 0; i < res.data.nx; i++, p++) {
            var vx = res.data.data[p][0];
            var vy = res.data.data[p][1];
            var mag = Math.sqrt(vx * vx + vy * vy);
            // 数据是一个一维数组
            // [ [经度, 维度，向量经度方向的值，向量维度方向的值] ]
            data.push([
              (i / res.data.nx) * 360 - 180,
              (j / res.data.ny) * 180 - 90,
              vx,
              vy,
              mag
            ]);
            maxMag = Math.max(mag, maxMag);
            minMag = Math.min(mag, minMag);
          }
        }
        shuffle(data);
        setOption({
            backgroundColor: '#333',
            visualMap: {
              left: 'center',
              min: minMag,
              max: maxMag,
              dimension: 4,
              inRange: {
                // prettier-ignore
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              },
              calculable: true,
              textStyle: {
                color: '#fff'
              },
              orient: 'horizontal'
            },
            geo: {
              map: 'world',
              left: 0,
              right: 0,
              top: 0,
              zoom: 1,
              silent: true,
              roam: true,
              itemStyle: {
                areaColor: '#323c48',
                borderColor: '#111'
              }
            },
            series: {
              type: 'custom',
              coordinateSystem: 'geo',
              data: data,
              encode: {
                x: 0,
                y: 0
              },
              renderItem: function (params, api) {
                const x = api.value(0);
                const y = api.value(1);
                const dx = api.value(2);
                const dy = api.value(3);
                const start = api.coord([
                  Math.max(x - dx / 5, -180),
                  Math.max(y - dy / 5, -90)
                ]);
                const end = api.coord([
                  Math.min(x + dx / 5, 180),
                  Math.min(y + dy / 5, 90)
                ]);
                return {
                  type: 'line',
                  shape: {
                    x1: start[0],
                    y1: start[1],
                    x2: end[0],
                    y2: end[1]
                  },
                  style: {
                    lineWidth: 0.5,
                    stroke: api.visual('color')
                  }
                };
              },
              progressive: 2000
            }
          })
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
  return option ? (
    <View>
      <View className="header">使用自定义系列绘制风场（应该需要引入地图）</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>Loading...</View>
  );
}
