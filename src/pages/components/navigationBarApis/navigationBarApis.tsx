import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { randomColor } from '@/utils/index'
import './navigationBarApis.scss'

/**
 * 界面-导航栏
 * @returns 
 */
const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <View className='api-page'>
      <View className='page-sub-title'>
        <Text className='page-sub-title_text'>
          以下为 NavigationBar 相关接口
        </Text>
      </View>
      <View className='view-item'>
        <Button
          className='btn'
          onClick={() => Taro.showNavigationBarLoading({
            success: () => {
              console.log('成功');
            },
            fail: err => {
              console.log('失败：', err);
            },
          })}
        >showNavigationBarLoading</Button>

        <Button
          className='btn'
          onClick={() => Taro.hideNavigationBarLoading({
            success: () => {
              console.log('成功');
            },
            fail: err => {
              console.log('失败：', err);
            },
          })}
        >hideNavigationBarLoading</Button>

        <Button
          className='btn'
          onClick={() => Taro.setNavigationBarTitle({
            title: '新标题' + count,
            success: () => {
              setCount(c => c + 1);
              console.log('成功');
            },
            fail: err => {
              console.log('失败：', err);
            },
          })}
        >setNavigationBarTitle</Button>

        <Button
          className='btn'
          onClick={() => {
            const backgroundColor = randomColor()
            Taro.setNavigationBarColor({
              backgroundColor,
              frontColor: '#ffffff',
              success: () => {
                console.log('成功');
              },
              fail: err => {
                console.log('失败：', err);
              },
            })
          }}
        >setNavigationBarColor</Button>
      </View>
    </View>
  )
}

export default Index;
