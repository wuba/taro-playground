import { init, Circle } from 'zrender/src/all'
import { View } from 'react-native'
import { useRef, useEffect, useState } from 'react';

import SvgComponent, { SVGVNode } from './svg'

export default function ZrenderPage() {
  const viewRef = useRef<View>(null);
  const [svgNode, setSvgNode] = useState<SVGVNode | null>(null)
  useEffect(() => {
    // @ts-ignore
    const zr = init(viewRef.current, {
      renderer: 'svg',
      ssr: true,
      width: 200,
      height: 200
    })
    var circle = new Circle({
      shape: {
          cx: 150,
          cy: 50,
          r: 40
      },
      style: {
          fill: 'none',
          stroke: '#F00'
      }
    });
    zr.add(circle);
    const node = zr.painter.renderToVNode()
    console.log(node)
    setSvgNode(node)
    return () => zr.dispose()
  }, []);
  console.log('render', svgNode)
  return <View ref={viewRef} style={{height: 200, backgroundColor: '#fefef8'}}>
    {svgNode && <SvgComponent node={svgNode}></SvgComponent>}
  </View>
}