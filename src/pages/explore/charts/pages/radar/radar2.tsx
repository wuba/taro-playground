import { View } from '@tarojs/components';
// import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';

/**
https://echarts.apache.org/examples/zh/editor.html?c=radar2
 */

export default function radar2() {
  const option = {
    title: {
      text: 'Proportion of Browsers',
      subtext: 'Fake Data',
      top: 10,
      left: 10
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      bottom: 10,
      data: (function() {
        const list: any = [];
        for (var i = 1; i <= 28; i++) {
          list.push(i + 2000 + '');
        }
        return list;
      })()
    },
    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true
    },
    radar: {
      indicator: [
        { text: 'IE8-', max: 400 },
        { text: 'IE9+', max: 400 },
        { text: 'Safari', max: 400 },
        { text: 'Firefox', max: 400 },
        { text: 'Chrome', max: 400 }
      ]
    },
    series: (function() {
      const series: any = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          type: 'radar',
          symbol: 'none',
          lineStyle: {
            width: 1
          },
          emphasis: {
            areaStyle: {
              color: 'rgba(0,250,0,0.3)'
            }
          },
          data: [
            {
              value: [
                (40 - i) * 10,
                (38 - i) * 4 + 60,
                i * 5 + 10,
                i * 9,
                (i * i) / 2
              ],
              name: i + 2000 + ''
            }
          ]
        });
      }
      return series;
    })()
  };

  return (
    <View>
      <View className="header">浏览器占比变化</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
