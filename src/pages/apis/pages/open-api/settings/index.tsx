import { View, Button } from '@tarojs/components';
import { useState } from 'react';
import { getSetting, openSetting } from '@tarojs/taro';
import JSONTree from '@/components/jsontree';

/**
 * 开放接口-设置
 */
export default () => {
  const [setting, setSetting] = useState({});
  return (
    <View className="api-page">
      <View className="api-page__body">
        <Button
          onClick={()=>{
            openSetting({})
          }}
        >Taro.openSetting</Button>
        <Button
          type="primary"
          className="api-page-btn-success"
          onClick={() => {
            getSetting({}).then(setSetting)
          }}
        >Taro.getSetting</Button>
        <JSONTree data={setting} />
      </View>
    </View>
  )
}
