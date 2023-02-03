/*! For license information please see 4090.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4090],{"4343":function(e,t,n){n.d(t,{"zx":function(){return o},"V1":function(){return r},"XZ":function(){return a},"cO":function(){return c},"l0":function(){return s},"JO":function(){return l},"Ee":function(){return u},"II":function(){return d},"__":function(){return m},"ub":function(){return g},"Gt":function(){return p},"C3":function(){return f},"_z":function(){return h},"cW":function(){return y},"Nf":function(){return I},"$o":function(){return b},"Ex":function(){return v},"Y8":function(){return x},"FX":function(){return w},"Ho":function(){return C},"pf":function(){return j},"iR":function(){return k},"tq":function(){return S},"t3":function(){return M},"rs":function(){return N},"xv":function(){return T},"gx":function(){return D},"nk":function(){return B},"G7":function(){return Q},"kh":function(){return E}});var i=n(6354);const helper_manipulatePropsFunction=(e,t={})=>{const{"dangerouslySetInnerHTML":n}=e;return Object.assign(Object.assign({},t),{"dangerouslySetInnerHTML":n})};var A=n(9900);const mergeRefs=(...e)=>t=>{e.forEach((e=>{((e,t)=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})(e,t)}))},camelToDashCase=e=>e.replace(/([A-Z])/g,(e=>`-${e[0].toLowerCase()}`)),getClassName=(e,t,n)=>{const i=t.className||t.class,A=n.className||n.class,o=arrayToMap(e),r=arrayToMap(i?i.split(" "):[]),a=arrayToMap(A?A.split(" "):[]),c=[];return o.forEach((e=>{r.has(e)?(c.push(e),r.delete(e)):a.has(e)||c.push(e)})),r.forEach((e=>c.push(e))),c.join(" ")},isCoveredByReact=e=>{if("undefined"==typeof document)return!0;{const t="on"+e;let n=t in document;if(!n){const e=document.createElement("div");e.setAttribute(t,"return;"),n="function"==typeof e[t]}return n}},syncEvent=(e,t,n)=>{const i=e.__events||(e.__events={}),A=i[t];A&&e.removeEventListener(t,A),e.addEventListener(t,i[t]=function handler(e){n&&n.call(this,e)})},arrayToMap=e=>{const t=new Map;return e.forEach((e=>t.set(e,e))),t},createComponent_createReactComponent=(e,t,n,o)=>{void 0!==o&&o();const r=e.toLowerCase().split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join("");const a=class extends i.Component{"constructor"(e){super(e),this.setComponentElRef=e=>{this.componentEl=e}}"componentDidMount"(){this.componentDidUpdate(this.props)}"componentDidUpdate"(e){((e,t,n={})=>{if(e instanceof Element){const i=getClassName(e.classList,t,n);""!==i&&(e.className=i),Object.keys(t).forEach((n=>{if("children"!==n&&"style"!==n&&"ref"!==n&&"class"!==n&&"className"!==n&&"forwardedRef"!==n)if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const i=n.substring(2).toLowerCase();isCoveredByReact(i)||syncEvent(e,i,t[n])}else e[n]=t[n],"string"==typeof t[n]&&e.setAttribute(camelToDashCase(n),t[n])}))}})(this.componentEl,this.props,e)}"render"(){const t=this.props,{"children":o,"forwardedRef":r,"style":a,"className":c,"ref":s}=t,l=(0,A._T)(t,["children","forwardedRef","style","className","ref"]);let u=Object.keys(l).reduce(((e,t)=>{const n=l[t];if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){const i=t.substring(2).toLowerCase();"undefined"!=typeof document&&isCoveredByReact(i)&&(e[t]=n)}else{const i=typeof n;"string"!==i&&"boolean"!==i&&"number"!==i||(e[camelToDashCase(t)]=n)}return e}),{});n&&(u=n(this.props,u));const d=Object.assign(Object.assign({},u),{"ref":mergeRefs(r,this.setComponentElRef),"style":a});return(0,i.createElement)(e,d,o)}static get"displayName"(){return r}};return t&&(a.contextType=t),((e,t)=>{const forwardRef=(t,n)=>i.createElement(e,Object.assign({},t,{"forwardedRef":n}));return forwardRef.displayName=t,i.forwardRef(forwardRef)})(a,r)},o=createComponent_createReactComponent("taro-button-core",void 0,helper_manipulatePropsFunction),r=createComponent_createReactComponent("taro-camera-core",void 0,helper_manipulatePropsFunction),a=createComponent_createReactComponent("taro-checkbox-core",void 0,helper_manipulatePropsFunction),c=createComponent_createReactComponent("taro-checkbox-group-core",void 0,helper_manipulatePropsFunction),s=createComponent_createReactComponent("taro-form-core",void 0,helper_manipulatePropsFunction),l=createComponent_createReactComponent("taro-icon-core",void 0,helper_manipulatePropsFunction),u=createComponent_createReactComponent("taro-image-core",void 0,helper_manipulatePropsFunction),d=createComponent_createReactComponent("taro-input-core",void 0,helper_manipulatePropsFunction),m=createComponent_createReactComponent("taro-label-core",void 0,helper_manipulatePropsFunction),g=createComponent_createReactComponent("taro-movable-area-core",void 0,helper_manipulatePropsFunction),p=createComponent_createReactComponent("taro-movable-view-core",void 0,helper_manipulatePropsFunction),f=createComponent_createReactComponent("taro-navigator-core",void 0,helper_manipulatePropsFunction),h=createComponent_createReactComponent("taro-page-container-core",void 0,helper_manipulatePropsFunction),y=createComponent_createReactComponent("taro-picker-core",void 0,helper_manipulatePropsFunction),b=createComponent_createReactComponent("taro-picker-view-column-core",void 0,helper_manipulatePropsFunction),I=createComponent_createReactComponent("taro-picker-view-core",void 0,helper_manipulatePropsFunction),v=createComponent_createReactComponent("taro-progress-core",void 0,helper_manipulatePropsFunction),x=createComponent_createReactComponent("taro-radio-core",void 0,helper_manipulatePropsFunction),w=createComponent_createReactComponent("taro-radio-group-core",void 0,helper_manipulatePropsFunction),C=createComponent_createReactComponent("taro-rich-text-core",void 0,helper_manipulatePropsFunction),j=createComponent_createReactComponent("taro-scroll-view-core",void 0,helper_manipulatePropsFunction),k=createComponent_createReactComponent("taro-slider-core",void 0,helper_manipulatePropsFunction),S=createComponent_createReactComponent("taro-swiper-core",void 0,helper_manipulatePropsFunction),M=createComponent_createReactComponent("taro-swiper-item-core",void 0,helper_manipulatePropsFunction),N=createComponent_createReactComponent("taro-switch-core",void 0,helper_manipulatePropsFunction),T=createComponent_createReactComponent("taro-text-core",void 0,helper_manipulatePropsFunction),D=createComponent_createReactComponent("taro-textarea-core",void 0,helper_manipulatePropsFunction),B=createComponent_createReactComponent("taro-video-core",void 0,helper_manipulatePropsFunction),Q=createComponent_createReactComponent("taro-view-core",void 0,helper_manipulatePropsFunction),E=createComponent_createReactComponent("taro-web-view-core",void 0,helper_manipulatePropsFunction)},"2012":function(e,t,n){n.d(t,{"$":function(){return o},"a":function(){return A}});var i=n(751),A=(0,i.tA)("openSetting"),o=(0,i.tA)("getSetting")},"4503":function(e,t,n){n.d(t,{"Zk":function(){return v},"Cy":function(){return w},"QP":function(){return I},"K4":function(){return x},"CF":function(){return b}});var i=n(1574),A=n(179),o=n(4651),r=n(1547),a=n(751),c=n(4768),s=n(1323),l=n(4194),u=function noop(){},d=function(){function ActionSheet(){(0,s.Z)(this,ActionSheet),this.options={"itemList":[],"itemColor":"#000000","success":u,"fail":u,"complete":u},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"actionSheetStyle":{"z-index":"4999","position":"fixed","left":"0","bottom":"0","-webkit-transform":"translate(0, 100%)","transform":"translate(0, 100%)","width":"100%","line-height":"1.6","background":"#EFEFF4","-webkit-transition":"-webkit-transform .3s","transition":"transform .3s"},"menuStyle":{"background-color":"#FCFCFD"},"cellStyle":{"position":"relative","padding":"10px 0","text-align":"center","font-size":"18px"},"cancelStyle":{"margin-top":"6px","padding":"10px 0","text-align":"center","font-size":"18px","color":"#000000","background-color":"#FCFCFD"}},this.lastConfig={}}return(0,l.Z)(ActionSheet,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=e.style,A=i.maskStyle,o=i.actionSheetStyle,r=i.menuStyle,c=i.cellStyle,s=i.cancelStyle,l=Object.assign(Object.assign({},e.options),t);e.lastConfig=l,e.el=document.createElement("div"),e.el.className="taro__actionSheet",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear",e.mask=document.createElement("div"),e.mask.setAttribute("style",(0,a.b9)(A)),e.actionSheet=document.createElement("div"),e.actionSheet.setAttribute("style",(0,a.b9)(o)),e.menu=document.createElement("div"),e.menu.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},r),{"color":l.itemColor}))),e.cells=l.itemList.map((function(t,i){var A=document.createElement("div");return A.className="taro-actionsheet__cell",A.setAttribute("style",(0,a.b9)(c)),A.textContent=t,A.dataset.tapIndex="".concat(i),A.onclick=function(t){e.hide();var i=t.currentTarget,A=Number(null==i?void 0:i.dataset.tapIndex)||0;n(A)},A})),e.cancel=document.createElement("div"),e.cancel.setAttribute("style",(0,a.b9)(s)),e.cancel.textContent="取消",e.cells.forEach((function(t){return e.menu.appendChild(t)})),e.actionSheet.appendChild(e.menu),e.actionSheet.appendChild(e.cancel),e.el.appendChild(e.mask),e.el.appendChild(e.actionSheet);var u=function cb(){e.hide(),n("cancel")};e.mask.onclick=u,e.cancel.onclick=u,document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1",(0,a.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i=Object.assign(Object.assign({},e.options),t);e.lastConfig=i,e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer),i.itemColor&&(e.menu.style.color=i.itemColor);var A=e.style.cellStyle;i.itemList.forEach((function(t,i){var o;e.cells[i]?o=e.cells[i]:((o=document.createElement("div")).className="taro-actionsheet__cell",o.setAttribute("style",(0,a.b9)(A)),o.dataset.tapIndex="".concat(i),e.cells.push(o),e.menu.appendChild(o)),o.textContent=t,o.onclick=function(t){e.hide();var i=t.currentTarget,A=Number(null==i?void 0:i.dataset.tapIndex)||0;n(A)}}));var o=e.cells.length,r=i.itemList.length;if(o>r){for(var c=r;c<o;c++)e.menu.removeChild(e.cells[c]);e.cells.splice(r)}var s=function cb(){e.hide(),n("cancel")};e.mask.onclick=s,e.cancel.onclick=s,e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1",(0,a.B2)(e.actionSheet,"translate(0, 0)")}),0)}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",(0,a.B2)(e.actionSheet,"translate(0, 100%)"),e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),ActionSheet}(),m=function(){function Modal(){(0,s.Z)(this,Modal),this.options={"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0","background":"rgba(0,0,0,0.6)"},"modalStyle":{"z-index":"4999","position":"fixed","top":"50%","left":"50%","transform":"translate(-50%, -50%)","width":"80%","max-width":"300px","border-radius":"3px","text-align":"center","line-height":"1.6","overflow":"hidden","background":"#FFFFFF"},"titleStyle":{"padding":"20px 24px 9px","font-size":"18px"},"textStyle":{"padding":"0 24px 12px","min-height":"40px","font-size":"15px","line-height":"1.3","color":"#808080"},"footStyle":{"position":"relative","line-height":"48px","font-size":"18px","display":"flex"},"btnStyle":{"position":"relative","-webkit-box-flex":"1","-webkit-flex":"1","flex":"1"}}}return(0,l.Z)(Modal,[{"key":"create","value":function create(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i,A,o=e.style,c=o.maskStyle,s=o.modalStyle,l=o.titleStyle,u=o.textStyle,d=o.footStyle,m=o.btnStyle,g=Object.assign(Object.assign({},e.options),t);e.el=document.createElement("div"),e.el.className="taro__modal",e.el.style.opacity="0",e.el.style.transition="opacity 0.2s linear";var p=document.createElement("div");p.className="taro-modal__mask",p.setAttribute("style",(0,a.b9)(c));var f=document.createElement("div");f.className="taro-modal__content",f.setAttribute("style",(0,a.b9)(s));var h=g.title?l:Object.assign(Object.assign({},l),{"display":"none"});e.title=document.createElement("div"),e.title.className="taro-modal__title",e.title.setAttribute("style",(0,a.b9)(h)),e.title.textContent=g.title;var y=g.title?u:Object.assign(Object.assign({},u),{"padding":"40px 20px 26px","color":"#353535"});e.text=document.createElement("div"),e.text.className="taro-modal__text",e.text.setAttribute("style",(0,a.b9)(y)),e.text.textContent=g.content;var b=document.createElement("div");b.className="taro-modal__foot",b.setAttribute("style",(0,a.b9)(d));var I=Object.assign(Object.assign({},m),{"color":g.cancelColor,"display":g.showCancel?"block":"none"});e.cancel=document.createElement("div"),e.cancel.className="taro-model__btn taro-model__cancel",e.cancel.setAttribute("style",(0,a.b9)(I)),e.cancel.textContent=g.cancelText,e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm=document.createElement("div"),e.confirm.className="taro-model__btn taro-model__confirm",e.confirm.setAttribute("style",(0,a.b9)(m)),e.confirm.style.color=g.confirmColor,e.confirm.textContent=g.confirmText,e.confirm.onclick=function(){e.hide(),n("confirm")},b.appendChild(e.cancel),b.appendChild(e.confirm),f.appendChild(e.title),f.appendChild(e.text),f.appendChild(b),e.el.appendChild(p),e.el.appendChild(f),document.body.appendChild(e.el),setTimeout((function(){e.el.style.opacity="1"}),0),e.currentPath=null!==(A=null===(i=r.GY.page)||void 0===i?void 0:i.path)&&void 0!==A?A:(0,a.Jz)()}))}},{"key":"show","value":function show(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){var i,A,o=Object.assign(Object.assign({},e.options),t);e.hideOpacityTimer&&clearTimeout(e.hideOpacityTimer),e.hideDisplayTimer&&clearTimeout(e.hideDisplayTimer);var c=e.style.textStyle;if(o.title)e.title.textContent=o.title,e.title.style.display="block",e.text.setAttribute("style",(0,a.b9)(c));else{e.title.textContent="",e.title.style.display="none";var s=Object.assign(Object.assign({},c),{"padding":"40px 20px 26px","color":"#353535"});e.text.setAttribute("style",(0,a.b9)(s))}e.text.textContent=o.content||"",e.cancel.style.display=o.showCancel?"block":"none",e.cancel.textContent=o.cancelText||"",e.cancel.style.color=o.cancelColor||"",e.confirm.textContent=o.confirmText||"",e.confirm.style.color=o.confirmColor||"",e.cancel.onclick=function(){e.hide(),n("cancel")},e.confirm.onclick=function(){e.hide(),n("confirm")},e.el.style.display="block",setTimeout((function(){e.el.style.opacity="1"}),0),e.currentPath=null!==(A=null===(i=r.GY.page)||void 0===i?void 0:i.path)&&void 0!==A?A:(0,a.Jz)()}))}},{"key":"hide","value":function hide(){var e=this;this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.currentPath=null,this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),200)}),0)}}]),Modal}(),g=function(){function Toast(){(0,s.Z)(this,Toast),this.options={"title":"","icon":"none","image":"","duration":1500,"mask":!1},this.style={"maskStyle":{"position":"fixed","z-index":"1000","top":"0","right":"0","left":"0","bottom":"0"},"toastStyle":{"z-index":"5000","box-sizing":"border-box","display":"flex","flex-direction":"column","justify-content":"center","-webkit-justify-content":"center","position":"fixed","top":"50%","left":"50%","min-width":"120px","max-width":"200px","min-height":"120px","padding":"15px","transform":"translate(-50%, -50%)","border-radius":"5px","text-align":"center","line-height":"1.6","color":"#FFFFFF","background":"rgba(17, 17, 17, 0.7)"},"successStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTQ4OTYzMjA0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzNDgiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjE5Ljk1MiA1MTIuNTc2bDIxMC40MzIgMjEwLjQzMi00NS4yNDggNDUuMjU2LTIxMC40MzItMjEwLjQzMnoiIHAtaWQ9IjQzNDkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNNzk5LjY3MiAyNjIuMjY0bDQ1LjI1NiA0NS4yNTYtNDYwLjQ2NCA0NjAuNDY0LTQ1LjI1Ni00NS4yNTZ6IiBwLWlkPSI0MzUwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"errrorStyle":{"margin":"6px auto","width":"38px","height":"38px","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB0PSIxNjM5NTUxMDU1MTgzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE0MDc2IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNTggNjQgNjQgMjY0LjU4IDY0IDUxMnMyMDAuNTggNDQ4IDQ0OCA0NDggNDQ4LTIwMC41OCA0NDgtNDQ4Uzc1OS40MiA2NCA1MTIgNjR6IG0wIDc1MmEzNiAzNiAwIDEgMSAzNi0zNiAzNiAzNiAwIDAgMS0zNiAzNnogbTUxLjgzLTU1MS45NUw1NDggNjM2YTM2IDM2IDAgMCAxLTcyIDBsLTE1LjgzLTM3MS45NWMtMC4xLTEuMzMtMC4xNy0yLjY4LTAuMTctNC4wNWE1MiA1MiAwIDAgMSAxMDQgMGMwIDEuMzctMC4wNyAyLjcyLTAuMTcgNC4wNXoiIHAtaWQ9IjE0MDc3IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+) no-repeat","background-size":"100%"},"loadingStyle":{"margin":"6px auto","width":"38px","height":"38px","-webkit-animation":"taroLoading 1s steps(12, end) infinite","animation":"taroLoading 1s steps(12, end) infinite","background":"transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat","background-size":"100%"},"imageStyle":{"margin":"6px auto","width":"40px","height":"40px","background":"transparent no-repeat","background-size":"100%"},"textStyle":{"margin":"0","font-size":"16px"}}}return(0,l.Z)(Toast,[{"key":"create","value":function create(){var e,t,n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",o=this.style,c=o.maskStyle,s=o.toastStyle,l=o.successStyle,u=o.errrorStyle,d=o.loadingStyle,m=o.imageStyle,g=o.textStyle,p=Object.assign(Object.assign(Object.assign({},this.options),i),{"_type":A});if(this.el=document.createElement("div"),this.el.className="taro__toast",this.el.style.opacity="0",this.el.style.transition="opacity 0.1s linear",this.mask=document.createElement("div"),this.mask.setAttribute("style",(0,a.b9)(c)),this.mask.style.display=p.mask?"block":"none",this.icon=document.createElement("p"),p.image)this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},m),{"background-image":"url(".concat(p.image,")")})));else{var f="loading"===p.icon?d:"error"===p.icon?u:l;this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},f),"none"===p.icon?{"display":"none"}:{})))}return this.toast=document.createElement("div"),this.toast.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},s),"none"===p.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.title=document.createElement("p"),this.title.setAttribute("style",(0,a.b9)(g)),this.title.textContent=p.title,this.toast.appendChild(this.icon),this.toast.appendChild(this.title),this.el.appendChild(this.mask),this.el.appendChild(this.toast),document.body.appendChild(this.el),setTimeout((function(){n.el.style.opacity="1"}),0),this.type=p._type,p.duration>=0&&this.hide(p.duration,this.type),this.currentPath=null!==(t=null===(e=r.GY.page)||void 0===e?void 0:e.path)&&void 0!==t?t:(0,a.Jz)(),""}},{"key":"show","value":function show(){var e,t,n=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"toast",o=Object.assign(Object.assign(Object.assign({},this.options),i),{"_type":A});this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.title.textContent=o.title||"",this.mask.style.display=o.mask?"block":"none";var c=this.style,s=c.toastStyle,l=c.successStyle,u=c.errrorStyle,d=c.loadingStyle,m=c.imageStyle;if(o.image)this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},m),{"background-image":"url(".concat(o.image,")")})));else if(!o.image&&o.icon){var g="loading"===o.icon?d:"error"===o.icon?u:l;this.icon.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},g),"none"===o.icon?{"display":"none"}:{})))}return this.toast.setAttribute("style",(0,a.b9)(Object.assign(Object.assign({},s),"none"===o.icon?{"min-height":"0","padding":"10px 15px"}:{}))),this.el.style.display="block",setTimeout((function(){n.el.style.opacity="1"}),0),this.type=o._type,o.duration>=0&&this.hide(o.duration,this.type),this.currentPath=null!==(t=null===(e=r.GY.page)||void 0===e?void 0:e.path)&&void 0!==t?t:(0,a.Jz)(),""}},{"key":"hide","value":function hide(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;this.type===n&&(this.hideOpacityTimer&&clearTimeout(this.hideOpacityTimer),this.hideDisplayTimer&&clearTimeout(this.hideDisplayTimer),this.currentPath=null,this.hideOpacityTimer=setTimeout((function(){e.el.style.opacity="0",e.hideDisplayTimer=setTimeout((function(){e.el.style.display="none"}),100)}),t))}}]),Toast}(),p="default";function init(e){if("ready"!==p){var t=e.createElement("style");t.textContent='@font-face{font-weight:normal;font-style:normal;font-family:"taro";src:url("data:application/x-font-ttf;charset=utf-8;base64, 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") format("truetype");}@-webkit-keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}@keyframes taroLoading{0%{-webkit-transform:rotate3d(0, 0, 1, 0deg);}100%{-webkit-transform:rotate3d(0, 0, 1, 360deg);transform:rotate3d(0, 0, 1, 360deg);}}.taro-modal__foot:after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);} .taro-model__btn:active {background-color: #EEEEEE}.taro-model__btn:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;width: 1px;bottom: 0;border-left: 1px solid #D5D5D6;color: #D5D5D6;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleX(0.5);transform: scaleX(0.5);}.taro-actionsheet__cell:not(:first-child):after {content: "";position: absolute;left: 0;top: 0;right: 0;height: 1px;border-top: 1px solid #e5e5e5;color: #e5e5e5;-webkit-transform-origin: 0 0;transform-origin: 0 0;-webkit-transform: scaleY(0.5);transform: scaleY(0.5);}',e.querySelector("head").appendChild(t),p="ready"}}var f=new g,h=new m,y=new d,b=function showToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","icon":"success","image":"","duration":1500,"mask":!1},e),n=t.success,i=t.fail,A=t.complete,o=new c.N({"name":"showToast","success":n,"fail":i,"complete":A});if("string"!=typeof e.title)return o.fail({"errMsg":(0,a.Hl)({"para":"title","correct":"String","wrong":e.title})});if("number"!=typeof e.duration)return o.fail({"errMsg":(0,a.Hl)({"para":"duration","correct":"Number","wrong":e.duration})});e.image&&"string"!=typeof e.image&&(e.image=""),e.mask=!!e.mask;var r="";return r=f.el?f.show(e,"toast"):f.create(e,"toast"),o.success({"errMsg":r})},I=function showLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"title":""};init(document);var t=e=Object.assign({"title":"","mask":!1},e),n=t.success,i=t.fail,A=t.complete,o=new c.N({"name":"showLoading","success":n,"fail":i,"complete":A}),r={"icon":"loading","image":"","duration":-1};if("string"!=typeof(e=Object.assign({},e,r)).title)return o.fail({"errMsg":(0,a.Hl)({"para":"title","correct":"String","wrong":e.title})});e.mask=!!e.mask;var s="";return s=f.el?f.show(e,"loading"):f.create(e,"loading"),o.success({"errMsg":s})},v=function hideLoading(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,i=e.complete,A=new c.N({"name":"hideLoading","success":t,"fail":n,"complete":i});return f.el?(f.hide(0,"loading"),A.success()):A.success()},x=function showModal(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,A.mG)(void 0,void 0,void 0,(0,i.Z)().mark((function _callee(){var t,n,A,o,r,s,l;return(0,i.Z)().wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(init(document),e=Object.assign({"title":"","content":"","showCancel":!0,"cancelText":"取消","cancelColor":"#000000","confirmText":"确定","confirmColor":"#3CC51F"},e),n=(t=e).success,A=t.fail,o=t.complete,r=new c.N({"name":"showModal","success":n,"fail":A,"complete":o}),"string"==typeof e.title){i.next=6;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"title","correct":"String","wrong":e.title})}));case 6:if("string"==typeof e.content){i.next=8;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"content","correct":"String","wrong":e.content})}));case 8:if("string"==typeof e.cancelText){i.next=10;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"cancelText","correct":"String","wrong":e.cancelText})}));case 10:if(!(e.cancelText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){i.next=12;break}return i.abrupt("return",r.fail({"errMsg":"cancelText length should not larger then 4 Chinese characters"}));case 12:if("string"==typeof e.confirmText){i.next=14;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"confirmText","correct":"String","wrong":e.confirmText})}));case 14:if(!(e.confirmText.replace(/[\u0391-\uFFE5]/g,"aa").length>8)){i.next=16;break}return i.abrupt("return",r.fail({"errMsg":"confirmText length should not larger then 4 Chinese characters"}));case 16:if("string"==typeof e.cancelColor){i.next=18;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"cancelColor","correct":"String","wrong":e.cancelColor})}));case 18:if("string"==typeof e.confirmColor){i.next=20;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"confirmColor","correct":"String","wrong":e.confirmColor})}));case 20:if(e.showCancel=!!e.showCancel,s="",h.el){i.next=28;break}return i.next=25,h.create(e);case 25:s=i.sent,i.next=31;break;case 28:return i.next=30,h.show(e);case 30:s=i.sent;case 31:return(l={"cancel":!1,"confirm":!1})[s]=!0,i.abrupt("return",r.success(l));case 34:case"end":return i.stop()}}),_callee)})))};var w=function showActionSheet(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"itemList":[]};return(0,A.mG)(void 0,void 0,void 0,(0,i.Z)().mark((function _callee2(){var t,n,A,o,r,s,l;return(0,i.Z)().wrap((function _callee2$(i){for(;;)switch(i.prev=i.next){case 0:if(init(document),e=Object.assign({"itemColor":"#000000","itemList":[]},e),n=(t=e).success,A=t.fail,o=t.complete,r=new c.N({"name":"showActionSheet","success":n,"fail":A,"complete":o}),Array.isArray(e.itemList)){i.next=6;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"itemList","correct":"Array","wrong":e.itemList})}));case 6:if(!(e.itemList.length<1)){i.next=8;break}return i.abrupt("return",r.fail({"errMsg":"parameter error: parameter.itemList should have at least 1 item"}));case 8:if(!(e.itemList.length>6)){i.next=10;break}return i.abrupt("return",r.fail({"errMsg":"parameter error: parameter.itemList should not be large than 6"}));case 10:s=0;case 11:if(!(s<e.itemList.length)){i.next=17;break}if("string"==typeof e.itemList[s]){i.next=14;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"itemList[".concat(s,"]"),"correct":"String","wrong":e.itemList[s]})}));case 14:s++,i.next=11;break;case 17:if("string"==typeof e.itemColor){i.next=19;break}return i.abrupt("return",r.fail({"errMsg":(0,a.Hl)({"para":"itemColor","correct":"String","wrong":e.itemColor})}));case 19:if(l="",y.el){i.next=26;break}return i.next=23,y.create(e);case 23:l=i.sent,i.next=29;break;case 26:return i.next=28,y.show(e);case 28:l=i.sent;case 29:if("string"!=typeof l){i.next=33;break}return i.abrupt("return",r.fail({"errMsg":l}));case 33:return i.abrupt("return",r.success({"tapIndex":l}));case 34:case"end":return i.stop()}}),_callee2)})))};o.Z.eventCenter.on("__afterTaroRouterChange",(function(){var e,t;f.currentPath&&f.currentPath!==(null===(e=r.GY.page)||void 0===e?void 0:e.path)&&(!function hideToast(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,i=e.complete,A=new c.N({"name":"hideToast","success":t,"fail":n,"complete":i});f.el?(f.hide(0,"toast"),A.success()):A.success()}(),v()),h.currentPath&&h.currentPath!==(null===(t=r.GY.page)||void 0===t?void 0:t.path)&&function hideModal(){h.el&&h.hide()}()}));(0,a.tA)("enableAlertBeforeUnload"),(0,a.tA)("disableAlertBeforeUnload")},"1621":function(e,t,n){n.d(t,{"W":function(){return o},"F":function(){return r}});var i=n(4651),A=n(4768),o=function startPullDownRefresh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,o=e.complete,r=new A.N({"name":"startPullDownRefresh","success":t,"fail":n,"complete":o});return new Promise((function(e,t){i.Z.eventCenter.trigger("__taroStartPullDownRefresh",{"successHandler":function successHandler(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.success(n,{"resolve":e,"reject":t})},"errorHandler":function errorHandler(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.fail(n,{"resolve":e,"reject":t})}})}))},r=function stopPullDownRefresh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success,n=e.fail,o=e.complete,r=new A.N({"name":"stopPullDownRefresh","success":t,"fail":n,"complete":o});return new Promise((function(e,t){i.Z.eventCenter.trigger("__taroStopPullDownRefresh",{"successHandler":function successHandler(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.success(n,{"resolve":e,"reject":t})},"errorHandler":function errorHandler(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.fail(n,{"resolve":e,"reject":t})}})}))}},"179":function(e,t,n){n.d(t,{"mG":function(){return __awaiter}});function __awaiter(e,t,n,i){return new(n||(n=Promise))((function(A,o){function fulfilled(e){try{step(i.next(e))}catch(e){o(e)}}function rejected(e){try{step(i.throw(e))}catch(e){o(e)}}function step(e){e.done?A(e.value):function adopt(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((i=i.apply(e,t||[])).next())}))}},"8724":function(e,t,n){var i=n(6354),A=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var i,o={},s=null,l=null;for(i in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{"$$typeof":A,"type":e,"key":s,"ref":l,"props":o,"_owner":a.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},"4869":function(e,t,n){e.exports=n(8724)},"9900":function(e,t,n){n.d(t,{"_T":function(){return __rest}});function __rest(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var A=0;for(i=Object.getOwnPropertySymbols(e);A<i.length;A++)t.indexOf(i[A])<0&&Object.prototype.propertyIsEnumerable.call(e,i[A])&&(n[i[A]]=e[i[A]])}return n}Object.create;Object.create},"4808":function(e,t,n){n.r(t),n.d(t,{"default":function(){return u}});var i=n(751),A=(0,i.tA)("setBackgroundTextStyle"),o=(0,i.tA)("setBackgroundColor"),r=n(1621),a=n(4503),c=n(4343),s=n(2927),l=n(4869),u=function Index(){return(0,l.jsxs)(c.G7,{"className":"api-page","children":[(0,l.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){A({"textStyle":"dark"}).then((function(){(0,r.W)();var e=setTimeout((function(){(0,r.F)(),e&&clearTimeout(e)}),2e3)})).catch((function(e){console.log(e),(0,a.CF)({"title":"出错了","icon":"none"})}))},"children":"setBackgroundTextStyle【iOS】"}),(0,l.jsx)(c.zx,{"className":"btn","type":"primary","onClick":function onClick(){o({"backgroundColor":(0,s.p)()}).then((function(){(0,r.W)();var e=setTimeout((function(){(0,r.F)(),e&&clearTimeout(e)}),2e3)})).catch((function(){(0,a.CF)({"title":"出错了","icon":"none"})}))},"children":"setBackgroundColor【Android】"})]})}},"2927":function(e,t,n){n.d(t,{"$L":function(){return a},"Fj":function(){return c},"Ib":function(){return loadWeb},"tT":function(){return loadMini},"ff":function(){return loadRn},"D5":function(){return hadlePermissionsDeny},"P2":function(){return throttle},"p":function(){return randomColor}});var i=n(8741),A=n(9717),o=n(4503),r=n(2012),a=(0,i.dU)()===i.Q4.WEB,c=(0,i.dU)()===i.Q4.RN;function loadWeb(e){var t=e.url,n=e.title,i=e.right,o=e.open,r=e.certified,c=void 0===r||r;a?window.location.href=t:(0,A.T8)({"url":"/pages/webview/index?certified=".concat(c,"&title=").concat(n,"&link=").concat(encodeURIComponent(t)).concat(i?"&right=".concat(i):"").concat(o?"&open=".concat(encodeURIComponent(o)):"")})}function loadMini(e){var t=e.url;(0,A.T8)({"url":"/pages/about/mini?src="+encodeURIComponent(t)})}function loadRn(e){var t=e.android,n=e.ios;(0,A.T8)({"url":"/pages/about/rn?android="+encodeURIComponent(t)+"&ios="+encodeURIComponent(n)})}function hadlePermissionsDeny(e){var t=e.perssionText;(0,o.K4)({"title":"提示","content":"请在“设置-隐私-".concat(t,"”选项中，允许 Taro 访问你的").concat(t,"。"),"confirmColor":"#6190E8","success":function success(e){e.confirm&&(0,r.a)()}})}function throttle(e,t){var n=0;return function(){var i=Date.now(),A=this,o=arguments;i-n>t&&(e.apply(A,o),n=i)}}function randomColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}}]);