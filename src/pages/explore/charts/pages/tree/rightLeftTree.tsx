import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function rightLeftTree() {
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
              left: '15%',
              bottom: '1%',
              right: '7%',
              symbolSize: 7,
              orient: 'RL',
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              },
              leaves: {
                label: {
                  position: 'left',
                  verticalAlign: 'middle',
                  align: 'right'
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

  return option ? (
    <View>
      <View className="header">从右到左树状图</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>Loading...</View>
  );
}
