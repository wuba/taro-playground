import { View } from '@tarojs/components';
import { setNavigationBarTitle, showToast, request } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
// import * as echarts from 'echarts/core';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-nutrients-matrix
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '营养分布散点矩阵'
    });
  }, []);

  const onInit = useCallback(myChart => {
    myChart.showLoading();
    request({
      url: `${ROOT_PATH}/data/asset/data/nutrients.json`,
      data: {},
      timeout: 9000,
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      fail: err => {
        console.log(err, `${ROOT_PATH}/data/asset/data/nutrients.json`);
        showToast({
          icon: 'none',
          title: '数据请求偶尔会超时，多试几次就好了'
        });
      },
      success: res => {
        // 待处理
      }
    });
  }, []);

  return <View>待实现</View>; // <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
