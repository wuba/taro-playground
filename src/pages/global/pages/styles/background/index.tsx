import { View, Text } from "@tarojs/components";
import Header from "@/components/head/head";
import './index.scss'

export default function Size() {
  return <View className='global-page'>
    <View className='global-page__header'>
      <Header title='background'></Header>
    </View>
    {/* 测试 background-color */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>background-color</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>#f00</Text>
              <View className='row'>
                <View className='box' style={{
                  backgroundColor: '#f00'
                }}
                ></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>red</Text>
              <View className='row'>
                <View className='box' style={{
                  backgroundColor: 'red'
                }}
                ></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>rgba(255, 0, 0)</Text>
              <View className='row'>
                <View className='box' style={{
                  backgroundColor: 'rgba(255, 0, 0)'
                }}
                ></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>rgba(255, 0, 0, 0.4)</Text>
              <View className='row'>
                <View className='box' style={{
                  backgroundColor: 'rgba(255, 0, 0, 0.4)'
                }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试 background-image */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>background-image</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>图片</Text>
              <View className='row'>
                <View className='big-box' style={{
                  backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                }}
                ></View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>linear-gradient(30deg, #f00, #00f 100%)</Text>
              <View className='row'>
                <View className='big-box linear' style={{
                  // backgroundImage: 'linear-gradient(30deg, #f00, #00f)'
                }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试background-size */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>background-size</Text>
        <View className='example-body'>
          <View className='column'>
          <View className='column'>
              <Text className='example-sub-title'>cover</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundSize: 'cover'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>contain</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundSize: 'contain'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>150px 150px</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundSize: '150px 150px'
                  }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试background-position */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>background-position</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>contain</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'center'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>center</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'center'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>left</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'left'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>top</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'top'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>right</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'right'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>bottom</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'bottom'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>left top</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'left top'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>left bottom</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'left bottom'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>right top</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'right top'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>right bottom</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img12.360buyimg.com/imagetools/jfs/t1/47600/30/11783/99393/5d8ca636Eb50c6feb/5b7dfc385942a8ca.jpg)',
                    backgroundPosition: 'right bottom'
                  }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    {/* 测试background-repeat */}
    <View className='global-page__body'>
      <View className='global-page__body-example example'>
        <Text className='example-title'>background-repeat</Text>
        <View className='example-body'>
          <View className='column'>
            <View className='column'>
              <Text className='example-sub-title'>repeat</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img13.360buyimg.com/imagetools/jfs/t1/122861/24/16165/7879/613f06d7E3f180ea2/898201b04bfad9da.png)',
                    backgroundRepeat: 'repeat'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>no-repeat</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img13.360buyimg.com/imagetools/jfs/t1/122861/24/16165/7879/613f06d7E3f180ea2/898201b04bfad9da.png)',
                    backgroundRepeat: 'no-repeat'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>repeat-y</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img13.360buyimg.com/imagetools/jfs/t1/122861/24/16165/7879/613f06d7E3f180ea2/898201b04bfad9da.png)',
                    backgroundRepeat: 'repeat-x'
                  }}
                  ></View>
                </View>
              </View>
            </View>
            <View className='column'>
              <Text className='example-sub-title'>repeat-y</Text>
              <View className='row'>
                <View className='bg'>
                  <View className='big-box' style={{
                    backgroundImage: 'url(https://img13.360buyimg.com/imagetools/jfs/t1/122861/24/16165/7879/613f06d7E3f180ea2/898201b04bfad9da.png)',
                    backgroundRepeat: 'repeat-y'
                  }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
}