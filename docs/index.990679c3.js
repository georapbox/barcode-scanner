function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t,i,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=n.parcelRequirea202;function a(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function c(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,a(e,t,"get"))}function l(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function d(e,t,i){l(e,t),t.set(e,i)}function h(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,a(e,t,"set"),i),i}function u(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}function m(e,t){l(e,t),t.add(e)}null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},n.parcelRequirea202=s),s.register("kyEFX",(function(t,i){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("5KgBx",(function(e,t){e.exports=import("./"+s("kyEFX").resolve("kNnD0")).then((()=>s("liRO9")))})),s("kyEFX").register(JSON.parse('{"eq2Ey":"index.990679c3.js","kNnD0":"barcode-detector.module.08f05a63.js"}')),t={},i=function(){return C},Object.defineProperty(t,"ClipboardCopy",{get:i,set:undefined,enumerable:!0,configurable:!0});const p=document.createElement("template"),f=String.raw;p.innerHTML=f`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Copy</slot></button></slot>
`;var b,g,v=new WeakMap,w=new WeakMap,y=new WeakSet,E=new WeakSet,k=new WeakMap,S=new WeakMap,T=new WeakSet;class C extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){u(this,T,O).call(this,"value"),u(this,T,O).call(this,"from"),u(this,T,O).call(this,"disabled"),c(this,v)&&c(this,v).addEventListener("slotchange",c(this,S)),c(this,w)&&c(this,w).addEventListener("click",c(this,k))}disconnectedCallback(){c(this,v).removeEventListener("slotchange",c(this,S)),c(this,w)&&c(this,w).removeEventListener("click",c(this,k))}attributeChangedCallback(e){"disabled"===e&&c(this,w)&&(c(this,w).disabled=this.disabled,c(this,w).setAttribute("aria-disabled",this.disabled),c(this,w).part&&c(this,w).part.contains("button")&&c(this,w).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}get from(){return this.getAttribute("from")}set from(e){this.setAttribute("from",e)}static defineCustomElement(e="clipboard-copy"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,C)}constructor(){super(),m(this,y),m(this,E),m(this,T),d(this,v,{writable:!0,value:void 0}),d(this,w,{writable:!0,value:void 0}),d(this,k,{writable:!0,value:e=>{e.preventDefault(),this.disabled||(this.dispatchEvent(new Event("clipboard-copy:click",{bubbles:!0,composed:!0})),u(this,y,A).call(this))}}),d(this,S,{writable:!0,value:e=>{e.target&&"button"===e.target.name&&(c(this,w)&&c(this,w).removeEventListener("click",c(this,k)),h(this,w,u(this,E,M).call(this)),c(this,w)&&(c(this,w).addEventListener("click",c(this,k)),"BUTTON"===c(this,w).nodeName||c(this,w).hasAttribute("role")||c(this,w).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(p.content.cloneNode(!0))),h(this,v,this.shadowRoot.querySelector('slot[name="button"]')),h(this,w,u(this,E,M).call(this))}}async function A(){if(this.value||this.from)try{let e="";if(this.value)e=this.value;else if(this.from){const t=("getRootNode"in Element.prototype?c(this,w).getRootNode({composed:!0}):c(this,w).ownerDocument).querySelector(this.from);if(!t)return;e=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:t instanceof HTMLAnchorElement&&t.hasAttribute("href")?t.href:t.textContent}await navigator.clipboard.writeText(e),this.dispatchEvent(new CustomEvent("clipboard-copy:success",{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.dispatchEvent(new CustomEvent("clipboard-copy:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}function M(){return c(this,v)?c(this,v).assignedElements({flatten:!0}).find((e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))):null}function O(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function x(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function L(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,x(e,t,"get"))}function I(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function N(e,t,i){I(e,t),t.set(e,i)}function R(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,x(e,t,"set"),i),i}function W(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}function j(e,t){I(e,t),t.add(e)}C.defineCustomElement(),b={},g=function(){return V},Object.defineProperty(b,"ResizeObserverElement",{get:g,set:undefined,enumerable:!0,configurable:!0});const P=document.createElement("template"),_=String.raw;P.innerHTML=_`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;var z=new WeakMap,B=new WeakMap,D=new WeakMap,q=new WeakSet,F=new WeakSet,H=new WeakMap,U=new WeakSet;class V extends HTMLElement{static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,i){"disabled"===e&&t!==i&&(this.disabled?W(this,F,J).call(this):W(this,q,$).call(this))}connectedCallback(){W(this,U,X).call(this,"disabled"),"ResizeObserver"in window&&(R(this,B,new ResizeObserver((e=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:e}}))}))),this.disabled||W(this,q,$).call(this),L(this,z).addEventListener("slotchange",L(this,H)))}disconnectedCallback(){W(this,F,J).call(this),L(this,z).removeEventListener("slotchange",L(this,H))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}static defineCustomElement(e="resize-observer"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,V)}constructor(){super(),j(this,q),j(this,F),j(this,U),N(this,z,{writable:!0,value:void 0}),N(this,B,{writable:!0,value:void 0}),N(this,D,{writable:!0,value:void 0}),N(this,H,{writable:!0,value:()=>{this.disabled||W(this,q,$).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(P.content.cloneNode(!0))),R(this,z,this.shadowRoot.querySelector("slot")),R(this,B,null),R(this,D,[])}}function $(){L(this,z)&&L(this,B)&&(L(this,D).forEach((e=>L(this,B).unobserve(e))),R(this,D,[]),L(this,z).assignedElements().forEach((e=>{L(this,B).observe(e),L(this,D).push(e)})))}function J(){L(this,B)&&L(this,B).disconnect()}function X(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function G(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function K(e,t){return i=e,(n=G(e,t,"get")).get?n.get.call(i):n.value;var i,n}function Q(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Y(e,t,i){Q(e,t),t.set(e,i)}function Z(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,G(e,t,"set"),i),i}function ee(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}function te(e,t){Q(e,t),t.add(e)}V.defineCustomElement();const ie=document.createElement("template"),ne=String.raw;ie.innerHTML=ne`
  <style>
    :host {
      all: initial;
      display: block;
      box-sizing: border-box;
    }
    :host *,
    :host *::before,
    :host *::after {
      box-sizing: inherit;
    }
    :host video {
      display: block;
    }
    :host #output:empty {
      display: none;
    }
    [hidden] {
      display: none !important;
    }
  </style>
  <video part="video" playsinline></video>
  <canvas hidden></canvas>
  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button"><slot name="capture-button-content">Capture photo</slot></button>
    </slot>
    <slot name="facing-mode-button"><button part="facing-mode-button" type="button"><slot name="facing-mode-button-content">Toggle facing mode</slot></button></slot>
  </div>
  <div part="output-container" id="output"></div>
`;var oe=new WeakMap,re=new WeakMap,se=new WeakMap,ae=new WeakMap,ce=new WeakMap,le=new WeakMap,de=new WeakMap,he=new WeakMap,ue=new WeakMap,me=new WeakMap,pe=new WeakSet,fe=new WeakSet,be=new WeakMap,ge=new WeakMap,ve=new WeakMap,we=new WeakSet,ye=new WeakSet,Ee=new WeakMap,ke=new WeakMap,Se=new WeakSet,Te=new WeakSet,Ce=new WeakSet;class Ae extends HTMLElement{connectedCallback(){if(ee(this,Ce,Re).call(this,"noImage"),ee(this,Ce,Re).call(this,"facingMode"),ee(this,Ce,Re).call(this,"cameraResolution"),ee(this,Ce,Re).call(this,"zoom"),Z(this,oe,!0),Z(this,ae,this.shadowRoot.querySelector("canvas")),Z(this,ce,this.shadowRoot.getElementById("output")),Z(this,le,this.shadowRoot.querySelector("video")),K(this,le)&&K(this,le).addEventListener("loadedmetadata",K(this,ve)),Z(this,de,this.shadowRoot.querySelector('slot[name="capture-button"]')),K(this,de)&&K(this,de).addEventListener("slotchange",K(this,Ee)),Z(this,he,ee(this,Te,Ne).call(this)),K(this,he)&&K(this,he).addEventListener("click",K(this,ge)),Z(this,ue,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),K(this,ue)&&K(this,ue).addEventListener("slotchange",K(this,ke)),Z(this,me,ee(this,Se,Ie).call(this)),K(this,me)&&(K(this,re).facingMode?K(this,me).addEventListener("click",K(this,be)):K(this,me).hidden=!0),!Ae.isSupported())return this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));ee(this,fe,Oe).call(this)}disconnectedCallback(){ee(this,pe,Me).call(this),K(this,me)&&K(this,me).removeEventListener("click",K(this,be)),K(this,he)&&K(this,he).removeEventListener("click",K(this,ge)),K(this,le)&&K(this,le).removeEventListener("canplay",K(this,ve)),K(this,de)&&K(this,de).removeEventListener("slotchange",K(this,Ee)),K(this,ue)&&K(this,ue).removeEventListener("slotchange",K(this,ke))}attributeChangedCallback(e,t,i){K(this,oe)&&("no-image"===e&&ee(this,we,xe).call(this),"facing-mode"===e&&K(this,re).facingMode&&t!==i&&(ee(this,pe,Me).call(this),ee(this,fe,Oe).call(this),this.dispatchEvent(new CustomEvent("capture-photo:facing-mode-change",{bubbles:!0,composed:!0,detail:{facingMode:i}}))),"camera-resolution"===e&&t!==i&&(ee(this,pe,Me).call(this),ee(this,fe,Oe).call(this),this.dispatchEvent(new CustomEvent("capture-photo:camera-resolution-change",{bubbles:!0,composed:!0,detail:{cameraResolution:i}}))),"zoom"===e&&t!==i&&(ee(this,ye,Le).call(this,this.zoom),this.dispatchEvent(new CustomEvent("capture-photo:zoom-change",{bubbles:!0,composed:!0,detail:{zoom:this.zoom}}))))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","zoom"]}get noImage(){return this.hasAttribute("no-image")}set noImage(e){e?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(e){const t=Number(e)||0;this.setAttribute("zoom",t>0?Math.floor(t):0)}get loading(){return this.hasAttribute("loading")}capture(){if(!this.loading)try{const e=K(this,ae).getContext("2d"),t=K(this,le).videoWidth,i=K(this,le).videoHeight;K(this,ae).width=t,K(this,ae).height=i,e.drawImage(K(this,le),0,0,t,i);const n=K(this,ae).toDataURL("image/png");if("string"==typeof n&&n.includes("data:image")){if(!this.noImage){const e=new Image;e.src=n,e.width=t,e.height=i,e.part="output-image",ee(this,we,xe).call(this),K(this,ce)&&K(this,ce).appendChild(e)}this.dispatchEvent(new CustomEvent("capture-photo:success",{bubbles:!0,composed:!0,detail:{dataURI:n,width:t,height:i}}))}}catch(e){this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}static isSupported(){return Boolean(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}static defineCustomElement(e="capture-photo"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,Ae)}constructor(){super(),te(this,pe),te(this,fe),te(this,we),te(this,ye),te(this,Se),te(this,Te),te(this,Ce),Y(this,oe,{writable:!0,value:void 0}),Y(this,re,{writable:!0,value:void 0}),Y(this,se,{writable:!0,value:void 0}),Y(this,ae,{writable:!0,value:void 0}),Y(this,ce,{writable:!0,value:void 0}),Y(this,le,{writable:!0,value:void 0}),Y(this,de,{writable:!0,value:void 0}),Y(this,he,{writable:!0,value:void 0}),Y(this,ue,{writable:!0,value:void 0}),Y(this,me,{writable:!0,value:void 0}),Y(this,be,{writable:!0,value:e=>{e.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),Y(this,ge,{writable:!0,value:e=>{e.preventDefault(),this.capture()}}),Y(this,ve,{writable:!0,value:e=>{const t=e.target;t.play().then((()=>{this.dispatchEvent(new CustomEvent("capture-photo:video-play",{bubbles:!0,composed:!0,detail:{video:t}}))})).catch((e=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:e}}))})).finally((()=>{this.removeAttribute("loading")}))}}),Y(this,Ee,{writable:!0,value:e=>{e.target&&"capture-button"===e.target.name&&(K(this,he)&&K(this,he).removeEventListener("click",K(this,ge)),Z(this,he,ee(this,Te,Ne).call(this)),K(this,he)&&(K(this,he).addEventListener("click",K(this,ge)),"BUTTON"===K(this,he).nodeName||K(this,he).hasAttribute("role")||K(this,he).setAttribute("role","button")))}}),Y(this,ke,{writable:!0,value:e=>{e.target&&"facing-mode-button"===e.target.name&&(K(this,me)&&K(this,me).removeEventListener("click",K(this,be)),Z(this,me,ee(this,Se,Ie).call(this)),K(this,me)&&(K(this,me).addEventListener("click",K(this,be)),"BUTTON"===K(this,me).nodeName||K(this,me).hasAttribute("role")||K(this,me).setAttribute("role","button")))}}),Z(this,oe,!1),Z(this,re,Ae.isSupported()?navigator.mediaDevices.getSupportedConstraints():{}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ie.content.cloneNode(!0)))}}function Me(){if(!K(this,le)||!K(this,se))return;const[e]=K(this,se).getVideoTracks();e&&e.stop(),K(this,le).srcObject=null,Z(this,se,null)}function Oe(){if(!Ae.isSupported())return;this.setAttribute("loading","");const e={video:{facingMode:{ideal:this.facingMode||"user"}},audio:!1};if("string"==typeof this.cameraResolution){const[t,i]=this.cameraResolution.split("x");e.video.width=t,e.video.height=i}navigator.mediaDevices.getUserMedia(e).then((e=>{K(this,le).srcObject=e,Z(this,se,e),ee(this,ye,Le).call(this,this.zoom)})).catch((e=>{this.dispatchEvent(new CustomEvent("capture-photo:error",{bubbles:!0,composed:!0,detail:{error:e}}))})).finally((()=>{this.removeAttribute("loading")}))}function xe(){K(this,ce)&&Array.from(K(this,ce).childNodes).forEach((e=>e.remove()))}function Le(e){if(!K(this,se)||!e)return;const[t]=K(this,se).getVideoTracks();if("function"!=typeof t.getCapabilities||"function"!=typeof t.getSettings)return;const i=t.getCapabilities();var n,o,r;"zoom"in t.getSettings()&&t.applyConstraints({advanced:[{zoom:(n=Number(e),o=i.zoom.min,r=i.zoom.max,Number.isNaN(o)&&(o=0),Number.isNaN(r)&&(r=0),Math.min(Math.max(n,Math.min(o,r)),Math.max(o,r)))}]})}function Ie(){return K(this,ue)?K(this,ue).assignedElements({flatten:!0}).find((e=>"BUTTON"===e.nodeName||"facing-mode-button"===e.getAttribute("slot"))):null}function Ne(){return K(this,de)?K(this,de).assignedElements({flatten:!0}).find((e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))):null}function Re(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}
/*!
 * @georapbox/web-storage
 * WebStorage is a JavaScript library that improves the way you work with localStorage or sessionStorage using a simple, localStorage-like API. It allows developers to store many types of data instead of just strings.
 *
 * @version v2.1.0
 * @author George Raptis <georapbox@gmail.com>
 * @homepage https://github.com/georapbox/web-storage#readme
 * @repository https://github.com/georapbox/web-storage.git
 * @license MIT
 */function We(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function je(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Pe(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _e(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function ze(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(i),!0).forEach((function(t){Pe(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_e(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Be(e){return String.prototype.trim?e.trim():e.replace(/(^\s*|\s*$)/g,"")}function De(e,t){return 0===e.indexOf(t)?e.slice(t.length):e}function qe(e){return null!=e&&("string"==typeof e||"[object String]"===Object.prototype.toString.call(e))}function Fe(e){var t=Object.prototype.toString.call(e);return"[object AsyncFunction]"===t||"[object Function]"===t||"[object GeneratorFunction]"===t}function He(e,t){var i=e._driver;Object.keys(i).forEach((function(n){(function(e,t){var i,n;return i=t,n=e._keyPrefix,i.substr(0,n.length)===n})(e,n)&&t(n,i[n])}))}var Ue=function(){},Ve={getItem:Ue,setItem:Ue,removeItem:Ue};function $e(e){try{var t=window[e],i="__web-storage__test";t.setItem(i,"test"),t.getItem(i),t.removeItem(i)}catch(e){return!1}return!0}function Je(e){return $e(e)?window[e]:(console&&console.warn&&console.warn("WebStorage failed to create sync storage; falling back to noop storage."),Ve)}var Xe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};We(this,e);var i={driver:"localStorage",keyPrefix:"web-storage/"};if("localStorage"!==(t=ze(ze({},i),t)).driver&&"sessionStorage"!==t.driver)throw new Error('The "driver" option must be one of "localStorage" or "sessionStorage".');if(!qe(t.keyPrefix))throw new TypeError('The "keyPrefix" option must be a string.');this._storageType=t.driver,this._driver=Je(t.driver),this._keyPrefix=Be(t.keyPrefix)}var t;return t=[{key:"getItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!qe(e))throw new TypeError("Failed to execute 'getItem' on 'Storage': The first argument must be a string.");var i=null;try{var n=this._driver.getItem(this._keyPrefix+e),o=JSON.parse(n);i=o}catch(e){t(e)}return i}},{key:"setItem",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};if(!qe(e))throw new TypeError("Failed to execute 'setItem' on 'Storage': The first argument must be a string.");e=this._keyPrefix+e,t=null==t||Fe(t)?null:t;try{this._driver.setItem(e,JSON.stringify(t))}catch(e){i(e)}}},{key:"removeItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!qe(e))throw new TypeError("Failed to execute 'removeItem' on 'Storage': The first argument must be a string.");try{this._driver.removeItem(this._keyPrefix+e)}catch(e){t(e)}}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};try{He(this,this._driver.removeItem.bind(this._driver))}catch(t){e(t)}}},{key:"keys",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},i=[];try{return He(this,(function(t){return i.push(De(t,e._keyPrefix))})),i}catch(e){t(e)}}},{key:"length",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};try{return this.keys().length}catch(t){e(t)}}},{key:"iterate",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(!Fe(e))throw new TypeError("Failed to iterate on 'Storage': 'iteratorCallback' must be a function.");try{He(this,(function(i,n){var o=De(i,t._keyPrefix),r=JSON.parse(n);e.call(t,r,o)}))}catch(e){i(e)}}}],je(e.prototype,t),e}();Xe.isAvailable=function(e){return $e(e)},Xe.createInstance=function(e){return new Xe(e)};const Ge=Xe.createInstance({driver:"localStorage",keyPrefix:"barcode-scanner/"}),Ke=(e,t)=>{if("function"!=typeof e)throw new TypeError("Expected a function for first argument");if("number"!=typeof t)throw new TypeError("Expected a number for second argument");return(...i)=>{const n=t>0?t:0;return e(...i.slice(0,n))}},Qe=document.getElementById("toastContainer"),Ye=e=>{const t=e.currentTarget;t.removeEventListener("click",Ye),Qe.removeChild(t.parentNode)},Ze=(e="",t="info")=>{["info","warning","danger"].includes(t)||(t="info");const i=`\n    ${e}\n    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n  `,n=document.createElement("div");n.className=`alert alert-${t} alert-dismissible text-break`,n.innerHTML=i,n.querySelector("button").addEventListener("click",Ye),Qe.appendChild(n),setTimeout((()=>n.classList.add("show")),100)};!async function(){const e=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],t=document.querySelector("capture-photo"),i=document.getElementById("cameraResults"),n=document.getElementById("fileResults"),o=document.getElementById("scanInstructions"),r=document.getElementById("scanBtn"),a=document.getElementById("scanMethod"),c=document.getElementById("fileInput"),l=document.getElementById("dropzone"),d=document.getElementById("cameraView"),h=document.getElementById("fileView"),u=document.querySelector("resize-observer"),m=document.getElementById("scanFrame"),p=document.getElementById("settingsBtn"),f=document.getElementById("settingsDialog"),b=document.forms["settings-form"];let g,v=!0;if(!("BarcodeDetector"in window))try{window.BarcodeDetector=(await s("5KgBx")).default}catch(e){return d.hidden=!0,h.hidden=!0,a.hidden=!0,p.hidden=!0,Ze("BarcodeDetector API is not supported by your browser.","danger")}const w=(()=>{const e=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(e)return(t,i,n,o,r)=>{if(!Ge.getItem("settings")?.beep)return;const s=e.createOscillator(),a=e.createGain();s.connect(a),a.connect(e.destination),n&&(a.gain.value=n),i&&(s.frequency.value=i),o&&(s.type=o),"function"==typeof r&&(s.onended=r),s.start(e.currentTime),s.stop(e.currentTime+(t||500)/1e3)}})();function y(e=100){if("function"==typeof window.navigator.vibrate&&Ge.getItem("settings")?.vibrate)try{window.navigator.vibrate(e)}catch{}}function E(e){if(!e)return;const t=e.getBoundingClientRect();m.style.cssText=`width: ${t.width}px; height: ${t.height}px`}t.addEventListener("capture-photo:video-play",(e=>{m.hidden=!1,E(e.detail.video),M()}),{once:!0}),Ae.defineCustomElement(),c.accept=e.join(",");const k=t.shadowRoot.querySelector("video"),S=new window.BarcodeDetector({formats:await window.BarcodeDetector.getSupportedFormats()});function T(e){e.querySelectorAll(".results__item").forEach((e=>e.remove()))}function C(e,t){if(!e)return;let i;try{new URL(e),i=document.createElement("a"),i.href=e,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener"),Ge.getItem("settings")?.openWebPage&&i.click()}catch(e){i=document.createElement("span")}i.className="results__item",i.textContent=e,t.appendChild(i);const n=t.querySelector("clipboard-copy");n&&(n.disabled="-"===e)}function A(e){return new Promise(((t,i)=>{S.detect(e).then((e=>{Array.isArray(e)&&e.length>0?t(e[0]):i({message:"Could not detect barcode from provided source."})})).catch((e=>{i(e)}))}))}async function M(){o.hidden=!1;try{const e=await A(k);return window.cancelAnimationFrame(g),T(i),C(e.rawValue,i),o.hidden=!0,r.hidden=!1,m.hidden=!0,w(200,860,.03,"square"),void y()}catch(e){}v&&(g=window.requestAnimationFrame(Ke(M,0)))}function O(e){const t=new Image,i=new FileReader;i.addEventListener("load",(e=>{const i=e.target.result;t.addEventListener("load",(async()=>{try{const e=await A(t);T(n),C(e.rawValue,n),w(200,860,.03,"square"),y()}catch(e){T(n),C("-",n)}})),t.src=i,l.querySelectorAll("img").forEach((e=>e.remove())),l.prepend(t)})),e&&i.readAsDataURL(e)}Object.entries(Ge.getItem("settings")||{}).forEach((([e,t])=>{const i=b.querySelector(`[name="${e}"]`);i&&(i.checked=t)})),document.addEventListener("capture-photo:error",(e=>{t.hidden=!0,d.hidden=!0,h.hidden=!1,a.hidden=!0;const i=e.detail.error;if("NotFoundError"===i.name)return;const n="NotAllowedError"===i.name?"Permission to use webcam was denied. Reload the page to give appropriate permissions to webcam.":i.message;Ze(n,"danger")}),{once:!0}),r.addEventListener("click",(()=>{r.hidden=!0,m.hidden=!1,T(i),M()})),a.addEventListener("change",(e=>{const n=e.target.value;[d,h].forEach((e=>{e.hidden=e.id!==n})),"cameraView"===n&&(v=!0,t.hidden||t.loading||i.querySelector(".results__item")||M()),"fileView"===n&&(v=!1)})),c.addEventListener("change",(e=>{O(e.target.files[0])})),l.addEventListener("dragover",(e=>{e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"})),l.addEventListener("drop",(t=>{t.stopPropagation(),t.preventDefault();const i=t.dataTransfer.files,[n]=i;n&&e.includes(n.type)&&(c.value=c.defaultValue,O(n))})),u.addEventListener("resize-observer:resize",(()=>{E(t.shadowRoot.querySelector("video"))})),p.addEventListener("click",(()=>{f.showModal()})),f.addEventListener("click",(e=>{e.target===e.currentTarget&&f.close()})),b.addEventListener("change",(e=>{const t={};e.currentTarget.querySelectorAll('input[type="checkbox"]').forEach((e=>t[e.name]=e.checked)),Ge.setItem("settings",t)}))}();
//# sourceMappingURL=index.990679c3.js.map