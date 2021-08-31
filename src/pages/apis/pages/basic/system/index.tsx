import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import JSONTree from '@/components/jsontree'
import './index.scss'

/**
 * 基础-系统
 * @returns 
 */
const Index = () => {
  const [info, setInfo] = useState({});
  return (
    <View className='api-page'>
      <Button
        className='api-page-btn'
        type='primary'
        onClick={() => {
          Taro.getSystemInfo({
            success: res => {
              setInfo(res);
            }
          })
        }}
      >
        getSystemInfo
      </Button>
      <Button
        className='api-page-btn'
        type='primary'
        onClick={() => {
          const res = Taro.getSystemInfoSync()
          setInfo(res);
        }}
      >
        getSystemInfoSync
      </Button>
      <Button
        className='api-page-btn'
        type='primary'
        onClick={() => setInfo({})}
      >
        clear
      </Button>
      <JSONTree data={info} />
    </View>
  );
}

export default Index;
