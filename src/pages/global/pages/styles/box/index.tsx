import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='尺寸'></Header>
    </View>
 
    {/* 测试 单位 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>width height 单位</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>height & width 单位:px</Text>
              <View className='row bg'>
                <View className='box' style={{ height: '100px', width: '100px'}}>100px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>height & width 单位:%</Text>
              <View className='row bg' style={{height: '400px', width: '400px'}}>
                <View className='box' style={{ height: '50%', width: '50%'}}>50%</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>width 单位:vw</Text>
              <View className='row bg'>
                <View className='box' style={{ width: '50vw'}}>50vw</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>heigh 单位:vh</Text>
              <View className='row bg'>
                <View className='box' style={{ height: '50vh'}}>50vh</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    {/* 测试 最小/大 */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>最大/小尺寸</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>min-width: 200px</Text>
              <View className='row bg'>
                <View className='box' style={{ minWidth: '200px'}}>200px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>max-width: 50px</Text>
              <View className='row bg'>
                <View className='box' style={{ maxWidth: '50px'}}>50px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>min-height: 200px</Text>
              <View className='row bg'>
                <View className='box' style={{ minHeight: '200px'}}>200px</View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>max-height: 50px</Text>
              <View className='row bg'>
                <View className='box' style={{ maxHeight: '50px'}}>50px</View>
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
                <View className='mbox' style={{ margin: '10px'}}>
                  <View className='mmbox' style={{ marginLeft: '10px'}}></View>
                </View>
                <View className='mbox' style={{ margin: '10px 10px'}}>
                  <View className='mmbox' style={{ marginTop: '10px'}}></View>
                </View>
                <View className='mbox' style={{ margin: '10px 10px 10px', justifyContent: 'flex-end'}}>
                  <View className='mmbox' style={{ marginRight: '10px'}}></View>
                </View>
                <View className='mbox' style={{ margin: '10px 10px 10px 10px', alignItems: 'flex-end'}}>
                  <View className='mmbox' style={{ marginBottom: '10px'}}></View>
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
                <View className='pbox' style={{ paddingLeft: '10px'}}>
                  <View className='mmbox'></View>
                </View>
                <View className='pbox' style={{ paddingTop: '10px'}}>
                  <View className='mmbox'></View>
                </View>
                <View className='pbox' style={{ paddingRight: '10px', justifyContent: 'flex-end'}}>
                  <View className='mmbox'></View>
                </View>
                <View className='pbox' style={{ paddingBottom: '10px', alignItems: 'flex-end'}}>
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

