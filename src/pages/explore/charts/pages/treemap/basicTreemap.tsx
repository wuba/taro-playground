import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';

export default function basicTreemap() {
  const [option, setOption] = useState<any>();
  useEffect(() => {
    setOption({
      series: [
        {
          type: 'treemap',
          data: [
            {
              name: 'nodeA',
              value: 10,
              children: [
                {
                  name: 'nodeAa',
                  value: 4
                },
                {
                  name: 'nodeAb',
                  value: 6
                }
              ]
            },
            {
              name: 'nodeB',
              value: 20,
              children: [
                {
                  name: 'nodeBa',
                  value: 20,
                  children: [
                    {
                      name: 'nodeBa1',
                      value: 20
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  }, []);
  return option ? (
    <View>
      <View className="header">基础矩形树图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>Loading...</View>
  );
}
