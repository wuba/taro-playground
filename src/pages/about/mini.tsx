import { Image, View } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'

import './mini.scss'

export default function Mini () {
  const { params={} } = useRouter()
  const { src } = params
  return src ? <View className='mini-container'><Image className='mini-image' src={decodeURIComponent(src)} /></View> : null
}