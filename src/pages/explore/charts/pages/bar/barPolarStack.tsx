import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/*
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-polar-stack
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({ title: '极坐标系下的堆叠柱状图' });
  }, []);
  const option = {
    angleAxis: {},
    radiusAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu'],
      z: 10
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      }
    ],
    legend: {
      show: true,
      data: ['A', 'B', 'C']
    }
  };

  return <Chart option={option} />;
}
