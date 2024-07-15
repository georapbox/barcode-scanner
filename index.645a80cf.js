!function(){var t,e,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},r=i.parcelRequirea202;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return o[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},i.parcelRequirea202=r);var a=r.register;a("bkcP3",function(t,e){t.exports=r("4WKyX")(r("iE7OH").resolve("iqysf")).then(()=>r("dZsGG"))}),a("4WKyX",function(t,e){var i=r("2prpb");t.exports=i(function(t){return new Promise(function(e,i){if([].concat(document.getElementsByTagName("script")).some(function(e){return e.src===t})){e();return}var o=document.createElement("link");o.href=t,o.rel="preload",o.as="script",document.head.appendChild(o);var s=document.createElement("script");s.async=!0,s.type="text/javascript",s.src=t,s.onerror=function(e){var o=TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));s.onerror=s.onload=null,s.remove(),i(o)},s.onload=function(){s.onerror=s.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(s)})})}),a("2prpb",function(t,e){var i={},o={},s={};t.exports=function(t,e){return function(r){var a=function(t){switch(t){case"preload":return o;case"prefetch":return s;default:return i}}(e);return a[r]?a[r]:a[r]=t.apply(null,arguments).catch(function(t){throw delete a[r],t})}}});let n=(t="",e="")=>{let i=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${i}${"string"==typeof e&&""!==e?"-"+e:""}`},l=(t,e)=>{if(Object.prototype.hasOwnProperty.call(e,t)){let i=e[t];delete e[t],e[t]=i}},d=0,c=`
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
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
`,h=document.createElement("template");h.innerHTML=`
  <style>
    ${c}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;class u extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(h.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(t,e,i){if("selected"===t&&e!==i&&this.setAttribute("aria-selected",this.selected.toString()),"disabled"===t&&e!==i&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0")),"closable"===t&&e!==i){if(this.closable){let t=document.createElement("span");t.className="tab__close",t.setAttribute("part","close-tab"),t.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(t),t.addEventListener("click",this.#t)}else{let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t),t?.remove()}}}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=n("tab",(++d).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled?"-1":"0")}disconnectedCallback(){let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t)}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}#t=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(t){return l(t,this)}static defineCustomElement(t="a-tab"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,u)}}u.defineCustomElement();let p=0,b=`
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`,m=document.createElement("template");m.innerHTML=`
  <style>
    ${b}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;class g extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=n("panel",(++p).toString()))}static defineCustomElement(t="a-tab-panel"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,g)}}g.defineCustomElement();let f={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},v=Object.entries(f).map(([,t])=>t),w={AUTO:"auto",MANUAL:"manual"},y={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},E=`
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
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
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
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
  :host([placement="${f.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${f.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${f.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${f.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${f.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${f.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${f.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${f.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${f.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${f.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,A=document.createElement("template");A.innerHTML=`
  <style>
    ${E}
  </style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;class x extends HTMLElement{#i=null;#o=null;#s=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(A.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,i){"placement"===t&&e!==i&&this.#r(),"no-scroll-controls"===t&&e!==i&&this.#r()}get placement(){return this.getAttribute("placement")||f.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||w.AUTO}set activation(t){this.setAttribute("activation",t||w.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#e("placement"),this.#e("noScrollControls"),this.#e("scrollDistance"),this.#e("activation"),this.#e("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),i=this.shadowRoot?.querySelector(".tab-group__tabs"),o=this.shadowRoot?.querySelector(".tab-group__nav"),s=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#a),e?.addEventListener("slotchange",this.#a),i?.addEventListener("click",this.#n),i?.addEventListener("keydown",this.#l),s.forEach(t=>t.addEventListener("click",this.#d)),this.addEventListener("a-tab-close",this.#c),"ResizeObserver"in window&&(this.#i=new ResizeObserver(t=>{this.#o=window.requestAnimationFrame(()=>{let e=t?.[0],i=e?.target,r=i?.scrollWidth>i?.clientWidth;s.forEach(t=>t.toggleAttribute("hidden",!r)),o?.part.toggle("nav--has-scroll-controls",r),o?.classList.toggle("tab-group__nav--has-scroll-controls",r)})})),this.#h(),this.#r()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),i=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#a),e?.removeEventListener("slotchange",this.#a),i?.removeEventListener("click",this.#n),i?.removeEventListener("keydown",this.#l),o.forEach(t=>t.removeEventListener("click",this.#d)),this.removeEventListener("a-tab-close",this.#c),this.#u()}#p(){if(!this.#i)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#i.unobserve(t),this.#i.observe(t))}#u(){this.#i&&(this.#i.disconnect(),null!==this.#o&&(window.cancelAnimationFrame(this.#o),this.#o=null))}#b(){return getComputedStyle(this).direction||"ltr"}#h(){this.hidden=0===this.#m().length}#g(){let t=this.#m();this.#h(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#f(){return Array.from(this.querySelectorAll("a-tab-panel"))}#m(){return Array.from(this.querySelectorAll("a-tab"))}#v(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#w(){return this.#m().find(t=>!t.disabled)||null}#y(){let t=this.#m();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#E(){let t=this.#m(),e=this.activation===w.MANUAL?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#A(){let t=this.#m(),e=this.activation===w.MANUAL?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#x(){let t=this.#m(),e=this.#f();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#r(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===f.START||this.placement===f.END?(this.#u(),e.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls")):(this.#p(),e.forEach(t=>t.hidden=!1))}#z(){let t=this.#m(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#s&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#S(e))}#S(t){this.#x(),t&&(t.selected=!0);let e=this.#v(t);e&&(e.hidden=!1)}#a=t=>{this.#g(),this.#r(),this.#z(),"tab"===t.target.name&&(this.#s=!0)};#l=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=v.includes(this.placement||"")?this.placement:f.TOP,i=[f.TOP,f.BOTTOM].includes(e||"")?"horizontal":"vertical",o=this.#b(),s=null;switch(t.key){case y.LEFT:"horizontal"===i&&(s="ltr"===o?this.#E():this.#A())&&(this.activation===w.MANUAL?s.focus():this.selectTab(s));break;case y.RIGHT:"horizontal"===i&&(s="ltr"===o?this.#A():this.#E())&&(this.activation===w.MANUAL?s.focus():this.selectTab(s));break;case y.UP:"vertical"===i&&(s=this.#E())&&(this.activation===w.MANUAL?s.focus():this.selectTab(s));break;case y.DOWN:"vertical"===i&&(s=this.#A())&&(this.activation===w.MANUAL?s.focus():this.selectTab(s));break;case y.HOME:(s=this.#w())&&(this.activation===w.MANUAL?s.focus():this.selectTab(s));break;case y.END:(s=this.#y())&&(this.activation===w.MANUAL?s.focus():this.selectTab(s));break;case y.ENTER:case y.SPACE:(s=t.target)&&this.selectTab(s);break;default:return}t.preventDefault()};#n=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#d=t=>{let e=t.target.closest(".tab-group__scroll-button"),i=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!i)return;let o=e.classList.contains("tab-group__scroll-button--start")?-1:1,s=i.scrollLeft;i.scrollTo({left:s+o*this.scrollDistance})};#c=t=>{let e=t.target,i=this.#v(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),i&&"a-tab-panel"===i.tagName.toLowerCase()&&i.remove()};#e(t){return l(t,this)}selectTabByIndex(t){let e=this.#m()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#m().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#m().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#S(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(t="a-tab-group"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,x)}}x.defineCustomElement(),Object.defineProperty({},"WebShare",{get:function(){return C},set:void 0,enumerable:!0,configurable:!0});let z=`
  :host {
    display: inline-block;
  }
`,S=document.createElement("template");S.innerHTML=`
  <style>${z}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class C extends HTMLElement{#t;#e;#i=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(S.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#e=this.#a()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&this.#e&&(this.#e.toggleAttribute("disabled",this.disabled),this.#e.setAttribute("aria-disabled",this.disabled.toString()),this.#e.part&&this.#e.part.contains("button")&&this.#e.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#n("shareUrl"),this.#n("shareTitle"),this.#n("shareText"),this.#n("shareFiles"),this.#n("disabled"),this.#t?.addEventListener("slotchange",this.#o),this.#e?.addEventListener("click",this.#l)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#o),this.#e?.removeEventListener("click",this.#l)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#i}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#i=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#l=t=>{t.preventDefault(),this.disabled||this.share()};#o=t=>{t.target&&"button"===t.target.name&&(this.#e?.removeEventListener("click",this.#l),this.#e=this.#a(),this.#e&&(this.#e.addEventListener("click",this.#l),"BUTTON"===this.#e.nodeName||this.#e.hasAttribute("role")||this.#e.setAttribute("role","button")))};#a(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#n(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="web-share"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,C)}}C.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return j},set:void 0,enumerable:!0,configurable:!0});let T=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),k=[".DS_Store","Thumbs.db"],L=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let i=(e.split(".").pop()||"").toLowerCase(),o=T.get(i);o&&Object.defineProperty(t,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return t},_=(t,e)=>{let i=L(t);if("string"!=typeof i.path){let{webkitRelativePath:o}=t;Object.defineProperty(i,"path",{value:"string"==typeof e?e:o||t.name,writable:!1,configurable:!1,enumerable:!0})}return i},R=async t=>await new Promise((e,i)=>{t.readEntries(e,i)}),N=async t=>{let e=[],i=await R(t);for(;i.length>0;)e.push(...i),i=await R(t);return e},M=t=>new Promise((e,i)=>{t.file(i=>e(_(i,t.fullPath)),i)}),O=async t=>{let e=[],i=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();i.push(t)}for(;i.length>0;){let t=i.shift();if(t){if(t.isFile){let i=await M(t);-1===k.indexOf(i.name)&&e.push(i)}else t.isDirectory&&i.push(...await N(t.createReader()))}}return e},q=async t=>{let e=[];for(let i of t)-1===k.indexOf(i.name)&&e.push(_(i));return e},I=async t=>t.dataTransfer?t.dataTransfer.items?await O(t.dataTransfer.items):await q(t.dataTransfer.files):await q(t.target.files),F="files-dropzone",B="TOO_MANY_FILES",$=document.createElement("template"),D=`
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
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

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
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
    user-select: none;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;$.innerHTML=`
  <style>
    ${D}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class j extends HTMLElement{#e=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild($.content.cloneNode(!0)),this.shadowRoot&&(this.#e=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,i){"accept"===t&&e!==i&&this.#e&&(this.#e.accept=this.accept),"disabled"===t&&e!==i&&this.#e&&(this.#e.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==i&&this.#e&&(this.#e.multiple=this.multiple)}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("autoFocus"),this.#s("noStyle"),this.#e?.addEventListener("change",this.#a),this.#t?.addEventListener("dragenter",this.#n),this.#t?.addEventListener("dragover",this.#o),this.#t?.addEventListener("dragleave",this.#l),this.#t?.addEventListener("drop",this.#i),this.#t?.addEventListener("click",this.#c),this.#t?.addEventListener("keyup",this.#r),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#e?.removeEventListener("change",this.#a),this.#t?.removeEventListener("dragenter",this.#n),this.#t?.removeEventListener("dragover",this.#o),this.#t?.removeEventListener("dragleave",this.#l),this.#t?.removeEventListener("drop",this.#i),this.#t?.removeEventListener("click",this.#c),this.#t?.removeEventListener("keyup",this.#r)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#a=async t=>{try{this.#b(await I(t))}catch(t){this.dispatchEvent(new CustomEvent(`${F}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#n=()=>{this.disabled||this.dispatchEvent(new Event(`${F}-dragenter`,{bubbles:!0,composed:!0}))};#o=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${F}-dragover`,{bubbles:!0,composed:!0}))};#l=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${F}-dragleave`,{bubbles:!0,composed:!0})))};#i=async t=>{if(!this.disabled){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#b(await I(t))}catch(t){this.dispatchEvent(new CustomEvent(`${F}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#c=()=>{this.disabled||this.#e?.click()};#r=t=>{this.disabled||" "!==t.key&&"Enter"!==t.key||this.#e?.click()};#b(t){if(!Array.isArray(t)||!t.length)return;let e=[],i=[],o=t.length;if(!this.multiple&&o>1)for(let e of t)i.push({file:e,errors:[{code:B,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&o>this.maxFiles)for(let e of t)i.push({file:e,errors:[{code:B,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let o of t){let t=function(t,e=""){if(!e)return!0;let i=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],o=t.type,s=o.replace(/\/.*$/,"");for(let e of i)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(s===e.replace(/\/.*$/,""))return!0}else if(o===e)return!0;return!1}(o,this.accept),s=o.size>this.maxSize,r=o.size<this.minSize;if(!t||s||r){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${o.type}" is not accepted.`}),s&&e.push({code:"FILE_TOO_LARGE",message:`File size ${o.size} exceeds the maximum size of ${this.maxSize}.`}),r&&e.push({code:"FILE_TOO_SMALL",message:`File size ${o.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:o,errors:e})}else e.push(o)}this.dispatchEvent(new CustomEvent(`${F}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:i}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${F}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),i.length>0&&this.dispatchEvent(new CustomEvent(`${F}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:i}})),this.#e&&(this.#e.value=this.#e.defaultValue)}openFileDialog(){this.disabled||this.#e?.click()}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=F){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,j)}}function H(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}function P(t,e,i){if(!e.has(t))throw TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function V(t,e){var i;return(i=P(t,e,"get")).get?i.get.call(t):i.value}function U(t,e){if(e.has(t))throw TypeError("Cannot initialize the same private elements twice on an object")}function W(t,e,i){U(t,e),e.set(t,i)}function G(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw TypeError("attempted to set read only private field");e.value=i}}(t,P(t,e,"set"),i),i}function Z(t,e,i){if(!e.has(t))throw TypeError("attempted to get private field on non-instance");return i}function K(t,e){U(t,e),e.add(t)}j.defineCustomElement(),Object.defineProperty({},"ResizeObserverElement",{get:function(){return tr},set:t,enumerable:!0,configurable:!0});let Y=document.createElement("template"),X=String.raw;Y.innerHTML=X`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;var J=new WeakMap,Q=new WeakMap,tt=new WeakMap,te=new WeakSet,ti=new WeakSet,to=new WeakMap,ts=new WeakSet;class tr extends HTMLElement{static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&(this.disabled?Z(this,ti,tn).call(this):Z(this,te,ta).call(this))}connectedCallback(){Z(this,ts,tl).call(this,"disabled"),"ResizeObserver"in window&&(G(this,Q,new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))})),this.disabled||Z(this,te,ta).call(this),V(this,J).addEventListener("slotchange",V(this,to)))}disconnectedCallback(){Z(this,ti,tn).call(this),V(this,J).removeEventListener("slotchange",V(this,to))}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}static defineCustomElement(t="resize-observer"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tr)}constructor(){super(),K(this,te),K(this,ti),K(this,ts),W(this,J,{writable:!0,value:void 0}),W(this,Q,{writable:!0,value:void 0}),W(this,tt,{writable:!0,value:void 0}),W(this,to,{writable:!0,value:()=>{this.disabled||Z(this,te,ta).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Y.content.cloneNode(!0))),G(this,J,this.shadowRoot.querySelector("slot")),G(this,Q,null),G(this,tt,[])}}function ta(){V(this,J)&&V(this,Q)&&(V(this,tt).forEach(t=>V(this,Q).unobserve(t)),G(this,tt,[]),V(this,J).assignedElements().forEach(t=>{V(this,Q).observe(t),V(this,tt).push(t)}))}function tn(){V(this,Q)&&V(this,Q).disconnect()}function tl(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}tr.defineCustomElement();let td=(t,e,i)=>(Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Math.min(Math.max(t,Math.min(e,i)),Math.max(e,i))),tc="capture-photo",th=`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none;
  }

  video {
    display: block;
  }

  #output:empty {
    display: none;
  }
