import { setNavigationBarTitle } from '@tarojs/taro';
import { useCallback, useEffect } from 'react';
import Chart from '../../echarts';
import '../style.scss';

export default function LineDraggable() {
  useEffect(() => {
    setNavigationBarTitle({ title: '可拖拽点' });
  }, []);
  const symbolSize = 20;
  const data = [
    [40, -10],
    [-30, -5],
    [-76.5, 20],
    [-63.5, 40],
    [-22.1, 50]
  ];

  const option = {
    title: {
      text: 'Try Dragging these Points',
      left: 'center'
    },
    tooltip: {
      triggerOn: 'none'
    },
    grid: {
      top: '8%',
      bottom: '12%'
    },
    xAxis: {
      min: -100,
      max: 70,
      type: 'value',
      axisLine: { onZero: false }
    },
    yAxis: {
      min: -30,
      max: 60,
      type: 'value',
      axisLine: { onZero: false }
    },
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'none'
      },
      {
        type: 'slider',
        yAxisIndex: 0,
        filterMode: 'none'
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'none'
      },
      {
        type: 'inside',
        yAxisIndex: 0,
        filterMode: 'none'
      }
    ],
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

  const onInit = useCallback(chart => {
    function updatePosition() {
      chart.setOption({
        graphic: data.map(function(item, dataIndex) {
          return {
            position: chart.convertToPixel('grid', item)
          };
        })
      });
    }
    function showTooltip(dataIndex) {
      chart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
      });
    }
    function hideTooltip(dataIndex) {
      chart.dispatchAction({
        type: 'hideTip'
      });
    }
    function onPointDragging(dataIndex, pos) {
      data[dataIndex] = chart.convertFromPixel('grid', pos);
      // Update data
      chart.setOption({
        series: [
          {
            id: 'a',
            data: data
          }
        ]
      });
    }
    chart.setOption({
      graphic: data.map(function(item, dataIndex) {
        return {
          type: 'circle',
          position: chart.convertToPixel('grid', item),
          shape: {
            cx: 0,
            cy: 0,
            r: symbolSize / 2
          },
          invisible: true,
          draggable: true,
          ondrag: function(dx, dy) {
            onPointDragging(dataIndex, [this.x, this.y]);
          },
          onmousemove: function() {
            showTooltip(dataIndex);
          },
          onmouseout: function() {
            hideTooltip(dataIndex);
          },
          z: 100
        };
      })
    });
    chart.on('dataZoom', updatePosition);
  }, []);

  return <Chart option={option} onSVGInit={onInit} onSkiaInit={onInit} />;
}
