/*
 * @Author: iChengbo
 * @Date: 2021-07-28 16:22:44
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 17:26:13
 * @FilePath: /taro-react-native/src/pages/apis/pages/network/request/index.tsx
 */
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { useState } from "react";
import JSONTree from '../../../../components/jsontree';

import './index.scss'

const PageView = () => {
  const [data, setData] = useState({});

  const _onRequest = () => {
    Taro.request({
      url: 'https://gitee.com/o2team/Taro/raw/next/package.json',
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

export default PageView;
