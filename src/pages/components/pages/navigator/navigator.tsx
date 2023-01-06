import { View, Navigator } from '@tarojs/components'

import Header from '@/components/head/head'

import './navigator.scss'

const url = '/pages/global/pages/router/index'
const taburl = '/pages/global/index'

const NavigatorPage = () => {
  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='Navigator'></Header>
      </View>
      <View className='components-page__body'>
        <View className='components-page__body-example example'>
          <View className='example-body'>
            <View className='example-body__navigators'>
              <Navigator
                url={url}
              >
                <View className='example-body__navigators-item'>跳转到新页面</View>
              </Navigator>
              <Navigator
                url={url}
                openType='redirect'
              >
                <View className='example-body__navigators-item'>在当前页打开</View>
              </Navigator>
              <Navigator
                url={taburl}
                openType='switchTab'
              >
                <View className='example-body__navigators-item'>跳转到tabBar页面</View>
              </Navigator>
              <Navigator
                url={url}
                openType='reLaunch'
              >
                <View className='example-body__navigators-item'>关闭所有页面</View>
              </Navigator>
              <Navigator
                delta={1}
                openType='navigateBack'
              >
                <View className='example-body__navigators-item'>返回上一页面</View>
              </Navigator>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default NavigatorPage