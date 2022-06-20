import { Component } from 'react'
import { View } from '@tarojs/components'
import { getSystemInfoSync } from '@tarojs/taro'
import './index.scss'
import LottieView, { LottieViewType } from 'taro-lottie'
import lottieData1 from './animation1.json'
import lottieData2 from './animation2.json'

const { windowWidth, windowHeight } = getSystemInfoSync()
console.log(11, windowWidth)

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
