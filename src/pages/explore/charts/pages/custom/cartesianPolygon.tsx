import { View } from '@tarojs/components';
import Chart from '../../echarts';
import * as echarts from 'echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=custom-cartesian-polygon
 */
export default function cartesianPolygon() {
  const data = [] as any;
  const dataCount = 7;
  for (let i = 0; i < dataCount; i++) {
    data.push([
      echarts.number.round(Math.random() * 100),
      echarts.number.round(Math.random() * 400)
    ]);
  }
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['bar', 'error']
    },
    dataZoom: [
      {
        type: 'slider',
        filterMode: 'none'
      },
      {
        type: 'inside',
        filterMode: 'none'
      }
    ],
    xAxis: {},
    yAxis: {},
    series: [
      {
        type: 'custom',
        renderItem: function (params, api) {
          if (params.context.rendered) {
            return;
          }
          params.context.rendered = true;
          let points = [] as any;
          for (let i = 0; i < data.length; i++) {
            points.push(api.coord(data[i]));
          }
          let color = api.visual('color');
          return {
            type: 'polygon',
            transition: ['shape'],
            shape: {
              points: points
            },
            style: api.style({
              fill: color,
              stroke: echarts.color.lift(color, 0.1)
            })
          };
        },
        clip: true,
        data: data
      }
    ]
  };
  return (
    <View>
      <View className="header">自定义多边形图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
