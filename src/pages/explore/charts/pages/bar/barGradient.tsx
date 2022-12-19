import { setNavigationBarTitle } from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-gradient&lang=ts
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '特性示例-渐变色,阴影,点击缩放'
    });
  }, []);
  // prettier-ignore
  const dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
  // prettier-ignore
  const data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
  const yMax = 500;
  const dataShadow: number[] = [];

  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  const option = {
    title: {
      text: '特性示例：渐变色 阴影 点击缩放',
      subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
      textStyle: {
        fontFamily: 'PingFang SC' // skia 不生效，使用的是默认的 fontFamily
      }
    },
    xAxis: {
      data: dataAxis.map(it => ({
        value: it,
        textStyle: { fontFamily: 'PingFang SC' }
      })),
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: data
      }
    ]
  };

  const onInit = useCallback(myChart => {
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function(params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
  }, []);

  return <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />;
}
