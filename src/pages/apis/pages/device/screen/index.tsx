import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { Button, View, Text } from "@tarojs/components";

import "./index.scss";

/**
 * 设备-屏幕
 * @returns 
 */
const Index = () => {

  const [value, setValue] = useState(0.5);

  useEffect(() => {
    Taro.getScreenBrightness({
      success: res => {
        setValue(res.value)
      }
    })
  }, []);

  const _onPressControl = (isAdd: boolean) => {
    if (isAdd) {
      const _value = Number((value + 0.1).toFixed(1));
      setValue(_value > 1 ? 1 : _value);
    } else {
      const _value = Number((value - 0.1).toFixed(1));
      setValue(_value < 0 ? 0 : _value);
    }
  }

  const _handleCallback1 = (...res) => {
    console.log("用户截屏了 C1", res);
  }

  // const _handleCallback2 = (...res) => {
  //   console.log("用户截屏了 C2", res);
  // }

  return (
    <View className="api-page">
      <View className="api-page__body">
        <View className="control common-border">
          <View className="control-btn" onClick={() => _onPressControl(false)}>
            <Text className="control-btn-txt">－</Text>
          </View>
          <Text className="control-value">{value}</Text>
          <View className="control-btn" onClick={() => _onPressControl(true)}>
            <Text className="control-btn-txt">＋</Text>
          </View>
        </View>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            console.log('设置亮度', value);
            Taro.setScreenBrightness({ value, success: res => {
              console.log("设置亮度成功", res);
            } });
          }}
        >
          Taro.setScreenBrightness()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={async () => {
            const res = await Taro.getScreenBrightness();
            Taro.showToast({
              title: `亮度：${res.value}`,
            })
          }}
        >
          Taro.getScreenBrightness()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={async () => {
            Taro.setKeepScreenOn({
              keepScreenOn: true,
              success: () => {
                Taro.showToast({ title: 'keepScreenOn： true', icon: 'none' });
              }
            })
          }}
        >
          Taro.setKeepScreenOn(true)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={async () => {
            Taro.setKeepScreenOn({
              keepScreenOn: false,
              success: () => {
                Taro.showToast({ title: 'keepScreenOn： false', icon: 'none' });
              }
            })
          }}
        >
          Taro.setKeepScreenOn(false)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={async () => {
            Taro.onUserCaptureScreen(_handleCallback1)
          }}
        >
          Taro.onUserCaptureScreen()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={async () => {
            Taro.offUserCaptureScreen(_handleCallback1)
          }}
        >
          Taro.offUserCaptureScreen()
        </Button>
      </View>
    </View>
  )
}

export default Index;
