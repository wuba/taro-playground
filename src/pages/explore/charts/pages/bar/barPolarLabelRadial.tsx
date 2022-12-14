import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-polar-label-radial
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '极坐标柱状图标签'
    });
  }, []);
  const option = {
    title: [
      {
        text: 'Radial Polar Bar Label Position (middle)'
      }
    ],
    polar: {
      radius: [30, '80%']
    },
    radiusAxis: {
      max: 4
    },
    angleAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd'],
      startAngle: 75
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle',
        formatter: '{b}: {c}'
      }
    },
    animation: false
  };
  return <Chart option={option} />;
}
