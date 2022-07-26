import ReactJson from 'react-json-view'
import { View } from '@tarojs/components'
// import { isWeb } from '@/utils/index'

export default (props) => {
  return ((props.data && Object.keys(props.data).length > 0) ? <ReactJson src={props.data} enableClipboard={false} displayObjectSize={false} quotesOnKeys={false} indentWidth={2} displayDataTypes={false} name={null} /> : <View></View>)
}