import { Component } from 'react'
import { View } from '@tarojs/components';
import Header from '@/components/head/head'
import JSONTree from '@/components/jsontree'
import { dependencies, devDependencies } from '../../../package.json';

import './dep.scss';

export default class Index extends Component<any, any> {
  render() {
    return <View className="page">
      <Header title='dependencies'></Header>
      <JSONTree data={dependencies} />
      <Header title='devDependencies'></Header>
      <JSONTree data={devDependencies} />
    </View>
  }
}
