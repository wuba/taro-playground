import { View } from "@tarojs/components";
import { pxTransform } from "@tarojs/taro";
import Header from "@/components/head/head";

import './size.scss'

export default function Size() {
  return <View className="global-page">
    <View className="global-page__header">
      <Header title="unit"></Header>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View>font-size: inherit</View>
        </View>
      </View>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="fs30px">font-size: 30px</View>
          <View className="fs60px">font-size: 60px</View>
        </View>
      </View>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="fs15-px">font-size: 15PX</View>
          <View className="fs30-px">font-size: 30PX</View>
        </View>
      </View>
    </View>
    {process.env.TARO_ENV !== 'harmony' && <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="fs1rem">font-size: 1rem</View>
          <View className="fs2rem">font-size: 2rem</View>
        </View>
      </View>
    </View>}
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View style={{fontSize: pxTransform(30)}}>pxTransform(30)</View>
          <View style={{fontSize: pxTransform(60)}}>pxTransform(60)</View>
        </View>
      </View>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="w-30">width: 30%</View>
          <View className="w-60">width: 60%</View>
        </View>
      </View>
    </View>
  </View>
}
