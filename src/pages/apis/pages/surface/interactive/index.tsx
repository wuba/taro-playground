/*
 * @Author: iChengbo
 * @Date: 2021-07-21 10:36:30
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-29 14:19:08
 * @FilePath: /taro-react-native/src/pages/apis/pages/surface/interactive/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  render() {
    return (
      <View className='api-page'>
        <View className='view-item'>
          <Button
            className='btn'
            type='primary'
            onClick={() => Taro.showToast({
              title: '成功',
              icon: 'success',
              duration: 2000
            })}
          >showToast</Button>

          <Button
            className='btn'
            type='primary'
            onClick={() => Taro.showModal({
              title: '提示',
              content: '这是一个模态弹窗',
              success: function (res) {
                if (res.confirm) {
                  Taro.showToast({
                    title: '用户点击确定',
                    icon: 'none'
                  })
                } else if (res.cancel) {
                  Taro.showToast({
                    title: '用户点击取消',
                    icon: 'none'
                  })
                }
              }
            })}
          >showModal</Button>

          <Button
            className='btn'
            type='primary'
            onClick={() => Taro.showLoading({
              title: '加载中',
            })}
          >showLoading</Button>

          <Button
            className='btn'
            type='primary'
            onClick={() => Taro.hideLoading()}
          >
            hideLoading
          </Button>

          <Button
            className='btn'
            type='primary'
            onClick={() => Taro.showActionSheet({
              itemList: ['A', 'B', 'C'],
              success: function (res) {
                Taro.showToast({
                  title: JSON.stringify(res.tapIndex),
                  icon: 'none'
                })
              },
              fail: function (res) {
                Taro.showToast({
                  title: res.errMsg,
                  icon: 'none'
                })
              }
            })}
          >showActionSheet</Button>
        </View>
      </View>
    )
  }
}
