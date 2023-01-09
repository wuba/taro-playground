import { setNavigationBarTitle } from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import svg from '../assets/flight';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=geo-seatmap-flight
 */

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '航班选座（SVG）'
    });
  }, []);

  const onInit = useCallback(myChart => {
    myChart.showLoading();
    echarts.registerMap('flight-seats', { svg });
    const takenSeatNames = ['26E', '26D', '26C', '25D', '23C', '21A', '20F'];
    const option = {
      tooltip: {},
      geo: {
        map: 'flight-seats',
        roam: true,
        selectedMode: 'multiple',
        layoutCenter: ['50%', '50%'],
        layoutSize: '95%',
        tooltip: {
          show: true
        },
        itemStyle: {
          color: '#fff'
        },
        emphasis: {
          itemStyle: {
            color: undefined,
            borderColor: 'green',
            borderWidth: 2
          },
          label: {
            show: false
          }
        },
        select: {
          itemStyle: {
            color: 'green'
          },
          label: {
            show: false,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        },
        regions: makeTakenRegions(takenSeatNames)
      }
    };
    function makeTakenRegions(tSeatNames) {
      var regions: any = [];
      for (var i = 0; i < tSeatNames.length; i++) {
        regions.push({
          name: tSeatNames[i],
          silent: true,
          itemStyle: {
            color: '#bf0e08'
          },
          emphasis: {
            itemStyle: {
              borderColor: '#aaa',
              borderWidth: 1
            }
          },
          select: {
            itemStyle: {
              color: '#bf0e08'
            }
          }
        });
      }
      return regions;
    }
    myChart.setOption(option);
    // Get selected seats.
    myChart.on('geoselectchanged', function(params) {
      const selectedNames = params.allSelected[0].name.slice();
      // Remove taken seats.
      for (var i = selectedNames.length - 1; i >= 0; i--) {
        if (takenSeatNames.indexOf(selectedNames[i]) >= 0) {
          selectedNames.splice(i, 1);
        }
      }
      console.log('selected', selectedNames);
    });
    myChart.hideLoading();
  }, []);
  return <Chart option={{}} onSVGInit={onInit} onSkiaInit={onInit} />;
}
