"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6455],{"6455":function(n){n.exports=JSON.parse('{"version":3,"names":["OfficialAccount","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/official-account/official-account.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-official-account-core\'\\n})\\nexport class OfficialAccount implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'OfficialAccount\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,gBAAe,W,uCAC1BA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,kBAAmBC,K,EAGhCJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPiB,U"}')}}]);