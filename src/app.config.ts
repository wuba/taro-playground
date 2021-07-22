/*
 * @Author: iChengbo
 * @Date: 2021-07-19 14:37:08
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-22 18:24:37
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
    'pages/about/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#333333',
    selectedColor: '#6190E8', // 主题色
    list: [
      {
        iconPath: './assets/tabbar/project.png',
        selectedIconPath: './assets/tabbar/project_selected.png',
        pagePath: 'pages/home/index',
        text: '项目',
      },
      {
        iconPath: './assets/tabbar/component.png',
        selectedIconPath: './assets/tabbar/component_selected.png',
        pagePath: 'pages/components/index',
        text: '组件',
      },
      {
        iconPath: './assets/tabbar/api.png',
        selectedIconPath: './assets/tabbar/api_selected.png',
        pagePath: 'pages/apis/index',
        text: 'API',
      },
      {
        iconPath: './assets/tabbar/person.png',
        selectedIconPath: './assets/tabbar/person_selected.png',
        pagePath: 'pages/about/index',
        text: '关于',
      },
    ]
  },
}
