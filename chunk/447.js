/*! For license information please see 447.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[447],{"4343":function(e,r,o){o.d(r,{"zx":function(){return s},"V1":function(){return a},"XZ":function(){return c},"cO":function(){return i},"l0":function(){return l},"JO":function(){return d},"Ee":function(){return u},"II":function(){return f},"__":function(){return p},"ub":function(){return m},"Gt":function(){return x},"C3":function(){return h},"_z":function(){return b},"cW":function(){return v},"Nf":function(){return y},"$o":function(){return g},"Ex":function(){return _},"Y8":function(){return j},"FX":function(){return N},"Ho":function(){return G},"pf":function(){return w},"iR":function(){return O},"tq":function(){return E},"t3":function(){return k},"rs":function(){return z},"xv":function(){return C},"gx":function(){return R},"nk":function(){return S},"G7":function(){return L},"kh":function(){return T}});var t=o(6354);const helper_manipulatePropsFunction=(e,r={})=>{const{"dangerouslySetInnerHTML":o}=e;return Object.assign(Object.assign({},r),{"dangerouslySetInnerHTML":o})};var n=o(9900);const mergeRefs=(...e)=>r=>{e.forEach((e=>{((e,r)=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})(e,r)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,r,o)=>{const t=r.className||r.class,n=o.className||o.class,s=arrayToMap(e),a=arrayToMap(t?t.split(" "):[]),c=arrayToMap(n?n.split(" "):[]),i=[];return s.forEach((e=>{a.has(e)?(i.push(e),a.delete(e)):c.has(e)||i.push(e)})),a.forEach((e=>i.push(e))),i.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const r="on"+e;let o=r in document;if(!o){const e=document.createElement("div");e.setAttribute(r,"return;"),o="function"==typeof e[r]}return o}},syncEvent=(e,r,o)=>{const t=e.__events||(e.__events={}),n=t[r];n&&e.removeEventListener(r,n),e.addEventListener(r,t[r]=function handler(e){o&&o.call(this,e)})},arrayToMap=e=>{const r=new Map;return e.forEach((e=>r.set(e,e))),r},createComponent_createReactComponent=(e,r,o,s)=>{void 0!==s&&s();const a=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const c=class extends t.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,r,o={})=>{if(e instanceof Element){const t=getClassName(e.classList,r,o);""!==t&&(e.className=t),Object.keys(r).forEach((o=>{if("children"!==o&&"style"!==o&&"ref"!==o&&"class"!==o&&"className"!==o&&"forwardedRef"!==o)if(0===o.indexOf("on")&&o[2]===o[2].toUpperCase()){const t=o.substring(2).toLowerCase();isCoveredByReact(t)||syncEvent(e,t,r[o])}else e[o]=r[o],"string"==typeof r[o]&&e.setAttribute(camelToDashCase(o),r[o])}))}})(this.componentEl,this.props,e)}"render"(){const r=this.props,{"children":s,"forwardedRef":a,"style":c,"className":i,"ref":l}=r,d=(0,n._T)(r,["children","forwardedRef","style","className","ref"]);let u=Object.keys(d).reduce(((e,r)=>{const o=d[r];if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const t=r.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(t)&&(e[r]=o)}else{const t=typeof o;"string"!==t&&"boolean"!==t&&"number"!==t||(e[camelToDashCase(r)]=o)}return e}),{});o&&(u=o(this.props,u));const f=Object.assign(Object.assign({},u),{"ref":mergeRefs(a,this.setComponentElRef),"style":c});return(0,t.createElement)(e,f,s)}static get"displayName"(){return a}};return r&&(c.contextType=r),((e,r)=>{const forwardRef=(r,o)=>t.createElement(e,Object.assign({},r,{"forwardedRef":o}));return forwardRef.displayName=r,t.forwardRef(forwardRef)})(c,a)},s=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),z=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8724":function(e,r,o){var t=o(6354),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,o){var t,s={},l=null,d=null;for(t in void 0!==o&&(l=""+o),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)a.call(r,t)&&!i.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{"$$typeof":n,"type":e,"key":l,"ref":d,"props":s,"_owner":c.current}}r.Fragment=s,r.jsx=q,r.jsxs=q},"4869":function(e,r,o){e.exports=o(8724)},"9900":function(e,r,o){o.d(r,{"_T":function(){return __rest}});function __rest(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o}Object.create;Object.create},"4987":function(e,r,o){var t=o(4343),n=o(4869);r.Z=function Head(e){var r=e.title,o=e.desc;return(0,n.jsxs)(t.G7,{"className":"page-head","children":[(0,n.jsx)(t.G7,{"className":"page-head-title","children":r}),(0,n.jsx)(t.G7,{"className":"page-head-line"}),!!o&&(0,n.jsx)(t.xv,{"className":"page-head-desc","children":o})]})}},"447":function(e,r,o){o.r(r),o.d(r,{"default":function(){return Size}});var t=o(4343),n=o(8741),s=o(4987),a=o(4869);function Size(){return(0,a.jsxs)(t.G7,{"className":"global-page","children":[(0,a.jsx)(t.G7,{"className":"global-page__header","children":(0,a.jsx)(s.Z,{"title":"unit"})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsx)(t.G7,{"className":"example-body","children":(0,a.jsx)(t.G7,{"children":"font-size: inherit"})})})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"className":"fs30px","children":"font-size: 30px"}),(0,a.jsx)(t.G7,{"className":"fs60px","children":"font-size: 60px"})]})})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"className":"fs15-px","children":"font-size: 15PX"}),(0,a.jsx)(t.G7,{"className":"fs30-px","children":"font-size: 30PX"})]})})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"className":"fs1rem","children":"font-size: 1rem"}),(0,a.jsx)(t.G7,{"className":"fs2rem","children":"font-size: 2rem"})]})})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"style":{"fontSize":(0,n.uk)(30)},"children":"pxTransform(30)"}),(0,a.jsx)(t.G7,{"style":{"fontSize":(0,n.uk)(60)},"children":"pxTransform(60)"})]})})}),(0,a.jsx)(t.G7,{"className":"global-page__body","children":(0,a.jsx)(t.G7,{"className":"global-page__body-example example","children":(0,a.jsxs)(t.G7,{"className":"example-body","children":[(0,a.jsx)(t.G7,{"className":"w-30","children":"width: 30%"}),(0,a.jsx)(t.G7,{"className":"w-60","children":"width: 60%"})]})})})]})}}}]);