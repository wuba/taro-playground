import { View, Button } from "@tarojs/components";
import { useState } from 'react';
import { useRouter, useReady, useDidShow, useDidHide, useReachBottom, usePageScroll, navigateTo } from "@tarojs/taro";
import JSONTree from "@/components/jsontree";
import Header from "@/components/head/head";
import Log, { LogType } from "@/components/log";

import "./page.scss";

export default function Page() {
  const router = useRouter()
  const formatRouter: Record<string, unknown> = { ...router }

  const [ didShowLog, setDidShowLog ] = useState<LogType[]>([])
  useDidShow(() => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: 'useDidShow called.',
    }
    setDidShowLog([...didShowLog, log]);
  });

  const [ readyLog, setReadyLog ] = useState<LogType[]>([])
  useReady(() => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: 'useReady called.',
    }
    setReadyLog([...readyLog, log]);
  });

  const [ didHideLog, setDidHideLog ] = useState<LogType[]>([])
  useDidHide(() => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: 'useDidHide called.',
    }
    setDidHideLog([...didHideLog, log]);
  });

  const [ reachBottomLog, setReachBottomLog ]  = useState<LogType[]>([])
  useReachBottom(() => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: 'useReachBottom called.',
    }
    setReachBottomLog([...reachBottomLog, log]);
  })

  const [ pageScrollLog, setPageScrollLog ]  = useState<LogType[]>([])
  usePageScroll((e) => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: `usePageScroll scrollTop:${e.scrollTop.toFixed(0)}.`,
    }
    setPageScrollLog([...pageScrollLog.slice(-9), log]);
  })

  function handleJump() {
    navigateTo({
      url: '/pages/global/pages/lifecycle/page',
    })
  }

  return (
    <View className="global-page">
      <View className="global-page__header">
        <Header title="Hooks"></Header>
      </View>
      <View className="global-page__body">
        <View className="global-page__body-example example">
          <View className="example-header">useRouter</View>
          <View className="example-body">
            <JSONTree data={formatRouter} />
          </View>
        </View>
        <View className="global-page__body-example example">
          <View className="example-header">{`useReady (${readyLog.length})`}</View>
          <Log logs={readyLog} />
        </View>
        <View className="global-page__body-example example">
          <View className="example-header">{`useDidShow (${didShowLog.length})`}</View>
          <Log logs={didShowLog} />
        </View>
        <View className="global-page__body-example example">
          <View className="example-header">{`useDidHide (${didHideLog.length})`}</View>
          <Log logs={didHideLog} />
        </View>
        <View className="global-page__body-example example">
          <View className="example-header">{`useReachBottom (${reachBottomLog.length})`}</View>
          <Log logs={reachBottomLog} />
        </View>
        <View className="global-page__body-example example">
          <View className="example-header">{`usePageScroll (${pageScrollLog.length})`}</View>
          <Log logs={pageScrollLog} />
        </View>
        <Button onClick={handleJump}>跳转</Button>
      </View>
    </View>
  );
}
