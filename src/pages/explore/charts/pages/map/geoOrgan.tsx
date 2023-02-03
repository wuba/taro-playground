import { setNavigationBarTitle } from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import svg from '../assets/organ';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=geo-organ
 */

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '内脏数据（SVG）'
    });
  }, []);

  const getOption = () => {
    return {
      tooltip: {},
      geo: {
        left: 10,
        right: '50%',
        map: 'organ_diagram',
        selectedMode: 'multiple',
        emphasis: {
          focus: 'self',
          itemStyle: {
            color: null
          },
          label: {
            position: 'bottom',
            distance: 0,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        },
        blur: {},
        select: {
          itemStyle: {
            color: '#b50205'
          },
          label: {
            show: false,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        }
      },
      grid: {
        left: '60%',
        top: '20%',
        bottom: '20%'
      },
      xAxis: {},
      yAxis: {
        data: [
          'heart',
          'large-intestine',
          'small-intestine',
          'spleen',
          'kidney',
          'lung',
          'liver'
        ]
      },
      series: [
        {
          type: 'bar',
          emphasis: {
            focus: 'self'
          },
          data: [121, 321, 141, 52, 198, 289, 139]
        }
      ]
    };
  };

  const onInit = useCallback(myChart => {
    myChart.showLoading();
    echarts.registerMap('organ_diagram', { svg });
    myChart.setOption(getOption());
    myChart.on('mouseover', { seriesIndex: 0 }, function(event) {
      myChart.dispatchAction({
        type: 'highlight',
        geoIndex: 0,
        name: event.name
      });
    });
    myChart.on('mouseout', { seriesIndex: 0 }, function(event) {
      myChart.dispatchAction({
        type: 'downplay',
        geoIndex: 0,
        name: event.name
      });
    });
    myChart.hideLoading();
  }, []);
  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
