/*! For license information please see 7105.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[7105],{"5403":function(t,r,i){"use strict";i.d(r,{"ub":function(){return c},"Gt":function(){return a},"_z":function(){return l},"pf":function(){return u},"tq":function(){return h},"t3":function(){return p},"G7":function(){return d},"JO":function(){return v},"Ex":function(){return y},"Ho":function(){return g},"xv":function(){return m},"zx":function(){return x},"XZ":function(){return S},"cO":function(){return _},"l0":function(){return w},"__":function(){return k},"cW":function(){return b},"Nf":function(){return A},"$o":function(){return O},"Y8":function(){return C},"FX":function(){return T},"iR":function(){return z},"rs":function(){return R},"gx":function(){return I},"V1":function(){return Z},"Ee":function(){return L},"nk":function(){return E},"kh":function(){return P}});i(3464);var o=i(2214),c=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),a=(0,o.Z)("taro-movable-view-core"),l=(0,o.Z)("taro-page-container-core"),u=(0,o.Z)("taro-scroll-view-core"),h=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core")),p=(0,o.Z)("taro-swiper-item-core"),d=(0,o.Z)("taro-view-core"),v=(0,o.Z)("taro-icon-core"),y=(0,o.Z)("taro-progress-core"),g=(0,o.Z)("taro-rich-text-core"),m=(0,o.Z)("taro-text-core"),x=(0,o.Z)("taro-button-core"),S=(0,o.Z)("taro-checkbox-core"),_=(0,o.Z)("taro-checkbox-group-core"),w=((0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),k=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core")),b=(0,o.Z)("taro-picker-core"),A=(0,o.Z)("taro-picker-view-core"),O=(0,o.Z)("taro-picker-view-column-core"),C=(0,o.Z)("taro-radio-core"),T=(0,o.Z)("taro-radio-group-core"),z=(0,o.Z)("taro-slider-core"),R=(0,o.Z)("taro-switch-core"),I=(0,o.Z)("taro-textarea-core"),Z=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core")),L=(0,o.Z)("taro-image-core"),E=((0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core")),P=((0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"));(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"2214":function(t,r,i){"use strict";var o=i(5827),c=i(1760),a=i(517),l=i(6830),u=i(8652),h=i(6014),p=i(3317),d=i(5935),v=i(766),y=i(3464);function ownKeys(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.push.apply(i,o)}return i}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(i),!0).forEach((function(r){(0,o.Z)(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ownKeys(Object(i)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))}))}return t}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function _createSuperInternal(){var i,o=(0,d.Z)(t);if(r){var c=(0,d.Z)(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return(0,p.Z)(this,i)}}y.createElement;var g="taro-scroll-view-core",m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(t,r,i){/^--/.test(r)?t.style.setProperty(r,i):"number"!=typeof i||m.test(r)?t.style[r]=i:t.style[r]=i+"px"}function updateProp(t,r,i,o,c){var a=t.ref.current,l=c[i],u=o?o[i]:void 0;if("children"!==i)if("classname"!==i.toLowerCase()){if("style"!==i){if(/^data-.+/.test(i)&&a.setAttribute(i,l),r===g){if("scrollTop"===i)return void(a.mpScrollTop=l);if("scrollLeft"===i)return void(a.mpScrollLeft=l);if("scrollIntoView"===i)return void(a.mpScrollIntoView=l)}if("function"==typeof l&&i.match(/^on[A-Z]/)){var h=i.substr(2).toLowerCase(),p=l;return r===g&&"scroll"===h&&(p=function fn(t){t instanceof CustomEvent&&l.apply(null,Array.from(arguments))}),t.eventHandlers.push([h,p]),a.addEventListener(h,p)}return"string"==typeof l||"number"==typeof l?(a.setAttribute(i,l),void(a[i]=l)):"boolean"==typeof l?l?(a[i]=!0,a.setAttribute(i,l)):(a[i]=!1,a.removeAttribute(i)):void(a[i]=l)}if("string"==typeof l)return void a.setAttribute(i,l);if(!l)return void a.removeAttribute(i);if(o)if("string"==typeof u)a.style.cssText="";else for(var d in u)updateStyle(a,d,"");for(var y in l)updateStyle(a,y,l[y])}else a.className=o?function getClassName(t,r,i){var o=Array.from(t.classList),c=(r.className||r.class||"").split(" "),a=(i.className||i.class||"").split(" "),l=[];return o.forEach((function(t){a.indexOf(t)>-1?(l.push(t),a=a.filter((function(r){return r!==t}))):-1===c.indexOf(t)&&l.push(t)})),(l=[].concat((0,v.Z)(l),(0,v.Z)(a))).join(" ")}(a,o,c):l}r.Z=function reactifyWebComponent(t){var r=function(r){(0,h.Z)(Index,r);var i=_createSuper(Index);function Index(t){var r;return(0,l.Z)(this,Index),(r=i.call(this,t)).eventHandlers=[],r.ref=(0,y.createRef)(),r}return(0,u.Z)(Index,[{"key":"update","value":function update(r){var i=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in i.props||updateProp(i,t,o,r,i.props)})),Object.keys(this.props).forEach((function(o){updateProp(i,t,o,r,i.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(t){this.update(t)}},{"key":"componentDidMount","value":function componentDidMount(){var t=this.props.forwardRef;"function"==typeof t?t(this.ref.current):t&&"object"===(0,a.Z)(t)&&t.hasOwnProperty("current")?t.current=this.ref.current:"string"==typeof t&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var t=this;this.eventHandlers.forEach((function(r){var i=(0,c.Z)(r,2),o=i[0],a=i[1];t.ref.current&&t.ref.current.removeEventListener(o,a)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,i=r.children,o=r.dangerouslySetInnerHTML,c={"ref":this.ref};return o&&(c.dangerouslySetInnerHTML=o),(0,y.createElement)(t,c,i)}}]),Index}(y.Component);return y.forwardRef((function(t,i){return y.createElement(r,_objectSpread(_objectSpread({},t),{},{"forwardRef":i}))}))}},"5136":function(t,r,i){t.exports=i(6612).default,t.exports.default=t.exports},"6612":function(t,r,i){"use strict";i.d(r,{"default":function(){return k}});var o=i(5403),c=i(3464),a=i(7255),l=i(6830),u=i(8652),h=i(8548),p=i(7453),__awaiter=function(t,r,i,o){return new(i||(i=Promise))((function(c,a){function fulfilled(t){try{step(o.next(t))}catch(t){a(t)}}function rejected(t){try{step(o.throw(t))}catch(t){a(t)}}function step(t){t.done?c(t.value):function adopt(t){return t instanceof i?t:new i((function(r){r(t)}))}(t.value).then(fulfilled,rejected)}step((o=o.apply(t,r||[])).next())}))},d={"top":"top","bottom":"bottom","middle":"middle","normal":"alphabetic"},v=function(){function CanvasContext(t,r){(0,l.Z)(this,CanvasContext),this.actions=[],this.canvas=t,this.ctx=r}return(0,u.Z)(CanvasContext,[{"key":"ctx","get":function get(){return this.__raw__||{}},"set":function set(t){this.__raw__=t}},{"key":"emptyActions","value":function emptyActions(){this.actions.length=0}},{"key":"enqueueActions","value":function enqueueActions(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];this.actions.push({"func":t,"args":i})}},{"key":"fillStyle","get":function get(){return this.ctx.fillStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"font","get":function get(){return this.ctx.font},"set":function set(t){this.ctx.font=t}},{"key":"globalAlpha","get":function get(){return this.ctx.globalAlpha},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalAlpha=t}))}},{"key":"globalCompositeOperation","get":function get(){return this.ctx.globalCompositeOperation},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.globalCompositeOperation=t}))}},{"key":"lineCap","get":function get(){return this.ctx.lineCap},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineCap=t}))}},{"key":"lineDashOffset","get":function get(){return this.ctx.lineDashOffset},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineDashOffset=t}))}},{"key":"lineJoin","get":function get(){return this.ctx.lineJoin},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineJoin=t}))}},{"key":"lineWidth","get":function get(){return this.ctx.lineWidth},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.lineWidth=t}))}},{"key":"miterLimit","get":function get(){return this.ctx.miterLimit},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.miterLimit=t}))}},{"key":"shadowBlur","get":function get(){return this.ctx.shadowBlur},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowBlur=t}))}},{"key":"shadowColor","get":function get(){return this.ctx.shadowColor},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowColor=t}))}},{"key":"shadowOffsetX","get":function get(){return this.ctx.shadowOffsetX},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetX=t}))}},{"key":"shadowOffsetY","get":function get(){return this.ctx.shadowOffsetY},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.shadowOffsetY=t}))}},{"key":"strokeStyle","get":function get(){return this.ctx.strokeStyle},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"textAlign","get":function get(){return this.ctx.textAlign},"set":function set(t){this.ctx.textAlign=t}},{"key":"textBaseline","get":function get(){return this.ctx.textBaseline},"set":function set(t){this.ctx.textBaseline=t}},{"key":"direction","get":function get(){return this.ctx.direction},"set":function set(t){this.ctx.direction=t}},{"key":"imageSmoothingEnabled","get":function get(){return this.ctx.imageSmoothingEnabled},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingEnabled=t}))}},{"key":"imageSmoothingQuality","get":function get(){return this.ctx.imageSmoothingQuality},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.imageSmoothingQuality=t}))}},{"key":"filter","get":function get(){return this.ctx.filter},"set":function set(t){var r=this;this.enqueueActions((function(){r.ctx.filter=t}))}},{"key":"arc","value":function arc(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.arc].concat(r))}},{"key":"arcTo","value":function arcTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.arcTo].concat(r))}},{"key":"beginPath","value":function beginPath(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.beginPath].concat(r))}},{"key":"bezierCurveTo","value":function bezierCurveTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.bezierCurveTo].concat(r))}},{"key":"clearRect","value":function clearRect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.clearRect].concat(r))}},{"key":"clip","value":function clip(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.clip].concat(r))}},{"key":"closePath","value":function closePath(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.closePath].concat(r))}},{"key":"createPattern","value":function createPattern(t,r){return this.createPattern(t,r)}},{"key":"draw","value":function draw(t,r){return __awaiter(this,void 0,void 0,(0,h.Z)().mark((function _callee(){var i,o,c,a,l;return(0,h.Z)().wrap((function _callee$(u){for(;;)switch(u.prev=u.next){case 0:u.prev=0,t||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=(0,p.Z)(this.actions),u.prev=3,i.s();case 5:if((o=i.n()).done){u.next=11;break}return c=o.value,a=c.func,l=c.args,u.next=9,a.apply(this.ctx,l);case 9:u.next=5;break;case 11:u.next=16;break;case 13:u.prev=13,u.t0=u.catch(3),i.e(u.t0);case 16:return u.prev=16,i.f(),u.finish(16);case 19:this.emptyActions(),r&&r(),u.next=26;break;case 23:throw u.prev=23,u.t1=u.catch(0),{"errMsg":u.t1.message};case 26:case"end":return u.stop()}}),_callee,this,[[0,23],[3,13,16,19]])})))}},{"key":"drawImage","value":function drawImage(t){for(var r=this,i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];this.enqueueActions((function(){var i;if("string"==typeof t){var c=new Image;return c.src=t,new Promise((function(t,i){c.onload=function(){var i;(i=r.ctx).drawImage.apply(i,[c].concat(o)),t()},c.onerror=i}))}(i=r.ctx).drawImage.apply(i,[t].concat(o))}))}},{"key":"fill","value":function fill(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.fill].concat(r))}},{"key":"fillRect","value":function fillRect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.fillRect].concat(r))}},{"key":"fillText","value":function fillText(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.fillText].concat(r))}},{"key":"lineTo","value":function lineTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.lineTo].concat(r))}},{"key":"moveTo","value":function moveTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.moveTo].concat(r))}},{"key":"quadraticCurveTo","value":function quadraticCurveTo(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.quadraticCurveTo].concat(r))}},{"key":"rect","value":function rect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.rect].concat(r))}},{"key":"restore","value":function restore(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.restore].concat(r))}},{"key":"rotate","value":function rotate(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.rotate].concat(r))}},{"key":"save","value":function save(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.save].concat(r))}},{"key":"scale","value":function scale(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.scale].concat(r))}},{"key":"setFillStyle","value":function setFillStyle(t){var r=this;this.enqueueActions((function(){r.ctx.fillStyle=t}))}},{"key":"setFontSize","value":function setFontSize(t){this.font="".concat(t,"px")}},{"key":"setGlobalAlpha","value":function setGlobalAlpha(t){this.globalAlpha=t}},{"key":"setLineCap","value":function setLineCap(t){this.lineCap=t}},{"key":"setLineDash","value":function setLineDash(t,r){var i=this;this.enqueueActions((function(){i.ctx.setLineDash(t),i.ctx.lineDashOffset=r}))}},{"key":"setLineJoin","value":function setLineJoin(t){this.lineJoin=t}},{"key":"setLineWidth","value":function setLineWidth(t){this.lineWidth=t}},{"key":"setMiterLimit","value":function setMiterLimit(t){this.miterLimit=t}},{"key":"setShadow","value":function setShadow(t,r,i,o){var c=this;this.enqueueActions((function(){c.ctx.shadowOffsetX=t,c.ctx.shadowOffsetY=r,c.ctx.shadowColor=o,c.ctx.shadowBlur=i}))}},{"key":"setStrokeStyle","value":function setStrokeStyle(t){var r=this;this.enqueueActions((function(){r.ctx.strokeStyle=t}))}},{"key":"setTextAlign","value":function setTextAlign(t){this.textAlign=t}},{"key":"setTextBaseline","value":function setTextBaseline(t){this.textBaseline=d[t]||"alphabetic"}},{"key":"setTransform","value":function setTransform(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.setTransform].concat(r))}},{"key":"stroke","value":function stroke(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.stroke].concat(r))}},{"key":"strokeRect","value":function strokeRect(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.strokeRect].concat(r))}},{"key":"strokeText","value":function strokeText(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.strokeText].concat(r))}},{"key":"transform","value":function transform(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.transform].concat(r))}},{"key":"translate","value":function translate(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return this.enqueueActions.apply(this,[this.ctx.translate].concat(r))}},{"key":"measureText","value":function measureText(t){return this.ctx.measureText(t)}},{"key":"createCircularGradient","value":function createCircularGradient(t,r,i){return this.ctx.createRadialGradient(t,r,0,t,r,i)}},{"key":"createLinearGradient","value":function createLinearGradient(t,r,i,o){return this.createLinearGradient(t,r,i,o)}}]),CanvasContext}(),y=function(){function NodesRef(t,r,i){(0,l.Z)(this,NodesRef),this._component=r._component,this._selector=t,this._selectorQuery=r,this._single=i}return(0,u.Z)(NodesRef,[{"key":"context","value":function context(t){var r=this._selector,i=this._component,o=this._single,c=this._selectorQuery;return c._push(r,i,o,{"context":!0},t),c}},{"key":"node","value":function node(t){var r=this._selector,i=this._component,o=this._single,c=this._selectorQuery;return c._push(r,i,o,{"nodeCanvasType":!0,"node":!0},t),c}},{"key":"boundingClientRect","value":function boundingClientRect(t){var r=this._selector,i=this._component,o=this._single,c=this._selectorQuery;return c._push(r,i,o,{"id":!0,"dataset":!0,"rect":!0,"size":!0},t),c}},{"key":"scrollOffset","value":function scrollOffset(t){var r=this._selector,i=this._component,o=this._single,c=this._selectorQuery;return c._push(r,i,o,{"id":!0,"dataset":!0,"scrollOffset":!0},t),c}},{"key":"fields","value":function fields(t,r){var i=this._selector,o=this._component,c=this._single,a=this._selectorQuery,l=t.id,u=t.dataset,h=t.rect,p=t.size,d=t.scrollOffset,v=t.properties,y=void 0===v?[]:v,g=t.computedStyle,m=void 0===g?[]:g;return a._push(i,o,c,{"id":l,"dataset":u,"rect":h,"size":p,"scrollOffset":d,"properties":y,"computedStyle":m},r),a}}]),NodesRef}();function filter(t,r,i){if(!r)return null;var o=".taro_page"===i,c=t.id,a=t.dataset,l=t.rect,u=t.size,h=t.scrollOffset,p=t.properties,d=void 0===p?[]:p,y=t.computedStyle,g=void 0===y?[]:y,m=t.nodeCanvasType,x=t.node,S=t.context,_={};if(m&&x){var w=r.tagName;if(_.node={"id":r.id,"$taroElement":r},/^taro-canvas-core/i.test(w)){var k=r.type||"";_.nodeCanvasType=k;var b=r.getElementsByTagName("canvas")[0];/^(2d|webgl)/i.test(k)&&b?_.node=b:_.node=null}else _.nodeCanvasType="",_.node=r;return _}if(!S){if(c&&(_.id=r.id),a&&(_.dataset=Object.assign({},r.dataset)),l||u){var A=r.getBoundingClientRect(),O=A.left,C=A.right,T=A.top,z=A.bottom,R=A.width,I=A.height;l&&(o?(_.left=0,_.right=0,_.top=0,_.bottom=0):(_.left=O,_.right=C,_.top=T,_.bottom=z)),u&&(o?(_.width=r.clientWidth,_.height=r.clientHeight):(_.width=R,_.height=I))}if(h&&(_.scrollLeft=r.scrollLeft,_.scrollTop=r.scrollTop),d.length&&d.forEach((function(t){var i=r.getAttribute(t);i&&(_[t]=i)})),g.length){var Z=window.getComputedStyle(r);g.forEach((function(t){var r=Z.getPropertyValue(t)||Z[t];r&&(_[t]=r)}))}return _}var L=r.tagName;if(/^taro-video-core/i.test(L))return{"context":r};if(/^taro-canvas-core/i.test(L)){var E=r.type||"2d",P=null==r?void 0:r.querySelector("canvas"),W=null==P?void 0:P.getContext(E);return{"context":new v(P,W)}}/^taro-live-player-core/i.test(L)?console.error("暂时不支持通过 NodesRef.context 获取 LivePlayerContext"):/^taro-editor-core/i.test(L)?console.error("暂时不支持通过 NodesRef.context 获取 EditorContext"):/^taro-map-core/i.test(L)&&console.error("暂时不支持通过 NodesRef.context 获取 MapContext")}var g=function(){function SelectorQuery(){(0,l.Z)(this,SelectorQuery),this._defaultWebviewId=null,this._webviewId=null,this._queue=[],this._queueCb=[],this._component}return(0,u.Z)(SelectorQuery,[{"key":"in","value":function _in(t){return this._component=t,this}},{"key":"select","value":function select(t){return"string"==typeof t&&(t=t.replace(">>>",">")),new y(t,this,!0)}},{"key":"selectAll","value":function selectAll(t){return"string"==typeof t&&(t=t.replace(">>>",">")),new y(t,this,!1)}},{"key":"selectViewport","value":function selectViewport(){return new y(".taro_page",this,!0)}},{"key":"exec","value":function exec(t){var r=this;return function queryBat(t,r){var i=[];t.forEach((function(t){var r,o=t.selector,c=t.single,l=t.fields,u=t.component,h=null!==u&&(0,a.f4)(u)||document,p=!1;if(h!==document){var d=null===(r=h.parentNode)||void 0===r?void 0:r.querySelectorAll(o);if(d)for(var v=0,y=d.length;v<y;++v)if(h===d[v]){p=!0;break}}if(c){var g=!0===p?h:h.querySelector(o);i.push(filter(l,g,o))}else{var m=h.querySelectorAll(o),x=[];!0===p&&x.push(h);for(var S=0,_=m.length;S<_;++S)x.push(m[S]);i.push(x.map((function(t){return filter(l,t)})))}})),r(i)}(this._queue,(function(i){var o=r._queueCb;i.forEach((function(t,i){var c=o[i];"function"==typeof c&&c.call(r,t)})),"function"==typeof t&&t.call(r,i)})),this}},{"key":"_push","value":function _push(t,r,i,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._queue.push({"component":r,"selector":t,"single":i,"fields":o}),this._queueCb.push(c)}}]),SelectorQuery}();(0,a.tA)("createIntersectionObserver");let m=null;function getRTLOffsetType(t=!1){if(null===m||t){const t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";const i=document.createElement("div"),o=i.style;return o.width="100px",o.height="100px",t.appendChild(i),document.body.appendChild(t),t.scrollLeft>0?m="positive-descending":(t.scrollLeft=1,m=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),m}return m}function areInputsEqual(t,r){if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i]!==r[i])return!1;return!0}function memoizeOne(t,r){let i;void 0===r&&(r=areInputsEqual);let o,c=[],a=!1;return function memoized(){const l=[];for(let t=0;t<arguments.length;t++)l[t]=arguments[t];return a&&i===this&&r(l,c)||(o=t.apply(this,l),a=!0,i=this,c=l),o}}var x=i(801);function cancelTimeout(t){(0,x.Wx)(t.id)}const defaultItemKey=t=>t;let S=0;function isHorizontalFunc({"direction":t,"layout":r}){return"horizontal"===t||"horizontal"===r}function isRtlFunc({"direction":t}){return"rtl"===t}function getRectSize(t,r=(()=>{}),i=(()=>{})){(function createSelectorQuery(){return new g})().select(t).boundingClientRect((t=>{t?r(t):i()})).exec()}function createListComponent({"getItemOffset":t,"getEstimatedTotalSize":r,"getItemSize":i,"getOffsetForIndexAndAlignment":o,"getStartIndexForOffset":a,"getStopIndexForStartIndex":l,"initInstanceProps":u,"shouldResetStyleCacheOnItemSizeChange":h,"validateProps":p}){let d,v;return v=d=class List extends c.PureComponent{"constructor"(o){super(o),this._instanceProps=u(this.props,this),this._outerRef=void 0,this._resetIsScrollingTimeoutId=null,this.state={"id":this.props.id||"virtual-list-"+S++,"instance":this,"isScrolling":!1,"scrollDirection":"forward","scrollOffset":"number"==typeof this.props.initialScrollOffset?this.props.initialScrollOffset:0,"scrollUpdateWasRequested":!1,"sizeList":[]},this.props.unlimitedSize&&(this.state.sizeList=new Array(this.props.itemCount).fill(-1)),this.field={"scrollLeft":0,"scrollTop":0,"scrollHeight":0,"scrollWidth":0,"clientHeight":0,"clientWidth":0},this._callOnItemsRendered=void 0,this._callOnItemsRendered=memoizeOne(((t,r,i,o)=>this.props.onItemsRendered({"overscanStartIndex":t,"overscanStopIndex":r,"visibleStartIndex":i,"visibleStopIndex":o}))),this._callOnScroll=void 0,this._callOnScroll=memoizeOne(((t,r,i,o)=>this.props.onScroll({"scrollDirection":t,"scrollOffset":r,"scrollUpdateWasRequested":i,"detail":o}))),this._getSize=void 0,this._getSize=t=>"number"==typeof t&&t>=0?t:this.props.itemSize,this._getSizeUploadSync=void 0,this._getSizeUploadSync=(t,r)=>{const i=`#${this.state.id}-${t}`;return new Promise((o=>{const success=({"width":i,"height":c})=>{const{"sizeList":a}=this.state,l=r?i:c;l!==a[t]&&(a[t]=this._getSize(l),this.setState({"sizeList":[...a]},(()=>{o(this._getSize(l))})))},fail=()=>{const[r,o]=this._getRangeToRender();t>=r&&t<=o&&setTimeout((()=>{getRectSize(i,success,fail)}),100)};getRectSize(i,success,fail)}))},this._getSizeUpload=(t,r)=>{this._getSizeUploadSync(t,r);const{"sizeList":i}=this.state;return this._getSize(i[t])},this._getCountSize=void 0,this._getCountSize=(t,r)=>{if(!t.unlimitedSize)return t.itemSize*r;const{"sizeList":i}=this.state;return i.slice(0,r).reduce(((t,r)=>t+this._getSize(r)),0)},this._getSizeCount=void 0,this._getSizeCount=(t,r)=>{if(0===r)return 0;if(!t.unlimitedSize)return Math.min(t.itemCount-1,Math.floor(r/t.itemSize));let i=0;const{"sizeList":o}=this.state;return o.reduce(((t,o)=>(o=this._getSize(o),i<r?(i+=o,++t):t)),0)-1},this._getStyleValue=t=>"number"==typeof t?t+"px":null==t?"":t,this._getItemStyle=void 0,this._getItemStyle=r=>{const{"direction":o,"itemSize":c,"layout":a}=this.props,l=this._getItemStyleCache(h&&c,h&&a,h&&o);let u;const p=t(this.props,r,this),d=i(this.props,r,this),v=isHorizontalFunc(this.props),y=isRtlFunc(this.props);if(l.hasOwnProperty(r))u=l[r],v?(u.width=d,y?u.right=p:u.left=p):(u.height=d,u.top=p);else{const t=v?p:0;l[r]=u={"position":"absolute","left":y?void 0:t,"right":y?t:void 0,"top":v?0:p,"height":v?"100%":d,"width":v?d:"100%"}}for(const t in u)u.hasOwnProperty(t)&&(u[t]=this._getStyleValue(u[t]));return u},this._getItemStyleCache=void 0,this._getItemStyleCache=memoizeOne((()=>({}))),this._onScrollHorizontal=t=>{const{"clientWidth":i,"scrollTop":o,"scrollLeft":c,"scrollHeight":a,"scrollWidth":l}=t.currentTarget;this.field.scrollHeight=a,this.field.scrollWidth=r(this.props,this),this.field.scrollTop=o,this.field.scrollLeft=c,this.field.clientHeight=a,this.field.clientWidth=i,this.setState((t=>{if(t.scrollOffset===c)return null;let r=c;if(isRtlFunc(this.props))switch(getRTLOffsetType()){case"negative":r=-c;break;case"positive-descending":r=l-i-c}return r=Math.max(0,Math.min(r,l-i)),this.field.scrollWidth=r,{"isScrolling":!0,"scrollDirection":t.scrollOffset<c?"forward":"backward","scrollOffset":r,"scrollUpdateWasRequested":!1}}),this._resetIsScrollingDebounced)},this._onScrollVertical=t=>{const{"clientHeight":i,"scrollHeight":o,"scrollWidth":c,"scrollTop":a,"scrollLeft":l}=t.currentTarget;this.setState((t=>{const u=this.field.scrollTop-a;if(t.scrollOffset===a||this.field.diffOffset===-u)return null;const h=Math.max(0,Math.min(a,o-i));return this.field.scrollHeight=r(this.props,this),this.field.scrollWidth=c,this.field.scrollTop=h,this.field.scrollLeft=l,this.field.clientHeight=i,this.field.clientWidth=c,this.field.diffOffset=u,{"isScrolling":!0,"scrollDirection":t.scrollOffset<h?"forward":"backward","scrollOffset":h,"scrollUpdateWasRequested":!1}}),this._resetIsScrollingDebounced)},this._outerRefSetter=t=>{const{"outerRef":r}=this.props;this._outerRef=t,"function"==typeof r?r(t):null!=r&&"object"==typeof r&&r.hasOwnProperty("current")&&(r.current=t)},this._resetIsScrollingDebounced=()=>{null!==this._resetIsScrollingTimeoutId&&cancelTimeout(this._resetIsScrollingTimeoutId),this._resetIsScrollingTimeoutId=function requestTimeout(t,r){const i=(0,x.zO)(),o={"id":(0,x.U7)((function tick(){(0,x.zO)()-i>=r?t.call(null):o.id=(0,x.U7)(tick)}))};return o}(this._resetIsScrolling,200)},this._resetIsScrolling=()=>{this._resetIsScrollingTimeoutId=null,this.setState({"isScrolling":!1},(()=>{this._getItemStyleCache(-1,null)}))}}static"getDerivedStateFromProps"(t,r){return p(t,r),null}"scrollTo"(t){t=Math.max(0,t),this.setState((r=>r.scrollOffset===t?null:{"scrollDirection":r.scrollOffset<t?"forward":"backward","scrollOffset":t,"scrollUpdateWasRequested":!0}),this._resetIsScrollingDebounced)}"scrollToItem"(t,r="auto"){const{"itemCount":i}=this.props,{"scrollOffset":c}=this.state;t=Math.max(0,Math.min(t,i-1)),this.scrollTo(o(this.props,this.state.id,t,r,c,this))}"componentDidMount"(){const{"initialScrollOffset":t}=this.props;if("number"==typeof t&&null!=this._outerRef){const r=this._outerRef;isHorizontalFunc(this.props)?r.scrollLeft=t:r.scrollTop=t}this._callPropsCallbacks()}"componentDidUpdate"(t,r){const{"scrollOffset":i,"scrollUpdateWasRequested":o}=this.state;if(o&&null!=this._outerRef){const t=this._outerRef;if(isHorizontalFunc(this.props))if(isRtlFunc(this.props))switch(getRTLOffsetType()){case"negative":t.scrollLeft=-i;break;case"positive-ascending":t.scrollLeft=i;break;default:const{"clientWidth":r,"scrollWidth":o}=t;t.scrollLeft=o-r-i}else t.scrollLeft=i;else t.scrollTop=i}this._callPropsCallbacks(t,r),setTimeout((()=>{const[t,r]=this._getRangeToRender(),i=isHorizontalFunc(this.props);for(let o=t;o<=r;o++)this._getSizeUploadSync(o,i)}),0)}"componentWillUnmount"(){null!==this._resetIsScrollingTimeoutId&&cancelTimeout(this._resetIsScrollingTimeoutId)}"render"(){const{"children":o,"className":a,"direction":l,"height":u,"innerRef":h,"innerElementType":p,"innerTagName":d,"itemElementType":v,"itemTagName":y,"itemCount":g,"itemData":m,"itemKey":x=defaultItemKey,"layout":S,"outerElementType":_,"outerTagName":w,"style":k,"useIsScrolling":b,"width":A,"position":O,"renderTop":C,"renderBottom":T,...z}=this.props,{"id":R,"isScrolling":I,"scrollOffset":Z,"scrollUpdateWasRequested":L}=this.state,E=isHorizontalFunc(this.props),P=E?this._onScrollHorizontal:this._onScrollVertical,[W,D]=this._getRangeToRender(),M=[];if(g>0)for(let t=W;t<=D;t++){const r=x(t,m);let a;if("relative"===O){const r=i(this.props,t,this);a={"height":this._getStyleValue(E?"100%":r),"width":this._getStyleValue(E?r:"100%")}}else a=this._getItemStyle(t);M.push((0,c.createElement)(v||y||"div",{"key":r,"style":a},(0,c.createElement)(o,{"id":`${R}-${t}`,"data":m,"index":t,"isScrolling":b?I:void 0})))}const H=r(this.props,this),j={...z,"id":R,"className":a,"onScroll":P,"ref":this._outerRefSetter,"layout":S,"style":{"position":"relative","height":this._getStyleValue(u),"width":this._getStyleValue(A),"overflow":"auto","WebkitOverflowScrolling":"touch","willChange":"transform","direction":l,...k}};if(L&&(E?j.scrollLeft=Z:j.scrollTop=Z),"relative"===O){const r=t(this.props,W,this);return(0,c.createElement)(_||w||"div",j,C,(0,c.createElement)(v||y||"div",{"key":`${R}-pre`,"id":`${R}-pre`,"style":{"height":E?"100%":this._getStyleValue(r),"width":E?this._getStyleValue(r):"100%"}}),(0,c.createElement)(p||d||"div",{"ref":h,"key":`${R}-inner`,"id":`${R}-inner`,"style":{"pointerEvents":I?"none":"auto"}},M),T)}return(0,c.createElement)(_||w||"div",j,C,(0,c.createElement)(p||d||"div",{"ref":h,"key":`${R}-inner`,"id":`${R}-inner`,"style":{"height":this._getStyleValue(E?"100%":H),"pointerEvents":I?"none":"auto","width":this._getStyleValue(E?H:"100%")}},M),T)}"_callPropsCallbacks"(t,r){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0&&!t&&t.itemCount!==this.props.itemCount){const[t,r,i,o]=this._getRangeToRender();this._callOnItemsRendered(t,r,i,o)}"function"==typeof this.props.onScroll&&(r&&r.scrollDirection===this.state.scrollDirection&&r.scrollOffset===this.state.scrollOffset&&r.scrollUpdateWasRequested===this.state.scrollUpdateWasRequested||this._callOnScroll(this.state.scrollDirection,this.state.scrollOffset,this.state.scrollUpdateWasRequested,this.field))}"_getRangeToRender"(){const{"itemCount":t,"overscanCount":r}=this.props,{"isScrolling":i,"scrollDirection":o,"scrollOffset":c}=this.state;if(0===t)return[0,0,0,0];const u=a(this.props,c,this),h=l(this.props,c,u,this),p=i&&"backward"!==o?1:Math.max(1,r),d=i&&"forward"!==o?1:Math.max(1,r);return[Math.max(0,u-p),Math.max(0,Math.min(t-1,h+d)),u,h]}},d.defaultProps={"direction":"ltr","itemData":void 0,"layout":"vertical","overscanCount":2,"useIsScrolling":!1},v}var _=createListComponent({"getItemOffset":(t,r,i)=>t.unlimitedSize?i._getCountSize(t,r):r*t.itemSize,"getItemSize":(t,r,i)=>t.unlimitedSize?i._getSizeUpload(r,isHorizontalFunc(t)):t.itemSize,"getEstimatedTotalSize":(t,r)=>r._getCountSize(t,t.itemCount),"getOffsetForIndexAndAlignment":(t,r,i,o,c,a)=>{const{"height":l,"width":u}=t,{"sizeList":h}=a.state,p=isHorizontalFunc(t)?u:l,d=a._getSize(h[i]),v=Math.max(0,a._getCountSize(t,t.itemCount)-p),y=Math.min(v,a._getCountSize(t,i)),g=Math.max(0,a._getCountSize(t,i)-p+d);switch("smart"===o&&(o=c>=g-p&&c<=y+p?"auto":"center"),o){case"start":return y;case"end":return g;case"center":{const t=Math.round(g+(y-g)/2);return t<Math.ceil(p/2)?0:t>v+Math.floor(p/2)?v:t}default:return c>=g&&c<=y?c:c<g?g:y}},"getStartIndexForOffset":(t,r,i)=>Math.max(0,i._getSizeCount(t,r)-1),"getStopIndexForStartIndex"(t,r,i,o){const{"height":c,"itemCount":a,"itemSize":l,"width":u}=t,h=isHorizontalFunc(t)?u:c,p=o._getCountSize(t,i);if(!t.unlimitedSize){const t=Math.ceil((h+r-p)/l);return Math.max(i,Math.min(a-1,i+t-1))}return Math.max(i,Math.min(a-1,o._getSizeCount(t,h+r)))},"initInstanceProps"(){},"shouldResetStyleCacheOnItemSizeChange":!0,"validateProps":(t,r)=>{const{"itemCount":i,"itemSize":o}=t,{"sizeList":c}=r;if(i>c.length){const t=new Array(i-c.length).fill(-1);c.push(...t)}else i<c.length&&(c.length=i)}});function convertPxToInt(t){if("string"==typeof t){const r=t.toLowerCase();if(/px$/.test(r))return Number(r.replace(/px$/,""))}return t}const w=c.forwardRef(((t,r)=>{const{"style":i,"onScroll":a,"onScrollNative":l,"layout":u,...h}=t;return c.createElement(o.pf,{"ref":r,"style":i,"scrollY":"vertical"===u,"scrollX":"horizontal"===u,"onScroll":t=>{a({...t,"currentTarget":{...t.detail,"clientWidth":convertPxToInt(i.width),"clientHeight":convertPxToInt(i.height)}}),"function"==typeof l&&l(t)},...h})}));var k=c.forwardRef(((t,r)=>{const{"direction":i="ltr","innerElementType":a=o.G7,"itemElementType":l=o.G7,"initialScrollOffset":u=0,"overscanCount":h=1,...p}=t;return c.createElement(_,{"ref":r,...p,"itemElementType":l,"innerElementType":a,"outerElementType":w,"direction":i,"initialScrollOffset":u,"overscanCount":h})}))},"8502":function(t,r,i){"use strict";i(4744);var o=i(3464),c=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;c=a("react.element"),r.Fragment=a("react.fragment")}var l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,h={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(t,r,i){var o,a={},p=null,d=null;for(o in void 0!==i&&(p=""+i),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(d=r.ref),r)u.call(r,o)&&!h.hasOwnProperty(o)&&(a[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{"$$typeof":c,"type":t,"key":p,"ref":d,"props":a,"_owner":l.current}}r.jsx=q,r.jsxs=q},"2922":function(t,r,i){"use strict";t.exports=i(8502)},"7465":function(t,r,i){"use strict";var o=i(5403),c=i(2922);r.Z=function Head(t){var r=t.title,i=t.desc;return(0,c.jsxs)(o.G7,{"className":"page-head","children":[(0,c.jsx)(o.G7,{"className":"page-head-title","children":r}),(0,c.jsx)(o.G7,{"className":"page-head-line"}),!!i&&(0,c.jsx)(o.xv,{"className":"page-head-desc","children":i})]})}},"7105":function(t,r,i){"use strict";i.r(r),i.d(r,{"default":function(){return S}});var o=i(6830),c=i(8652),a=i(1729),l=i(6014),u=i(295),h=i(5827),p=i(3464),d=i(5403),v=i(5136),y=i.n(v)(),g=i(7465),m=i(2922);function buildData(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array(100).fill(0).map((function(r,i){return i+t}))}var x=function Row(t){var r=t.index,i=t.style,o=t.data;return(0,m.jsxs)(d.G7,{"className":"list-item ".concat(r%2?"ListItemOdd":"ListItemEven"),"style":i,"children":["Row ",r,": ",o[r]]})},S=function(t){(0,l.Z)(PageView,t);var r=(0,u.Z)(PageView);function PageView(){var t;(0,o.Z)(this,PageView);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return t=r.call.apply(r,[this].concat(c)),(0,h.Z)((0,a.Z)(t),"state",{"data":buildData(0)}),(0,h.Z)((0,a.Z)(t),"onScroll",(function(t){console.log(t)})),(0,h.Z)((0,a.Z)(t),"onScrollNative",(function(t){console.log(t)})),t}return(0,c.Z)(PageView,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"render","value":function render(){var t=this.state.data,r=t.length;return(0,m.jsxs)(d.G7,{"className":"components-page","children":[(0,m.jsx)(d.G7,{"className":"components-page__header","children":(0,m.jsx)(g.Z,{"title":"VirtualList"})}),(0,m.jsx)(y,{"height":500,"width":"100%","itemData":t,"itemCount":r,"itemSize":100,"overscanCount":5,"scrollWithAnimation":!0,"children":x})]})}}]),PageView}(p.Component)},"7453":function(t,r,i){"use strict";i.d(r,{"Z":function(){return _createForOfIteratorHelper}});var o=i(4787);function _createForOfIteratorHelper(t,r){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,o.Z)(t))||r&&t&&"number"==typeof t.length){i&&(t=i);var c=0,a=function F(){};return{"s":a,"n":function n(){return c>=t.length?{"done":!0}:{"done":!1,"value":t[c++]}},"e":function e(t){throw t},"f":a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,h=!1;return{"s":function s(){i=i.call(t)},"n":function n(){var t=i.next();return u=t.done,t},"e":function e(t){h=!0,l=t},"f":function f(){try{u||null==i.return||i.return()}finally{if(h)throw l}}}}}}]);