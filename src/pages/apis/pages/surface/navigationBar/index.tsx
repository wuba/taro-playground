/*
 * @Author: iChengbo
 * @Date: 2021-07-20 14:06:40
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-29 14:19:50
 * @FilePath: /taro-react-native/src/pages/apis/pages/surface/navigationBar/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
    }
  }

  render() {
    const { count } = this.state;
    return (
      <View className='api-page'>
        <View className='view-item'>
          <Button
            type='primary'
            className='btn'
            onClick={() => Taro.showNavigationBarLoading({
              success: () => {
                console.log('成功');
              },
              fail: err => {
                console.log('失败：', err);
              },
            })}
          >showNavigationBarLoading</Button>

          <Button
            type='primary'
            className='btn'
            onClick={() => Taro.hideNavigationBarLoading({
              success: () => {
                console.log('成功');
              },
              fail: err => {
                console.log('失败：', err);
              },
            })}
          >hideNavigationBarLoading</Button>

          <Button
            type='primary'
            className='btn'
            onClick={() => Taro.setNavigationBarTitle({
              title: '新标题' + count,
              success: () => {
                this.setState({
                  count: count + 1
                })
                console.log('成功');
              },
              fail: err => {
                console.log('失败：', err);
              },
            })}
          >setNavigationBarTitle</Button>

          <Button
            type='primary'
            className='btn'
            onClick={() => {
              const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
              Taro.setNavigationBarColor({
                backgroundColor: randomColor,
                frontColor: '#ffffff',
                success: () => {
                  console.log('成功');
                },
                fail: err => {
                  console.log('失败：', err);
                },
              })
            }}
          >setNavigationBarColor</Button>
        </View>
      </View>
    )
  }
}
