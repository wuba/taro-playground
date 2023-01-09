import { View, ScrollView } from '@tarojs/components';
import * as echarts from 'echarts';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=calendar-horizontal
 */
export default function heatmapHorizontal() {
  function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [] as any;
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 1000)
      ]);
    }
    return data;
  }
  const option = {
    tooltip: {
      position: 'top'
    },
    visualMap: {
      min: 0,
      max: 1000,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: 'top'
    },
    calendar: [
      {
        range: '2017',
        cellSize: ['auto', 20]
      },
      {
        top: 260,
        range: '2016',
        cellSize: ['auto', 20]
      },
      {
        top: 450,
        range: '2015',
        cellSize: ['auto', 20],
        right: 5
      }
    ],
    series: [
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: getVirtualData('2017')
      },
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: getVirtualData('2016')
      },
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 2,
        data: getVirtualData('2015')
      }
    ]
  };

  return (
    <View>
      <View className="header">横向日历图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
