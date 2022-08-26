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
}

function SvgEle(props: SVGVNodeProps) {
  const { node } = props
  if(!node) return null
  const Tag = tagMap[node.tag]
  const attrs = Object.entries(node.attrs).reduce((carry, [key, value]) => {
    carry[toCamelCase(key)] = value
    return carry
  }, {})
  if(node.tag === 'text') {
    return <Tag {...attrs} key={node.key}>{node.text}</Tag>
  }
  return <Tag {...attrs} key={node.key}>{node.children && node.children.map(child => SvgEle({ node: child }))}</Tag>
}

function SvgComponent(props: SVGVNodeProps, ref?: any) {
  const { node } = props
  const [svgNode, setSvgNode] = useState<SVGVNode | undefined>(node)
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
      }
    },
    viewprot: {},
    focus: () => {
      console.log('focus')
    }
  }));
  return svgNode ? <SvgEle node={svgNode} /> : null
}
export default forwardRef(SvgComponent)