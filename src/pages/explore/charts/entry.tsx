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
        url: `${prefix}line/lineTooltipTouch`,
        state: true
      },
      {
        title: '联动和共享数据集',
        url: `${prefix}dataset/DatasetLink`
      },
      {
        title: '自定义图形组件',
        url: `${prefix}graphic/lineGraphic`,
        state: true
      },
      {
        title: '可拖拽点',
        url: `${prefix}graphic/LineDraggable`,
        state: true
      },
      {
        title: '大数据量面积图',
        url: `${prefix}dataZoom/areaSimple`
      }
    ]
  },
  {
    title: '柱状图',
    routes: [
      {
        title: '饼形柱状图',
        url: `${prefix}bar/barPolarRealEstate`,
        state: false
      },
      {
        title: '交错正负轴标签',
        url: `${prefix}bar/barNegative`,
        state: false
      },
      {
        title: '某地区蒸发量和降水量',
        url: `${prefix}bar/Bar1`
      },
      {
        title: '指定数据到坐标轴的映射',
        url: `${prefix}dataset/datasetEncode0`,
        state: true
      }
    ]
  },
  {
    title: '散点图',
    routes: [
      {
        title: '气泡图',
        url: `${prefix}scatter/bubbleGradient`
      },
      // {
      //   title: '大规模散点图',
      //   url: `${prefix}scatter/scatterLarge`,
      // },
      {
        title: '全国主要城市空气质量',
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
        title: '嵌套环形图',
        url: `${prefix}pie/pieNest`,
        state: true
      },
      {
        title: '日历饼图',
        url: `${prefix}pie/calendarPie`,
        state: true
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
        url: `${prefix}map/geoBeefCuts`,
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
        title: '漏斗图3',
        url: `${prefix}funnel/funnelCustomize`
      }
    ]
  },
  {
    title: '仪表盘',
    routes: [
      {
        title: '带标签数字动画的基础仪',
        url: `${prefix}gauge/gaugeSimple`
      }
    ]
  },
  {
    title: '象形柱图',
    routes: [
      {
        title: '人体含水量',
        url: `${prefix}pictorialBar/pictorialBarBodyFill`
      }
    ]
  },
  {
    title: '主题河流图',
    routes: [
      {
        title: '主题河流图',
        url: `${prefix}themeRiver/themeRiverBasic`
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
        title: '日历关系图',
        url: `${prefix}calendar/calendarGraph`
      }
    ]
  },
  {
    title: '自定义系列',
    routes: [
      {
        title: '利润分布直方图',
        url: `${prefix}custom/customProfit`
      },
      {
        title: '自定义议会图与饼图过渡动画（卡顿）',
        url: `${prefix}custom/PieParliamentTransition`,
        state: true
      },
      {
        title: '自定义仪表',
        url: `${prefix}custom/CustomGauge`,
        state: true
      },
      {
        title: '性能分析图',
        url: `${prefix}custom/customProfile`
        // state: true
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
        title: '联动和共享数据集',
        url: `${prefix}dataset/DatasetLink`
      },
      {
        title: '指定数据到坐标轴的映射',
        url: `${prefix}dataset/datasetEncode0`
      },
      {
        title: '分割数据到数个饼图',
        url: `${prefix}dataset/dataTransformMultiplePie`
      }
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
      }
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
        url: `${prefix}rich/barRichText`,
        state: true
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
