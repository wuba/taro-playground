(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"156":function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"f",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"a",(function(){return b}));var c=r(6),a=r(9),n=r(15);function getItem(e){var t;try{t=JSON.parse(localStorage.getItem(e)||"")}catch(e){}return t&&"object"===Object(c.a)(t)&&t.hasOwnProperty("data")?{"result":!0,"data":t.data}:{"result":!1}}var o=function setStorageSync(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if("string"==typeof e){var r=Object(c.a)(t),n={};n="symbol"===r?{"data":""}:{"data":t},localStorage.setItem(e,JSON.stringify(n))}else console.error(Object(a.b)({"name":"setStorage","correct":"String","wrong":e}))},s=function setStorage(e){var t=Object(a.h)(e);if(!t.flag){var r={"errMsg":"setStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.key,s=e.data,i=e.success,l=e.fail,u=e.complete,g=new n.b({"name":"setStorage","success":i,"fail":l,"complete":u});return"string"!=typeof c?g.fail({"errMsg":Object(a.b)({"para":"key","correct":"String","wrong":c})}):(o(c,s),g.success())},i=(Object(a.i)("revokeBufferURL"),function removeStorage(e){var t=Object(a.h)(e);if(!t.flag){var r={"errMsg":"removeStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.key,o=e.success,s=e.fail,i=e.complete,l=new n.b({"name":"removeStorage","success":o,"fail":s,"complete":i});return"string"!=typeof c?l.fail({"errMsg":Object(a.b)({"para":"key","correct":"String","wrong":c})}):(function removeStorageSync(e){"string"==typeof e?localStorage.removeItem(e):console.error(Object(a.b)({"name":"removeStorage","correct":"String","wrong":e}))}(c),l.success())}),l=function getStorageSync(e){if("string"==typeof e){var t=getItem(e);return t.result?t.data:""}console.error(Object(a.b)({"name":"getStorageSync","correct":"String","wrong":e}))},u=function getStorageInfoSync(){return{"keys":Object.keys(localStorage),"limitSize":NaN,"currentSize":NaN}},g=function getStorageInfo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,c=e.complete,a=new n.b({"name":"getStorageInfo","success":t,"fail":r,"complete":c});return a.success(u())},f=function getStorage(e){var t=Object(a.h)(e);if(!t.flag){var r={"errMsg":"getStorage:fail ".concat(t.msg)};return console.error(r.errMsg),Promise.reject(r)}var c=e.key,o=e.success,s=e.fail,i=e.complete,l=new n.b({"name":"getStorage","success":o,"fail":s,"complete":i});if("string"!=typeof c)return l.fail({"errMsg":Object(a.b)({"para":"key","correct":"String","wrong":c})});var u=getItem(c),g=u.result,f=u.data;return g?l.success({"data":f}):l.fail({"errMsg":"data not found"})},p=(Object(a.i)("createBufferURL"),function clearStorageSync(){localStorage.clear()}),b=function clearStorage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,r=e.fail,c=e.complete,a=new n.b({"name":"clearStorage","success":t,"fail":r,"complete":c});return p(),a.success()}},"236":function(e,t,r){},"295":function(e,t,r){"use strict";r.r(t);var c=r(16),a=r(18),n=r(156),o=r(305),s=r(138),i=(r(236),r(137));t.default=function Index(){var e=Object(a.useState)("关键字"),t=Object(c.a)(e,2),r=t[0],l=t[1],u=Object(a.useState)([]),g=Object(c.a)(u,2),f=g[0],p=g[1],b=Object(a.useState)("值"),j=Object(c.a)(b,2),m=j[0],S=j[1],d=function _getStorageInfo(){Object(n.c)({"success":function success(e){p(e.keys)},"fail":function fail(e){console.log(e)}})};return Object(i.jsxs)(s.B,{"className":"api-page","children":[Object(i.jsxs)(s.B,{"className":"api-page-inputs common-border","children":[Object(i.jsxs)(s.B,{"className":"input-wrap","children":[Object(i.jsx)(s.y,{"className":"input-wrap-text","children":"key   : "}),Object(i.jsx)(s.h,{"className":"input-wrap-input","type":"text","placeholder":"请输入key值","value":r,"onInput":function _onInputKey(e){l(e.detail.value)}})]}),Object(i.jsxs)(s.B,{"className":"input-wrap","children":[Object(i.jsx)(s.y,{"children":"value: "}),Object(i.jsx)(s.h,{"className":"input-wrap-input","type":"text","placeholder":"请输入value值","value":m,"onInput":function _onInputValue(e){S(e.detail.value)}})]})]}),Object(i.jsxs)(s.B,{"className":"api-page-btns","children":[Object(i.jsx)(s.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){Object(n.f)({"key":r,"data":m}).then((function(){Object(o.e)({"title":"设置成功："+r,"icon":"none"}),d()}))},"children":"Taro.setStorage"}),Object(i.jsx)(s.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){Object(n.b)({"key":r,"success":function success(e){Object(o.e)({"title":e.data,"icon":"none"})},"fail":function fail(e){console.log(e)}})},"children":"Taro.getStorage"}),Object(i.jsx)(s.a,{"type":"primary","className":"api-page-btn-success","onClick":d,"children":"Taro.getStorageInfo"}),Object(i.jsx)(s.a,{"type":"primary","className":"api-page-btn-success","onClick":function onClick(){Object(n.a)().then((function(){Object(o.e)({"title":"清除成功","icon":"none"})}))},"children":"Taro.clearStorage"})]}),Object(i.jsx)(s.B,{"className":"api-page-content common-border","children":Object(i.jsxs)(s.y,{"children":["Storage keys: ",f.join("、")]})})]})}}}]);