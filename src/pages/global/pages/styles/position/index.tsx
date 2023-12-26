import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='absolute'></Header>
    </View>

    {/* 测试 定位 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>position</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>relative</Text>
              <View className='row bg'>
                <View className='box' style={{ position: 'relative', top: '30px', left: '30px'}}>relative 30px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>absolute</Text>
              <View className='row'>
                <View className='bg' style={{ position: 'relative', height: '200px', width: '200px'}}>
                  <View className='box' style={{ position: 'absolute', top: '30px', left: '30px'}}>
                    absolute 30px
                  </View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>zIndex</Text>
              <View className='row'>
                <View className='bg' style={{ position: 'relative', height: '200px', width: '200px'}}>
                  <View className='box' style={{ opacity: 0.5, position: 'absolute', top: '30px', left: '30px', zIndex: 1}}>1</View>
                  <View className='box' style={{ opacity: 0.5, position: 'absolute', top: '35px', left: '35px', zIndex: 2 }}>2</View>
                  <View className='box' style={{ opacity: 0.5, position: 'absolute', top: '40px', left: '40px', zIndex: 3}}>3</View>
                  <View className='box' style={{ opacity: 0.5, position: 'absolute', top: '45px', left: '45px', zIndex: 4}}>4</View>
                  <View className='box' style={{ opacity: 0.5, position: 'absolute', top: '50px', left: '50px', zIndex: 5}}>5</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}


