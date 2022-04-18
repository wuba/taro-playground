import {
  View,
  CheckboxGroup,
  Checkbox,
  Label,
  Radio,
  RadioGroup
} from '@tarojs/components'

import Header from '@/components/head/head'

import './label.scss'

const PageLabel = () => {
  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='Label' />
      </View>
      <View className='components-page__body'>
        <View className='components-page__body-example example'>
          <View className='example-header'>表单组件在label内</View>
          <View className='example-body'>
            <CheckboxGroup>
              <Label className='example-body__label'>
                <Checkbox value='美国'>美国</Checkbox>
              </Label>
              <Label className='example-body__label'>
                <Checkbox value='中国' checked>
                  中国
                </Checkbox>
              </Label>
            </CheckboxGroup>
          </View>
        </View>
        <View className='components-page__body-example example'>
          <View className='example-header'>表单组件在Label外</View>
          <View className='example-body'>
            <RadioGroup className="example-body__radio-group">
              <Label className='example-body__label' for='gz'>
                <Radio value='GuangZhou' id='gz'>GuangZhou</Radio>
              </Label>
              <Label className='example-body__label' for='sz'>
                <Radio value='ShenZhen' id='sz'>ShenZhen</Radio>
              </Label>
            </RadioGroup>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PageLabel;
