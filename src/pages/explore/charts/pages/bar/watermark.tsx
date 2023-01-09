import { View } from '@tarojs/components';
import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useEffect } from 'react';
// import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=mix-timeline-finance
 */

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '水印 - ECharts 下载统计'
    });
  }, []);

  return <View>暂不支持canvas</View>; //<Chart option={option} />;
}
