import { View, Text } from '@tarojs/components'
import './head.scss';

interface HeadProps {
  title: string,
  desc?: string,
};

const Head = (props: HeadProps) => {
  const {title, desc} = props;

  return (
    <View className='page-head'>
      <View className='page-head-title'>{title}</View>
      <View className='page-head-line' />
      {!!desc && (<Text className='page-head-desc'>{desc}</Text>)}
    </View>
  )
}
export default Head;
