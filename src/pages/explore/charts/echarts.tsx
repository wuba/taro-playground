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
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { useEffect, useRef, useState } from 'react';
import SvgComponent from './svg';

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
]);

const option: ECOption = {
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 5]
    }
  ]
};

function wrapTouch(event) {
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}

export default function EchartsPage() {
  const svgRef = useRef<any>(null);
  const [curChart, setCurChart]: any = useState(null)

  const touchStart = (e) => {
    console.log('touchStart')
    e = e.nativeEvent
    if (curChart && e.touches.length > 0) {
      var touch = e.touches[0];
      var handler = curChart.getZr().handler;
      handler.dispatch('mousedown', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.dispatch('mousemove', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.processGesture(wrapTouch(e), 'start');
    }
  }

  const touchMove = (e) => {
    console.log('touchMove')
    e = e.nativeEvent
    if (curChart && e.touches.length > 0) {
      var touch = e.touches[0];
      var handler = curChart.getZr().handler;
      handler.dispatch('mousemove', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.processGesture(wrapTouch(e), 'change');
    }
  }

  const touchEnd = (e) => {
    console.log('touchEnd')
    e = e.nativeEvent
    if (curChart) {
      const touch = e.changedTouches ? e.changedTouches[0] : {};
      var handler = curChart.getZr().handler;
      handler.dispatch('mouseup', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.dispatch('click', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.processGesture(wrapTouch(e), 'end');
    }
  }

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
      setCurChart(chart)
      return () => chart?.dispose()
    }
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
      return () => chart?.dispose()
    }
  }, []);
  return <>
    <SvgComponent ref={svgRef} touchStart={touchStart} touchMove={touchMove} touchEnd={touchEnd}></SvgComponent>
  </>
}