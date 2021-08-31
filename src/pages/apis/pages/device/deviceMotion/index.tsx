import Taro from "@tarojs/taro";
import { Button, View } from "@tarojs/components";
import { useCallback, useState } from "react";
import JSONTree from '@/components/jsontree';

import "./index.scss";

/**
 * 媒体-设备方向
 * @returns 
 */
const Index = () => {
  const [deviceMotion1, setDeviceMotion1] = useState({});
  const [deviceMotion2, setDeviceMotion2] = useState({});

  const _handleCallback1 = useCallback((res) => {
    console.log("回调函数 C1", res);
    setDeviceMotion1(res);
  }, []);

  const _handleCallback2 = useCallback((res) => {
    console.log("回调函数 C2", res);
    setDeviceMotion2(res);
  }, []);

  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onDeviceMotionChange(_handleCallback1);
          }}
        >
          Taro.onDeviceMotionChange(C1)
        </Button>
        <JSONTree data={deviceMotion1} />
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onDeviceMotionChange(_handleCallback2);
          }}
        >
          Taro.onDeviceMotionChange(C2)
        </Button>
        <JSONTree data={deviceMotion2} />
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offDeviceMotionChange(_handleCallback1);
          }}
        >
          Taro.offDeviceMotionChange(C1)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offDeviceMotionChange(_handleCallback2);
          }}
        >
          Taro.offDeviceMotionChange(C2)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.offDeviceMotionChange();
          }}
        >
          Taro.offDeviceMotionChange()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.startDeviceMotionListening({
              success: res => {
                console.log('成功', res)
              }
            });
          }}
        >
          Taro.startDeviceMotionListening()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.stopDeviceMotionListening();
          }}
        >
          Taro.stopDeviceMotionListening()
        </Button>
      </View>
    </View>
  )
}

export default Index;

