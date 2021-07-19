/*
 * @Author: iChengbo
 * @Date: 2021-07-20 14:31:22
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-20 16:36:53
 * @FilePath: /taro-react-native/src/pages/apis/pages/background/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<any, any> {

  render() {

    return (
      <View>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            Taro.setBackgroundTextStyle({
              textStyle: 'dark',
            })
            .then(() => {
              console.log('成功')
            })
            .catch(err => {
              console.log(err)
            })
          }}
        >
          setBackgroundTextStyle
        </Button>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            Taro.setBackgroundColor({
              backgroundColorTop: '#000000', // 顶部窗口的背景色
              backgroundColorBottom: '#000000', // 底部窗口的背景色
            })
          }}
        >
          setBackgroundColor
        </Button>
      </View>
    )
  }
}
