import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-animation-delay
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '柱状图动画延迟'
    });
  }, []);
  const xAxisData: string[] = [];
  const data1: number[] = [];
  const data2: number[] = [];
  for (let i = 0; i < 100; i++) {
    xAxisData.push('A' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  }
  const option = {
    title: {
      text: 'Bar Animation Delay'
    },
    legend: {
      data: ['bar', 'bar2']
    },
    toolbox: {
      // y: 'bottom',
      feature: {
        magicType: {
          type: ['stack']
        },
        dataView: {}
        // saveAsImage: {
        //   pixelRatio: 2
        // }
      }
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: {},
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: data1,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function(idx) {
          return idx * 10;
        }
      },
      {
        name: 'bar2',
        type: 'bar',
        data: data2,
        emphasis: {
          focus: 'series'
        },
        animationDelay: function(idx) {
          return idx * 10 + 100;
        }
      }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function(idx) {
      return idx * 5;
    }
  };

  return <Chart option={option} />;
}
