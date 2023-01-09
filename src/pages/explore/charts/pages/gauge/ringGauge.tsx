import { View } from '@tarojs/components';
import { useEffect, useState, useRef } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=gauge-ring
 */
export default function ringGauge() {
  const gaugeData = [
    {
      value: 20,
      name: 'Perfect',
      title: {
        offsetCenter: ['0%', '-30%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '-20%']
      }
    },
    {
      value: 40,
      name: 'Good',
      title: {
        offsetCenter: ['0%', '0%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '10%']
      }
    },
    {
      value: 60,
      name: 'Commonly',
      title: {
        offsetCenter: ['0%', '30%']
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ['0%', '40%']
      }
    }
  ];
  const initialData = {
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            borderWidth: 1,
            borderColor: '#464646'
          }
        },
        axisLine: {
          lineStyle: {
            width: 40
          }
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          fontSize: 14
        },
        detail: {
          width: 50,
          height: 14,
          fontSize: 14,
          color: 'auto',
          borderColor: 'auto',
          borderRadius: 20,
          borderWidth: 1,
          formatter: '{value}%'
        }
      }
    ]
  };
  const [option, setOption] = useState<any>(initialData);
  let interval
  useEffect(() => {
    interval = setInterval(function () {
      initialData.series[0].data[0].value = +(Math.random() * 100).toFixed(2);
      initialData.series[0].data[1].value = +(Math.random() * 100).toFixed(2);
      initialData.series[0].data[2].value = +(Math.random() * 100).toFixed(2);
      initialData.series[0].pointer.show = false
      setOption({...option});
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [option])
  
  return (
    <View>
      <View className="header">得分环</View>
      <View className="body">
        { <Chart option={option} /> }
      </View>
    </View>
  );
}
