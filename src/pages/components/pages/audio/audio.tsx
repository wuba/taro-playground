import React from 'react'
import { View, Audio } from '@tarojs/components'

import Header from '@/components/head/head'

import './audio.scss'

export default class PageView extends React.Component {
  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Audio'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              <Audio
                src=''
                controls
                // @ts-ignore
                autoplay={false}
                loop={false}
                muted
                initialTime='30'
                className='example-body__audio'
                id='audio'
              ></Audio>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
