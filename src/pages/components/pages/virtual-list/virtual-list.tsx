import React from "react";
// @ts-ignore
import { View } from "@tarojs/components";
// @ts-ignore
import VirtualList from "@/platform/virtualList";

import Header from "@/components/head/head";
import "./virtual-list.scss";

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}
interface RowProps {
  id: string;
  style?: React.CSSProperties | undefined;
  data: any;
  index: number;
  isScrolling?: boolean | undefined;
}
const Row = ({ index, style, data }: RowProps) => {
  return (
    <View className={`list-item ${index % 2 ? "ListItemOdd" : "ListItemEven"}`} style={style}>
      Row {index}: {data[index]}
    </View>
  );
};

export default class PageView extends React.Component {
  state = {
    data: buildData(0)
  };
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  onScroll = (data) => {
    console.log(data);
  }
  onScrollNative = (e) => {
    console.log(e);
  }

  render() {
    const { data } = this.state;
    const dataLen = data.length;
    return (
      <View className="components-page">
        <View className="components-page__header">
          <Header title="VirtualList"></Header>
        </View>
        <VirtualList
          height={500}
          width="100%"
          item={Row}
          itemData={data}
          itemCount={dataLen}
          itemSize={100}
          // onScrollNative={this.onScrollNative}
          // onScroll={this.onScroll}
          overscanCount={5}
          //@ts-ignore
          scrollWithAnimation
        />
      </View>
    );
  }
}
