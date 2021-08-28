import Taro from '@tarojs/taro'

export function hadlePermissionsDeny({ perssionText }:{ perssionText: string }):void{
  Taro.showModal({
    title: '提示',
    content: `请在“设置-隐私-${perssionText}”选项中，允许 Taro 访问你的${perssionText}。`,
    confirmColor: '#6190E8',
    success: function (res) {
      if (res.confirm) {
        Taro.openSetting();
      }
    }
  })
}
