import Taro from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useEffect, useState } from 'react';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=line-race
 */
export default function LineRace() {
  const [option, setOption] = useState<any>();
  const getOption = _rawData => {
    const countries = [
      'Finland',
      'France',
      'Germany',
      'Iceland',
      'Norway',
      'Poland',
      'Russia',
      'United Kingdom'
    ];
    const datasetWithFilters: any = [];
    const seriesList: any = [];
    echarts.util.each(countries, function(country) {
      var datasetId = 'dataset_' + country;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': country }
            ]
          }
        }
      });
      seriesList.push({
        type: 'line',
        datasetId: datasetId,
        showSymbol: false,
        name: country,
        endLabel: {
          show: true,
          formatter: function(params) {
            return params.value[3] + ': ' + params.value[0];
          }
        },
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        emphasis: {
          focus: 'series'
        },
        encode: {
          x: 'Year',
          y: 'Income',
          label: ['Country', 'Income'],
          itemName: 'Year',
          tooltip: ['Income']
        }
      });
    });
    return {
      animationDuration: 10000,
      dataset: [
        {
          id: 'dataset_raw',
          source: _rawData
        },
        ...datasetWithFilters
      ],
      title: {
        text: 'Income of Germany and France since 1950'
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        nameLocation: 'middle'
      },
      yAxis: {
        name: 'Income'
      },
      grid: {
        right: 140
      },
      series: seriesList
    };
  };
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '动态排序折线图'
    });
    Taro.request({
      url: `${ROOT_PATH}/data/asset/data/life-expectancy-table.json`,
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
