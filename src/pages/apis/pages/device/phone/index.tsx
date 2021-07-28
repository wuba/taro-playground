/*
 * @Author: iChengbo
 * @Date: 2021-08-02 15:44:28
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-02 16:47:27
 * @FilePath: /taro-react-native/src/pages/apis/pages/device/phone/index.tsx
 */
import { useState } from "react";
import Taro from "@tarojs/taro-rn";
import { Button, View, Text, Input } from "@tarojs/components";

import "./index.scss";

const Index = () => {

  const [phone, setPhone] = useState('');

  return (
    <View className="api-page">
      <View className="api-page__body">
        <View className='common-border'>
          <View className='input-wrap'>
            <Text className='input-wrap-text'>电话   : </Text>
            <Input
              className='input-wrap-input'
              type='text'
              placeholder='请输入电话号码'
              value={phone}
              onInput={e => {
                setPhone(e.detail.value);
              }}
            />
          </View>
        </View>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            if (phone.length > 2 && phone.length < 12) {
              Taro.makePhoneCall({
                phoneNumber: phone,
                success: res => {
                  console.log(res);
                },
                fail: err => {
                  console.log(err);
                }
              });
            } else {
              Taro.showToast({ title: '请先输入电话号码', icon: 'none' });
            }
          }}
        >
          Taro.makePhoneCall
        </Button>
      </View>
    </View>
  )
}

export default Index;
