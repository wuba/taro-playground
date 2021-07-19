import React from "react";
import { View, Text, ScrollView } from "@tarojs/components";

import "./view.scss";

import Header from "../../components/head/head";

export default class PageView extends React.Component {
  render() {
    return (
      <ScrollView className='components-page'>
        <View className='components-page__header'>
          <Header title='View' />
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View
              hoverStyle={{ color: "blue", backgroundColor: "red" }}
              className='example-header'
            >
              flex-direction: row 横向布局
              <Text>TEXT</Text>
            </View>
            <View className='example-body'>
              <View className='example-body__list'>
                <View className='example-body__list-item demo-text-1'>
                  <Text>A</Text>
                </View>
                <View className='example-body__list-item demo-text-2'>
                  <Text>B</Text>
                </View>
                <View className='example-body__list-item demo-text-3'>
                  <Text>C</Text>
                </View>
              </View>
            </View>
          </View>
          <View className='components-page__body-example example'>
            <View className='example-header'>
              flex-direction: column 纵向布局
            </View>
            <View className='example-body' style={{backgroundColor: 'grey'}} hoverStyle={{color: "blue", backgroundColor: "red"}}>
              asdads
              <Text>Text</Text>
              <View className='example-body__list example-body__list--vertical'>
                <View className='example-body__list-item demo-text-1'>
                  <Text>A</Text>
                </View>
                <View className='example-body__list-item demo-text-2'>
                  <Text>B</Text>
                </View>
                <View className='example-body__list-item demo-text-3'>
                  <Text>C</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
