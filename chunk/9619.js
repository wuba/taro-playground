"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9619],{"9619":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/ad/ad.tsx"],"names":["Ad","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,GAAE,kDACbA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,KAAMC,OAGnBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPI","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-ad-core\'\\n})\\nexport class Ad implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'Ad\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);