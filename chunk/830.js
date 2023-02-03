/*! For license information please see 830.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[830],{"4343":function(e,t,r){r.d(t,{"zx":function(){return i},"V1":function(){return a},"XZ":function(){return o},"cO":function(){return c},"l0":function(){return l},"JO":function(){return d},"Ee":function(){return u},"II":function(){return h},"__":function(){return m},"ub":function(){return f},"Gt":function(){return p},"C3":function(){return x},"_z":function(){return v},"cW":function(){return j},"Nf":function(){return y},"$o":function(){return _},"Ex":function(){return w},"Y8":function(){return N},"FX":function(){return g},"Ho":function(){return G},"pf":function(){return b},"iR":function(){return C},"tq":function(){return O},"t3":function(){return I},"rs":function(){return Z},"xv":function(){return E},"gx":function(){return k},"nk":function(){return S},"G7":function(){return D},"kh":function(){return A}});var s=r(6354);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":r}=e;return Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":r})};var n=r(9900);const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,t,r)=>{const s=t.className||t.class,n=r.className||r.class,i=arrayToMap(e),a=arrayToMap(s?s.split(" "):[]),o=arrayToMap(n?n.split(" "):[]),c=[];return i.forEach((e=>{a.has(e)?(c.push(e),a.delete(e)):o.has(e)||c.push(e)})),a.forEach((e=>c.push(e))),c.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const t="on"+e;let r=t in document;if(!r){const e=document.createElement("div");e.setAttribute(t,"return;"),r="function"==typeof e[t]}return r}},syncEvent=(e,t,r)=>{const s=e.__events||(e.__events={}),n=s[t];n&&e.removeEventListener(t,n),e.addEventListener(t,s[t]=function handler(e){r&&r.call(this,e)})},arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},createComponent_createReactComponent=(e,t,r,i)=>{void 0!==i&&i();const a=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const o=class extends s.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,t,r={})=>{if(e instanceof Element){const s=getClassName(e.classList,t,r);""!==s&&(e.className=s),Object.keys(t).forEach((r=>{if("children"!==r&&"style"!==r&&"ref"!==r&&"class"!==r&&"className"!==r&&"forwardedRef"!==r)if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){const s=r.substring(2).toLowerCase();isCoveredByReact(s)||syncEvent(e,s,t[r])}else e[r]=t[r],"string"==typeof t[r]&&e.setAttribute(camelToDashCase(r),t[r])}))}})(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":i,"forwardedRef":a,"style":o,"className":c,"ref":l}=t,d=(0,n._T)(t,["children","forwardedRef","style","className","ref"]);let u=Object.keys(d).reduce(((e,t)=>{const r=d[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const s=t.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(s)&&(e[t]=r)}else{const s=typeof r;"string"!==s&&"boolean"!==s&&"number"!==s||(e[camelToDashCase(t)]=r)}return e}),{});r&&(u=r(this.props,u));const h=Object.assign(Object.assign({},u),{"ref":mergeRefs(a,this.setComponentElRef),"style":o});return(0,s.createElement)(e,h,i)}static get"displayName"(){return a}};return t&&(o.contextType=t),((e,t)=>{const forwardRef=(t,r)=>s.createElement(e,Object.assign({},t,{"forwardedRef":r}));return forwardRef.displayName=t,s.forwardRef(forwardRef)})(o,a)},i=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),o=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),_=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),G=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),O=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),Z=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),D=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),A=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"8724":function(e,t,r){var s=r(6354),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var s,i={},l=null,d=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{"$$typeof":n,"type":e,"key":l,"ref":d,"props":i,"_owner":o.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},"4869":function(e,t,r){e.exports=r(8724)},"9900":function(e,t,r){r.d(t,{"_T":function(){return __rest}});function __rest(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]])}return r}Object.create;Object.create},"4987":function(e,t,r){var s=r(4343),n=r(4869);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,n.jsxs)(s.G7,{"className":"page-head","children":[(0,n.jsx)(s.G7,{"className":"page-head-title","children":t}),(0,n.jsx)(s.G7,{"className":"page-head-line"}),!!r&&(0,n.jsx)(s.xv,{"className":"page-head-desc","children":r})]})}},"830":function(e,t,r){r.r(t),r.d(t,{"default":function(){return m}});var s=r(1323),n=r(4194),i=r(9207),a=r(5483),o=r(1603),c=r(6746),l=r(6354),d=r(4343),u=r(4987),h=r(4869),m=function(e){(0,a.Z)(PageView,e);var t=(0,o.Z)(PageView);function PageView(e){var r;return(0,s.Z)(this,PageView),r=t.call(this,e),(0,c.Z)((0,i.Z)(r),"setAutoPlay",(function(e){r.setState({"isAutoplay":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setVerticalAutoPlay",(function(e){r.setState({"verticalIsAutoplay":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setCircular",(function(e){r.setState({"isCircular":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setVerticalCircular",(function(e){r.setState({"verticalIsCircular":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setIndicatorDots",(function(e){r.setState({"hasIndicatorDots":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setVerticalIndicatorDots",(function(e){r.setState({"verticalHasIndicatorDots":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setInterval",(function(e){r.setState({"interval":e.detail.value})})),(0,c.Z)((0,i.Z)(r),"setDuration",(function(e){console.log((0,i.Z)(r)),r.setState({"duration":e.detail.value})})),r.state={"current":1,"duration":500,"interval":3e3,"isCircular":!0,"verticalIsCircular":!0,"isAutoplay":!0,"verticalIsAutoplay":!1,"hasIndicatorDots":!0,"verticalHasIndicatorDots":!0},r}return(0,n.Z)(PageView,[{"key":"render","value":function render(){var e=this.state,t=e.current,r=e.isAutoplay,s=e.duration,n=e.isCircular,i=e.interval,a=e.hasIndicatorDots,o=e.verticalIsCircular,c=e.verticalHasIndicatorDots,l=e.verticalIsAutoplay;return(0,h.jsxs)(d.G7,{"className":"components-page","children":[(0,h.jsx)(d.G7,{"className":"components-page__header","children":(0,h.jsx)(u.Z,{"title":"Swiper"})}),(0,h.jsxs)(d.G7,{"className":"components-page__body swiper","children":[(0,h.jsxs)(d.G7,{"className":"components-page__body-example example","children":[(0,h.jsx)(d.G7,{"className":"example-header","children":"Swiper 横向滑动"}),(0,h.jsxs)(d.G7,{"className":"example-body","children":[(0,h.jsxs)(d.tq,{"className":"swiper-list","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","current":t,"duration":1,"interval":i,"circular":n,"autoplay":r,"indicatorDots":a,"preMargin":"200","children":[(0,h.jsx)(d.t3,{"children":(0,h.jsx)(d.G7,{"className":"demo-text-1","children":(0,h.jsx)(d.G7,{"className":"demo-text-1-text","children":"A"})})}),(0,h.jsx)(d.t3,{"children":(0,h.jsx)(d.G7,{"className":"demo-text-2","children":(0,h.jsx)(d.G7,{"className":"demo-text-2-text","children":"B"})})}),(0,h.jsx)(d.t3,{"children":(0,h.jsx)(d.G7,{"className":"demo-text-3","children":(0,h.jsx)(d.G7,{"className":"demo-text-3-text","children":"C"})})})]}),(0,h.jsxs)(d.G7,{"className":"switch-list","children":[(0,h.jsxs)(d.G7,{"className":"switch-list__item","children":[(0,h.jsx)(d.G7,{"className":"switch-list__text","children":"指示点"}),(0,h.jsx)(d.rs,{"checked":a,"onChange":this.setIndicatorDots})]}),(0,h.jsxs)(d.G7,{"className":"switch-list__item","children":[(0,h.jsx)(d.G7,{"className":"switch-list__text","children":"自动播放"}),(0,h.jsx)(d.rs,{"checked":r,"onChange":this.setAutoPlay})]}),(0,h.jsxs)(d.G7,{"className":"switch-list__item","children":[(0,h.jsx)(d.G7,{"className":"switch-list__text","children":"循环播放"}),(0,h.jsx)(d.rs,{"checked":n,"onChange":this.setCircular})]})]}),(0,h.jsxs)(d.G7,{"className":"slider-list","children":[(0,h.jsxs)(d.G7,{"className":"slider-list__item","children":[(0,h.jsx)(d.G7,{"className":"slider-list__item-header","children":(0,h.jsx)(d.xv,{"children":"幻灯片切换时长(ms)"})}),(0,h.jsx)(d.G7,{"className":"slider-list__item-body","children":(0,h.jsx)(d.iR,{"showValue":!0,"step":1,"min":500,"max":2e3,"value":s,"onChange":this.setDuration})})]}),(0,h.jsxs)(d.G7,{"className":"slider-list__item","children":[(0,h.jsx)(d.G7,{"className":"slider-list__item-header","children":(0,h.jsx)(d.xv,{"children":"自动播放间隔时长(ms)"})}),(0,h.jsx)(d.G7,{"className":"slider-list__item-body","children":(0,h.jsx)(d.iR,{"showValue":!0,"step":1,"min":2e3,"max":1e4,"value":this.state.interval,"onChange":this.setInterval})})]})]})]})]}),(0,h.jsxs)(d.G7,{"className":"components-page__body-example example","children":[(0,h.jsx)(d.G7,{"className":"example-header","children":"Swiper 纵向滑动"}),(0,h.jsx)(d.G7,{"className":"example-body","children":(0,h.jsxs)(d.tq,{"className":"swiper-list test-h","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","vertical":!0,"circular":o,"indicatorDots":c,"autoplay":l,"preMargin":"80","style":{"backgroundColor":"#fff"},"children":[(0,h.jsx)(d.t3,{"children":(0,h.jsx)(d.G7,{"className":"demo-text-1"})}),(0,h.jsx)(d.t3,{"children":(0,h.jsx)(d.G7,{"className":"demo-text-2"})}),(0,h.jsx)(d.t3,{"children":(0,h.jsx)(d.G7,{"className":"demo-text-3"})})]})}),(0,h.jsxs)(d.G7,{"className":"switch-list","children":[(0,h.jsxs)(d.G7,{"className":"switch-list__item","children":[(0,h.jsx)(d.G7,{"className":"switch-list__text","children":"指示点"}),(0,h.jsx)(d.rs,{"checked":c,"onChange":this.setVerticalIndicatorDots})]}),(0,h.jsxs)(d.G7,{"className":"switch-list__item","children":[(0,h.jsx)(d.G7,{"className":"switch-list__text","children":"自动播放"}),(0,h.jsx)(d.rs,{"checked":l,"onChange":this.setVerticalAutoPlay})]}),(0,h.jsxs)(d.G7,{"className":"switch-list__item","children":[(0,h.jsx)(d.G7,{"className":"switch-list__text","children":"循环播放"}),(0,h.jsx)(d.rs,{"checked":o,"onChange":this.setVerticalCircular})]})]})]})]})]})}}]),PageView}(l.Component)}}]);