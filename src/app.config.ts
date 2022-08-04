/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-08-03 18:57:38
 * @FilePath: /taro-react-native/src/app.config.ts
 */

const tabs = [
  {
    iconPath: './assets/iconpark/system.png',
    selectedIconPath: './assets/iconpark/system_selected.png',
    pagePath: 'pages/home/index',
    text: '项目',
  },
  {
    iconPath: './assets/iconpark/cycle.png',
    selectedIconPath: './assets/iconpark/cycle_selected.png',
    pagePath: 'pages/global/index',
    text: '全局',
  },
  {
    iconPath: './assets/iconpark/components.png',
    selectedIconPath: './assets/iconpark/components_selected.png',
    pagePath: 'pages/components/index',
    text: '组件',
  },
  {
    iconPath: './assets/iconpark/ring.png',
    selectedIconPath: './assets/iconpark/ring_selected.png',
    pagePath: 'pages/apis/index',
    text: '接口',
  },
  {
    iconPath: './assets/iconpark/painted-eggshell.png',
    selectedIconPath: './assets/iconpark/painted-eggshell_selected.png',
    pagePath: 'pages/explore/index',
    text: '探索',
  },
  {
    iconPath: './assets/iconpark/user.png',
    selectedIconPath: './assets/iconpark/user_selected.png',
    pagePath: 'pages/about/index',
    text: '关于',
  },
]

const pages = [
  'pages/home/index',
  // 全局相关 start
  'pages/global/index',
  'pages/global/pages/hooks/page',
  'pages/global/pages/lifecycle/page',
  'pages/global/pages/router/index',
  'pages/global/pages/styles/size',
  'pages/global/pages/styles/platform',
  // 全局相关 end
  // 组件相关 start
  'pages/components/index',
  'pages/components/pages/view/view',
  'pages/components/pages/scroll-view/scroll-view',
  'pages/components/pages/icon/icon',
  'pages/components/pages/progress/progress',
  'pages/components/pages/image/image',
  // 'pages/components/pages/audio/audio',
  'pages/components/pages/camera/camera',
  'pages/components/pages/video/video',
  'pages/components/pages/swiper/swiper',
  'pages/components/pages/form/form',
  'pages/components/pages/input/input',
  'pages/components/pages/checkbox/checkbox',
  'pages/components/pages/radio/radio',
  'pages/components/pages/button/button',
  'pages/components/pages/text/text',
  'pages/components/pages/label/label',
  'pages/components/pages/page-container/page-container',
  'pages/components/pages/picker/picker',
  'pages/components/pages/picker-view/picker-view',
  'pages/components/pages/rich-text/rich-text',
  'pages/components/pages/slider/slider',
  'pages/components/pages/switch/switch',
  'pages/components/pages/textarea/textarea',
  // 'pages/components/pages/canvas/canvas',
  // 'pages/components/pages/map/map',
  // 'pages/components/pages/navigator/navigator',
  'pages/components/pages/virtual-list/virtual-list',
  'pages/components/pages/movable-view/movable-view',
  // 组件相关 end
  // api 相关 start
  'pages/apis/index',
  'pages/apis/pages/basic/system/index',
  'pages/apis/pages/surface/interactive/index',
  'pages/apis/pages/surface/navigationBar/index',
  'pages/apis/pages/surface/background/index',
  'pages/apis/pages/surface/refresh/index',
  'pages/apis/pages/surface/scroll/index',
  'pages/apis/pages/surface/tabBar/index',
  'pages/apis/pages/surface/window/index',
  'pages/apis/pages/surface/keyboard/index',
  'pages/apis/pages/network/request/index',
  'pages/apis/pages/storage/index/index',
  'pages/apis/pages/media/image/index',
  'pages/apis/pages/media/video/index',
  'pages/apis/pages/media/camera/index',
  'pages/apis/pages/location/index/index',
  'pages/apis/pages/device/network/index',
  'pages/apis/pages/device/screen/index',
  'pages/apis/pages/device/phone/index',
  'pages/apis/pages/device/accelerometer/index',
  'pages/apis/pages/device/deviceMotion/index',
  'pages/apis/pages/device/gyroscope/index',
  'pages/apis/pages/device/scanCode/index',
  'pages/apis/pages/device/vibrate/index',
  'pages/apis/pages/open-api/settings/index',
  // api 相关 end
  'pages/about/index',
  'pages/about/dep',
  'pages/about/mini',
  'pages/about/rn',
  'pages/webview/index',
  // 探索
  'pages/explore/index',
]

const subpackages = [{
  root: 'pages/explore/animate',
  pages: [
    'lottie/index',
  ],
}, {
  root: 'pages/explore/others',
  pages: [
    'linear-gradient/index',
  ]
}]

export default {
  // entryPagePath: 'pages/home/index',
  pages: process.env.TARO_ENV === 'rn' ? pages : pages.splice(1),
  subpackages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#6190E8', // 主题色
    list: process.env.TARO_ENV === 'rn' ? tabs : tabs.splice(1)
  },
  rn: {
    useNativeStack: true, // 使用 @react-navigation/native-stack
  }
}
