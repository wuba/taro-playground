/*
 * @Author: iChengbo
 * @Date: 2021-07-20 16:37:49
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-29 14:17:34
 * @FilePath: /taro-react-native/src/pages/apis/pages/basic/system/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import JSONTree from '../../../../components/jsontree'
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
      <View className='api-page'>
        <Button
          className='api-page-btn'
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
          className='api-page-btn'
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
          className='api-page-btn'
          type='primary'
          onClick={() => {
            this.setState({
              info: {},
            })
          }}
        >
          clear
        </Button>
        <JSONTree data={info} />
      </View>
    )
  }
}
