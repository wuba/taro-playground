import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

/**
 * 界面-导航栏
 * @returns 
 */
const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <View className='api-page'>
      <View className='view-item'>
        <Button
          type='primary'
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
          type='primary'
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
          type='primary'
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
          type='primary'
          className='btn'
          onClick={() => {
            const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            Taro.setNavigationBarColor({
              backgroundColor: randomColor,
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
