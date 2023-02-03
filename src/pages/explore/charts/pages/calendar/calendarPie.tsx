import { View, ScrollView } from '@tarojs/components';
import * as echarts from 'echarts';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=calendar-pie
 */
export default function calendarPie() {
  // This example requires ECharts v5.4.0 or later
  const cellSize = [60, 60];
  const pieRadius = 20;
  function getVirtualData() {
    const date = +echarts.time.parse('2017-02-01');
    const end = +echarts.time.parse('2017-03-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [] as any;
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }
  const scatterData = getVirtualData();
  const pieSeries = scatterData.map(function (item, index) {
    return {
      type: 'pie',
      id: 'pie-' + index,
      center: item[0],
      radius: pieRadius,
      coordinateSystem: 'calendar',
      label: {
        formatter: '{c}',
        position: 'inside'
      },
      data: [
        { name: 'Work', value: Math.round(Math.random() * 24) },
        { name: 'Entertainment', value: Math.round(Math.random() * 24) },
        { name: 'Sleep', value: Math.round(Math.random() * 24) }
      ]
    };
  });
  const option = {
    tooltip: {},
    legend: {
      data: ['Work', 'Entertainment', 'Sleep'],
      bottom: 10
    },
    calendar: {
      top: 'middle',
      left: 'center',
      orient: 'vertical',
      cellSize: cellSize,
      yearLabel: {
        show: false,
        fontSize: 20
      },
      dayLabel: {
        margin: 10,
        firstDay: 1,
        nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      monthLabel: {
        show: false
      },
      range: ['2017-02']
    },
    series: [
      {
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 0,
        label: {
          show: true,
          formatter: function (params) {
            return echarts.time.format(params.value[0], '{dd}', false);
          },
          offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          fontSize: 14
        },
        data: scatterData
      },
      ...pieSeries
    ]
  };

  return (
    <View>
      <View className="header">日历饼图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
