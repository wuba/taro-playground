import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

import './index.scss';

/**
 * 界面-下拉刷新
 */
export default class PageView extends Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5],
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    this.setState = () => { }
    clearTimeout?.(this.timer)
  }
  timer;

  // NOTE：startPullDownRefresh 并不会触发该生命周期，手势下拉时方可触发
  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  }

  _startPullDownRefresh = () => {
    Taro.startPullDownRefresh();
    this.timer = setTimeout(() => {
      const baseNum: number = ~~(Math.random() * 50);
      this.setState({
        list: [baseNum, baseNum + 1, baseNum + 2, baseNum + 3, baseNum + 4]
      }, () => {
        Taro.showToast({ title: '已更新', icon: 'none' })
        clearTimeout?.(this.timer)
      })
    }, 2000);
  }

  _stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh();
  }

  render() {
    const { list = [] } = this.state;
    return (
      <View className='components-page'>
        <View className='components-page__body'>
          <View className='list'>
            {list.map((item, index) => {
              return (
                <View key={index} className='list-item'>
                  <Text>{item}</Text>
                </View>
              )
            })}
          </View>
          <View className='list-control'>
            <Button
              type="primary"
              className="list-control-btn1"
              onClick={this._startPullDownRefresh}
            >startPullDownRefresh</Button>
            <Button
              type="primary"
              className="list-control-btn2"
              onClick={this._stopPullDownRefresh}
            >stopPullDownRefresh</Button>
          </View>
        </View>
      </View>
    )
  }
}
