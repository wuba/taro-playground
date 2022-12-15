import { setNavigationBarTitle } from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=mix-line-bar
 */

function generateData(count: number) {
  let baseValue = Math.random() * 1000;
  let time = +new Date(2011, 0, 1);
  let smallBaseValue: number;

  function next(idx: number) {
    smallBaseValue =
      idx % 30 === 0
        ? Math.random() * 700
        : smallBaseValue + Math.random() * 500 - 250;
    baseValue += Math.random() * 20 - 10;
    return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
  }

  const categoryData: string[] = [];
  const valueData: string[] = [];

  for (let i = 0; i < count; i++) {
    categoryData.push(
      echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time, false)
    );
    valueData.push(next(i).toFixed(2));
    time += 1000;
  }

  return {
    categoryData: categoryData,
    valueData: valueData
  };
}

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '大数据量柱图'
    });
  }, []);
  const dataCount = 5e5;
  const data = generateData(dataCount);

  const option = {
    title: {
      text: echarts.format.addCommas(dataCount) + ' Data',
      left: 10
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        }
        // saveAsImage: {
        //   pixelRatio: 2
        // }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      bottom: 90
    },
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider'
      }
    ],
    xAxis: {
      data: data.categoryData,
      silent: false,
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      }
    },
    yAxis: {
      splitArea: {
        show: false
      }
    },
    series: [
      {
        type: 'bar',
        data: data.valueData,
        // Set `large` for large data amount
        large: true
      }
    ]
  };

  return <Chart option={option} />;
}
