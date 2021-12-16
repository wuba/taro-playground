import Taro from '@tarojs/taro';
import { View, Button, Input } from '@tarojs/components';
import { useState } from "react";
import JSONTree from '@/components/jsontree';

import './index.scss'

/**
 * 网络-发起请求
 * @returns 
 */
const Index = () => {
  const [data, setData] = useState({});

  const [value, setValue] = useState('');

  const onInput = e => {
    setValue(e.detail.value);
  }

  const _onRequest = () => {
    if(value) {
      setData({})
      Taro.request({
        url: value,
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
  }

  return (
    <View className="api-page">
      <View className="api-page-btns">
        <Input
          className="url-input"
          onInput={onInput}
          placeholder="输入请求的 url"
        ></Input>
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
