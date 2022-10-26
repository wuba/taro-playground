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

import { Platform } from 'react-native';

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
  node: SVGVNode,
  touchStart?: any,
  touchMove?: any,
  touchEnd?: any,
}

const fontStyleReg = /([\w-]+):([\w-]+);/g;
function SvgEle(props: SVGVEleProps) {
  const { node } = props
  if(!node) return null
  const { tag, text, children } = node
  const Tag = tagMap[tag]
  if (!Tag) return null;
  const attrs:any = Object.entries(node.attrs).reduce((carry, [key, value]) => {
    carry[toCamelCase(key)] = value
    return carry
  }, {})
  if(tag === 'text') {
    if(attrs.style){
      [...attrs.style.matchAll(fontStyleReg)].forEach(([_, key, value]) => {
        // 修复 text 属性无效的问题
        if(key !== 'font-family') {
          attrs[toCamelCase(key)] = value
        }
      })
    }
    if(!attrs.alignmentBaseline && attrs.dominantBaseline) {
      attrs.alignmentBaseline = 'middle'
    }
    // fix: https://github.com/react-native-svg/react-native-svg/issues/1862
    if(attrs.paintOrder === 'stroke') {
      attrs.strokeWidth = 0
    }
    return <Text {...attrs}>{text}</Text>
  }
  // fix: https://github.com/react-native-svg/react-native-svg/issues/983
  if(attrs.clipPath && !attrs.clipRule && Platform.OS === 'android') {
    attrs.clipRule = 'nonzero'
  }
  if (tag === 'path') {
    return <Path {...attrs} />
  }
  if (tag === 'linearGradient' || tag === 'radialGradient') {
    // note: 强制刷新渐变
    // https://github.com/software-mansion/react-native-svg/issues/1762
    return <Tag {...attrs}>{children?.map(child => SvgEle({
      node: child
    }))}</Tag>
  }
  return <Tag key={node.key} {...attrs}>{children?.map(child => <SvgEle key={child.key} node={child} />)}</Tag>
}

function SvgRoot(props: SVGVEleProps) {
  const { node, touchStart, touchEnd, touchMove } = props
  const { attrs, children } = node
  const { width, height, viewBox } = attrs
  return <Svg
    width={width as string}
    height={height as string}
    viewBox={viewBox as string}
    onTouchStart={touchStart}
    onTouchEnd={touchEnd}
    onTouchMove={touchMove}>
      {children?.map(child => <SvgEle key={child.key} node={child} />)}
  </Svg>
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
  return svgNode ? <SvgRoot node={svgNode} touchStart={touchStart} touchMove={touchMove} touchEnd={touchEnd} /> : null
}
export default forwardRef(SvgComponent)