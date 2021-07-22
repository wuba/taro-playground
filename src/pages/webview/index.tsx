/*
 * @Author: iChengbo
 * @Date: 2021-07-23 11:06:34
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-23 16:35:20
 * @FilePath: /taro-react-native/src/pages/webview/index.tsx
 */
import { Component } from 'react'
import Taro from '@tarojs/taro';
import { WebView } from '@tarojs/components';
import './index.scss';

export default class Index extends Component<any, any> {

    componentDidMount() {
        Taro.showNavigationBarLoading();
    }

    onLoad() {
        Taro.hideNavigationBarLoading();
        const title = this?.props?.route.params?.title || 'WebView';
        Taro.setNavigationBarTitle({
            title: title,
        });
    }

    onError() {
        Taro.hideNavigationBarLoading();
        Taro.setNavigationBarTitle({
            title: '加载失败',
        })
    }

    render() {
        const link = this?.props?.route.params?.link || 'https://docs.taro.zone/docs/README';
        if (!link) {
            return null
        }
        return (
            <WebView src={link} onLoad={this.onLoad.bind(this)} onError={this.onError.bind(this)} />
        )
    }
}