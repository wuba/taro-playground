import React from "react";
import Taro from '@tarojs/taro';
import { View, ScrollView } from "@tarojs/components";
import Header from "@/components/head/head";
import "./scroll-view.scss";

export default class PageView extends React.Component {
  state = {
    list: [1,2,3]
  }
  initNum = 3;
  render() {
    return (
      <ScrollView className='components-page'>
        <View className='components-page__header'>
          <Header title='ScrollView'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example scroll-view'>
            <View className='example-header'>Horizontal 横向滚动</View>
            <View className='example-body'>
              <ScrollView
                scrollX
                onScrollToUpper={() => {
                  console.log('onScrollToUpper触发成功');
                }}
                onScrollToLower={() => {
                  Taro.showToast({
                    title: "onScrollToLower触发成功",
                    icon: "success",
                    duration: 1000
                  });
                }}
                className='example-body__scroll-view example-body__scroll-view--H'
              >
                <View className='example-body__scroll-view--H-item demo-text-1'></View>
                <View className='example-body__scroll-view--H-item demo-text-2'></View>
                <View className='example-body__scroll-view--H-item demo-text-3'></View>
              </ScrollView>
            </View>
          </View>

          <View className='components-page__body-example example scroll-view'>
            <View className='example-header'>Vertical 纵向滚动</View>
            <View className='example-body'>
              <ScrollView
                scrollY
                upperThreshold={0}
                onScrollToUpper={() => {
                  Taro.showToast({
                    title: "upperThreshold=0触发成功",
                    icon: "success",
                    duration: 1000
                  });
                }}
                onScrollToLower={() => {
                  Taro.showToast({
                    title: "onScrollToLower触发成功",
                    icon: "success",
                    duration: 1000
                  });
                  const {list} = this.state;
                  list.push(++this.initNum);
                  this.setState({
                    list
                  });
                }}
                scrollWithAnimation
                className='example-body__scroll-view example-body__scroll-view--V'
              >
                {
                  this.state.list.map((item, index) => {
                    return <View key={index} className={`example-body__scroll-view--V-item demo-text-${(index + 1) % 3 || 3}`}>{item}</View>
                  })
                }
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
