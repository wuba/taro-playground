import { View, Text, Image } from '@tarojs/components'
import Header from '@/components/head/head'
import nervLogo from '@/assets/common/taro_logo.jpg'

import './image.scss'

export default function ImageView () {
  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='Image'></Header>
      </View>
      {
      ['aspectFill', 'aspectFit', 'scaleToFill', 'center', 'widthFix'].map((mode) => {
        return (
          <ImageContainer
            key={mode}
            mode={mode}
            src={nervLogo}
          ></ImageContainer>
        )
      })
    }
    </View>
  )
}

const ImageContainer = props => {
  const {
    mode = 'scaleToFill',
    src,
  } = props;

  return (
    <View className="imgContainer">
      <Image
        className="imgContainer-left"
        mode={mode}
        src={src}
      ></Image>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{mode == 'scaleToFill' ? 'scaleToFill（默认）' : mode}</Text>
      </View>
    </View>
  )
}
