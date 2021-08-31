/*
 * @Author: iChengbo
 * @Date: 2021-07-19 16:42:58
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 11:00:07
 * @FilePath: /taro-react-native/src/pages/components/pages/image/image.js
 */
import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import Header from '@/components/head/head'
import nervLogo from '@/assets/common/taro_logo.png'
import './image.scss'

export default class PageView extends React.Component {
  render() {
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
}

const ImageContainer = (props) => {
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
