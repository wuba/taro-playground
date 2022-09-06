/*! For license information please see 6523.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[6523],{"5403":function(e,t,r){r.d(t,{"ub":function(){return n},"Gt":function(){return c},"_z":function(){return a},"pf":function(){return i},"tq":function(){return u},"t3":function(){return s},"G7":function(){return l},"JO":function(){return f},"Ex":function(){return d},"Ho":function(){return p},"xv":function(){return v},"zx":function(){return m},"XZ":function(){return h},"cO":function(){return y},"l0":function(){return Z},"__":function(){return g},"cW":function(){return b},"Nf":function(){return w},"$o":function(){return x},"Y8":function(){return j},"FX":function(){return O},"iR":function(){return _},"rs":function(){return E},"gx":function(){return k},"V1":function(){return P},"Ee":function(){return S},"nk":function(){return A},"kh":function(){return N}});r(3464);var o=r(2214),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),c=(0,o.Z)("taro-movable-view-core"),a=(0,o.Z)("taro-page-container-core"),i=((0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),u=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),s=(0,o.Z)("taro-swiper-item-core"),l=(0,o.Z)("taro-view-core"),f=(0,o.Z)("taro-icon-core"),d=(0,o.Z)("taro-progress-core"),p=(0,o.Z)("taro-rich-text-core"),v=(0,o.Z)("taro-text-core"),m=(0,o.Z)("taro-button-core"),h=(0,o.Z)("taro-checkbox-core"),y=(0,o.Z)("taro-checkbox-group-core"),Z=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),g=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),b=(0,o.Z)("taro-picker-core"),w=(0,o.Z)("taro-picker-view-core"),x=(0,o.Z)("taro-picker-view-column-core"),j=(0,o.Z)("taro-radio-core"),O=(0,o.Z)("taro-radio-group-core"),_=(0,o.Z)("taro-slider-core"),E=(0,o.Z)("taro-switch-core"),k=(0,o.Z)("taro-textarea-core"),P=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),S=(0,o.Z)("taro-image-core"),A=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),N=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(e,t,r){var o=r(5827),n=r(1760),c=r(517),a=r(6830),i=r(8652),u=r(6014),s=r(3317),l=r(5935),f=r(766),d=r(3464);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=(0,l.Z)(e);if(t){var n=(0,l.Z)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,s.Z)(this,r)}}d.createElement;var p="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||v.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),t===p){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return t===p&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var d in a)updateStyle(c,d,a[d])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat((0,f.Z)(a),(0,f.Z)(c))).join(" ")}(c,o,n):a}t.Z=function reactifyWebComponent(e){var t=function(t){(0,u.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,a.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,d.createRef)(),t}return(0,i.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),o=r[0],c=r[1];e.ref.current&&e.ref.current.removeEventListener(o,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,d.createElement)(e,n,r)}}]),Index}(d.Component);return d.forwardRef((function(e,r){return d.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"6360":function(e,t,r){r.d(t,{"Au":function(){return c},"Dk":function(){return a}});var o=r(7255),n=r(4388),c=((0,o.tA)("saveVideoToPhotosAlbum"),(0,o.tA)("openVideoEditor"),(0,o.tA)("getVideoInfo"),function createVideoContext(e,t){var r=(0,o.f4)(t);return null==r?void 0:r.querySelector("taro-video-core[id=".concat(e,"]"))}),a=((0,o.tA)("compressVideo"),function chooseVideo(e){var t=(0,o.jc)(e);if(!t.flag){var r={"errMsg":"chooseVideo:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.success,a=e.fail,i=e.complete,u=new n.N({"name":"chooseVideo","success":c,"fail":a,"complete":i}),s={"tempFilePath":"","duration":0,"size":0,"height":0,"width":0},l=document.createElement("input");return l.setAttribute("type","file"),l.setAttribute("multiple","multiple"),l.setAttribute("accept","video/*"),l.setAttribute("style","position: fixed; top: -4000px; left: -3000px; z-index: -300;"),document.body.appendChild(l),new Promise((function(e){var t=document.createEvent("MouseEvents");t.initEvent("click",!0,!0),l.dispatchEvent(t),l.onchange=function(t){var r,o=null===(r=t.target.files)||void 0===r?void 0:r[0],n=new FileReader;n.onload=function(t){var r,o=document.createElement("video"),n=null===(r=t.target)||void 0===r?void 0:r.result;o.preload="metadata",o.src=n,o.onloadedmetadata=function(){return s.tempFilePath=n,s.duration=o.duration,s.size=t.total,s.height=o.videoHeight,s.width=o.videoHeight,u.success(s,e)}},o&&n.readAsDataURL(o)}})).finally((function(){document.body.removeChild(l)}))});(0,o.tA)("chooseMedia")},"8502":function(e,t,r){var o=r(3464),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,l=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":l,"props":c,"_owner":i.current}}t.Fragment=c,t.jsx=q,t.jsxs=q},"2922":function(e,t,r){e.exports=r(8502)},"7465":function(e,t,r){var o=r(5403),n=r(2922);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":t}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!r&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":r})]})}},"6523":function(e,t,r){r.r(t),r.d(t,{"default":function(){return v}});var o=r(6830),n=r(8652),c=r(1729),a=r(6014),i=r(295),u=r(5827),s=r(3464),l=r(6360),f=r(5403),d=r(7465),p=r(2922),v=function(e){(0,a.Z)(PageView,e);var t=(0,i.Z)(PageView);function PageView(){var e;(0,o.Z)(this,PageView);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,u.Z)((0,c.Z)(e),"videoContext",void 0),(0,u.Z)((0,c.Z)(e),"onLoadedMetaData",(function(e){console.log(e)})),(0,u.Z)((0,c.Z)(e),"fullScreen",(function(){var t;null===(t=e.videoContext)||void 0===t||t.requestFullScreen()})),e}return(0,n.Z)(PageView,[{"key":"render","value":function render(){var e=this;return(0,p.jsxs)(f.G7,{"className":"components-page","children":[(0,p.jsx)(f.G7,{"className":"components-page__header","children":(0,p.jsx)(d.Z,{"title":"Video"})}),(0,p.jsx)(f.G7,{"className":"components-page__body","children":(0,p.jsx)(f.G7,{"className":"components-page__body-example example","children":(0,p.jsxs)(f.G7,{"className":"example-body","children":[(0,p.jsx)(f.nk,{"id":"video","onLoadedMetaData":this.onLoadedMetaData,"src":"https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4","controls":!0,"autoplay":!0,"initialTime":0,"loop":!1,"muted":!1,"onLoad":function onLoad(){e.videoContext=(0,l.Au)("video")}}),(0,p.jsx)(f.zx,{"type":"primary","onClick":this.fullScreen,"children":"进入全屏"})]})})})]})}}]),PageView}(s.Component)}}]);