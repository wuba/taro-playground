import { View } from '@tarojs/components';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=calendar-graph
 */
export default function calendarGraph() {
  const graphData = [
    ['2017-02-01', 260],
    ['2017-02-04', 200],
    ['2017-02-09', 279],
    ['2017-02-13', 847],
    ['2017-02-18', 241],
    ['2017-02-23', 411],
    ['2017-03-14', 985]
  ];
  const links = graphData.map(function(item, idx) {
    return {
      source: idx,
      target: idx + 1
    };
  });
  links.pop();
  function getVirtulData(year) {
    year = year || '2017';
    const date = +echarts.number.parseDate(year + '-01-01');
    const end = +echarts.number.parseDate(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: any = [];
    for (var time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 1000)
      ]);
    }
    return data;
  }
  const option = {
    tooltip: {},
    calendar: {
      top: 'middle',
      left: 'center',
      orient: 'vertical',
      cellSize: 40,
      yearLabel: {
        margin: 50,
        fontSize: 30
      },
      dayLabel: {
        firstDay: 1,
        nameMap: 'cn'
      },
      monthLabel: {
        nameMap: 'cn',
        margin: 15,
        fontSize: 20,
        color: '#999'
      },
      range: ['2017-02', '2017-03-31']
    },
    visualMap: {
      min: 0,
      max: 1000,
      type: 'piecewise',
      left: 'center',
      bottom: 20,
      inRange: {
        color: ['#5291FF', '#C7DBFF']
      },
      seriesIndex: [1],
      orient: 'horizontal'
    },
    series: [
      {
        type: 'graph',
        edgeSymbol: ['none', 'arrow'],
        coordinateSystem: 'calendar',
        links: links,
        symbolSize: 15,
        calendarIndex: 0,
        itemStyle: {
          color: 'yellow',
          shadowBlur: 9,
          shadowOffsetX: 1.5,
          shadowOffsetY: 3,
          shadowColor: '#555'
        },
        lineStyle: {
          color: '#D10E00',
          width: 1,
          opacity: 1
        },
        data: graphData,
        z: 20
      },
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData('2017')
      }
    ]
  };
  return (
    <View>
      <View className="header">日历关系图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
