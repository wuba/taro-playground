"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6352],{"6352":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/editor/editor.tsx"],"names":["Editor","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,OAAM,kDACjBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,SAAUC,OAGvBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPQ","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-editor-core\'\\n})\\nexport class Editor implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'Editor\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);