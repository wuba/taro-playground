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
        <View className='example-header'>position</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>relative</Text>
              <View className='row bg'>
                <View className='box box-relative'>relative 30px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>absolute</Text>
              <View className='row'>
                <View className='bg bg-relative'>
                  <View className='box box-absolute'>
                    absolute 30px
                  </View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>zIndex</Text>
              <View className='row'>
                <View className='bg bg-relative'>
                  <View className='box box-z-1'>1</View>
                  <View className='box box-z-2'>2</View>
                  <View className='box box-z-3'>3</View>
                  <View className='box box-z-4'>4</View>
                  <View className='box box-z-5'>5</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}


