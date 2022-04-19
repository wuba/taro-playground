/*! For license information please see 24.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"134":function(e,t,r){"use strict";e.exports=r(136)},"135":function(e,t,r){"use strict";r.d(t,"B",(function(){return S})),r.d(t,"f",(function(){return E})),r.d(t,"p",(function(){return k})),r.d(t,"s",(function(){return N})),r.d(t,"y",(function(){return T})),r.d(t,"a",(function(){return B})),r.d(t,"c",(function(){return C})),r.d(t,"d",(function(){return R})),r.d(t,"e",(function(){return I})),r.d(t,"h",(function(){return D})),r.d(t,"i",(function(){return A})),r.d(t,"m",(function(){return H})),r.d(t,"n",(function(){return L})),r.d(t,"o",(function(){return M})),r.d(t,"q",(function(){return F})),r.d(t,"r",(function(){return K})),r.d(t,"u",(function(){return U})),r.d(t,"x",(function(){return z})),r.d(t,"z",(function(){return W})),r.d(t,"j",(function(){return J})),r.d(t,"k",(function(){return V})),r.d(t,"t",(function(){return $})),r.d(t,"v",(function(){return Y})),r.d(t,"w",(function(){return Z})),r.d(t,"b",(function(){return G})),r.d(t,"g",(function(){return Q})),r.d(t,"A",(function(){return X})),r.d(t,"C",(function(){return ee}));var o=r(18),n=r.n(o),c=r(29),a=r.n(c),i=r(52),u=r.n(i),s=r(14),f=r.n(s),l=r(31),p=r.n(l),d=r(32),b=r.n(d),y=r(137),v=r.n(y),O=r(139),j=r.n(O),h=r(141),m=r.n(h),x=r(53),_=r.n(x);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return j()(this,r)}}n.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=a;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),c.addEventListener(u,s)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var f in i)updateStyle(c,f,"");for(var l in a)updateStyle(c,l,a[l])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(_()(a),_()(c))).join(" ")}(c,o,n):a}var g=function reactifyWebComponent(e){var t=function(t){v()(Index,t);var r=_createSuper(Index);function Index(e){var t;return p()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(o.createRef)(),t}return b()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===f()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,n=t.dangerouslySetInnerHTML,c={"ref":this.ref};return n&&(c.dangerouslySetInnerHTML=n),Object(o.createElement)(e,c,r)}}]),Index}(n.a.Component);return n.a.forwardRef((function(e,r){return n.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=g("taro-input-core"),P=(n.a.createElement,n.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),n.a.createElement(w,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=g("taro-view-core"),E=g("taro-icon-core"),k=g("taro-progress-core"),N=g("taro-rich-text-core"),T=g("taro-text-core"),B=g("taro-button-core"),C=g("taro-checkbox-core"),R=g("taro-checkbox-group-core"),I=(g("taro-editor-core"),g("taro-form-core")),D=P,A=g("taro-label-core"),H=g("taro-picker-core"),L=g("taro-picker-view-core"),M=g("taro-picker-view-column-core"),F=g("taro-radio-core"),K=g("taro-radio-group-core"),U=g("taro-slider-core"),z=g("taro-switch-core"),W=(g("taro-cover-image-core"),g("taro-textarea-core")),J=(g("taro-cover-view-core"),g("taro-movable-area-core")),V=g("taro-movable-view-core"),$=g("taro-scroll-view-core"),Y=g("taro-swiper-core"),Z=g("taro-swiper-item-core"),G=(g("taro-functional-page-navigator-core"),g("taro-navigator-core"),g("taro-audio-core"),g("taro-camera-core")),Q=g("taro-image-core"),X=(g("taro-live-player-core"),g("taro-video-core")),ee=(g("taro-map-core"),g("taro-canvas-core"),g("taro-ad-core"),g("taro-official-account-core"),g("taro-open-data-core"),g("taro-web-view-core"));g("taro-navigation-bar-core"),o.Fragment,g("taro-custom-wrapper-core")},"136":function(e,t,r){"use strict";r(46);var o=r(18),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,f=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":f,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"137":function(e,t,r){var o=r(138);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){var o=r(14).default,n=r(140);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"140":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"141":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"142":function(e,t,r){"use strict";var o=r(135),n=(r(143),r(134));t.a=function Head(e){var t=e.title,r=e.desc;return Object(n.jsxs)(o.B,{"className":"page-head","children":[Object(n.jsx)(o.B,{"className":"page-head-title","children":t}),Object(n.jsx)(o.B,{"className":"page-head-line"}),!!r&&Object(n.jsx)(o.y,{"className":"page-head-desc","children":r})]})}},"143":function(e,t,r){},"204":function(e,t,r){},"275":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var o=r(2),n=r(3),c=r(13),a=r(10),i=r(11),u=r(4),s=r(18),f=r.n(s),l=r(135),p=r(142),d=(r(204),r(134)),b=function(e){Object(a.a)(PageTextarea,e);var t=Object(i.a)(PageTextarea);function PageTextarea(){var e;Object(o.a)(this,PageTextarea);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),Object(u.a)(Object(c.a)(e),"state",{"value":"初始值"}),Object(u.a)(Object(c.a)(e),"handleClick",(function(){e.setState({"value":"点击了按钮"})})),Object(u.a)(Object(c.a)(e),"blur",(function(){console.log("blur")})),Object(u.a)(Object(c.a)(e),"focus",(function(){console.log("focus")})),Object(u.a)(Object(c.a)(e),"input",(function(t){console.log(t),e.setState({"value":t.target.value})})),Object(u.a)(Object(c.a)(e),"onConfirm",(function(e){console.log(e)})),e}return Object(n.a)(PageTextarea,[{"key":"render","value":function render(){return Object(d.jsxs)(l.B,{"className":"components-page","children":[Object(d.jsx)(l.B,{"className":"components-page__header","children":Object(d.jsx)(p.a,{"title":"Textarea"})}),Object(d.jsxs)(l.B,{"className":"components-page__body","children":[Object(d.jsxs)(l.B,{"className":"components-page__body-example example","children":[Object(d.jsx)(l.B,{"className":"example-header","children":"输入区域高度自适应，不会出现滚动条"}),Object(d.jsxs)(l.B,{"className":"example-body","children":[Object(d.jsx)(l.B,{"className":"example-body__button","children":Object(d.jsx)(l.a,{"size":"mini","type":"primary","onClick":this.handleClick,"children":"点击设置值到第一个Textarea"})}),Object(d.jsx)(l.z,{"onFocus":this.focus,"onBlur":this.blur,"value":this.state.value,"placeholder":"这是一个Textarea","autoHeight":!0,"onInput":this.input})]})]}),Object(d.jsxs)(l.B,{"className":"components-page__body-example example","children":[Object(d.jsx)(l.B,{"className":"example-header","children":"这是一个可以自动聚焦的textarea"}),Object(d.jsx)(l.B,{"className":"example-body","children":Object(d.jsx)(l.z,{"maxlength":-1,"autoFocus":!0,"placeholder":"这是一个Textarea","onConfirm":this.onConfirm})})]})]})]})}}]),PageTextarea}(f.a.Component)}}]);