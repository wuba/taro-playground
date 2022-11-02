import { View } from '@tarojs/components';
// import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';

/**
https://echarts.apache.org/examples/zh/editor.html?c=boxplot-multi
 */

export default function boxplotMulti() {
  // Generate data.
  function makeData() {
    let data: any = [];
    for (let i = 0; i < 18; i++) {
      let cate: any = [];
      for (let j = 0; j < 100; j++) {
        cate.push(Math.random() * 200);
      }
      data.push(cate);
    }
    return data;
  }
  const data0 = makeData();
  const data1 = makeData();
  const data2 = makeData();
  const option = {
    title: {
      text: 'Multiple Categories',
      left: 'center'
    },
    dataset: [
      {
        source: data0
      },
      {
        source: data1
      },
      {
        source: data2
      },
      {
        fromDatasetIndex: 0,
        transform: { type: 'boxplot' }
      },
      {
        fromDatasetIndex: 1,
        transform: { type: 'boxplot' }
      },
      {
        fromDatasetIndex: 2,
        transform: { type: 'boxplot' }
      }
    ],
    legend: {
      top: '10%'
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '10%',
      top: '20%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: true
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: 'Value',
      min: -400,
      max: 600,
      splitArea: {
        show: false
      }
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        show: true,
        type: 'slider',
        top: '90%',
        xAxisIndex: [0],
        start: 0,
        end: 20
      }
    ],
    series: [
      {
        name: 'category0',
        type: 'boxplot',
        datasetIndex: 3
      },
      {
        name: 'category1',
        type: 'boxplot',
        datasetIndex: 4
      },
      {
        name: 'category2',
        type: 'boxplot',
        datasetIndex: 5
      }
    ]
  };

  return (
    <View>
      <View className="header">多系列盒须图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  );
}
