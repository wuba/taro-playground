import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=line-aqi
 */
export default function LineAqi() {
  const [option, setOption] = useState<any>();
  const getOption = _rawData => ({
    title: {
      text: 'Beijing AQI',
      left: '1%'
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%',
      right: '15%',
      bottom: '10%'
    },
    xAxis: {
      data: _rawData.map(function(item) {
        return item[0];
      })
    },
    yAxis: {},
    toolbox: {
      right: 10,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {}
        // saveAsImage: {}
      }
    },
    dataZoom: [
      {
        startValue: '2014-06-01'
      },
      {
        type: 'inside'
      }
    ],
    visualMap: {
      top: 50,
      right: 10,
      pieces: [
        {
          gt: 0,
          lte: 50,
          color: '#93CE07'
        },
        {
          gt: 50,
          lte: 100,
          color: '#FBDB0F'
        },
        {
          gt: 100,
          lte: 150,
          color: '#FC7D02'
        },
        {
          gt: 150,
          lte: 200,
          color: '#FD0100'
        },
        {
          gt: 200,
          lte: 300,
          color: '#AA069F'
        },
        {
          gt: 300,
          color: '#AC3B2A'
        }
      ],
      outOfRange: {
        color: '#999'
      }
    },
    series: {
      name: 'Beijing AQI',
      type: 'line',
      data: _rawData.map(function(item) {
        return item[1];
      }),
      markLine: {
        silent: true,
        lineStyle: {
          color: '#333'
        },
        data: [
          {
            yAxis: 50
          },
          {
            yAxis: 100
          },
          {
            yAxis: 150
          },
          {
            yAxis: 200
          },
          {
            yAxis: 300
          }
        ]
      }
    }
  });
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '北京 AQI 可视化'
    });
    Taro.request({
      url: `${ROOT_PATH}/data/asset/data/aqi-beijing.json`,
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      fail: err => {
        console.log(err);
        Taro.showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      },
      success: res => {
        setOption(getOption(res?.data));
      }
    });
  }, []);

  return option && <Chart option={option} />;
}
