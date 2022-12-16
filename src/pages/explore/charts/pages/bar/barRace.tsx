import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useCallback, useEffect, useRef } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-race
 */

export default function Index() {
  const timer = useRef<any>([]);
  useEffect(() => {
    setNavigationBarTitle({
      title: '动态排序柱状图'
    });
    return () => timer.current.forEach(clearInterval);
  }, []);

  const data: number[] = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }

  const option = {
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      max: 2 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: 'X',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };

  const onInit = useCallback(myChart => {
    function run() {
      for (let i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
          data[i] += Math.round(Math.random() * 2000);
        } else {
          data[i] += Math.round(Math.random() * 200);
        }
      }
      myChart.setOption({
        series: [
          {
            type: 'bar',
            data
          }
        ]
      });
    }
    setTimeout(function() {
      run();
    }, 0);
    timer.current.push(
      setInterval(function() {
        run();
      }, 3000)
    );
  }, []);
  return <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />;
}
