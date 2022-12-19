import { setNavigationBarTitle, showToast, request } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
import { ROOT_PATH } from '../../constant';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=data-transform-filter
 */
export default function DataTransformFilter() {
  const getOption = _rawData => ({
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      {
        id: 'dataset_since_1950_of_germany',
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': 'Germany' }
            ]
          }
        }
      },
      {
        id: 'dataset_since_1950_of_france',
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': 'France' }
            ]
          }
        }
      }
    ],
    title: {
      text: 'Income of Germany and France since 1950'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle'
    },
    yAxis: {
      name: 'Income'
    },
    series: [
      {
        type: 'line',
        datasetId: 'dataset_since_1950_of_germany',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income']
        }
      },
      {
        type: 'line',
        datasetId: 'dataset_since_1950_of_france',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income']
        }
      }
    ]
  });
  useEffect(() => {
    setNavigationBarTitle({ title: '数据过滤' });
  }, []);
  const onInit = useCallback(myChart => {
    myChart.showLoading();
    request({
      url: `${ROOT_PATH}/data/asset/data/life-expectancy-table.json`,
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
        myChart.hideLoading();
      },
      success: res => {
        myChart.setOption(getOption(res?.data));
        myChart.hideLoading();
      }
    });
  }, []);
  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
