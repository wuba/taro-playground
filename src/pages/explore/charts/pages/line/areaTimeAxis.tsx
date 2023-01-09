import Taro from '@tarojs/taro';
import { useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=area-time-axis
 */
export default function AreaTimeAxis() {
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }
  const option = {
    tooltip: {
      trigger: 'axis',
      position: function(pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: 'Large Ara Chart'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {}
      }
    },
    xAxis: {
      type: 'time',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        start: 0,
        end: 20
      }
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {},
        data: data
      }
    ]
  };

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '时间轴折线图'
    });
  }, []);

  return <Chart option={option} />;
}
