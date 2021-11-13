import React from "react";
import { View, Text, Picker } from "@tarojs/components";

import Header from "@/components/head/head";
import "./picker.scss";

export default class PagePicker extends React.Component {
  state = {
    timeSel: "12:01",
    dateSel: "2018-04-22",
    selectorValue: 1,
    mulitSelectorValues: [1, 1],
    mulitSelectorValues2: [1, 1],
    selector: ["美国", "中国", "巴西", "日本"],
    multiSelector: [
      ["饭", "粥", "粉"],
      ["猪肉", "牛肉"]
    ],
    multiSelector2: [
      [{ category: '炒' }, { category: '烧' }, { category: '煮' }],
      [{ category: '鱼肉' }, { category: '羊肉' }, { category: '鸡肉' }]
    ],
    regionSel: ['北京市', '北京市', '西城区'],
  };

  handleChange = e => {
    this.setState({
      selectorValue: e.detail.value
    });
  };

  handleMulitChange = e => {
    this.setState({
      mulitSelectorValues: e.detail.value
    });
  };
  handleMulitChange2 = e => {
    this.setState({
      mulitSelectorValues2: e.detail.value
    });
  };

  handleColumnchange = e => {
    console.log(e.detail);
  };

  handleTimeChange = e => {
    console.log(e);
    this.setState({
      timeSel: e.detail.value
    });
  };

  handleDateChange = e => {
    const val = e.detail.value;
    const dateSel = Array.isArray(val) ? val.join("-") : val;
    this.setState({ dateSel });
  };

  handleRegionChange = e => {
    this.setState({
      regionSel: e.detail.value
    })
  }

  render() {
    const {
      selector,
      multiSelector,
      multiSelector2,
      selectorValue,
      mulitSelectorValues,
      mulitSelectorValues2,
      timeSel,
      dateSel,
      regionSel,
    } = this.state;
    return (
      <View className="container">
        <Header title="Picker"></Header>
        <View className="page-body">
          <View className="page-section">
            <Text className="page-section-title">普通选择器</Text>
            <View>
              <Picker
                mode="selector"
                range={selector}
                value={selectorValue}
                onChange={this.handleChange}
                onCancel={() => {
                  console.log('onCancel')
                }}
              >
                <View className="picker">
                  当前选择：{selector[selectorValue]}
                </View>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text className="page-section-title">多行选择器</Text>
            <View>
              <Picker
                mode="multiSelector"
                range={multiSelector}
                value={mulitSelectorValues}
                onChange={this.handleMulitChange}
                // @ts-ignore
                onColumnchange={this.handleColumnchange}
              >
                <View className="picker">
                  当前选择：
                  {`${this.state.multiSelector[0][mulitSelectorValues[0]]}, ${this.state.multiSelector[1][mulitSelectorValues[1]]
                    }`}
                </View>
              </Picker>
            </View>
          </View>

          <View className="page-section">
            <Text className="page-section-title">使用object[]的多行选择器</Text>
            <View>
              <Picker
                mode="multiSelector"
                range={multiSelector2}
                value={mulitSelectorValues2}
                rangeKey="category"
                onChange={this.handleMulitChange2}
                // @ts-ignore
                onColumnchange={this.handleColumnchange}
              >
                <View className="picker">
                  当前选择：
                  {`${this.state.multiSelector2[0][mulitSelectorValues2[0]].category}, ${this.state.multiSelector2[1][mulitSelectorValues2[1]].category
                    }`}
                </View>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text className="page-section-title">时间选择器</Text>
            <View>
              <Picker
                mode="time"
                onChange={this.handleTimeChange}
                value={timeSel}
              >
                <View className="picker">当前选择：{timeSel}</View>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text className="page-section-title">日期选择器</Text>
            <View className="page-section-body">
              <Picker
                mode="date"
                onChange={this.handleDateChange}
                value={dateSel}
              >
                <View className="picker">当前选择：{dateSel}</View>
              </Picker>
            </View>
          </View>
          <View className="page-section">
            <Text className="page-section-title">地区选择器</Text>
            <View className="page-section-body">
              <Picker
                mode='region'
                value={regionSel}
                onChange={this.handleRegionChange}
              >
                <View className='picker'>
                  当前选择：{regionSel?.join('-')}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
