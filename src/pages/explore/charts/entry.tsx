import { Text, View } from '@tarojs/components';
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
        url: `${prefix}lineMarkline`
      },
      {
        title: '折线图区域高亮',
        url: `${prefix}areaPieces`
      },
      {
        title: '一天用电量分布',
        url: `${prefix}lineSections`
      }
    ]
  },
  {
    title: '柱状图',
    routes: [
      {
        title: '饼形柱状图',
        url: `${prefix}barPolarRealEstate`
      },
      {
        title: '交错正负轴标签',
        url: `${prefix}barNegative`
      },
      {
        title: '某地区蒸发量和降水量',
        url: `${prefix}Bar1`
      }
    ]
  },
  {
    title: '散点图',
    routes: [
      {
        title: '气泡图',
        url: `${prefix}bubbleGradient`
      },
      {
        title: '大规模散点图',
        url: `${prefix}scatterLarge`
      },
      {
        title: '全国主要城市空气质量',
        url: `${prefix}effectScatterBmap`
      },
      {
        title: '单轴散点图',
        url: `${prefix}scatterSingleAxis`
      }
    ]
  },
  {
    title: '饼图',
    routes: [
      {
        title: '嵌套环形图',
        url: `${prefix}pieNest`
      }
    ]
  },
  {
    title: '地理坐标/地图',
    routes: [
      {
        title: '庖丁解牛',
        url: `${prefix}geoBeefCuts`
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
          <Text
            key={item.title}
            className="contain-right__text"
            onClick={() => navigateTo({ url: item.url })}
          >
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
}
