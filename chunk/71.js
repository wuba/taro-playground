/*! For license information please see 71.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"105":function(o,i,e){"use strict";e.r(i),e.d(i,"taro_image_core",(function(){return s}));var n=e(37),a=e(157);e.e(79).then(e.t.bind(null,266,7));var s=function(){function t(o){Object(n.g)(this,o),this.onLoad=Object(n.c)(this,"load",7),this.onError=Object(n.c)(this,"error",7),this.mode="scaleToFill",this.lazyLoad=!1,this.nativeProps={},this.aspectFillMode="width"}return t.prototype.componentDidLoad=function(){var o=this;if(this.lazyLoad){var i=new IntersectionObserver((function(e){e[e.length-1].isIntersecting&&(i.unobserve(o.imgRef),o.imgRef.src=o.src)}),{"rootMargin":"300px 0px"});i.observe(this.imgRef)}},t.prototype.imageOnLoad=function(){var o=this.imgRef,i=o.width,e=o.height,n=o.naturalWidth,a=o.naturalHeight;this.onLoad.emit({"width":i,"height":e}),this.aspectFillMode=n>a?"width":"height"},t.prototype.imageOnError=function(){this.onError.emit()},t.prototype.render=function(){var o,i=this,e=this,s=e.src,h=e.mode,d=void 0===h?"scaleToFill":h,l=e.lazyLoad,c=void 0!==l&&l,m=e.aspectFillMode,u=void 0===m?"width":m,g=e.imageOnLoad,f=e.imageOnError,p=e.nativeProps,b=Object(a.c)({"taro-img__widthfix":"widthFix"===d}),_=Object(a.c)("taro-img__mode-"+d.toLowerCase().replace(/\s/g,""),((o={})["taro-img__mode-aspectfill--"+u]="aspectFill"===d,o));return Object(n.e)(n.a,{"class":b},c?Object(n.e)("img",Object.assign({"ref":function(o){return i.imgRef=o},"class":_,"onLoad":g.bind(this),"onError":f.bind(this)},p)):Object(n.e)("img",Object.assign({"ref":function(o){return i.imgRef=o},"class":_,"src":s,"onLoad":g.bind(this),"onError":f.bind(this)},p)))},t}();s.style='img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;width:auto;height:auto;font-size:0}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-heightfix{height:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{position:absolute;bottom:0;width:100%}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;right:0;height:100%}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'},"157":function(o,i,e){"use strict";(function(o){e.d(i,"a",(function(){return createCommonjsModule})),e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"d",(function(){return getDefaultExportFromCjs}));var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function createCommonjsModule(o,i,e){return o(e={"path":i,"exports":{},"require":function(o,i){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}var a=createCommonjsModule((function(o){!function(){var i={}.hasOwnProperty;function r(){for(var o=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var a=typeof n;if("string"===a||"number"===a)o.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&o.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var h in n)i.call(n,h)&&n[h]&&o.push(h);else o.push(n.toString())}}return o.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r}()}))}).call(this,e(62))}}]);