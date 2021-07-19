/*
 * @Author: iChengbo
 * @Date: 2021-07-19 15:54:35
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-21 10:32:51
 * @FilePath: /taro-react-native/src/pages/apis/index.tsx
 */
import Taro from "@tarojs/taro";
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import logo from "../asset/component/logo.png";
import surfacePng from "../asset/component/view.png";
import contentPng from "../asset/component/content.png";
import formPng from "../asset/component/form.png";
import navPng from "../asset/component/nav.png";
import mediaPng from "../asset/component/media.png";
import mapPng from "../asset/component/map.png";
import canvasPng from "../asset/component/canvas.png";

import "./index.scss";

const PNGS = {
  surfacePng,
  contentPng,
  formPng,
  navPng,
  mediaPng,
  mapPng,
  canvasPng
};
export default class Index extends Component<never, any> {
  constructor(props: never) {
    super(props)
    this.state = {
      list: [
        {
          id: "basic",
          name: "基础",
          open: false,
          pages: [
            {
              id: 'system',
              name: '系统',
            }
          ]
        },
        {
          id: "nav",
          name: "路由",
          open: false,
          pages: []
        },
        {
          id: "",
          name: "框架",
          open: false,
          pages: []
        },
        {
          id: "surface",
          name: "界面",
          open: false,
          pages: [
            {
              id: "interactive",
              name: "交互",
            }, {
              id: "navigationBar",
              name: "导航",
            }, {
              id: "background",
              name: "背景"
            }
          ]
        },
        {
          id: "",
          name: "网络",
          open: false,
          pages: []
        },
        {
          id: "",
          name: "数据缓存",
          open: false,
          pages: []
        },
        {
          id: "media",
          name: "媒体",
          open: false,
          pages: []
        },
        {
          id: "map",
          name: "位置",
          open: false,
          pages: []
        },
      ]
    }
  }

  kindToggle = (id: string) => () => {
    const list = this.state.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setState({
      list: list
    });
  };

  goToComponent = (page: { url: string }) => {
    console.log(99, page)
    Taro.navigateTo({
      url: page.url
    });
  };

  render() {
    const { list = [] } = this.state;
    return (
      <View className='index'>
        <View className='index-hd'>
          <Image className='index-logo' src={logo} />
          <View className='index-desc'>
            <Text className='index-desc_text'>
              以下将展示 Taro 官方 API 能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式。
            </Text>
          </View>
        </View>
        <View className='index-bd'>
          <View className='kind-list'>
            {list.map(item => {
              item.hdClass =
                "kind-list-item-hd " +
                (item.open ? "kind-list-item-hd-show" : "");
              item.bdClass =
                "kind-list-item-bd " +
                (item.open ? "kind-list-item-bd-show" : "");
              item.boxClass =
                "navigator-box " + (item.open ? "navigator-box-show" : "");
              item.imgSrc = !!PNGS[`${item.id}Png`] ? PNGS[`${item.id}Png`] : '';
              item._pages = item.pages.map(page => {
                return {
                  pageName: page.name,
                  page: page.id,
                  url: `/pages/apis/pages/${item.id}/${page.id}/index`
                };
              });
              return item;
            }).map((item, index) => {
              if (item._pages.length == 0) {
                return null;
              }
              return (
                <View className='kind-list-item' key={index}>
                  <View
                    className={item.hdClass}
                    onClick={this.kindToggle(item.id)}
                  >
                    <View className='kind-list-text'>
                      <Text>{item.name}</Text>
                    </View>
                    {!!item.imgSrc && <Image className='kind-list-img' src={item.imgSrc} />}
                  </View>
                  <View className={item.bdClass}>
                    <View className={item.boxClass}>
                      {item._pages.map((page, idx) => {
                        return (
                          <View
                            onClick={this.goToComponent.bind(this, page)}
                            key={idx}
                            className='navigator'
                          >
                            <Text className='navigator-text'>
                              {page.pageName}
                            </Text>
                            <View className='navigator-arrow' />
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    )
  }
}
