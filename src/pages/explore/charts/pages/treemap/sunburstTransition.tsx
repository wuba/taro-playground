import { setNavigationBarTitle, request, showToast } from '@tarojs/taro';
import { useEffect, useCallback, useRef } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function SunburstTransition() {
  const myChart = useRef<any>([]);
  useEffect(() => {
    let timer;
    setNavigationBarTitle({
      title: '矩形树图和旭日图的动画过渡'
    });
    request({
      url: 'https://echarts.apache.org/examples/data/asset/data/echarts-package-size.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const treemapOption = {
          series: [
            {
              type: 'treemap',
              id: 'echarts-package-size',
              animationDurationUpdate: 1000,
              roam: false,
              nodeClick: undefined,
              data: res?.data?.children,
              universalTransition: true,
              label: {
                show: true
              },
              breadcrumb: {
                show: false
              }
            }
          ]
        };
        const sunburstOption = {
          series: [
            {
              type: 'sunburst',
              id: 'echarts-package-size',
              radius: ['20%', '90%'],
              animationDurationUpdate: 1000,
              nodeClick: undefined,
              data: res?.data?.children,
              universalTransition: true,
              itemStyle: {
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,.5)'
              },
              label: {
                show: false
              }
            }
          ]
        };
        let currentOption = treemapOption as any;
        myChart.current.map(chart => {
          chart.setOption(currentOption)
        });
        timer = setInterval(function () {
          currentOption = currentOption === treemapOption ? sunburstOption : treemapOption;
          myChart.current.map(chart => {
            chart.setOption(currentOption)
          });
        }, 3000);
      },
      fail: err => {
        console.log(err);
        showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      }
    });
    return () => {
      clearInterval(timer)
    }
  }, []);
  const onInit = useCallback(chart => {
    myChart.current.push(chart);
  }, []);
  return <Chart onSVGInit={onInit} onSkiaInit={onInit} />;
}
