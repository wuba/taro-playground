import { View } from '@tarojs/components';
import Chart from '../../echarts';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=dataset-encode1
 */
const ROOT_PATH = 'https://echarts.apache.org/examples'
export default function Index() {
  const [option, setOption] = useState<any>();

  useEffect(() => {
    Taro.request({
      url: ROOT_PATH + '/data/asset/data/life-expectancy-table.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        let data = res.data
        const sizeValue = '57%';
        const symbolSize = 2.5;
        setOption({
          legend: {},
          tooltip: {},
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {}
            }
          },
          grid: [
            { right: sizeValue, bottom: sizeValue },
            { left: sizeValue, bottom: sizeValue },
            { right: sizeValue, top: sizeValue },
            { left: sizeValue, top: sizeValue }
          ],
          xAxis: [
            {
              type: 'value',
              gridIndex: 0,
              name: 'Income',
              axisLabel: { rotate: 50, interval: 0 }
            },
            {
              type: 'category',
              gridIndex: 1,
              name: 'Country',
              boundaryGap: false,
              axisLabel: { rotate: 50, interval: 0 }
            },
            {
              type: 'value',
              gridIndex: 2,
              name: 'Income',
              axisLabel: { rotate: 50, interval: 0 }
            },
            {
              type: 'value',
              gridIndex: 3,
              name: 'Life Expectancy',
              axisLabel: { rotate: 50, interval: 0 }
            }
          ],
          yAxis: [
            { type: 'value', gridIndex: 0, name: 'Life Expectancy' },
            { type: 'value', gridIndex: 1, name: 'Income' },
            { type: 'value', gridIndex: 2, name: 'Population' },
            { type: 'value', gridIndex: 3, name: 'Population' }
          ],
          dataset: {
            dimensions: [
              'Income',
              'Life Expectancy',
              'Population',
              'Country',
              { name: 'Year', type: 'ordinal' }
            ],
            source: data
          },
          series: [
            {
              type: 'scatter',
              symbolSize: symbolSize,
              xAxisIndex: 0,
              yAxisIndex: 0,
              encode: {
                x: 'Income',
                y: 'Life Expectancy',
                tooltip: [0, 1, 2, 3, 4]
              }
            },
            {
              type: 'scatter',
              symbolSize: symbolSize,
              xAxisIndex: 1,
              yAxisIndex: 1,
              encode: {
                x: 'Country',
                y: 'Income',
                tooltip: [0, 1, 2, 3, 4]
              }
            },
            {
              type: 'scatter',
              symbolSize: symbolSize,
              xAxisIndex: 2,
              yAxisIndex: 2,
              encode: {
                x: 'Income',
                y: 'Population',
                tooltip: [0, 1, 2, 3, 4]
              }
            },
            {
              type: 'scatter',
              symbolSize: symbolSize,
              xAxisIndex: 3,
              yAxisIndex: 3,
              encode: {
                x: 'Life Expectancy',
                y: 'Population',
                tooltip: [0, 1, 2, 3, 4]
              }
            }
          ]
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

  return (
    option ? (
      <View>
        <View className="header">指定数据到坐标轴的映射1</View>
        <View className="body">
          <Chart option={option} />
        </View>
      </View>
    ) : (
      <View>Loading...</View>
    )
  )
}
