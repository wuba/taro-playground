import { setNavigationBarTitle, request, showToast } from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=map-usa-pie&lang=ts
 */

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '在地图上显示饼图'
    });
  }, []);

  const getOption = usaJson => {
    echarts.registerMap('USA', usaJson, {
      Alaska: {
        left: -131,
        top: 25,
        width: 15
      },
      Hawaii: {
        left: -110,
        top: 28,
        width: 5
      },
      'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
      }
    });
    function randomPieSeries(center: string | number[], radius: number): any {
      const data = ['A', 'B', 'C', 'D'].map(t => {
        return {
          value: Math.round(Math.random() * 100),
          name: 'Category ' + t
        };
      });
      return {
        type: 'pie',
        coordinateSystem: 'geo',
        tooltip: {
          formatter: '{b}: {c} ({d}%)'
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        animationDuration: 0,
        radius,
        center,
        data
      };
    }

    return {
      geo: {
        map: 'USA',
        roam: true,
        itemStyle: {
          areaColor: '#e7e8ea'
        }
      },
      tooltip: {},
      legend: {},
      series: [
        randomPieSeries([-86.753504, 33.01077], 15),
        randomPieSeries([-116.853504, 39.8], 25),
        randomPieSeries([-99, 31.5], 30),
        randomPieSeries(
          // it's also supported to use geo region name as center since v5.4.1
          +echarts.version
            .split('.')
            .slice(0, 3)
            .join('') > 540
            ? 'Maine'
            : // or you can only use the LngLat array
              [-69, 45.5],
          12
        )
      ]
    };
  };

  const onInit = useCallback(myChart => {
    myChart.showLoading();
    request({
      url: `${ROOT_PATH}/data/asset/geo/USA.json`,
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      fail: err => {
        console.log(err);
        showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      },
      success: res => {
        console.log(res);
        myChart.setOption(getOption(res?.data));
        myChart.hideLoading();
      }
    });
  }, []);
  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
