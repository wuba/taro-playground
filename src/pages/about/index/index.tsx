/*
 * @Author: iChengbo
 * @Date: 2021-07-19 15:54:39
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-19 15:57:53
 * @FilePath: /taro-react-native/src/pages/about/index/index.tsx
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
