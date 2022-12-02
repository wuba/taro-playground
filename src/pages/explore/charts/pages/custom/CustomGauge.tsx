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
  CalendarComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { useEffect, useRef } from 'react';
import { SVGRenderer, SkiaChart as SkiaComponent, SvgChart as SvgComponent } from 'wrn-echarts';
import { Text, View } from '@tarojs/components';
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
https://echarts.apache.org/examples/zh/editor.html?c=custom-gauge
 */

export default function CustomGauge() {
  const svgRef = useRef<any>(null);
  const skiaRef = useRef<any>(null);

  var _panelImageURL =
    'https://echarts.apache.org/examples/data/asset/img/custom-gauge-panel.png';
  var _animationDuration = 1000;
  var _animationDurationUpdate = 1000;
  var _animationEasingUpdate = 'quarticInOut';
  var _valOnRadianMax = 200;
  var _outerRadius = 200;
  var _innerRadius = 170;
  var _pointerInnerRadius = 40;
  var _insidePanelRadius = 140;
  function renderItem(params, api) {
    var valOnRadian = api.value(1);
    var coords = api.coord([api.value(0), valOnRadian]);
    var polarEndRadian = coords[3];
    var imageStyle = {
      image: _panelImageURL,
      x: params.coordSys.cx - _outerRadius,
      y: params.coordSys.cy - _outerRadius,
      width: _outerRadius * 2,
      height: _outerRadius * 2
    };
    return {
      type: 'group',
      children: [
        {
          type: 'image',
          style: imageStyle,
          clipPath: {
            type: 'sector',
            shape: {
              cx: params.coordSys.cx,
              cy: params.coordSys.cy,
              r: _outerRadius,
              r0: _innerRadius,
              startAngle: 0,
              endAngle: -polarEndRadian,
              transition: 'endAngle',
              enterFrom: { endAngle: 0 }
            }
          }
        },
        {
          type: 'image',
          style: imageStyle,
          clipPath: {
            type: 'polygon',
            shape: {
              points: makePionterPoints(params, polarEndRadian)
            },
            extra: {
              polarEndRadian: polarEndRadian,
              transition: 'polarEndRadian',
              enterFrom: { polarEndRadian: 0 }
            },
            during: function(apiDuring) {
              apiDuring.setShape(
                'points',
                makePionterPoints(params, apiDuring.getExtra('polarEndRadian'))
              );
            }
          }
        },
        {
          type: 'circle',
          shape: {
            cx: params.coordSys.cx,
            cy: params.coordSys.cy,
            r: _insidePanelRadius
          },
          style: {
            fill: '#fff',
            shadowBlur: 25,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(76,107,167,0.4)'
          }
        },
        {
          type: 'text',
          extra: {
            valOnRadian: valOnRadian,
            transition: 'valOnRadian',
            enterFrom: { valOnRadian: 0 }
          },
          style: {
            text: makeText(valOnRadian),
            fontSize: 50,
            fontWeight: 700,
            x: params.coordSys.cx,
            y: params.coordSys.cy,
            fill: 'rgb(0,50,190)',
            align: 'center',
            verticalAlign: 'middle',
            enterFrom: { opacity: 0 }
          },
          during: function(apiDuring) {
            apiDuring.setStyle(
              'text',
              makeText(apiDuring.getExtra('valOnRadian'))
            );
          }
        }
      ]
    };
  }
  function convertToPolarPoint(renderItemParams, radius, radian) {
    return [
      Math.cos(radian) * radius + renderItemParams.coordSys.cx,
      -Math.sin(radian) * radius + renderItemParams.coordSys.cy
    ];
  }
  function makePionterPoints(renderItemParams, polarEndRadian) {
    return [
      convertToPolarPoint(renderItemParams, _outerRadius, polarEndRadian),
      convertToPolarPoint(
        renderItemParams,
        _outerRadius,
        polarEndRadian + Math.PI * 0.03
      ),
      convertToPolarPoint(renderItemParams, _pointerInnerRadius, polarEndRadian)
    ];
  }
  function makeText(valOnRadian) {
    // Validate additive animation calc.
    if (valOnRadian < -10) {
      alert('illegal during val: ' + valOnRadian);
    }
    return ((valOnRadian / _valOnRadianMax) * 100).toFixed(0) + '%';
  }
  const option = {
    animationEasing: _animationEasingUpdate,
    animationDuration: _animationDuration,
    animationDurationUpdate: _animationDurationUpdate,
    animationEasingUpdate: _animationEasingUpdate,
    dataset: {
      source: [[1, 156]]
    },
    tooltip: {},
    angleAxis: {
      type: 'value',
      startAngle: 0,
      show: false,
      min: 0,
      max: _valOnRadianMax
    },
    radiusAxis: {
      type: 'value',
      show: false
    },
    polar: {},
    series: [
      {
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem: renderItem
      }
    ]
  };

  useEffect(() => {
    let chart, inter;
    if (svgRef.current) {
      // @ts-ignore
      chart = echarts.init(svgRef.current, 'light', {
        renderer: 'svg',
        width: E_WIDTH,
        height: E_HEIGHT
      });
      chart.setOption(option);
      inter = setInterval(function() {
        var nextSource = [[1, Math.round(Math.random() * _valOnRadianMax)]];
        chart.setOption({
          dataset: {
            source: nextSource
          }
        });
      }, 3000);
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
      chart.setOption(option);
      inter = setInterval(function() {
        var nextSource = [[1, Math.round(Math.random() * _valOnRadianMax)]];
        chart.setOption({
          dataset: {
            source: nextSource
          }
        });
      }, 3000);
    }
    return () => {
      chart?.dispose();
      clearInterval(inter);
    };
  }, []);

  return (
    <View>
      <View className="header">自定义仪表，出不来，也没有报错信息</View>
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
