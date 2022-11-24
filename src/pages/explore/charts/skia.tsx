import {
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react'

import {
  Canvas,
  ImageSVG,
  Skia,
  SkSVG,
} from "@shopify/react-native-skia"

import {
  View,
} from 'react-native'

import { setPlatformAPI, DEFAULT_FONT_FAMILY as zrenderFontFamily } from 'zrender/lib/core/platform'
import { measureText } from '../../utils/platform'
import { DEFAULT_FONT_FAMILY } from '../../utils/font'
import { usePanResponder } from './events'

setPlatformAPI({ measureText })

interface SkiaProps {
  svg?: string
  width?: number
  height?: number
}

function getSkSvg(svg?: string): SkSVG | undefined {
  // TODO: 全局替换字体做法比较暴力，或者实用定义字体，可能某些场景字体设置失效，需要修复
  // if (svg) {
  //   svg = svg.replace(new RegExp(zrenderFontFamily, 'g'), DEFAULT_FONT_FAMILY)
  //   console.log('svg', svg)
  // }
  const initString = svg ? Skia.SVG.MakeFromString(svg) : undefined
  return initString ?? undefined
}

function SkiaComponent(props: SkiaProps, ref?: any) {
  const { svg } = props
  const [svgString, setSvgString] = useState<SkSVG | undefined>(getSkSvg(svg))
  const [width, setWidth] = useState<number>(props.width ?? 0)
  const [height, setHeight] = useState<number>(props.height ?? 0)
  const [panResponder, setZrenderId] = usePanResponder()

  useImperativeHandle(ref, () => ({
    elm: {
      setAttribute: (name, value) => {
        if(name === 'width') {
          setWidth(value)
        }
        if(name === 'height') {
          setHeight(value)
        }
      },
      setAttributeNS: (name, value) => {
        console.log(name, value)
      },
      removeAttribute: (name) => {
        console.log(name)
      },
      patchString: (_oldVnode: string, vnode: string) => {
        const _svgString = getSkSvg(vnode)
        setSvgString(_svgString)
      },
      setZrenderId: (id) => {
        setZrenderId(id)
      }
    },
    viewprot: {}
  }))

  return svgString ? (
    <View {...panResponder.panHandlers} style={{ width, height }}>
      <Canvas style={{ width, height }} pointerEvents="auto">
        <ImageSVG
          svg={svgString}
          x={0}
          y={0}
          width={width}
          height={height}
        />
      </Canvas>
    </View>
  ) : null
}
export default forwardRef(SkiaComponent)
