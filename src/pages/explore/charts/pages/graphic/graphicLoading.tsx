import { View } from '@tarojs/components';
// import * as echarts from 'echarts';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=graphic-loading
 */
export default function graphicLoading() {
  const option = {
    graphic: {
      elements: [
        {
          type: 'group',
          left: 'center',
          top: 'center',
          children: new Array(7).fill(0).map((val, i) => ({
            type: 'rect',
            x: i * 20,
            shape: {
              x: 0,
              y: -40,
              width: 10,
              height: 80
            },
            style: {
              fill: '#5470c6'
            },
            keyframeAnimation: {
              duration: 1000,
              delay: i * 200,
              loop: true,
              keyframes: [
                {
                  percent: 0.5,
                  scaleY: 0.3,
                  easing: 'cubicIn'
                },
                {
                  percent: 1,
                  scaleY: 1,
                  easing: 'cubicOut'
                }
              ]
            }
          }))
        }
      ]
    }
  };

  return (
    <View>
      <View className="header">加载动画</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
