import { useState } from "react";
import { View, Radio, Label, RadioGroup } from "@tarojs/components";
import Header from "@/components/head/head";
import "./radio.scss";

interface RadioItem {
  value: string
  text: string,
  checked: boolean
}

const initList: RadioItem[] = [
  {
    value: "美国",
    text: "美国",
    checked: false
  },
  {
    value: "中国",
    text: "中国",
    checked: true
  },
  {
    value: "巴西",
    text: "巴西",
    checked: false
  },
  {
    value: "日本",
    text: "日本",
    checked: false
  },
  {
    value: "英国",
    text: "英国",
    checked: false
  },
  {
    value: "法国",
    text: "法国",
    checked: false
  }
];

const Index = () => {
  const [slctValue, setSlctValue] = useState('中国');
  const [list, setList] = useState<RadioItem[]>(initList);

  const radioChange = e => {
    const tmp = list.map(item => {
      item.checked = item.value == e.detail.value;
      return item;
    });
    setList(tmp);
    setSlctValue(e.detail.value);
  }

  return (
    <View className="components-page">
      <View className="components-page__header">
        <Header title="Radio" />
      </View>
      <View className="components-page__body">
        <View className="components-page__body-example example">
          <View className="example-header">默认样式</View>
          <View className="example-body" style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 10 }}>
            <Radio value="选中" checked>
              选中
            </Radio>
            <Radio value="未选中">
              未选中
            </Radio>
          </View>
        </View>
        <View className="components-page__body-example example">
          <View className="example-header">推荐展示样式</View>
          <View className="example-body">
            <View className="example-body__select-box">
              选中的值是: {slctValue}
            </View>
            <View className="example-body__radios">
              <RadioGroup onChange={radioChange}>
                {list.map((item: RadioItem) => {
                  return (
                    <Label className="example-body__radios-item" key={item.value}>
                      <Radio
                        value={item.value}
                        checked={item.checked}
                      >
                        {item.text}
                      </Radio>
                    </Label>
                  );
                })}
              </RadioGroup>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Index;
