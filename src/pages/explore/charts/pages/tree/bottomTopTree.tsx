import { View } from '@tarojs/components';
import { showToast, request, setNavigationBarTitle } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function BottomTopTree() {
  const [option, setOption] = useState<any>();
  
  useEffect(() => {
    setNavigationBarTitle({ title: '从下到上树状图' });
    request({
      url: 'https://echarts.apache.org/examples/data/asset/data/flare.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      timeout: 10000,
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
              left: '2%',
              right: '2%',
              top: '20%',
              bottom: '8%',
              symbol: 'emptyCircle',
              orient: 'BT',
              expandAndCollapse: true,
              label: {
                position: 'bottom',
                rotate: 90,
                verticalAlign: 'middle',
                align: 'right'
              },
              leaves: {
                label: {
                  position: 'top',
                  rotate: 90,
                  verticalAlign: 'middle',
                  align: 'left'
                }
              },
              emphasis: {
                focus: 'descendant'
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
