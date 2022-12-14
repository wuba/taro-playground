import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=line-polar2
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '极坐标双数值轴（二）'
    });
  }, []);
  const data: number[][] = [];
  for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
  }
  const option = {
    title: {
      text: 'Two Value-Axes in Polar'
    },
    legend: {
      data: ['line']
    },
    polar: {
      center: ['50%', '54%']
    },
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
    radiusAxis: {
      min: 0
    },
    series: [
      {
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
        data: data
      }
    ],
    animationDuration: 2000
  };
  return <Chart option={option} />;
}
