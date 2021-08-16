/*
 * @Author: iChengbo
 * @Date: 2021-08-02 15:44:28
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-02 16:35:39
 * @FilePath: /taro-react-native/src/pages/apis/pages/device/scanCode/index.tsx
 */
import { useState } from "react";
import Taro from "@tarojs/taro-rn";
import { Button, View } from "@tarojs/components";
import JSONTree from '../../../../components/jsontree';

import "./index.scss";

const Index = () => {
  const [info, setInfo] = useState({});

  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.scanCode({
              success: res => {
                console.log(res);
                setInfo(res);
                Taro.showToast({ title: '扫码成功' });
              },
              fail: err => {
                console.log(err);
                Taro.showToast({ title: '扫码失败', icon: 'none' });
              }
            });
          }}
        >
          Taro.scanCode
        </Button>
        <JSONTree data={info} />
      </View>
    </View>
  )
}

export default Index;
