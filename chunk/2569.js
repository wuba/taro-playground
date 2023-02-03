/*! For license information please see 2569.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2569],{"4343":function(e,t,i){i.d(t,{"zx":function(){return o},"V1":function(){return r},"XZ":function(){return a},"cO":function(){return c},"l0":function(){return s},"JO":function(){return l},"Ee":function(){return d},"II":function(){return u},"__":function(){return m},"ub":function(){return p},"Gt":function(){return g},"C3":function(){return h},"_z":function(){return f},"cW":function(){return y},"Nf":function(){return I},"$o":function(){return b},"Ex":function(){return x},"Y8":function(){return v},"FX":function(){return w},"Ho":function(){return j},"pf":function(){return C},"iR":function(){return N},"tq":function(){return S},"t3":function(){return k},"rs":function(){return M},"xv":function(){return T},"gx":function(){return D},"nk":function(){return B},"G7":function(){return Q},"kh":function(){return E}});var A=i(6354);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":i}=e;return Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":i})};var n=i(9900);const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,t,i)=>{const A=t.className||t.class,n=i.className||i.class,o=arrayToMap(e),r=arrayToMap(A?A.split(" "):[]),a=arrayToMap(n?n.split(" "):[]),c=[];return o.forEach((e=>{r.has(e)?(c.push(e),r.delete(e)):a.has(e)||c.push(e)})),r.forEach((e=>c.push(e))),c.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const t="on"+e;let i=t in document;if(!i){const e=document.createElement("div");e.setAttribute(t,"return;"),i="function"==typeof e[t]}return i}},syncEvent=(e,t,i)=>{const A=e.__events||(e.__events={}),n=A[t];n&&e.removeEventListener(t,n),e.addEventListener(t,A[t]=function handler(e){i&&i.call(this,e)})},arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},createComponent_createReactComponent=(e,t,i,o)=>{void 0!==o&&o();const r=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const a=class extends A.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,t,i={})=>{if(e instanceof Element){const A=getClassName(e.classList,t,i);""!==A&&(e.className=A),Object.keys(t).forEach((i=>{if("children"!==i&&"style"!==i&&"ref"!==i&&"class"!==i&&"className"!==i&&"forwardedRef"!==i)if(0===i.indexOf("on")&&i[2]===i[2].toUpperCase()){const A=i.substring(2).toLowerCase();isCoveredByReact(A)||syncEvent(e,A,t[i])}else e[i]=t[i],"string"==typeof t[i]&&e.setAttribute(camelToDashCase(i),t[i])}))}})(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":o,"forwardedRef":r,"style":a,"className":c,"ref":s}=t,l=(0,n._T)(t,["children","forwardedRef","style","className","ref"]);let d=Object.keys(l).reduce(((e,t)=>{const i=l[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const A=t.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(A)&&(e[t]=i)}else{const A=typeof i;"string"!==A&&"boolean"!==A&&"number"!==A||(e[camelToDashCase(t)]=i)}return e}),{});i&&(d=i(this.props,d));const u=Object.assign(Object.assign({},d),{"ref":mergeRefs(r,this.setComponentElRef),"style":a});return(0,A.createElement)(e,u,o)}static get"displayName"(){return r}};return t&&(a.contextType=t),((e,t)=>{const forwardRef=(t,i)=>A.createElement(e,Object.assign({},t,{"forwardedRef":i}));return forwardRef.displayName=t,A.forwardRef(forwardRef)})(a,r)},o=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),r=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),M=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),D=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),B=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),Q=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"4503":function(e,t,i){i.d(t,{"Zk":function(){return x},"Cy":function(){return w},"QP":function(){return I},"K4":function(){return v},"CF":function(){return b}});var A=i(1574),n=i(179),o=i(4651),r=i(1547),a=i(751),c=i(4768),s=i(1323),l=i(4194),d=function noop(){},u=function(){function ActionSheet(){(0,s.Z)(this,ActionSheet),this.options={"itemList":[],"itemColor":"#000000","success":d,"fail":d,"complete":d},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"actionSheetStyle":{"z-index":"4999","position":"fixed","left":"0","bottom":"0","-webkit-transform":"translate(0, 100%)","transform":"translate(0, 100%)","width":"100%","line-height":"1.6","background":"#EFEFF4","-webkit-transition":"-webkit-transform .3s","transition":"transform .3s"},"menuStyle":{"background-color":"#FCFCFD"},"cellStyle":{"position":"relative","padding":"10px 0","text-align":"center","font-size":"18px"},"cancelStyle":{"margin-top":"6px","padding":"10px 0","text-align":"center","font-size":"18px","color":"#000000","background-color":"#FCFCFD"}},this.lastConfig={}}return(0,l.Z)(ActionSheet,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(i){var A=e.style,n=A.maskStyle,o=A.actionSheetStyle,r=A.menuStyle,c=A.cellStyle,s=A.cancelStyle,l=Object.assign(Object.assign({},e.options),t);e.lastConfig=l,e.el=document.createElement("div"),e.el.className="taro__actionSheet",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear",e.mask=document.createElement("div"),e.mask.setAttribute("style",(0,a.b9)(n)),e.actionSheet=document.createElement("div"),e.actionSheet.setAttribute("style",(0,a.b9)(o)),e.menu=document.createElement("div"),e.menu.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},r),{"color":l.itemColor}))),e.cells=l.itemList.map((function(t,A){var n=document.createElement("div");return n.className="taro-actionsheet__cell",n.setAttribute("style",(0,a.b9)(c)),n.textContent=t,n.dataset.tapIndex="".concat(A),n.onclick=function(t){e.hide();var A=t.currentTarget,n=Number(null==A?void 0:A.dataset.tapIndex)||0;i(n)},n})),e.cancel=document.createElement("div"),e.cancel.setAttribute("style",(0,a.b9)(s)),e.cancel.textContent="取消",e.cells.forEach((function(t){return e.menu.appendChild(t)})),e.actionSheet.appendChild(e.menu),e.actionSheet.appendChild(e.cancel),e.el.appendChild(e.mask),e.el.appendChild(e.actionSheet);var d=function cb(){e.hide(),i("cancel")};e.mask.onclick=d,e.cancel.onclick=d,document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1",(0,a.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(i){var A=Object.assign(Object.assign({},e.options),t);e.lastConfig=A,e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer),A.itemColor&&(e.menu.style.color=A.itemColor);var n=e.style.cellStyle;A.itemList.forEach((function(t,A){var o;e.cells[A]?o=e.cells[A]:((o=document.createElement("div")).className="taro-actionsheet__cell",o.setAttribute("style",(0,a.b9)(n)),o.dataset.tapIndex="".concat(A),e.cells.push(o),e.menu.appendChild(o)),o.textContent=t,o.onclick=function(t){e.hide();var A=t.currentTarget,n=Number(null==A?void 0:A.dataset.tapIndex)||0;i(n)}}));var o=e.cells.length,r=A.itemList.length;if(o>r){for(var c=r;c<o;c++)e.menu.removeChild(e.cells[c]);e.cells.splice(r)}var s=function cb(){e.hide(),i("cancel")};e.mask.onclick=s,e.cancel.onclick=s,e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1",(0,a.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",(0,a.B2)(e.actionSheet,"translate(0, 100%)"),e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),ActionSheet}(),m=function(){function Modal(){(0,s.Z)(this,Modal),this.options={"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"modalStyle":{"z-index":"4999","position":"fixed","top":"50%","left":"50%","transform":"translate(-50%, -50%)","width":"80%","max-width":"300px","border-radius":"3px","text-align":"center","line-height":"1.6","overflow":"hidden","background":"#FFFFFF"},"titleStyle":{"padding":"20px 24px 9px","font-size":"18px"},"textStyle":{"padding":"0 24px 12px","min-height":"40px","font-size":"15px","line-height":"1.3","color":"#808080"},"footStyle":{"position":"relative","line-height":"48px","font-size":"18px","display":"flex"},"btnStyle":{"position":"relative","-webkit-box-flex":"1","-webkit-flex":"1","flex":"1"}}}return(0,l.Z)(Modal,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(i){var A,n,o=e.style,c=o.maskStyle,s=o.modalStyle,l=o.titleStyle,d=o.textStyle,u=o.footStyle,m=o.btnStyle,p=Object.assign(Object.assign({},e.options),t);e.el=document.createElement("div"),e.el.className="taro__modal",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var g=document.createElement("div");g.className="taro-modal__mask",g.setAttribute("style",(0,a.b9)(c));var h=document.createElement("div");h.className="taro-modal__content",h.setAttribute("style",(0,a.b9)(s));var f=p.title?l:Object.assign(Object.assign({},l),{"display":"none"});e.title=document.createElement("div"),e.title.className="taro-modal__title",e.title.setAttribute("style",(0,a.b9)(f)),e.title.textContent=p.title;var y=p.title?d:Object.assign(Object.assign({},d),{"padding":"40px 20px 26px","color":"#353535"});e.text=document.createElement("div"),e.text.className="taro-modal__text",e.text.setAttribute("style",(0,a.b9)(y)),e.text.textContent=p.content;var b=document.createElement("div");b.className="taro-modal__foot",b.setAttribute("style",(0,a.b9)(u));var I=Object.assign(Object.assign({},m),{"color":p.cancelColor,"display":p.showCancel?"block":"none"});e.cancel=document.createElement("div"),e.cancel.className="taro-model__btn taro-model__cancel",e.cancel.setAttribute("style",(0,a.b9)(I)),e.cancel.textContent=p.cancelText,e.cancel.onclick=function(){e.hide(),i("cancel")},e.confirm=document.createElement("div"),e.confirm.className="taro-model__btn taro-model__confirm",e.confirm.setAttribute("style",(0,a.b9)(m)),e.confirm.style.color=p.confirmColor,e.confirm.textContent=p.confirmText,e.confirm.onclick=function(){e.hide(),i("confirm")},b.appendChild(e.cancel),b.appendChild(e.confirm),h.appendChild(e.title),h.appendChild(e.text),h.appendChild(b),e.el.appendChild(g),e.el.appendChild(h),document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1"}),0),e.currentPath=null!==(n=null===(A=r.GY.page)||void 0===A?void 0:A.path)&&void 0!==n?n:(0,a.Jz)()}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(i){var A,n,o=Object.assign(Object.assign({},e.options),t);e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer);var c=e.style.textStyle;if(o.title)e.title.textContent=o.title,e.title.style.display="block",e.text.setAttribute("style",(0,a.b9)(c));else{e.title.textContent="",e.title.style.display="none";var s=Object.assign(Object.assign({},c),{"padding":"40px 20px 26px","color":"#353535"});e.text.setAttribute("style",(0,a.b9)(s))}e.text.textContent=o.content||"",e.cancel.style.display=o.showCancel?"block":"none",e.cancel.textContent=o.cancelText||"",e.cancel.style.color=o.cancelColor||"",e.confirm.textContent=o.confirmText||"",e.confirm.style.color=o.confirmColor||"",e.cancel.onclick=function(){e.hide(),i("cancel")},e.confirm.onclick=function(){e.hide(),i("confirm")},e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0),e.currentPath=null!==(n=null===(A=r.GY.page)||void 0===A?void 0:A.path)&&void 0!==n?n:(0,a.Jz)()}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.currentPath=null,this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),Modal}(),p=function(){function Toast(){(0,s.Z)(this,Toast),this.options={"title":"","icon":"none","image":"","duration":1500,"mask":!1},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0"},"toastStyle":{"z-index":"5000","box-sizing":"border-box","display":"flex","flex-direction":"column","justify-content":"center","-webkit-justify-content":"center","position":"fixed","top":"50%","left":"50%","min-width":"120px","max-width":"200px","min-height":"120px","padding":"15px","transform":"translate(-50%, -50%)","border-radius":"5px","text-align":"center","line-height":"1.6","color":"#FFFFFF","background":"rgba(17, 17, 17, 0.7)"},"successStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"errrorStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"loadingStyle":{"margin":"6px auto","width":"38px","height":"38px","-webkit-animation":"taroLoading 1s steps(12, end) infinite","animation":"taroLoading 1s steps(12, end) infinite","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat","background-size":"100%"},"imageStyle":{"margin":"6px auto","width":"40px","height":"40px","background":"transparent no-repeat","background-size":"100%"},"textStyle":{"margin":"0","font-size":"16px"}}}return(0,l.Z)(Toast,[{"key":"create","value":function create(){var e,t,i=this,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",o=this.style,c=o.maskStyle,s=o.toastStyle,l=o.successStyle,d=o.errrorStyle,u=o.loadingStyle,m=o.imageStyle,p=o.textStyle,g=Object.assign(Object.assign(Object.assign({},this.options),A),{"_type":n});if(this.el=document.createElement("div"),this.el.className="taro__toast",this.el.style.opacity="0",this.el.style.transition="opacity 0.1s linear",this.mask=document.createElement("div"),this.mask.setAttribute("style",(0,a.b9)(c)),this.mask.style.display=g.mask?"block":"none",this.icon=document.createElement("p"),g.image)this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},m),{"background-image":"url(".concat(g.image,")")})));else{var h="loading"===g.icon?u:"error"===g.icon?d:l;this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},h),"none"===g.icon?{"display":"none"}:{})))}return this.toast=document.createElement("div"),this.toast.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},s),"none"===g.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.title=document.createElement("p"),this.title.setAttribute("style",(0,a.b9)(p)),this.title.textContent=g.title,this.toast.appendChild(this.icon),this.toast.appendChild(this.title),this.el.appendChild(this.mask),this.el.appendChild(this.toast),document.body.appendChild(this.el),setTimeout((function(){i.el.style.opacity="1"}),0),this.type=g._type,g.duration>=0&&this.hide(g.duration,this.type),this.currentPath=null!==(t=null===(e=r.GY.page)||void 0===e?void 0:e.path)&&void 0!==t?t:(0,a.Jz)(),""}},{"key":"show","value":function show(){var e,t,i=this,A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",o=Object.assign(Object.assign(Object.assign({},this.options),A),{"_type":n});this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.title.textContent=o.title||"",this.mask.style.display=o.mask?"block":"none";var c=this.style,s=c.toastStyle,l=c.successStyle,d=c.errrorStyle,u=c.loadingStyle,m=c.imageStyle;if(o.image)this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},m),{"background-image":"url(".concat(o.image,")")})));else if(!o.image&&o.icon){var p="loading"===o.icon?u:"error"===o.icon?d:l;this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},p),"none"===o.icon?{"display":"none"}:{})))}return this.toast.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},s),"none"===o.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.el.style.display="block",setTimeout((function(){i.el.style.opacity="1"}),0),this.type=o._type,o.duration>=0&&this.hide(o.duration,this.type),this.currentPath=null!==(t=null===(e=r.GY.page)||void 0===e?void 0:e.path)&&void 0!==t?t:(0,a.Jz)(),""}},{"key":"hide","value":function hide(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1?arguments[1]:void 0;this.type===i&&(this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.currentPath=null,this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),100)}),t))}}]),Toast}(),g="default";function init(e){if("ready"!==g){var t=e.createElement("style");t.textContent='@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, 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") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}',e.querySelector("head").appendChild(t),g="ready"}}var h=new p,f=new m,y=new u,b=function showToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","icon":"success","image":"","duration":1500,"mask":!1},e),i=t.success,A=t.fail,n=t.complete,o=new c.N({"name":"showToast","success":i,"fail":A,"complete":n});if("string"!=typeof e.title)return o.fail({"errMsg":(0,a.Hl)({"para":"title","correct":"String","wrong":e.title})});if("number"!=typeof e.duration)return o.fail({"errMsg":(0,a.Hl)({"para":"duration","correct":"Number","wrong":e.duration})});e.image&&"string"!=typeof e.image&&(e.image=""),e.mask=!!e.mask;var r="";return r=h.el?h.show(e,"toast"):h.create(e,"toast"),o.success({"errMsg":r})},I=function showLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","mask":!1},e),i=t.success,A=t.fail,n=t.complete,o=new c.N({"name":"showLoading","success":i,"fail":A,"complete":n}),r={"icon":"loading","image":"","duration":-1};if("string"!=typeof(e=Object.assign({},e,r)).title)return o.fail({"errMsg":(0,a.Hl)({"para":"title","correct":"String","wrong":e.title})});e.mask=!!e.mask;var s="";return s=h.el?h.show(e,"loading"):h.create(e,"loading"),o.success({"errMsg":s})},x=function hideLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,i=e.fail,A=e.complete,n=new c.N({"name":"hideLoading","success":t,"fail":i,"complete":A});return h.el?(h.hide(0,"loading"),n.success()):n.success()},v=function showModal(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.mG)(void 0,void 0,void 0,(0,A.Z)().mark((function _callee(){var t,i,n,o,r,s,l;return(0,A.Z)().wrap((function _callee$(A){for(;;)switch(A.prev=A.next){case 0:if(init(document),e=Object.assign({"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},e),i=(t=e).success,n=t.fail,o=t.complete,r=new c.N({"name":"showModal","success":i,"fail":n,"complete":o}),"string"==typeof e.title){A.next=6;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"title","correct":"String","wrong":e.title})}));case 6:if("string"==typeof e.content){A.next=8;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"content","correct":"String","wrong":e.content})}));case 8:if("string"==typeof e.cancelText){A.next=10;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"cancelText","correct":"String","wrong":e.cancelText})}));case 10:if(!(e.cancelText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){A.next=12;break}return A.abrupt("return",r.fail({"errMsg":"cancelText length should not larger then 4 Chinese characters"}));case 12:if("string"==typeof e.confirmText){A.next=14;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"confirmText","correct":"String","wrong":e.confirmText})}));case 14:if(!(e.confirmText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){A.next=16;break}return A.abrupt("return",r.fail({"errMsg":"confirmText length should not larger then 4 Chinese characters"}));case 16:if("string"==typeof e.cancelColor){A.next=18;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"cancelColor","correct":"String","wrong":e.cancelColor})}));case 18:if("string"==typeof e.confirmColor){A.next=20;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"confirmColor","correct":"String","wrong":e.confirmColor})}));case 20:if(e.showCancel=!!e.showCancel,s="",f.el){A.next=28;break}return A.next=25,f.create(e);case 25:s=A.sent,A.next=31;break;case 28:return A.next=30,f.show(e);case 30:s=A.sent;case 31:return(l={"cancel":!1,"confirm":!1})[s]=!0,A.abrupt("return",r.success(l));case 34:case"end":return A.stop()}}),_callee)})))};var w=function showActionSheet(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"itemList":[]};return(0,n.mG)(void 0,void 0,void 0,(0,A.Z)().mark((function _callee2(){var t,i,n,o,r,s,l;return(0,A.Z)().wrap((function _callee2$(A){for(;;)switch(A.prev=A.next){case 0:if(init(document),e=Object.assign({"itemColor":"#000000","itemList":[]},e),i=(t=e).success,n=t.fail,o=t.complete,r=new c.N({"name":"showActionSheet","success":i,"fail":n,"complete":o}),Array.isArray(e.itemList)){A.next=6;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"itemList","correct":"Array","wrong":e.itemList})}));case 6:if(!(e.itemList.length<1)){A.next=8;break}return A.abrupt("return",r.fail({"errMsg":"parameter error: parameter.itemList should have at least 1 item"}));case 8:if(!(e.itemList.length>6)){A.next=10;break}return A.abrupt("return",r.fail({"errMsg":"parameter error: parameter.itemList should not be large than 6"}));case 10:s=0;case 11:if(!(s<e.itemList.length)){A.next=17;break}if("string"==typeof e.itemList[s]){A.next=14;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"itemList[".concat(s,"]"),"correct":"String","wrong":e.itemList[s]})}));case 14:s++,A.next=11;break;case 17:if("string"==typeof e.itemColor){A.next=19;break}return A.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"itemColor","correct":"String","wrong":e.itemColor})}));case 19:if(l="",y.el){A.next=26;break}return A.next=23,y.create(e);case 23:l=A.sent,A.next=29;break;case 26:return A.next=28,y.show(e);case 28:l=A.sent;case 29:if("string"!=typeof l){A.next=33;break}return A.abrupt("return",r.fail({"errMsg":l}));case 33:return A.abrupt("return",r.success({"tapIndex":l}));case 34:case"end":return A.stop()}}),_callee2)})))};o.Z.eventCenter.on("__afterTaroRouterChange",(function(){var e,t;h.currentPath&&h.currentPath!==(null===(e=r.GY.page)||void 0===e?void 0:e.path)&&(!function hideToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,i=e.fail,A=e.complete,n=new c.N({"name":"hideToast","success":t,"fail":i,"complete":A});h.el?(h.hide(0,"toast"),n.success()):n.success()}(),x()),f.currentPath&&f.currentPath!==(null===(t=r.GY.page)||void 0===t?void 0:t.path)&&function hideModal(){f.el&&f.hide()}()}));(0,a.tA)("enableAlertBeforeUnload"),(0,a.tA)("disableAlertBeforeUnload")},"179":function(e,t,i){i.d(t,{"mG":function(){return __awaiter}});function __awaiter(e,t,i,A){return new(i||(i=Promise))((function(n,o){function fulfilled(e){try{step(A.next(e))}catch(e){o(e)}}function rejected(e){try{step(A.throw(e))}catch(e){o(e)}}function step(e){e.done?n(e.value):function adopt(e){return e instanceof i?e:new i((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((A=A.apply(e,t||[])).next())}))}},"8724":function(e,t,i){var A=i(6354),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,i){var A,o={},s=null,l=null;for(A in void 0!==i&&(s=""+i),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,A)&&!c.hasOwnProperty(A)&&(o[A]=t[A]);if(e&&e.defaultProps)for(A in t=e.defaultProps)void 0===o[A]&&(o[A]=t[A]);return{"$$typeof":n,"type":e,"key":s,"ref":l,"props":o,"_owner":a.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},"4869":function(e,t,i){e.exports=i(8724)},"9900":function(e,t,i){i.d(t,{"_T":function(){return __rest}});function __rest(e,t){var i={};for(var A in e)Object.prototype.hasOwnProperty.call(e,A)&&t.indexOf(A)<0&&(i[A]=e[A]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(A=Object.getOwnPropertySymbols(e);n<A.length;n++)t.indexOf(A[n])<0&&Object.prototype.propertyIsEnumerable.call(e,A[n])&&(i[A[n]]=e[A[n]])}return i}Object.create;Object.create},"4987":function(e,t,i){var A=i(4343),n=i(4869);t.Z=function Head(e){var t=e.title,i=e.desc;return(0,n.jsxs)(A.G7,{"className":"page-head","children":[(0,n.jsx)(A.G7,{"className":"page-head-title","children":t}),(0,n.jsx)(A.G7,{"className":"page-head-line"}),!!i&&(0,n.jsx)(A.xv,{"className":"page-head-desc","children":i})]})}},"2569":function(e,t,i){i.r(t),i.d(t,{"default":function(){return p}});var A=i(1323),n=i(4194),o=i(9207),r=i(5483),a=i(1603),c=i(6746),s=i(6354),l=i(4503),d=i(4343),u=i(4987),m=i(4869),p=function(e){(0,r.Z)(PageView,e);var t=(0,a.Z)(PageView);function PageView(){var e;(0,A.Z)(this,PageView);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),(0,c.Z)((0,o.Z)(e),"state",{"list":[1,2,3]}),(0,c.Z)((0,o.Z)(e),"initNum",3),e}return(0,n.Z)(PageView,[{"key":"render","value":function render(){var e=this;return(0,m.jsxs)(d.pf,{"className":"components-page","children":[(0,m.jsx)(d.G7,{"className":"components-page__header","children":(0,m.jsx)(u.Z,{"title":"ScrollView"})}),(0,m.jsxs)(d.G7,{"className":"components-page__body","children":[(0,m.jsxs)(d.G7,{"className":"components-page__body-example example scroll-view","children":[(0,m.jsx)(d.G7,{"className":"example-header","children":"Horizontal 横向滚动"}),(0,m.jsx)(d.G7,{"className":"example-body","children":(0,m.jsxs)(d.pf,{"scrollX":!0,"onScrollToUpper":function onScrollToUpper(){console.log("onScrollToUpper触发成功")},"onScrollToLower":function onScrollToLower(){(0,l.CF)({"title":"onScrollToLower触发成功","icon":"success","duration":1e3})},"className":"example-body__scroll-view example-body__scroll-view--H","children":[(0,m.jsx)(d.G7,{"className":"example-body__scroll-view--H-item demo-text-1"}),(0,m.jsx)(d.G7,{"className":"example-body__scroll-view--H-item demo-text-2"}),(0,m.jsx)(d.G7,{"className":"example-body__scroll-view--H-item demo-text-3"})]})})]}),(0,m.jsxs)(d.G7,{"className":"components-page__body-example example scroll-view","children":[(0,m.jsx)(d.G7,{"className":"example-header","children":"Vertical 纵向滚动"}),(0,m.jsx)(d.G7,{"className":"example-body","children":(0,m.jsx)(d.pf,{"scrollY":!0,"upperThreshold":0,"onScrollToUpper":function onScrollToUpper(){(0,l.CF)({"title":"upperThreshold=0触发成功","icon":"success","duration":1e3})},"onScrollToLower":function onScrollToLower(){(0,l.CF)({"title":"onScrollToLower触发成功","icon":"success","duration":1e3});var t=e.state.list;t.push(++e.initNum),e.setState({"list":t})},"scrollWithAnimation":!0,"className":"example-body__scroll-view example-body__scroll-view--V","children":this.state.list.map((function(e,t){return(0,m.jsx)(d.G7,{"className":"example-body__scroll-view--V-item demo-text-".concat((t+1)%3||3),"children":e},t)}))})})]})]})]})}}]),PageView}(s.Component)}}]);