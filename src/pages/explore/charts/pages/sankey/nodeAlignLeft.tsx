import { View } from '@tarojs/components';
import Chart from '../../echarts';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import '../style.scss';

export default function nodeAlignLeft() {
  const [option, setOption] = useState<any>();

  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/energy.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        setOption({
          title: {
            text: 'Node Align Right'
          },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'sankey',
              emphasis: {
                focus: 'adjacency'
              },
              nodeAlign: 'left',
              data: res?.data.nodes,
              links: res?.data.links,
              lineStyle: {
                color: 'source',
                curveness: 0.5
              }
            }
          ]
        })
        
      },
      fail: err => {
        console.log(err);
        Taro.showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      }
    });
  }, []);

  return (
    <View>
      <View className="header">桑基图左对齐布局</View>
      <View className="body">
      {option && <Chart option={option} />}
      </View>
    </View>
  );
}
