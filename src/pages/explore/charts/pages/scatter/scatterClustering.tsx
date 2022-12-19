import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-clustering
 */
export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '数据聚合（还没写）'
    });
  }, []);

  return <Chart option={{}} />;
}
