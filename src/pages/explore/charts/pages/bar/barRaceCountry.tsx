import { setNavigationBarTitle, request } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-race-country
 */
const updateFrequency = 2000;
const dimension = 0;
const countryColors = {
  Australia: '#00008b',
  Canada: '#f00',
  China: '#ffde00',
  Cuba: '#002a8f',
  Finland: '#003580',
  France: '#ed2939',
  Germany: '#000',
  Iceland: '#003897',
  India: '#f93',
  Japan: '#bc002d',
  'North Korea': '#024fa2',
  'South Korea': '#000',
  'New Zealand': '#00247d',
  Norway: '#ef2b2d',
  Poland: '#dc143c',
  Russia: '#d52b1e',
  Turkey: '#e30a17',
  'United Kingdom': '#00247d',
  'United States': '#b22234'
};
const reqEmojiFlagsUrl =
  'https://fastly.jsdelivr.net/npm/emoji-flags@1.3.0/data.json';
const reqLifeExpectancyUrl = `${ROOT_PATH}/data/asset/data/life-expectancy-table.json`;

const requestData = async url => {
  const res = await request({
    url,
    data: {},
    header: {
      'content-type': 'application/json'
    },
    success: function(r) {
      return r?.data;
    }
  });
  return res;
};
export default function Index() {
  const timer: any = useRef([]);
  useEffect(() => {
    setNavigationBarTitle({
      title: '动态排序柱状图-人均收入'
    });
    return () => {
      timer.current.forEach(clearTimeout);
    };
  }, []);
  const onInit = useCallback(myChart => {
    myChart.showLoading();
    Promise.all([
      requestData(reqEmojiFlagsUrl),
      requestData(reqLifeExpectancyUrl)
    ]).then(([res0, res1]) => {
      const flags = res0?.data;
      const data = res1?.data;
      const years: any = [];
      for (let i = 0; i < data.length; ++i) {
        if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
          years.push(data[i][4]);
        }
      }
      function getFlag(countryName) {
        if (!countryName) {
          return '';
        }
        return (
          flags.find(function(item) {
            return item.name === countryName;
          }) || {}
        ).emoji;
      }
      let startIndex = 10;
      let startYear = years[startIndex];
      const option = {
        grid: {
          top: 10,
          bottom: 30,
          left: 150,
          right: 80
        },
        xAxis: {
          max: 'dataMax',
          axisLabel: {
            formatter: function(n) {
              return Math.round(n) + '';
            }
          }
        },
        dataset: {
          source: data.slice(1).filter(function(d) {
            return d[4] === startYear;
          })
        },
        yAxis: {
          type: 'category',
          inverse: true,
          max: 10,
          axisLabel: {
            show: true,
            fontSize: 16,
            formatter: function(value) {
              // return value + '{flag|' + getFlag(value) + '}';
              return value + ' ' + getFlag(value);
            }
            // rich: {
            //   flag: {
            //     fontSize: 25,
            //     padding: 5,
            //   },
            // }
          },
          animationDuration: 300,
          animationDurationUpdate: 300
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            itemStyle: {
              color: function(param) {
                return countryColors[param.value[3]] || '#5470c6';
              }
            },
            encode: {
              x: dimension,
              y: 3
            },
            label: {
              show: true,
              precision: 1,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace'
            }
          }
        ],
        // Disable init animation.
        animationDuration: 0,
        animationDurationUpdate: updateFrequency,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [
            {
              type: 'text',
              right: 60,
              bottom: 60,
              style: {
                textAlign: 'center',
                text: startYear,
                fontSize: '80px',
                fontFamily: 'monospace',
                fontWeight: 'bolder',
                fill: 'rgba(100, 100, 100, 0.25)'
              },
              z: 100
            }
          ]
        }
      };
      for (let i = startIndex; i < years.length - 1; ++i) {
        (function(j) {
          timer.current.push(
            setTimeout(function() {
              updateYear(years[j + 1]);
            }, (i - startIndex) * updateFrequency)
          );
        })(i);
      }
      function updateYear(year) {
        let source = data.slice(1).filter(function(d) {
          return d[4] === year;
        });
        option.series[0].data = source;
        option.graphic.elements[0].style.text = year;
        myChart.hideLoading();
        myChart.setOption(option);
      }
    });
  }, []);

  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
