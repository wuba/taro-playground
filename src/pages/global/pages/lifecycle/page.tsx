import { Component } from 'react';
import { Button, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import Header from "@/components/head/head";
import Log, { LogType } from "@/components/log";

interface LifeCycleState {
  didShowLog: LogType[],
  didHideLog: LogType[],
}

export default class LifeCycle extends Component<any, LifeCycleState> {
  constructor(props: never) {
    super(props);
    this.state = {
      didShowLog: [],
      didHideLog: [],
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
  handleJump () {
    navigateTo({
      url: '/pages/global/pages/lifecycle/page'
    })
  }
  render () {
    const { didShowLog, didHideLog } = this.state;
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
          <Button onClick={this.handleJump.bind(this)}>跳转</Button>
        </View>
      </View>
    )
  }
}
