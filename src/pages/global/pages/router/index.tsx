import { View, Button } from "@tarojs/components";
import Header from "@/components/head/head";
import JSONTree from '@/components/jsontree';
import { navigateTo, redirectTo, navigateBack, getCurrentPages, switchTab, reLaunch } from '@tarojs/taro';

import './index.scss';

let i = 0;

export default function Stack() {
  const pages = getCurrentPages()
  return <View className="global-page">
    <View className="global-page__header">
      <Header title={`getCurrentPages(${pages.length})`}></Header>
    </View>
    <View className="global-page__body">
      <View className="global-page__body-example example">
        <JSONTree
          data={pages.map(page => {
            const { route, options } = page
            return {
              route,
              options
            }
          })}
          shouldExpandNode={(_keyname, _data, level) => {
            return level < 3
          }}
        />
      </View>
      <Button className='global-page-btn' type='primary' onClick={()=>{
        navigateTo({
          url: `/pages/global/pages/router/index?index=${i++}&from=navigateTo`
      })}}
      >navigateTo</Button>
      <Button className='global-page-btn' type='primary' onClick={()=>{
        redirectTo({
          url: `/pages/global/pages/router/index?index=${i++}&from=redirectTo`
      })}}
      >redirectTo</Button>
      <Button className='global-page-btn' type='primary' onClick={()=>{
        navigateBack()
      }}
      >navigateBack</Button>
      <Button className='global-page-btn' type='warn' onClick={()=>{
        reLaunch({
          url: `/pages/global/pages/router/index?index=${i++}&from=reLaunch`
        })
      }}
      >reLaunch</Button>
      <Button className='global-page-btn' type='warn' onClick={()=>{
        switchTab({
          url: '/pages/global/index'
        })
      }}
      >switchTab</Button>
    </View>
  </View>
}