import "./movable-view.scss";
import React from "react";
import { View, Text, MovableView, MovableArea } from "@tarojs/components";

import Header from "../../components/head/head";

export default class PageView extends React.Component {
  render() {
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Header title="MovableView"></Header>
        </View>
        <MovableArea className="movable-area">
          <MovableView className="movable-view">默认不移动</MovableView>
        </MovableArea>
        <MovableArea className="movable-area">
          <MovableView className="movable-view" direction="all" style={{ backgroundColor: 'white', color: 'yellow' }}>
            direction: 'all'
          </MovableView>
        </MovableArea>
        <MovableArea className="movable-area">
          <MovableView className="movable-view" direction="horizontal">
            direction: 'horizontal'
          </MovableView>
        </MovableArea>
        <MovableArea className="movable-area">
          <MovableView className="movable-view" direction="vertical">
            direction: 'vertical'
          </MovableView>
        </MovableArea>
      </View>
    );
  }
}
