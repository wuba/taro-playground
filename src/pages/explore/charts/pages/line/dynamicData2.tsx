import { setNavigationBarTitle } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=dynamic-data2&lang=ts
 */
interface DataItem {
  name: string;
  value: (string | number)[];
}

export default function DynamicData2() {
  const timer = useRef<any>([]);
  useEffect(() => {
    setNavigationBarTitle({
      title: '动态数据 + 时间坐标轴'
    });
    return () => timer.current.forEach(clearInterval);
  }, []);
  const onInit = useCallback(myChart => {
    let data: DataItem[] = [];
    let now = new Date(1997, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let value = Math.random() * 1000;
    function randomData() {
      now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        name: now.toString(),
        value: [
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
          Math.round(value)
        ]
      };
    }
    for (let i = 0; i < 1000; i++) {
      data.push(randomData());
    }
    const option = {
      title: {
        text: 'Dynamic Data and Time Axis'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function(params) {
          params = params[0];
          var date = new Date(params.name);
          return (
            date.getDate() +
            '/' +
            (date.getMonth() + 1) +
            '/' +
            date.getFullYear() +
            ' : ' +
            params.value[1]
          );
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: 'Fake Data',
          type: 'line',
          showSymbol: false,
          data: data
        }
      ]
    };
    myChart.setOption(option);
    timer.current.push(
      setInterval(function() {
        for (let i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              name: 'Fake Data',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ]
        });
      }, 1000)
    );
  }, []);

  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
