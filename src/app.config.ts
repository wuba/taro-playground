/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-21 15:05:22
 * @FilePath: /taro-react-native/src/app.config.ts
 */
export default {
  pages: [
    'pages/home/index',
    // 组件相关 start
    'pages/components/index',
    'pages/components/pages/view/view',
    'pages/components/pages/scroll-view/scroll-view',
    'pages/components/pages/icon/icon',
    'pages/components/pages/progress/progress',
    'pages/components/pages/image/image',
    // 'pages/components/pages/audio/audio',
    'pages/components/pages/video/video',
    'pages/components/pages/swiper/swiper',
    'pages/components/pages/form/form',
    'pages/components/pages/input/input',
    'pages/components/pages/checkbox/checkbox',
    'pages/components/pages/radio/radio',
    'pages/components/pages/button/button',
    'pages/components/pages/text/text',
    'pages/components/pages/label/label',
    'pages/components/pages/picker/picker',
    'pages/components/pages/picker-view/picker-view',
    'pages/components/pages/rich-text/rich-text',
    'pages/components/pages/slider/slider',
    'pages/components/pages/switch/switch',
    'pages/components/pages/textarea/textarea',
    // 'pages/components/pages/canvas/canvas',
    // 'pages/components/pages/map/map',
    // 'pages/components/pages/navigator/navigator',
    'pages/components/pages/redirectPage/redirectPage',
    'pages/components/pages/navigatePage/navigatePage',
    'pages/components/pages/virtual-list/virtual-list',
    'pages/components/pages/movable-view/movable-view',
    // 组件相关 end
    // api 相关 start
    'pages/apis/index',
    'pages/apis/pages/basic/system/index',
    'pages/apis/pages/surface/interactive/index',
    'pages/apis/pages/surface/navigationBar/index',
    'pages/apis/pages/surface/background/index',
    // api 相关 end
    'pages/about/index/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        iconPath: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1907997288,1833327008&fm=26&gp=0.jpg',
        selectedIconPath: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220589324,939421850&fm=26&gp=0.jpg',
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        iconPath: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1907997288,1833327008&fm=26&gp=0.jpg',
        selectedIconPath: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220589324,939421850&fm=26&gp=0.jpg',
        pagePath: 'pages/components/index',
        text: '组件',
      },
      {
        iconPath: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1907997288,1833327008&fm=26&gp=0.jpg',
        selectedIconPath: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220589324,939421850&fm=26&gp=0.jpg',
        pagePath: 'pages/apis/index',
        text: 'API',
      },
      {
        iconPath: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1907997288,1833327008&fm=26&gp=0.jpg',
        selectedIconPath: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3220589324,939421850&fm=26&gp=0.jpg',
        pagePath: 'pages/about/index/index',
        text: '关于',
      },
    ]
  },
}
