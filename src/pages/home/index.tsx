/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-22 16:22:01
 * @FilePath: /taro-react-native/src/pages/home/index.tsx
 */
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  render() {
    return (
      <View className='index'>
        <View className='info'>
          <Image
            src={require('../asset/common/taro_logo.png')}
            className='info-img'
          />
          <Text className='info-text'>Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。</Text>
        </View>
      </View>
    )
  }
}
