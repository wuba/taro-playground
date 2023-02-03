import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-data-color
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '自定义单个柱子颜色'
    });
  }, []);
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: '#a90000'
            }
          },
          150,
          80,
          70,
          110,
          130
        ],
        type: 'bar'
      }
    ]
  };
  return <Chart option={option} />;
}
