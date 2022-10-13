import { Icon, Text, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { useState } from 'react';
import './entry.scss';

const prefix = 'pages/explore/charts/pages/';
const routes = [
  {
    title: '折线图',
    routes: [
      {
        title: '折线图的标记线',
        url: `${prefix}line/lineMarkline`,
        state: true // 表示是否异常 true-有问题
      },
      {
        title: '折线图区域高亮',
        url: `${prefix}line/areaPieces`
      },
      {
        title: '一天用电量分布',
        url: `${prefix}line/lineSections`,
        state: false
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
      }
    ]
  },
  {
    title: 'K 线图',
    routes: [
      {
        title: '基础 K 线图',
        url: `${prefix}candlestick/candlestickSimple`
      }
    ]
  },
  {
    title: '雷达图',
    routes: [
      {
        title: '基础雷达图',
        url: `${prefix}radar/radar`
      }
    ]
  },
  {
    title: '地理坐标/地图',
    routes: [
      {
        title: '庖丁解牛',
        url: `${prefix}map/geoBeefCuts`
      }
    ]
  },
  {
    title: '盒须图',
    routes: [
      {
        title: '基础盒须图',
        url: `${prefix}boxplot/boxplotLightVelocity`
      }
    ]
  }
];

export default function Entry() {
  const [active, setActive] = useState(0);

  return (
    <View className="contain">
      <View className="contain-left">
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
      </View>
      <View className="contain-right">
        {routes[active].routes.map(item => (
          <View key={item.title} className="contain-right__text">
            <Text onClick={() => navigateTo({ url: item.url })}>
              {item.title}{' '}
            </Text>
            {item?.state ? <Icon size="14" type="warn" /> : null}
          </View>
        ))}
      </View>
    </View>
  );
}
