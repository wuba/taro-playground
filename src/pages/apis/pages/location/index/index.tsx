/*
 * @Author: iChengbo
 * @Date: 2021-08-03 18:55:14
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-04 17:14:29
 * @FilePath: /taro-react-native/src/pages/apis/pages/location/index/index.tsx
 */
import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';

import './index.scss'

const PageView = () => {

  const _handleCallback1 = (res) => {
    console.log("回调函数 C1", res);
  }

  const _handleCallback2 = (res) => {
    console.log("回调函数 C2", res);
  }

  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.getLocation({
              success: res => {
                console.log(999, res)
              }
            })
          }}
        >Taro.getLocation</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onLocationChange(_handleCallback1)
          }}
        >Taro.onLocationChange(C1)</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onLocationChange(_handleCallback2)
          }}
        >Taro.onLocationChange(C2)</Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offLocationChange(_handleCallback1)
          }}
        >Taro.offLocationChange(C1)</Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offLocationChange(_handleCallback2)
          }}
        >Taro.offLocationChange(C2)</Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offLocationChange()
          }}
        >Taro.offLocationChange()</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.startLocationUpdate({})
          }}
        >Taro.startLocationUpdate()</Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.stopLocationUpdate({
              success: Taro.showToast({ title: 'stop 成功', icon: 'none' })
            })
          }}
        >Taro.stopLocationUpdate()</Button>
      </View>
    </View>
  )
}

export default PageView;
