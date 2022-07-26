/*
 * @Author: iChengbo
 * @Date: 2021-07-19 15:54:39
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-04 14:57:41
 * @FilePath: /taro-react-native/src/pages/about/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import taroVersion from '@tarojs/taro/package.json';
import rnVersion from 'react-native/package.json';
import { isWeb, isRN, loadWeb, loadMini, loadRn } from "@/utils/index";
import List from '@/components/list/list';
import logoPng from "@/assets/common/taro_logo.jpg";
import './index.scss';

const { version: playgroundVersion, platform } = Taro.getSystemInfoSync()

const linkPrivacy = {
  name: '隐私政策',
  onPress: () => {
    loadWeb({
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
    if (isRN && platform === 'ios') {
      // @ts-ignore
      Taro.openUrl({
        url: 'https://apps.apple.com/cn/app/taro-playground/id1576830673'
      });
    } else {
      loadWeb({
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
    loadWeb({
      url: 'https://github.com/wuba/taro-playground',
      title: '项目源码',
      certified: isRN
    })
  }
}

const linkSite = {
  name: '官方网站',
  onPress: () => {
    loadWeb({
      url: 'https://docs.taro.zone',
      title: '官方网站',
      certified: isRN
    })
  }
}

const linkWeb = {
  name: 'Web 版本',
  onPress: () => {
    loadWeb({
      url: 'https://wuba.github.io/taro-playground/',
      title: 'Web 版本',
      certified: isRN
    })
  }
}

const linkMini = {
  name: '小程序版本',
  onPress: () => {
    loadMini({
      url: 'https://pic3.58cdn.com.cn/nowater/frs/n_v23ec2613515c6458aaa44f01d459cea8b.jpg'
    })
  }
}

const linkRn = {
  name: 'React Native 版本',
  onPress: () => {
    loadRn({
      android: 'https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png',
      ios:'https://pic1.58cdn.com.cn/nowater/fangfe/n_v224532e5560314106b6ab32b0a1534a9d.png',
    })
  }
}

const versionList = isRN ? [linkRn, linkWeb, linkMini, linkUpdate] : isWeb ? [linkRn, linkMini, linkUpdate] : [linkRn, linkWeb, linkUpdate]
const linksList = isRN ? [linkSource, linkSite, linkPrivacy] : [linkSource, linkSite]
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
        <List
          title='版本信息'
          data={versionList.map(item => {
            return {
              title: item.name,
            }
          })}
          handleItemClick={ (_data, index) => {
            versionList[index].onPress()
          }}
        />
        <List
          title='相关链接'
          data={linksList.map(item => {
            return {
              title: item.name,
            }
          })}
          handleItemClick={ (_data, index) => {
            linksList[index].onPress()
          }}
        />
        {isRN ? <View className='page-footer' onClick={() => {
          Taro.navigateTo({
            url: '/pages/about/dep'
          })
        }}
        >
          <Text className='page-footer-text'>Taro: {taroVersion.version}, React Native: {rnVersion.version}, Taro Playground: {playgroundVersion}</Text>
        </View> : <View className='page-footer'>
          <Text className='page-footer-text'>Taro: {taroVersion.version}</Text>
        </View>}
      </View>
    )
  }
}
