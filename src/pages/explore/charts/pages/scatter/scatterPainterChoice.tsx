import { setNavigationBarTitle, request, showToast } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
import { ROOT_PATH } from '../../constant';
// import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-painter-choice
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: 'Master Painter Color Choices Throughout History'
    });
  }, []);
  const onInit = useCallback(myChart => {
    myChart.showLoading();
    request({
      url: `${ROOT_PATH}/data/asset/data/masterPainterColorChoice.json`,
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
        myChart.hideLoading();
        var data = res?.data[0].x.map(function(x, idx) {
          return [+x, +res?.data[0].y[idx]];
        });
        myChart.setOption({
          title: {
            text: 'Master Painter Color Choices Throughout History',
            subtext: 'Data From Plot.ly',
            left: 'right'
          },
          xAxis: {
            type: 'value',
            splitLine: {
              show: false
            },
            scale: true,
            splitNumber: 5,
            max: 'dataMax',
            axisLabel: {
              formatter: function(val) {
                return val + 's';
              }
            }
          },
          yAxis: {
            type: 'value',
            min: 0,
            max: 360,
            interval: 60,
            name: 'Hue',
            splitLine: {
              show: false
            }
          },
          series: [
            {
              name: 'scatter',
              type: 'scatter',
              symbolSize: function(val, param) {
                return (
                  res?.data[0].marker.size[param.dataIndex] /
                  res?.data[0].marker.sizeref
                );
              },
              itemStyle: {
                color: function(param) {
                  return res?.data[0].marker.color[param.dataIndex];
                }
              },
              data: data
            }
          ]
        });
        myChart.hideLoading();
      }
    });
  }, []);

  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
