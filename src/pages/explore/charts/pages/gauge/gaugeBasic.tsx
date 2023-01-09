import { View } from '@tarojs/components';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=gauge
 */
export default function gaugeBasic() {
  const option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        detail: {
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
      <View className="header">基础仪表盘</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
