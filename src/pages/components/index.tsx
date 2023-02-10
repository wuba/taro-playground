import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import viewPng from "@/assets/iconpark/waterfalls-h.png";
import contentPng from "@/assets/iconpark/add-text-two.png";
import formPng from "@/assets/iconpark/list-view.png";
import mediaPng from "@/assets/iconpark/play-two.png";
import navPng from "@/assets/iconpark/navigation.png";

import "./index.scss";

const PNGS = {
  viewPng,
  contentPng,
  formPng,
  mediaPng,
  navPng,
};

export default class Index extends Component<never, any> {
  constructor(props: never) {
    super(props);
    this.state = {
      list: [
        {
          id: "view",
          name: "视图容器",
          open: false,
          pages: [
            "view",
            "scroll-view",
            "swiper",
            "virtual-list",
            "movable-view",
            "page-container"
          ]
        },
        {
          id: "content",
          name: "基础内容",
          open: false,
          pages: ["text", "icon", "progress", "rich-text"]
        },
        {
          id: "form",
          name: "表单组件",
          open: false,
          pages: [
            "button",
            "checkbox",
            "form",
            "input",
            "label",
            "picker",
            "picker-view",
            "radio",
            "slider",
            "switch",
            "textarea"
          ]
        },
        {
          id: "nav",
          name: "导航",
          open: false,
          pages: ["navigator"]
        },
        {
          id: "media",
          name: "媒体组件",
          open: false,
          pages: [
            "image",
            // "audio", 已废弃
            "video",
            "camera"
          ]
        },
        // {
        //   id: "map",
        //   name: "地图",
        //   pages: ["map"]
        // },
        // {
        //   id: "canvas",
        //   name: "画布",
        //   pages: ["canvas"]
        // }
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
              以下将展示 Taro 官方组件能力。
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
                    page: page,
                    url: `/pages/components/pages/${page}/${page}`
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
                                {page.page}
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
