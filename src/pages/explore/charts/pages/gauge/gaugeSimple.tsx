import { View } from '@tarojs/components';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=gauge-simple
 */
export default function gaugeSimple() {
  const option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}'
        },
        data: [
          {
            value: 50,
            name: 'SCORE'
          }
        ]
      }
    ]
  };
  return (
    <View>
      <View className="header">仪表盘，带标签数字动画的基础</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
