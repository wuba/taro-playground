import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=line-graphic
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({ title: '自定义图形组件' });
  }, []);
  const option = {
    legend: {
      data: ['Altitude (km) vs Temperature (°C)']
    },
    tooltip: {
      z: 200,
      trigger: 'axis',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'PingFang SC' // skia 不生效，使用的是默认的 fontFamily
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { onZero: false },
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: true,
      data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    graphic: [
      {
        type: 'group',
        rotation: Math.PI / 4,
        bounding: 'raw',
        right: 110,
        bottom: 110,
        z: 100,
        children: [
          {
            type: 'rect',
            left: 'center',
            top: 'center',
            z: 100,
            shape: {
              width: 400,
              height: 50
            },
            style: {
              fill: 'rgba(0,0,0,0.3)'
            }
          },
          {
            type: 'text',
            left: 'center',
            top: 'center',
            z: 100,
            style: {
              textAlign: 'center',
              fill: '#fff',
              text: 'ECHARTS LINE CHART',
              fontWeight: 'bold',
              fontSize: '26px',
              fontFamily: 'sans-serif'
            }
          }
        ]
      },
      {
        type: 'group',
        left: '10%',
        top: 'center',
        children: [
          {
            type: 'rect',
            z: 100,
            left: 'center',
            top: 'middle',
            shape: {
              width: 240,
              height: 90
            },
            style: {
              fill: '#fff',
              stroke: '#555',
              lineWidth: 1,
              shadowBlur: 8,
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              shadowColor: 'rgba(0,0,0,0.2)'
            }
          },
          {
            type: 'text',
            z: 100,
            left: 'center',
            top: 'middle',
            style: {
              fill: '#333',
              width: 200,
              lineHeight: 14,
              textAlign: 'center',
              overflow: 'break',
              text:
                'xAxis represents temperature in °C, yAxis represents altitude in km, An image watermark in the upper right, This text block can be placed in any place',
              fontSize: 14,
              fontFamily: 'PingFang SC'
            }
          }
        ]
      }
    ],
    series: [
      {
        name: '高度(km)与气温(°C)变化关系',
        type: 'line',
        smooth: true,
        data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5],
        lineStyle: {
          color: 'blue'
        },
        itemStyle: {
          color: 'blue'
        }
      }
    ]
  };

  return <Chart option={option} />;
}
