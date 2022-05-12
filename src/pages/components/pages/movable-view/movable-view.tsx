import { useState } from "react";
import { View, MovableView, MovableArea, Switch, Button } from "@tarojs/components";

import { MovableViewProps } from "@tarojs/components/types/MovableView";

import Header from "@/components/head/head";

import "./movable-view.scss";

const PageView = () => {
  const [config, setConfig] = useState<MovableViewProps>({
    disabled: false,
    direction: 'all',
  });

  const onPressDisabled = (e) => {
    setConfig({
      ...config,
      disabled: e?.detail?.value ?? true
    })
  }

  const getBackgroundColot = (direction) => {
    return {
      backgroundColor: direction === config.direction ? '#13CE66' : '#dddddd'
    }
  }

  const onPressDirection = (direction) => () => {
    setConfig({
      ...config,
      direction,
    })
  }

  return (
    <View className="components-page">
      <View className="components-page__header">
        <Header title="MovableView"></Header>
      </View>
      <MovableArea className="movable-area">
        <MovableView {...config}>
          <View className="movable-view">{String(config.disabled)}</View>
        </MovableView>
      </MovableArea>

      <View className="setting-contain">
        <View className="title">
          是否禁用
        </View>
        <View className="content">
          <Switch checked={config.disabled} onChange={onPressDisabled} />
        </View>
      </View>
      <View className="setting-contain direction">
        <View className="title">
          移动方向
        </View>
        <View className="direction-content">
          <Button style={getBackgroundColot('all')} onClick={onPressDirection('all')}>all</Button>
          <Button style={getBackgroundColot('vertical')} onClick={onPressDirection('vertical')}>vertical</Button>
          <Button style={getBackgroundColot('horizontal')} onClick={onPressDirection('horizontal')}>horizontal</Button>
          <Button style={getBackgroundColot('none')} onClick={onPressDirection('none')}>none</Button>
        </View>
      </View>
    </View>
  )
}

export default PageView;
