let t;var e,o="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},i={},r={},s=o.parcelRequirea202;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},o.parcelRequirea202=s),(0,s.register)("3jPiW",function(t,e){var o;t.exports=(o="6z40I",import("./"+(o=s.i?.[o]||o))).then(()=>s("aexh3"))}),Object.assign(s.i??={},{"6z40I":"es.95be77cf.js"});var a=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},n=(t,e)=>{if(Object.prototype.hasOwnProperty.call(e,t)){let o=e[t];delete e[t],e[t]=o}},l=0,d=`
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
`,c=document.createElement("template");c.innerHTML=`
  <style>
    ${d}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(c.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(t,e,o){if("selected"===t&&e!==o&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===t&&e!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===t&&e!==o)if(this.closable){let t=document.createElement("span");t.className="tab__close",t.setAttribute("part","close-tab"),t.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(t),t.addEventListener("click",this.#t)}else{let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t),t?.remove()}}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=a("tab",(++l).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#t)}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}#t=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(t){return n(t,this)}static defineCustomElement(e="a-tab"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var h=0,u=`
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
    ${u}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=a("panel",(++h).toString()))}static defineCustomElement(e="a-tab-panel"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var p={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},b=Object.entries(p).map(([,t])=>t),g="auto",v="manual",f=`
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

  :host([dir="rtl"]) .tab-group__scroll-button--start,
  :host(:dir(rtl)) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="rtl"]) .tab-group__scroll-button--end,
  :host(:dir(rtl)) .tab-group__scroll-button--end {
    left: var(--scroll-button-inline-offset);
    right: auto;
    transform: translateY(-50%) rotate(180deg);
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
  :host([placement="${p.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${p.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${p.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${p.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${p.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${p.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${p.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${p.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${p.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${p.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,y=document.createElement("template");y.innerHTML=`
  <style>${f}</style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`,(class t extends HTMLElement{#t=null;#e=null;#o=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(y.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,o){"placement"===t&&e!==o&&this.#i(),"no-scroll-controls"===t&&e!==o&&this.#i()}get placement(){return this.getAttribute("placement")||p.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||g}set activation(t){this.setAttribute("activation",t||g)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#r("placement"),this.#r("noScrollControls"),this.#r("scrollDistance"),this.#r("activation"),this.#r("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),r=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#s),e?.addEventListener("slotchange",this.#s),o?.addEventListener("click",this.#a),o?.addEventListener("keydown",this.#n),r.forEach(t=>t.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#t=new ResizeObserver(t=>{this.#e=window.requestAnimationFrame(()=>{let e=t?.[0]?.target,o=e?.scrollWidth>e?.clientWidth;r.forEach(t=>t.toggleAttribute("hidden",!o)),i?.part.toggle("nav--has-scroll-controls",o),i?.classList.toggle("tab-group__nav--has-scroll-controls",o)})})),this.#c(),this.#i()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#s),e?.removeEventListener("slotchange",this.#s),o?.removeEventListener("click",this.#a),o?.removeEventListener("keydown",this.#n),i.forEach(t=>t.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#t)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#t.unobserve(t),this.#t.observe(t))}#h(){this.#t&&(this.#t.disconnect(),null!==this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null))}#m(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?"ltr":"rtl":window.getComputedStyle(this).direction||"ltr"}#c(){this.hidden=0===this.#p().length}#b(){let t=this.#p();this.#c(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#p(){return Array.from(this.querySelectorAll("a-tab"))}#v(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#f(){return this.#p().find(t=>!t.disabled)||null}#y(){let t=this.#p();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#w(){let t=this.#p(),e=this.activation===v?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#E(){let t=this.#p(),e=this.activation===v?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#A(){let t=this.#p(),e=this.#g();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#i(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===p.START||this.placement===p.END?(this.#h(),o.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls"),e?.setAttribute("aria-orientation","vertical")):(this.#u(),o.forEach(t=>t.hidden=!1),e?.setAttribute("aria-orientation","horizontal"))}#_(){let t=this.#p(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#o&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#x(e))}#x(t){this.#A(),t&&(t.selected=!0);let e=this.#v(t);e&&(e.hidden=!1)}#s=t=>{this.#b(),this.#i(),this.#_(),"tab"===t.target.name&&(this.#o=!0)};#n=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=b.includes(this.placement||"")?this.placement:p.TOP,o=[p.TOP,p.BOTTOM].includes(e||"")?"horizontal":"vertical",i=this.#m(),r=null;switch(t.key){case"ArrowLeft":"horizontal"===o&&(r="ltr"===i?this.#w():this.#E())&&(this.activation===v?r.focus():this.selectTab(r));break;case"ArrowRight":"horizontal"===o&&(r="ltr"===i?this.#E():this.#w())&&(this.activation===v?r.focus():this.selectTab(r));break;case"ArrowUp":"vertical"===o&&(r=this.#w())&&(this.activation===v?r.focus():this.selectTab(r));break;case"ArrowDown":"vertical"===o&&(r=this.#E())&&(this.activation===v?r.focus():this.selectTab(r));break;case"Home":(r=this.#f())&&(this.activation===v?r.focus():this.selectTab(r));break;case"End":(r=this.#y())&&(this.activation===v?r.focus():this.selectTab(r));break;case"Enter":case" ":(r=t.target)&&this.selectTab(r);break;default:return}t.preventDefault()};#a=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#l=t=>{let e=t.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!o)return;let i=e.classList.contains("tab-group__scroll-button--start"),r="ltr"===this.#m(),s=o.scrollLeft;o.scrollTo({left:s+(i?r?-1:1:r?1:-1)*this.scrollDistance})};#d=t=>{let e=t.target,o=this.#v(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#r(t){return n(t,this)}selectTabByIndex(t){let e=this.#p()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#p().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#p().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#x(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(e="a-tab-group"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var w=`
  :host {
    display: inline-block;
  }
`,E=document.createElement("template");E.innerHTML=`
  <style>${w}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class t extends HTMLElement{#t;#p;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(E.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#p=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#p&&(this.#p.toggleAttribute("disabled",this.disabled),this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part&&this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#e("shareUrl"),this.#e("shareTitle"),this.#e("shareText"),this.#e("shareFiles"),this.#e("disabled"),this.#t?.addEventListener("slotchange",this.#w),this.#p?.addEventListener("click",this.#i)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#w),this.#p?.removeEventListener("click",this.#i)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#E}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#E=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name)return void this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#i=t=>{t.preventDefault(),this.disabled||this.share()};#w=t=>{t.target&&"button"===t.target.name&&(this.#p?.removeEventListener("click",this.#i),this.#p=this.#c(),this.#p&&(this.#p.addEventListener("click",this.#i),"BUTTON"===this.#p.nodeName||this.#p.hasAttribute("role")||this.#p.setAttribute("role","button")))};#c(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#e(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="web-share"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var A=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),_=[".DS_Store","Thumbs.db"],x=(t,e)=>{let o=(t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=A.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t})(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},L=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),C=async t=>{let e=[],o=await L(t);for(;o.length>0;)e.push(...o),o=await L(t);return e},k=t=>new Promise((e,o)=>{t.file(o=>e(x(o,t.fullPath)),o)}),S=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t)if(t.isFile){let o=await k(t);-1===_.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await C(t.createReader()))}return e},T=async t=>{let e=[];for(let o of t)-1===_.indexOf(o.name)&&e.push(x(o));return e},z=async t=>t.dataTransfer?t.dataTransfer.items?await S(t.dataTransfer.items):await T(t.dataTransfer.files):await T(t.target.files),R=String.raw,O=String.raw,N="files-dropzone",M=document.createElement("template"),I=R`
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
    --dropzone-focus-shadow-rgb: 49, 132, 253;
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
    transition:
      border var(--dropzone-transition-duration) ease-in-out,
      background-color var(--dropzone-transition-duration) ease-in-out,
      color var(--dropzone-transition-duration) ease-in-out,
      box-shadow var(--dropzone-transition-duration) ease-in-out;
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
`;M.innerHTML=O`
  <style>
    ${I}
  </style>

  <input type="file" id="file-input" hidden />

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot><span>Drag 'n' drop files here, or click to select files</span></slot>
  </div>
`,(class t extends HTMLElement{static ERROR_CODES={FILE_DIALOG_OPEN_FAILED:"FILE_DIALOG_OPEN_FAILED",FILE_INPUT_CHANGE_FAILED:"FILE_INPUT_CHANGE_FAILED",DROP_EVENT_PROCESSING_FAILED:"DROP_EVENT_PROCESSING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR"};static REJECTION_CODES={TOO_MANY_FILES:"TOO_MANY_FILES",FILE_TOO_LARGE:"FILE_TOO_LARGE",FILE_TOO_SMALL:"FILE_TOO_SMALL",INVALID_MIME_TYPE:"INVALID_MIME_TYPE"};#p=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(M.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#p&&(this.#p.accept=this.accept),"disabled"===t&&e!==o&&this.#p&&(this.#p.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==o&&this.#p&&(this.#p.multiple=this.multiple)}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("autoFocus"),this.#r("noStyle"),this.#p?.addEventListener("change",this.#e),this.#t?.addEventListener("dragenter",this.#s),this.#t?.addEventListener("dragover",this.#w),this.#t?.addEventListener("dragleave",this.#m),this.#t?.addEventListener("drop",this.#o),this.#t?.addEventListener("click",this.#h),this.#t?.addEventListener("keyup",this.#n),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#p?.removeEventListener("change",this.#e),this.#t?.removeEventListener("dragenter",this.#s),this.#t?.removeEventListener("dragover",this.#w),this.#t?.removeEventListener("dragleave",this.#m),this.#t?.removeEventListener("drop",this.#o),this.#t?.removeEventListener("click",this.#h),this.#t?.removeEventListener("keyup",this.#n)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i(t,e,o){let i=new CustomEvent(`${N}-${t}`,{bubbles:!0,composed:!0,cancelable:!1,...o,detail:e});return this.dispatchEvent(i)}#E(t,e){this.#i("error",{code:t,error:e})}#e=async e=>{try{this.#c(await z(e))}catch(e){this.#E(t.ERROR_CODES.FILE_INPUT_CHANGE_FAILED,e)}};#s=()=>{this.disabled||this.#i("dragenter")};#w=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.#i("dragover")};#m=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.#i("dragleave"))};#o=async e=>{if(!this.disabled){e.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#c(await z(e))}catch(e){this.#E(t.ERROR_CODES.DROP_EVENT_PROCESSING_FAILED,e)}}};#h=()=>{this.disabled||this.openFileDialog()};#n=t=>{this.disabled||(" "===t.key||"Enter"===t.key)&&this.openFileDialog()};#c(e){if(!Array.isArray(e)||!e.length)return;let o=[],i=[],r=e.length;if(!this.multiple&&r>1)for(let o of e)i.push({file:o,errors:[{code:t.REJECTION_CODES.TOO_MANY_FILES,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&r>this.maxFiles)for(let o of e)i.push({file:o,errors:[{code:t.REJECTION_CODES.TOO_MANY_FILES,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let r of e){let e=function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,r=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(r===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(r,this.accept),s=r.size>this.maxSize,a=r.size<this.minSize;if(!e||s||a){let o=[];e||o.push({code:t.REJECTION_CODES.INVALID_MIME_TYPE,message:`File type "${r.type}" is not accepted.`}),s&&o.push({code:t.REJECTION_CODES.FILE_TOO_LARGE,message:`File size ${r.size} exceeds the maximum size of ${this.maxSize}.`}),a&&o.push({code:t.REJECTION_CODES.FILE_TOO_SMALL,message:`File size ${r.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:r,errors:o})}else o.push(r)}this.#i("drop",{acceptedFiles:o,rejectedFiles:i}),o.length>0&&this.#i("drop-accepted",{acceptedFiles:o}),i.length>0&&this.#i("drop-rejected",{rejectedFiles:i}),this.#p&&(this.#p.value=this.#p.defaultValue)}openFileDialog(){if(!(this.disabled||!this.#p)){if("showPicker"in HTMLInputElement.prototype&&"function"==typeof this.#p.showPicker){try{this.#p.showPicker()}catch(e){this.#E(t.ERROR_CODES.FILE_DIALOG_OPEN_FAILED,e)}return}this.#p.click()}}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=N){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var q=document.createElement("template");q.innerHTML=`
  <style>:host { display: contents; }</style>
  <slot></slot>
`,(class t extends HTMLElement{#t=null;#p=null;#e=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(q.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&(this.disabled?this.#r():this.#i())}connectedCallback(){this.#m("disabled"),"ResizeObserver"in window&&(this.#p=new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}),this.disabled||this.#i(),this.#t?.addEventListener("slotchange",this.#s))}disconnectedCallback(){this.#r(),this.#t?.removeEventListener("slotchange",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}#i(){this.#t&&this.#p&&(this.#e.forEach(t=>this.#p?.unobserve(t)),this.#e=[],this.#t.assignedElements().forEach(t=>{this.#p?.observe(t),this.#e.push(t)}))}#r(){this.#p?.disconnect()}#s=()=>{this.disabled||this.#i()};#m(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="resize-observer"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var D=document.createElement("template"),F=`
  :host {
    --me-width: 32rem;
    --me-height: fit-content;
    --me-border-color: initial;
    --me-border-style: solid;
    --me-border-width: initial;
    --me-border-radius: 0;
    --me-box-shadow: none;
    --me-background-color: canvas;
    --me-color: canvastext;

    --me-header-spacing: 1rem;
    --me-footer-spacing: 1rem;
    --me-header-background-color: transparent;
    --me-header-color: initial;

    --me-body-spacing: 1rem;
    --me-body-background-color: transparent;
    --me-body-color: initial;
    --me-footer-background-color: transparent;
    --me-footer-color: initial;

    --me-close-padding: 0.4375rem;
    --me-close-border: none;
    --me-close-border-radius: 0;
    --me-close-background-color: transparent;
    --me-close-color: inherit;
    --me-close-font-size: 1rem;

    --me-backdrop-background: rgba(0, 0, 0, 0.5);
    --me-backdrop-filter: none;

    display: contents;
    box-sizing: border-box;
  }

  :host *,
  :host *:after,
  :host *:before {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  /* Dialog */
  .dialog {
    --dialog-placement-margin: calc((2em + 6px) / 2);

    width: var(--me-width);
    height: var(--me-height);
    padding: 0;
    border-color: var(--me-border-color);
    border-style: var(--me-border-style);
    border-width: var(--me-border-width);
    border-radius: var(--me-border-radius);
    box-shadow: var(--me-box-shadow);
    background-color: var(--me-background-color);
    color: var(--me-color);
  }

  .dialog[open] {
    display: flex;
  }

  :host([fullscreen]) .dialog {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }

  .dialog::backdrop {
    background: var(--me-backdrop-background, rgba(0, 0, 0, 0.5));
    backdrop-filter: var(--me-backdrop-filter, none);
    opacity: 0;
  }

  .dialog[open]::backdrop {
    opacity: 1;
  }

  /* Dialog placement */
  :host(:not([fullscreen])[placement="top-start"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-center"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="top-end"]) .dialog {
    margin-block-start: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center-start"]) .dialog {
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="center"]) .dialog {
    margin: auto;
  }

  :host(:not([fullscreen])[placement="center-end"]) .dialog {
    margin-inline-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-start"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-start: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-center"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
  }

  :host(:not([fullscreen])[placement="bottom-end"]) .dialog {
    margin-block-end: var(--dialog-placement-margin);
    margin-inline-end: var(--dialog-placement-margin);
  }

  /* Dialog animations */
  @media (prefers-reduced-motion: no-preference) {
    .dialog:not(.dialog--no-animations),
    .dialog:not(.dialog--no-animations)::backdrop {
      transition: transform 0.3s, opacity 0.3s, display 0.3s allow-discrete, overlay 0.3s allow-discrete;
    }

    /* 1. IS-OPEN STATE */
    .dialog[open]:not(.dialog--no-animations) {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog:not(.dialog--no-animations) {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open]:not(.dialog--no-animations) {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]:not(.dialog--no-animations)::backdrop {
        opacity: 0;
      }
    }

    .dialog--pulse:not(.dialog--no-animations) {
      animation-name: pulse;
      animation-duration: 300ms;
      animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  }

  /* Dialog panel, header, body, footer */
  .dialog__panel {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
  }

  .dialog__header {
    display: flex;
    align-items: center;
    padding: var(--me-header-spacing);
    column-gap: 0.5rem;
    background-color: var(--me-header-background-color);
    color: var(--me-header-color);
  }

  :host([no-close-button]) .dialog__header {
    column-gap: 0;
  }

  .dialog__title {
    display: block;
    flex: 1 1 auto;
    padding: 0;
    margin: 0;
  }

  .dialog__body {
    display: block;
    flex: 1 1 auto;
    padding: var(--me-body-spacing);
    overflow: auto;
    background-color: var(--me-body-background-color);
    color: var(--me-body-color);
    overscroll-behavior: contain;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: end;
    padding: var(--me-footer-spacing);
    background-color: var(--me-footer-background-color);
    color: var(--me-footer-color);
  }

  .dialog__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--me-close-padding);
    border: var(--me-close-border);
    border-radius: var(--me-close-border-radius);
    background-color: var(--me-close-background-color);
    color: var(--me-close-color);
    font-size: var(--me-close-font-size);
  }

  .dialog__close:not(:disabled) {
    cursor: pointer;
  }

  .dialog__close:disabled {
    cursor: not-allowed;
  }
`;D.innerHTML=`
  <style>${F}</style>

  <dialog part="base" class="dialog">
    <div part="panel" class="dialog__panel" aria-labelledby="title">
      <header part="header" class="dialog__header">
        <slot name="header" part="title" class="dialog__title" id="title"></slot>

        <form method="dialog">
          <button type="submit" part="close" class="dialog__close" aria-label="Close">
            <slot name="close">
              <svg part="close-icon" xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </slot>
          </button>
        </form>
      </header>

      <slot part="body" class="dialog__body"></slot>

      <footer part="footer" class="dialog__footer" hidden>
        <slot name="footer"></slot>
      </footer>
    </div>
  </dialog>
`,(class t extends HTMLElement{static CLOSE_REQUEST_REASONS={CLOSE_BUTTON:"close-button",ESCAPE_KEY:"escape-key",BACKDROP_CLICK:"backdrop-click",EXTERNAL_INVOKER:"external-invoker"};#t=null;#i=null;#s=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(D.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#i=this.shadowRoot.querySelector('slot[name="footer"]'),this.#s=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(t,e,o){if(null!==this.#t){if("open"===t&&e!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===t&&e!==o){let t=this.#t.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#t.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}"close-label"===t&&e!==o&&this.#E()}}connectedCallback(){this.#p("open"),this.#p("staticBackdrop"),this.#p("noHeader"),this.#p("noAnimations"),this.#p("noCloseButton"),this.#p("fullscreen"),this.#p("preserveOverflow"),this.#p("placement"),this.#p("closeLabel"),this.#t?.addEventListener("click",this.#c),this.#t?.addEventListener("close",this.#o),this.#t?.addEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#i?.addEventListener("slotchange",this.#a),this.#s?.addEventListener("slotchange",this.#x),this.addEventListener("command",this.#d)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#t?.removeEventListener("click",this.#c),this.#t?.removeEventListener("close",this.#o),this.#t?.removeEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#i?.removeEventListener("slotchange",this.#a),this.#s?.removeEventListener("slotchange",this.#x),this.removeEventListener("command",this.#d)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){this.toggleAttribute("static-backdrop",!!t)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){this.toggleAttribute("no-header",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){this.toggleAttribute("no-close-button",!!t)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){this.toggleAttribute("fullscreen",!!t)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(t){this.toggleAttribute("preserve-overflow",!!t)}get placement(){return this.getAttribute("placement")||"center"}set placement(t){this.setAttribute("placement",null!=t?t.toString():t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}#E(){if(null===this.#t)return;let t=this.#t.querySelector(".dialog__close");null!==t&&((this.#s?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?t.removeAttribute("aria-label"):t.setAttribute("aria-label",this.closeLabel))}#w(){this.#r||(this.#t?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#o=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#m=e=>{let o=this.#e(t.CLOSE_REQUEST_REASONS.ESCAPE_KEY);this.dispatchEvent(o),o.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#w())};#h=e=>{let o=this.#e(t.CLOSE_REQUEST_REASONS.CLOSE_BUTTON);this.dispatchEvent(o),o.defaultPrevented&&(e.preventDefault(),this.noAnimations||this.#w())};#c=e=>{let o=e.target,i=e.currentTarget,r=null;if(o===i?r=t.CLOSE_REQUEST_REASONS.BACKDROP_CLICK:o instanceof HTMLElement&&null!==o.closest("[data-me-close]")&&(r=t.CLOSE_REQUEST_REASONS.EXTERNAL_INVOKER),null!==r){let t=this.#e(r);this.dispatchEvent(t),t.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#w():this.hide()}};#d=t=>{if("--me-open"!==t.command||this.open||this.show(),"--me-close"===t.command&&this.open){let t=this.#e("external-invoker");this.dispatchEvent(t),t.defaultPrevented?this.noAnimations||this.#w():this.hide()}};#a=()=>{if(null===this.#t)return;let t=this.#t.querySelector(".dialog__footer");if(null===t)return;let e=this.#i?.assignedNodes();t.hidden=!(e&&e.length>0)};#x=()=>{this.#E()};#e(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#p(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var B=String.raw,H=class t extends EventTarget{#i=!1;#p=0;#t=0;#w=0;#s=0;#o=0;constructor(t){super();let{elapsed:e,duration:o}={elapsed:0,duration:1/0,...t};if("number"!=typeof e||Number.isNaN(e))throw TypeError("elapsed option must be a number");if("number"!=typeof o||Number.isNaN(o))throw TypeError("duration option must be a number");this.#i=!1,this.#p=Math.max(0,o),this.#t=Math.min(Math.max(0,e),this.#p),this.#w=this.#t,this.#s=0,this.#o=this.#t}#r(t){this.dispatchEvent(new Event(t))}#e=()=>{if(!this.#i)return;let e=t.now()-this.#s+this.#o;this.#t=Math.min(e,this.#p),this.#r("tick"),e<this.#p?requestAnimationFrame(this.#e):(this.#i=!1,this.#o=this.#t,this.#r("finish"))};on(t,e,o){return this.addEventListener(t,e,o),this}off(t,e,o){return this.removeEventListener(t,e,o),this}start(){return this.#i||this.#t>=this.#p||(this.#i=!0,this.#s=t.now(),this.#r("start"),requestAnimationFrame(this.#e)),this}stop(){return this.#i&&(this.#i=!1,this.#o=this.#t,this.#r("stop")),this}reset(){return this.#i=!1,this.#t=this.#w,this.#o=this.#w,this.#s=0,this.#r("reset"),this}time(){return{elapsed:this.#t,remaining:this.remaining}}get elapsed(){return this.#t}get remaining(){return Math.max(0,this.#p-this.#t)}get running(){return this.#i}static now(){return"performance"in window?performance.now():Date.now()}},P="alert-element",$="alert-after-show",V="alert-after-hide",j=String.raw,U=String.raw,G=((t=Object.assign(document.createElement("div"),{className:"alert-toast-stack"})).attachShadow({mode:"open"}).innerHTML=B`
    <style>
      :host {
        display: contents;
        box-sizing: border-box;
      }

      :host *,
      :host *::before,
      :host *::after {
        box-sizing: inherit;
      }

      .stack {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1000;
        width: 30rem;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        scrollbar-width: none;
      }

      @media (prefers-reduced-motion: no-preference) {
        .stack {
          scroll-behavior: smooth;
        }
      }

      .stack > ::slotted(*) {
        margin: 1rem;
      }
    </style>

    <div class="stack" part="base"><slot></slot></div>
  `,t),W=U`
  :host {
    --alert-border-radius: 0.25rem;
    --alert-top-border-width: 0.1875rem;
    --alert-countdown-height: 0.1875rem;
    --alert-fg-color: #3f3f46;
    --alert-bg-color: #ffffff;
    --alert-border-color: #e4e4e7;
    --alert-base-variant-color: var(--alert-fg-color);
    --alert-info-variant-color: #0584c7;
    --alert-success-variant-color: #16a34a;
    --alert-neutral-variant-color: #52525b;
    --alert-warning-variant-color: #d87708;
    --alert-danger-variant-color: #dc2626;
    display: contents;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --alert-fg-color: #b6b6be;
      --alert-bg-color: #252528;
      --alert-border-color: #36363a;
      --alert-info-variant-color: #27bbfc;
      --alert-success-variant-color: #3ae075;
      --alert-neutral-variant-color: #8e8e9a;
      --alert-warning-variant-color: #ffbd11;
      --alert-danger-variant-color: #fe5c5c;
    }
  }

  :host([variant='info']) {
    --alert-base-variant-color: var(--alert-info-variant-color);
  }
  :host([variant='success']) {
    --alert-base-variant-color: var(--alert-success-variant-color);
  }
  :host([variant='neutral']) {
    --alert-base-variant-color: var(--alert-neutral-variant-color);
  }
  :host([variant='warning']) {
    --alert-base-variant-color: var(--alert-warning-variant-color);
  }
  :host([variant='danger']) {
    --alert-base-variant-color: var(--alert-danger-variant-color);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: center;
    margin: inherit;
    border: 1px solid var(--alert-border-color);
    border-top-width: var(--alert-top-border-width);
    border-top-color: var(--alert-base-variant-color);
    border-radius: var(--alert-border-radius);
    overflow: hidden;
    background-color: var(--alert-bg-color);
  }

  :host([countdown]) .alert {
    padding-bottom: var(--alert-countdown-height);
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--alert-base-variant-color);
    font-size: inherit;
    line-height: 0;
  }

  .alert__icon ::slotted(*) {
    margin-inline-start: 1rem;
  }

  .alert__message {
    flex: 1 1 auto;
    padding: 1.25rem;
    overflow: hidden;
    color: var(--alert-fg-color);
    line-height: 1.5;
  }

  .alert__close {
    display: flex;
    align-items: center;
    margin-inline-end: 1rem;
    padding: 0.5rem;
    border: none;
    line-height: 0;
    background: transparent;
    color: var(--alert-fg-color);
    font-size: inherit;
    cursor: pointer;
  }

  :host(:not([closable])) .alert__close {
    display: none !important;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: var(--alert-countdown-height);
    background-color: var(--alert-border-color);
  }

  .alert__countdown-elapsed {
    width: 100%;
    height: 100%;
    background-color: var(--alert-base-variant-color);
    transform-origin: left center;
    will-change: transform;
  }

  .alert__countdown-elapsed:dir(rtl) {
    transform-origin: right center;
  }
