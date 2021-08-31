import { useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button, Input } from '@tarojs/components';

import './index.scss'

/**
 * 数据缓存
 * @returns 
 */
const Index = () => {

  const [key, setKey] = useState('关键字');
  const [allKey, setAllKey] = useState([]);
  const [data, setValue] = useState('值');

  const _onInputKey = e => {
    setKey(e.detail.value);
  }

  const _onInputValue = e => {
    setValue(e.detail.value);
  }

  const _getStorageInfo = () => {
    Taro.getStorageInfo({
      success: (res: any) => {
        setAllKey(res.keys);
      },
      fail: err => {
        console.log(err);
      }
    })
  }

  return (
    <View className="api-page">
      <View className='api-page-inputs common-border'>
        <View className='input-wrap'>
          <Text className='input-wrap-text'>key   : </Text>
          <Input
            className='input-wrap-input'
            type='text'
            placeholder='请输入key值'
            value={key}
            onInput={_onInputKey}
          />
        </View>
        <View className='input-wrap'>
          <Text>value: </Text>
          <Input
            className='input-wrap-input'
            type='text'
            placeholder='请输入value值'
            value={data}
            onInput={_onInputValue}
          />
        </View>
      </View>
      <View className="api-page-btns">
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.setStorage({
              key: key,
              data: data
            }).then(() => {
              Taro.showToast({ title: '设置成功：' + key, icon: 'none' })
              _getStorageInfo();
            });
          }}
        >Taro.setStorage</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.getStorage({
              key: key,
              success: res => {
                Taro.showToast({ title: res.data, icon: 'none' })
              },
              fail: err => {
                console.log(err);
              }
            })
          }}
        >Taro.getStorage</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={_getStorageInfo}
        >Taro.getStorageInfo</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            Taro.clearStorage().then(() => {
              Taro.showToast({ title: '清除成功', icon: 'none' })
            });
          }}
        >Taro.clearStorage</Button>
      </View>
      <View className='api-page-content common-border'>
        <Text>Storage keys: {allKey.join('、')}</Text>
      </View>
    </View>
  )
}

export default Index;