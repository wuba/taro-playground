import * as echarts from 'echarts/core';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
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
  LegendComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PixelRatio } from 'react-native';
// import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import { CanvasRenderer } from './CanvasRenderer';
import { SVGRenderer } from './SVGRenderer'
import SvgComponent from './svg'
import SkiaComponent from './skia'
import CanvasComponent from './canvas'

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
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  CanvasRenderer,
]);

const option: ECOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

export default function EchartsPage() {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    let chart;
    if(svgRef.current) {
      // @ts-ignore
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: 400,
        height: 400,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose()
  }, []);

  useEffect(() => {
    let chart;
    if(skiaRef.current) {
      // @ts-ignore
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: 400,
        height: 400,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose()
  }, []);

  // 避免重复渲染
  const onInit = useCallback(()=>{
    let chart;
    if(canvasRef.current) {
      // @ts-ignore
      chart = echarts.init(canvasRef.current, 'light', {
        renderer: 'canvas',
        width: 400,
        height: 400,
        devicePixelRatio: PixelRatio.get(),
      });
      chart.setOption(option);
    }
  }, [])

  return <>
    <CanvasComponent ref={canvasRef} onInit={onInit} width={400} height={400} />
    <SvgComponent ref={svgRef}></SvgComponent>
    <SkiaComponent ref={skiaRef} />
  </>
}