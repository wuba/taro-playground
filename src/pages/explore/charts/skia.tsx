import {
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react'

import { Image } from "react-native";

import {
  Canvas,
  ImageSVG,
  Skia,
  SkSVG,
  SkTypeface,
} from "@shopify/react-native-skia"

import { setPlatformAPI, DEFAULT_FONT, DEFAULT_FONT_SIZE, platformApi } from 'zrender/lib/core/platform'
const originMeasureText = platformApi.measureText

const resolveAsset = (source) => {
  return typeof source === "number"
    ? Image.resolveAssetSource(source).uri
    : source.default;
};

const fonts = {}

export const loadFont = async (source, key): Promise<SkTypeface | null> => {
  const uri = typeof source === "string" ? source : resolveAsset(source);
  const data = await Skia.Data.fromURI(uri)
  const font = Skia.Typeface.MakeFreeTypeFaceFromData(data)
  fonts[key] = font
  return font
}
// fixme: measureText
loadFont(require("./SansSerifFLF.otf"), 'sans-serif')

setPlatformAPI({
  measureText(text: string, font: string = DEFAULT_FONT) {
    const res = /([0-9]*?)px/.exec(font)
    const fontSize = Number(res?.[1]) || DEFAULT_FONT_SIZE
    const f = fonts['sans-serif'] ? Skia.Font(fonts['sans-serif'], fontSize) : null
    let width
    if(f) {
      width = f.getTextWidth(text)
      return { width }
    } else {
      return originMeasureText(text, font)
    }
  }
})
interface SkiaProps {
  svg?: string
  width?: number
  height?: number
}

function getSkSvg(svg?: string): SkSVG | undefined {
  const initString = svg ? Skia.SVG.MakeFromString(svg) : undefined
  return initString ?? undefined
}

function SkiaComponent(props: SkiaProps, ref?: any) {
  const { svg } = props
  const [svgString, setSvgString] = useState<SkSVG | undefined>(getSkSvg(svg))
  const [width, setWidth] = useState<number>(props.width ?? 0)
  const [height, setHeight] = useState<number>(props.height ?? 0)
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
        const svgString = getSkSvg(vnode)
        setSvgString(svgString)
      }
    },
    viewprot: {}
  }))
  return svgString ? <Canvas style={{ width, height }}>
    <ImageSVG
      svg={svgString}
      x={0}
      y={0}
      width={width}
      height={height}
    />
  </Canvas> : null
}
export default forwardRef(SkiaComponent)