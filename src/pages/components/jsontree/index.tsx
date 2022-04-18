import { View, Text } from '@tarojs/components'
import { isWeb } from '@/utils/index'

function JSONTree(props) {
  const text = isWeb ? JSON.stringify(props.data, undefined, 2) : JSON.stringify(props.data, undefined, 2).replace(/[ ]/g, '&nbsp;')
  return <Text decode>{text}</Text>
}

export default (props) => {
  return ((props.data && Object.keys(props.data).length > 0) ? <JSONTree data={props.data} /> : <View></View>)
}