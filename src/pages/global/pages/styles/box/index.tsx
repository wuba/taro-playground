import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='Box'></Header>
    </View>
 
    {/* 测试 单位 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>width height 单位</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>height & width 单位:px</Text>
              <View className='row bg'>
                <View className='box box100'>100px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>height & width 单位:%</Text>
              <View className='row bg box400'>
                <View className='box box-half'>50%</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>width 单位:vw</Text>
              <View className='row bg'>
                <View className='box box-50vw'>50vw</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>heigh 单位:vh</Text>
              <View className='row bg'>
                <View className='box box-50vh'>50vh</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 最小/大 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <View className='example-header'>最大/小尺寸</View>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>min-width: 200px</Text>
              <View className='row bg'>
                <View className='box box-minw200'>200px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>max-width: 50px</Text>
              <View className='row bg'>
                <View className='box box-minw50'>50px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>min-height: 200px</Text>
              <View className='row bg'>
                <View className='box box-minh200'>200px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>max-height: 50px</Text>
              <View className='row bg'>
                <View className='box box-minh50'>50px</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 margin */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>margin</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>margin: 10px</Text>
              <View className='row bg'>
                <View className='mbox box-m10'>
                  <View className='mmbox box-ml10'></View>
                </View>
                <View className='mbox box-m10-2'>
                  <View className='mmbox box-mt10'></View>
                </View>
                <View className='mbox box-m10-3' style={{ justifyContent: 'flex-end'}}>
                  <View className='mmbox box-mr10'></View>
                </View>
                <View className='mbox box-m10-4' style={{ alignItems: 'flex-end'}}>
                  <View className='mmbox box-mb10'></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 padding */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>padding</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>padding: 10px</Text>
              <View className='row bg'>
                <View className='pbox box-pl10'>
                  <View className='mmbox'></View>
                </View>
                <View className='pbox box-pt10'>
                  <View className='mmbox'></View>
                </View>
                <View className='pbox box-pr10' style={{ justifyContent: 'flex-end'}}>
                  <View className='mmbox'></View>
                </View>
                <View className='pbox box-pb10' style={{ alignItems: 'flex-end'}}>
                  <View className='mmbox'></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}

