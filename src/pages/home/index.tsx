/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-20 12:09:30
 * @FilePath: /taro-react-native/src/pages/home/index.tsx
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
        <View className='header'>
          <Text>自定义标题</Text>
        </View>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
