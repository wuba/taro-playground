/*! For license information please see 74.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[74],{"5403":function(e,r,t){t.d(r,{"ub":function(){return n},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return i},"tq":function(){return s},"t3":function(){return l},"G7":function(){return u},"JO":function(){return p},"Ex":function(){return f},"Ho":function(){return d},"xv":function(){return m},"zx":function(){return v},"XZ":function(){return h},"cO":function(){return y},"l0":function(){return x},"__":function(){return Z},"cW":function(){return b},"Nf":function(){return j},"$o":function(){return g},"Y8":function(){return w},"FX":function(){return _},"iR":function(){return O},"rs":function(){return N},"gx":function(){return k},"V1":function(){return S},"Ee":function(){return E},"nk":function(){return G},"kh":function(){return R}});t(3464);var o=t(2214),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),a=(0,o.Z)("taro-movable-view-core"),c=(0,o.Z)("taro-page-container-core"),i=((0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),s=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),l=(0,o.Z)("taro-swiper-item-core"),u=(0,o.Z)("taro-view-core"),p=(0,o.Z)("taro-icon-core"),f=(0,o.Z)("taro-progress-core"),d=(0,o.Z)("taro-rich-text-core"),m=(0,o.Z)("taro-text-core"),v=(0,o.Z)("taro-button-core"),h=(0,o.Z)("taro-checkbox-core"),y=(0,o.Z)("taro-checkbox-group-core"),x=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),Z=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),b=(0,o.Z)("taro-picker-core"),j=(0,o.Z)("taro-picker-view-core"),g=(0,o.Z)("taro-picker-view-column-core"),w=(0,o.Z)("taro-radio-core"),_=(0,o.Z)("taro-radio-group-core"),O=(0,o.Z)("taro-slider-core"),N=(0,o.Z)("taro-switch-core"),k=(0,o.Z)("taro-textarea-core"),S=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),E=(0,o.Z)("taro-image-core"),G=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),R=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(e,r,t){var o=t(5827),n=t(1760),a=t(517),c=t(6830),i=t(8652),s=t(6014),l=t(3317),u=t(5935),p=t(766),f=t(3464);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,o=(0,u.Z)(e);if(r){var n=(0,u.Z)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,l.Z)(this,t)}}f.createElement;var d="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||m.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,o,n){var a=e.ref.current,c=n[t],i=o?o[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&a.setAttribute(t,c),r===d){if("scrollTop"===t)return void(a.mpScrollTop=c);if("scrollLeft"===t)return void(a.mpScrollLeft=c);if("scrollIntoView"===t)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),l=c;return r===d&&"scroll"===s&&(l=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,l]),a.addEventListener(s,l)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(t,c),void(a[t]=c)):"boolean"==typeof c?c?(a[t]=!0,a.setAttribute(t,c)):(a[t]=!1,a.removeAttribute(t)):void(a[t]=c)}if("string"==typeof c)return void a.setAttribute(t,c);if(!c)return void a.removeAttribute(t);if(o)if("string"==typeof i)a.style.cssText="";else for(var u in i)updateStyle(a,u,"");for(var f in c)updateStyle(a,f,c[f])}else a.className=o?function getClassName(e,r,t){var o=Array.from(e.classList),n=(r.className||r.class||"").split(" "),a=(t.className||t.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(r){return r!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,p.Z)(c),(0,p.Z)(a))).join(" ")}(a,o,n):c}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,c.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,f.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in t.props||updateProp(t,e,o,r,t.props)})),Object.keys(this.props).forEach((function(o){updateProp(t,e,o,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,n.Z)(r,2),o=t[0],a=t[1];e.ref.current&&e.ref.current.removeEventListener(o,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,o=r.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,f.createElement)(e,n,t)}}]),Index}(f.Component);return f.forwardRef((function(e,t){return f.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"8502":function(e,r,t){var o=t(3464),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,a={},l=null,u=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,o)&&!s.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":a,"_owner":i.current}}r.Fragment=a,r.jsx=q,r.jsxs=q},"2922":function(e,r,t){e.exports=t(8502)},"7465":function(e,r,t){var o=t(5403),n=t(2922);r.Z=function Head(e){var r=e.title,t=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":r}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!t&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":t})]})}},"5069":function(e,r,t){t.r(r);var o=t(1760),n=t(3464),a=t(5403),c=t(7465),i=t(2922);r.default=function PageSlider(){var e=(0,n.useState)(0),r=(0,o.Z)(e,2),t=r[0],s=r[1];return(0,i.jsxs)(a.G7,{"className":"components-page","children":[(0,i.jsx)(a.G7,{"className":"components-page__header","children":(0,i.jsx)(c.Z,{"title":"Slider"})}),(0,i.jsxs)(a.G7,{"className":"components-page__body","children":[(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"设置step"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":10,"value":50})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"显示当前的value"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":1,"value":50,"showValue":!0})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"设置最小/最大值"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":1,"value":100,"showValue":!0,"min":50,"max":200})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"UI设置"}),(0,i.jsx)(a.G7,{"className":"example-body","children":(0,i.jsx)(a.iR,{"step":1,"value":50,"activeColor":"#6190E8","backgroundColor":"red","blockColor":"#333","blockSize":20})})]}),(0,i.jsxs)(a.G7,{"className":"components-page__body-example example","children":[(0,i.jsx)(a.G7,{"className":"example-header","children":"数据绑定"}),(0,i.jsxs)(a.G7,{"className":"example-body","children":[(0,i.jsx)(a.iR,{"step":1,"value":t,"onChanging":function handleChaning(e){null!=e&&e.detail.value&&s(null==e?void 0:e.detail.value)},"showValue":!0,"min":0,"max":100}),(0,i.jsx)(a.zx,{"type":"primary","onClick":function onClickSet(){var e=Math.floor(100*Math.random());s(e)},"children":"Set Value"})]})]})]})]})}}}]);