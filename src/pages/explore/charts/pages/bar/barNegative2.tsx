import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-negative
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '正负条形图'
    });
  }, []);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['Profit', 'Expenses', 'Income']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    series: [
      {
        name: 'Profit',
        type: 'bar',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        data: [200, 170, 240, 244, 200, 220, 210]
      },
      {
        name: 'Income',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 302, 341, 374, 390, 450, 420]
      },
      {
        name: 'Expenses',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'left'
        },
        emphasis: {
          focus: 'series'
        },
        data: [-120, -132, -101, -134, -190, -230, -210]
      }
    ]
  };

  return <Chart option={option} />;
}
