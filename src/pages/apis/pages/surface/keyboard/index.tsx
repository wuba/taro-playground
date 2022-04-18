import { useCallback, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Button, Text, Input } from '@tarojs/components';

import './index.scss'

/**
 * 界面-键盘
 * @returns 
 */
const Index = () => {
  const [value, setValue] = useState('');

  const _handleCallback1 = useCallback((res) => {
    console.log("回调函数 C1", res);
  }, []);

  const _handleCallback2 = useCallback((res) => {
    console.log("回调函数 C2", res);
  }, []);

  return (
    <View className="api-page">
      <View className="api-page__body">
        <View className='common-border'>
          <View className='input-wrap'>
            <Text className='input-wrap-text'>输入框: </Text>
            <Input
              className='input-wrap-input'
              type='text'
              placeholder='输入 hide 隐藏键盘'
              value={value}
              onInput={e => {
                setValue(e.detail.value);
                if (e.detail.value === 'hide') {
                  Taro.hideKeyboard({
                    success: res => {
                      console.log('隐藏键盘', res)
                    }
                  });
                }
              }}
            />
          </View>
        </View>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onKeyboardHeightChange(_handleCallback1);
          }}
        >Taro.onKeyboardHeightChange(C1)</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.onKeyboardHeightChange(_handleCallback2);
          }}
        >Taro.onKeyboardHeightChange(C2)</Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offKeyboardHeightChange(_handleCallback1);
          }}
        >Taro.offKeyboardHeightChange(C1)</Button>
        <Button
          type="primary"
          className="api-page-btn-warning"
          onClick={() => {
            Taro.offKeyboardHeightChange(_handleCallback2);
          }}
        >Taro.offKeyboardHeightChange(C2)</Button>
        <Button
          type="primary"
          className="api-page-btn-error"
          onClick={() => {
            Taro.offKeyboardHeightChange();
          }}
        >Taro.offKeyboardHeightChange()</Button>
      </View>
    </View>
  )
}

export default Index;
