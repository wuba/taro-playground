import { View, Input, ScrollView } from "@tarojs/components";
import { useState } from "react";

import Header from "@/components/head/head";

import "./input.scss";

const PageInput = () => {
  const [value, setValue] = useState('');

  const onInput = e => {
    setValue(e.detail.value);
  }

  return (
    <ScrollView className="components-page">
      <View className="components-page__header">
        <Header title="Input" />
      </View>
      <View className="components-page__body">
        <View className="components-page__body-example example">
          <View className="example-header">可以自动聚焦的input</View>
          <View className="example-body">
            <Input type="text" placeholder="将会获取焦点" focus />
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">控制最大输入长度的input</View>
          <View className="example-body">
            <Input
              type="text"
              placeholder="最大输入长度为10"
              maxlength={10}
              onFocus={(val) => { console.log('聚焦', val); }}
              onBlur={(val) => { console.log('失焦', val); }}
            />
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">
            实时获取输入值:{value}
          </View>
          <View className="example-body">
            <Input
              type="text"
              placeholder="输入同步到内容中"
              value={value}
              onInput={onInput}
            />
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">数字输入的input</View>
          <View className="example-body">
            <Input type="number" placeholder="这是一个数字输入框" />
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">密码输入的input</View>
          <View className="example-body">
            <Input
              password
              placeholder="这是一个密码输入框"
            />
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">身份证输入的input</View>
          <View className="example-body">
            <Input type="idcard" placeholder="身份证输入键盘" />
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">控制占位符颜色的input</View>
          <View className="example-body">
            <Input
              type="text"
              placeholder="占位符字体是红色的"
              // @ts-ignore
              placeholderTextColor="#ff00ff"
              placeholderStyle="color: #ff00ff"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default PageInput;
