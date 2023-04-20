import { getSystemInfoSync, navigateTo, showActionSheet } from '@tarojs/taro';
import { loadWeb, loadMini, isWeb, isRN } from '@/utils/index';
import { NativeModules } from '@/platform/index';

import List from '@/components/list/list';

const { platform } = getSystemInfoSync();
const JSDELIVR = 'https://cdn.jsdelivr.net/gh';
const GITHUB = 'https://github.com';
const GITHUB_RAW = 'https://raw.githubusercontent.com';

const caseList = [
  {
    data: {
      bundle: `${JSDELIVR}/wuba/Taro-Mortgage-Calculator@v2.0.0-beta.2/release/${platform}/main.js`,
      repository: `${GITHUB}/wuba/Taro-Mortgage-Calculator`,
      web: 'https://wuba.github.io/Taro-Mortgage-Calculator',
      mp: `${GITHUB_RAW}/wuba/Taro-Mortgage-Calculator/master/mini-qrcode.jpg`,
      title: 'Taro Mortgage Calculator'
    },
    image:
      'https://pic3.58cdn.com.cn/nowater/fangfe/n_v25b1523466b894881b9bdeda7618a8af2.png',
    title: 'Taro Mortgage Calculator',
    showInfo: true,
    showRightArrow: true
  },
  {
    data: {
      bundle: `${JSDELIVR}/zhiqingchen/rick-and-morty-wiki@v3.0.0-beta.0/release/${platform}/main.js`,
      repository: `${GITHUB}/rick-and-morty-wiki/rick-and-morty-wiki`,
      web: 'https://rnwiki.cavano.vip',
      mp:
        'https://rickandmortywiki.oss-cn-beijing.aliyuncs.com/weapp/2d_code.jpg',
      title: 'Rick and Morty Wiki'
    },
    image: `${GITHUB_RAW}/rick-and-morty-wiki/RMwiki-native-shell/0.64.0/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png`,
    title: 'Rick and Morty Wiki',
    showInfo: true,
    showRightArrow: true
  }
];

const uiList = [
  {
    data: {
      bundle: `${JSDELIVR}/NervJS/taro-ui@v3.7.0-beta.0-rn/packages/taro-ui-demo-rn/release/${platform}/main.js`,
      repository: `${GITHUB}/NervJS/taro-ui`,
      title: 'Taro UI Demo',
      web: 'https://taro-ui.jd.com/h5/index.html',
      mp:
        'https://pic8.58cdn.com.cn/nowater/frs/n_v2c397331051c8499cba39f430d364ccb7.jpeg'
    },
    image:
      'https://pic5.58cdn.com.cn/nowater/fangfe/n_v25a185c1657984016926f26af591912c4.jpg',
    title: 'Taro UI Demo',
    showInfo: true,
    showRightArrow: true
  }
];

const playList = [
  {
    data: {
      page: '/pages/explore/animate/lottie/index'
    },
    title: 'Lottie',
    showRightArrow: true
  },
  {
    data: {
      page: '/pages/explore/others/linear-gradient/index'
    },
    title: 'Linear Gradient',
    showRightArrow: true
  }
];

if(isRN) {
  playList.push({
    data: {
      page: '/pages/explore/charts/entry'
    },
    title: 'Echarts',
    showRightArrow: true
  })
}

function loadDemo({ web, title, bundle, mp }) {
  if (isWeb) {
    web &&
      loadWeb({
        url: web,
        title
      });
  } else if (isRN) {
    bundle && NativeModules.RNDevManager.load(bundle);
  } else {
    mp &&
      loadMini({
        url: mp
      });
  }
}

function showInfo({ repository, title, web, mp }) {
  showActionSheet({
    itemList: ['GitHub', 'Web 版本', '小程序版本']
  })
    .then(({ tapIndex }) => {
      if (tapIndex === 0) {
        loadWeb({
          url: repository,
          title,
          certified: isRN
        });
      } else if (tapIndex === 1) {
        loadWeb({
          url: web,
          title,
          certified: isRN
        });
      } else if (tapIndex === 2) {
        loadMini({
          url: mp
        });
      }
    })
    .catch(console.log);
}

export default function Index() {
  return (
    <>
      <List
        title="案例"
        data={caseList}
        handleInfoClick={data => {
          showInfo(data);
        }}
        handleItemClick={data => {
          loadDemo(data);
        }}
      />
      <List
        title="UI"
        data={uiList}
        handleInfoClick={data => {
          showInfo(data);
        }}
        handleItemClick={data => {
          loadDemo(data);
        }}
      />
      <List
        title="探索"
        data={playList}
        handleItemClick={data => {
          navigateTo({
            url: data.page
          });
        }}
      />
    </>
  );
}