import * as echarts from 'echarts/core';
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
  CalendarComponent
} from 'echarts/components';
import { View } from '@tarojs/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useEffect, useRef } from 'react';
import { SVGRenderer, SkiaChart as SkiaComponent, SvgChart as SvgComponent } from '@wuba/react-native-echarts';
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
]);

const E_HEIGHT = 320;
const E_WIDTH = 320;
const blockStyle: any = {
  marginBottom: 20
};

/**
https://echarts.apache.org/examples/zh/editor.html?c=graph-force-dynamic
 */

export default function GraphForceDynamic() {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);

  const runChart = refObject => {
    let myChart;
    let inter;
    if (refObject.current) {
      // @ts-ignore
      myChart = echarts.init(refObject.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      const edges: any = [];
      const data: any = [
        {
          fixed: true,
          x: myChart.getWidth() / 2,
          y: myChart.getHeight() / 2,
          symbolSize: 20,
          id: '-1'
        }
      ];

      const option = {
        series: [
          {
            type: 'graph',
            layout: 'force',
            animation: false,
            data: data,
            force: {
              repulsion: 100,
              edgeLength: 5
            },
            edges: edges
          }
        ]
      };
      inter = setInterval(function() {
        data.push({
          id: data.length + ''
        });
        var source = Math.round((data.length - 1) * Math.random());
        var target = Math.round((data.length - 1) * Math.random());
        if (source !== target) {
          edges.push({
            source: source,
            target: target
          });
        }
        myChart.setOption({
          series: [
            {
              roam: true,
              data: data,
              edges: edges
            }
          ]
        });
      }, 200);
      myChart.setOption(option);
    }
    return () => {
      myChart?.dispose();
      clearInterval(inter);
    };
  };

  useEffect(() => runChart(svgRef), []);

  useEffect(() => runChart(skiaRef), []);

  return (
    <View>
      <View className="header">动态增加图节点</View>
      <View className="body">
        <View>svg如下</View>
        <View style={blockStyle}>
          <SvgComponent ref={svgRef}></SvgComponent>
        </View>
        <View>skia如下</View>
        <View style={blockStyle}>
          <SkiaComponent ref={skiaRef} />
        </View>
      </View>
    </View>
  );
}
