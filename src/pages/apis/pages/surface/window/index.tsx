/*
 * @Author: iChengbo
 * @Date: 2021-07-28 16:00:04
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-28 16:16:01
 * @FilePath: /taro-react-native/src/pages/apis/pages/surface/window/index.tsx
 */
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';

import './index.scss'

const PageView = () => {

  const windowResizeHandler = () => {
    Taro.showToast({ title: '执行回调', icon: 'none' })
  }

  const _onWindowResize = () => {
    Taro.onWindowResize(windowResizeHandler);
  }

  const _offWindowResize = () => {
    Taro.offWindowResize(windowResizeHandler);
  }

  return (
    <View className="api-page">
      <View className="api-page-btns">
        <Button
          type="primary"
          className="api-page-btns-btn1"
          onClick={_onWindowResize}
        >Taro.onWindowResize</Button>
        <Button
          type="primary"
          className="api-page-btns-btn2"
          onClick={_offWindowResize}
        >Taro.offWindowResize</Button>
      </View>
    </View>
  )
}

export default PageView;
