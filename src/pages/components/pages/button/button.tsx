import { useState } from "react";
import { View, Button, ScrollView, ButtonProps } from "@tarojs/components";

import Header from "@/components/head/head";

import "./button.scss";

interface btnItem {
  text: string,
  size?: keyof ButtonProps.size,
  type?: keyof ButtonProps.type,
  loading?: boolean,
  disabled?: boolean,
}

const BTN_LIST: btnItem[] = [
  {
    text: "页面主操作 Normal",
    size: "default",
    type: "primary"
  },
  {
    text: "页面主操作 Loading",
    size: "default",
    type: "primary",
    loading: true
  },
  {
    text: "页面主操作 Disabled",
    size: "default",
    type: "primary",
    disabled: true
  },
  {
    text: "页面次要操作 Normal",
    size: "default",
    type: "default"
  },
  {
    text: "页面次要操作 Disabled",
    size: "default",
    type: "default",
    disabled: true
  },
  {
    text: "警告类操作 Normal",
    size: "default",
    type: "warn"
  },
  {
    text: "警告类操作 Disabled",
    size: "default",
    type: "warn",
    disabled: true
  }
];

/**
 * Button
 * @returns 
 */
const Index = () => {
  const [showLoading, setShowLoading] = useState(true);
  return (
    <ScrollView className='components-page'>
      <View className='components-page__header'>
        <Header title='Button'></Header>
      </View>
      <View className='components-page__body'>
        <View className='components-page__body-example example'>
          <View className='example-body'>
            {BTN_LIST.map((item: btnItem, index: number) => {
              return (
                <Button
                  className='btn'
                  key={index}
                  size={item.size ? item.size : undefined}
                  type={item.type ? item.type : undefined}
                  loading={item.loading ? item.loading : false}
                  disabled={item.disabled ? item.disabled : false}
                >
                  {item.text}
                </Button>
              );
            })}
            <Button
              loading={showLoading}
              onClick={() => {
                setShowLoading(!showLoading)
              }}
              className='btn'
              plain
              type='primary'
              hoverStyle={{ backgroundColor: 'red', color: '#fff' }}
            >
              按钮
            </Button>
            <Button plain className='btn' type='primary' disabled>
              不可点击的按钮
            </Button>
            <Button plain className='btn'>
              镂空按钮
            </Button>
            <Button plain className='btn' disabled>
              镂空按钮 Disabled
            </Button>
            <View className='btn-center'>
              <Button size='mini' className='btn' type='primary'>
                小号按钮
              </Button>
              <Button size='mini' className='btn'>
                小号按钮
              </Button>
              <Button size='mini' className='btn' type='warn'>
                小号按钮
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;
