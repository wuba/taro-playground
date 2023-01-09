import { View, ScrollView } from '@tarojs/components';
import * as echarts from 'echarts';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=calendar-simple
 */
export default function calendarSimple() {
  function getVirtulData(year: string) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(year + '-12-31');
    var dayTime = 3600 * 24 * 1000;
    var data: any = [];
    for (var time = date; time <= end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

  const option = {
    visualMap: {
      show: false,
      min: 0,
      max: 10000
    },
    calendar: {
      range: '2017'
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtulData('2017')
    }
  };

  return (
    <View>
      <View className="header">基础日历图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
