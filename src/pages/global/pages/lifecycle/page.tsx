import { Component } from 'react';
import { Button, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import Header from "@/components/head/head";
import Log, { LogType } from "@/components/log";

import './page.scss';

interface LifeCycleState {
  didShowLog: LogType[],
  didHideLog: LogType[],
  reachBottomLog: LogType[],
  pageScrollLog: LogType[],
  pullDownRefreshLog: LogType[],
}

export default class LifeCycle extends Component<any, LifeCycleState> {
  constructor(props: never) {
    super(props);
    this.state = {
      didShowLog: [],
      didHideLog: [],
      reachBottomLog: [],
      pageScrollLog: [],
      pullDownRefreshLog: [],
    }
  }
  componentDidShow () {
    const log:LogType = {
      time: new Date().toLocaleTimeString(),
      text: 'componentDidShow called.',
    };
    this.setState({
      didShowLog: [...this.state.didShowLog, log]
    });
  }
  componentDidHide () {
    const log:LogType = {
      time: new Date().toLocaleTimeString(),
      text: 'componentDidHide called.',
    };
    this.setState({
      didHideLog: [...this.state.didHideLog, log]
    });
  }
  onPullDownRefresh () {
    const log:LogType = {
      time: new Date().toLocaleTimeString(),
      text: 'onPullDownRefresh called.',
    };
    this.setState({
      pullDownRefreshLog: [...this.state.pullDownRefreshLog, log]
    });
  }
  onReachBottom () {
    const log:LogType = {
      time: new Date().toLocaleTimeString(),
      text: 'onReachBottom called.',
    };
    this.setState({
      reachBottomLog: [...this.state.reachBottomLog, log]
    });
  }
  onPageScroll (e) {
    const log:LogType = {
      time: new Date().toLocaleTimeString(),
      text: `onPageScroll scrollTop:${e.scrollTop.toFixed(0)}.`,
    };
    this.setState({
      pageScrollLog: [...this.state.pageScrollLog.slice(-9), log]
    });
  }
  handleJump () {
    navigateTo({
      url: '/pages/global/pages/lifecycle/page'
    })
  }
  render () {
    const { didShowLog, didHideLog, reachBottomLog, pageScrollLog, pullDownRefreshLog } = this.state;
    return (
      <View className="global-page">
        <View className="global-page__header">
          <Header title="生命周期"></Header>
        </View>
        <View className="global-page__body">
          <View className="global-page__body-example example">
            <View className="example-header">{`componentDidShow (${didShowLog.length})`}</View>
            <Log logs={didShowLog} />
          </View>
          <View className="global-page__body-example example">
            <View className="example-header">{`componentDidHide (${didHideLog.length})`}</View>
            <Log logs={didHideLog} />
          </View>
          <View className="global-page__body-example example">
            <View className="example-header">{`onPullDownRefresh (${pullDownRefreshLog.length})`}</View>
            <Log logs={pullDownRefreshLog} />
          </View>
          <View className="global-page__body-example example">
            <View className="example-header">{`onReachBottom (${reachBottomLog.length})`}</View>
            <Log logs={reachBottomLog} />
          </View>
          <View className="global-page__body-example example">
            <View className="example-header">{`onPageScroll (${pageScrollLog.length})`}</View>
            <Log logs={pageScrollLog} />
          </View>
          <Button className='global-page-btn' type='primary' onClick={this.handleJump.bind(this)}>跳转</Button>
        </View>
      </View>
    )
  }
}
