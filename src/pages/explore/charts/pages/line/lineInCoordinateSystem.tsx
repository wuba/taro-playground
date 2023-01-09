import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=line-in-cartesian-coordinate-system
 */
export default function CoordinateSystem() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '双数值轴折线图'
    });
  }, []);
  const option = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        data: [
          [10, 40],
          [50, 100],
          [40, 20]
        ],
        type: 'line'
      }
    ]
  };

  return <Chart option={option} />;
}