`,Y=document.createElement("template");Y.innerHTML=j`
  <style>
    ${W}
  </style>

  <div class="alert" part="base" role="alert" hidden>
    <div class="alert__icon" part="icon">
      <slot name="icon"></slot>
    </div>
    <div class="alert__message" part="message"><slot></slot></div>
    <button type="button" class="alert__close" part="close" aria-label="Close">
      <slot name="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
          />
        </svg>
      </slot>
    </button>
    <div class="alert__countdown" part="countdown" hidden>
      <div class="alert__countdown-elapsed" part="countdown-elapsed"></div>
    </div>
  </div>
`,(class t extends HTMLElement{#i=!1;#p=null;#t=null;#w=null;#s=null;#o;static customAnimations;#r="api";#e=null;#v=null;#c=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(Y.content.cloneNode(!0))}static get observedAttributes(){return["open","duration","close-label","announce","countdown"]}attributeChangedCallback(t,e,o){if(!(!this.#i||e===o))switch(t){case"open":this.open?(this.duration!==1/0&&this.#e?.start(),this.#p?.removeAttribute("hidden"),this.#c?.style.setProperty("transform","scaleX(1)"),this.#l("alert-show"),this.#f(this.#p)?.finished.finally(()=>{this.#l($)})):(this.duration!==1/0&&this.#e?.reset(),this.#l("alert-hide",{reason:this.#r}),this.#L(this.#p)?.finished.finally(()=>{this.#p?.setAttribute("hidden",""),this.#l(V,{reason:this.#r}),this.#r="api"}));break;case"duration":this.#e?.stop().off("tick",this.#h).off("finish",this.#m),this.#e=new H({duration:this.duration}).on("tick",this.#h).on("finish",this.#m),this.open&&this.duration!==1/0&&!this.#A()&&this.#e.start(),this.duration===1/0&&this.#c?.style.setProperty("transform","scaleX(1)");break;case"close-label":this.#n();break;case"announce":"none"!==this.announce?this.#p?.setAttribute("role",this.announce):this.#p?.removeAttribute("role");break;case"countdown":this.#v?.toggleAttribute("hidden",!this.countdown)}}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get duration(){let t=this.getAttribute("duration");if(null===t||""===t)return 1/0;let e=Number(t);return e<=0?10:Number.isNaN(e)?1/0:e}set duration(t){this.setAttribute("duration",null!=t?t.toString():t)}get variant(){return this.getAttribute("variant")||""}set variant(t){this.setAttribute("variant",t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}get announce(){let t=this.getAttribute("announce");return"alert"===t||"status"===t||"none"===t?t:"alert"}set announce(t){this.setAttribute("announce",null!=t?t.toString():t)}get countdown(){return this.hasAttribute("countdown")}set countdown(t){this.toggleAttribute("countdown",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get customAnimations(){return this.#o}set customAnimations(t){this.#o=t}connectedCallback(){this.#E("closable"),this.#E("open"),this.#E("duration"),this.#E("variant"),this.#E("closeLabel"),this.#E("announce"),this.#E("countdown"),this.#E("noAnimations"),this.#E("customAnimations"),this.#p=this.shadowRoot?.querySelector(".alert")??null,this.#t=this.shadowRoot?.querySelector(".alert__close")??null,this.#w=this.shadowRoot?.querySelector('slot[name="close"]')??null,this.#v=this.shadowRoot?.querySelector(".alert__countdown")??null,this.#c=this.shadowRoot?.querySelector(".alert__countdown-elapsed")??null,this.#t?.addEventListener("click",this.#u),this.#w?.addEventListener("slotchange",this.#a),this.addEventListener("mouseenter",this.#x),this.addEventListener("mouseleave",this.#d),this.addEventListener("focusin",this.#x),this.addEventListener("focusout",this.#d),this.addEventListener("command",this.#_),this.#e=new H({duration:this.duration}).on("tick",this.#h).on("finish",this.#m),this.open?(this.duration!==1/0&&this.#e?.start(),this.#p?.removeAttribute("hidden")):this.#p?.setAttribute("hidden",""),this.closeLabel&&this.#n(),"none"!==this.announce?this.#p?.setAttribute("role",this.announce):this.#p?.removeAttribute("role"),this.#v?.toggleAttribute("hidden",!this.countdown),this.#i=!0}disconnectedCallback(){this.#i=!1,this.#e?.stop().off("tick",this.#h).off("finish",this.#m),this.#e=null,this.#t?.removeEventListener("click",this.#u),this.#w?.removeEventListener("slotchange",this.#a),this.removeEventListener("mouseenter",this.#x),this.removeEventListener("mouseleave",this.#d),this.removeEventListener("focusin",this.#x),this.removeEventListener("focusout",this.#d),this.removeEventListener("command",this.#_)}connectedMoveCallback(){}#h=t=>{if(!this.countdown||!this.#c)return;let{remaining:e}=t.currentTarget,o=e/this.duration;this.#c.style.transform=`scaleX(${o})`};#m=()=>{this.#r="timeout",this.open=!1};#u=()=>{this.closable&&(this.#r="user",this.open=!1)};#x=()=>{this.open&&this.duration!==1/0&&this.#e?.stop()};#d=()=>{!this.open||this.duration===1/0||this.#A()||this.#e?.start()};#a=()=>{this.#n()};#_=t=>{switch(t.command){case"--alert-show":this.open=!0;break;case"--alert-hide":this.#r="api",this.open=!1}};#n(){this.#t&&((this.#w?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?this.#t.removeAttribute("aria-label"):this.#t.setAttribute("aria-label",this.closeLabel))}#b(){let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o={show:{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}},hide:{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:250,easing:"ease"}}},i=this.customAnimations||t.customAnimations||{},r=e||this.noAnimations||null===this.customAnimations||null===t.customAnimations,s=t=>{let e=i[t]?.options??{},s=o[t].options;return{...s,...e,duration:r?0:e.duration??s.duration}};return{show:{keyframes:i.show?.keyframes??o.show.keyframes,options:s("show")},hide:{keyframes:i.hide?.keyframes??o.hide.keyframes,options:s("hide")}}}#f(t){let{keyframes:e,options:o}=this.#b().show;return t?.animate(e,o)}#L(t){let{keyframes:e,options:o}=this.#b().hide;return t?.animate(e,o)}#l(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}#y(t,e){return new Promise(o=>{t.addEventListener(e,e=>{e.target===t&&o()},{once:!0})})}#A(){return this.matches(":focus-within")}show(){return this.open?Promise.resolve():(this.open=!0,this.#y(this,$))}hide(){return this.open?(this.open=!1,this.#y(this,V)):Promise.resolve()}toast(t={}){if(t={forceRestart:!1,...t},this.#s){if(!t.forceRestart)return this.#s.promise;this.#s.resolve(),this.#s.cleanup()}let e=()=>{},o=new Promise(t=>e=t),i=()=>{this.#s?.resolve(),this.#s?.cleanup()};this.#s={promise:o,resolve:e,cleanup:()=>{this.removeEventListener(V,i),this.parentNode===G&&G.removeChild(this),G.querySelector(P)||G.remove(),this.open=!1,this.#s=null}},G.parentElement||document.body.append(G),G.appendChild(this),this.#p?.setAttribute("data-toast",""),this.open=!0;let r=G.shadowRoot?.querySelector(".stack");return r?.scrollTo({top:r.scrollHeight}),this.addEventListener(V,i,{once:!0}),o}#E(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=P){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();let K=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function Z(t){return new Promise(function(e,o){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return o(t.error)}})}function J(){var t,o,i;return e||(t="keyval",i=function(){if(o)return o;var e=indexedDB.open("keyval-store");return e.onupgradeneeded=function(){return e.result.createObjectStore(t)},(o=Z(e)).then(function(t){t.onclose=function(){return o=void 0}},function(){}),o},e=function(e,o){return i().then(function(i){return o(i.transaction(t,e).objectStore(t))})}),e}let X="barcode-scanner/",Q="settings",tt="history",te=async t=>{try{return[null,await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J();return e("readonly",function(e){return Z(e.get(t))})}(t)]}catch(t){return[t,void 0]}},to=async(t,e)=>{try{return await function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J();return o("readwrite",function(o){return o.put(e,t),Z(o.transaction)})}(t,e),[null]}catch(t){return[t]}},ti=async()=>te(X+Q),tr=async t=>to(X+Q,t),ts=async()=>te(X+tt),ta=async t=>to(X+tt,t);function tn(t,e=0,o=!1){let i=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...r)=>{clearTimeout(i),o&&!i&&t(...r),i=setTimeout(()=>{i=null,o||t(...r)},e)}}let tl=(...t)=>{},td=(...t)=>{};async function tc(t,e){if(!t||!e)return;let o=Array.from(t.querySelectorAll("bs-result")).find(t=>t.getAttribute("value")===e);o&&o.remove();let i=document.createElement("bs-result");i.setAttribute("value",e),i.setAttribute("role","alert"),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),t.insertBefore(i,t.firstElementChild),t.scrollTop=0}let th=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:o,frequency:i,volume:r,type:s,onEnded:a}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),r&&(l.gain.value=r),i&&(n.frequency.value=i),s&&(n.type=s),"function"==typeof a&&(n.onended=a),n.start(t.currentTime),n.stop(t.currentTime+(o||500)/1e3)}})();async function tu(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}let tm=0;async function tp(t={}){let{success:e=!0}=t,[,o]=await ti();if(!o)return;let i=Date.now();i-tm<1e3||(o.beep&&th(e?{duration:200,frequency:860,volume:.03,type:"square"}:{duration:300,frequency:200,volume:.05,type:"sawtooth"}),o.vibrate&&tu(e?100:200),tm=i)}function tb(t,e){if(!t||!e)return;let o=t.getBoundingClientRect();e.style.cssText=`width: ${o.width}px; height: ${o.height}px`}let tg=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e"];class tv{static async polyfill(){if("BarcodeDetector"in window)tl("Using the native BarcodeDetector API.");else try{await s("3jPiW"),tl("Using BarcodeDetector polyfill.")}catch(t){throw Error("BarcodeDetector API is not supported by your browser.",{cause:t})}}static async getSupportedFormats(){let t=await window.BarcodeDetector.getSupportedFormats()||[];return tg.filter(e=>t.includes(e))}static async create(t){let e=Array.isArray(t)&&t.length>0?t:await tv.getSupportedFormats();return new tv(e)}static async setup(){try{return await tv.polyfill(),{barcodeReaderError:null}}catch(t){return{barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0){let t=e[0];return tl({rawValue:t.rawValue,format:t.format}),t}throw Error("Could not detect barcode from provided source.")}}function tf(t={}){let{el:e,isTorchOn:o}={...{el:document.getElementById("torchButton"),isTorchOn:!1},...t},i=e.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",e.setAttribute("aria-label",`Turn ${o?"off":"on"} flash`))}function ty(t,e={}){var o;let i,r={duration:5e3,variant:"neutral",countdown:!1,icon:"",...e},s={info:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
      </svg>
    `,success:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
      </svg>
    `,warning:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/>
        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
      </svg>
    `,danger:`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg>
    `}[r.icon||r.variant]||"";return Object.assign(document.createElement("alert-element"),{closable:!0,duration:r.duration,variant:r.variant,countdown:r.countdown,innerHTML:`${s?`<span slot="icon">${s}</span>`:""}${r.trustDangerousInnerHTML?t:(o=t,(i=document.createElement("div")).textContent=o,i.innerHTML)}`}).toast()}let tw="video-capture",tE=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,tA=document.createElement("template");tA.innerHTML=`
  <style>${tE}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;class t_ extends HTMLElement{#C={};#k=null;#S=null;constructor(){super(),this.#C=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tA.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(t,e,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("zoom"===t&&e!==o&&"zoom"in this.#C){let t=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&t&&this.#T("zoom",this.zoom)}"torch"===t&&e!==o&&"torch"in this.#C&&this.#T("torch",this.torch)}async connectedCallback(){if(this.#z("autoPlay"),this.#z("facingMode"),this.#z("zoom"),this.#z("torch"),this.#S=this.shadowRoot?.querySelector("video")||null,this.#S?.addEventListener("loadedmetadata",this.#R),!t_.isSupported())return this.dispatchEvent(new CustomEvent(`${tw}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#S?.removeEventListener("loadedmetadata",this.#R)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get facingMode(){let t=this.getAttribute("facing-mode");return"user"!==t?"environment":t}set facingMode(t){this.setAttribute("facing-mode",t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get torch(){return this.hasAttribute("torch")}set torch(t){this.toggleAttribute("torch",!!t)}get loading(){return this.hasAttribute("loading")}#R=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${tw}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${tw}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#T(t,e){var o,i,r;if(!this.#k)return;let[s]=this.#k.getVideoTracks(),a=this.getTrackCapabilities(),n=this.getTrackSettings(),l="pan"===t||"tilt"===t||"zoom"===t?(o=Number(e),i=a[t]?.min||1,r=a[t]?.max||1,Number.isNaN(i)&&(i=0),Number.isNaN(r)&&(r=0),Math.min(Math.max(o,Math.min(i,r)),Math.max(i,r))):e;t in n&&s.applyConstraints({advanced:[{[t]:l}]}).catch(()=>{})}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(t){if(!t_.isSupported()||this.#k)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof t&&t.trim().length>0&&(e.video.deviceId={exact:t}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(t=>Number(t));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{this.#k=await navigator.mediaDevices.getUserMedia(e),this.#S&&(this.#S.srcObject=this.#k),this.#T("pan",this.pan),this.#T("tilt",this.tilt),this.#T("zoom",this.zoom)}catch(t){this.dispatchEvent(new CustomEvent(`${tw}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}restartVideoStream(t){this.#k&&this.#S&&this.stopVideoStream(),this.startVideoStream(t)}stopVideoStream(){if(!this.#S||!this.#k)return;let[t]=this.#k.getVideoTracks();t?.stop(),this.#S.srcObject=null,this.#k=null}getSupportedConstraints(){return t_.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#k)return{};let[t]=this.#k.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#k)return{};let[t]=this.#k.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(t=>"videoinput"===t.kind&&!!t.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=tw){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,t_)}}var tx="clipboard-copy",tL="success",tC="error",tk=document.createElement("template"),tS=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;tk.innerHTML=`
  <style>${tS}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;var tT=class t extends HTMLElement{#t=void 0;#p=null;#e=null;#i=null;#r=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tk.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.querySelector("button"),this.#e=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#r=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#p&&(this.#p.disabled=this.disabled,this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#s("value"),this.#s("from"),this.#s("disabled"),this.#s("feedbackDuration"),this.#p?.addEventListener("click",this.#E)}disconnectedCallback(){this.#p?.removeEventListener("click",this.#E),this.#w()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",null!=t?t.toString():t)}get from(){return this.getAttribute("from")||""}set from(t){this.setAttribute("from",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",null!=t?t.toString():t)}async #m(){if(!(!this.value&&!this.from))try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#p?.getRootNode({composed:!0}):this.#p?.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let o=e.querySelector(this.from);if(!o)return;t=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?o.href:o.textContent||""}await navigator.clipboard.writeText(t),this.#c(tL),this.dispatchEvent(new CustomEvent(`${tx}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tC),this.dispatchEvent(new CustomEvent(`${tx}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#E=t=>{t.preventDefault(),this.disabled||this.#t||this.#m()};#c(t){this.#e&&(this.#e.hidden=!0),this.#i&&(this.#i.hidden=t!==tL),this.#r&&(this.#r.hidden=t!==tC),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error"),this.#p?.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove(`button--${t}`),this.#t=void 0},this.feedbackDuration)}#w(){this.#t&&clearTimeout(this.#t),this.#t=void 0,this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error")}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=tx){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};class tz extends tT{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]');t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `,e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `,o.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
        <path fill-rule="evenodd" d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      </svg>
      <span class="text">Error</span>
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"only-icon"===t&&e!==o){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]'),i=t.querySelector(".text"),r=e.querySelector(".text"),s=o.querySelector(".text");i?.toggleAttribute("hidden",this.onlyIcon),r?.toggleAttribute("hidden",this.onlyIcon),s?.toggleAttribute("hidden",this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#z("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,tz)}}function tR(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}tz.defineCustomElement();let tO=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),tN=`
  :host {
    --color-flash: #ffff99;

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
    display: none !important;
  }

  .result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    position: relative;
    width: 100%;
    padding: 0.5rem;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
    white-space: pre-line;
  }

  a.result__item {
    color: var(--links);
  }

  .result__datetime {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-block-start: 0.25rem;
  }

  .result__datetime:empty {
    display: none !important;
  }

  .result__actions {
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .result web-share button,
  .result custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem;
    background-color: transparent;
    border: 0;
    border-radius: var(--border-radius);
    color: inherit;
    line-height: 1;
    font-family: inherit;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .result custom-clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .result custom-clipboard-copy::part(button--error) {
    color: var(--danger-color);
  }

  .flash {
    animation: flash 0.4s ease-out;
  }

  @keyframes flash {
    0% {
      background-color: #ffff99;
    }
    100% {
      background-color: transparent;
    }
  }
`,tM=document.createElement("template");tM.innerHTML=`
  <style>${tN}</style>

  <div class="result" part="result">
    <div class="result__content">
      <div class="result__datetime"></div>
    </div>

    <div class="result__actions">
      <custom-clipboard-copy only-icon></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
        </button>
      </web-share>
    </div>
  </div>
`;class tI extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tM.content.cloneNode(!0))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,o){"value"===t&&e!==o&&this.#O(this.value)}connectedCallback(){if(this.#z("value"),window.matchMedia("(prefers-reduced-motion: no-preference)").matches){let t=this.shadowRoot.querySelector(".result");t?.animate([{backgroundColor:"var(--color-flash)"},{backgroundColor:"transparent"}],{duration:400,easing:"ease-out"})}if(!tR()){let t=this.shadowRoot.querySelector("web-share");t&&(t.hidden=!0)}}async #O(t){let e,o=this.shadowRoot.querySelector(".result"),i=o?.querySelector(".result__content"),r=o?.querySelector(".result__datetime"),s=o?.querySelector(".result__item");s&&s?.remove();try{let[,o]=await ti();new URL(t),(e=document.createElement("a")).href=t,o?.openWebPageSameTab||(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")),o?.openWebPage?e.click():window.requestAnimationFrame(()=>e.focus())}catch{e=document.createElement("span")}e.className="result__item",e.part="result__item",e.textContent=t,r.textContent=tO.format(new Date),i?.insertBefore(e,r);let a=o?.querySelector("custom-clipboard-copy"),n=o?.querySelector("web-share");if(a){let e=a.shadowRoot?.querySelector("button");a.setAttribute("value",t),e?.setAttribute("aria-label",`Copy to clipboard ${t}`),a.hidden=!1}if(n&&tR()){let e=n.querySelector("button");n.setAttribute("share-text",t),n.hidden=!1,e?.setAttribute("aria-label",`Share ${t}`)}}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="bs-result"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,tI)}}tI.defineCustomElement();class tq extends HTMLElement{#N=null;#M=null;#I=[];#q;constructor(){super()}get supportedFormats(){return this.#I}set supportedFormats(t){this.#I=t,this.#D()}async connectedCallback(){this.#z("supportedFormats"),this.#N=this.querySelector("#formatsList"),this.#M=this.querySelector("form");let[,t]=await ti();this.#q=t??{},this.#M?.querySelectorAll('[name="general-settings"]').forEach(t=>{t.checked=this.#q[t.value]})}#D(){if(!this.#N)return;let t=this.#q?.formats;this.#N.replaceChildren(),this.supportedFormats.forEach(e=>{let o=document.createElement("li"),i=document.createElement("label"),r=document.createElement("input");r.type="checkbox",r.name="formats-settings",r.value=e,r.checked=null==t||t.includes(e),i.appendChild(r),i.appendChild(document.createTextNode(e)),o.appendChild(i),this.#N.appendChild(o)})}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="bs-settings"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,tq)}}tq.defineCustomElement();let tD=`
  :host {
    --empty-history-button-color: #ffffff;

    display: block;
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --empty-history-button-color: #000000;
    }
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  ul {
    max-width: 36.25rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-main);
  }

  ul li:last-of-type {
    border-bottom: none;
  }

  ul li a {
    color: var(--links);
  }

  ul li a,
  ul li span {
    word-break: break-all;
  }

  @supports (-webkit-line-clamp: 1) and (display: -webkit-box) and (-webkit-box-orient: vertical) {
    ul li a,
    ul li span {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
  }

  .actions {
    display: flex;
    gap: 0.25rem;
  }

  .actions button,
  .actions custom-clipboard-copy::part(button) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    margin: 0;
    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent !important;
    line-height: 1;
    font-size: 1rem;
    color: var(--text-main);
    cursor: pointer;
  }

  .actions custom-clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .actions custom-clipboard-copy::part(button--error) {
    color: var(--danger-color);
  }

  .actions .delete-action {
    color: var(--danger-color);
    margin-right: -0.5rem;
  }

  footer {
    position: sticky;
    bottom: 0;
    padding: 0.75rem;
    background-color: var(--dialog-background);
  }

  footer > button {
    width: 100%;
    padding: 0.625rem;
    border: 0;
    border-radius: var(--border-radius);
    background-color: var(--danger-color);
    color: var(--empty-history-button-color);
    font-size: 1rem;
    cursor: pointer;
  }

  ul:empty + footer > button {
    display: none;
  }

  ul:not(:empty) + footer > div {
    display: none;
  }
