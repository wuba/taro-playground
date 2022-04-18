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
import { isWeb, isRN, loadPage } from "@/utils/index";
import logoPng from "@/assets/common/taro_logo.jpg";
import rightPng from "@/assets/iconpark/right.png";
import './index.scss';

const { version: playgroundVersion, platform } = Taro.getSystemInfoSync()

const linkPrivacy = {
  name: '隐私政策',
  onPress: () => {
    loadPage({
      url: 'https://api.fang.anjuke.com/wlk/message?id=2049',
      title: '隐私政策',
      right: '下载',
      open: 'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/df70db603b651daa09a31b72f2b1b1f9.pdf'
    })
  },
}

const linkUpdate = {
  name: '版本更新',
  onPress: () => {
    if (platform === 'ios') {
      // @ts-ignore
      Taro.openUrl({
        url: 'https://apps.apple.com/cn/app/taro-playground/id1576830673'
      });
    } else {
      loadPage({
        url: 'https://github.com/wuba/taro-playground/releases',
        title: '版本变更',
        certified: isRN
      })
    }
  },
}

const linkSource = {
  name: '项目源码',
  onPress: () => {
    loadPage({
      url: 'https://github.com/wuba/taro-playground',
      title: '项目源码',
      certified: false
    })
  }
}

const linkSite = {
  name: '官方网站',
  onPress: () => {
    loadPage({
      url: 'https://docs.taro.zone',
      title: '官方网站',
      certified: false
    })
  }
}

const linkWeb = {
  name: 'H5 Demo',
  onPress: () => {
    loadPage({
      url: 'https://docs.taro.zone',
      title: 'H5 Demo',
      certified: !isRN
    })
  }
}

const linksList = isRN ? [linkSource, linkSite, linkWeb, linkPrivacy, linkUpdate] : isWeb ? [linkSource, linkSite, linkWeb, linkUpdate] : [linkSource, linkSite, linkWeb, linkUpdate]
export default class Index extends Component<any, any> {
  render() {
    return (
      <View className='page'>
        <View className='page-header'>
          <Image
            src={logoPng}
            className='page-header-img'
          />
          <View className='page-header-desc'>
            Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。
          </View>
        </View>
        <View className='page-links'>
          {linksList.map((item, index) => {
            return (
              <Fragment key={index}>
                <View className='page-links-item' onClick={item.onPress}>
                  <View className='page-links-item-text'>{item.name}</View>
                  <Image
                    src={rightPng}
                    className='page-links-item-arrow'
                  ></Image>
                </View>
                {index != linksList.length - 1 && <View className='page-links-sep' />}
              </Fragment>
            )
          })}
        </View>
        {isRN && <View className='page-footer' onClick={() => {
          Taro.navigateTo({
            url: '/pages/about/dep'
          })
        }}
        >
          <Text className='page-footer-text'>Taro: {taroVersion}, React Native: {rnVersion}, Taro Playground: {playgroundVersion}</Text>
        </View>}
      </View>
    )
  }
}
