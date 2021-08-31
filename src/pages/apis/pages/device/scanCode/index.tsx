import { useState } from "react";
import Taro from "@tarojs/taro";
import { Button, View } from "@tarojs/components";
import JSONTree from '@/components/jsontree';
import { hadlePermissionsDeny } from '@/utils/index'
import "./index.scss";

/**
 * 设备-扫码
 * @returns 
 */
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
                if (err.errMsg === 'Permissions denied!' || err.errMsg === 'scanCode fail') {
                  // TODO: use errCode
                  const perssionText = err.errMsg === 'Permissions denied!' ? '相机' : '照片';
                  hadlePermissionsDeny({ perssionText });
                }
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
