import React from "react";
import { PickerView, View, PickerViewColumn } from "@tarojs/components";
import './picker-view.scss';

export default class Picks extends React.Component {
  constructor () {
    super(...arguments);
    const date = new Date();
    const years = [];
    const months = [];
    const days = [];
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    this.state = {
      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: []
    };
  }

  onChange = e => {
    const val = e.detail.value;
    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    });
  }

  render() {
    return (
      <View>
        <View className="value">选中的值: {this.state.year}年{this.state.month}月{this.state.day}日</View>
        <PickerView value={this.state.value} onChange={this.onChange}>
          <PickerViewColumn>
            {this.state.years.map(item => {
              return (
                <View key={item}>{item}年</View>
              );
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.months.map(item => {
              return (
                <View key={item}>{item}月</View>
              );
            })}
          </PickerViewColumn>
          <PickerViewColumn>
            {this.state.days.map(item => {
              return (
                <View key={item}>{item}日</View>
              );
            })}
          </PickerViewColumn>
        </PickerView>
      </View>
    );
  }
}
