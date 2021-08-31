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
