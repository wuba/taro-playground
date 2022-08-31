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
} from "@shopify/react-native-skia";

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
  }));
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