import { View, Image, Text } from '@tarojs/components'
import { Fragment } from 'react'
import { hairlineWidth } from '@/platform/index'
import rightPng from "@/assets/iconpark/right.png"
import infoPng from "@/assets/iconpark/info.png"

import './list.scss'

const Divider = () => {
  return <View style={{ height: hairlineWidth, backgroundColor: "#e5e5e5" }} />
}

interface ItemProps {
  image?: string
  title: string
  showRightArrow?: boolean
  showInfo?: boolean
  data?: any
}

interface ListProps {
  data: ItemProps[]
  title?: string
  desc?: string
  handleClick?: () => void
  handleItemClick?: (data: any, index: number) => void
  handleInfoClick?: (data: any, index: number) => void
}

export default function List({ data, title, desc, handleClick, handleItemClick, handleInfoClick }: ListProps){
  const { length } = data
  if (length === 0) return null
  return <>
    <View className="list-header">
      <Text className="list-header-text">{title}</Text>
      <Text
        className="list-header-text"
        onClick={handleClick}
      >{desc}
      </Text>
    </View>
    <Divider />
    {data.map(({ image, title, showRightArrow = true, showInfo = false, data }, index) => {
      return (<Fragment key={index}>
          <View
            hoverClass="list-item-hover"
            hoverStyle={{ backgroundColor: "#fafafa" }}
            className="list-item"
            onClick={()=>{
              handleItemClick?.(data, index)
            }}
          >
            {image && <Image
              className="list-item-img"
              src={image}
            />}
            <View className="list-item-body" style={{ borderBottomWidth: index != length - 1 ? hairlineWidth : 0 }}>
              <View className="list-item-content">
                <Text
                  className="list-item-title"
                  //@ts-ignore
                  ellipsizeMode="tail"
                  numberOfLines={1} >{title}</Text>
              </View>
              {showInfo && <View
                onClick={(e) => {
                  e.stopPropagation?.()
                  handleInfoClick?.(data, index)
                }}
                className='list-item-info'
              ><Image
                src={infoPng}
                className='list-item-icon'
              ></Image></View>
              }
              {showRightArrow && <View
                className='list-item-box'
              ><Image
                src={rightPng}
                className='list-item-icon'
              ></Image></View>}
            </View>
          </View>
        </Fragment>
      )
    })}
    <Divider />
  </>
}
