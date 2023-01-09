import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=line-polar
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '极坐标双数值轴'
    });
  }, []);
  const data: number[][] = [];
  for (let i = 0; i <= 100; i++) {
    let theta = (i / 100) * 360;
    let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
    data.push([r, theta]);
  }
  const option = {
    title: {
      text: 'Two Value-Axes in Polar'
    },
    legend: {
      data: ['line']
    },
    polar: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    angleAxis: {
      type: 'value',
      startAngle: 0
    },
    radiusAxis: {},
    series: [
      {
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        data: data
      }
    ]
  };
  return <Chart option={option} />;
}
