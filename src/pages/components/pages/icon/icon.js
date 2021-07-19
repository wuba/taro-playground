import './icon.scss'
import { View, Icon, Text, ScrollView } from "@tarojs/components";
import React from "react";

import Header from "../../components/head/head";

export default class PageView extends React.Component {
  render() {
    return (
      <ScrollView className="components-page">
        <View className="components-page__header">
          <Header title="Icon"></Header>
        </View>
        <View className="components-page__body">
          <View className="components-page__body-example example">
            <View className="page__con__list">
              <Icon size="30" type="success"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>成功</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于表示操作顺利完成</Text>
                </View>
              </View>
            </View>
            <View className="page__con__list">
              <Icon size="30" type="info"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>提示</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>
                    用于表示信息展示；也常用于缺乏条件的操作拦截，提示用户所需信息
                  </Text>
                </View>
              </View>
            </View>
            <View className="page__con__list">
              <Icon size="30" type="warn" color="#ccc"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>普通警告</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>
                    用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果
                  </Text>
                </View>
              </View>
            </View>
            <View className="page__con__list">
              <Icon size="30" type="warn"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>强烈警告</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>
                    用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况
                  </Text>
                </View>
              </View>
            </View>
            <View className="page__con__list">
              <Icon size="30" type="waiting"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>等待</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>
                    用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况
                  </Text>
                </View>
              </View>
            </View>
            <View className="page__con__list icon_sml">
              <Icon size="30" type="success_no_circle"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>多选控件图标_已选择</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于多选控件中，表示已选择该项目</Text>
                </View>
              </View>
            </View>
            <View className="page__con__list icon_sml">
              <Icon size="30" type="warn"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>错误提示</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于在表单中表示出现错误</Text>
                </View>
              </View>
            </View>
            <View className="page__con__list icon_sml">
              <Icon size="30" type="success"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>单选控件图标_已选择</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于单选控件中，表示已选择该项目</Text>
                </View>
              </View>
            </View>
            <View className="page__con__list icon_sml">
              <Icon size="30" type="download"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>下载</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于表示可下载</Text>
                </View>
              </View>
            </View>
            <View className="page__con__list icon_sml">
              <Icon size="30" type="clear" color="red"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>停止或关闭</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于在表单中，表示关闭或停止</Text>
                </View>
              </View>
            </View>
            <View className="page__con__list icon_sml">
              <Icon size="30" type="search"></Icon>
              <View className="icon_right">
                <View className="icon_right_head">
                  <Text>搜索</Text>
                </View>
                <View className="icon_right_tit">
                  <Text>用于搜索控件中，表示可搜索</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
