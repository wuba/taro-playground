"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6570],{"6570":function(n){n.exports=JSON.parse('{"version":3,"names":["Ad","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/ad/ad.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-ad-core\'\\n})\\nexport class Ad implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'Ad\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,GAAE,W,uCACbA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,KAAMC,K,EAGnBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPI,U"}')}}]);