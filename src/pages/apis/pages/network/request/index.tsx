/*
 * @Author: iChengbo
 * @Date: 2021-07-28 16:22:44
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 17:26:13
 * @FilePath: /taro-react-native/src/pages/apis/pages/network/request/index.tsx
 */
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './index.scss'

const PageView = () => {
  const _onRequest = () => {
    Taro.request({
      url: '',
      data: {},
      header: {
        'content-type': 'application/json',
      },
      // success: res => {
      //   console.log(res);
      // },
      // fail: err => {
      //   console.log(err)
      // }
    })
  }

  return (
    <View className="api-page">
      <View className="api-page-btns">
        <Button
          type="primary"
          onClick={_onRequest}
          className="api-page-btns-btn1"
        >Taro.request</Button>
      </View>
    </View>
  )
}

export default PageView;
