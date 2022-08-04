import { Component } from 'react'
import { View, Text, Button, Slider } from '@tarojs/components'
import Insignia from '@/components/insignia/insignia'
import LinearGradient from 'linear-gradient-taro'

import './index.scss'

interface GradientState {
  start: {
    x: number
    y: number
  }
  end: {
    x: number
    y: number
  }
  count: number
  colorTop: string
  colorBottom: string
  useAngle: boolean
  angle: number
}

export default class Gradient extends Component<{}, GradientState> {

  constructor(props) {
    super(props)
    this.state = {
      start: {
        x: 0,
        y: 0
      },
      end: {
        x: 0,
        y: 1
      },
      count: 0,
      colorTop: '#000000',
      colorBottom: '#cccccc',
      useAngle: false,
      angle: 180
    }
  }

  incrementColor = (color, step) => {
    const intColor = parseInt(color.substr(1), 16)
    const newIntColor = (intColor + step).toString(16)
    return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`
  }

  handleChaning = (e) => {
    if (e?.detail.value) {
      this.setState({
        useAngle: true,
        angle: e?.detail.value || 0
      })
    }
  }

  timer: any

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        colorTop: this.incrementColor(this.state.colorTop, 1),
        colorBottom: this.incrementColor(this.state.colorBottom, -1),
      });
    }, 20)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidShow() { }

  componentDidHide() { }
  render() {
    const { start, end, colorTop, colorBottom, useAngle, angle } = this.state
    return (
      <View className='linear-gradient'>
        <Insignia github='https://github.com/zhiqingchen/linear-gradient-taro' title='Taro Linear Gradient' />
        <LinearGradient
          className='linear-gradient-1'
          colors={[colorTop, colorBottom]}
          start={start}
          end={end}
          useAngle={useAngle}
          angle={angle}
        >
          <Text className='linear-gradient-text'>
            Taro Playground
          </Text>
        </LinearGradient>
        <View className='btn-center'>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 1,
                y: 0
              },
              end: {
                x: 0,
                y: 0
              }
            })
          }}>←</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 0,
                y: 1
              },
              end: {
                x: 0,
                y: 0
              }
            })
          }}>↑</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 1,
                y: 0
              }
            })
          }}>→</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 0,
                y: 1
              }
            })
          }}>↓</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 1,
                y: 1
              },
              end: {
                x: 0,
                y: 0
              }
            })
          }}>↖</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 0,
                y: 1
              },
              end: {
                x: 1,
                y: 0
              }
            })
          }}>↗</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 1,
                y: 1
              }
            })
          }}>↘</Button>
          <Button size='mini' className='btn' type='default' onClick={() => {
            this.setState({
              useAngle: false,
              start: {
                x: 1,
                y: 0
              },
              end: {
                x: 0,
                y: 1
              }
            })
          }}>↙</Button>
        </View>
        <View className='linear-gradient-slider'>
          <Slider step={1} value={angle} onChanging={this.handleChaning} min={0} max={360}></Slider>
        </View>
      </View>
    )
  }
}
