import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='文本'></Header>
    </View>
    {/* 测试 文本 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>font</Text>
        <View className='example-body'>
          <View className='column'>
          <View className='column'>
              <Text className='example-sub-title'>font-size</Text>
              <View className='row'>
                <Text className='m10' style={{ fontSize: '10px'}}>10px</Text>
                <Text className='m10' style={{ fontSize: '16px'}}>16px</Text>
                <Text className='m10' style={{ fontSize: '20px'}}>20px</Text>
                <Text className='m10' style={{ fontSize: '24px'}}>24px</Text>
                <Text className='m10' style={{ fontSize: '28px'}}>28px</Text>
                <Text className='m10' style={{ fontSize: '32px'}}>32px</Text>
                <Text className='m10' style={{ fontSize: '36px'}}>36px</Text>
                <Text className='m10' style={{ fontSize: '6vw'}}>6vw</Text>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>font-style</Text>
              <View className='row'>
                <Text className='m10' style={{ fontStyle: 'normal'}}>normal</Text>
                <Text className='m10' style={{ fontStyle: 'italic'}}>italic</Text>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>font-weight</Text>
              <View className='row'>
                <Text className='m10' style={{ fontWeight: 'normal'}}>normal</Text>
                <Text className='m10' style={{ fontWeight: 'bold'}}>bold</Text>
                <Text className='m10' style={{ fontWeight: 'bolder'}}>bolder</Text>
                <Text className='m10' style={{ fontWeight: 100}}>100</Text>
                <Text className='m10' style={{ fontWeight: 200}}>200</Text>
                <Text className='m10' style={{ fontWeight: 300}}>300</Text>
                <Text className='m10' style={{ fontWeight: 400}}>400</Text>
                <Text className='m10' style={{ fontWeight: 500}}>500</Text>
                <Text className='m10' style={{ fontWeight: 600}}>600</Text>
                <Text className='m10' style={{ fontWeight: 700}}>700</Text>
                <Text className='m10' style={{ fontWeight: 800}}>800</Text>
                <Text className='m10' style={{ fontWeight: 900}}>900</Text>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>font-weight</Text>
              <View className='row'>
                <Text className='m10' style={{ textDecoration: 'none'}}>none</Text>
                <Text className='m10' style={{ textDecoration: 'underline'}}>underline</Text>
                <Text className='m10' style={{ textDecoration: 'line-through'}}>line-through</Text>
                <Text className='m10' style={{ textDecoration: 'overline'}}>overline</Text>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>color</Text>
              <View className='row'>
                <Text className='m10' style={{ color: '#f00'}}>#f00</Text>
                <Text className='m10' style={{ color: 'rgb(255, 0, 0)'}}>rgb(255, 0, 0)</Text>
                <Text className='m10' style={{ color: 'rgba(255, 0, 0, 0.5)'}}>rgba(255, 0, 0, 0.5)</Text>
                <Text className='m10' style={{ color: 'red'}}>red</Text>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>text-align</Text>
              <View className='row'>
                <Text className='m10' style={{ textAlign: 'left', width: '100%'}}>left</Text>
                <Text className='m10' style={{ marginTop: '10px', textAlign: 'center', width: '100%'}}>center</Text>
                <Text className='m10' style={{ marginTop: '10px', textAlign: 'right', width: '100%'}}>right</Text>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>line-height</Text>
              <View className='row'>
                <Text className='m10 bg' style={{ marginTop: '10px', lineHeight: '30px', width: '100%'}}>30px</Text>
                <Text className='m10 bg' style={{ marginTop: '10px', lineHeight: '60px', width: '100%'}}>60px</Text>
                <Text className='m10 bg' style={{ marginTop: '10px', lineHeight: '100px', width: '100%'}}>100px</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}

