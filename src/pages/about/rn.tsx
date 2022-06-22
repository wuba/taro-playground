import { Image, View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'

import './rn.scss'

export default function RNView() {
  const { params={} } = useRouter()
  const {
    android,
    ios,
  } = params
  return <View className="rn-container">
    {android && <View className="rn-text">Android</View>}
    {android && <Image className="rn-image" src={decodeURIComponent(android)} />}
    {ios && <View className="rn-text">iOS</View>}
    {ios && <Image className="rn-image" src={decodeURIComponent(ios)} />}
  </View>
}
