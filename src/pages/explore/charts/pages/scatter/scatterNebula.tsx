import { View } from '@tarojs/components';
import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useEffect } from 'react';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-symbol-morph
 */

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '大规模星云散点图'
    });
  }, []);
  return <View>暂不支持</View>;
}
