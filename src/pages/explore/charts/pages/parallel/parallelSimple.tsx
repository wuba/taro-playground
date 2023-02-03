import { View } from '@tarojs/components';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=parallel-simple
 */
export default function parallelSimple() {
  const option = {
    parallelAxis: [
      { dim: 0, name: 'Price' },
      { dim: 1, name: 'Net Weight' },
      { dim: 2, name: 'Amount' },
      {
        dim: 3,
        name: 'Score',
        type: 'category',
        data: ['Excellent', 'Good', 'OK', 'Bad']
      }
    ],
    series: {
      type: 'parallel',
      lineStyle: {
        width: 4
      },
      data: [
        [12.99, 100, 82, 'Good'],
        [9.99, 80, 77, 'OK'],
        [20, 120, 60, 'Excellent']
      ]
    }
  };
  return (
    <View>
      <View className="header">基础平行坐标</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
