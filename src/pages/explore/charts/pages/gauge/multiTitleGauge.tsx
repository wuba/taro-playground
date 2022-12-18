import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=gauge-multi-title
 */
export default function multiTitleGauge() {
  const gaugeData = [
    {
      value: 20,
      name: 'Good',
      title: {
        offsetCenter: ['-40%', '80%']
      },
      detail: {
        offsetCenter: ['-40%', '95%']
      }
    },
    {
      value: 40,
      name: 'Better',
      title: {
        offsetCenter: ['0%', '80%']
      },
      detail: {
        offsetCenter: ['0%', '95%']
      }
    },
    {
      value: 60,
      name: 'Perfect',
      title: {
        offsetCenter: ['40%', '80%']
      },
      detail: {
        offsetCenter: ['40%', '95%']
      }
    }
  ] as any;
  const initial = {
    series: [
      {
        type: 'gauge',
        anchor: {
          show: true,
          showAbove: true,
          size: 18,
          itemStyle: {
            color: '#FAC858'
          }
        },
        pointer: {
          icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
          width: 8,
          length: '80%',
          offsetCenter: [0, '8%']
        },
        progress: {
          show: true,
          overlap: true,
          roundCap: true
        },
        axisLine: {
          roundCap: true
        },
        data: gaugeData,
        title: {
          fontSize: 14
        },
        detail: {
          width: 40,
          height: 14,
          fontSize: 14,
          color: '#fff',
          backgroundColor: 'auto',
          borderRadius: 3,
          formatter: '{value}%'
        }
      }
    ]
  }
  const [option, setOption] = useState<any>(initial);
  let interval
  useEffect(() => {
    interval = setInterval(function () {
      initial.series[0].data[0].value = +(Math.random() * 100).toFixed(2);
      initial.series[0].data[1].value = +(Math.random() * 100).toFixed(2);
      initial.series[0].data[2].value = +(Math.random() * 100).toFixed(2);
      setOption({...initial});
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
