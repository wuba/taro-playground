import { Component } from 'react'
import { View } from '@tarojs/components'
import Insignia from '@/components/insignia/insignia'
import './index.scss'
import LottieView, { LottieViewType } from 'taro-lottie'
import lottieData1 from './animation1.json'
import lottieData2 from './animation2.json'

export default class Lottie extends Component {
  
  animation1: LottieViewType | null = null
  animation2: LottieViewType | null = null
  
  onReady(){
    this.animation1?.init()
    this.animation2?.init()
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='lottie'>
        <Insignia github='https://github.com/zhiqingchen/taro-lottie' title='Taro Lottie' />
        <LottieView
          ref={ animation => {
            this.animation1 = animation;
            globalThis.aa = animation
          }}
          style={
            {
              width: 100,
              height: 100
            }
          }
          autoPlay={true}
          loop={true}
          source={lottieData1 as any}
        />
        <LottieView
          ref={ animation => {
            this.animation2 = animation;
          }}
          style={
            {
              width: 375,
              height: 500,
              marginLeft: 'auto',
              marginRight: 'auto'
            }
          }
          autoPlay={true}
          loop={true}
          source={lottieData2 as any}
        />
      </View>
    )
  }
}
