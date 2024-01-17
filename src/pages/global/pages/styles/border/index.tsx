import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='border'></Header>
    </View>
 
    {/* 测试 border-width */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>border</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>border</Text>
              <View className='row bg'>
                <View className='box border-1'>1px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>border 四边</Text>
              <View className='row bg'>
                <View className='box border-l1'>border-left</View>
                <View className='box border-t1'>border-top</View>
                <View className='box border-r1'>border-right</View>
                <View className='box border-b1'>border-bottom</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 border-width */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>border-width</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>border-width</Text>
              <View className='row bg'>
                <View className='box border border-w1'>1px</View>
                <View className='box border border-w5'>5px</View>
                <View className='box border border-w10'>10px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>border-width 四边</Text>
              <View className='row bg'>
                <View className='box border border-lw5'>left</View>
                <View className='box border border-tw5'>top</View>
                <View className='box border border-rw5'>right</View>
                <View className='box border border-bw5'>bottom</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 border-color */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>border-color</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>border-color</Text>
              <View className='row bg'>
                <View className='box border' style={{ borderColor: '#f00'}}>#f00</View>
                <View className='box border' style={{ borderColor: 'rgb(255, 0, 0)'}}>rgb(255, 0, 0)</View>
                <View className='box border' style={{ borderColor: 'rgba(255, 0, 0, 0.5)'}}>rgba(255, 0, 0, 0.5)</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>border-color 四边</Text>
              <View className='row bg'>
                <View className='box border' style={{ borderTopColor: '#f00'}}>top</View>
                <View className='box border' style={{ borderRightColor: '#f00'}}>right</View>
                <View className='box border' style={{ borderBottomColor: '#f00'}}>bottom</View>
                <View className='box border' style={{ borderLeftColor: '#f00'}}>left</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 border-style */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>border-style</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>border-style</Text>
              <View className='row bg'>
                <View className='box border' style={{ borderStyle: 'solid'}}>solid</View>
                <View className='box border' style={{ borderStyle: 'dashed'}}>dashed</View>
                <View className='box border' style={{ borderStyle: 'dotted'}}>dotted</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>border-style 四边</Text>
              <View className='row bg'>
                <View className='box border' style={{ borderTopStyle: 'dashed'}}>top</View>
                <View className='box border' style={{ borderRightStyle: 'dashed'}}>right</View>
                <View className='box border' style={{ borderBottomStyle: 'dashed'}}>bottom</View>
                <View className='box border' style={{ borderLeftStyle: 'dashed'}}>left</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 border-radius */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>border-radius</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>border-radius(不支持百分比)</Text>
              <View className='row bg'>
                <View className='box border' style={{ borderRadius: '10px'}}>10px</View>
                <View className='box border' style={{ borderRadius: '20px'}}>20px</View>
                <View className='box border' style={{ borderRadius: '30px'}}>30px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>border-color 四边</Text>
              <View className='row bg'>
                <View className='box border' style={{ borderTopLeftRadius: '20px'}}>top left</View>
                <View className='box border' style={{ borderTopRightRadius: '20px'}}>top right</View>
                <View className='box border' style={{ borderBottomLeftRadius: '20px'}}>bottom left</View>
                <View className='box border' style={{ borderBottomRightRadius: '20px'}}>bottom right</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}
