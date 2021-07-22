/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-23 17:46:51
 * @FilePath: /taro-react-native/src/pages/home/index.tsx
 */
import { Component } from 'react';
import Taro from '@tarojs/taro';
import { NativeModules } from 'react-native';
import { View, Text, Image, Input, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: 'localhost:8081'
    };
  }

  onPress = () => {
    // Taro.scanCode({
    //   success: res => {
    //     console.log(111111, res);
    //   }
    // })
    try {
      const DevManager = NativeModules.RNDevManager;
      DevManager.loadBundleByBundleUrl(
        '10.249.42.22:8081',
        'index'
      );
    } catch (error) {
      console.log("ccccc", error);
    }
  }

  onHandleChange = e => {
    console.log(e);
    const value = e.detail.value;
    this.setState({
      inputValue: value
    });
  }

  onPressLoad = e =>  {
    try {
      const DevManager = NativeModules.RNDevManager;
      DevManager.loadBundleByBundleUrl(
        this.state.inputValue,
        'index'
      );
    } catch (error) {
      console.log("ccccc", error);
    }
  }

  render() {
    return (
      <View className='index'>
        <View className='info'>
          <Image
            src={require('../asset/common/taro_logo.png')}
            className='info-img'
            onClick={this.onPress}
          />
          <Text className='info-text'>Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。</Text>
        </View>
        <View style={{ padding: 20 }}>
          <Input
            name='input'
            type='text'
            placeholder='请输入IP:8081'
            value={this.state.inputValue}
            onInput={this.onHandleChange}
            style={{ borderWidth: 1, borderColor: 'red', height: 50, fontSize: 18 }}
          ></Input>
          <Button
            type='primary'
            style={{ marginTop: 20 }}
            onClick={this.onPressLoad}
          >加载</Button>
        </View>
      </View>
    )
  }
}
