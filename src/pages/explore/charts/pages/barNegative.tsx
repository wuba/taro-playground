import { View } from '@tarojs/components';
import * as echarts from 'echarts/core';
import Chart from '../echarts';
import './style.scss';

/**
 * 这个case字体颜色和rn上不同
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-negative2
 */

export default function barPolarRealEstate() {
  const labelRight = {
    position: 'right'
  } as const;

  const option = {
    title: {
      text: 'Bar Chart with Negative Value'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: [
        'ten',
        'nine',
        'eight',
        'seven',
        'six',
        'five',
        'four',
        'three',
        'two',
        'one'
      ]
    },
    series: [
      {
        name: 'Cost',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: '{b}'
        },
        data: [
          { value: -0.07, label: labelRight },
          { value: -0.09, label: labelRight },
          0.2,
          0.44,
          { value: -0.23, label: labelRight },
          0.08,
          { value: -0.17, label: labelRight },
          0.47,
          { value: -0.36, label: labelRight },
          0.18
        ]
      }
    ]
  };

  return (
    <View>
      <View className="header">这个case字体颜色和rn上不同</View>
      <Chart option={option} />
    </View>
  );
}
