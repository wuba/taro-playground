/*! For license information please see 6540.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6540],{"4343":function(e,t,r){r.d(t,{"zx":function(){return c},"V1":function(){return s},"XZ":function(){return a},"cO":function(){return i},"l0":function(){return l},"JO":function(){return d},"Ee":function(){return u},"II":function(){return p},"__":function(){return f},"ub":function(){return m},"Gt":function(){return x},"C3":function(){return v},"_z":function(){return h},"cW":function(){return _},"Nf":function(){return y},"$o":function(){return b},"Ex":function(){return j},"Y8":function(){return g},"FX":function(){return N},"Ho":function(){return w},"pf":function(){return O},"iR":function(){return E},"tq":function(){return G},"t3":function(){return k},"rs":function(){return C},"xv":function(){return R},"gx":function(){return L},"nk":function(){return S},"G7":function(){return T},"kh":function(){return I}});var n=r(6354);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":r}=e;return Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":r})};var o=r(9900);const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,t,r)=>{const n=t.className||t.class,o=r.className||r.class,c=arrayToMap(e),s=arrayToMap(n?n.split(" "):[]),a=arrayToMap(o?o.split(" "):[]),i=[];return c.forEach((e=>{s.has(e)?(i.push(e),s.delete(e)):a.has(e)||i.push(e)})),s.forEach((e=>i.push(e))),i.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const t="on"+e;let r=t in document;if(!r){const e=document.createElement("div");e.setAttribute(t,"return;"),r="function"==typeof e[t]}return r}},syncEvent=(e,t,r)=>{const n=e.__events||(e.__events={}),o=n[t];o&&e.removeEventListener(t,o),e.addEventListener(t,n[t]=function handler(e){r&&r.call(this,e)})},arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},createComponent_createReactComponent=(e,t,r,c)=>{void 0!==c&&c();const s=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const a=class extends n.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,t,r={})=>{if(e instanceof Element){const n=getClassName(e.classList,t,r);""!==n&&(e.className=n),Object.keys(t).forEach((r=>{if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const n=r.substring(2).toLowerCase();isCoveredByReact(n)||syncEvent(e,n,t[r])}else e[r]=t[r],"string"==typeof t[r]&&e.setAttribute(camelToDashCase(r),t[r])}))}})(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":c,"forwardedRef":s,"style":a,"className":i,"ref":l}=t,d=(0,o._T)(t,["children","forwardedRef","style","className","ref"]);let u=Object.keys(d).reduce(((e,t)=>{const r=d[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const n=t.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(n)&&(e[t]=r)}else{const n=typeof r;"string"!==n&&"boolean"!==n&&"number"!==n||(e[camelToDashCase(t)]=r)}return e}),{});r&&(u=r(this.props,u));const p=Object.assign(Object.assign({},u),{"ref":mergeRefs(s,this.setComponentElRef),"style":a});return(0,n.createElement)(e,p,c)}static get"displayName"(){return s}};return t&&(a.contextType=t),((e,t)=>{const forwardRef=(t,r)=>n.createElement(e,Object.assign({},t,{"forwardedRef":r}));return forwardRef.displayName=t,n.forwardRef(forwardRef)})(a,s)},c=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),i=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),R=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),L=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8724":function(e,t,r){var n=r(6354),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,c={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{"$$typeof":o,"type":e,"key":l,"ref":d,"props":c,"_owner":a.current}}t.Fragment=c,t.jsx=q,t.jsxs=q},"4869":function(e,t,r){e.exports=r(8724)},"9900":function(e,t,r){r.d(t,{"_T":function(){return __rest}});function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}Object.create;Object.create},"4987":function(e,t,r){var n=r(4343),o=r(4869);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,o.jsxs)(n.G7,{"className":"page-head","children":[(0,o.jsx)(n.G7,{"className":"page-head-title","children":t}),(0,o.jsx)(n.G7,{"className":"page-head-line"}),!!r&&(0,o.jsx)(n.xv,{"className":"page-head-desc","children":r})]})}},"6540":function(e,t,r){r.r(t);var n=r(4343),o=r(4987),c=r(4869);t.default=function PageView(){return(0,c.jsxs)(n.G7,{"className":"components-page","children":[(0,c.jsx)(n.G7,{"className":"components-page__header","children":(0,c.jsx)(o.Z,{"title":"Text"})}),(0,c.jsxs)(n.G7,{"className":"components-page__body","children":[(0,c.jsxs)(n.G7,{"className":"components-page__body-example example","children":[(0,c.jsx)(n.G7,{"className":"example-header","children":"H5、小程序通用"}),(0,c.jsxs)(n.G7,{"className":"example-body","children":[(0,c.jsx)(n.G7,{"className":"example-body__text","children":(0,c.jsx)(n.xv,{"selectable":!0,"children":"可选择的文字"})}),(0,c.jsx)(n.G7,{"className":"example-body__text","children":"不可选择的文字"})]})]}),(0,c.jsxs)(n.G7,{"className":"components-page__body-example example","children":[(0,c.jsx)(n.G7,{"className":"example-header","children":"仅工作在小程序"}),(0,c.jsxs)(n.G7,{"className":"example-body","children":[(0,c.jsx)(n.G7,{"className":"example-body__text","children":(0,c.jsx)(n.xv,{"children":"不支持多          空格文字"})}),(0,c.jsx)(n.G7,{"className":"example-body__text","children":(0,c.jsx)(n.xv,{"space":"ensp","children":"多          空格文字(ensp)"})}),(0,c.jsx)(n.G7,{"className":"example-body__text","children":(0,c.jsx)(n.xv,{"space":"nbsp","children":"多          空格文字(nbsp)"})}),(0,c.jsx)(n.G7,{"className":"example-body__text","children":(0,c.jsx)(n.xv,{"children":"不解码文字>"})}),(0,c.jsx)(n.G7,{"className":"example-body__text","children":(0,c.jsx)(n.xv,{"decode":!0,"children":"解码文字>"})})]})]})]})]})}}}]);