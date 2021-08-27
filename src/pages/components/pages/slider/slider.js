/*
 * @Author: iChengbo
 * @Date: 2021-07-19 16:42:58
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-27 18:44:19
 * @FilePath: /taro-react-native/src/pages/components/pages/slider/slider.js
 */
import React from 'react'
import { View, Button, Text, Slider } from '@tarojs/components'

import Header from '@/components/head/head'

export default class PageSlider extends React.Component {
  state = {
    value: 50
  }

  setValue = () => {
    const value = Math.floor(Math.random() * 100)
    this.setState({
      value
    })
  }

  handleChaning = e => {
    if (e?.detail.value) {
      this.setState({
        value: e?.detail.value
      })
    }
  }

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Slider'></Header>
        </View>
        <View className='components-page__body'>

          <View className='components-page__body-example example'>
            <Text className='example-header'>设置step</Text>
            <View className='example-body'>
              <Slider step={10} value={50}></Slider>
            </View>
          </View>

          <View className='components-page__body-example example'>
            <Text className='example-header'>显示当前的value</Text>
            <View className='example-body'>
              <Slider step={1} value={50} showValue></Slider>
            </View>
          </View>

          <View className='components-page__body-example example'>
            <Text className='example-header'>设置最小/最大值</Text>
            <View className='example-body'>
              <Slider step={1} value={100} showValue min={50} max={200}></Slider>
            </View>
          </View>

          <View className='components-page__body-example example'>
            <Text className='example-header'>UI设置</Text>
            <View className='example-body'>
              <Slider step={1} value={50} activeColor='#6190E8' backgroundColor='red' blockColor='#333' blockSize={20}></Slider>
            </View>
          </View>

          <View className='components-page__body-example example'>
            <Text className='example-header'>数据绑定</Text>
            <View className='example-body'>
              <Slider step={1} value={this.state.value} onChanging={this.handleChaning} showValue min={0} max={100}></Slider>
              <Button type='primary' onClick={this.setValue}>Set Value</Button>
            </View>
          </View>
        </View>
      </View >
    )
  }
}
