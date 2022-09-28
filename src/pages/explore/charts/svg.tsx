import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import {
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { getInstance } from "zrender/lib/zrender";

const tagMap = {
  svg: Svg,
  circle: Circle,
  ellipse: Ellipse,
  g: G,
  text: Text,
  tspan: TSpan,
  textPath: TextPath,
  path: Path,
  polygon: Polygon,
  polyline: Polyline,
  line: Line,
  rect: Rect,
  use: Use,
  image: Image,
  symbol: Symbol,
  defs: Defs,
  linearGradient: LinearGradient,
  radialGradient: RadialGradient,
  stop: Stop,
  clipPath: ClipPath,
  pattern: Pattern,
  mask: Mask,
}

type SVGVNodeAttrs = Record<string, string | number | undefined | boolean>

function toCamelCase(str){
  var reg = /-(\w)/g;
  return str.replace(reg,function(_, $1){
    return $1.toUpperCase();
  });
}

function wrapTouch(event) {
  for (let i = 0; i < event.touches.length; ++i) {
    const touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}
export interface SVGVNode {
  tag: string,
  attrs: SVGVNodeAttrs,
  children?: SVGVNode[],
  text?: string

  // For patching
  elm?: Node
  key?: string
}

interface SVGVNodeProps {
  node?: SVGVNode,
  chart?: any,
}
interface SVGVEleProps {
  node?: SVGVNode,
  touchStart?: any,
  touchMove?: any,
  touchEnd?: any,
}

function SvgEle(props: SVGVEleProps, root: Boolean = true) {
  const { node } = props
  if(!node) return null
  const Tag = tagMap[node.tag]
  if (!Tag) return null;
  const attrs = Object.entries(node.attrs).reduce((carry, [key, value]) => {
    carry[toCamelCase(key)] = value
    return carry
  }, {})
  if(node.tag === 'text') {
    return <Tag {...attrs} key={node.key}>{node.text}</Tag>
  }
  return root
    ? <Tag {...attrs} onTouchStart={props.touchStart} onTouchEnd={props.touchEnd} onTouchMove={props.touchMove} key={node.key}>{node.children && node.children.map(child => SvgEle({ node: child }, false))}</Tag>
    : <Tag {...attrs} key={node.key}>{node.children && node.children.map(child => SvgEle({ node: child }, true))}</Tag>
}

function SvgComponent(props: SVGVNodeProps, ref?: any) {
  const { node } = props
  const [svgNode, setSvgNode] = useState<SVGVNode | undefined>(node)
  const [ zrenderId, setZrenderId ] = useState<any>(null)

  const touchStart = (e) => {
    console.log('touchStart')
    e = e.nativeEvent
    if (zrenderId && e.touches.length > 0) {
      var touch = e.touches[0];
      var handler = getInstance(zrenderId).handler;
      handler.dispatch('mousedown', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.dispatch('mousemove', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.processGesture(wrapTouch(e), 'start');
    }
  }

  const touchMove = (e) => {
    console.log('touchMove')
    e = e.nativeEvent
    if (zrenderId && e.touches.length > 0) {
      var touch = e.touches[0];
      var handler = getInstance(zrenderId).handler;
      handler.dispatch('mousemove', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.processGesture(wrapTouch(e), 'change');
    }
  }

  const touchEnd = (e) => {
    console.log('touchEnd')
    e = e.nativeEvent
    if (zrenderId) {
      const touch = e.changedTouches ? e.changedTouches[0] : {};
      var handler = getInstance(zrenderId).handler;
      handler.dispatch('mouseup', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.dispatch('click', {
        zrX: touch.locationX,
        zrY: touch.locationY,
        preventDefault: () => {},
        stopImmediatePropagation: () => {},
        stopPropagation: () => {}
      });
      handler.processGesture(wrapTouch(e), 'end');
    }
  }

  useImperativeHandle(ref, () => ({
    elm: {
      setAttribute: (name, value) => {
        console.log(name, value)
      },
      setAttributeNS: (name, value) => {
        console.log(name, value)
      },
      removeAttribute: (name) => {
        console.log(name)
      },
      patch: (_oldVnode: SVGVNode, vnode: SVGVNode) => {
        setSvgNode(vnode)
      },
      setZrenderId: (id) => {
        setZrenderId(id)
      }
    }
  }));
  return svgNode ? <SvgEle node={svgNode} touchStart={touchStart} touchMove={touchMove} touchEnd={touchEnd} /> : null
}
export default forwardRef(SvgComponent)