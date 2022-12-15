// import * as echarts from 'echarts/core';
import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * 这个case上的小水滴没出来
 * https://echarts.apache.org/examples/zh/editor.html?c=bar1
 */
export default function BarPolarRealEstate() {
  useEffect(() => {
    setNavigationBarTitle({ title: '某地区蒸发量和降水量' });
  }, []);
  const option = {
    title: {
      text: 'Rainfall vs Evaporation',
      subtext: 'Fake Data'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Rainfall', 'Evaporation']
    },
    toolbox: {
      show: true,
      feature: {
        // dataView: { show: true, readOnly: false }, // 数据显示不可用
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true }
        // saveAsImage: { show: true } // 保存图片不可用
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Rainfall',
        type: 'bar',
        data: [
          2.0,
          4.9,
          7.0,
          23.2,
          25.6,
          76.7,
          135.6,
          162.2,
          32.6,
          20.0,
          6.4,
          3.3
        ],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'Evaporation',
        type: 'bar',
        data: [
          2.6,
          5.9,
          9.0,
          26.4,
          28.7,
          70.7,
          175.6,
          182.2,
          48.7,
          18.8,
          6.0,
          2.3
        ],
        markPoint: {
          data: [
            { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
            { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  };

  return <Chart option={option} />;
}
