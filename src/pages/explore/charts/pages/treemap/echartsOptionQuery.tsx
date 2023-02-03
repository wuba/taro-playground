import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import Chart from '../../echarts';
import '../style.scss';

type RawNode = {
  [key: string]: RawNode;
} & {
  $count: number;
};

interface TreeNode {
  name: string;
  value: number;
  children?: TreeNode[];
}

export default function BarPolarRealEstate() {
  const [option, setOption] = useState<any>();
  useEffect(() => {
    Taro.request({
      url: 'https://echarts.apache.org/examples/data/asset/data/ec-option-doc-statistics-201604.json',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        function convert(source: RawNode, target: TreeNode, basePath: string) {
          for (let key in source) {
            let path = basePath ? basePath + '.' + key : key;
            if (!key.match(/^\$/)) {
              target.children = target.children || [];
              const child = {
                name: path
              } as TreeNode;
              target.children.push(child);
              convert(source[key], child, path);
            }
          }
      
          if (!target.children) {
            target.value = source.$count || 1;
          } else {
            target.children.push({
              name: basePath,
              value: source.$count
            });
          }
        }
      
        const data = {
          children: [] as TreeNode[]
        } as TreeNode;
      
        convert(res?.data, data, '');

        setOption({
          title: {
            text: 'ECharts Options',
            subtext: '2016/04',
            left: 'leafDepth'
          },
          tooltip: {},
          series: [
            {
              name: 'option',
              type: 'treemap',
              visibleMin: 300,
              data: data.children,
              leafDepth: 2,
              levels: [
                {
                  itemStyle: {
                    borderColor: '#555',
                    borderWidth: 4,
                    gapWidth: 4
                  }
                },
                {
                  colorSaturation: [0.3, 0.6],
                  itemStyle: {
                    borderColorSaturation: 0.7,
                    gapWidth: 2,
                    borderWidth: 2
                  }
                },
                {
                  colorSaturation: [0.3, 0.5],
                  itemStyle: {
                    borderColorSaturation: 0.6,
                    gapWidth: 1
                  }
                },
                {
                  colorSaturation: [0.3, 0.5]
                }
              ]
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
      <View className="header">ECharts 配置项查询分布</View>
      <View className="body">
        <Chart option={option} />
      </View>
    </View>
  ) : (
    <View>Loading...</View>
  );
}
