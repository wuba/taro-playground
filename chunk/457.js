/*! For license information please see 457.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[457],{"4343":function(e,r,t){t.d(r,{"zx":function(){return c},"V1":function(){return a},"XZ":function(){return s},"cO":function(){return i},"l0":function(){return u},"JO":function(){return l},"Ee":function(){return d},"II":function(){return p},"__":function(){return f},"ub":function(){return m},"Gt":function(){return v},"C3":function(){return h},"_z":function(){return x},"cW":function(){return y},"Nf":function(){return g},"$o":function(){return b},"Ex":function(){return _},"Y8":function(){return j},"FX":function(){return w},"Ho":function(){return O},"pf":function(){return N},"iR":function(){return E},"tq":function(){return C},"t3":function(){return k},"rs":function(){return G},"xv":function(){return L},"gx":function(){return R},"nk":function(){return T},"G7":function(){return S},"kh":function(){return I}});var o=t(6354);const helper_manipulatePropsFunction=(e,r={})=>{const{"dangerouslySetInnerHTML":t}=e;return Object.assign(Object.assign({},r),{"dangerouslySetInnerHTML":t})};var n=t(9900);const mergeRefs=(...e)=>r=>{e.forEach((e=>{((e,r)=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})(e,r)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,r,t)=>{const o=r.className||r.class,n=t.className||t.class,c=arrayToMap(e),a=arrayToMap(o?o.split(" "):[]),s=arrayToMap(n?n.split(" "):[]),i=[];return c.forEach((e=>{a.has(e)?(i.push(e),a.delete(e)):s.has(e)||i.push(e)})),a.forEach((e=>i.push(e))),i.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const r="on"+e;let t=r in document;if(!t){const e=document.createElement("div");e.setAttribute(r,"return;"),t="function"==typeof e[r]}return t}},syncEvent=(e,r,t)=>{const o=e.__events||(e.__events={}),n=o[r];n&&e.removeEventListener(r,n),e.addEventListener(r,o[r]=function handler(e){t&&t.call(this,e)})},arrayToMap=e=>{const r=new Map;return e.forEach((e=>r.set(e,e))),r},createComponent_createReactComponent=(e,r,t,c)=>{void 0!==c&&c();const a=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const s=class extends o.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,r,t={})=>{if(e instanceof Element){const o=getClassName(e.classList,r,t);""!==o&&(e.className=o),Object.keys(r).forEach((t=>{if("children"!==t&&"style"!==t&&"ref"!==t&&"class"!==t&&"className"!==t&&"forwardedRef"!==t)if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const o=t.substring(2).toLowerCase();isCoveredByReact(o)||syncEvent(e,o,r[t])}else e[t]=r[t],"string"==typeof r[t]&&e.setAttribute(camelToDashCase(t),r[t])}))}})(this.componentEl,this.props,e)}"render"(){const r=this.props,{"children":c,"forwardedRef":a,"style":s,"className":i,"ref":u}=r,l=(0,n._T)(r,["children","forwardedRef","style","className","ref"]);let d=Object.keys(l).reduce(((e,r)=>{const t=l[r];if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const o=r.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(o)&&(e[r]=t)}else{const o=typeof t;"string"!==o&&"boolean"!==o&&"number"!==o||(e[camelToDashCase(r)]=t)}return e}),{});t&&(d=t(this.props,d));const p=Object.assign(Object.assign({},d),{"ref":mergeRefs(a,this.setComponentElRef),"style":s});return(0,o.createElement)(e,p,c)}static get"displayName"(){return a}};return r&&(s.contextType=r),((e,r)=>{const forwardRef=(r,t)=>o.createElement(e,Object.assign({},r,{"forwardedRef":t}));return forwardRef.displayName=r,o.forwardRef(forwardRef)})(s,a)},c=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8724":function(e,r,t){var o=t(6354),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,c={},u=null,l=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!i.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":c,"_owner":s.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},"4869":function(e,r,t){e.exports=t(8724)},"9900":function(e,r,t){t.d(r,{"_T":function(){return __rest}});function __rest(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]])}return t}Object.create;Object.create},"4987":function(e,r,t){var o=t(4343),n=t(4869);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":r}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!t&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":t})]})}},"457":function(e,r,t){t.r(r);var o=t(4343),n=t(4987),c=t(4869),a="/pages/global/pages/router/index";r.default=function NavigatorPage(){return(0,c.jsxs)(o.G7,{"className":"components-page","children":[(0,c.jsx)(o.G7,{"className":"components-page__header","children":(0,c.jsx)(n.Z,{"title":"Navigator"})}),(0,c.jsx)(o.G7,{"className":"components-page__body","children":(0,c.jsx)(o.G7,{"className":"components-page__body-example example","children":(0,c.jsx)(o.G7,{"className":"example-body","children":(0,c.jsxs)(o.G7,{"className":"example-body__navigators","children":[(0,c.jsx)(o.C3,{"url":a,"children":(0,c.jsx)(o.G7,{"className":"example-body__navigators-item","children":"跳转到新页面"})}),(0,c.jsx)(o.C3,{"url":a,"openType":"redirect","children":(0,c.jsx)(o.G7,{"className":"example-body__navigators-item","children":"在当前页打开"})}),(0,c.jsx)(o.C3,{"url":"/pages/global/index","openType":"switchTab","children":(0,c.jsx)(o.G7,{"className":"example-body__navigators-item","children":"跳转到tabBar页面"})}),(0,c.jsx)(o.C3,{"url":a,"openType":"reLaunch","children":(0,c.jsx)(o.G7,{"className":"example-body__navigators-item","children":"关闭所有页面"})}),(0,c.jsx)(o.C3,{"delta":1,"openType":"navigateBack","children":(0,c.jsx)(o.G7,{"className":"example-body__navigators-item","children":"返回上一页面"})})]})})})})]})}}}]);