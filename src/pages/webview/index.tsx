/*
 * @Author: iChengbo
 * @Date: 2021-07-23 11:06:34
 * @LastEditors: iChengbo
 * @LastEditTime: 2021-07-23 16:35:20
 * @FilePath: /taro-react-native/src/pages/webview/index.tsx
 */
import { Component } from 'react'
import Taro, { Current, setClipboardData } from '@tarojs/taro';
import { WebView, Text, View } from '@tarojs/components';
import './index.scss';

export default class Index extends Component<any, any> {

    state = {
        link: null,
        open: null,
        certified: 'true',
    }

    componentDidMount() {
        const params = Current?.router?.params || {}
        const link = params.link && decodeURIComponent(params.link)
        this.setState({
            link,
            open: params.open && decodeURIComponent(params.open),
            certified: params.certified,
        })
        const title = params.title || 'WebView';
        Taro.setNavigationBarTitle({
            title: title,
        });
        Taro.showNavigationBarLoading();
        if(params.certified !== 'true' && params.link) {
            Taro.hideNavigationBarLoading();
            setClipboardData({
                data: link || ''
            })
        }
        this.props.navigation?.setOptions({
            headerRight: () => {
                return (<View onClick={this.openUrl.bind(this)} style={{ paddingRight: 20, paddingLeft: 20 }}><Text>{ params.right|| '打开' }</Text></View>)
            }
        })
    }

    onWebViewLoad() {
        Taro.hideNavigationBarLoading();
    }

    openUrl() {
        const { open, link } = this.state
        const url = open || link;
        // @ts-ignore
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
        const { link, certified } = this.state
        if (!link) {
            return null
        }
        if(certified !== 'true') {
            return <View>
                <View className='webview-url'>{decodeURIComponent(link)}</View>
                <View className='webview-tip'>该网址不支持打开，已复制到剪切板。</View>
            </View>
        }
        return (
            <WebView src={decodeURIComponent(link)} onLoad={this.onWebViewLoad.bind(this)} onError={this.onError.bind(this)} />
        )
    }
}