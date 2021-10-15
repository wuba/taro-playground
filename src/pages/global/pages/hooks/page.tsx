import { View, Button } from "@tarojs/components";
import { useState } from 'react';
import { useRouter, useDidShow, useDidHide, navigateTo } from "@tarojs/taro";
import JSONTree from "@/components/jsontree";
import Header from "@/components/head/head";
import Log, { LogType } from "@/components/log";

import "./page.scss";

export default function Page() {
  const router = useRouter();
  const formatRouter: Record<string, unknown> = { ...router };

  const [ didShowLog, setDidShowLog ] = useState<LogType[]>([])
  useDidShow(() => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: 'useDidShow called.',
    };
    setDidShowLog([...didShowLog, log]);
  });

  const [ didHideLog, setDidHideLog ] = useState<LogType[]>([])
  useDidHide(() => {
    const log = {
      time: new Date().toLocaleTimeString(),
      text: 'useDidHide called.',
    };
    setDidHideLog([...didHideLog, log]);
  });

  function handleJump() {
    navigateTo({
      url: '/pages/global/pages/hooks/page'
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
          <View className="example-header">{`useDidShow (${didShowLog.length})`}</View>
          <Log logs={didShowLog} />
        </View>
        <View className="global-page__body-example example">
          <View className="example-header">{`useDidHide (${didHideLog.length})`}</View>
          <Log logs={didHideLog} />
        </View>
        <Button onClick={handleJump}>跳转</Button>
      </View>
    </View>
  );
}