`,tu=document.createElement("template");tu.innerHTML=`
  <style>${th}</style>

  <video part="video" playsinline></video>

  <canvas hidden></canvas>

  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>

    <slot name="facing-mode-button" hidden>
      <button part="facing-mode-button" type="button">
        <slot name="facing-mode-button-content">Toggle facing mode</slot>
      </button>
    </slot>

    <slot name="actions"></slot>
  </div>

  <slot></slot>

  <div part="output-container" id="output"></div>
`;class tp extends HTMLElement{#t={};#e=null;#a=null;#s=null;#l=null;#o=null;#i=null;#n=null;#r=null;constructor(){super(),this.#t=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tu.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(t,e,i){if(!this.isConnected)return;let o=this.getTrackCapabilities(),s=this.getTrackSettings();if("no-image"===t&&e!==i&&this.#p(),"facing-mode"===t&&e!==i&&"facingMode"in this.#t){let t=["user","environment"].includes(this.facingMode||"");"facingMode"in s&&t&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===t&&e!==i&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,e=0]=this.cameraResolution.split("x").map(t=>Number(t));if(t>0&&e>0&&"width"in o&&"height"in o){let i=!!(o.width?.min&&o.width?.max)&&t>=o?.width?.min&&t<=o?.width?.max,r=!!(o.height?.min&&o.height?.max)&&e>=o?.height?.min&&e<=o?.height?.max;"width"in s&&"height"in s&&i&&r&&(this.stopVideoStream(),this.startVideoStream())}}if("pan"===t&&e!==i&&"pan"in this.#t){let t=!!("pan"in o&&o.pan?.min&&o.pan?.max)&&this.pan>=o.pan.min&&this.pan<=o.pan.max;"pan"in s&&"number"==typeof this.pan&&t&&this.#h("pan",this.pan)}if("tilt"===t&&e!==i&&"tilt"in this.#t){let t=!!("tilt"in o&&o.tilt?.min&&o.tilt?.max)&&this.tilt>=o.tilt.min&&this.tilt<=o.tilt.max;"tilt"in s&&"number"==typeof this.tilt&&t&&this.#h("tilt",this.tilt)}if("zoom"===t&&e!==i&&"zoom"in this.#t){let t=!!("zoom"in o&&o.zoom?.min&&o.zoom?.max)&&this.zoom>=o.zoom.min&&this.zoom<=o.zoom.max;"zoom"in s&&"number"==typeof this.zoom&&t&&this.#h("zoom",this.zoom)}}connectedCallback(){if(this.#c("autpoPlay"),this.#c("noImage"),this.#c("facingMode"),this.#c("cameraResolution"),this.#c("pan"),this.#c("tilt"),this.#c("zoom"),this.#c("calculateFileSize"),this.#a=this.shadowRoot?.querySelector("canvas")||null,this.#s=this.shadowRoot?.getElementById("output")||null,this.#l=this.shadowRoot?.querySelector("video")||null,this.#o=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#i=this.#d(),this.#n=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#r=this.#g(),this.#l?.addEventListener("loadedmetadata",this.#b),this.#o?.addEventListener("slotchange",this.#m),this.#i?.addEventListener("click",this.#u),this.#n?.addEventListener("slotchange",this.#v),this.#r?.addEventListener("click",this.#f),!tp.isSupported())return this.dispatchEvent(new CustomEvent(`${tc}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#r?.removeEventListener("click",this.#f),this.#i?.removeEventListener("click",this.#u),this.#l?.removeEventListener("canplay",this.#b),this.#o?.removeEventListener("slotchange",this.#m),this.#n?.removeEventListener("slotchange",this.#v)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get noImage(){return this.hasAttribute("no-image")}set noImage(t){this.toggleAttribute("no-image",!!t)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(t){this.setAttribute("pan",null!=t?t.toString():t)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(t){this.setAttribute("tilt",null!=t?t.toString():t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){this.toggleAttribute("calculate-file-size",!!t)}#f=t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#u=t=>{t.preventDefault(),this.capture()};#b=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${tc}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${tc}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#p(){this.#s&&Array.from(this.#s.childNodes).forEach(t=>t.remove())}#h(t,e){if(!this.#e||!t||!e)return;let[i]=this.#e.getVideoTracks(),o=this.getTrackCapabilities();t in this.getTrackSettings()&&i.applyConstraints({advanced:[{[t]:td(Number(e),o[t]?.min||1,o[t]?.max||1)}]})}#m=t=>{t.target?.name==="capture-button"&&(this.#i?.removeEventListener("click",this.#u),this.#i=this.#d(),this.#i&&(this.#i.addEventListener("click",this.#u),"BUTTON"===this.#i.nodeName||this.#i.hasAttribute("role")||this.#i.setAttribute("role","button")))};#v=t=>{t.target?.name==="facing-mode-button"&&(this.#r?.removeEventListener("click",this.#f),this.#r=this.#g(),this.#r&&(this.#r.addEventListener("click",this.#f),"BUTTON"===this.#r.nodeName||this.#r.hasAttribute("role")||this.#r.setAttribute("role","button")))};#g(){return this.#n&&this.#n.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))||null}#d(){return this.#o&&this.#o.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))||null}#c(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(){if(!tp.isSupported()||this.#e)return;this.setAttribute("loading","");let t={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,i=0]=this.cameraResolution.split("x").map(t=>Number(t));e>0&&i>0&&(t.video.width=e,t.video.height=i)}try{this.#e=await navigator.mediaDevices.getUserMedia(t),this.#l&&(this.#l.srcObject=this.#e),this.#h("pan",this.pan),this.#h("tilt",this.tilt),this.#h("zoom",this.zoom);let e=this.getTrackSettings();"facingMode"in e&&this.#n&&(this.#n.hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${tc}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#l||!this.#e)return;let[t]=this.#e.getVideoTracks();t?.stop(),this.#l.srcObject=null,this.#e=null}async capture(){if(!this.loading&&this.#a&&this.#l)try{let t=this.#a.getContext("2d"),e=this.#l.videoWidth,i=this.#l.videoHeight;this.#a.width=e,this.#a.height=i,t?.drawImage(this.#l,0,0,e,i);let o=this.#a.toDataURL("image/png");if("string"==typeof o&&o.includes("data:image")){if(!this.noImage){let t=new Image;t.src=o,t.width=e,t.height=i,t.setAttribute("part","output-image"),this.#p(),this.#s?.appendChild(t)}let t={dataURI:o,width:e,height:i};if(this.calculateFileSize)try{let e=await fetch(o),i=(await e.blob()).size;i&&(t.size=i)}catch(t){}this.dispatchEvent(new CustomEvent(`${tc}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${tc}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return tp.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#e)return{};let[t]=this.#e.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#e)return{};let[t]=this.#e.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=tc){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tp)}}let tb="No barcode detected",tm=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function tg(t){return new Promise(function(e,i){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return i(t.error)}})}function tf(){if(!e){var t,i,o,s;t="keyval-store",i="keyval",(o=indexedDB.open(t)).onupgradeneeded=function(){return o.result.createObjectStore(i)},s=tg(o),e=function(t,e){return s.then(function(o){return e(o.transaction(i,t).objectStore(i))})}}return e}let tv="barcode-scanner/",tw="settings",ty="history",tE=async t=>{try{return{value:await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:tf();return e("readonly",function(e){return tg(e.get(t))})}(t),error:void 0}}catch(t){return{value:void 0,error:t}}},tA=async(t,e)=>{try{return await function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:tf();return i("readwrite",function(i){return i.put(e,t),tg(i.transaction)})}(t,e),{error:void 0}}catch(t){return{error:t}}},tx=async()=>tE(tv+tw),tz=async t=>tA(tv+tw,t),tS=async()=>tE(tv+ty),tC=async t=>tA(tv+ty,t),tT=(t,e=0,i=!1)=>{let o=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...s)=>{clearTimeout(o),i&&!o&&t(...s),o=setTimeout(()=>{o=null,i||t(...s)},e)}};function tk(t){let e=document.getElementById("historyList"),i=document.getElementById("emptyHistoryBtn");e.innerHTML="",Array.isArray(t)&&0!==t.length?(i.hidden=!1,t.forEach(t=>{let i;let o=document.createElement("li");o.setAttribute("data-value",t);try{new URL(t),(i=document.createElement("a")).href=t,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener")}catch{i=document.createElement("span")}i.textContent=t,i.setAttribute("title",t);let s=document.createElement("div");s.className="history-modal__actions";let r=document.createElement("custom-clipboard-copy");r.title="Copy to clipboard",r.setAttribute("only-icon",""),r.setAttribute("value",t),s.appendChild(r);let a=document.createElement("button");a.type="button",a.className="history-modal__delete-action",a.title="Remove from history",a.setAttribute("data-action","delete"),a.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `,s.appendChild(a),o.appendChild(i),o.appendChild(s),e.appendChild(o)})):(e.innerHTML="<li>There are no saved items in history.</li>",i.hidden=!0)}async function tL(t){let{value:e}=await tx();if(!t||!e?.addToHistory)return;let{value:i=[],error:o}=await tS();if(!o&&!i.find(e=>e===t)){let e=[...i,t],{error:o}=await tC(e);o||tk(e)}}async function t_(t){if(!t)return;let{value:e=[],error:i}=await tS();if(!i){let i=e.filter(e=>e!==t),{error:o}=await tC(i);o||tk(i)}}async function tR(){let{error:t}=await tC([]);t||tk([])}function tN(t){t?.querySelector(".results__item")?.remove()}async function tM(t,e){let i;if(!t||!e)return;tN(e);try{let{value:e}=await tx();new URL(t),(i=document.createElement("a")).href=t,e?.openWebPageSameTab||(i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener")),e?.openWebPage&&i.click()}catch{i=document.createElement("span")}i.className="results__item",i.classList.toggle("results__item--no-barcode",t===tb),i.textContent=t,e.insertBefore(i,e.querySelector(".results__actions"));let o=e.querySelector("custom-clipboard-copy"),s=e.querySelector("web-share"),r=t!==tb;o&&(o.disabled=!r,o.hidden=!r),s&&H()&&(s.disabled=!r,s.hidden=!r,r?s.setAttribute("share-text",t):s.removeAttribute("share-text")),e.show()}let tO=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:i,frequency:o,volume:s,type:r,onEnded:a}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),s&&(l.gain.value=s),o&&(n.frequency.value=o),r&&(n.type=r),"function"==typeof a&&(n.onended=a),n.start(t.currentTime),n.stop(t.currentTime+(i||500)/1e3)}})();async function tq(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}async function tI(){let{value:t}=await tx();t&&(t.beep&&tO({duration:200,frequency:860,volume:.03,type:"square"}),t.vibrate&&tq(100))}function tF(t,e){if(!t||!e)return;let i=t.getBoundingClientRect();e.style.cssText=`width: ${i.width}px; height: ${i.height}px`}class tB{static async polyfill(){if(!("BarcodeDetector"in window))try{await r("bkcP3")}catch{throw Error("BarcodeDetector API is not supported by your browser.")}}static async getSupportedFormats(){return await window.BarcodeDetector.getSupportedFormats()}static async create(){return new tB(await window.BarcodeDetector.getSupportedFormats())}static async init(){try{await tB.polyfill();let t=await tB.create(),e=await tB.getSupportedFormats();return{barcodeReader:t,barcodeFormats:e,barcodeReaderError:null}}catch(t){return{barcodeReader:null,barcodeFormats:[],barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0)return e[0];throw Error("Could not detect barcode from provided source.")}}async function t$(t){let{value:e={}}=await tx();Object.entries(e).forEach(([e,i])=>{let o=t.querySelector(`[name="${e}"]`);o&&(o.checked=i)})}let tD="clipboard-copy",tj="success",tH="error",tP=document.createElement("template");tP.innerHTML=`
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
`;class tV extends HTMLElement{#t=null;#e;#s;#i;#a;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(tP.content.cloneNode(!0))),this.#e=this.shadowRoot.querySelector("button"),this.#s=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#a=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#n("value"),this.#n("from"),this.#n("disabled"),this.#n("feedbackDuration"),this.#e.addEventListener("click",this.#l)}disconnectedCallback(){this.#e.removeEventListener("click",this.#l),this.#o()}attributeChangedCallback(t){"disabled"===t&&(this.#e.disabled=this.disabled,this.#e.setAttribute("aria-disabled",this.disabled.toString()),this.#e.part.contains("button")&&this.#e.part.toggle("button--disabled",this.disabled))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}get from(){return this.getAttribute("from")}set from(t){this.setAttribute("from",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",t)}async #r(){if(this.value||this.from)try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#e.getRootNode({composed:!0}):this.#e.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let i=e.querySelector(this.from);if(!i)return;t=i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?i.value:i instanceof HTMLAnchorElement&&i.hasAttribute("href")?i.href:i.textContent}await navigator.clipboard.writeText(t),this.#c(tj),this.dispatchEvent(new CustomEvent(`${tD}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tH),this.dispatchEvent(new CustomEvent(`${tD}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#l=t=>{t.preventDefault(),this.disabled||this.#t||this.#r()};#c(t){this.#s.hidden=!0,this.#i.hidden=t!==tj,this.#a.hidden=t!==tH,this.#e.part.remove("button--success"),this.#e.part.remove("button--error"),this.#e.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#s.hidden=!1,this.#i.hidden=!0,this.#a.hidden=!0,this.#e.part.remove(`button--${t}`),this.#t=null},this.feedbackDuration)}#o(){this.#t&&clearTimeout(this.#t),this.#t=null,this.#s.hidden=!1,this.#i.hidden=!0,this.#a.hidden=!0,this.#e.part.remove("button--success"),this.#e.part.remove("button--error")}#n(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t=tD){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tV)}}class tU extends tV{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]');t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `,e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"only-icon"===t&&e!==i){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),i=t.querySelector(".text"),o=e.querySelector(".text");i&&(i.hidden=this.onlyIcon),o&&(o.hidden=this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#C("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#C(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tU)}}tU.defineCustomElement(),async function(){let t;let e=document.querySelector("a-tab-group"),i=document.getElementById("cameraPanel"),o=document.querySelector("capture-photo"),s=document.getElementById("cameraResults"),r=document.getElementById("fileResults"),a=document.getElementById("scanInstructions"),n=document.getElementById("scanBtn"),l=document.getElementById("dropzone"),d=document.querySelector("resize-observer"),c=document.getElementById("scanFrame"),h=document.getElementById("globalActions"),u=document.getElementById("historyBtn"),p=document.getElementById("historyDialog"),b=document.getElementById("settingsBtn"),m=document.getElementById("settingsDialog"),g=document.forms["settings-form"],f=!0,{barcodeReader:v,barcodeFormats:w,barcodeReaderError:y}=await tB.init();if(y){let t=document.getElementById("barcodeReaderError");f=!1,h.hidden=!0,e.hidden=!0,t.hidden=!1,t.textContent=y?.message;return}o.addEventListener("capture-photo:video-play",function(t){c.hidden=!1,tF(t.detail.video,c),A();let e=t.target.getTrackSettings(),i=t.target.getTrackCapabilities(),s=document.getElementById("zoomLevel");if(e?.zoom&&i?.zoom){let t=document.getElementById("zoomControls"),r=i?.zoom?.min||0,a=i?.zoom?.max||10,n=e?.zoom||1;t.hidden=!1,s.textContent=n,t.addEventListener("click",t=>{let e=t.target.closest('[data-action="zoom-in"]'),i=t.target.closest('[data-action="zoom-out"]');e&&n<a&&(n+=.5),i&&n>r&&(n-=.5),s.textContent=n,o.zoom=n})}},{once:!0}),o.addEventListener("capture-photo:error",function(t){let e=t.detail.error;if("NotFoundError"===e.name)return;let o="NotAllowedError"===e.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;i.innerHTML=`<div class="alert alert-danger" role="alert" style="margin: 0;">${o}</div>`},{once:!0}),tp.defineCustomElement();let E=o.shadowRoot.querySelector("video");async function A(){a.hidden=!1;try{let e={};e=await v.detect(E),window.cancelAnimationFrame(t),tN(s),tM(e.rawValue,s),tL(e.rawValue),a.hidden=!0,n.hidden=!1,c.hidden=!0,tI();return}catch{}f&&(t=window.requestAnimationFrame(()=>A()))}l.accept=tm.join(","),t$(g),function(t){if(!Array.isArray(t)||0===t.length)return;let e=document.getElementById("supportedFormats");e&&(e.textContent=`Supported formats: ${t.join(", ")}`)}(w),tk((await tS()).value||[]),H()||document.querySelectorAll("web-share").forEach(t=>{t.hidden=!0,t.disabled=!0}),n.addEventListener("click",function(){n.hidden=!0,c.hidden=!1,tN(s),s.close(),A()}),e.addEventListener("a-tab-show",tT(function(t){let e=t.detail.tabId,i=document.querySelector("capture-photo");switch(e){case"cameraTab":if(f=!0,!i)return;i.loading||s.querySelector(".results__item")||A(),"function"==typeof i.startVideoStream&&i.startVideoStream();break;case"fileTab":f=!1,null!=i&&"function"==typeof i.stopVideoStream&&i.stopVideoStream()}},250)),l.addEventListener("files-dropzone-drop",function(t){!function(t){if(!t)return;let e=new Image,i=new FileReader;i.onload=i=>{let o=i.target.result;e.onload=async()=>{try{let t=await v.detect(e);tN(r),tM(t.rawValue,r),tL(t.rawValue),tI()}catch{tN(r),tM(tb,r)}},e.src=o,e.alt="Image preview",l.replaceChildren();let s=document.createElement("div");s.className="dropzone-preview";let a=document.createElement("div");a.className="dropzone-preview__image-wrapper";let n=document.createElement("div");n.className="dropzone-preview__file-name",n.textContent=t.name,a.appendChild(e),s.appendChild(a),s.appendChild(n),l.prepend(s)},i.readAsDataURL(t)}(t.detail.acceptedFiles[0])}),d.addEventListener("resize-observer:resize",function(){tF(o.shadowRoot.querySelector("video"),c)}),b.addEventListener("click",function(){m.showModal()}),m.addEventListener("click",function(t){t.target===t.currentTarget&&m.close()}),g.addEventListener("change",function(t){let e={};t.currentTarget.querySelectorAll('input[type="checkbox"]').forEach(t=>e[t.name]=t.checked),tz(e)}),u.addEventListener("click",function(){p.showModal()}),p.addEventListener("click",function(t){let e=t.target;if(e===t.currentTarget){p.close();return}if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;if(window.confirm(`Delete ${t}?`)){t_(t);return}}if(e.closest("#emptyHistoryBtn")&&window.confirm("Are you sure you want to empty history?")){tR();return}}),document.addEventListener("visibilitychange",function(){if("cameraTab"===e.querySelector("[selected]").getAttribute("id")){if("hidden"===document.visibilityState)f=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream();else{f=!0;let t=document.querySelector("capture-photo");if(!t)return;t.loading||s.querySelector(".results__item")||A(),"function"==typeof t.startVideoStream&&t.startVideoStream()}}}),document.addEventListener("keydown",function(t){"Escape"===t.key&&function(){let t=e.querySelector("#cameraTab").hasAttribute("selected"),i=!n.hidden,o=m.hasAttribute("open"),s=p.hasAttribute("open");i&&t&&!(o||s)&&n.click()}()})}()}();
//# sourceMappingURL=index.645a80cf.js.map
