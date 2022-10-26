import * as echarts from 'echarts/core';
import RNEChartsPro from 'react-native-echarts-pro';
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  PieChart
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
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useEffect, useRef } from 'react';
// import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
import { CanvasRenderer } from '../../CanvasRenderer';
import { SVGRenderer } from '../../SVGRenderer';
import SvgComponent from '../../svg';
import SkiaComponent from '../../skia';
import { Text, View } from '@tarojs/components';

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
  DataZoomComponent,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  MarkAreaComponent,
  SingleAxisComponent,
  CanvasRenderer
]);

const E_HEIGHT = 320;
const E_WIDTH = 320;
const blockStyle: any = {
  marginBottom: 20
};

export default function EchartsPage() {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);

  const cellSize = [80, 80];
  const pieRadius = 30;

  type DataItem = [string, number];

  function getVirtulData() {
    let date = +echarts.number.parseDate('2017-02-01');
    let end = +echarts.number.parseDate('2017-03-01');
    let dayTime = 3600 * 24 * 1000;
    let data: DataItem[] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(Math.random() * 10000)
      ]);
    }
    return data;
  }

  function getPieSeries(
    scatterData: DataItem[],
    chart: echarts.ECharts
  ): echarts.PieSeriesOption[] {
    return scatterData.map(function(item, index) {
      var center = chart.convertToPixel('calendar', item);
      return {
        id: index + 'pie',
        type: 'pie',
        center: center,
        label: {
          formatter: '{c}',
          position: 'inside'
        },
        radius: pieRadius,
        data: [
          { name: '工作', value: Math.round(Math.random() * 24) },
          { name: '娱乐', value: Math.round(Math.random() * 24) },
          { name: '睡觉', value: Math.round(Math.random() * 24) }
        ]
      };
    });
  }

  function getPieSeriesUpdate(
    scatterData: DataItem[],
    chart: echarts.ECharts
  ): echarts.PieSeriesOption[] {
    return scatterData.map(function(item, index) {
      var center = chart.convertToPixel('calendar', item);
      return {
        id: index + 'pie',
        center: center
      };
    });
  }

  const scatterData = getVirtulData();

  const option = {
    tooltip: {},
    legend: {
      data: ['Work', 'Entertainment', 'Sleep'],
      bottom: 20
    },
    calendar: {
      top: 'middle',
      left: 'center',
      orient: 'vertical',
      cellSize: cellSize,
      yearLabel: {
        show: false,
        fontSize: 30
      },
      dayLabel: {
        margin: 20,
        firstDay: 1,
        nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      monthLabel: {
        show: false
      },
      range: ['2017-02']
    },
    series: [
      {
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
          show: true,
          formatter: function(params: any) {
            return echarts.format.formatTime('dd', params.value[0]);
          },
          offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          fontSize: 14
        },
        data: scatterData
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
      setTimeout(function() {
        chart.setOption({
          series: getPieSeries(scatterData, chart)
        });
      }, 10);
      setTimeout(function() {
        chart.setOption({
          series: getPieSeriesUpdate(scatterData, chart)
        });
      }, 500);
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
      setTimeout(function() {
        chart.setOption({
          series: getPieSeries(scatterData, chart)
        });
      }, 10);
      setTimeout(function() {
        chart.setOption({
          series: getPieSeriesUpdate(scatterData, chart)
        });
      }, 500);
    }
    return () => chart?.dispose();
  }, []);

  return (
    <View>
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
  );
}
