import { setNavigationBarTitle } from '@tarojs/taro';
// import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-drilldown&lang=ts
 */
interface DataItem {
  value: number;
  groupId: string;
}

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '柱状图下钻动画'
    });
  }, []);

  const option = {
    xAxis: {
      data: ['Animals', 'Fruits', 'Cars']
    },
    yAxis: {},
    dataGroupId: '',
    animationDurationUpdate: 500,
    series: {
      type: 'bar',
      id: 'sales',
      data: [
        {
          value: 5,
          groupId: 'animals'
        },
        {
          value: 2,
          groupId: 'fruits'
        },
        {
          value: 4,
          groupId: 'cars'
        }
      ] as DataItem[],
      universalTransition: {
        enabled: true,
        divideShape: 'clone'
      }
    }
  };

  const drilldownData = [
    {
      dataGroupId: 'animals',
      data: [
        ['Cats', 4],
        ['Dogs', 2],
        ['Cows', 1],
        ['Sheep', 2],
        ['Pigs', 1]
      ]
    },
    {
      dataGroupId: 'fruits',
      data: [
        ['Apples', 4],
        ['Oranges', 2]
      ]
    },
    {
      dataGroupId: 'cars',
      data: [
        ['Toyota', 4],
        ['Opel', 2],
        ['Volkswagen', 2]
      ]
    }
  ];

  const onInit = useCallback(myChart => {
    myChart.on('click', function(event) {
      if (event.data) {
        var subData = drilldownData.find(function(data) {
          return data.dataGroupId === (event.data as DataItem).groupId;
        });
        if (!subData) {
          return;
        }
        myChart.setOption({
          xAxis: {
            data: subData.data.map(function(item) {
              return item[0];
            })
          },
          series: {
            type: 'bar',
            id: 'sales',
            dataGroupId: subData.dataGroupId,
            data: subData.data.map(function(item) {
              return item[1];
            }),
            universalTransition: {
              enabled: true,
              divideShape: 'clone'
            }
          },
          graphic: [
            {
              type: 'text',
              left: 50,
              top: 20,
              style: {
                text: 'Back',
                fontSize: 18
              },
              onclick: function() {
                myChart.setOption(option);
              }
            }
          ]
        });
      }
    });
  }, []);
  return <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />;
}
