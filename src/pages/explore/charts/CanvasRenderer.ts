import CanvasPainter from "zrender/lib/canvas/Painter"

const isRn = navigator?.product === "ReactNative"

class CustomCanvasPainter extends CanvasPainter {
  refresh(paintAll?: boolean) {
    super.refresh(paintAll)
    if (isRn) {
      this.eachLayer(function(layer) {
        if (layer.__builtin__ && layer.__dirty) {
          // @ts-ignore
          layer.ctx.flush()
        }
      })
    }
    return this
  }
}

export function CanvasRenderer(registers) {
  registers.registerPainter("canvas", CustomCanvasPainter)
}
