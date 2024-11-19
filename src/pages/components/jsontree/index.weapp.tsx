import { View, Text } from '@tarojs/components'
// import { isWeb } from '@/utils/index'

export default (props) => {
  return ((props.data && Object.keys(props.data).length > 0) ? <View><Text space='nbsp'>{JSON.stringify(props.data, undefined, 2)}</Text></View> : <View></View>)
}