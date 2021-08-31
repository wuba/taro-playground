/*
 * @Author: iChengbo
 * @Date: 2021-07-23 11:06:34
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-23 16:35:20
 * @FilePath: /taro-react-native/src/pages/webview/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro';
import { WebView, Text, View } from '@tarojs/components';
import './index.scss';

export default class Index extends Component<any, any> {

    componentDidMount() {
        Taro.showNavigationBarLoading();
    }

    onLoad() {
        Taro.hideNavigationBarLoading();
        const title = this?.props?.route.params?.title || 'WebView';
        const headerRight = this?.props?.route.params?.right || '打开';
        Taro.setNavigationBarTitle({
            title: title,
        });

        this.props.navigation.setOptions({
            headerRight: () => {
                return (<View onClick={this.openUrl.bind(this)} style={{ paddingRight: 20, paddingLeft: 20 }}><Text>{ headerRight }</Text></View>)
            }
        })
    }

    openUrl() {
        const url = this?.props?.route.params?.open || this?.props?.route.params?.link;
        url && Taro.openUrl({
          url
        });
    }

    onError() {
        Taro.hideNavigationBarLoading();
        Taro.setNavigationBarTitle({
            title: '加载失败',
        })
    }

    render() {
        const link = this?.props?.route.params?.link;
        if (!link) {
            return null
        }
        return (
            <WebView src={link} onLoad={this.onLoad.bind(this)} onError={this.onError.bind(this)} />
        )
    }
}