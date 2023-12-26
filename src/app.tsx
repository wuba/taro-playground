import Taro from '@tarojs/taro'
import { Component, PropsWithChildren } from 'react'
import './app.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    Taro.eventCenter.on('__taroNotSupport', (args) => {
      Taro.showToast({
        title: `Taro ${process.env.TARO_VERSION} 版本在 ${process.env.TARO_ENV} 端不支持 ${args.name} ${args.type === 'method' ? '方法' : '组件'}`,
        icon: 'error',
        duration: 2000
      })
    })
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
