/*
 * @Author: iChengbo
 * @Date: 2021-08-02 15:44:28
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-02 16:22:52
 * @FilePath: /taro-react-native/src/pages/apis/pages/device/vibrate/index.tsx
 */
import Taro from "@tarojs/taro";
import { Button, View } from "@tarojs/components";

import "./index.scss";

const Index = () => {
  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.vibrateShort();
          }}
        >
          Taro.vibrateShort
        </Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.vibrateLong();
          }}
        >
          Taro.vibrateLong
        </Button>
      </View>
    </View>
  )
}

export default Index;
