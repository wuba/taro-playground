import { useState } from 'react'
import { View, Button, Slider } from '@tarojs/components'

import Header from '@/components/head/head'

const PageSlider = () => {
  const [value, setValue] = useState(0);

  const handleChaning = e => {
    if (e?.detail.value) {
      setValue(e?.detail.value)
    }
  }

  const onClickSet = () => {
    const val = Math.floor(Math.random() * 100)
    setValue(val);
  }

  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='Slider'></Header>
      </View>
      <View className='components-page__body'>

        <View className='components-page__body-example example'>
          <View className='example-header'>设置step</View>
          <View className='example-body'>
            <Slider step={10} value={50}></Slider>
          </View>
        </View>

        <View className='components-page__body-example example'>
          <View className='example-header'>显示当前的value</View>
          <View className='example-body'>
            <Slider step={1} value={50} showValue></Slider>
          </View>
        </View>

        <View className='components-page__body-example example'>
          <View className='example-header'>设置最小/最大值</View>
          <View className='example-body'>
            <Slider step={1} value={100} showValue min={50} max={200}></Slider>
          </View>
        </View>

        <View className='components-page__body-example example'>
          <View className='example-header'>UI设置</View>
          <View className='example-body'>
            <Slider step={1} value={50} activeColor='#6190E8' backgroundColor='red' blockColor='#333' blockSize={20}></Slider>
          </View>
        </View>

        <View className='components-page__body-example example'>
          <View className='example-header'>数据绑定</View>
          <View className='example-body'>
            <Slider step={1} value={value} onChanging={handleChaning} showValue min={0} max={100}></Slider>
            <Button type='primary' onClick={onClickSet}>Set Value</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PageSlider;