`,tF=document.createElement("template");tF.innerHTML=`
  <style>${tD}</style>
  <ul id="historyList"></ul>
  <footer>
    <div>There are no saved items in history.</div>
    <button type="button" id="emptyHistoryBtn">Empty history</button>
  </footer>
`;class tB extends HTMLElement{#F=null;#B=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tF.content.cloneNode(!0))}async connectedCallback(){this.#F=this.shadowRoot?.getElementById("historyList"),this.#B=this.shadowRoot?.getElementById("emptyHistoryBtn"),this.#H((await ts())[1]||[]),this.#F?.addEventListener("click",this.#P),this.#B?.addEventListener("click",this.#$)}disconnectedCallback(){this.#F?.removeEventListener("click",this.#P),this.#B?.removeEventListener("click",this.#$)}async add(t){if(!t)return;let e={type:"add",message:"Error adding barcode to history"},[o,i=[]]=await ts();if(o||!Array.isArray(i))return this.#V("bs-history-error",e),o;if(i.find(e=>e===t))return;let r=[...i,t],[s]=await ta(r);return s?(td("Error setting history",s),this.#V("bs-history-error",e),s):(this.#F?.insertBefore(this.#j(t),this.#F.firstElementChild),this.#V("bs-history-success",{type:"add",message:"Barcode added to history"}),null)}async remove(t){if(!t)return;let e={type:"remove",message:"Error removing barcode from history"},[o,i=[]]=await ts();if(o||!Array.isArray(i))return this.#V("bs-history-error",e),o;let r=i.filter(e=>e!==t),[s]=await ta(r);if(s)return td("Error setting history",s),this.#V("bs-history-error",e),s;let a=this.#F?.querySelector(`li[data-value="${t}"]`);return a?.remove(),this.#V("bs-history-success",{type:"remove",message:"Barcode removed from history"}),null}async empty(){let[t]=await ta([]);return t?(td("Error setting history",t),this.#V("bs-history-error",{type:"empty",message:"Error emptying history"}),t):(this.#F?.replaceChildren(),this.#V("bs-history-success",{type:"empty",message:"History emptied successfully"}),null)}#H(t){if(!this.#F)return;this.#F.replaceChildren();let e=document.createDocumentFragment();[...t].reverse().forEach(t=>e.appendChild(this.#j(t))),this.#F.appendChild(e)}#j(t){let e,o=document.createElement("li");o.setAttribute("data-value",t);try{new URL(t),(e=document.createElement("a")).href=t,e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")}catch{e=document.createElement("span")}e.textContent=t;let i=document.createElement("div");i.className="actions";let r=document.createElement("custom-clipboard-copy"),s=r.shadowRoot?.querySelector("button");r.setAttribute("only-icon",""),r.setAttribute("value",t),s?.setAttribute("aria-label",`Copy to clipboard ${t}`),i.appendChild(r);let a=document.createElement("button");return a.type="button",a.className="delete-action",a.setAttribute("data-action","delete"),a.setAttribute("aria-label",`Remove from history ${t}`),a.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `,i.appendChild(a),o.appendChild(e),o.appendChild(i),o}#P=async t=>{let e=t.target;if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;window.confirm(`Delete history item ${t}?`)&&this.remove(t)}};#$=async()=>{window.confirm("Empty history? This action cannot be undone.")&&this.empty()};#V(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}static defineCustomElement(t="bs-history"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,tB)}}tB.defineCustomElement(),async function(){let t=document.querySelector("a-tab-group"),e=document.querySelector("video-capture"),o=document.querySelector("bs-settings"),i=document.querySelector("bs-history"),r=document.getElementById("cameraPanel"),s=r.querySelector(".results"),a=document.getElementById("filePanel").querySelector(".results"),n=document.getElementById("scanInstructions"),l=document.getElementById("scanBtn"),d=document.getElementById("dropzone"),c=document.querySelector("resize-observer"),h=document.getElementById("scanFrame"),u=document.getElementById("torchButton"),m=document.getElementById("globalActions"),p=document.getElementById("historyBtn"),b=document.getElementById("historyDialog"),g=document.getElementById("settingsBtn"),v=document.getElementById("settingsDialog"),f=document.getElementById("settingsForm"),y=document.getElementById("cameraSelect"),w=null,E=!0;"function"==typeof HTMLDialogElement&&(m?.removeAttribute("hidden"),b?.removeAttribute("hidden"),v?.removeAttribute("hidden"));let{barcodeReaderError:A}=await tv.setup();if(A){let e=document.getElementById("barcodeReaderError");E=!1,m?.setAttribute("hidden",""),t?.setAttribute("hidden",""),e?.setAttribute("open","");return}let _=await tv.getSupportedFormats(),[,x]=await ti(),L=x?.formats||_,C=await tv.create(L);e.addEventListener("video-capture:video-play",O,{once:!0}),e.addEventListener("video-capture:error",function(t){let e=t.detail.error;if("NotFoundError"===e.name)return;let o="NotAllowedError"===e.name?"<strong>Error accessing camera</strong><br>Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;r.innerHTML=`
      <alert-element variant="danger" open>
        <span slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </span>
        ${o}
      </alert-element>
    `},{once:!0}),t_.defineCustomElement();let k=e?.shadowRoot,S=k?.querySelector("video"),T=k?.querySelector('[part="actions-container"]');async function z(){if(E){tl("Scanning..."),n?.removeAttribute("hidden");try{let[,t]=await ti(),e=await C.detect(S),o=e?.rawValue??"";if(!o)throw Error("No barcode detected");if(tc(s,o),t?.addToHistory&&i?.add(o),tp(),!t?.continueScanning){w&&(clearTimeout(w),w=null),l?.removeAttribute("hidden"),h?.setAttribute("hidden",""),T?.setAttribute("hidden","");return}}catch{}E&&(w=setTimeout(()=>z(),1e3))}}async function R(t){if(!t)return;let[,e]=await ti(),o=new Image,r=new FileReader;r.onload=r=>{let s=r.target.result;o.onload=async()=>{try{let t=await C.detect(o),r=t?.rawValue??"";if(!r)throw Error("No barcode detected");tc(a,r),e?.addToHistory&&i?.add(r),tp()}catch(t){td(t),ty("<strong>No barcode detected</strong><br><small>Please try again with a different image.</small>",{variant:"danger",trustDangerousInnerHTML:!0}),tp({success:!1})}},o.src=s,o.alt="Image preview",d.replaceChildren();let n=document.createElement("div");n.className="dropzone-preview";let l=document.createElement("div");l.className="dropzone-preview__image-wrapper";let c=document.createElement("div");c.className="dropzone-preview__file-name",c.textContent=t.name,l.appendChild(o),n.appendChild(l),n.appendChild(c),d.prepend(n)},r.readAsDataURL(t)}async function O(t){h?.removeAttribute("hidden"),tb(t.detail.video,h),z();let o=t.target.getTrackSettings(),i=t.target.getTrackCapabilities(),r=document.getElementById("zoomLevel");if(i?.torch&&(u?.addEventListener("click",M),u?.removeAttribute("hidden"),e.hasAttribute("torch")&&tf({el:u,isTorchOn:!0})),o?.zoom&&i?.zoom){let t=document.getElementById("zoomControls"),s=i?.zoom?.min||0,a=i?.zoom?.max||10,n=o?.zoom||1;t?.addEventListener("click",t=>{let o=t.target.closest('[data-action="zoom-in"]'),i=t.target.closest('[data-action="zoom-out"]');o&&n<a&&(n+=.5),i&&n>s&&(n-=.5),r.textContent=n.toFixed(1),e.zoom=n}),t?.removeAttribute("hidden"),r.textContent=n.toFixed(1)}let s=await t_.getVideoInputDevices();s.forEach((t,e)=>{let o=document.createElement("option");o.value=t.deviceId,o.textContent=t.label||`Camera ${e+1}`,y.appendChild(o)}),s.length>1&&(y?.addEventListener("change",I),y?.removeAttribute("hidden"))}async function N(t){t.preventDefault();let e={},o=new FormData(f),i=o.getAll("general-settings"),r=o.getAll("formats-settings");i.forEach(t=>e[t]=!0),e.formats=r,tr(e),"formats-settings"===t.target.name&&(C=await tv.create(r))}function M(t){e.torch=!e.torch,tf({el:t.currentTarget,isTorchOn:e.hasAttribute("torch")})}function I(t){if("function"!=typeof e.restartVideoStream)return;let o=t.target.value||void 0;e.restartVideoStream(o)}d.accept=K.join(","),o.supportedFormats=_,l.addEventListener("click",function(){l?.setAttribute("hidden",""),h?.removeAttribute("hidden"),T?.removeAttribute("hidden"),z()}),t.addEventListener("a-tab-show",tn(function(t){let e=t.detail.tabId,o=document.querySelector("video-capture");if("cameraTab"===e){if(E=!0,!o)return;if(!o.loading&&l.hasAttribute("hidden")&&(h?.removeAttribute("hidden"),T?.removeAttribute("hidden"),z()),"function"==typeof o.startVideoStream){let t=y?.value||void 0;o.startVideoStream(t)}}else"fileTab"===e&&(E=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream(),h?.setAttribute("hidden",""),T?.setAttribute("hidden",""))},250)),d.addEventListener("files-dropzone-drop",function(t){R(t.detail.acceptedFiles[0])}),c.addEventListener("resize-observer:resize",function(){tb(e.shadowRoot.querySelector("video"),h)}),g.addEventListener("click",function(){v.open=!0}),f.addEventListener("change",tn(N,500)),p.addEventListener("click",function(){b.open=!0}),document.addEventListener("visibilitychange",function(){if("cameraTab"===t.querySelector("[selected]").getAttribute("id"))if("hidden"===document.visibilityState)E=!1,null!=e&&"function"==typeof e.stopVideoStream&&e.stopVideoStream();else{E=!0;let t=document.querySelector("video-capture");if(!t)return;if(!t.loading&&l.hasAttribute("hidden")&&z(),"function"==typeof t.startVideoStream){let e=y?.value||void 0;t.startVideoStream(e)}}}),document.addEventListener("keydown",function(e){let o,i,r,s;"Escape"===e.key&&(o=t.querySelector("#cameraTab").hasAttribute("selected"),i=!l.hidden,r=v.hasAttribute("open"),s=b.hasAttribute("open"),i&&o&&!(r||s)&&l.click())}),document.addEventListener("bs-history-success",function(t){let{type:e,message:o}=t.detail;"add"===e&&ty(o,{variant:"success"})}),document.addEventListener("bs-history-error",function(t){let{type:e,message:o}=t.detail;("remove"===e||"empty"===e)&&b?.hide(),ty(o,{variant:"danger"})})}();
//# sourceMappingURL=barcode-scanner.efe3c5c1.js.map
