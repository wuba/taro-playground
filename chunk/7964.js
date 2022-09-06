/*! For license information please see 7964.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7964],{"5403":function(e,t,r){r.d(t,{"ub":function(){return n},"Gt":function(){return a},"_z":function(){return c},"pf":function(){return i},"tq":function(){return l},"t3":function(){return s},"G7":function(){return u},"JO":function(){return f},"Ex":function(){return p},"Ho":function(){return d},"xv":function(){return h},"zx":function(){return m},"XZ":function(){return g},"cO":function(){return v},"l0":function(){return y},"__":function(){return Z},"cW":function(){return x},"Nf":function(){return b},"$o":function(){return w},"Y8":function(){return j},"FX":function(){return S},"iR":function(){return L},"rs":function(){return _},"gx":function(){return O},"V1":function(){return k},"Ee":function(){return D},"nk":function(){return N},"kh":function(){return R}});r(3464);var o=r(2214),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),a=(0,o.Z)("taro-movable-view-core"),c=(0,o.Z)("taro-page-container-core"),i=((0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),l=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),s=(0,o.Z)("taro-swiper-item-core"),u=(0,o.Z)("taro-view-core"),f=(0,o.Z)("taro-icon-core"),p=(0,o.Z)("taro-progress-core"),d=(0,o.Z)("taro-rich-text-core"),h=(0,o.Z)("taro-text-core"),m=(0,o.Z)("taro-button-core"),g=(0,o.Z)("taro-checkbox-core"),v=(0,o.Z)("taro-checkbox-group-core"),y=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),Z=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),x=(0,o.Z)("taro-picker-core"),b=(0,o.Z)("taro-picker-view-core"),w=(0,o.Z)("taro-picker-view-column-core"),j=(0,o.Z)("taro-radio-core"),S=(0,o.Z)("taro-radio-group-core"),L=(0,o.Z)("taro-slider-core"),_=(0,o.Z)("taro-switch-core"),O=(0,o.Z)("taro-textarea-core"),k=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),D=(0,o.Z)("taro-image-core"),N=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),R=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(e,t,r){var o=r(5827),n=r(1760),a=r(517),c=r(6830),i=r(8652),l=r(6014),s=r(3317),u=r(5935),f=r(766),p=r(3464);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=(0,u.Z)(e);if(t){var n=(0,u.Z)(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return(0,s.Z)(this,r)}}p.createElement;var d="taro-scroll-view-core",h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||h.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,o,n){var a=e.ref.current,c=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),t===d){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var l=r.substr(2).toLowerCase(),s=c;return t===d&&"scroll"===l&&(s=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([l,s]),a.addEventListener(l,s)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(o)if("string"==typeof i)a.style.cssText="";else for(var u in i)updateStyle(a,u,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat((0,f.Z)(c),(0,f.Z)(a))).join(" ")}(a,o,n):c}t.Z=function reactifyWebComponent(e){var t=function(t){(0,l.Z)(Index,t);var r=_createSuper(Index);function Index(e){var t;return(0,c.Z)(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=(0,p.createRef)(),t}return(0,i.Z)(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,a.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=(0,n.Z)(t,2),o=r[0],a=r[1];e.ref.current&&e.ref.current.removeEventListener(o,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,p.createElement)(e,n,r)}}]),Index}(p.Component);return p.forwardRef((function(e,r){return p.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))}},"8502":function(e,t,r){var o=r(3464),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},s=null,u=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,o)&&!l.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":u,"props":a,"_owner":i.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},"2922":function(e,t,r){e.exports=r(8502)},"7465":function(e,t,r){var o=r(5403),n=r(2922);t.Z=function Head(e){var t=e.title,r=e.desc;return(0,n.jsxs)(o.G7,{"className":"page-head","children":[(0,n.jsx)(o.G7,{"className":"page-head-title","children":t}),(0,n.jsx)(o.G7,{"className":"page-head-line"}),!!r&&(0,n.jsx)(o.xv,{"className":"page-head-desc","children":r})]})}},"4381":function(e,t,r){var o=r(5403),n=r(2922);t.Z=function Log(e){var t=e.logs;return(0,n.jsx)(o.G7,{"className":"log-container","children":t.map((function(e,t){return(0,n.jsxs)(o.G7,{"className":"log-row","children":[(0,n.jsx)(o.xv,{"className":"log-time","children":e.time}),(0,n.jsx)(o.xv,{"className":"log-text","children":e.text})]},t)}))})}},"7964":function(e,t,r){r.r(t),r.d(t,{"default":function(){return h}});var o=r(766),n=r(6830),a=r(8652),c=r(6014),i=r(295),l=r(3464),s=r(5403),u=r(9042),f=r(7465),p=r(4381),d=r(2922),h=function(e){(0,c.Z)(LifeCycle,e);var t=(0,i.Z)(LifeCycle);function LifeCycle(e){var r;return(0,n.Z)(this,LifeCycle),(r=t.call(this,e)).state={"didShowLog":[],"didHideLog":[],"reachBottomLog":[],"pageScrollLog":[],"pullDownRefreshLog":[]},r}return(0,a.Z)(LifeCycle,[{"key":"componentDidShow","value":function componentDidShow(){var e={"time":(new Date).toLocaleTimeString(),"text":"componentDidShow called."};this.setState({"didShowLog":[].concat((0,o.Z)(this.state.didShowLog),[e])})}},{"key":"componentDidHide","value":function componentDidHide(){var e={"time":(new Date).toLocaleTimeString(),"text":"componentDidHide called."};this.setState({"didHideLog":[].concat((0,o.Z)(this.state.didHideLog),[e])})}},{"key":"onPullDownRefresh","value":function onPullDownRefresh(){var e={"time":(new Date).toLocaleTimeString(),"text":"onPullDownRefresh called."};this.setState({"pullDownRefreshLog":[].concat((0,o.Z)(this.state.pullDownRefreshLog),[e])})}},{"key":"onReachBottom","value":function onReachBottom(){var e={"time":(new Date).toLocaleTimeString(),"text":"onReachBottom called."};this.setState({"reachBottomLog":[].concat((0,o.Z)(this.state.reachBottomLog),[e])})}},{"key":"onPageScroll","value":function onPageScroll(e){var t={"time":(new Date).toLocaleTimeString(),"text":"onPageScroll scrollTop:".concat(e.scrollTop.toFixed(0),".")};this.setState({"pageScrollLog":[].concat((0,o.Z)(this.state.pageScrollLog.slice(-9)),[t])})}},{"key":"handleJump","value":function handleJump(){(0,u.T8)({"url":"/pages/global/pages/lifecycle/page"})}},{"key":"render","value":function render(){var e=this.state,t=e.didShowLog,r=e.didHideLog,o=e.reachBottomLog,n=e.pageScrollLog,a=e.pullDownRefreshLog;return(0,d.jsxs)(s.G7,{"className":"global-page","children":[(0,d.jsx)(s.G7,{"className":"global-page__header","children":(0,d.jsx)(f.Z,{"title":"生命周期"})}),(0,d.jsxs)(s.G7,{"className":"global-page__body","children":[(0,d.jsxs)(s.G7,{"className":"global-page__body-example example","children":[(0,d.jsx)(s.G7,{"className":"example-header","children":"componentDidShow (".concat(t.length,")")}),(0,d.jsx)(p.Z,{"logs":t})]}),(0,d.jsxs)(s.G7,{"className":"global-page__body-example example","children":[(0,d.jsx)(s.G7,{"className":"example-header","children":"componentDidHide (".concat(r.length,")")}),(0,d.jsx)(p.Z,{"logs":r})]}),(0,d.jsxs)(s.G7,{"className":"global-page__body-example example","children":[(0,d.jsx)(s.G7,{"className":"example-header","children":"onPullDownRefresh (".concat(a.length,")")}),(0,d.jsx)(p.Z,{"logs":a})]}),(0,d.jsxs)(s.G7,{"className":"global-page__body-example example","children":[(0,d.jsx)(s.G7,{"className":"example-header","children":"onReachBottom (".concat(o.length,")")}),(0,d.jsx)(p.Z,{"logs":o})]}),(0,d.jsxs)(s.G7,{"className":"global-page__body-example example","children":[(0,d.jsx)(s.G7,{"className":"example-header","children":"onPageScroll (".concat(n.length,")")}),(0,d.jsx)(p.Z,{"logs":n})]}),(0,d.jsx)(s.zx,{"className":"global-page-btn","type":"primary","onClick":this.handleJump.bind(this),"children":"跳转"})]})]})}}]),LifeCycle}(l.Component)}}]);