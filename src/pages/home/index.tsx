import { Component } from "react";
import Taro from "@tarojs/taro";
import { NativeModules, Linking } from "@/platform/index";
import queryString from "query-string";
import { version as taroVersion } from '@tarojs/taro/package.json';
import { version as rnVersion } from 'react-native/package.json';
import { View, Text, Image, Input } from "@tarojs/components";
import { hadlePermissionsDeny, isRN } from "@/utils/index";
import List from "@/components/list/list";
import logoPng from "@/assets/common/taro_logo.jpg";
import scanPng from "@/assets/iconpark/scan-code.png";
import appStorePng from "@/assets/iconpark/app-store.png";
import serverPng from "@/assets/iconpark/data-server.png";
import "./index.scss";

const BUNDLES_KEY = "bundleList";
const REMOTE_BUNDLES_KEY = "remoteBundleList";

const regTaroSchema = /^taro:\/\//;
const regMetroServer = /^([0-9.]+):([0-9]+)$/;
const regMetroServerIp = /^([0-9.]+)$/;
const regTaroServer = /^taro:\/\/([0-9.]+):([0-9]+)$/;
const regRemoteRelease = /^taro:\/\/releases/;
const regRemoteJs = /\.js$/;

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      localList: [],
      remoteList: []
    };
  }

  componentDidMount() {
    isRN && Taro.getStorage({
      key: BUNDLES_KEY
    })
      .then(res => {
        console.log("获取 bundle 列表", res);
        if (res.data.length > 0) {
          this.setState({
            localList: res.data
          });
        }
      })
      .catch(err => {
        console.log("获取 bundle 列表失败：", err);
      });

    isRN && Taro.getStorage({
      key: REMOTE_BUNDLES_KEY
    })
      .then(res => {
        console.log("获取 bundle 列表", res);
        if (res.data.length > 0) {
          this.setState({
            remoteList: res.data
          });
        }
      })
      .catch(err => {
        console.log("获取 bundle 列表失败：", err);
      });
    Linking?.getInitialURL().then(this._handleUrl);
    Linking?.addEventListener('url', this._handleUrl);
  }

  componentWillUnmount() {
    Linking?.removeEventListener('url', this._handleUrl);
  }

  _loadBundleFromLocalServer = (url: string, path = "index") => {
    try {
      Taro.request({
        url: `http:${url}/status`,
        dataType: "text"
      })
        .then(res => {
          console.log("request success: ", res);
          if (res?.data?.status === 200) {
            NativeModules.RNDevManager.loadBundleByBundleUrl(url, path);
          } else {
            Taro.showModal({
              title: "返回内容有误",
              content: JSON.stringify(res?.data),
              showCancel: false,
            });
          }
        })
        .catch(err => {
          console.log("request error: ", err);
          Taro.showModal({
            title: "加载失败",
            content: err.message || JSON.stringify(err),
            showCancel: false,
          });
        });
    } catch (err) {
      console.log("加载 bundle 错误：", err);
      Taro.showModal({
        title: "加载失败",
        content: err.message,
        showCancel: false,
      });
    }
  };

  _loadBundelFromRemoteUrl = (url: string) => {
    NativeModules.RNDevManager.load(url);
  };

  _saveUrlToStorage = (url, key) => {
    const { localList = [], remoteList } = this.state;
    const list = key === BUNDLES_KEY ? localList : remoteList;
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
      [key === BUNDLES_KEY ? "localList" : "remoteList"]: _list
    });
    Taro.setStorage({
      key,
      data: _list
    });
  };

  _handleUrl = u => {
    const url:string = typeof u === 'string' ? u : (u?.url);
    if(!url) return;
    if (regTaroServer.test(url)) {
      const ipAddr = url.substr(7);
      this._saveUrlToStorage(ipAddr, BUNDLES_KEY);
      this._loadBundleFromLocalServer(ipAddr);
    } else if (regRemoteRelease.test(url)) {
      this._saveUrlToStorage(url, REMOTE_BUNDLES_KEY);
      this._handleReleaseUrl(url);
    } else if (regRemoteJs.test(url)) {
      this._saveUrlToStorage(url, REMOTE_BUNDLES_KEY);
      this._loadBundelFromRemoteUrl(url);
    }
  };

  _handleReleaseUrl = url => {
    const params = queryString.parseUrl(url).query;
    if (params.url && typeof params.url === "string") {
      this._loadBundelFromRemoteUrl(params.url);
    }
  };

  _onInputConfirm = ({ detail: { value } }) => {
    const url = value;
    if (regMetroServer.test(url)) {
      this._loadBundleFromLocalServer(url);
    } else if(regMetroServerIp.test(url)){
      this._loadBundleFromLocalServer(`${url}:8081`);
    } else if (regTaroSchema.test(url) || regRemoteJs.test(url)) {
      this._handleUrl(url);
    } else {
      Linking.canOpenURL(url).then(() => {
        // @ts-ignore
        return Taro.openUrl({
          url
        })
      }).catch(console.log);
    }
  }

  _onPressScan = () => {
    Taro.scanCode({})
      .then(res => {
        console.log("扫码成功：", res);
        const url = res.result;
        if (regTaroSchema.test(url) || regRemoteJs.test(url)) {
          this._handleUrl(url);
        } else {
          Taro.showModal({
            title: "扫描结果",
            content: `${url}\n\n该内容不是由Taro Playground提供，无法确保内容的安全性，如果要继续访问，请注意保护好个人信息。`,
            confirmColor: "#6190E8",
            confirmText: "前往",
            success: function(showModalRes) {
              if (showModalRes.confirm) {
                // @ts-ignore
                Taro.openUrl({
                  url
                }).catch(console.log);
              }
            }
          });
        }
      })
      .catch(err => {
        console.log("扫码失败：", err);
        if (
          err.errMsg === "Permissions denied!" ||
          err.errMsg === "scanCode fail"
        ) {
          // TODO: use errCode
          const perssionText =
            err.errMsg === "Permissions denied!" ? "相机" : "照片";
          hadlePermissionsDeny({ perssionText });
        }
      });
  };

  _clearBundles = async key => {
    try {
      const res = await Taro.showModal({
        title: "确定清空吗？",
        content: "清空后历史数据将不再保存",
        confirmColor: "#6190E8"
      });
      if (res.confirm) {
        await Taro.removeStorage({ key });
        this.setState({
          [key === BUNDLES_KEY ? "localList" : "remoteList"]: []
        });
        Taro.showToast({ title: "已清空", icon: "success" });
      }
    } catch (error) {
      console.log("清空失败", error);
      Taro.showToast({ title: "失败了 o(╥﹏╥)o", icon: "none" });
    }
  };

  render() {
    const { localList = [], remoteList = [] } = this.state;
    const neverLoaded = localList.length === 0 && remoteList.length === 0;
    return (
      <View className="index">
        <View className="info">
          <Image src={logoPng} className="info-img" />
          {neverLoaded && (
            <View className="info-text">
              Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv
              等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ 小程序 /
              H5 / RN 等应用。
            </View>
          )}
        </View>
        { isRN && <View className="load">
          <View className="load-header">
            <Input className="load-header-input"
              placeholder="Enter server host here."
              onConfirm={this._onInputConfirm}
            />
            <Image
              src={scanPng}
              className="load-header-icon"
              onClick={this._onPressScan}
            />
          </View>
        </View>}
        <List
          data={localList.map(item => ({
            image: serverPng,
            title: item,
            data: item
          }))}
          title="Metro Server"
          desc="Clear"
          handleClick={() => {
            this._clearBundles(BUNDLES_KEY);
          }}
          handleItemClick={data => {
            this._loadBundleFromLocalServer(data);
          }}
        />
        <List
          data={remoteList.map(item => {
              const { name=null, url, logo=appStorePng } = regRemoteRelease.test(item) ? queryString.parseUrl(item).query : { url: item };
              return {
                image: logo || appStorePng,
                title: name || url,
                data: url,
              }
            })
          }
          title="Remote Server"
          desc="Clear"
          handleClick={() => {
            this._clearBundles(REMOTE_BUNDLES_KEY);
          }}
          handleItemClick={(data) => {
            this._loadBundelFromRemoteUrl(data);
          }}
        />
        {isRN && <View className="statement">
          <Text className="statement-text">Supportted Taro Versions：3.5.0 ~ {taroVersion}</Text>
          <Text className="statement-text">React Native Version：{rnVersion}</Text>
        </View>}
      </View>
    );
  }
}
