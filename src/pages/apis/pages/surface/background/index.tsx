/*
 * @Author: iChengbo
 * @Date: 2021-07-20 14:31:22
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-25 11:36:21
 * @FilePath: /taro-react-native/src/pages/apis/pages/surface/background/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<any, any> {

  render() {

    return (
      <View className='api-page'>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            Taro.setBackgroundTextStyle({
              textStyle: 'dark', // 下拉时，loading 文本的样式（仅iOS）
            })
              .then(() => {
                Taro.startPullDownRefresh();
                const timer = setTimeout(() => {
                  Taro.stopPullDownRefresh();
                  timer && clearTimeout(timer);
                }, 2000);
              })
              .catch(err => {
                console.log(err);
                Taro.showToast({ title: '出错了', icon: 'none' });
              })
          }}
        >
          setBackgroundTextStyle【iOS】
        </Button>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            Taro.setBackgroundColor({
              backgroundColor: randomColor, // 下拉时，loading 的样式（仅Android）
            }).then(() => {
              Taro.startPullDownRefresh();
              const timer = setTimeout(() => {
                Taro.stopPullDownRefresh();
                timer && clearTimeout(timer);
              }, 2000);
            }).catch(() => {
              Taro.showToast({ title: '出错了', icon: 'none' });
            });
          }}
        >
          setBackgroundColor【Android】
        </Button>
      </View>
    )
  }
}
