import { useState } from 'react'
import { View, BaseEventOrig, Checkbox, Label, CheckboxGroup } from '@tarojs/components'
import Header from '@/components/head/head'
import './checkbox.scss'

interface itemProps {
  value: string
  text: string,
  checked: boolean
}

const initList: itemProps[] = [
  {
    value: '美国',
    text: '美国',
    checked: false
  },
  {
    value: '中国',
    text: '中国',
    checked: true
  },
  {
    value: '巴西',
    text: '巴西',
    checked: false
  },
  {
    value: '日本',
    text: '日本',
    checked: false
  },
  {
    value: '英国',
    text: '英国',
    checked: false
  },
  {
    value: '法国',
    text: '法国',
    checked: true
  }
];

const Index = () => {
  const [list, setList] = useState(initList);
  const [slctValues, setSlctValues] = useState(['中国', '法国']);

  const checkboxChange = (e: BaseEventOrig<{ value: string[] }>) => {
    const _list = list.map(item => {
      item.checked = e.detail.value.indexOf(item.value) >= 0
      return item
    })
    setSlctValues(e.detail.value);
    setList(_list);
  }

  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='Checkbox'></Header>
      </View>
      <View className='components-page__body'>
        <View className='components-page__body-example example'>
          <View className='example-header'>
            默认样式
          </View>
          <View className='example-body simple-box'>
            <Checkbox value='选中' checked>
              选中
            </Checkbox>
            <Checkbox style='margin-left: 20px' value='未选中'>
              未选中
            </Checkbox>
          </View>
        </View>
        <View className='components-page__body-example example'>
          <View className='example-header'>
            推荐展示样式
          </View>
          <View className='example-body'>
            <View className='select-box'>
              当前选择: {slctValues.join(',')}
            </View>
            <View>
              <View className='checkbox-list'>
                <CheckboxGroup name='checkbox' onChange={checkboxChange}>
                  {list.map((item: itemProps) => {
                    return (
                      <Label
                        className='checkbox-list__label'
                        key={item.value}
                      >
                        <Checkbox
                          className='checkbox-list__checkbox'
                          value={item.value}
                          checked={item.checked}
                        >
                          {item.text}
                        </Checkbox>
                      </Label>
                    )
                  })}
                </CheckboxGroup>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Index;
