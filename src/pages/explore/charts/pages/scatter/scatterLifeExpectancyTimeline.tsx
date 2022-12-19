import { setNavigationBarTitle, request, showToast } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
import { ROOT_PATH } from '../../constant';
// import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-life-expectancy-timeline
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '各国人均寿命与GDP关系演变'
    });
  }, []);
  const onInit = useCallback(myChart => {
    myChart.showLoading();
    request({
      url: `${ROOT_PATH}/data/asset/data/life-expectancy.json`,
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
        // 待补充
        myChart.hideLoading();
      }
    });
  }, []);

  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
