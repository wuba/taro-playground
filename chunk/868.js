"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[868],{"868":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/label/label.tsx"],"names":["Label","prototype","render","h","htmlFor","this","for"],"mappings":"6DAKaA,MAAK,qEAGhBA,EAAAC,UAAAC,OAAA,WACE,OACEC,EAAA,QAAA,CAAOC,QAASC,KAAKC,KACnBH,EAAA,OAAA,iBANU","sourcesContent":["import { Component, h, ComponentInterface, Prop } from \'@stencil/core\'\\n\\n@Component({\\n  tag: \'taro-label-core\'\\n})\\nexport class Label implements ComponentInterface {\\n  @Prop() for: string\\n\\n  render () {\\n    return (\\n      <label htmlFor={this.for}>\\n        <slot />\\n      </label>\\n    )\\n  }\\n}\\n"]}')}}]);