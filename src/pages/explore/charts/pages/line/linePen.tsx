import { setNavigationBarTitle } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';
/**
 * https://echarts.apache.org/examples/zh/editor.html?c=line-pen
 */
export default function LinePen() {
  useEffect(() => {
    setNavigationBarTitle({
      title: '点击添加折线图拐点'
    });
  }, []);
  const symbolSize = 20;
  const data = [
    [15, 0],
    [-50, 10],
    [-56.5, 20],
    [-46.5, 30],
    [-22.1, 40]
  ];

  const option = {
    title: {
      text: 'Click to Add Points'
    },
    tooltip: {
      formatter: function(params: any) {
        const d = params.data || [0, 0];
        return d[0].toFixed(2) + ', ' + d[1].toFixed(2);
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      min: -60,
      max: 20,
      type: 'value',
      axisLine: { onZero: false }
    },
    yAxis: {
      min: 0,
      max: 40,
      type: 'value',
      axisLine: { onZero: false }
    },
    series: [
      {
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        data: data
      }
    ]
  };

  const onInit = useCallback(myChart => {
    const zr = myChart.getZr();

    zr.on('click', function(params: any) {
      const pointInPixel = [params.offsetX, params.offsetY];
      const pointInGrid = myChart.convertFromPixel('grid', pointInPixel);

      if (myChart.containPixel('grid', pointInPixel)) {
        data.push(pointInGrid);

        myChart.setOption({
          series: [
            {
              id: 'a',
              data: data
            }
          ]
        });
      }
    });

    zr.on('mousemove', function(params: any) {
      const pointInPixel = [params.offsetX, params.offsetY];
      zr.setCursorStyle(
        myChart.containPixel('grid', pointInPixel) ? 'copy' : 'default'
      );
    });
  }, []);

  return <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />;
}
