import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';

export default function showParentLabels() {
  const [option, setOption] = useState<any>();
  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/disk.tree.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const { data } = res;
        function getLevelOption() {
          return [
            {
              itemStyle: {
                borderColor: '#777',
                borderWidth: 0,
                gapWidth: 1
              },
              upperLabel: {
                show: false
              }
            },
            {
              itemStyle: {
                borderColor: '#555',
                borderWidth: 5,
                gapWidth: 1
              },
              emphasis: {
                itemStyle: {
                  borderColor: '#ddd'
                }
              }
            },
            {
              colorSaturation: [0.35, 0.5],
              itemStyle: {
                borderWidth: 5,
                gapWidth: 1,
                borderColorSaturation: 0.6
              }
            }
          ];
        }

        setOption({
          title: {
            text: 'Disk Usage',
            left: 'center'
          },
    
          tooltip: {
            formatter: function (info: any) {
              var value = info.value;
              var treePathInfo = info.treePathInfo;
              var treePath = [] as any;
    
              for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
              }
    
              return [
                '<div class="tooltip-title">' +
                  echarts.format.encodeHTML(treePath.join('/')) +
                  '</div>',
                'Disk Usage: ' + echarts.format.addCommas(value) + ' KB'
              ].join('');
            }
          },
    
          series: [
            {
              name: 'Disk Usage',
              type: 'treemap',
              visibleMin: 300,
              label: {
                show: true,
                formatter: '{b}'
              },
              upperLabel: {
                show: true,
                height: 30
              },
              itemStyle: {
                borderColor: '#fff'
              },
              levels: getLevelOption(),
              data: data
            }
          ]
        })
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
      <View className="header">显示父层级标签</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>Loading...</View>
  );
}
