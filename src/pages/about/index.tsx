/*
 * @Author: iChengbo
 * @Date: 2021-07-19 15:54:39
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-22 18:23:54
 * @FilePath: /taro-react-native/src/pages/about/index.tsx
 */
import { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  render() {
    return (
      <View className='page'>
        <View className='page-header'>
          <Image
            src={require('../asset/common/taro_logo.png')}
            className='page-header-img'
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12 }}>Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。</Text>
          </View>
        </View>
      </View>
    )
  }
}
