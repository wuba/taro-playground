import { useState } from 'react'
import { PageContainer, PageContainerProps, View, Button } from '@tarojs/components'
import Header from "@/components/head/head";

import './page-container.scss'

export default function PageView() {
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState<keyof PageContainerProps.Position>('bottom')
  return <>
    <View className='components-page__header'>
      <Header title='Page Container'></Header>
    </View>
    <View className='components-page__body'>
      <Button className='btn' type='primary' onClick={()=>{
        setPosition('top')
        setShow(true)
      }}
      >top</Button>
      <Button className='btn' type='primary' onClick={()=>{
        setPosition('bottom')
        setShow(true)
      }}
      >bottom</Button>
      <Button className='btn' type='primary' onClick={()=>{
        setPosition('center')
        setShow(true)
      }}
      >center</Button>
      <Button className='btn' type='primary' onClick={()=>{
        setPosition('right')
        setShow(true)
      }}
      >right</Button>
    </View>
    <PageContainer
      show={show}
      position={position}
      // @ts-ignore
      onRequestClose={()=>{
        setShow(false)
      }}
    >
      <View className='container'>
        <Button className='btn' type='warn' onClick={()=>{
          setShow(false)
        }}
        >close</Button>
      </View>
    </PageContainer>
  </>
}