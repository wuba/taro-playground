import { setNavigationBarTitle } from '@tarojs/taro';
import * as echarts from 'echarts/core';
import { useCallback, useEffect } from 'react';
import svg from '../assets/iceland';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=geo-svg-scatter-simple
 */

export default function Index() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '散点图（SVG）'
    });
  }, []);
  echarts.registerMap('iceland_svg', { svg });
  const option = {
    tooltip: {},
    geo: {
      tooltip: {
        show: true
      },
      map: 'iceland_svg',
      roam: true
    },
    series: {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      geoIndex: 0,
      symbolSize: function(params) {
        return (params[2] / 100) * 15 + 5;
      },
      itemStyle: {
        color: '#b02a02'
      },
      encode: {
        tooltip: 2
      },
      data: [
        [488.2358421078053, 459.70913833075736, 100],
        [770.3415644319939, 757.9672194986475, 30],
        [1180.0329284196291, 743.6141808346214, 80],
        [894.03790632245, 1188.1985153835008, 61],
        [1372.98925630313, 477.3839988649537, 70],
        [1378.62251255796, 935.6708486282843, 81]
      ]
    }
  };
  const onInit = useCallback(myChart => {
    myChart.getZr().on('click', function(params) {
      var pixelPoint = [params.offsetX, params.offsetY];
      var dataPoint = myChart.convertFromPixel({ geoIndex: 0 }, pixelPoint);
      console.log(dataPoint);
    });
  }, []);
  return <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />;
}
