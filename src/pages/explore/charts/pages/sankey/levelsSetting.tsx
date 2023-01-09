import { View } from '@tarojs/components';
import Chart from '../../echarts';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import '../style.scss';

export default function() {
  const [option, setOption] = useState<any>();

  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/product.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        setOption({
          title: {
            text: 'Sankey Diagram'
          },
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'sankey',
              data: res?.data?.nodes,
              links: res?.data?.links,
              emphasis: {
                focus: 'adjacency'
              },
              levels: [
                {
                  depth: 0,
                  itemStyle: {
                    color: '#fbb4ae'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 1,
                  itemStyle: {
                    color: '#b3cde3'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 2,
                  itemStyle: {
                    color: '#ccebc5'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 3,
                  itemStyle: {
                    color: '#decbe4'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                }
              ],
              lineStyle: {
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
      <View className="header">桑基图层级自定义样式</View>
      <View className="body">
      {option && <Chart option={option} />}
      </View>
    </View>
  );
}
