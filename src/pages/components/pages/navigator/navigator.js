/*
 * @Author: iChengbo
 * @Date: 2021-07-19 16:42:58
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-27 19:08:28
 * @FilePath: /taro-react-native/src/pages/components/pages/navigator/navigator.js
 */
import Taro from '@tarojs/taro'
import React from 'react'

import { View, Navigator, Text } from '@tarojs/components'

import Header from '@/components/head/head'

import './navigator.scss'

export default class PageSwitch extends React.Component {
  state = {}

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Navigator'></Header>
        </View>
        <View className='components-page__bodyå'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              {
                Taro.getEnv() != Taro.ENV_TYPE.WEB ? <View className='example-body__navigators'>
                  <Navigator
                    url='/pages/components/pages/navigatePage/navigatePage'
                    className='example-body__navigators-item'
                  >
                    <View className='example-body__navigator'>跳转到新页面</View>
                  </Navigator>
                  <Navigator
                    url='/pages/component/pages/redirectPage/redirectPage'
                    className='example-body__navigators-item'
                    open-type='redirect'
                  >
                    <View >在当前页打开</View>
                  </Navigator>
                </View> : <Text>暂未支持，请使用Taro API</Text>
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}
