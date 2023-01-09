import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=gauge-stage
 */
export default function stageSpeedGauge() {
  const initial = {
    series: [
      {
        type: 'gauge',
        axisLine: {
          lineStyle: {
            width: 30,
            color: [
              [0.3, '#67e0e3'],
              [0.7, '#37a2da'],
              [1, '#fd666d']
            ]
          }
        },
        pointer: {
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          distance: -30,
          length: 8,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        splitLine: {
          distance: -30,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 4
          }
        },
        axisLabel: {
          color: 'auto',
          distance: 40,
          fontSize: 16
        },
        detail: {
          valueAnimation: true,
          formatter: '{value} km/h',
          color: 'auto'
        },
        data: [
          {
            value: 70
          }
        ]
      }
    ]
  }
  const [option, setOption] = useState<any>(initial);
  let interval
  useEffect(() => {
    interval = setInterval(function () {
      option.series[0].data[0].value = +(Math.random() * 100).toFixed(2)
      setOption({...option});
    }, 2000);
    
    return () => {
      clearInterval(interval);
    };
  }, [])
  
  return (
    <View>
      <View className="header">阶段速度仪表盘</View>
      <View className="body">
        { option && <Chart option={option} /> }
      </View>
    </View>
  );
}
