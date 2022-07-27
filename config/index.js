const path = require('path')
const { version } = require('../package.json')

const CIPluginOpt = {
  weapp: {
    appid: process.env.WEAPP_ID || '微信小程序appid',
    privateKeyPath: "key/private.appid.key"
  },
  tt: {
    email: "字节小程序邮箱",
    password: "字节小程序密码"
  },
  alipay: {
    appId: "支付宝小程序appId",
    toolId: "工具id",
    privateKeyPath: "key/pkcs8-private-pem"
  },
  swan: {
    token: "鉴权需要的token令牌"
  },
  version,
  desc: "修复已知问题"
}

const plugins = process.env.TARO_ENV === 'weapp' ? [
  [ "@tarojs/plugin-mini-ci", CIPluginOpt ],
  [ "@tarojs/plugin-html"]
] : []

const config = {
  projectName: 'taro-demo',
  date: '2021-7-16',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins,
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack5',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/taro-playground/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    output: {
      ios: './ios/main.jsbundle',
      iosAssetsDest: './ios',
      android: './android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: './android/app/src/main/res',
      // iosSourceMapUrl: '',
      iosSourcemapOutput: './ios/main.map',
      // iosSourcemapSourcesRoot: '',
      // androidSourceMapUrl: '',
      androidSourcemapOutput: './android/app/src/main/assets/index.android.map',
      // androidSourcemapSourcesRoot: '',
    },
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/pages/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/pages/utils'),
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/platform': path.resolve(__dirname, '..', 'src/platform'),
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
