import { setNavigationBarTitle, showToast, request } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
// import * as echarts from 'echarts/core';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=mix-zoom-on-value
 */
export default function Index() {
  const getOption = data => {
    return {
      title: {
        text: 'Dispersion of house price based on the area',
        left: 'center',
        top: 0
      },
      visualMap: {
        min: 15202,
        max: 159980,
        dimension: 1,
        orient: 'vertical',
        right: 10,
        top: 'center',
        text: ['HIGH', 'LOW'],
        calculable: true,
        inRange: {
          color: ['#f2c31a', '#24b7f2']
        }
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross'
        }
      },
      xAxis: [
        {
          type: 'value'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'price-area',
          type: 'scatter',
          symbolSize: 5,
          data: data
        }
      ]
    };
  };
  useEffect(() => {
    setNavigationBarTitle({
      title: '流式渲染和视觉映射操作'
    });
  }, []);

  const onInit = useCallback(myChart => {
    myChart.showLoading();
    request({
      url: `${ROOT_PATH}/data/asset/data/house-price-area2.json`,
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
