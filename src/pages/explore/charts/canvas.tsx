import { GLView } from "expo-gl"
import Expo2DContext from "expo-2d-context"
import { forwardRef, useImperativeHandle, useState, memo } from "react"

interface CanvasProps {
  width?: number
  height?: number
  onInit?: (ctx: Expo2DContext) => void
}
function CanvasComponent(props: CanvasProps, ref?: any) {
  const [width, setWidth] = useState<number>(props.width ?? 0)
  const [height, setHeight] = useState<number>(props.height ?? 0)
  let ctx: Expo2DContext | undefined
  useImperativeHandle(ref, () => {
    return {
      getContext: () => {
        return ctx
      },
      elm: {
        setAttribute: (name, value) => {
          if(name === 'width') {
            setWidth(value)
          }
          if(name === 'height') {
            setHeight(value)
          }
        }
      },
    }
  }, [])
  return <>
    <GLView style={{ width, height }} onContextCreate={async(gl) => {
      ctx = new Expo2DContext(gl, {})
      await ctx.initializeText();
      Object.defineProperties(ctx, {
        shadowColor: {},
        globalCompositeOperation: {},
        shadowOffsetX: {},
        shadowOffsetY: {},
        shadowBlur: {},
      })
      props.onInit?.(ctx)
    }} />
  </>
}
export default memo(forwardRef(CanvasComponent), (prevProps, nextProps) => {
  return prevProps.onInit === nextProps.onInit
})