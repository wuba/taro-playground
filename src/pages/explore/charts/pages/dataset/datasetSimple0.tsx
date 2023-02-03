import { setNavigationBarTitle } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/*
 * https://echarts.apache.org/examples/zh/editor.html?c=dataset-simple0
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({ title: '最简单的数据集（dataset）' });
  }, []);
  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', '2015', '2016', '2017'],
        ['Matcha Latte', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  return (<View>
    <View className="header">最简单的数据集（dataset）</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  )
}
