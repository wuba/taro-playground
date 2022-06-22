import { getSystemInfoSync, navigateTo } from '@tarojs/taro'
import { loadWeb, loadMini, isWeb, isRN } from "@/utils/index";
import { NativeModules } from "@/platform/index";

import List from '@/components/list/list'

const { platform } = getSystemInfoSync()
const JSDELIVR = 'https://cdn.jsdelivr.net/gh'
const GITHUB = 'https://github.com'
const GITHUB_RAW = 'https://raw.githubusercontent.com'

const caseList = [{
  data: {
    bundle: `${JSDELIVR}/wuba/Taro-Mortgage-Calculator@1.0.2/release/${platform}/main.js`,
    repository: `${GITHUB}/wuba/Taro-Mortgage-Calculator`,
    web: 'https://wuba.github.io/Taro-Mortgage-Calculator',
    mp: `${GITHUB_RAW}/wuba/Taro-Mortgage-Calculator/master/mini-qrcode.jpg`
  },
  image: 'https:/pic3.58cdn.com.cn/nowater/fangfe/n_v25b1523466b894881b9bdeda7618a8af2.png',
  title: 'Taro Mortgage Calculator',
  showInfo: true,
  showRightArrow: true,
}, {
  data: {
    bundle: `${JSDELIVR}/rick-and-morty-wiki/rick-and-morty-wiki@v1.0.0/release/${platform}/main.js`,
    repository: `${GITHUB}/rick-and-morty-wiki/rick-and-morty-wiki`,
    web: 'https://rnwiki.cavano.vip',
    mp: 'https://rickandmortywiki.oss-cn-beijing.aliyuncs.com/weapp/2d_code.jpg',
  },
  image: `${GITHUB_RAW}/rick-and-morty-wiki/RMwiki-native-shell/0.64.0/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png`,
  title: 'Rick and Morty Wiki',
  showInfo: true,
  showRightArrow: true,
}]

const uiList = [{
  data: {
    bundle: `${JSDELIVR}/NervJS/taro-ui@v3.1.0-beta.2-rn/packages/taro-ui-demo-rn/release/${platform}/main.js`,
    repository: `${GITHUB}/wuba/Taro-Mortgage-Calculator`,
    title: 'Taro UI Demo',
    web: 'https://taro-ui.jd.com/h5/index.html',
  },
  image: 'https://pic5.58cdn.com.cn/nowater/fangfe/n_v25a185c1657984016926f26af591912c4.jpg',
  title: 'Taro UI Demo',
  showInfo: true,
  showRightArrow: true,
}]

const playList = [{
  data: {
    page: '/pages/explore/lottie/index',
  },
  title: 'Lottie',
  showRightArrow: true,
}]

function loadDemo (data) {
  if(isWeb) {
    data.web && loadWeb({
      url: data.web,
      title: data.title,
    })
  } else if(isRN) {
    data.bundle && NativeModules.RNDevManager.load(data.bundle);
  } else {
    data.mp && loadMini({
      url: data.mp,
    })
  }
}

export default function Index () {
  return <>
    <List
      title='案例'
      data={caseList}
      handleInfoClick={(data, index) => {
        console.log(1,data,index)
      }}
      handleItemClick={(data) => {
        loadDemo(data)
      }}
    />
    <List
      title='UI'
      data={uiList}
      handleInfoClick={(data, index) => {
        console.log(1,data,index)
      }}
      handleItemClick={(data) => {
        loadDemo(data)
      }}
    />
    <List
      title='探索'
      data={playList}
      handleItemClick={(data) => {
        navigateTo({
          url: data.page,
        })
      }}
    />
  </>
}