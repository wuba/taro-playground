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
        <Text className='example-title'>其他</Text>
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
                <View className='bg' style={{ overflow: 'hidden', height: '300px', width: '300px', margin: '10px'}}>
                  <View className='box m10' style={{ height: '400px', width: '400px', opacity: 0.5 }}>hidden</View>
                </View>
                <View className='bg' style={{ overflow: 'visibile', height: '300px', width: '300px', margin: '10px'}}>
                  <View className='box m10' style={{ height: '400px', width: '400px', opacity: 0.5 }}>visibile</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}

