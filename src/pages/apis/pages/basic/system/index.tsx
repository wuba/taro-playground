/*
 * @Author: iChengbo
 * @Date: 2021-07-20 16:37:49
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-21 10:25:19
 * @FilePath: /taro-react-native/src/pages/apis/pages/system/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      info: {},
    }
  }

  render() {
    const { info } = this.state;

    return (
      <View>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            Taro.getSystemInfo({
              success: res => {
                this.setState({
                  info: res,
                })
              }
            })
          }}
        >
          getSystemInfo
        </Button>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            const res = Taro.getSystemInfoSync()
            console.log(res);
            this.setState({
              info: res,
            })
          }}
        >
          getSystemInfoSync
        </Button>
        <Button
          className='btn'
          type='primary'
          onClick={() => {
            this.setState({
              info: {},
            })
          }}
        >
          clear
        </Button>
        <View style={{padding: 20}}>
          {Object.keys(info).map(key => {
            const value = info[key];
            return (
              <View key={key}>{`${key}: ${value}`}</View>
            )
          })}
        </View>
      </View>
    )
  }
}