import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';

/**
https://echarts.apache.org/examples/zh/editor.html?c=radar-custom
 */

export default function RadarCustom() {
  useEffect(() => {
    setNavigationBarTitle({ title: '自定义雷达图' })
  }, []);
  const option = {
    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
    title: {
      text: 'Customized Radar Chart'
    },
    legend: {},
    radar: [
      {
        indicator: [
          { text: 'Indicator1' },
          { text: 'Indicator2' },
          { text: 'Indicator3' },
          { text: 'Indicator4' },
          { text: 'Indicator5' }
        ],
        center: ['25%', '50%'],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '【{value}】',
          color: '#428BD4'
        },
        splitArea: {
          areaStyle: {
            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)'
          }
        }
      },
      {
        indicator: [
          { text: 'Indicator1', max: 150 },
          { text: 'Indicator2', max: 150 },
          { text: 'Indicator3', max: 150 },
          { text: 'Indicator4', max: 120 },
          { text: 'Indicator5', max: 108 },
          { text: 'Indicator6', max: 72 }
        ],
        center: ['75%', '50%'],
        radius: 120,
        axisName: {
          color: '#fff',
          backgroundColor: '#666',
          borderRadius: 3,
          padding: [3, 5]
        }
      }
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4
          }
        },
        data: [
          {
            value: [100, 8, 0.4, -80, 2000],
            name: 'Data A'
          },
          {
            value: [60, 5, 0.3, -100, 1500],
            name: 'Data B',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)'
            }
          }
        ]
      },
      {
        type: 'radar',
        radarIndex: 1,
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: 'Data C',
            symbol: 'rect',
            symbolSize: 12,
            lineStyle: {
              type: 'dashed'
            },
            label: {
              show: true,
              formatter: function(params) {
                return params.value;
              }
            }
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: 'Data D',
            areaStyle: {
              // fixme: can not use RadialGradient
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  color: 'rgba(255, 145, 124, 0.1)',
                  offset: 0
                },
                {
                  color: 'rgba(255, 145, 124, 0.9)',
                  offset: 1
                }
              ])
            }
          }
        ]
      }
    ]
  };
  return <Chart option={option} />;
}
