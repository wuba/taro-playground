/*
 * @Author: iChengbo
 * @Date: 2021-08-02 15:44:28
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-03 15:40:10
 * @FilePath: /taro-react-native/src/pages/apis/pages/device/network/index.tsx
 */
import Taro from "@tarojs/taro-rn";
import { Button, View } from "@tarojs/components";

import "./index.scss";

const Index = () => {

  const _handleCallback1 = (...res) => {
    console.log("回调函数 C1", res);
  }

  const _handleCallback2 = (...res) => {
    console.log("回调函数 C2", res);
  }

  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onNetworkStatusChange(_handleCallback1);
          }}
        >
          Taro.onNetworkStatusChange(C1)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onNetworkStatusChange(_handleCallback2);
          }}
        >
          Taro.onNetworkStatusChange(C2)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offNetworkStatusChange(_handleCallback1);
          }}
        >
          Taro.offNetworkStatusChange(C1)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offNetworkStatusChange(_handleCallback2);
          }}
        >
          Taro.offNetworkStatusChange(C2)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.offNetworkStatusChange();
          }}
        >
          Taro.offNetworkStatusChange()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.getNetworkType().then(res => {
              Taro.showToast({ title: '网络状态：' + res.networkType, icon: 'none' })
            })
          }}
        >
          Taro.getNetworkType()
        </Button>
      </View>
    </View>
  )
}

export default Index;
