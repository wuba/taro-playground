import * as echarts from 'echarts/core';
import RNEChartsPro from 'react-native-echarts-pro';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  BoxplotChart,
  CandlestickChart,
  CustomChart,
  EffectScatterChart,
  FunnelChart,
  GaugeChart,
  GraphChart,
  HeatmapChart,
  LineChart,
  LineSeriesOption,
  MapChart,
  ParallelChart,
  PictorialBarChart,
  PieChart,
  RadarChart,
  SankeyChart,
  ScatterChart,
  SunburstChart,
  ThemeRiverChart,
  TreeChart,
  TreemapChart
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  LegendComponent,
  VisualMapComponent,
  ToolboxComponent,
  DataZoomComponent,
  GraphicComponent,
  PolarComponent,
  TimelineComponent,
  BrushComponent,
  MarkLineComponent,
  MarkAreaComponent,
  MarkPointComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  RadarComponent,
  DataZoomSliderComponent,
  DataZoomInsideComponent,
  GridSimpleComponent,
  AxisPointerComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  GeoComponent,
  AriaComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useEffect, useRef } from 'react';
import { SVGRenderer } from '../../SVGRenderer';
import SvgComponent from '../../svg';
import SkiaComponent from '../../skia';
import { Text, View } from '@tarojs/components';
import { CanvasRenderer } from '../../CanvasRenderer';
import '../style.scss';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  DataZoomComponent,
  ToolboxComponent,
  GraphicComponent,
  PolarComponent,
  VisualMapComponent,
  TimelineComponent,
  BrushComponent,
  ParallelComponent,
  CalendarComponent,
  DatasetComponent,
  CustomChart,
  DataZoomComponent,
  ThemeRiverChart,
  PictorialBarChart,
  GaugeChart,
  FunnelChart,
  SankeyChart,
  ParallelChart,
  SunburstChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  BoxplotChart,
  RadarChart,
  CandlestickChart,
  BarChart,
  LineChart,
  HeatmapChart,
  EffectScatterChart,
  ScatterChart,
  MapChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  MarkAreaComponent,
  SingleAxisComponent,
  CanvasRenderer,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  RadarComponent,
  DataZoomSliderComponent,
  DataZoomInsideComponent,
  GridSimpleComponent,
  AxisPointerComponent,
  LegendPlainComponent,
  LegendScrollComponent,
  GeoComponent,
  AriaComponent
]);

const E_HEIGHT = 320;
const E_WIDTH = 320;
const blockStyle: any = {
  marginBottom: 20
};

/**
https://echarts.apache.org/examples/zh/editor.html?c=line-draggable
 */

export default function LineDraggable() {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);

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
      triggerOn: 'none',
      // formatter: function(params) {
      //   return (
      //     'X: ' +
      //     params.data[0].toFixed(2) +
      //     '<br>Y: ' +
      //     params.data[1].toFixed(2)
      //   );
      // }
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

  useEffect(() => {
    let chart;
    if (svgRef.current) {
      // @ts-ignore
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
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
      setTimeout(function() {
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
      });
    }
    return () => chart?.dispose();
  }, []);

  useEffect(() => {
    let chart;
    if (skiaRef.current) {
      // @ts-ignore
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
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
      setTimeout(function() {
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
      });
    }
    return () => chart?.dispose();
  }, []);

  return (
    <View>
      <View className="header">可拖拽点</View>
      <View className="body">
        <View style={blockStyle}>
          <SvgComponent ref={svgRef}></SvgComponent>
        </View>
        <View style={blockStyle}>
          <SkiaComponent ref={skiaRef} />
        </View>
        <View style={blockStyle}>
          <Text>对比下方 react-native-echarts-pro 的效果</Text>
          <RNEChartsPro height={E_HEIGHT} option={option} />
        </View>
      </View>
    </View>
  );
}
