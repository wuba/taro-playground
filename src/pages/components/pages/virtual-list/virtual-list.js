import React from "react";
import { View, Text, VirtualList, Button } from "@tarojs/components";

import "./virtual-list.scss";
import Header from "../../components/head/head";

function buildData(offset = 0) {
  return Array(100)
    .fill(0)
    .map((_, i) => i + offset);
}

const Row = React.memo(({index, style, data}) => {
  return (
    <View className={`list-item ${index % 2 ? "ListItemOdd" : "ListItemEven"}`} style={style}>
      Row {index} : {data[index]}
    </View>
  );
});


export default class PageView extends React.Component {
  state = {
    data: buildData(0)
  };

  $ref = React.createRef();
  timer

  onScroll = (data) => {
    console.log(data);
  }

  componentDidMount() {
    console.log(this.$ref);

    this.timer = setTimeout(() => {
      this?.$ref?.current.scrollTo({offset: 200});
    }, 3000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
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
          ref={this.$ref}
          width="100%"
          itemData={data}
          itemCount={dataLen}
          itemSize={100}
          // onScrollNative={this.onScrollNative}
          // onScroll={this.onScroll}
          overscanCount={5}
          scrollWithAnimation
        >
          {Row}
        </VirtualList>
      </View>
    );
  }
}
