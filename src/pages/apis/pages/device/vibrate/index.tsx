import Taro from "@tarojs/taro";
import { Button, View } from "@tarojs/components";

import "./index.scss";

/**
 * 设备-震动
 * @returns 
 */
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
