/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-21 14:57:21
 * @FilePath: /taro-react-native/src/app.ts
 */
import { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'

import './app.scss'

class App extends Component {

  componentDidMount () {
    SplashScreen.hide();
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}
export default App
