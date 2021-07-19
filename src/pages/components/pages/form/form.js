import "./form.scss";
import React from "react";

import {
  View,
  Text,
  Label,
  Radio,
  Checkbox,
  Slider,
  Input,
  Button,
  Picker,
  RadioGroup,
  Form,
  CheckboxGroup,
  Switch,
  ScrollView
} from "@tarojs/components";

import Header from "../../components/head/head";

export default class PageForm extends React.Component {
  state = {
    radioItem: [
      {
        key: "radio-1",
        value: "选项一",
        checked: false
      },
      {
        key: "radio-2",
        value: "选项二",
        checked: false
      }
    ],
    checkItem: [
      {
        key: "checkbox—1",
        value: "选项一",
        checked: false
      },
      {
        key: "checkbox—2",
        value: "选项二",
        checked: false
      }
    ],
    sliderValue: 50
  };

  onHandleChange = e => {
    console.log(e);
    const value = e.detail.value;
    this.setState({
      inputValue: value
    });
  };

  onRadioChange = e => {
    console.log(e);
  };

  onCheckChange = e => {
    const { value } = e.detail;
    const { checkItem } = this.state;
    checkItem.forEach(item => {
      item.checked = value.includes(item.key);
    });
    this.setState({
      checkItem
    });
  };

  handleSliderChange = e => {
    console.log(e);
    this.setState({
      sliderValue: e.detail.value
    })
  };

  handleSliderChanging = e => {
    console.log('handleSliderChanging', e);
  };

  formSubmit = e => {
    console.log(e);
  };

  formReset = e => {
    console.log(e);
    this.setState({
      sliderValue: 50,
      inputValue: ''
    })
  };

  render() {
    return (
      <ScrollView className="components-page">
        <View className="components-page__header">
          <Header title="Form"></Header>
        </View>
        <Form onSubmit={this.formSubmit} onReset={this.formReset}>
          <View className="components-page__body">
            <View className="components-page__body-example example">
              <View className="example-header">switch</View>
              <View className="example-body">
                <Switch
                  onChange={this.onHandleChange}
                  name="switch"
                  className="form-switch"
                ></Switch>
              </View>
            </View>
            <View className="components-page__body-example example">
              <View className="example-header">radio</View>
              <View className="example-body">
                <RadioGroup
                  className="example-body__radio-group"
                  onChange={this.onRadioChange}
                  name="radio"
                >
                  {this.state.radioItem.map(item => {
                    return (
                      <Label
                        className="example-body__radio-group-item"
                        for={item.key}
                        key={item.key}
                      >
                        <Radio value={item.key} checked={item.checked} />
                        <Text className="example-body__radio-group-item-text">
                          {item.value}
                        </Text>
                      </Label>
                    );
                  })}
                </RadioGroup>
              </View>
            </View>
            <View className="components-page__body-example example">
              <View className="example-header">checkbox</View>
              <View className="example-body">
                <CheckboxGroup
                  className="example-body__checkbox-group"
                  onChange={this.onCheckChange}
                  name="checkbox"
                >
                  {this.state.checkItem.map(item => {
                    return (
                      <Label
                        className="example-body__checkbox-group-item"
                        for={item.key}
                        key={item.key}
                      >
                        <Checkbox value={item.key} checked={item.checked} />
                        <Text className="example-body__checkbox-group-item-text">{item.value}</Text>
                      </Label>
                    );
                  })}
                </CheckboxGroup>
              </View>
            </View>
            <View className="components-page__body-example example">
              <View className="example-header">slider</View>
              <View className="example-body">
                <Slider
                  name="slider"
                  value={this.state.sliderValue}
                  showValue
                  onChange={this.handleSliderChange}
                  onChanging={this.handleSliderChanging}
               />
              </View>
            </View>
            <View className="components-page__body-example example">
              <View className="example-header">日期选择器</View>
              <View className="example-body">
                <Picker mode="date"
                value={"2020-01-01"}
                >
                  <View>当前选择：2020-01-01</View>
                </Picker>
              </View>
            </View>
            <View className="components-page__body-example example example-input">
              <View className="example-header">input</View>
              <View className="example-input-example-body">
                <Input
                  name="input"
                  type="text"
                  value={this.state.inputValue}
                  placeholder={"这是一个输入框"}
                  onInput={this.onHandleChange}
                />
              </View>
            </View>
            <View className="components-page__body-example example">
              <View className="example-body">
                <Button formType="submit" type="primary">
                  Submit
                </Button>
                <Button formType="reset" type="default">
                  Reset
                </Button>
              </View>
            </View>
          </View>
        </Form>
      </ScrollView>
    );
  }
}
