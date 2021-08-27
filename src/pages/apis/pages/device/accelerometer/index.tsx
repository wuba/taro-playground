/*
 * @Author: iChengbo
 * @Date: 2021-08-02 15:44:28
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-17 11:31:34
 * @FilePath: /taro-react-native/src/pages/apis/pages/device/accelerometer/index.tsx
 */
import Taro from "@tarojs/taro-rn";
import { Button, View } from "@tarojs/components";
import { useCallback, useState } from "react";
import JSONTree from '@/components/jsontree';

import "./index.scss";

const Index = () => {
  const [accelerometer1, setAccelerometer1] = useState({});
  const [accelerometer2, setAccelerometer2] = useState({});

  const _handleCallback1 = useCallback((res) => {
    console.log("回调函数 C1", res);
    setAccelerometer1(res);
  }, []);

  const _handleCallback2 = useCallback((res) => {
    console.log("回调函数 C2", res);
    setAccelerometer2(res);
  }, []);

  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onAccelerometerChange(_handleCallback1);
          }}
        >
          Taro.onAccelerometerChange(C1)
        </Button>
        <JSONTree data={accelerometer1} />
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onAccelerometerChange(_handleCallback2);
          }}
        >
          Taro.onAccelerometerChange(C2)
        </Button>
        <JSONTree data={accelerometer2} />
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offAccelerometerChange(_handleCallback1);
          }}
        >
          Taro.offAccelerometerChange(C1)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offAccelerometerChange(_handleCallback2);
          }}
        >
          Taro.offAccelerometerChange(C2)
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            // @ts-ignore
            Taro.offAccelerometerChange();
          }}
        >
          Taro.offAccelerometerChange()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.startAccelerometer({
              success: res => {
                console.log('成功', res)
              }
            });
          }}
        >
          Taro.startAccelerometer()
        </Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.stopAccelerometer();
          }}
        >
          Taro.stopAccelerometer()
        </Button>
      </View>
    </View>
  )
}

export default Index;
