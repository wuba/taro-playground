import { Icon, ScrollView, Text, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { useState } from 'react';
import './entry.scss';

/**
 * option
 *   tooltip
 *     formatter不支持
 *   toolbox
 *     feature
 *       saveAsImage不支持
 */

const prefix = 'pages/explore/charts/pages/';
const routes = [
  {
    title: '折线图',
    routes: [
      {
        title: '基础折线图',
        url: `${prefix}line/lineSimple`
      },
      {
        title: '基础平滑折线图',
        url: `${prefix}line/lineSmooth`
      },
      {
        title: '基础面积图',
        url: `${prefix}line/areaBasic`
      },
      {
        title: '折线图堆叠',
        url: `${prefix}line/lineStack`
      },
      {
        title: '堆叠面积图',
        url: `${prefix}line/areaStack`
      },
      {
        title: '渐变堆叠面积图',
        url: `${prefix}line/areaStackGradient`
      },
      {
        title: '未来一周气温变化',
        url: `${prefix}line/lineMarker`
      },
      {
        title: '折线图区域高亮',
        url: `${prefix}line/areaPieces`
      },
      {
        title: '数据过滤',
        url: `${prefix}line/dataTransformFilter`
      },
      {
        title: '折线图的渐变',
        url: `${prefix}line/lineGradient`
        // state: true
      },
      {
        title: '折线图的标记线',
        url: `${prefix}line/lineMarkline`
        // state: true // 表示是否异常 true-有问题
      },
      {
        title: '一天用电量分布',
        url: `${prefix}line/lineSections`,
        state: false
      },
      {
        title: 'Confidence Band',
        url: `${prefix}line/confidenceBand`,
        state: false
      },
      {
        title: '雨量Evaporation关系图',
        url: `${prefix}line/gridMultiple`,
        state: false
      },
      {
        title: '移动端上的dataZoom',
        url: `${prefix}line/lineTooltipTouch`
      },
      {
        title: '联动和共享数据集',
        url: `${prefix}dataset/DatasetLink`
      },
      {
        title: '自定义图形组件',
        url: `${prefix}graphic/lineGraphic`
      },
      {
        title: '可拖拽点',
        url: `${prefix}graphic/LineDraggable`,
        state: true
      },
      {
        title: '大数据量面积图',
        url: `${prefix}dataZoom/areaSimple`
      },
      {
        title: '北京 AQI 可视化',
        url: `${prefix}line/lineAqi`
      },
      {
        title: '多 X 轴',
        url: `${prefix}line/multipleXAxis`
      },
      {
        title: '雨量流量关系图',
        url: `${prefix}line/areaRainfall`
      },
      {
        title: '时间轴折线图',
        url: `${prefix}line/areaTimeAxis`
      },
      {
        title: '动态数据 + 时间坐标轴',
        url: `${prefix}line/dynamicData2`,
        state: true
      },
      {
        title: '函数绘图',
        url: `${prefix}line/lineFunction`
      },
      {
        title: '动态排序折线图',
        url: `${prefix}line/lineRace`
      },
      {
        title: '自定义折线图样式',
        url: `${prefix}line/lineStyle`
      },
      {
        title: '双数值轴折线图',
        url: `${prefix}line/lineInCoordinateSystem`
      },
      {
        title: '对数轴示例',
        url: `${prefix}line/lineLog`
      },
      {
        title: '阶梯折线图',
        url: `${prefix}line/lineStep`
      },
      {
        title: '缓动函数可视化',
        url: `${prefix}line/lineEasing`
      },
      {
        title: '垂直折线图（Y轴为类目轴）',
        url: `${prefix}line/lineYCategory`
      },
      {
        title: '点击添加折线图拐点',
        url: `${prefix}line/linePen`
      },
      {
        title: '极坐标双数值轴',
        url: `${prefix}line/linePolar`
      },
      {
        title: '极坐标双数值轴（二）',
        url: `${prefix}line/linePolar2`
      },
      {
        title: '带背景色的柱状图',
        url: `${prefix}line/barBackground`
      },
      {
        title: '基础柱状图',
        url: `${prefix}line/barSimple`
      },
      {
        title: '坐标轴刻度与标签对齐',
        url: `${prefix}line/barTickAlign`
      },
      {
        title: '自定义单个柱子颜色',
        url: `${prefix}line/barDataColor`
      },
      {
        title: '瀑布图（柱状图模拟）',
        url: `${prefix}line/barWaterfall`
      }
    ]
  },
  {
    title: '柱状图',
    routes: [
      {
        title: '交错正负轴标签',
        url: `${prefix}bar/barNegative`,
        state: false
      },
      {
        title: '极坐标柱状图标签',
        url: `${prefix}bar/barPolarLabelRadial`
      },
      {
        title: '极坐标柱状图标签（二）',
        url: `${prefix}bar/barPolarLabelTangential`
      },
      {
        title: '世界人口总量 - 条形图',
        url: `${prefix}bar/barYCategory`
      },
      {
        title: '特性示例-渐变色,阴影,点击缩放',
        url: `${prefix}bar/barGradient`
      },
      {
        title: '柱状图标签旋转',
        url: `${prefix}bar/barLabelRotation`
      },
      {
        title: '堆叠柱状图',
        url: `${prefix}bar/barStack`
      },
      {
        title: '阶梯瀑布图（柱状图模拟）',
        url: `${prefix}bar/barWaterfall2`
      },
      {
        title: '堆叠条形图',
        url: `${prefix}bar/barYCategoryStack`
      },
      {
        title: '柱状图框选',
        url: `${prefix}bar/barBrush`,
        state: true
      },
      {
        title: '正负条形图',
        url: `${prefix}bar/barNegative2`
      },
      {
        title: '某地区蒸发量和降水量',
        url: `${prefix}bar/Bar1`
      },
      {
        title: '折柱混合',
        url: `${prefix}bar/mixLineBar`
      },
      {
        title: '多数值轴轴缩放',
        url: `${prefix}bar/mixZoomOnValue`
      },
      {
        title: '多 Y 轴示例',
        url: `${prefix}bar/multipleYAxis`
      },
      {
        title: '柱状图动画延迟',
        url: `${prefix}bar/barAnimationDelay`
      },
      {
        title: '柱状图下钻动画',
        url: `${prefix}bar/barDrilldown`
      },
      {
        title: '大数据量柱图',
        url: `${prefix}bar/barLarge`
      },
      {
        title: '动态排序柱状图',
        url: `${prefix}bar/barRace`
      },
      {
        title: '动态排序柱状图 - 人均收入',
        url: `${prefix}bar/barRaceCountry`
      },
      {
        title: '天气统计（富文本）',
        url: `${prefix}rich/barRichText`
      },
      {
        title: '动态数据',
        url: `${prefix}bar/dynamicData`
      },
      {
        title: '2002全国宏观经济指标',
        url: `${prefix}bar/mixTimelineFinance`
      },
      {
        title: '水印 - ECharts 下载统计',
        url: `${prefix}bar/watermark`,
        state: true
      },
      {
        title: 'Bar Chart on Polar',
        url: `${prefix}bar/barPolarRealEstate`
      },
      {
        title: '极坐标系下的堆叠柱状图',
        url: `${prefix}bar/barPolarStack`
      },
      {
        title: '极坐标系下的堆叠柱状图（二）',
        url: `${prefix}bar/barPolarStackRadial`
      },
      {
        title: '圆角环形图',
        url: `${prefix}bar/polarRoundCap`
      },
      {
        title: '指定数据到坐标轴的映射',
        url: `${prefix}dataset/datasetEncode0`
      }
    ]
  },
  {
    title: '散点图',
    routes: [
      {
        title: '基础散点图',
        url: `${prefix}scatter/scatterSimple`
      },
      {
        title: "Anscomb's quartet",
        url: `${prefix}scatter/scatterAnscombeAuartet`
      },
      {
        title: '数据聚合',
        url: `${prefix}scatter/scatterClustering`
      },
      {
        title: '聚合过程可视化',
        url: `${prefix}scatter/scatterClusteringProcess`
      },
      {
        title: '指数回归（使用统计插件）',
        url: `${prefix}scatter/scatterExponentialRegression`
      },
      {
        title: '线性回归（使用统计插件）',
        url: `${prefix}scatter/scatterLinearRegression`
      },
      {
        title: '多项式回归（使用统计插件）',
        url: `${prefix}scatter/scatterPolynomialRegression`
      },
      {
        title: '对数回归（使用统计插件）',
        url: `${prefix}scatter/scatterLogarithmicRegression`
      },
      {
        title: '涟漪特效散点图',
        url: `${prefix}scatter/scatterEffect`
      },
      {
        title: 'GitHub 打卡气泡图',
        url: `${prefix}scatter/scatterPunchCard`
      },
      {
        title: '男性女性身高体重分布',
        url: `${prefix}scatter/scatterWeight`
      },
      {
        title: '散点图聚合为柱状图动画',
        url: `${prefix}scatter/scatterAggregateBar`
      },
      {
        title: '散点图标签右侧对齐',
        url: `${prefix}scatter/scatterLabelAlignRight`
      },
      {
        title: '散点图标签顶部对齐',
        url: `${prefix}scatter/scatterLabelAlignTop`
      },
      {
        title: '散点图变形动画',
        url: `${prefix}scatter/scatterSymbolMorph`
      },
      {
        title: '大规模散点图',
        url: `${prefix}scatter/scatterLarge`
      },
      {
        title: '大规模星云散点图',
        url: `${prefix}scatter/scatterNebula`
      },
      {
        title: '流式渲染和视觉映射操作',
        url: `${prefix}scatter/scatterStreamVisual`
      },
      {
        title: '气泡图',
        url: `${prefix}scatter/bubbleGradient`
      },
      {
        title: 'AQI 气泡图',
        url: `${prefix}scatter/scatterAqiColor`
      },
      {
        title: '营养分布散点图',
        url: `${prefix}scatter/scatterNutrients`
      },
      {
        title: '营养分布散点矩阵',
        url: `${prefix}scatter/scatterNutrientsMatrix`
      },
      {
        title: 'GitHub 打卡气泡图（极坐标）',
        url: `${prefix}scatter/scatterPolarPunchCard`
      },
      {
        title: '各国人均寿命与GDP关系演变',
        url: `${prefix}scatter/scatterLifeExpectancyTimeline`,
        state: true
      },
      {
        title: 'Master Painter Color Choices Throughout History',
        url: `${prefix}scatter/scatterPainterChoice`
      },
      {
        title: '全国主要城市空气质量 - 百度地图',
        url: `${prefix}scatter/effectScatterBmap`
      },
      {
        title: '单轴散点图',
        url: `${prefix}scatter/scatterSingleAxis`,
        state: false
      }
    ]
  },
  {
    title: '饼图',
    routes: [
      {
        title: '某站点用户Access From',
        url: `${prefix}pie/pieSimple`
      },
      {
        title: '圆角环形图',
        url: `${prefix}pie/pieBorderRadius`
      },
      {
        title: '环形图',
        url: `${prefix}pie/pieDoughnut`
      },
      {
        title: '饼图自定义样式',
        url: `${prefix}pie/pieCustom`
      },
      {
        title: '饼图纹理',
        url: `${prefix}pie/piePattern`,
        state: true
      },
      {
        title: '南丁格尔玫瑰图',
        url: `${prefix}pie/pieRoseType`
      },
      {
        title: '基础南丁格尔玫瑰图',
        url: `${prefix}pie/pieRoseTypeSimple`
      },
      {
        title: '饼图标签对齐',
        url: `${prefix}pie/pieAlignTo`
      },
      {
        title: '饼图引导线调整',
        url: `${prefix}pie/pieLabelLineAdjust`
      },
      {
        title: '可滚动的图例',
        url: `${prefix}pie/pieLegend`
      },
      {
        title: '嵌套环形图',
        url: `${prefix}pie/pieNest`,
        state: true
      },
      {
        title: '分割数据到数个饼图',
        url: `${prefix}dataset/dataTransformMultiplePie`
      },
      {
        title: '默认 encode 设置',
        url: `${prefix}dataset/datasetDefault`
      },
      {
        title: '日历饼图',
        url: `${prefix}pie/calendarPie`
      },
      {
        title: '联动和共享数据集',
        url: `${prefix}dataset/DatasetLink`
      },
      {
        title: '富文本标签',
        url: `${prefix}rich/pieRichText`,
        state: true
      }
    ]
  },
  {
    title: 'K 线图',
    routes: [
      {
        title: '基础 K 线图',
        url: `${prefix}candlestick/candlestickSimple`
      },
      {
        title: 'OHLC 图（使用自定义系列)',
        url: `${prefix}candlestick/customOhlc`
      },
      {
        title: '上证指数',
        url: `${prefix}candlestick/candlestickSh`
      },
      {
        title: '触屏上的坐标轴指示器',
        url: `${prefix}candlestick/candlestickTouch`
      }
    ]
  },
  {
    title: '雷达图',
    routes: [
      {
        title: '基础雷达图',
        url: `${prefix}radar/radar`
      },
      {
        title: 'AQI - 雷达图',
        url: `${prefix}radar/radarAqi`
      },
      {
        title: '浏览器占比变化',
        url: `${prefix}radar/radar2`
      },
      {
        title: '自定义雷达图',
        url: `${prefix}radar/radarCustom`
      },
      {
        title: '多雷达图',
        url: `${prefix}radar/radarMultiple`
      }
    ]
  },
  {
    title: '地理坐标/地图',
    routes: [
      {
        title: '庖丁解牛',
        url: `${prefix}map/geoBeefCuts`
      },
      {
        title: '在地图上显示饼图',
        url: `${prefix}map/mapUsaPie`
      },
      {
        title: '内脏数据（SVG）',
        url: `${prefix}map/geoOrgan`,
        state: true
      },
      {
        title: '航班选座（SVG）',
        url: `${prefix}map/geoSeatmapFlight`,
        state: true
      },
      {
        title: 'GEO 路径图（SVG）',
        url: `${prefix}map/geoSvgLines`,
        state: true
      },
      {
        title: '地图（SVG）',
        url: `${prefix}map/geoSvgMap`,
        state: true
      },
      {
        title: '散点图（SVG）',
        url: `${prefix}map/geoSvgScatterSimple`,
        state: true
      },
      {
        title: '交通（SVG）',
        url: `${prefix}map/geoSvgTraffic`,
        state: true
      },
      {
        title: '杭州热门步行路线 - 百度地图',
        url: `${prefix}scatter/effectScatterBmap`,
        state: true
      },
      {
        title: '全国主要城市空气质量 - 百度地图',
        url: `${prefix}scatter/effectScatterBmap`,
        state: true
      }
    ]
  },
  {
    title: '盒须图',
    routes: [
      {
        title: '基础盒须图',
        url: `${prefix}boxplot/boxplotLightVelocity`
      },
      {
        title: '多系列盒须图',
        url: `${prefix}boxplot/boxplotMulti`
      },
      {
        title: '垂直方向盒须图',
        url: `${prefix}boxplot/boxplotLightVelocity2`
      }
    ]
  },
  {
    title: '热力图',
    routes: [
      {
        title: '笛卡尔坐标系上的热力图',
        url: `${prefix}heatmap/heatmapCartesian`
      },
      {
        title: '热力图 - 颜色的离散映射',
        url: `${prefix}heatmap/heatmapLargePiecewise`,
        state: true
      }
    ]
  },
  {
    title: '关系图',
    routes: [
      {
        title: 'Graph 简单示例',
        url: `${prefix}graph/graphSimple`
      },
      {
        title: '力引导布局',
        url: `${prefix}graph/graphForce2`
      },
      {
        title: '日历关系图',
        url: `${prefix}calendar/calendarGraph`
      },
      {
        title: '动态增加图节点',
        url: `${prefix}graph/GraphForceDynamic`
      }
    ]
  },
  // {
  // title: '路径图',
  // routes: [
  // {
  //   title: '杭州热门步行路线-百度地图',
  //   url: `${prefix}lines/hangzhouLines`,
  // },
  // {
  //   title: '北京公交路线-百度地图',
  //   url: `${prefix}graph/graphForce2`
  // },
  // {
  //   title: '北京公交路线-线特效',
  //   url: `${prefix}calendar/calendarGraph`
  // },
  // {
  //   title: '使用线图绘制近100万的纽约街道数据',
  //   url: `${prefix}lines/millionNyStreets`
  // }
  // ]
  // },
  {
    title: '树图',
    routes: [
      {
        title: '从左到右树状图',
        url: `${prefix}tree/treeBasic`
      },
      {
        title: '多棵树',
        url: `${prefix}tree/multipleTrees`
      },
      {
        title: '从下到上树状图',
        url: `${prefix}tree/bottomTopTree`
      },
      {
        title: '从右到左树状图',
        url: `${prefix}tree/rightLeftTree`
      },
      {
        title: '折线树图',
        url: `${prefix}tree/polylineTree`
      },
      {
        title: '径向树状图',
        url: `${prefix}tree/radialTree`
      },
      {
        title: '从上到下树状图',
        url: `${prefix}tree/topBottomTree`
      }
    ]
  },
  {
    title: '矩形树图',
    routes: [
      {
        title: '矩形树图和旭日图的动画过渡',
        url: `${prefix}treemap/sunburstTransition`,
        state: true
      },
      {
        title: '磁盘占用',
        url: `${prefix}treemap/treemapDisk`
      },
      {
        title: 'ECharts 配置项查询分布',
        url: `${prefix}treemap/echartsOptionQuery`
      },
      {
        title: 'How $3.7 Trillion is Spent',
        url: `${prefix}treemap/howTrillionSpent`,
        state: true
      },
      {
        title: '显示父层级标签',
        url: `${prefix}treemap/showParentLabels`
      },
      {
        title: '基础矩形树图',
        url: `${prefix}treemap/basicTreemap`
      },
      {
        title: '映射为渐变色',
        url: `${prefix}treemap/gradientMapping`,
        state: true
      }
    ]
  },
  {
    title: '旭日图',
    routes: [
      {
        title: '基础旭日图',
        url: `${prefix}sunburst/sunburstSimple`
      },
      {
        title: '圆角旭日图',
        url: `${prefix}sunburst/roundedCornerSunburst`
      },
      {
        title: '旭日图标签旋转',
        url: `${prefix}sunburst/sunburstLabelRotate`
      },
      {
        title: 'Monochrome Sunburst',
        url: `${prefix}sunburst/monochromeSunburst`
      },
      {
        title: '旭日图使用视觉编码',
        url: `${prefix}sunburst/sunburstVisualMap`
      },
      {
        title: 'Drink Flavors',
        url: `${prefix}sunburst/drinkFlavors`
      },
      {
        title: '书籍分布',
        url: `${prefix}sunburst/bookRecords`,
        state: true
      }
    ]
  },
  {
    title: '平行坐标系',
    routes: [
      {
        title: '基础平行坐标',
        url: `${prefix}parallel/parallelSimple`
      },
      {
        title: 'AQI 分布（平行坐标）',
        url: `${prefix}parallel/parallelAqi`
      },
      {
        title: '营养结构（平行坐标）',
        url: `${prefix}parallel/parallelNutrients`,
        state: true
      },
      {
        title: '散点矩阵和平行坐标',
        url: `${prefix}parallel/scatterMatrix`
      }
    ]
  },
  {
    title: '桑基图',
    routes: [
      {
        title: '基础桑基图',
        url: `${prefix}sankey/sankeySimple`
      },
      {
        title: '垂直方向的桑基图',
        url: `${prefix}sankey/sankeyOrientVertical`
      },
      {
        title: '桑基图节点自定义样式',
        url: `${prefix}sankey/specifyItemStyle`
      },
      {
        title: '桑基图层级自定义样式',
        url: `${prefix}sankey/levelsSetting`
      },
      {
        title: '桑基图渐变色边',
        url: `${prefix}sankey/gradientEdge`,
        state: true
      },
      {
        title: '桑基图左对齐布局',
        url: `${prefix}sankey/nodeAlignLeft`,
        state: true
      },
      {
        title: '桑基图右对齐布局',
        url: `${prefix}sankey/nodeAlignRight`,
        state: true
      }
    ]
  },
  {
    title: '漏斗图',
    routes: [
      {
        title: '漏斗图1',
        url: `${prefix}funnel/funnelChart`
      },
      {
        title: '漏斗图(对比)',
        url: `${prefix}funnel/funnelCompare`
      },
      {
        title: '漏斗图3',
        url: `${prefix}funnel/funnelCustomize`
      },
      {
        title: 'Funnel',
        url: `${prefix}funnel/funnel`
      }
    ]
  },
  {
    title: '仪表盘',
    routes: [
      {
        title: '基础仪表盘',
        url: `${prefix}gauge/gaugeBasic`
      },
      {
        title: '带标签数字动画的基础仪',
        url: `${prefix}gauge/gaugeSimple`
      },
      {
        title: '速度仪表盘',
        url: `${prefix}gauge/speedGauge`
      },
      {
        title: '进度仪表盘',
        url: `${prefix}gauge/progressGauge`
      },
      {
        title: '阶段速度仪表盘',
        url: `${prefix}gauge/stageSpeedGauge`
      },
      {
        title: '等级仪表盘',
        url: `${prefix}gauge/gradeGauge`
      },
      {
        title: '多标题仪表盘',
        url: `${prefix}gauge/multiTitleGauge`
      },
      {
        title: '气温仪表盘',
        url: `${prefix}gauge/temperatureGauge`
      },
      {
        title: '得分环',
        url: `${prefix}gauge/ringGauge`
      },
      {
        title: '气压表',
        url: `${prefix}gauge/gaugeBarometer`
      },
      {
        title: '时钟仪表盘',
        url: `${prefix}gauge/clock`
      },
      {
        title: 'Gauge Car',
        url: `${prefix}gauge/gaugeCar`
      }
    ]
  },
  {
    title: '象形柱图',
    routes: [
      {
        title: '象形主图变形为柱状图',
        url: `${prefix}pictorialBar/transition`
      },
      {
        title: '人体含水量',
        url: `${prefix}pictorialBar/pictorialBarBodyFill`
      },
      {
        title: '虚线柱状图效果',
        url: `${prefix}pictorialBar/dottedBar`
      },
      {
        title: '森林的增长',
        url: `${prefix}pictorialBar/expansionForest`,
        state: true
      },
      {
        title: '圣诞愿望清单和山峰高度',
        url: `${prefix}pictorialBar/wishAndMountain`,
        state: true
      },
      {
        title: '精灵',
        url: `${prefix}pictorialBar/spirits`,
        state: true
      },
      {
        title: '交通工具',
        url: `${prefix}pictorialBar/vehicles`
      },
      {
        title: '驯鹿的速度',
        url: `${prefix}pictorialBar/velocityOfReindeers`
      }
    ]
  },
  {
    title: '主题河流图',
    routes: [
      {
        title: '主题河流图',
        url: `${prefix}themeRiver/themeRiverBasic`
      },
      {
        title: 'ThemeRiver Lastfm',
        url: `${prefix}themeRiver/themeRiverLastfm`
      }
    ]
  },
  {
    title: '日历坐标系',
    routes: [
      {
        title: '基础日历图',
        url: `${prefix}calendar/calendarSimple`
      },
      {
        title: '日历热力图',
        url: `${prefix}calendar/heatmap`
      },
      {
        title: '纵向日历图',
        url: `${prefix}calendar/heatmapVertical`
      },
      {
        title: '横向日历图',
        url: `${prefix}calendar/heatmapHorizontal`
      },
      {
        title: '日历关系图',
        url: `${prefix}calendar/calendarGraph`
      },
      {
        title: '农历日历图',
        url: `${prefix}calendar/calendarLunar`,
        state: true
      },
      {
        title: '日历饼图',
        url: `${prefix}calendar/calendarPie`
      },
      {
        title: '日历图',
        url: `${prefix}calendar/calendarCharts`,
        state: true
      },
      {
        title: '日历图自定义图标',
        url: `${prefix}calendar/customCalendarIcon`
      }
    ]
  },
  {
    title: '自定义系列',
    routes: [
      // {
      //   title: '直方图（自定义系列）',
      //   url: `${prefix}custom/histogram`
      // },
      {
        title: '利润分布直方图',
        url: `${prefix}custom/customProfit`
      },
      {
        title: '使用自定系列给散点图添加误差范围',
        url: `${prefix}custom/errorScatter`
      },
      {
        title: '使用自定义系列添加柱状图趋势',
        url: `${prefix}custom/customBarTrend`
      },
      {
        title: '自定义多边形图',
        url: `${prefix}custom/cartesianPolygon`
      },
      {
        title: '使用自定系列给柱状图添加误差范围',
        url: `${prefix}custom/errorBar`
      },
      {
        title: '性能分析图',
        url: `${prefix}custom/customProfile`
        // state: true
      },
      {
        title: 'Cycle Plot',
        url: `${prefix}custom/cyclePlot`
      },
      {
        title: '机场航班甘特图',
        url: `${prefix}custom/ganttChart`,
        state: true
      },
      {
        title: '极坐标热力图（自定义系列）',
        url: `${prefix}custom/polarHeatmap`
      },
      {
        title: '风向图',
        url: `${prefix}custom/windBarb`,
        state: true,
      },
      {
        title: '日历图自定义图标',
        url: `${prefix}custom/customCalendarIcon`,
      },
      {
        title: '使用自定义系列绘制风场',
        url: `${prefix}custom/windVectors`,
      },
      {
        title: '六边形分箱图（自定义系列）',
        url: `${prefix}custom/hexagonalBinning`,
        state: true
      },
      {
        title: '自定义仪表',
        url: `${prefix}custom/CustomGauge`,
        state: true
      },
      {
        title: '自定义特效',
        url: `${prefix}custom/customizedEffect`,
        state: true
      },
      {
        title: '自定义议会图与饼图过渡动画',
        url: `${prefix}custom/PieParliamentTransition`,
      },
      {
        title: 'Circle Packing with d3',
        url: `${prefix}custom/circlePacking`,
      },
      {
        title: '自定义螺旋线竞速',
        url: `${prefix}custom/customSpiralRace`,
        state: true
      }
    ]
  },
  {
    title: '数据集',
    routes: [
      {
        title: '柱状图排序',
        url: `${prefix}dataset/dataTransformSortBar`
      },
      {
        title: '指定数据到坐标轴的映射',
        url: `${prefix}dataset/datasetEncode0`
      },
      {
        title: '分割数据到数个饼图',
        url: `${prefix}dataset/dataTransformMultiplePie`
      },
      {
        title: '默认 encode 设置',
        url: `${prefix}dataset/datasetDefault`
      },
      {
        title: '指定数据到坐标轴的映射1',
        url: `${prefix}dataset/encodeAndMatrix`
      },
      {
        title: '联动和共享数据集',
        url: `${prefix}dataset/DatasetLink`
      },
      {
        title: '系列按行和按列排布',
        url: `${prefix}dataset/datasetSeriesLayoutBy`
      },
      {
        title: '最简单的数据集（dataset）',
        url: `${prefix}dataset/datasetSimple0`
      },
      {
        title: '对象数组的输入格式',
        url: `${prefix}dataset/datasetSimple1`
      },
    ]
  },
  {
    title: '数据区域缩放',
    routes: [
      {
        title: '使用自定系列给散点图',
        url: `${prefix}dataZoom/customErrorScatter`
      },
      {
        title: '大数据量面积图',
        url: `${prefix}dataZoom/areaSimple`
        // state: true
      },
      {
        title: '机场航班甘特图(重复)',
        url: `${prefix}custom/ganttChart`,
        state: true,
      },
      {
        title: '风向图(重复)',
        url: `${prefix}custom/windBarb`,
        state: true,
      },
      {
        title: '移动端上的dataZoom(重复)',
        url: `${prefix}line/lineTooltipTouch`,
        state: true
      },
    ]
  },
  {
    title: '图形组件',
    routes: [
      {
        title: '关键帧描边动画',
        url: `${prefix}graphic/graphicStrokeAnimation`,
        state: true
      },
      {
        title: '加载动画',
        url: `${prefix}graphic/graphicLoading`
        // state: true
      },
      {
        title: 'Wave Animation',
        url: `${prefix}graphic/GraphicWaveAnimation`
        // state: true
      },
      {
        title: '自定义图形组件',
        url: `${prefix}graphic/lineGraphic`
        // state: true
      },
      {
        title: '可拖拽点',
        url: `${prefix}graphic/LineDraggable`
        // state: true
      }
    ]
  },
  {
    title: '富文本',
    routes: [
      {
        title: '富文本标签',
        url: `${prefix}rich/pieRichText`
      },
      {
        title: '天气统计（富文本）',
        url: `${prefix}rich/barRichText`
      },
      {
        title: '嵌套环形图',
        url: `${prefix}pie/pieNest`
      }
    ]
  }
];

export default function Entry() {
  const [active, setActive] = useState(0);
  return (
    <View className="contain">
      <ScrollView className="contain-left">
        {routes.map((item, i) => (
          <Text
            key={item.title}
            onClick={() => setActive(i)}
            className={`contain-left__text${
              active === i ? ' contain-left__active' : ''
            }`}
          >
            {item.title}
          </Text>
        ))}
      </ScrollView>
      <ScrollView className="contain-right">
        {routes[active].routes.map(item => (
          <View
            key={item.title}
            className="contain-right__text"
            onClick={() => navigateTo({ url: item.url })}
          >
            <Text>{item.title} </Text>
            {item?.state ? <Icon size="14" type="warn" /> : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
