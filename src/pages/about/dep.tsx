import { Component } from 'react'
import { View } from '@tarojs/components';
import Header from '@/components/head/head'
import JSONTree from '@/components/jsontree'
import dependence from '../../../package.json';

import './dep.scss';

export default class Index extends Component<any, any> {
  render() {
    return <View className="page">
      <Header title='dependencies'></Header>
      <JSONTree data={dependence.dependencies} />
      <Header title='devDependencies'></Header>
      <JSONTree data={dependence.devDependencies} />
    </View>
  }
}
