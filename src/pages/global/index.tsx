import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import hooksPng from "@/assets/iconpark/aiming.png";
import routerPng from "@/assets/iconpark/navigation.png";
import lifecyclePng from "@/assets/iconpark/cycle-arrow.png";

import "./index.scss";

const PNGS = {
  hooksPng,
  routerPng,
  lifecyclePng,
};

export default class Index extends Component<never, any> {
  constructor(props: never) {
    super(props);
    this.state = {
      list: [
        {
          id: "hooks",
          name: "Taro Hooks",
          open: false,
          pages: [
            {
              id: 'page',
              name: 'Hooks',
            }
          ]
        },
        {
          id: "lifecycle",
          name: "生命周期",
          open: false,
          pages: [
            {
              id: 'page',
              name: '页面生命周期',
            }
          ]
        }
      ]
    };
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
    Taro.navigateTo({
      url: page.url
    });
  };

  render() {
    return (
      <ScrollView className='index' enableBackToTop style={{ paddingBottom: 80 }}>
        <View className='index-hd'>
          <View className='index-desc'>
            <Text className='index-desc_text'>
              以下将展示 Taro 全局能力。
            </Text>
          </View>
        </View>
        <View className='index-bd'>
          <View className='kind-list'>
            {this.state.list
              .map(item => {
                item.hdClass =
                  "kind-list-item-hd " +
                  (item.open ? "kind-list-item-hd-show" : "");
                item.bdClass =
                  "kind-list-item-bd " +
                  (item.open ? "kind-list-item-bd-show" : "");
                item.boxClass =
                  "navigator-box " + (item.open ? "navigator-box-show" : "");
                item.imgSrc = PNGS[`${item.id}Png`];
                item._pages = item.pages.map(page => {
                  return {
                    ...page,
                    url: `/pages/global/pages/${item.id}/${page.id}`
                  };
                });
                return item;
              })
              .map((item, index) => {
                return (
                  <View className='kind-list-item' key={index}>
                    <View
                      className={item.hdClass}
                      onClick={this.kindToggle(item.id)}
                    >
                      <View className='kind-list-text'>
                        <Text>{item.name}</Text>
                      </View>
                      <Image className='kind-list-img' src={item.imgSrc} />
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
                                {page.name}
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
      </ScrollView>
    );
  }
}
