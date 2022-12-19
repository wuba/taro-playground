import { setNavigationBarTitle, showToast, request } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=data-transform-filter
 */
export default function DataTransformFilter() {
  const [option, setOption] = useState<any>();
  const getOption = data => {
    const base = -data.reduce(function(min, val) {
      return Math.floor(Math.min(min, val.l));
    }, Infinity);

    return {
      title: {
        text: 'Confidence Band',
        subtext: 'Example in MetricsGraphics.js',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          animation: false,
          label: {
            backgroundColor: '#ccc',
            borderColor: '#aaa',
            borderWidth: 1,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            color: '#222'
          }
        },
        formatter: function(params) {
          return (
            params[2].name +
            '<br />' +
            ((params[2].value - base) * 100).toFixed(1) +
            '%'
          );
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: data.map(function(item) {
          return item.date;
        }),
        axisLabel: {
          formatter: function(value, idx) {
            var date = new Date(value);
            return idx === 0
              ? value
              : [date.getMonth() + 1, date.getDate()].join('-');
          }
        },
        boundaryGap: false
      },
      yAxis: {
        axisLabel: {
          formatter: function(val) {
            return (val - base) * 100 + '%';
          }
        },
        axisPointer: {
          label: {
            formatter: function(params) {
              return ((params.value - base) * 100).toFixed(1) + '%';
            }
          }
        },
        splitNumber: 3
      },
      series: [
        {
          name: 'L',
          type: 'line',
          data: data.map(function(item) {
            return item.l + base;
          }),
          lineStyle: {
            opacity: 0
          },
          stack: 'confidence-band',
          symbol: 'none'
        },
        {
          name: 'U',
          type: 'line',
          data: data.map(function(item) {
            return item.u - item.l;
          }),
          lineStyle: {
            opacity: 0
          },
          areaStyle: {
            color: '#ccc'
          },
          stack: 'confidence-band',
          symbol: 'none'
        },
        {
          type: 'line',
          data: data.map(function(item) {
            return item.value + base;
          }),
          itemStyle: {
            color: '#333'
          },
          showSymbol: false
        }
      ]
    };
  };
  useEffect(() => {
    setNavigationBarTitle({ title: 'Confidence Band' });
    request({
      url: `${ROOT_PATH}/data/asset/data/confidence-band.json`,
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      fail: err => {
        console.log(err);
        showToast({
          icon: 'none',
          title: '数据请求失败'
        });
      },
      success: res => {
        console.log(res);
        setOption(getOption(res?.data));
      }
    });
  }, []);

  return option && <Chart option={option} />;
}
