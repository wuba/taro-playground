import { Text } from '@tarojs/components';
import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-brush&lang=ts
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '柱状图框选'
    });
  }, []);

  let xAxisData: string[] = [];
  let data1: number[] = [];
  let data2: number[] = [];
  let data3: number[] = [];
  let data4: number[] = [];

  for (let i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push(+(Math.random() * 2).toFixed(2));
    data2.push(+(Math.random() * 5).toFixed(2));
    data3.push(+(Math.random() + 0.3).toFixed(2));
    data4.push(+Math.random().toFixed(2));
  }

  var emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };

  const option = {
    legend: {
      data: ['bar', 'bar2', 'bar3', 'bar4'],
      left: '10%'
    },
    brush: {
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 0
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack']
        },
        dataView: {}
      }
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      name: 'X Axis',
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false }
    },
    yAxis: {},
    grid: {
      bottom: 100
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data1
      },
      {
        name: 'bar2',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data2
      },
      {
        name: 'bar3',
        type: 'bar',
        stack: 'two',
        emphasis: emphasisStyle,
        data: data3
      },
      {
        name: 'bar4',
        type: 'bar',
        stack: 'two',
        emphasis: emphasisStyle,
        data: data4
      }
    ]
  };

  const onInit = useCallback(myChart => {
    myChart.on('brushSelected', function(params: any) {
      var brushed: string[] = [];
      var brushComponent = params.batch[0];

      for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
      }

      myChart.setOption({
        title: {
          backgroundColor: '#333',
          text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
          bottom: 0,
          right: '10%',
          width: 100,
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Text>有点卡顿，交互待优化</Text>
      <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />
    </>
  );
}
