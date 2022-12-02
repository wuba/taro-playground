import * as echarts from 'echarts/core';
// import RNEChartsPro from 'react-native-echarts-pro';
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
  ScatterChart,
  SunburstChart,
  ThemeRiverChart
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
import { SVGRenderer, SkiaChart as SkiaComponent, SvgChart as SvgComponent } from 'wrn-echarts';
import { View } from '@tarojs/components';
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
  ParallelChart,
  SunburstChart,
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
https://echarts.apache.org/examples/zh/editor.html?c=pie-parliament-transition
 */

export default function PieParliamentTransition() {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);

  const data = [
    { value: 800, name: 'A' },
    { value: 635, name: 'B' },
    { value: 580, name: 'C' },
    { value: 484, name: 'D' },
    { value: 300, name: 'E' },
    { value: 200, name: 'F' }
  ];
  const defaultPalette = [
    // '#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc'
  ];
  const radius = ['30%', '80%'];
  const pieOption = {
    series: [
      {
        type: 'pie',
        id: 'distribution',
        radius: radius,
        label: {
          show: false
        },
        universalTransition: true,
        animationDurationUpdate: 1000,
        data: data
      }
    ]
  };
  const parliamentOption = (function() {
    let sum = data.reduce(function(sum, cur) {
      return sum + cur.value;
    }, 0);
    let angles = [];
    let startAngle = -Math.PI / 2;
    let curAngle = startAngle;
    data.forEach(function(item) {
      angles.push(curAngle);
      curAngle += (item.value / sum) * Math.PI * 2;
    });
    angles.push(startAngle + Math.PI * 2);
    function parliamentLayout(startAngle, endAngle, totalAngle, r0, r1, size) {
      let rowsCount = Math.ceil((r1 - r0) / size);
      let points = [];
      let r = r0;
      for (let i = 0; i < rowsCount; i++) {
        // Recalculate size
        let totalRingSeatsNumber = Math.round((totalAngle * r) / size);
        let newSize = (totalAngle * r) / totalRingSeatsNumber;
        for (
          let k = Math.floor((startAngle * r) / newSize) * newSize;
          k < Math.floor((endAngle * r) / newSize) * newSize - 1e-6;
          k += newSize
        ) {
          let angle = k / r;
          let x = Math.cos(angle) * r;
          let y = Math.sin(angle) * r;
          points.push([x, y]);
        }
        r += size;
      }
      return points;
    }
    return {
      series: {
        type: 'custom',
        id: 'distribution',
        data: data,
        coordinateSystem: undefined,
        universalTransition: true,
        animationDurationUpdate: 1000,
        renderItem: function(params, api) {
          var idx = params.dataIndex;
          var viewSize = Math.min(api.getWidth(), api.getHeight());
          var r0 = ((parseFloat(radius[0]) / 100) * viewSize) / 2;
          var r1 = ((parseFloat(radius[1]) / 100) * viewSize) / 2;
          var cx = api.getWidth() * 0.5;
          var cy = api.getHeight() * 0.5;
          var size = viewSize / 50;
          var points = parliamentLayout(
            angles[idx],
            angles[idx + 1],
            Math.PI * 2,
            r0,
            r1,
            size + 3
          );
          return {
            type: 'group',
            children: points.map(function(pt) {
              return {
                type: 'circle',
                autoBatch: true,
                shape: {
                  cx: cx + pt[0],
                  cy: cy + pt[1],
                  r: size / 2
                },
                style: {
                  fill: defaultPalette[idx % defaultPalette.length]
                }
              };
            })
          };
        }
      }
    };
  })();

  useEffect(() => {
    let chart, inter;
    if (svgRef.current) {
      // @ts-ignore
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      let currentOption: any = pieOption;
      inter = setInterval(function() {
        currentOption =
          currentOption === pieOption ? parliamentOption : pieOption;
        chart.setOption(currentOption);
      }, 2000);
    }
    return () => {
      chart?.dispose();
      clearInterval(inter);
    };
  }, []);

  useEffect(() => {
    let chart, inter;
    if (skiaRef.current) {
      // @ts-ignore
      chart = echarts.init(skiaRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      let currentOption: any = pieOption;
      inter = setInterval(function() {
        currentOption =
          currentOption === pieOption ? parliamentOption : pieOption;
        chart.setOption(currentOption);
      }, 2000);
    }
    return () => {
      chart?.dispose();
      clearInterval(inter);
    };
  }, []);

  return (
    <View>
      <View className="header">自定义议会图与饼图过渡动画，卡顿，不够丝滑</View>
      <View className="body">
        <View style={blockStyle}>
          <SvgComponent ref={svgRef}></SvgComponent>
        </View>
        <View style={blockStyle}>
          <SkiaComponent ref={skiaRef} />
        </View>
        {/* <View style={blockStyle}>
          <Text>对比下方 react-native-echarts-pro 的效果</Text>
          <RNEChartsPro height={E_HEIGHT} option={option} />
        </View> */}
      </View>
    </View>
  );
}
