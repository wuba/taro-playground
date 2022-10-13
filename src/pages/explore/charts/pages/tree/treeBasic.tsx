import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
// import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=tree-basic
 */
export default function BarPolarRealEstate() {
  const [option, setOption] = useState<any>();
  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/flare.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const { data } = res;
        data.children.forEach(function(datum, index) {
          index % 2 === 0 && (datum.collapsed = true);
        });
        setOption({
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '1%',
              left: '7%',
              bottom: '1%',
              right: '20%',
              symbolSize: 7,
              label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
              },
              leaves: {
                label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },
              emphasis: {
                focus: 'descendant'
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        });
      },
      fail: err => {
        console.log(err);
        Taro.showToast({
          title: '数据请求失败'
        });
      }
    });
  }, []);
  return option ? (
    <View>
      <View className="header">从左到右树状图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>这是一个Loading图标</View>
  );
}
