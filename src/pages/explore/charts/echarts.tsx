import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  HeatmapChart,
  LineChart,
  LineSeriesOption,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart
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
  BrushComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useCallback, useEffect, useRef } from 'react';
import { PixelRatio } from 'react-native';
// import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import { CanvasRenderer } from './CanvasRenderer';
import { SVGRenderer } from './SVGRenderer';
import SvgComponent from './svg';
import SkiaComponent from './skia';
import CanvasComponent from './canvas';
import { View } from '@tarojs/components';

/**
 * 这个case，skia渲染出来的，点击图表会引发app crash
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-polar-real-estate
 *
 * 这个case 安卓点击svg的图表时，会报错
 * https://echarts.apache.org/examples/zh/editor.html?c=pie-nest
 *
 * 这个case canvas背景色没有渐变
 * https://echarts.apache.org/examples/zh/editor.html?c=bubble-gradient
 *
 * 这个case 数据量有点大，很卡几乎无法交互
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-large
 *
 * 这个case上的小虚线等没出来
 * https://echarts.apache.org/examples/zh/editor.html?c=line-markline
 *
 * 这个case出不来，可能地图只能用于web页面？
 * https://echarts.apache.org/examples/zh/editor.html?c=effectScatter-bmap
 *
 * 这个case字体颜色和rn上不同
 * https://echarts.apache.org/examples/zh/editor.html?c=bar-negative2
 *
 * 这个case ios上svg不出来（严格来说，应该是动画效果出不来，页面滑动几下还是可以看到图表的；但是android上表现就挺好）
 * https://echarts.apache.org/examples/zh/editor.html?c=area-pieces
 * https://echarts.apache.org/examples/zh/editor.html?c=data-transform-filter
 * https://echarts.apache.org/examples/zh/editor.html?c=confidence-band
 * https://echarts.apache.org/examples/zh/editor.html?c=line-easing
 *
 * 这个case的柱状背景没有出来
 * https://echarts.apache.org/examples/zh/editor.html?c=line-sections
 * https://echarts.apache.org/examples/zh/editor.html?c=area-rainfall
 *
 * 这个case上的小水滴没出来
 * https://echarts.apache.org/examples/zh/editor.html?c=bar1
 *
 * 这个case的显示待调整
 * https://echarts.apache.org/examples/zh/editor.html?c=line-graphic
 *
 * 这个试用失败
 * https://echarts.apache.org/examples/zh/editor.html?c=scatter-single-axis&lang=ts
 * https://echarts.apache.org/examples/zh/editor.html?c=calendar-charts
 *
 */

import beef from './beef';

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
  CanvasRenderer
]);

echarts.registerMap('Beef_cuts_France', { svg: beef });

const E_HEIGHT = 600;
const E_WIDTH = 600;
const blockStyle: any = {
  marginBottom: 20
};

export default function EchartsPage({ option }) {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

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
    }
    return () => chart?.dispose();
  }, []);

  // 避免重复渲染
  const onInit = useCallback(() => {
    let chart;
    if (canvasRef.current) {
      // @ts-ignore
      chart = echarts.init(canvasRef.current, 'light', {
        renderer: 'canvas',
        width: E_WIDTH,
        height: E_HEIGHT,
        devicePixelRatio: PixelRatio.get()
      });
      chart.setOption(option);
    }
  }, []);

  return (
    <View>
      <View style={blockStyle}>
        <CanvasComponent
          ref={canvasRef}
          onInit={onInit}
          width={E_WIDTH}
          height={E_HEIGHT}
        />
      </View>
      <View style={blockStyle}>
        <SvgComponent ref={svgRef}></SvgComponent>
      </View>
      <View style={blockStyle}>
        <SkiaComponent ref={skiaRef} />
      </View>
    </View>
  );
}
