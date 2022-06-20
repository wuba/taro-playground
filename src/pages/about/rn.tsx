import { Image, View } from '@tarojs/components'

import './rn.scss'

export default function RNView() {
  return <View>
    <View className="rn-text">Android</View>
    <Image className="rn-image" src="https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png"/>
    <View className="rn-text">iOS</View>
    <Image className="rn-image" src="https://pic1.58cdn.com.cn/nowater/fangfe/n_v224532e5560314106b6ab32b0a1534a9d.png"/>
  </View>
}