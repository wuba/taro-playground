import { Component, Fragment } from 'react';
import Taro from '@tarojs/taro';
import { NativeModules } from 'react-native';
import { View, Text, Image } from '@tarojs/components';
import { hadlePermissionsDeny } from '@/utils/index';
import logoPng from "@/assets/common/taro_logo.png";
import scanPng from "@/assets/iconpark/scan-code.png";
import './index.scss';

const DevManager = NativeModules.RNDevManager;

const BUNDLES_KEY = "bundleList";
export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    Taro.getStorage({
      key: BUNDLES_KEY,
    }).then(res => {
      console.log('获取 bundle 列表', res);
      if (res.data.length > 0) {
        this.setState({
          list: res.data,
        })
      }
    }).catch(err => {
      console.log('获取 bundle 列表失败：', err);
    });
  }

  _loadBundleByUrl = (url: string, path = 'index') => {
    try {
      Taro.request({
        url: `http:${url}/status`,
        dataType: 'text',
      }).then(res => {
        console.log('request success: ', res);
        if (res?.data?.status === 200) {
          DevManager.loadBundleByBundleUrl(url, path);
        }
      }).catch((err) => {
        console.log('request error: ', err)
        Taro.showToast({
          title: 'packager Not Available',
          icon: 'none'
        })
      })
    } catch (error) {
      console.log("加载 bundle 错误：", error);
      Taro.showToast({ title: '哎呀, 加载失败了 -_-!', icon: 'none' });
    }
  }

  _saveUrlToStorage = (url) => {
    const { list = [] } = this.state;
    const idx = list.indexOf(url);
    let _list: string[] = [];
    if (idx === -1) {
      _list = [url].concat(list);
    } else {
      _list = [...list];
      _list.splice(idx, 1);
      _list.unshift(url);
    }
    this.setState({
      list: _list,
    });
    Taro.setStorage({
      key: BUNDLES_KEY,
      data: _list,
    });
  }

  _onPressScan = () => {
    Taro.scanCode({})
      .then(res => {
        console.log('扫码成功：', res);
        const url = res.result;
        const reg = /^taro:\/\/([0-9.]+):([0-9]+)$/;
        if (reg.test(url)) {
          const ipAddr = url.substr(7);
          this._loadBundleByUrl(ipAddr);
          this._saveUrlToStorage(ipAddr);
        } else {
          Taro.showModal({
            title: '扫描结果',
            content: `${url}`,
            confirmColor: '#6190E8',
            confirmText: '前往',
            success: function (showModalRes) {
              if (showModalRes.confirm) {
                Taro.openUrl({
                  url
                }).catch(console.log)
              }
            }
          })
        }
      })
      .catch(err => {
        console.log('扫码失败：', err);
        if (err.errMsg === 'Permissions denied!' || err.errMsg === 'scanCode fail') {
          // TODO: use errCode
          const perssionText = err.errMsg === 'Permissions denied!' ? '相机' : '照片';
          hadlePermissionsDeny({ perssionText });
        }
      })
  }

  _clearBundles = async () => {
    try {
      const res = await Taro.showModal({ title: '确定清空吗？', content: '清空后历史数据将不再保存', confirmColor: '#6190E8' });
      if (res.confirm) {
        await Taro.removeStorage({ key: BUNDLES_KEY });
        this.setState({
          list: [],
        });
        Taro.showToast({ title: '已清空', icon: 'success' });
      }
    } catch (error) {
      console.log('清空失败', error);
      Taro.showToast({ title: '失败了 o(╥﹏╥)o', icon: 'none' });
    }
  }

  render() {
    const { list = [] } = this.state;
    return (
      <View className='index'>
        <View className='info'>
          <Image
            src={logoPng}
            className='info-img'
          />
          <Text className='info-text'>Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 / H5 / RN 等应用。</Text>
        </View>
        <View className='load'>
          <View className='load-header'>
            <Image
              src={scanPng}
              className='load-header-icon'
              onClick={this._onPressScan}
            />
          </View>
        </View>
        {list.length > 0 && (
          <View className='bundle'>
            <View className='bundle-control'>
              <Text>最近打开</Text>
              <Text onClick={this._clearBundles}>清空</Text>
            </View>
            <Divider />
            {list.map((item, index) => {
              return (
                <Fragment key={item}>
                  <View
                    className='bundle-item'
                    onClick={() => {
                      this._loadBundleByUrl(item);
                    }}
                  >
                    <Text className='bundle-item-text'>{item}</Text>
                  </View>
                  {index != list.length - 1 && <Divider />}
                </Fragment>
              )
            })}
          </View>
        )}
      </View>
    )
  }
}

const Divider = () => {
  return <View style={{ height: 1, backgroundColor: '#E5E5E5' }} />
}
