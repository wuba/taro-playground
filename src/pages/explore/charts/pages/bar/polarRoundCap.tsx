import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/*
 * https://echarts.apache.org/examples/zh/editor.html?c=polar-roundCap
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({ title: '圆角环形图' });
  }, []);
  const option = {
    angleAxis: {
      max: 2,
      startAngle: 30,
      splitLine: {
        show: false
      }
    },
    radiusAxis: {
      type: 'category',
      data: ['v', 'w', 'x', 'y', 'z'],
      z: 10
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: [4, 3, 2, 1, 0],
        coordinateSystem: 'polar',
        name: 'Without Round Cap',
        itemStyle: {
          borderColor: 'red',
          opacity: 0.8,
          borderWidth: 1
        }
      },
      {
        type: 'bar',
        data: [4, 3, 2, 1, 0],
        coordinateSystem: 'polar',
        name: 'With Round Cap',
        roundCap: true,
        itemStyle: {
          borderColor: 'green',
          opacity: 0.8,
          borderWidth: 1
        }
      }
    ],
    legend: {
      show: true,
      data: ['Without Round Cap', 'With Round Cap']
    }
  };

  return <Chart option={option} />;
}
