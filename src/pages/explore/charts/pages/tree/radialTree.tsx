import { View } from '@tarojs/components';
import { showToast, request, setNavigationBarTitle } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function RadialTree() {
  const [option, setOption] = useState<any>();
  
  useEffect(() => {
    setNavigationBarTitle({ title: '径向树状图' });

    request({
      url: 'https://echarts.apache.org/examples/data/asset/data/flare.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      timeout: 10000,
      success: res => {
        const { data } = res;
        setOption({
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '18%',
              bottom: '14%',
              layout: 'radial',
              symbol: 'emptyCircle',
              symbolSize: 7,
              initialTreeDepth: 3,
              animationDurationUpdate: 750,
              emphasis: {
                focus: 'descendant'
              }
            }
          ]
        })
      },
      fail: err => {
        console.log(err);
        showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      }
    });
  }, []);

  return option ? (
    <Chart option={option} />
  ) : (
    <View>Loading...</View>
  );
}
