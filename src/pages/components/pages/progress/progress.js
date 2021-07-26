/*
 * @Author: iChengbo
 * @Date: 2021-07-19 16:42:58
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-26 17:53:36
 * @FilePath: /taro-react-native/src/pages/components/pages/progress/progress.js
 */
import React from 'react'
import { View, Progress, Button, Text } from '@tarojs/components'

import './progress.scss'
import Header from '../../components/head/head'

export default class PageView extends React.Component {
  constructor() {
    super(...arguments)
    this._timmer = null
  }

  state = {
    progress: 0
  }

  handleStart = () => {
    if (this._timmer || this.state.progress > 100) return
    this._timmer = setInterval(() => {
      const value = this.state.progress + 2
      if (value > 100) {
        return this.handleStop()
      }
      this.setState({
        progress: value
      })
    }, 100)
  }

  handleStop = () => {
    if (this._timmer) {
      clearInterval(this._timmer)
      this._timmer = null
    }
  }

  handleReset = () => {
    this.handleStop()
    this.setState({
      progress: 0
    })
  }

  render() {
    const { progress } = this.state
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Progress'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-progress'>
              <Progress percent={20} showInfo strokeWidth={2} ></Progress>
            </View>
            <View className='example-progress'>
              <Progress percent={40} strokeWidth={4} active ></Progress>
            </View>
            <View className='example-progress'>
              <Progress percent={60} strokeWidth={6} active ></Progress>
            </View>
            <View className='example-progress'>
              <Progress
                percent={80}
                strokeWidth={8}
                active
                activeColor='#6190E8'
                borderRadius={10}
              />
            </View>
          </View>
        </View>
        <View className='components-page__footer' style={{ marginTop: 40 }}>
          <View className='example-progress'>
            <Progress
              showInfo
              strokeWidth={10}
              percent={progress}
              activeColor='#6190E8'
            />
          </View>
          <View className='example-controller'>
            <Button className='example-controller-btn1' onClick={this.handleStart}>
              <Text style={{ color: '#fff' }}>加载</Text>
            </Button>
            <Button className='example-controller-btn2' onClick={this.handleStop}>
              <Text style={{ color: '#fff' }}>暂停</Text>
            </Button>
            <Button className='example-controller-btn3' onClick={this.handleReset}>
              <Text style={{ color: '#fff' }}>重置</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
