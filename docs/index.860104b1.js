!function(){var t,e,i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},n=s.parcelRequirea202;null==n&&((n=function(t){if(t in o)return o[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return o[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},s.parcelRequirea202=n);var r=n.register;r("3c8ZQ",function(t,e){t.exports=n("4WKyX")(n("iE7OH").resolve("Oreqb")).then(()=>n("dZsGG"))}),r("4WKyX",function(t,e){var i=n("2prpb");t.exports=i(function(t){return new Promise(function(e,i){if([].concat(document.getElementsByTagName("script")).some(function(e){return e.src===t})){e();return}var s=document.createElement("link");s.href=t,s.rel="preload",s.as="script",document.head.appendChild(s);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=t,o.onerror=function(e){var s=TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));o.onerror=o.onload=null,o.remove(),i(s)},o.onload=function(){o.onerror=o.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(o)})})}),r("2prpb",function(t,e){var i={},s={},o={};t.exports=function(t,e){return function(a){var n=function(t){switch(t){case"preload":return s;case"prefetch":return o;default:return i}}(e);return n[a]?n[a]:n[a]=t.apply(null,arguments).catch(function(t){throw delete n[a],t})}}});let l="a-tab",d=document.createElement("template"),c=0;d.innerHTML=/* html */`
  <style>
    .tab {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.375rem 0.75rem;
      white-space: nowrap;
      cursor: pointer;
    }

    :host([disabled]) .tab {
      opacity: 0.7;
      cursor: not-allowed;
    }

    :host([selected]) .tab {
      color: var(--selected-tab-color);
      background-color: var(--selected-tab-bg-color);
    }

    .tab__close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      font-size: inherit;
      cursor: pointer;
    }
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;class h extends HTMLElement{static get observedAttributes(){return["selected","disabled","closable"]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(d.content.cloneNode(!0)))}connectedCallback(){this.#t("selected"),this.#t("disabled"),this.#t("closable"),this.id||(this.id=`a-tab-generated-${c++}`),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled?-1:0)}disconnectedCallback(){let t=this.shadowRoot.querySelector(".tab__close");t?.removeEventListener("click",this.#e)}attributeChangedCallback(t,e,i){if("selected"===t&&e!==i&&this.setAttribute("aria-selected",this.selected),"disabled"===t&&e!==i&&(this.setAttribute("aria-disabled",this.disabled),this.setAttribute("tabindex",this.disabled?-1:0)),"closable"===t&&e!==i){if(this.closable){let t=document.createElement("span");t.className="tab__close",t.part="close-tab",t.innerHTML=/* html */'<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot.querySelector(".tab").appendChild(t),t.addEventListener("click",this.#e)}else{let t=this.shadowRoot.querySelector(".tab__close");t?.removeEventListener("click",this.#e),t?.remove()}}}get selected(){return this.hasAttribute("selected")}set selected(t){t?this.setAttribute("selected",""):this.removeAttribute("selected")}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get closable(){return this.hasAttribute("closable")}set closable(t){t?this.setAttribute("closable",""):this.removeAttribute("closable")}#e=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent(`${l}-close`,{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#t(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}}window.customElements&&!window.customElements.get(l)&&window.customElements.define(l,h);let u="a-tab-panel",p=document.createElement("template"),b=0;p.innerHTML=/* html */`
  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;class m extends HTMLElement{constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(p.content.cloneNode(!0)))}connectedCallback(){this.setAttribute("role","tabpanel"),this.id||(this.id=`a-tab-panel-generated-${b++}`)}}window.customElements&&!window.customElements.get(u)&&window.customElements.define(u,m);let g="a-tab-group",f="a-tab",v="a-tab-panel",w="bottom",y="start",E="auto",A="manual",x={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:"Space"},k=document.createElement("template");k.innerHTML=/* html */`
  <style>
    *,
    *::after,
    *::before {
      box-sizing: inherit;
      margin: 0;
      padding: 0;
    }

    :host([hidden]),
    [hidden],
    ::slotted([hidden]) {
      display: none !important;
    }

    :host {
      --selected-tab-color: #005fcc;
      --selected-tab-bg-color: transparent;
      --tabs-scroll-behavior: smooth;
      --scroll-button-width: 2.125em;
      --scroll-button-height: 2.125em;
      --scroll-button-inline-offset: 0rem;

      display: block;
      box-sizing: border-box;
    }

    .tab-group {
      display: flex;
      width: 100%;
    }

    .tab-group__nav {
      position: relative;
    }

    .tab-group__nav--scrollable {
      padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
    }

    .tab-group__scroll-button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: var(--scroll-button-width);
      height: var(--scroll-button-height);
      border: 0;
      z-index: 1;
      background-color: transparent;
      font-size: inherit;
      cursor: pointer;
    }

    .tab-group__scroll-button--start {
      left: var(--scroll-button-inline-offset);
    }

    .tab-group__scroll-button--end {
      right: var(--scroll-button-inline-offset);
    }

    .tab-group__tabs {
      display: flex;
      padding: 0.25rem;
      overflow-x: auto;
      scroll-behavior: var(--tabs-scroll-behavior);
      scrollbar-width: none;
    }

    .tab-group__tabs::-webkit-scrollbar {
      display: none;
    }

    .tab-group__panels {
      padding: 1rem 0;
    }

    /* placement="top" */
    .tab-group,
    :host([placement="top"]) .tab-group {
      flex-direction: column;
    }

    /* placement="bottom" */
    :host([placement="${w}"]) .tab-group {
      flex-direction: column;
    }

    :host([placement="${w}"]) .tab-group__nav {
      order: 1;
    }

    /* placement="start" */
    :host([placement="${y}"]) .tab-group {
      flex-direction: row;
    }

    :host([placement="${y}"]) .tab-group__tabs {
      flex-direction: column;
      align-items: flex-start;
    }

    :host([placement="${y}"]) .tab-group__panels {
      flex: 1;
      padding: 0 1rem;
    }

    /* placement="end" */
    :host([placement="end"]) .tab-group {
      flex-direction: row;
    }

    :host([placement="end"]) .tab-group__nav {
      order: 1;
    }

    :host([placement="end"]) .tab-group__tabs {
      flex-direction: column;
      align-items: flex-start;
    }

    :host([placement="end"]) .tab-group__panels {
      flex: 1;
      padding: 0 1rem;
    }
  </style>

  <div part="base" class="tab-group">
    <div class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;class z extends HTMLElement{#i=!1;#s;static get observedAttributes(){return["placement","no-scroll-controls"]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(k.content.cloneNode(!0)))}connectedCallback(){this.#t("placement"),this.#t("noScrollControls"),this.#t("scrollDistance"),this.#t("activation"),this.#t("panelTransition");let t=this.shadowRoot.querySelector("slot[name=tab]"),e=this.shadowRoot.querySelector("slot[name=panel]"),i=this.shadowRoot.querySelector(".tab-group__tabs"),s=this.shadowRoot.querySelector(".tab-group__nav"),o=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));t.addEventListener("slotchange",this.#o),e.addEventListener("slotchange",this.#o),i.addEventListener("click",this.#a),i.addEventListener("keydown",this.#n),o.forEach(t=>t.addEventListener("click",this.#r)),this.addEventListener(`${f}-close`,this.#l),"ResizeObserver"in window&&(this.#s=new ResizeObserver(t=>{let e=t?.[0],i=e?.target,a=i?.scrollWidth>(e?.borderBoxSize?.[0]?.inlineSize||i?.clientWidth);o.forEach(t=>t.hidden=!a),s.classList.toggle("tab-group__nav--scrollable",a)})),this.#d(),this.hidden=0===this.#c().length,this.placement=this.placement||"top"}disconnectedCallback(){let t=this.shadowRoot.querySelector("slot[name=tab]"),e=this.shadowRoot.querySelector("slot[name=panel]"),i=this.shadowRoot.querySelector(".tab-group__tabs"),s=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));t.removeEventListener("slotchange",this.#o),e.removeEventListener("slotchange",this.#o),i.removeEventListener("click",this.#a),i.removeEventListener("keydown",this.#n),s.forEach(t=>t.removeEventListener("click",this.#r)),this.removeEventListener(`${f}-close`,this.#l),this.#h()}attributeChangedCallback(t,e,i){"placement"===t&&e!==i&&this.#d(),"no-scroll-controls"===t&&e!==i&&this.#d()}get placement(){return this.getAttribute("placement")}set placement(t){this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){t?this.setAttribute("no-scroll-controls",""):this.removeAttribute("no-scroll-controls")}get scrollDistance(){return Math.abs(this.getAttribute("scroll-distance"))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t)||200)}get activation(){return this.getAttribute("activation")||E}set activation(t){this.setAttribute("activation",t||E)}get panelTransition(){return this.hasAttribute("panel-transition")}set panelTransition(t){t?this.setAttribute("panel-transition",""):this.removeAttribute("panel-transition")}#u(){if(!this.#s)return;let t=this.shadowRoot.querySelector(".tab-group__tabs");this.#s.unobserve(t),this.#s.observe(t)}#h(){this.#s&&this.#s.disconnect()}#p(){let t=this.#c();// Hide the tab group if there are no tabs.
this.hidden=0===t.length,t.forEach(t=>{let e=t.nextElementSibling;if(!e||e.tagName.toLowerCase()!==v)return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)});// Get the selected non-disabled tab, or the first non-disabled tab.
let e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);this.#b(e)}#m(){return Array.from(this.querySelectorAll(v))}#c(){return Array.from(this.querySelectorAll(f))}#g(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#f(){return this.#c().find(t=>!t.disabled)}#v(){let t=this.#c();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e]}#w(){let t=this.#c(),e=this.activation===A?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;// Keep looping until we find a non-disabled tab.
for(;t[(e+t.length)%t.length].disabled;)e--;// Add `tabs.length` to make sure the index is a positive number and get the modulus to wrap around if necessary.
return t[(e+t.length)%t.length]}#y(){let t=this.#c(),e=this.activation===A?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;// Keep looping until we find a non-disabled tab.
for(;t[e%t.length].disabled;)e++;return t[e%t.length]}#n=t=>{let e;if(t.target.tagName.toLowerCase()===f// Ignore any key presses that have a modifier.
&&!t.altKey// Don’t handle modifier shortcuts typically used by assistive technology.
){switch(t.code){case x.LEFT:case x.UP:e=this.#w(),this.activation===A?e.focus():this.selectTab(e);break;case x.RIGHT:case x.DOWN:e=this.#y(),this.activation===A?e.focus():this.selectTab(e);break;case x.HOME:e=this.#f(),this.activation===A?e.focus():this.selectTab(e);break;case x.END:e=this.#v(),this.activation===A?e.focus():this.selectTab(e);break;case x.ENTER:case x.SPACE:e=t.target,this.selectTab(e);break;default:return}// The browser might have some native functionality bound to the arrow keys, home or end.
// `preventDefault()` is called to prevent the browser from taking any actions.
t.preventDefault()}};#a=t=>{let e=t.target.closest(f);this.selectTab(e)};#r=t=>{let e=t.target.closest(".tab-group__scroll-button");if(!e)return;let i=this.shadowRoot.querySelector(".tab-group__tabs"),s=e.classList.contains("tab-group__scroll-button--start")?y:"end";i.scrollBy({left:s===y?-this.scrollDistance:this.scrollDistance})};#l=t=>{let e=t.target,i=this.#g(e);e&&i.tagName.toLowerCase()===v&&(i.remove(),e.remove())};#o=()=>{this.#i=!1,this.#p(),this.#d()};#E(){let t=this.#c(),e=this.#m();t.forEach(t=>t.selected=!1),this.#A(()=>e.forEach(t=>t.hidden=!0))}#b(t){if(this.#E(),!t||t.selected)return;// Get the panel that the `newTab` is associated with.
let e=this.#g(t);e&&(t.selected=!0,this.#A(()=>e.hidden=!1),this.#i=!0)}#d(){let t=this.shadowRoot.querySelector(".tab-group__nav"),e=Array.from(this.shadowRoot.querySelectorAll(".tab-group__scroll-button"));this.noScrollControls||this.placement===y||"end"===this.placement?(this.#h(),e.forEach(t=>t.hidden=!0),t.classList.remove("tab-group__nav--scrollable")):(this.#u(),e.forEach(t=>t.hidden=!1))}#A(t=()=>{}){"function"==typeof document.startViewTransition&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches&&this.#i&&this.panelTransition?document.startViewTransition(t):t()}#t(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}selectTabByIndex(t){let e=this.#c()[t];this.selectTab(e)}selectTab(t){!t||t.disabled||t.selected||(this.#b(t),setTimeout(()=>t.focus(),0),this.dispatchEvent(new CustomEvent(`${f}-select`,{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}}function C(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function S(t,e){var i;return(i=C(t,e,"get")).get?i.get.call(t):i.value}function L(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function T(t,e,i){L(t,e),e.set(t,i)}function _(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,C(t,e,"set"),i),i}function M(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i}function R(t,e){L(t,e),e.add(t)}window.customElements&&!window.customElements.get(g)&&window.customElements.define(g,z),Object.defineProperty({},"WebShare",{get:function(){return W},set:t,enumerable:!0,configurable:!0});let N=document.createElement("template"),q=String.raw;N.innerHTML=q`
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;var O=new WeakMap,I=new WeakMap,D=new WeakMap,B=new WeakMap,$=new WeakMap,j=new WeakSet,F=new WeakSet;class W extends HTMLElement{static get observedAttributes(){return["disabled"]}connectedCallback(){M(this,F,P).call(this,"shareUrl"),M(this,F,P).call(this,"shareTitle"),M(this,F,P).call(this,"shareText"),M(this,F,P).call(this,"shareFiles"),M(this,F,P).call(this,"disabled"),S(this,O)&&S(this,O).addEventListener("slotchange",S(this,$)),S(this,I)&&S(this,I).addEventListener("click",S(this,B))}disconnectedCallback(){S(this,O)&&S(this,O).removeEventListener("slotchange",S(this,$)),S(this,I)&&S(this,I).removeEventListener("click",S(this,B))}attributeChangedCallback(t){"disabled"===t&&S(this,I)&&(S(this,I).disabled=this.disabled,S(this,I).setAttribute("aria-disabled",this.disabled),S(this,I).part&&S(this,I).part.contains("button")&&S(this,I).part.toggle("button--disabled",this.disabled))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get shareUrl(){return this.getAttribute("share-url")}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return S(this,D)}set shareFiles(t){_(this,D,t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if("AbortError"===t.name)return this.dispatchEvent(new Event("web-share:abort",{bubbles:!0,composed:!0}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,W)}constructor(){super(),R(this,j),R(this,F),T(this,O,{writable:!0,value:void 0}),T(this,I,{writable:!0,value:void 0}),T(this,D,{writable:!0,value:null}),T(this,B,{writable:!0,value:t=>{t.preventDefault(),this.disabled||(this.dispatchEvent(new Event("web-share:click",{bubbles:!0,composed:!0})),this.share())}}),T(this,$,{writable:!0,value:t=>{t.target&&"button"===t.target.name&&(S(this,I)&&S(this,I).removeEventListener("click",S(this,B)),_(this,I,M(this,j,H).call(this)),S(this,I)&&(S(this,I).addEventListener("click",S(this,B)),"BUTTON"===S(this,I).nodeName||S(this,I).hasAttribute("role")||S(this,I).setAttribute("role","button")))}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(N.content.cloneNode(!0))),_(this,O,this.shadowRoot.querySelector('slot[name="button"]')),_(this,I,M(this,j,H).call(this))}}function H(){return S(this,O)?S(this,O).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot")):null}function P(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}W.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return to},set:void 0,enumerable:!0,configurable:!0});let V=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),U=[".DS_Store","Thumbs.db"],Z=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let i=e.split(".").pop().toLowerCase(),s=V.get(i);s&&Object.defineProperty(t,"type",{value:s,writable:!1,configurable:!1,enumerable:!0})}return t},K=(t,e)=>{let i=Z(t);if("string"!=typeof i.path){let{webkitRelativePath:s}=t;Object.defineProperty(i,"path",{value:"string"==typeof e?e:s||t.name,writable:!1,configurable:!1,enumerable:!0})}return i},G=async t=>await new Promise((e,i)=>{t.readEntries(e,i)}),Y=async t=>{let e=[],i=await G(t);for(;i.length>0;)e.push(...i),i=await G(t);return e},Q=t=>new Promise((e,i)=>{t.file(i=>e(K(i,t.fullPath)),i)}),X=async t=>{let e=[],i=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();i.push(t)}for(;i.length>0;){let t=i.shift();if(t){if(t.isFile){let i=await Q(t);-1===U.indexOf(i.name)&&e.push(i)}else t.isDirectory&&i.push(...await Y(t.createReader()))}}return e},J=async t=>{let e=[];for(let i of t)-1===U.indexOf(i.name)&&e.push(K(i));return e},tt=async t=>t.dataTransfer?t.dataTransfer.items?await X(t.dataTransfer.items):await J(t.dataTransfer.files):await J(t.target.files),te="files-dropzone",ti="TOO_MANY_FILES",ts=document.createElement("template");ts.innerHTML=`
  <style>
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    :host {
      --dropzone-border-width: 2px;
      --dropzone-border-style: dashed;
      --dropzone-border-radius: 0.25rem;
      --dropzone-border-color: #6c757d;
      --dropzone-border-color-dragover: #0d6efd;
      --dropzone-background-color: #ffffff;
      --dropzone-background-color-dragover: #f4f4f5;
      --dropzone-body-color: #3f3f46;
      --dropzone-body-color-dragover: var(--dropzone-body-color);
      --dropzone-focus-shadow-rgb: 49,132,253;
      --transition-duration: 0.2s;

      display: block;
    }

    :host(:not([no-style])) .dropzone {
      border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
      border-radius: var(--dropzone-border-radius);
      padding: 3rem 1rem;
      overflow: hidden;
      background-color: var(--dropzone-background-color);
      color: var(--dropzone-body-color);
      text-align: center;
      cursor: pointer;
      transition: border var(--transition-duration) ease-in-out, background-color var(--transition-duration) ease-in-out, color var(--transition-duration) ease-in-out, box-shadow var(--transition-duration) ease-in-out;
    }

    :host(:not([no-style])[no-click]) .dropzone {
      cursor: default;
    }

    :host(:not([no-style])[disabled]) .dropzone {
      opacity: 0.8;
      cursor: not-allowed;
    }

    :host(:not([no-style]):not([disabled])) .dropzone--dragover {
      border-color: var(--dropzone-border-color-dragover);
      background-color: var(--dropzone-background-color-dragover);
      color: var(--dropzone-body-color-dragover);
    }

    :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
      outline: none;
      box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    }
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class to extends HTMLElement{#e;#t;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ts.content.cloneNode(!0))),this.#e=this.shadowRoot.getElementById("fileInput"),this.#t=this.shadowRoot.getElementById("dropzoneEl")}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(t,e,i){"accept"===t&&e!==i&&this.#e&&(this.#e.accept=this.accept),"disabled"===t&&e!==i&&this.#e&&(this.#e.disabled=this.disabled,this.disabled?this.#t.removeAttribute("tabindex"):this.#t.setAttribute("tabindex","0")),"multiple"===t&&e!==i&&this.#e&&(this.#e.multiple=this.multiple),"no-keyboard"===t&&e!==i&&this.#t&&(this.noKeyboard?this.#t.removeAttribute("tabindex"):this.#t.setAttribute("tabindex","0"))}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("noClick"),this.#s("noDrag"),this.#s("noKeyboard"),this.#s("autoFocus"),this.#s("noStyle"),this.#e.addEventListener("change",this.#r),this.#t.addEventListener("dragenter",this.#n),this.#t.addEventListener("dragover",this.#o),this.#t.addEventListener("dragleave",this.#i),this.#t.addEventListener("drop",this.#l),this.#t.addEventListener("click",this.#c),this.#t.addEventListener("keyup",this.#a),this.autoFocus&&this.#t.focus()}disconnectedCallback(){this.#e.removeEventListener("change",this.#r),this.#t.removeEventListener("dragenter",this.#n),this.#t.removeEventListener("dragover",this.#o),this.#t.removeEventListener("dragleave",this.#i),this.#t.removeEventListener("drop",this.#l),this.#t.removeEventListener("click",this.#c),this.#t.removeEventListener("keyup",this.#a)}get accept(){return this.getAttribute("accept")}set accept(t){this.setAttribute("accept",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){t?this.setAttribute("multiple",""):this.removeAttribute("multiple")}get noClick(){return this.hasAttribute("no-click")}set noClick(t){t?this.setAttribute("no-click",""):this.removeAttribute("no-click")}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(t){t?this.setAttribute("no-drag",""):this.removeAttribute("no-drag")}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(t){t?this.setAttribute("no-keyboard",""):this.removeAttribute("no-keyboard")}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){t?this.setAttribute("auto-focus",""):this.removeAttribute("auto-focus")}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){t?this.setAttribute("no-style",""):this.removeAttribute("no-style")}#r=async t=>{try{this.#b(await tt(t))}catch(t){this.dispatchEvent(new CustomEvent(`${te}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#n=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${te}-dragenter`,{bubbles:!0,composed:!0}))};#o=t=>{if(t.preventDefault(),this.disabled||this.noDrag){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover"),this.dispatchEvent(new Event(`${te}-dragover`,{bubbles:!0,composed:!0}))};#i=()=>{this.disabled||this.noDrag||(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"),this.dispatchEvent(new Event(`${te}-dragleave`,{bubbles:!0,composed:!0})))};#l=async t=>{if(!this.disabled&&!this.noDrag){t.preventDefault(),this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover");try{this.#b(await tt(t))}catch(t){this.dispatchEvent(new CustomEvent(`${te}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#c=()=>{this.disabled||this.noClick||this.#e.click()};#a=t=>{this.disabled||this.noKeyboard||" "!==t.key&&"Enter"!==t.key||this.#e.click()};#b(t){if(!Array.isArray(t)||!t.length)return;let e=[],i=[],s=t.length;if(!this.multiple&&s>1)for(let e of t)i.push({file:e,errors:[{code:ti,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&s>this.maxFiles)for(let e of t)i.push({file:e,errors:[{code:ti,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let s of t){let t=function(t,e=""){if(!e)return!0;let i=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],s=t.type,o=s.replace(/\/.*$/,"");for(let e of i)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(o===e.replace(/\/.*$/,""))return!0}else if(s===e)return!0;return!1}(s,this.accept),o=s.size>this.maxSize,a=s.size<this.minSize;if(!t||o||a){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${s.type}" is not accepted.`}),o&&e.push({code:"FILE_TOO_LARGE",message:`File size ${s.size} exceeds the maximum size of ${this.maxSize}.`}),a&&e.push({code:"FILE_TOO_SMALL",message:`File size ${s.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:s,errors:e})}else e.push(s)}this.dispatchEvent(new CustomEvent(`${te}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:i}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${te}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),i.length>0&&this.dispatchEvent(new CustomEvent(`${te}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:i}})),this.#e.value=this.#e.defaultValue}openFileDialog(){this.disabled||this.#e.click()}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=te){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,to)}}function ta(t={}){return Array.isArray((t={files:null,...t}).files)?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t.files):"share"in navigator}function tn(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function tr(t,e){var i;return(i=tn(t,e,"get")).get?i.get.call(t):i.value}function tl(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function td(t,e,i){tl(t,e),e.set(t,i)}function tc(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,tn(t,e,"set"),i),i}function th(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i}function tu(t,e){tl(t,e),e.add(t)}to.defineCustomElement(),Object.defineProperty({},"ResizeObserverElement",{get:function(){return tA},set:e,enumerable:!0,configurable:!0});let tp=document.createElement("template"),tb=String.raw;tp.innerHTML=tb`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;var tm=new WeakMap,tg=new WeakMap,tf=new WeakMap,tv=new WeakSet,tw=new WeakSet,ty=new WeakMap,tE=new WeakSet;class tA extends HTMLElement{static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&(this.disabled?th(this,tw,tk).call(this):th(this,tv,tx).call(this))}connectedCallback(){th(this,tE,tz).call(this,"disabled"),"ResizeObserver"in window&&(tc(this,tg,new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))})),this.disabled||th(this,tv,tx).call(this),tr(this,tm).addEventListener("slotchange",tr(this,ty)))}disconnectedCallback(){th(this,tw,tk).call(this),tr(this,tm).removeEventListener("slotchange",tr(this,ty))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}static defineCustomElement(t="resize-observer"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tA)}constructor(){super(),tu(this,tv),tu(this,tw),tu(this,tE),td(this,tm,{writable:!0,value:void 0}),td(this,tg,{writable:!0,value:void 0}),td(this,tf,{writable:!0,value:void 0}),td(this,ty,{writable:!0,value:()=>{this.disabled||th(this,tv,tx).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tp.content.cloneNode(!0))),tc(this,tm,this.shadowRoot.querySelector("slot")),tc(this,tg,null),tc(this,tf,[])}}function tx(){tr(this,tm)&&tr(this,tg)&&(tr(this,tf).forEach(t=>tr(this,tg).unobserve(t)),tc(this,tf,[]),tr(this,tm).assignedElements().forEach(t=>{tr(this,tg).observe(t),tr(this,tf).push(t)}))}function tk(){tr(this,tg)&&tr(this,tg).disconnect()}function tz(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}function tC(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function tS(t,e){var i;return(i=tC(t,e,"get")).get?i.get.call(t):i.value}function tL(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function tT(t,e,i){tL(t,e),e.set(t,i)}function t_(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,tC(t,e,"set"),i),i}function tM(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i}function tR(t,e){tL(t,e),e.add(t)}tA.defineCustomElement();let tN=(t,e,i)=>(Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Math.min(Math.max(t,Math.min(e,i)),Math.max(e,i))),tq="capture-photo",tO=document.createElement("template");tO.innerHTML='\n  <style>\n    :host { all: initial; display: block; box-sizing: border-box; }\n    :host *, :host *::before, :host *::after { box-sizing: inherit; }\n    :host([hidden]), [hidden] { display: none; }\n    :host video { display: block; }\n    :host #output:empty { display: none; }\n  </style>\n  <video part="video" playsinline></video>\n  <canvas hidden></canvas>\n  <div part="actions-container">\n    <slot name="capture-button">\n      <button part="capture-button" type="button">\n        <slot name="capture-button-content">Capture photo</slot>\n      </button>\n    </slot>\n    <slot name="facing-mode-button" hidden>\n      <button part="facing-mode-button" type="button">\n        <slot name="facing-mode-button-content">Toggle facing mode</slot>\n      </button>\n    </slot>\n    <slot name="actions"></slot>\n  </div>\n  <slot></slot>\n  <div part="output-container" id="output"></div>\n';var tI=new WeakMap,tD=new WeakMap,tB=new WeakMap,t$=new WeakMap,tj=new WeakMap,tF=new WeakMap,tW=new WeakMap,tH=new WeakMap,tP=new WeakMap,tV=new WeakMap,tU=new WeakMap,tZ=new WeakMap,tK=new WeakMap,tG=new WeakSet,tY=new WeakSet,tQ=new WeakMap,tX=new WeakMap,tJ=new WeakSet,t0=new WeakSet,t1=new WeakSet;class t5 extends HTMLElement{static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=tq){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,t5)}connectedCallback(){if(tM(this,t1,t7).call(this,"noImage"),tM(this,t1,t7).call(this,"facingMode"),tM(this,t1,t7).call(this,"cameraResolution"),tM(this,t1,t7).call(this,"pan"),tM(this,t1,t7).call(this,"tilt"),tM(this,t1,t7).call(this,"zoom"),tM(this,t1,t7).call(this,"calculateFileSize"),t_(this,tI,!0),t_(this,t$,this.shadowRoot.querySelector("canvas")),t_(this,tj,this.shadowRoot.getElementById("output")),t_(this,tF,this.shadowRoot.querySelector("video")),t_(this,tW,this.shadowRoot.querySelector('slot[name="capture-button"]')),t_(this,tH,tM(this,t0,t3).call(this)),t_(this,tP,this.shadowRoot.querySelector('slot[name="facing-mode-button"]')),t_(this,tV,tM(this,tJ,t8).call(this)),tS(this,tF)?.addEventListener("loadedmetadata",tS(this,tK)),tS(this,tW)?.addEventListener("slotchange",tS(this,tQ)),tS(this,tH)?.addEventListener("click",tS(this,tZ)),tS(this,tP)?.addEventListener("slotchange",tS(this,tX)),tS(this,tV)?.addEventListener("click",tS(this,tU)),!t5.isSupported())return this.dispatchEvent(new CustomEvent(`${tq}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),tS(this,tV)?.removeEventListener("click",tS(this,tU)),tS(this,tH)?.removeEventListener("click",tS(this,tZ)),tS(this,tF)?.removeEventListener("canplay",tS(this,tK)),tS(this,tW)?.removeEventListener("slotchange",tS(this,tQ)),tS(this,tP)?.removeEventListener("slotchange",tS(this,tX))}attributeChangedCallback(t,e,i){if(!tS(this,tI))return;let s=this.getTrackCapabilities(),o=this.getTrackSettings();if("no-image"===t&&e!==i&&tM(this,tG,t2).call(this),"facing-mode"===t&&e!==i&&tS(this,tD)?.facingMode){let t=["user","environment"].includes(this.facingMode);o?.facingMode&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==i&&"string"==typeof this.cameraResolution){let[t,e]=this.cameraResolution.split("x").map(t=>Number(t)),i=t>=s?.width?.min&&t<=s?.width?.max,a=e>=s?.height?.min&&e<=s?.height?.max;o?.width&&o?.height&&i&&a&&(this.stopVideoStream(),this.startVideoStream())}if("pan"===t&&e!==i&&tS(this,tD)?.pan){let t=this.pan>=s?.pan?.min&&this.pan<=s?.pan?.max;o?.pan&&t&&tM(this,tY,t6).call(this,"pan",this.pan)}if("tilt"===t&&e!==i&&tS(this,tD)?.tilt){let t=this.tilt>=s?.tilt?.min&&this.tilt<=s?.tilt?.max;o?.tilt&&t&&tM(this,tY,t6).call(this,"tilt",this.tilt)}if("zoom"===t&&e!==i&&tS(this,tD)?.zoom){let t=this.zoom>=s?.zoom?.min&&this.zoom<=s?.zoom?.max;o?.zoom&&t&&tM(this,tY,t6).call(this,"zoom",this.zoom)}}get noImage(){return this.hasAttribute("no-image")}set noImage(t){t?this.setAttribute("no-image",""):this.removeAttribute("no-image")}get facingMode(){return this.getAttribute("facing-mode")}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||null}set pan(t){this.setAttribute("pan",Number(t)||null)}get tilt(){return Number(this.getAttribute("tilt"))||null}set tilt(t){this.setAttribute("tilt",Number(t)||null)}get zoom(){return Number(this.getAttribute("zoom"))||null}set zoom(t){this.setAttribute("zoom",Number(t)||null)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){t?this.setAttribute("calculate-file-size",""):this.removeAttribute("calculate-file-size")}stopVideoStream(){if(!tS(this,tF)||!tS(this,tB))return;let[t]=tS(this,tB).getVideoTracks();t?.stop(),tS(this,tF).srcObject=null,t_(this,tB,null)}async startVideoStream(){if(!t5.isSupported()||tS(this,tB))return;this.setAttribute("loading","");let t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution){let[e,i]=this.cameraResolution.split("x").map(t=>Number(t));t.video.width=e,t.video.height=i}try{t_(this,tB,await navigator.mediaDevices.getUserMedia(t)),tS(this,tF).srcObject=tS(this,tB),tM(this,tY,t6).call(this,"pan",this.pan),tM(this,tY,t6).call(this,"tilt",this.tilt),tM(this,tY,t6).call(this,"zoom",this.zoom);let e=this.getTrackSettings();e?.facingMode&&(tS(this,tP).hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${tq}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}async capture(){if(!this.loading)try{let t=tS(this,t$).getContext("2d"),e=tS(this,tF).videoWidth,i=tS(this,tF).videoHeight;tS(this,t$).width=e,tS(this,t$).height=i,t.drawImage(tS(this,tF),0,0,e,i);let s=tS(this,t$).toDataURL("image/png");if("string"==typeof s&&s.includes("data:image")){if(!this.noImage){let t=new Image;t.src=s,t.width=e,t.height=i,t.part="output-image",tM(this,tG,t2).call(this),tS(this,tj)?.appendChild(t)}let t={dataURI:s,width:e,height:i};if(this.calculateFileSize)try{let e=await fetch(s),i=(await e.blob()).size;i&&(t.size=i)}catch(t){}this.dispatchEvent(new CustomEvent(`${tq}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${tq}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return t5.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!tS(this,tB))return{};let[t]=tS(this,tB).getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!tS(this,tB))return{};let[t]=tS(this,tB).getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}constructor(){super(),tR(this,tG),tR(this,tY),tR(this,tJ),tR(this,t0),tR(this,t1),tT(this,tI,{writable:!0,value:void 0}),tT(this,tD,{writable:!0,value:void 0}),tT(this,tB,{writable:!0,value:void 0}),tT(this,t$,{writable:!0,value:void 0}),tT(this,tj,{writable:!0,value:void 0}),tT(this,tF,{writable:!0,value:void 0}),tT(this,tW,{writable:!0,value:void 0}),tT(this,tH,{writable:!0,value:void 0}),tT(this,tP,{writable:!0,value:void 0}),tT(this,tV,{writable:!0,value:void 0}),tT(this,tU,{writable:!0,value:t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")}}),tT(this,tZ,{writable:!0,value:t=>{t.preventDefault(),this.capture()}}),tT(this,tK,{writable:!0,value:t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${tq}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${tq}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})}}),tT(this,tQ,{writable:!0,value:t=>{"capture-button"===t.target?.name&&(tS(this,tH)?.removeEventListener("click",tS(this,tZ)),t_(this,tH,tM(this,t0,t3).call(this)),tS(this,tH)&&(tS(this,tH).addEventListener("click",tS(this,tZ)),"BUTTON"===tS(this,tH).nodeName||tS(this,tH).hasAttribute("role")||tS(this,tH).setAttribute("role","button")))}}),tT(this,tX,{writable:!0,value:t=>{"facing-mode-button"===t.target?.name&&(tS(this,tV)?.removeEventListener("click",tS(this,tU)),t_(this,tV,tM(this,tJ,t8).call(this)),tS(this,tV)&&(tS(this,tV).addEventListener("click",tS(this,tU)),"BUTTON"===tS(this,tV).nodeName||tS(this,tV).hasAttribute("role")||tS(this,tV).setAttribute("role","button")))}}),t_(this,tI,!1),t_(this,tD,this.getSupportedConstraints()),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tO.content.cloneNode(!0)))}}function t2(){tS(this,tj)&&Array.from(tS(this,tj).childNodes).forEach(t=>t.remove())}function t6(t,e){if(!tS(this,tB)||!t||!e)return;let[i]=tS(this,tB).getVideoTracks(),s=this.getTrackCapabilities(),o=this.getTrackSettings();o?.[t]&&i.applyConstraints({advanced:[{[t]:tN(Number(e),s?.[t]?.min,s?.[t]?.max)}]})}function t8(){return tS(this,tP)?tS(this,tP).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot")):null}function t3(){return tS(this,tW)?tS(this,tW).assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot")):null}function t7(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}function t4(t){return new Promise(function(e,i){// @ts-ignore - file size hacks
t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return i(t.error)}})}function t9(){if(!i){var t,e,s;t="keyval",(e=indexedDB.open("keyval-store")).onupgradeneeded=function(){return e.result.createObjectStore(t)},s=t4(e),i=function(e,i){return s.then(function(s){return i(s.transaction(t,e).objectStore(t))})}}return i}let et="barcode-scanner/",ee="settings",ei="history",es=async t=>{try{return{value:await /**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t9();return e("readonly",function(e){return t4(e.get(t))})}(t),error:void 0}}catch(t){return{value:void 0,error:t}}},eo=async(t,e)=>{try{return await /**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t9();return i("readwrite",function(i){return i.put(e,t),t4(i.transaction)})}(t,e),{error:void 0}}catch(t){return{error:t}}},ea=async()=>es(et+ee),en=async t=>eo(et+ee,t),er=async()=>es(et+ei),el=async t=>eo(et+ei,t),ed=document.getElementById("toastContainer"),ec=t=>{let e=t.currentTarget;e.removeEventListener("click",ec),ed.removeChild(e.parentNode)},eh=(t="",e="info")=>{["info","warning","danger"].includes(e)||(e="info");let i=/* html */`
    ${t}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `,s=document.createElement("div");s.className=`alert alert-${e} alert-dismissible text-break`,s.innerHTML=i,s.querySelector("button").addEventListener("click",ec),ed.appendChild(s),setTimeout(()=>s.classList.add("show"),100)},eu="clipboard-copy",ep="success",eb="error",em=document.createElement("template");em.innerHTML=`
  <style>
    :host([hidden]),
    [hidden],
    ::slotted([hidden]) {
      display: none !important;
    }
  </style>

  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;class eg extends HTMLElement{#t=null;#e;#s;#i;#r;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(em.content.cloneNode(!0))),this.#e=this.shadowRoot.querySelector("button"),this.#s=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#r=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#n("value"),this.#n("from"),this.#n("disabled"),this.#n("feedbackDuration"),this.#e.addEventListener("click",this.#l)}disconnectedCallback(){this.#e.removeEventListener("click",this.#l),this.#o()}attributeChangedCallback(t){"disabled"===t&&(this.#e.disabled=this.disabled,this.#e.setAttribute("aria-disabled",this.disabled.toString()),this.#e.part.contains("button")&&this.#e.part.toggle("button--disabled",this.disabled))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}get from(){return this.getAttribute("from")}set from(t){this.setAttribute("from",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",t)}async #a(){if(this.value||this.from)try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#e.getRootNode({composed:!0}):this.#e.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let i=e.querySelector(this.from);if(!i)return;t=i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?i.value:i instanceof HTMLAnchorElement&&i.hasAttribute("href")?i.href:i.textContent}await navigator.clipboard.writeText(t),this.#c(ep),this.dispatchEvent(new CustomEvent(`${eu}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(eb),this.dispatchEvent(new CustomEvent(`${eu}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#l=t=>{t.preventDefault(),this.disabled||this.#t||this.#a()};#c(t){this.#s.hidden=!0,this.#i.hidden=t!==ep,this.#r.hidden=t!==eb,this.#e.part.remove("button--success"),this.#e.part.remove("button--error"),this.#e.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#s.hidden=!1,this.#i.hidden=!0,this.#r.hidden=!0,this.#e.part.remove(`button--${t}`),this.#t=null},this.feedbackDuration)}#o(){this.#t&&clearTimeout(this.#t),this.#t=null,this.#s.hidden=!1,this.#i.hidden=!0,this.#r.hidden=!0,this.#e.part.remove("button--success"),this.#e.part.remove("button--error")}#n(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=eu){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,eg)}}/**
 * Extends the `ClipboardCopy` element to override the default `copy` and `success` slots,
 * in order to avoid repetition of the same markup throughout the application.
 * It also adds aditional properties and attributes, specific to the application.
 *
 * @class CustomClipboardCopy
 * @extends ClipboardCopy
 */class ef extends eg{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]');t.innerHTML=/* html */`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `,e.innerHTML=/* html */`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"only-icon"===t&&e!==i){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),i=t.querySelector(".text"),s=e.querySelector(".text");i&&(i.hidden=this.onlyIcon),s&&(s.hidden=this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#x("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}/**
   * https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
   * This is to safe guard against cases where, for instance, a framework may have added the element to the page and set a
   * value on one of its properties, but lazy loaded its definition. Without this guard, the upgraded element would miss that
   * property and the instance property would prevent the class property setter from ever being called.
   */#x(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,ef)}}ef.defineCustomElement(),async function(){let t;let e="No barcode detected",i=document.querySelector("a-tab-group"),s=document.getElementById("cameraPanel"),o=document.querySelector("capture-photo"),a=document.getElementById("cameraResults"),r=document.getElementById("fileResults"),l=document.getElementById("scanInstructions"),d=document.getElementById("scanBtn"),c=document.getElementById("dropzone"),h=document.querySelector("resize-observer"),u=document.getElementById("scanFrame"),p=document.getElementById("globalActions"),b=document.getElementById("historyBtn"),m=document.getElementById("historyDialog"),g=document.getElementById("historyList"),f=document.getElementById("deleteHistoryBtn"),v=document.getElementById("settingsBtn"),w=document.getElementById("settingsDialog"),y=document.forms["settings-form"],E=document.getElementById("supportedFormats"),A=!0;if(!("BarcodeDetector"in window))try{await n("3c8ZQ")}catch(t){return p.hidden=!0,i.style.display="none",eh("BarcodeDetector API is not supported by your browser.","danger")}ta()||document.querySelectorAll("web-share").forEach(t=>{t.hidden=!0,t.disabled=!0});let{value:x=[]}=await er();T(x),o.addEventListener("capture-photo:video-play",t=>{u.hidden=!1,q(t.detail.video),B();let e=o.getTrackSettings(),i=o.getTrackCapabilities(),s=document.getElementById("zoomLevel");if(e?.zoom&&i?.zoom){let t=document.getElementById("zoomControls"),a=i?.zoom?.min||0,n=i?.zoom?.max||10,r=e?.zoom||1;t.hidden=!1,s.textContent=r,t.addEventListener("click",t=>{let e=t.target.closest('[data-action="zoom-in"]'),i=t.target.closest('[data-action="zoom-out"]');e&&r<n&&(r+=.5),i&&r>a&&(r-=.5),s.textContent=r,o.zoom=r})}},{once:!0}),o.addEventListener("capture-photo:error",t=>{let e=t.detail.error;if("NotFoundError"===e.name)return;let i="NotAllowedError"===e.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;s.innerHTML=/* html */`<div class="alert alert-danger" role="alert">${i}</div>`},{once:!0}),t5.defineCustomElement(),c.accept="image/jpg,image/jpeg,image/png,image/apng,image/gif,image/webp,image/avif";let k=o.shadowRoot.querySelector("video"),z=await window.BarcodeDetector.getSupportedFormats(),C=new window.BarcodeDetector({formats:z}),{value:S={}}=await ea();Object.entries(S).forEach(([t,e])=>{let i=y.querySelector(`[name="${t}"]`);i&&(i.checked=e)}),Array.isArray(z)&&z.length>0&&(E.textContent=`Supported formats: ${z.join(", ")}`);let L=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return async(e,i,s,o,a)=>{let{value:n}=await ea();if(!n?.beep)return;let r=t.createOscillator(),l=t.createGain();r.connect(l),l.connect(t.destination),s&&(l.gain.value=s),i&&(r.frequency.value=i),o&&(r.type=o),"function"==typeof a&&(r.onended=a),r.start(t.currentTime),r.stop(t.currentTime+(e||500)/1e3)}})();function T(t){g.innerHTML="",Array.isArray(t)&&t.length?(f.style.display="block",t.forEach(t=>{let e;let i=document.createElement("li");i.setAttribute("data-value",t);try{new URL(t),(e=document.createElement("a")).href=t,e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")}catch(t){e=document.createElement("span")}e.textContent=t,e.setAttribute("title",t);let s=document.createElement("div");s.className="history-modal__actions";let o=document.createElement("custom-clipboard-copy");o.title="Copy to clipboard",o.setAttribute("only-icon",""),o.setAttribute("value",t),s.appendChild(o);let a=document.createElement("button");a.type="button",a.className="history-modal__delete-action",a.title="Remove from history",a.setAttribute("data-action","delete"),a.innerHTML=/* html */`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `,s.appendChild(a),i.appendChild(e),i.appendChild(s),g.appendChild(i)})):(g.innerHTML="<li class=>There are no saved items in history.</li>",f.style.display="none")}async function _(t){let{value:e}=await ea();if(!t||!e?.addToHistory)return;let{value:i=[],error:s}=await er();if(!s&&!i.find(e=>e===t)){let e=[...i,t],{error:s}=await el(e);s||T(e)}}async function M(t){if(!t)return;let{value:e=[],error:i}=await er();if(!i){let i=e.filter(e=>e!==t),{error:s}=await el(i);s||T(i)}}async function R(){let{error:t}=await el([]);t||T([])}async function N(t=100){let{value:e}=await ea();if("function"==typeof window.navigator.vibrate&&e?.vibrate)try{window.navigator.vibrate(t)}catch{// Fail silently...
}}function q(t){if(!t)return;let e=t.getBoundingClientRect();u.style.cssText=`width: ${e.width}px; height: ${e.height}px`}function O(t){t?.querySelector(".results__item")?.remove()}async function I(t,i){let s;if(!t||!i)return;O(i);try{let{value:e}=await ea();new URL(t),(s=document.createElement("a")).href=t,e?.openWebPageSameTab||(s.setAttribute("target","_blank"),s.setAttribute("rel","noreferrer noopener")),e?.openWebPage&&s.click()}catch(t){s=document.createElement("span")}s.className="results__item",s.classList.toggle("results__item--no-barcode",t===e),s.textContent=t,i.insertBefore(s,i.querySelector(".results__actions"));let o=i.querySelector("clipboard-copy"),a=i.querySelector("web-share"),n=t!==e;o&&(o.disabled=!n,o.hidden=!n),a&&ta()&&(a.disabled=!n,a.hidden=!n,n?a.setAttribute("share-text",t):a.removeAttribute("share-text")),i.show()}function D(t){return new Promise((e,i)=>{C.detect(t).then(t=>{Array.isArray(t)&&t.length>0?e(t[0]):i({message:"Could not detect barcode from provided source."})}).catch(t=>{i(t)})})}async function B(){l.hidden=!1;try{let e={};e=await D(k),window.cancelAnimationFrame(t),O(a),I(e.rawValue,a),_(e.rawValue),l.hidden=!0,d.hidden=!1,u.hidden=!0,L(200,860,.03,"square"),N();return}catch(t){// Fail silently...
}A&&(t=window.requestAnimationFrame(()=>B()))}d.addEventListener("click",()=>{d.hidden=!0,u.hidden=!1,O(a),a.close(),B()}),i.addEventListener("a-tab-select",t=>{let e=t.detail.tabId;"cameraTab"!==e||(A=!0,!o// Assumes that element exists; it might not be the case if the user is using a browser that does not support the BarcodeDetector API.
||o.loading||a.querySelector(".results__item")||B()),"fileTab"===e&&(A=!1)}),c.addEventListener("files-dropzone-drop",t=>{!function(t){if(!t)return;let i=new Image,s=new FileReader;s.onload=s=>{let o=s.target.result;i.onload=async()=>{try{let t=await D(i);O(r),I(t.rawValue,r),_(t.rawValue),L(200,860,.03,"square"),N()}catch(t){O(r),I(e,r)}},i.src=o,c.replaceChildren();let a=document.createElement("div");a.className="dropzone-preview";let n=document.createElement("div");n.className="dropzone-preview__image-wrapper";let l=document.createElement("div");l.className="dropzone-preview__file-name",l.textContent=t.name,n.appendChild(i),a.appendChild(n),a.appendChild(l),c.prepend(a)},s.readAsDataURL(t)}(t.detail.acceptedFiles[0])}),h.addEventListener("resize-observer:resize",()=>{q(o.shadowRoot.querySelector("video"))}),v.addEventListener("click",()=>{w.showModal()}),b.addEventListener("click",()=>{m.showModal()}),m.addEventListener("click",t=>{t.target===t.currentTarget&&m.close()}),w.addEventListener("click",t=>{t.target===t.currentTarget&&w.close()}),y.addEventListener("change",t=>{let e={},i=t.currentTarget.querySelectorAll('input[type="checkbox"]');i.forEach(t=>e[t.name]=t.checked),en(e)}),g.addEventListener("click",t=>{let e=t.target;e.closest('[data-action="delete"]')&&window.confirm("Delete item from history?")&&M(e.closest("li").dataset.value)}),f.addEventListener("click",()=>{window.confirm("Are you sure you want to empty history?")&&R()})}()}();//# sourceMappingURL=index.860104b1.js.map

//# sourceMappingURL=index.860104b1.js.map
