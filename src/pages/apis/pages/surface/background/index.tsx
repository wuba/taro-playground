import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './index.scss'

/**
 * 界面-背景（下拉刷新时的 loading 样式）
 * @returns 
 */
const Index = () => {
  return (
    <View className='api-page'>
      <Button
        className='btn'
        type='primary'
        onClick={() => {
          Taro.setBackgroundTextStyle({
            textStyle: 'dark', // 下拉时，loading 文本的样式（仅iOS）
          })
            .then(() => {
              Taro.startPullDownRefresh();
              const timer = setTimeout(() => {
                Taro.stopPullDownRefresh();
                timer && clearTimeout(timer);
              }, 2000);
            })
            .catch(err => {
              console.log(err);
              Taro.showToast({ title: '出错了', icon: 'none' });
            })
        }}
      >
        setBackgroundTextStyle【iOS】
      </Button>
      <Button
        className='btn'
        type='primary'
        onClick={() => {
          const randomColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
          Taro.setBackgroundColor({
            backgroundColor: randomColor, // 下拉时，loading 的样式（仅Android）
          }).then(() => {
            Taro.startPullDownRefresh();
            const timer = setTimeout(() => {
              Taro.stopPullDownRefresh();
              timer && clearTimeout(timer);
            }, 2000);
          }).catch(() => {
            Taro.showToast({ title: '出错了', icon: 'none' });
          });
        }}
      >
        setBackgroundColor【Android】
      </Button>
    </View>
  )
}

export default Index;
