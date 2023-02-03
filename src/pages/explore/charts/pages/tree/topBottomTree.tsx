import { View } from '@tarojs/components';
import { showToast, request, setNavigationBarTitle } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function TopBottomTree() {
  const [option, setOption] = useState<any>();
  
  useEffect(() => {
    setNavigationBarTitle({ title: '从上到下树状图' });

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
              left: '2%',
              right: '2%',
              top: '8%',
              bottom: '20%',
              symbol: 'emptyCircle',
              orient: 'vertical',
              expandAndCollapse: true,
              label: {
                position: 'top',
                rotate: -90,
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
              },
              leaves: {
                label: {
                  position: 'bottom',
                  rotate: -90,
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },
              animationDurationUpdate: 750
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
