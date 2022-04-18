import { useEffect, useRef, useState } from 'react'
import { View, Progress, Button, Text } from '@tarojs/components'
import Header from '@/components/head/head'

import './progress.scss'

const PageView = () => {
  const timer = useRef<any>(null);
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start && progress < 100) {
      timer.current = setTimeout(() => {
        setProgress(progress + 1);
        timer.current && clearTimeout(timer.current);
      }, 10)
    }
  }, [progress, start]);

  const _handleStart = () => {
    setStart(true);
  };

  const _handleStop = () => {
    setStart(false);
  };

  const _handleReset = () => {
    setStart(false);
    setProgress(0);
    timer.current && clearTimeout(timer.current);
  };

  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='Progress'></Header>
      </View>
      <View className='components-page__body'>
        <View className='components-page__body-example'>
          <View className='example-progress'>
            <Progress percent={20} showInfo strokeWidth={2} ></Progress>
          </View>
          <View className='example-progress'>
            <Progress percent={40} strokeWidth={4} active ></Progress>
          </View>
          <View className='example-progress'>
            <Progress percent={60} strokeWidth={6} active ></Progress>
          </View>
          <View className='example-progress'>
            <Progress
              percent={80}
              strokeWidth={8}
              active
              activeColor='#6190E8'
              borderRadius={10}
            />
          </View>
        </View>
      </View>
      <View className='components-page__footer' style={{ marginTop: 40 }}>
        <View className='example-progress'>
          <Progress
            showInfo
            strokeWidth={10}
            percent={progress}
            activeColor='#6190E8'
          />
        </View>
        <View className='example-controller'>
          <Button size='mini' className='example-controller-btn1' onClick={_handleStart}>
            <Text style={{ color: '#fff' }}>加载</Text>
          </Button>
          <Button size='mini' className='example-controller-btn2' onClick={_handleStop}>
            <Text style={{ color: '#fff' }}>暂停</Text>
          </Button>
          <Button size='mini' className='example-controller-btn3' onClick={_handleReset}>
            <Text style={{ color: '#fff' }}>重置</Text>
          </Button>
        </View>
      </View>
    </View>
  )
}

export default PageView;
