import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='其他'></Header>
    </View>
    {/* 测试 透明度 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>其他</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>opacity</Text>
              <View className='row'>
                {[...new Array(11)].map((item, index) => {
                  return <View key={index} className='box m10' style={{ opacity: index / 10 }}>{`${index / 10}`}</View>
                })}
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>overflow</Text>
              <View className='column'>
                <View className='bg box300' style={{ overflow: 'hidden'}}>
                  <View className='box m10 box400'>hidden</View>
                </View>
                <View className='bg box300' style={{ overflow: 'visibile'}}>
                  <View className='box m10 box400'>visibile</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}

