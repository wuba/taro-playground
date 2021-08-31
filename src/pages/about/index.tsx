/*
 * @Author: iChengbo
 * @Date: 2021-07-19 15:54:39
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-04 14:57:41
 * @FilePath: /taro-react-native/src/pages/about/index.tsx
 */
import { Component, Fragment } from 'react'
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { version as taroVersion } from '@tarojs/taro/package.json';
import { version as rnVersion } from 'react-native/package.json';
import logoPng from "@/assets/common/taro_logo.png";
import rightPng from "@/assets/iconpark/right.png";
import './index.scss';

export default class Index extends Component<any, any> {
  linksList = [
    {
      name: '项目源码',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=项目源码&link=https://github.com/wuba/taro-playground'
        })
      },
    },
    {
      name: '官方网站',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=Taro 官方网站&link=https://docs.taro.zone/docs/README',
        })
      }
    },
    {
      name: '官方交流群',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=官方交流群&link=https://github.com/NervJS/taro/issues/198',
        })
      }
    },
    {
      name: '参与贡献',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=参与贡献&link=https://docs.taro.zone/docs/join-in',
        })
      }
    },
    {
      name: '版本变更',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=版本变更&link=https://github.com/NervJS/taro/releases'
        })
      },
    },
    {
      name: '常见问题',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=常见问题&link=https://github.com/NervJS/taro/issues'
        })
      },
    },
    {
      name: '隐私政策',
      onPress: () => {
        Taro.navigateTo({
          url: '/pages/webview/index?title=隐私政策&right=下载&link=https://api.fang.anjuke.com/wlk/message?id=2049&open=https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/df70db603b651daa09a31b72f2b1b1f9.pdf'
        })
      },
    },
  ];

  render() {
    return (
      <View className='page'>
        <View className='page-header'>
          <Image
            src={logoPng}
            className='page-header-img'
          />
          <View className='page-header-desc'>
            <Text className='page-header-desc-text'>Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。</Text>
          </View>
        </View>
        <View className='page-links'>
          {this.linksList.map((item, index) => {
            return (
              <Fragment key={index}>
                <View className='page-links-item' onClick={item.onPress}>
                  <Text className='page-links-item-text'>{item.name}</Text>
                  <Image
                    src={rightPng}
                    className='page-links-item-arrow'
                  ></Image>
                </View>
                {index != this.linksList.length - 1 && <View className='page-links-sep' />}
              </Fragment>
            )
          })}
        </View>
        <View className='page-footer' onClick={() => {
          Taro.navigateTo({
            url: '/pages/about/dep'
          })
        }}
        >
          <Text className='page-footer-text'>Taro: {taroVersion} React Native: {rnVersion}</Text>
        </View>
      </View>
    )
  }
}
