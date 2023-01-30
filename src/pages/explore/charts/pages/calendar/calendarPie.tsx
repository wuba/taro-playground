import * as echarts from 'echarts/core';
import { setNavigationBarTitle } from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=calendar-pie
 */
export default function ClendarPie() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '日历饼图'
    });
  }, []);
  const cellSize = [80, 80];
  const pieRadius = 30;

  type DataItem = [string, number];

  function getVirtulData() {
    let date = +echarts.number.parseDate('2017-02-01');
    let end = +echarts.number.parseDate('2017-03-01');
    let dayTime = 3600 * 24 * 1000;
    let data: DataItem[] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }
  const scatterData = getVirtulData();
  const pieSeries = scatterData.map(function(item, index) {
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
      bottom: 20
    },
    calendar: {
      top: 'middle',
      left: 'center',
      orient: 'vertical',
      cellSize: cellSize,
      yearLabel: {
        show: false,
        fontSize: 30
      },
      dayLabel: {
        margin: 20,
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
          formatter: function(params) {
            return echarts.time.format(params.value[0], '{dd}', false);
          },
          offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          fontSize: 15
        },
        data: scatterData
      },
      ...pieSeries
    ]
  };

  return <Chart option={option} height={500} />;
}
