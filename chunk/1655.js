"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1655],{"1655":function(n){n.exports=JSON.parse('{"version":3,"names":["OpenData","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/open-data/open-data.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-open-data-core\'\\n})\\nexport class OpenData implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'OpenData\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,SAAQ,W,uCACnBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,WAAYC,K,EAGzBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPU,U"}')}}]);