import { View } from "@tarojs/components";
import Header from "@/components/head/head";

import './platform.scss'
import './style.scss'

const exEnvMap = {
  'rn': 'h5 weapp',
  'h5': 'rn weapp',
  'weapp': 'h5 rn',
}

export default function Size() {
  return <View className="global-page">
    <View className="global-page__header">
      <Header title={`style.${process.env.TARO_ENV}.scss`}></Header>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="style-color">default: black, h5: red, weapp: green, rn: blue</View>
        </View>
      </View>
    </View>
    <View className="global-page__header">
      <Header title={`/* #ifdef ${process.env.TARO_ENV} */ /* #endif */`}></Header>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="ifdef-color">default: black, h5: red, weapp: green, rn: blue</View>
          <View className="ifdef-bgc">default: black, h5: red, weapp: green, rn: blue</View>
        </View>
      </View>
    </View>
    <View className="global-page__header">
      <Header title={`/* #ifndef ${exEnvMap[process.env.TARO_ENV]} */ /* #endif */`}></Header>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <View className='example-body'>
          <View className="ifndef-color">default: black, h5: red, weapp: green, rn: blue</View>
          <View className="ifndef-bgc">default: black, h5: red, weapp: green, rn: blue</View>
        </View>
      </View>
    </View>
  </View>
}