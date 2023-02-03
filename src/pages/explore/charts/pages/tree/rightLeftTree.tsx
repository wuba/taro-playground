import { View } from '@tarojs/components';
import { showToast, request, setNavigationBarTitle } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function RightLeftTree() {
  const [option, setOption] = useState<any>();
  
  useEffect(() => {
    setNavigationBarTitle({ title: '从右到左树状图' });

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
