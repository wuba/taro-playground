import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

let timer;
export default function BarPolarRealEstate() {
  const [option, setOption] = useState<any>();
  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/echarts-package-size.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const treemapOption = {
          series: [
            {
              type: 'treemap',
              id: 'echarts-package-size',
              animationDurationUpdate: 1000,
              roam: false,
              nodeClick: undefined,
              data: res?.data?.children,
              universalTransition: true,
              label: {
                show: true
              },
              breadcrumb: {
                show: false
              }
            }
          ]
        };
        const sunburstOption = {
          series: [
            {
              type: 'sunburst',
              id: 'echarts-package-size',
              radius: ['20%', '90%'],
              animationDurationUpdate: 1000,
              nodeClick: undefined,
              data: res?.data?.children,
              universalTransition: true,
              itemStyle: {
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,.5)'
              },
              label: {
                show: false
              }
            }
          ]
        };
        let currentOption = treemapOption as any;
        setOption(currentOption)
        timer = setInterval(function () {
          console.log('------定时器执行')
          currentOption =
            currentOption === treemapOption ? sunburstOption : treemapOption;
            setOption(currentOption);
        }, 3000);
      },
      fail: err => {
        console.log(err);
        Taro.showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      }
    });
    return () => {
      console.log('clear timer!!!') 
      clearInterval(timer)
    }
  }, []);

  return option ? (
    <View>
      <View className="header">矩形树图和旭日图的动画过渡（动画未执行）</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>Loading...</View>
  );
}
