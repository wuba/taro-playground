/*! For license information please see 21.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"134":function(e,t,r){"use strict";e.exports=r(136)},"135":function(e,t,r){"use strict";r.d(t,"B",(function(){return P})),r.d(t,"f",(function(){return B})),r.d(t,"p",(function(){return S})),r.d(t,"s",(function(){return C})),r.d(t,"y",(function(){return I})),r.d(t,"a",(function(){return k})),r.d(t,"c",(function(){return D})),r.d(t,"d",(function(){return E})),r.d(t,"e",(function(){return A})),r.d(t,"h",(function(){return R})),r.d(t,"i",(function(){return V})),r.d(t,"m",(function(){return M})),r.d(t,"n",(function(){return H})),r.d(t,"o",(function(){return L})),r.d(t,"q",(function(){return T})),r.d(t,"r",(function(){return K})),r.d(t,"u",(function(){return U})),r.d(t,"x",(function(){return F})),r.d(t,"z",(function(){return W})),r.d(t,"j",(function(){return z})),r.d(t,"k",(function(){return J})),r.d(t,"t",(function(){return $})),r.d(t,"v",(function(){return Y})),r.d(t,"w",(function(){return Z})),r.d(t,"b",(function(){return G})),r.d(t,"g",(function(){return Q})),r.d(t,"A",(function(){return X})),r.d(t,"C",(function(){return ee}));var n=r(18),o=r.n(n),c=r(29),a=r.n(c),s=r(52),i=r.n(s),l=r(14),u=r.n(l),d=r(31),f=r.n(d),p=r(32),j=r.n(p),b=r(137),h=r.n(b),O=r(139),m=r.n(O),x=r(141),v=r.n(x),y=r(53),_=r.n(y);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=v()(e);if(t){var o=v()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m()(this,r)}}o.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,n,o){var c=e.ref.current,a=o[r],s=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===i&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,l]),c.addEventListener(i,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(n)if("string"==typeof s)c.style.cssText="";else for(var u in s)updateStyle(c,u,"");for(var d in a)updateStyle(c,d,a[d])}else c.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return n.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat(_()(a),_()(c))).join(" ")}(c,n,o):a}var w=function reactifyWebComponent(e){var t=function(t){h()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return j()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=i()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,c={"ref":this.ref};return o&&(c.dangerouslySetInnerHTML=o),Object(n.createElement)(e,c,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=w("taro-input-core"),N=(o.a.createElement,o.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),o.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),P=w("taro-view-core"),B=w("taro-icon-core"),S=w("taro-progress-core"),C=w("taro-rich-text-core"),I=w("taro-text-core"),k=w("taro-button-core"),D=w("taro-checkbox-core"),E=w("taro-checkbox-group-core"),A=(w("taro-editor-core"),w("taro-form-core")),R=N,V=w("taro-label-core"),M=w("taro-picker-core"),H=w("taro-picker-view-core"),L=w("taro-picker-view-column-core"),T=w("taro-radio-core"),K=w("taro-radio-group-core"),U=w("taro-slider-core"),F=w("taro-switch-core"),W=(w("taro-cover-image-core"),w("taro-textarea-core")),z=(w("taro-cover-view-core"),w("taro-movable-area-core")),J=w("taro-movable-view-core"),$=w("taro-scroll-view-core"),Y=w("taro-swiper-core"),Z=w("taro-swiper-item-core"),G=(w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core")),Q=w("taro-image-core"),X=(w("taro-live-player-core"),w("taro-video-core")),ee=(w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"));w("taro-navigation-bar-core"),n.Fragment,w("taro-custom-wrapper-core")},"136":function(e,t,r){"use strict";r(46);var n=r(18),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),t.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var n,c={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{"$$typeof":o,"type":e,"key":l,"ref":u,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"137":function(e,t,r){var n=r(138);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){var n=r(14).default,o=r(140);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"142":function(e,t,r){"use strict";var n=r(135),o=(r(143),r(134));t.a=function Head(e){var t=e.title,r=e.desc;return Object(o.jsxs)(n.B,{"className":"page-head","children":[Object(o.jsx)(n.B,{"className":"page-head-title","children":t}),Object(o.jsx)(n.B,{"className":"page-head-line"}),!!r&&Object(o.jsx)(n.y,{"className":"page-head-desc","children":r})]})}},"143":function(e,t,r){},"191":function(e,t,r){},"261":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r(2),o=r(3),c=r(13),a=r(10),s=r(11),i=r(4),l=r(18),u=r.n(l),d=r(135),f=r(142),p=(r(191),r(134)),j=function(e){Object(a.a)(PageView,e);var t=Object(s.a)(PageView);function PageView(e){var r;return Object(n.a)(this,PageView),r=t.call(this,e),Object(i.a)(Object(c.a)(r),"setAutoPlay",(function(e){r.setState({"isAutoplay":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setVerticalAutoPlay",(function(e){r.setState({"verticalIsAutoplay":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setCircular",(function(e){r.setState({"isCircular":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setVerticalCircular",(function(e){r.setState({"verticalIsCircular":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setIndicatorDots",(function(e){r.setState({"hasIndicatorDots":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setVerticalIndicatorDots",(function(e){r.setState({"verticalHasIndicatorDots":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setInterval",(function(e){r.setState({"interval":e.detail.value})})),Object(i.a)(Object(c.a)(r),"setDuration",(function(e){console.log(Object(c.a)(r)),r.setState({"duration":e.detail.value})})),r.state={"current":1,"duration":500,"interval":3e3,"isCircular":!0,"verticalIsCircular":!0,"isAutoplay":!0,"verticalIsAutoplay":!1,"hasIndicatorDots":!0,"verticalHasIndicatorDots":!0},r}return Object(o.a)(PageView,[{"key":"render","value":function render(){var e=this.state,t=e.current,r=e.isAutoplay,n=e.duration,o=e.isCircular,c=e.interval,a=e.hasIndicatorDots,s=e.verticalIsCircular,i=e.verticalHasIndicatorDots,l=e.verticalIsAutoplay;return Object(p.jsxs)(d.B,{"className":"components-page","children":[Object(p.jsx)(d.B,{"className":"components-page__header","children":Object(p.jsx)(f.a,{"title":"Swiper"})}),Object(p.jsxs)(d.B,{"className":"components-page__body swiper","children":[Object(p.jsxs)(d.B,{"className":"components-page__body-example example","children":[Object(p.jsx)(d.B,{"className":"example-header","children":"Swiper 横向滑动"}),Object(p.jsxs)(d.B,{"className":"example-body","children":[Object(p.jsxs)(d.v,{"className":"swiper-list","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","current":t,"duration":1,"interval":c,"circular":o,"autoplay":r,"indicatorDots":a,"preMargin":"200","children":[Object(p.jsx)(d.w,{"children":Object(p.jsx)(d.B,{"className":"demo-text-1","children":Object(p.jsx)(d.B,{"className":"demo-text-1-text","children":"A"})})}),Object(p.jsx)(d.w,{"children":Object(p.jsx)(d.B,{"className":"demo-text-2","children":Object(p.jsx)(d.B,{"className":"demo-text-2-text","children":"B"})})}),Object(p.jsx)(d.w,{"children":Object(p.jsx)(d.B,{"className":"demo-text-3","children":Object(p.jsx)(d.B,{"className":"demo-text-3-text","children":"C"})})})]}),Object(p.jsxs)(d.B,{"className":"switch-list","children":[Object(p.jsxs)(d.B,{"className":"switch-list__item","children":[Object(p.jsx)(d.B,{"className":"switch-list__text","children":"指示点"}),Object(p.jsx)(d.x,{"checked":a,"onChange":this.setIndicatorDots})]}),Object(p.jsxs)(d.B,{"className":"switch-list__item","children":[Object(p.jsx)(d.B,{"className":"switch-list__text","children":"自动播放"}),Object(p.jsx)(d.x,{"checked":r,"onChange":this.setAutoPlay})]}),Object(p.jsxs)(d.B,{"className":"switch-list__item","children":[Object(p.jsx)(d.B,{"className":"switch-list__text","children":"循环播放"}),Object(p.jsx)(d.x,{"checked":o,"onChange":this.setCircular})]})]}),Object(p.jsxs)(d.B,{"className":"slider-list","children":[Object(p.jsxs)(d.B,{"className":"slider-list__item","children":[Object(p.jsx)(d.B,{"className":"slider-list__item-header","children":Object(p.jsx)(d.y,{"children":"幻灯片切换时长(ms)"})}),Object(p.jsx)(d.B,{"className":"slider-list__item-body","children":Object(p.jsx)(d.u,{"showValue":!0,"step":1,"min":500,"max":2e3,"value":n,"onChange":this.setDuration})})]}),Object(p.jsxs)(d.B,{"className":"slider-list__item","children":[Object(p.jsx)(d.B,{"className":"slider-list__item-header","children":Object(p.jsx)(d.y,{"children":"自动播放间隔时长(ms)"})}),Object(p.jsx)(d.B,{"className":"slider-list__item-body","children":Object(p.jsx)(d.u,{"showValue":!0,"step":1,"min":2e3,"max":1e4,"value":this.state.interval,"onChange":this.setInterval})})]})]})]})]}),Object(p.jsxs)(d.B,{"className":"components-page__body-example example","children":[Object(p.jsx)(d.B,{"className":"example-header","children":"Swiper 纵向滑动"}),Object(p.jsx)(d.B,{"className":"example-body","children":Object(p.jsxs)(d.v,{"className":"swiper-list test-h","slideMult":"10","indicatorColor":"#999","indicatorActiveColor":"#333","vertical":!0,"circular":s,"indicatorDots":i,"autoplay":l,"preMargin":"80","style":{"backgroundColor":"#fff"},"children":[Object(p.jsx)(d.w,{"children":Object(p.jsx)(d.B,{"className":"demo-text-1"})}),Object(p.jsx)(d.w,{"children":Object(p.jsx)(d.B,{"className":"demo-text-2"})}),Object(p.jsx)(d.w,{"children":Object(p.jsx)(d.B,{"className":"demo-text-3"})})]})}),Object(p.jsxs)(d.B,{"className":"switch-list","children":[Object(p.jsxs)(d.B,{"className":"switch-list__item","children":[Object(p.jsx)(d.B,{"className":"switch-list__text","children":"指示点"}),Object(p.jsx)(d.x,{"checked":i,"onChange":this.setVerticalIndicatorDots})]}),Object(p.jsxs)(d.B,{"className":"switch-list__item","children":[Object(p.jsx)(d.B,{"className":"switch-list__text","children":"自动播放"}),Object(p.jsx)(d.x,{"checked":l,"onChange":this.setVerticalAutoPlay})]}),Object(p.jsxs)(d.B,{"className":"switch-list__item","children":[Object(p.jsx)(d.B,{"className":"switch-list__text","children":"循环播放"}),Object(p.jsx)(d.x,{"checked":s,"onChange":this.setVerticalCircular})]})]})]})]})]})}}]),PageView}(u.a.Component)}}]);