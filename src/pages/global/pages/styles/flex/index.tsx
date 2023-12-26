import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='flex'></Header>
    </View>
    {/* 测试 flex-direcion */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>flex-direction</Text>
        <View className='example-body'>
          <Text className='example-sub-title'>row</Text>
          <View className='row bg'>
            <View className='box'></View>
            <View className='box'></View>
          </View>
          <Text className='example-sub-title'>column</Text>
          <View className='column bg'>
            <View className='box'></View>
            <View className='box'></View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 justify-context */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
      <Text className='example-title'>justify-content</Text>
        <View className='example-body'>
          <Text className='example-sub-title'>flex-start</Text>
          <View className='row justify-flex-start bg'>
            <View className='box'></View>
          </View>
          <Text className='example-sub-title'>flex-end</Text>
          <View className='row justify-flex-end bg'>
            <View className='box'></View>
          </View>
          <Text className='example-sub-title'>center</Text>
          <View className='row justify-center bg'>
            <View className='box'></View>
          </View>
          <Text className='example-sub-title'>space-between</Text>
          <View className='row justify-space-between bg'>
            <View className='box'></View>
            <View className='box'></View>
            <View className='box'></View>
          </View>
          <Text className='example-sub-title'>space-around</Text>
          <View className='row justify-space-around bg'>
            <View className='box'></View>
            <View className='box'></View>
            <View className='box'></View>
          </View>
          {process.env.TARO_ENV === 'harmony' && (
            <>
              <Text className='example-sub-title'>space-evenly</Text>
              <View className='row justify-space-evenly bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </>  
          )}
        </View>
      </View>
    </View>
    {/* 测试 align-items */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>align-items</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>flex-start</Text>
              <View className='row align-flex-start h150 bg'>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>flex-end</Text>
              <View className='row align-flex-end h150 bg'>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>center</Text>
              <View className='row align-center h150 bg'>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>baseline</Text>
              <View className='row align-baseline h150 bg'>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>stretch</Text>
              <View className='row align-stretch h150 bg'>
                <View className='box'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 align-content */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>align-content</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>flex-start</Text>
              <View className='row wrap align-content-flex-start h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>flex-end</Text>
              <View className='row wrap align-content-flex-end h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>center</Text>
              <View className='row wrap align-content-center h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>space-between</Text>
              <View className='row wrap align-content-space-between h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>space-around</Text>
              <View className='row wrap align-content-space-around h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            {process.env.TARO_ENV === 'harmony' && (
              <View className='column'>
              <Text className='example-sub-title'>space-evenly</Text>
              <View className='row wrap align-content-space-evenly h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            )}
          </View>
        </View>
      </View>
    </View>
    {/* 测试 flex-wrap */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>flex-wrap</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>wrap</Text>
              <View className='wrap row h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>nowrap</Text>
              <View className='nowrap row h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>wrap-reverse</Text>
              <View className='wrap-reverse row h300 bg'>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
                <View className='box'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 align-self */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>align-self</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>flex-start</Text>
              <View className='row h150 bg'>
                <View className='box align-self-flex-start'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>flex-end</Text>
              <View className='row h150 bg'>
                <View className='box align-self-flex-end'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>center</Text>
              <View className='row h150 bg'>
                <View className='box align-self-center'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>baseline</Text>
              <View className='row h150 bg'>
                <View className='box align-self-baseline'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>stretch</Text>
              <View className='row h150 bg'>
                <View className='box align-self-stretch'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 flex-grow */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>flex-grow</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>1 1 1</Text>
              <View className='row h150 bg'>
                <View className='box flex-grow-1'></View>
                <View className='box flex-grow-1'></View>
                <View className='box flex-grow-1'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>1 2 1</Text>
              <View className='row h150 bg'>
                <View className='box flex-grow-1'></View>
                <View className='box flex-grow-2'></View>
                <View className='box flex-grow-1'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 flex-shrink */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>flex-shrink</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>1 0 1 1 1 1 1 1 1</Text>
              <View className='row h150 bg'>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-0'></View>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-1'></View>
                <View className='box flex-shrink-1'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 flex-basis */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>flex-shrink</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>120</Text>
              <View className='row h150 bg'>
                <View className='box flex-basis-120'></View>
                <View className='box flex-grow-1'></View>
                <View className='box flex-grow-1'></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>auto</Text>
              <View className='row h150 bg'>
                <View className='box flex-basis-auto w150'></View>
                <View className='box flex-grow-1'></View>
                <View className='box flex-grow-1'></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}

