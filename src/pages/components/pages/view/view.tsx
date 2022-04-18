import { View, Text, ScrollView } from "@tarojs/components";
import Header from "@/components/head/head";
import "./view.scss";

export default () => {
  return (
    <ScrollView className='components-page'>
      <View className='components-page__header'>
        <Header title='View' />
      </View>
      <View className='components-page__body'>
        <View className='components-page__body-example example'>
          <View className='example-header'>
            flex-direction: row 横向布局
          </View>
          <View className='example-body'>
            <View className='example-body__list'>
              <View className='example-body__list-item demo-text-1'>
                <Text className='example-body__list-item-txt'>A</Text>
              </View>
              <View className='example-body__list-item demo-text-2'>
                <Text className='example-body__list-item-txt'>B</Text>
              </View>
              <View className='example-body__list-item demo-text-3'>
                <Text className='example-body__list-item-txt'>C</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='components-page__body-example example'>
          <View className='example-header'>
            flex-direction: column 纵向布局
          </View>
          <View className='example-body'>
            <View className='example-body__list example-body__list--vertical'>
              <View className='example-body__list-item demo-text-1'>
                <Text className='example-body__list-item-txt'>A</Text>
              </View>
              <View className='example-body__list-item demo-text-2'>
                <Text className='example-body__list-item-txt'>B</Text>
              </View>
              <View className='example-body__list-item demo-text-3'>
                <Text className='example-body__list-item-txt'>C</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
