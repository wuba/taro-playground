import Taro from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=dynamic-data2&lang=ts
 */

interface DataItem {
  name: string;
  value: [string, number];
}

export default function DynamicData2() {
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '动态数据 + 时间坐标轴'
    });
  }, []);

  const option = null;

  return option && <Chart option={option} />;
}
