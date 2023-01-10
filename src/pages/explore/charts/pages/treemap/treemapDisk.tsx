import { View } from '@tarojs/components';
import { showToast, request, setNavigationBarTitle } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import Chart from '../../echarts';
import '../style.scss';
/**
https://echarts.apache.org/examples/zh/editor.html?c=treemap-disk
 */
export default function BarPolarRealEstate() {
  const [option, setOption] = useState<any>();
  useEffect(() => {
    setNavigationBarTitle({ title: '磁盘占用' });
    request({
      url: 'https://echarts.apache.org/examples/data/asset/data/disk.tree.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      timeout: 10000,
      success: res => {
        const { data } = res;
        const formatUtil = echarts.format;
        function getLevelOption() {
          return [
            {
              itemStyle: {
                borderWidth: 0,
                gapWidth: 5
              }
            },
            {
              itemStyle: {
                gapWidth: 1
              }
            },
            {
              colorSaturation: [0.35, 0.5],
              itemStyle: {
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
            formatter: function(info) {
              var value = info.value;
              var treePathInfo = info.treePathInfo;
              var treePath: any = [];
              for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
              }
              return [
                '<div class="tooltip-title">' +
                  formatUtil.encodeHTML(treePath.join('/')) +
                  '</div>',
                'Disk Usage: ' + formatUtil.addCommas(value) + ' KB'
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
              itemStyle: {
                borderColor: '#fff'
              },
              levels: getLevelOption(),
              data: data
            }
          ]
        });
      },
      fail: err => {
        console.log(err);
        showToast({
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
