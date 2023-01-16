"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[8051],{"8051":function(A){A.exports=JSON.parse('{"version":3,"sources":["src/components/rich-text/rich-text.tsx"],"names":["RichText","this","renderNode","node","type","content","text","replace","name","attrs","children","attributes","childList","key","val","styles","split","map","item","trim","filter","styleObj_1","forEach","res","exec","value","styleName","args","_i","arguments","length","toUpperCase","Object","keys","style","_this","h","prototype","render","_a","nodes","Array","isArray","Host","innerHTML"],"mappings":"uEA4BaA,SAAQ,6DAGnBC,KAAAC,WAAa,SAACC,GACZ,GAAI,SAAUA,GAAQA,EAAKC,OAAS,OAAQ,CAE1C,IAAMC,GAAWF,EAAKG,MAAQ,IAAIC,QAAQ,UAAW,KACrD,OAAOF,OACF,GAAI,SAAUF,GAAQA,EAAKK,KAAM,CAEpC,IAAAA,EAGEL,EAAIK,KAFNC,EAEEN,EAAIM,MADNC,EACEP,EAAIO,SACR,IAAMC,EAAyB,GAC/B,IAAIC,EAAmB,GAEvB,GAAIH,UAAgBA,IAAU,SAAU,gBAC3BI,GACT,IAAMC,EAAML,EAAMI,GAClB,GAAIA,IAAQ,gBAAkBC,IAAQ,SAAU,CAE9C,IAAMC,EAASD,EACZE,MAAM,KACNC,KAAI,SAAAC,GAAQ,OAAAA,EAAKC,UACjBC,QAAO,SAAAF,GAAQ,OAAAA,KAElB,IAAMG,EAEF,GAEJN,EAAOO,SAAQ,SAAAJ,GACb,IAAKA,EAAM,OAEX,IAAMK,EAAM,eAAeC,KAAKN,GAChC,IAAKK,EAAK,OAED,IAAAf,EAAee,EAAG,GAAZE,EAASF,EAAG,GAC3B,IAAMG,EAAYlB,EAAKD,QAAQ,aAAa,WAAC,IAAAoB,EAAA,OAAA,IAAAC,EAAA,EAAAA,EAAAC,UAAAC,OAAAF,IAAO,CAAPD,EAAAC,GAAAC,UAAAD,GAAY,OAAAD,EAAK,GAAGI,iBACjEV,EAASK,GAAaD,KAGxB,GAAIO,OAAOC,KAAKZ,GAAUS,OAAQ,CAChCnB,EAAWuB,MAAQb,mBAKvBV,EAAWE,GAAOC,GA9BpB,IAAK,IAAMD,KAAOJ,EAAK,GAAZI,IAkCb,GAAIH,GAAYA,EAASoB,OAAQ,CAC/BlB,EAAYF,EAASO,KAAI,SAAAd,GAAQ,OAAAgC,EAAKjC,WAAWC,MAInD,OAAOiC,EAAE5B,EAAMG,EAAYC,GAG7B,OAAO,2BAGTZ,EAAAqC,UAAAC,OAAA,WACQ,IAAAC,EAAwBtC,KAAtBuC,EAAKD,EAAAC,MAAEtC,EAAUqC,EAAArC,WAEzB,GAAIuC,MAAMC,QAAQF,GAAQ,CACxB,OACEJ,EAACO,KAAI,KACFH,EAAMvB,KAAI,SAAAd,GAAQ,OAAAD,EAAWC,WAG7B,CACL,OAAOiC,EAACO,KAAI,CAACC,UAAWJ,eAzET","sourcesContent":["import { Component, h, ComponentInterface, Prop, Host } from \'@stencil/core\'\\n\\ninterface Attributes {\\n  [propName: string]: string | {\\n    [propName: string]: string\\n  }\\n}\\n\\ninterface NodeType {\\n  name: string\\n  attrs?: Attributes\\n  children?: ElementType[]\\n}\\n\\ninterface TextType {\\n  type: \'text\'\\n  text: string\\n}\\n\\ntype ElementType = NodeType | TextType\\n\\ntype StringType = string\\n\\nexport type Nodes = ElementType[] | StringType\\n\\n@Component({\\n  tag: \'taro-rich-text-core\'\\n})\\nexport class RichText implements ComponentInterface {\\n  @Prop() nodes: Nodes\\n\\n  renderNode = (node: ElementType) => {\\n    if (\'type\' in node && node.type === \'text\') {\\n      // nonsupport Html Entries\\n      const content = (node.text || \'\').replace(/&nbsp;/g, \'\\\\u00A0\')\\n      return content\\n    } else if (\'name\' in node && node.name) {\\n      const {\\n        name,\\n        attrs,\\n        children\\n      } = node\\n      const attributes: Attributes = {}\\n      let childList: any[] = []\\n\\n      if (attrs && typeof attrs === \'object\') {\\n        for (const key in attrs) {\\n          const val = attrs[key]\\n          if (key === \'style\' && typeof val === \'string\') {\\n            // stencil JSX style props only support object\\n            const styles = val\\n              .split(\';\')\\n              .map(item => item.trim())\\n              .filter(item => item)\\n\\n            const styleObj: {\\n              [propName: string]: string\\n            } = {}\\n\\n            styles.forEach(item => {\\n              if (!item) return\\n\\n              const res = /(.+): *(.+)/g.exec(item)\\n              if (!res) return\\n\\n              const [, name, value] = res\\n              const styleName = name.replace(/-([a-z])/g, (...args) => args[1].toUpperCase())\\n              styleObj[styleName] = value\\n            })\\n\\n            if (Object.keys(styleObj).length) {\\n              attributes.style = styleObj\\n            }\\n\\n            continue\\n          }\\n          attributes[key] = val\\n        }\\n      }\\n\\n      if (children && children.length) {\\n        childList = children.map(node => this.renderNode(node))\\n      }\\n\\n      // @ts-ignore\\n      return h(name, attributes, childList)\\n    }\\n\\n    return null\\n  }\\n\\n  render () {\\n    const { nodes, renderNode } = this\\n\\n    if (Array.isArray(nodes)) {\\n      return (\\n        <Host>\\n          {nodes.map(node => renderNode(node))}\\n        </Host>\\n      )\\n    } else {\\n      return <Host innerHTML={nodes} />\\n    }\\n  }\\n}\\n"]}')}}]);