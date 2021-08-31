import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { useState } from "react";
import JSONTree from '@/components/jsontree';

import './index.scss'

/**
 * 网络-发起请求
 * @returns 
 */
const Index = () => {
  const [data, setData] = useState({});

  const _onRequest = () => {
    Taro.request({
      url: 'https://raw.githubusercontent.com/NervJS/taro/next/package.json',
      data: {},
      header: {
        'content-type': 'application/json',
      },
      success: res => {
        console.log(res);
        setData(res);
      },
      fail: err => {
        console.log(err);
        setData(err);
      }
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
      <JSONTree data={data} />
    </View>
  )
}

export default Index;
