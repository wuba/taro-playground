(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"147":function(e,t,c){"use strict";c.d(t,"c",(function(){return r})),c.d(t,"b",(function(){return s})),c.d(t,"d",(function(){return loadPage})),c.d(t,"a",(function(){return hadlePermissionsDeny})),c.d(t,"f",(function(){return throttle})),c.d(t,"e",(function(){return randomColor}));var n=c(25),o=c(17),a=c(305),i=c(150),r=n.a.getEnv()===n.a.ENV_TYPE.WEB,s=n.a.getEnv()===n.a.ENV_TYPE.RN;function loadPage(e){var t=e.url,c=e.title,n=e.right,a=e.open,i=e.certified,s=void 0===i||i;r?window.location.href=t:Object(o.e)({"url":"/pages/webview/index?certified=".concat(s,"&title=").concat(c,"&link=").concat(encodeURIComponent(t)).concat(n?"&right=".concat(n):"").concat(a?"&open=".concat(encodeURIComponent(a)):"")})}function hadlePermissionsDeny(e){var t=e.perssionText;Object(a.d)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&Object(i.b)()}})}function throttle(e,t){var c=0;return function(){var n=Date.now(),o=this,a=arguments;n-c>t&&(e.apply(o,a),c=n)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},"149":function(e,t,c){"use strict";var n=c(138),o=c(147),a=c(137);function JSONTree(e){var t=o.c?JSON.stringify(e.data,void 0,2):JSON.stringify(e.data,void 0,2).replace(/[ ]/g,"&nbsp;");return Object(a.jsx)(n.y,{"decode":!0,"children":t})}t.a=function(e){return e.data&&Object.keys(e.data).length>0?Object(a.jsx)(JSONTree,{"data":e.data}):Object(a.jsx)(n.B,{})}},"150":function(e,t,c){"use strict";c.d(t,"b",(function(){return o})),c.d(t,"a",(function(){return a}));var n=c(9),o=Object(n.i)("openSetting"),a=Object(n.i)("getSetting")},"165":function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(9),o=(Object(n.i)("authorizeForMiniProgram"),Object(n.i)("authorize"))},"240":function(e,t,c){},"306":function(e,t,c){"use strict";c.r(t);var n=c(16),o=c(150),a=c(165),i=c(9),r=c(15),s=Object(i.e)({"name":"getLocation","standardMethod":function getLocationByW3CApi(e){var t,c=Object(i.h)(e);if(!c.flag){var n={"errMsg":"getLocation:fail ".concat(c.msg)};return console.error(n.errMsg),Promise.reject(n)}var o=e.success,a=e.fail,s=e.complete,u=new r.b({"name":"getLocation","success":o,"fail":a,"complete":s}),l={"enableHighAccuracy":e.isHighAccuracy||null!=e.altitude,"timeout":e.highAccuracyExpireTime};return"WGS84"!==(null===(t=e.type)||void 0===t?void 0:t.toUpperCase())?u.fail({"errMsg":"This coordinate system type is not temporarily supported"}):navigator.geolocation?new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){var c={"accuracy":t.coords.accuracy,"altitude":t.coords.altitude,"horizontalAccuracy":t.coords.accuracy,"latitude":t.coords.latitude,"longitude":t.coords.longitude,"speed":t.coords.speed,"verticalAccuracy":t.coords.altitudeAccuracy||0,"errMsg":""};u.success(c,e)}),(function(e){u.fail({"errMsg":e.message},t)}),l)})):u.fail({"errMsg":"The current browser does not support this feature"})}}),u=Object(i.i)("stopLocationUpdate"),l=(Object(i.i)("startLocationUpdateBackground"),Object(i.i)("startLocationUpdate")),d=(Object(i.e)({"name":"openLocation","defaultOptions":{"scale":18}}),Object(i.i)("onLocationChangeError"),Object(i.i)("onLocationChange")),p=(Object(i.i)("offLocationChangeError"),Object(i.i)("offLocationChange")),f=(Object(i.i)("choosePoi"),c(305)),b=c(18),g=c(138),j=c(149),O=c(147),h=(c(240),c(137));t.default=function Index(){var e=Object(b.useState)({}),t=Object(n.a)(e,2),c=t[0],i=t[1],r=Object(b.useState)({}),m=Object(n.a)(r,2),C=m[0],y=m[1],v=Object(b.useState)({}),k=Object(n.a)(v,2),x=k[0],L=k[1];Object(b.useEffect)((function(){Object(o.a)({"success":function success(e){e.authSetting["scope.userLocation"]||Object(a.a)({"scope":"scope.userLocation","fail":function fail(e){"authorize:denied/undetermined"!==e.errMsg&&"authorize:fail"!==e.errMsg||Object(O.a)({"perssionText":"位置"})}})}})}),[]);var T=Object(b.useCallback)((function(e){console.log("回调函数 C1",e),y(e)}),[]),w=Object(b.useCallback)((function(e){console.log("回调函数 C2",e),L(e)}),[]);return Object(h.jsx)(g.B,{"className":"api-page","children":Object(h.jsxs)(g.B,{"className":"api-page__body","children":[Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){s({"success":function success(e){i(e)}}).catch((function(e){"Permissions denied!"===e.errMsg&&Object(O.a)({"perssionText":"位置"})}))},"children":"Taro.getLocation"}),Object(h.jsx)(j.a,{"data":c}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){d(T)},"children":"Taro.onLocationChange(C1)"}),Object(h.jsx)(j.a,{"data":C}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){d(w)},"children":"Taro.onLocationChange(C2)"}),Object(h.jsx)(j.a,{"data":x}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){p(T)},"children":"Taro.offLocationChange(C1)"}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){p(w)},"children":"Taro.offLocationChange(C2)"}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-warning","onClick":function onClick(){p()},"children":"Taro.offLocationChange()"}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){l({})},"children":"Taro.startLocationUpdate()"}),Object(h.jsx)(g.a,{"type":"primary","className":"api-page-btn-error","onClick":function onClick(){u({"success":function success(){return Object(f.e)({"title":"stop 成功","icon":"none"})}})},"children":"Taro.stopLocationUpdate()"})]})})}}}]);