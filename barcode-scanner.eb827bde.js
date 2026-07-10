let t;var e,o="u">typeof globalThis?globalThis:"u">typeof self?self:"u">typeof window?window:"u">typeof global?global:{},i={},r={},a=o.parcelRequirea202;null==a&&((a=function(t){if(t in i)return i[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},o.parcelRequirea202=a),(0,a.register)("3jPiW",function(t,e){var o;t.exports=(o="6z40I",import("./"+(o=a.i?.[o]||o))).then(()=>a("aexh3"))}),Object.assign(a.i??={},{"6z40I":"es.95be77cf.js"});var s=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},n=(t,e)=>{if(Object.prototype.hasOwnProperty.call(e,t)){let o=e[t];delete e[t],e[t]=o}},l=0,d=`
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
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(c.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(t,e,o){if("selected"===t&&e!==o&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===t&&e!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===t&&e!==o)if(this.closable){let t=document.createElement("span");t.className="tab__close",t.setAttribute("part","close-tab"),t.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(t),t.addEventListener("click",this.#t)}else{let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t),t?.remove()}}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=s("tab",(++l).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#t)}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}#t=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(t){return n(t,this)}static defineCustomElement(e="a-tab"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var h=0,u=`
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
`,p=document.createElement("template");p.innerHTML=`
  <style>
    ${u}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=s("panel",(++h).toString()))}static defineCustomElement(e="a-tab-panel"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var m={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},b=Object.entries(m).map(([,t])=>t),g="auto",v="manual",f=`
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
  :host([placement="${m.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${m.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${m.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${m.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${m.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${m.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${m.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${m.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${m.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${m.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,w=document.createElement("template");w.innerHTML=`
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
`,(class t extends HTMLElement{#t=null;#e=null;#o=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(w.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,o){"placement"===t&&e!==o&&this.#i(),"no-scroll-controls"===t&&e!==o&&this.#i()}get placement(){return this.getAttribute("placement")||m.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||g}set activation(t){this.setAttribute("activation",t||g)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#r("placement"),this.#r("noScrollControls"),this.#r("scrollDistance"),this.#r("activation"),this.#r("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),r=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#a),e?.addEventListener("slotchange",this.#a),o?.addEventListener("click",this.#s),o?.addEventListener("keydown",this.#n),r.forEach(t=>t.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#t=new ResizeObserver(t=>{this.#e=window.requestAnimationFrame(()=>{let e=t?.[0]?.target,o=e?.scrollWidth>e?.clientWidth;r.forEach(t=>t.toggleAttribute("hidden",!o)),i?.part.toggle("nav--has-scroll-controls",o),i?.classList.toggle("tab-group__nav--has-scroll-controls",o)})})),this.#c(),this.#i()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#a),e?.removeEventListener("slotchange",this.#a),o?.removeEventListener("click",this.#s),o?.removeEventListener("keydown",this.#n),i.forEach(t=>t.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#t)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#t.unobserve(t),this.#t.observe(t))}#h(){this.#t&&(this.#t.disconnect(),null!==this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null))}#p(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?"ltr":"rtl":window.getComputedStyle(this).direction||"ltr"}#c(){this.hidden=0===this.#m().length}#b(){let t=this.#m();this.#c(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#m(){return Array.from(this.querySelectorAll("a-tab"))}#v(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#f(){return this.#m().find(t=>!t.disabled)||null}#w(){let t=this.#m();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#y(){let t=this.#m(),e=this.activation===v?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#E(){let t=this.#m(),e=this.activation===v?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#A(){let t=this.#m(),e=this.#g();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#i(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===m.START||this.placement===m.END?(this.#h(),o.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls"),e?.setAttribute("aria-orientation","vertical")):(this.#u(),o.forEach(t=>t.hidden=!1),e?.setAttribute("aria-orientation","horizontal"))}#x(){let t=this.#m(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#o&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#L(e))}#L(t){this.#A(),t&&(t.selected=!0);let e=this.#v(t);e&&(e.hidden=!1)}#a=t=>{this.#b(),this.#i(),this.#x(),"tab"===t.target.name&&(this.#o=!0)};#n=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=b.includes(this.placement||"")?this.placement:m.TOP,o=[m.TOP,m.BOTTOM].includes(e||"")?"horizontal":"vertical",i=this.#p(),r=null;switch(t.key){case"ArrowLeft":"horizontal"===o&&(r="ltr"===i?this.#y():this.#E())&&(this.activation===v?r.focus():this.selectTab(r));break;case"ArrowRight":"horizontal"===o&&(r="ltr"===i?this.#E():this.#y())&&(this.activation===v?r.focus():this.selectTab(r));break;case"ArrowUp":"vertical"===o&&(r=this.#y())&&(this.activation===v?r.focus():this.selectTab(r));break;case"ArrowDown":"vertical"===o&&(r=this.#E())&&(this.activation===v?r.focus():this.selectTab(r));break;case"Home":(r=this.#f())&&(this.activation===v?r.focus():this.selectTab(r));break;case"End":(r=this.#w())&&(this.activation===v?r.focus():this.selectTab(r));break;case"Enter":case" ":(r=t.target)&&this.selectTab(r);break;default:return}t.preventDefault()};#s=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#l=t=>{let e=t.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!o)return;let i=e.classList.contains("tab-group__scroll-button--start"),r="ltr"===this.#p(),a=o.scrollLeft;o.scrollTo({left:a+(i?r?-1:1:r?1:-1)*this.scrollDistance})};#d=t=>{let e=t.target,o=this.#v(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#r(t){return n(t,this)}selectTabByIndex(t){let e=this.#m()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#m().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#m().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#L(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(e="a-tab-group"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var y=`
  :host {
    display: inline-block;
  }
`,E=document.createElement("template");E.innerHTML=`
  <style>${y}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class t extends HTMLElement{#t;#m;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(E.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#m=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#m&&(this.#m.toggleAttribute("disabled",this.disabled),this.#m.setAttribute("aria-disabled",this.disabled.toString()),this.#m.part&&this.#m.part.contains("button")&&this.#m.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#e("shareUrl"),this.#e("shareTitle"),this.#e("shareText"),this.#e("shareFiles"),this.#e("disabled"),this.#t?.addEventListener("slotchange",this.#y),this.#m?.addEventListener("click",this.#i)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#y),this.#m?.removeEventListener("click",this.#i)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#E}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#E=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name)return void this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#i=t=>{t.preventDefault(),this.disabled||this.share()};#y=t=>{t.target&&"button"===t.target.name&&(this.#m?.removeEventListener("click",this.#i),this.#m=this.#c(),this.#m&&(this.#m.addEventListener("click",this.#i),"BUTTON"===this.#m.nodeName||this.#m.hasAttribute("role")||this.#m.setAttribute("role","button")))};#c(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#e(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="web-share"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var A=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),x=[".DS_Store","Thumbs.db"],L=(t,e)=>{let o=(t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=A.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t})(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},C=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),k=async t=>{let e=[],o=await C(t);for(;o.length>0;)e.push(...o),o=await C(t);return e},_=t=>new Promise((e,o)=>{t.file(o=>e(L(o,t.fullPath)),o)}),S=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t)if(t.isFile){let o=await _(t);-1===x.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await k(t.createReader()))}return e},z=async t=>{let e=[];for(let o of t)-1===x.indexOf(o.name)&&e.push(L(o));return e},T=async t=>t.dataTransfer?t.dataTransfer.items?await S(t.dataTransfer.items):await z(t.dataTransfer.files):await z(t.target.files),R=String.raw,O=String.raw,M="files-dropzone",N=document.createElement("template"),I=R`
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
`;N.innerHTML=O`
  <style>
    ${I}
  </style>

  <input type="file" id="file-input" hidden />

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot><span>Drag 'n' drop files here, or click to select files</span></slot>
  </div>
`,(class t extends HTMLElement{static ERROR_CODES={FILE_DIALOG_OPEN_FAILED:"FILE_DIALOG_OPEN_FAILED",FILE_INPUT_CHANGE_FAILED:"FILE_INPUT_CHANGE_FAILED",DROP_EVENT_PROCESSING_FAILED:"DROP_EVENT_PROCESSING_FAILED",UNKNOWN_ERROR:"UNKNOWN_ERROR"};static REJECTION_CODES={TOO_MANY_FILES:"TOO_MANY_FILES",FILE_TOO_LARGE:"FILE_TOO_LARGE",FILE_TOO_SMALL:"FILE_TOO_SMALL",INVALID_MIME_TYPE:"INVALID_MIME_TYPE"};#m=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(N.content.cloneNode(!0)),this.shadowRoot&&(this.#m=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#m&&(this.#m.accept=this.accept),"disabled"===t&&e!==o&&this.#m&&(this.#m.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==o&&this.#m&&(this.#m.multiple=this.multiple)}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("autoFocus"),this.#r("noStyle"),this.#m?.addEventListener("change",this.#e),this.#t?.addEventListener("dragenter",this.#a),this.#t?.addEventListener("dragover",this.#y),this.#t?.addEventListener("dragleave",this.#p),this.#t?.addEventListener("drop",this.#o),this.#t?.addEventListener("click",this.#h),this.#t?.addEventListener("keyup",this.#n),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#m?.removeEventListener("change",this.#e),this.#t?.removeEventListener("dragenter",this.#a),this.#t?.removeEventListener("dragover",this.#y),this.#t?.removeEventListener("dragleave",this.#p),this.#t?.removeEventListener("drop",this.#o),this.#t?.removeEventListener("click",this.#h),this.#t?.removeEventListener("keyup",this.#n)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i(t,e,o){let i=new CustomEvent(`${M}-${t}`,{bubbles:!0,composed:!0,cancelable:!1,...o,detail:e});return this.dispatchEvent(i)}#E(t,e){this.#i("error",{code:t,error:e})}#e=async e=>{try{this.#c(await T(e))}catch(e){this.#E(t.ERROR_CODES.FILE_INPUT_CHANGE_FAILED,e)}};#a=()=>{this.disabled||this.#i("dragenter")};#y=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.#i("dragover")};#p=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.#i("dragleave"))};#o=async e=>{if(!this.disabled){e.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#c(await T(e))}catch(e){this.#E(t.ERROR_CODES.DROP_EVENT_PROCESSING_FAILED,e)}}};#h=()=>{this.disabled||this.openFileDialog()};#n=t=>{this.disabled||(" "===t.key||"Enter"===t.key)&&this.openFileDialog()};#c(e){if(!Array.isArray(e)||!e.length)return;let o=[],i=[],r=e.length;if(!this.multiple&&r>1)for(let o of e)i.push({file:o,errors:[{code:t.REJECTION_CODES.TOO_MANY_FILES,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&r>this.maxFiles)for(let o of e)i.push({file:o,errors:[{code:t.REJECTION_CODES.TOO_MANY_FILES,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let r of e){let e=function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,r=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(r===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(r,this.accept),a=r.size>this.maxSize,s=r.size<this.minSize;if(!e||a||s){let o=[];e||o.push({code:t.REJECTION_CODES.INVALID_MIME_TYPE,message:`File type "${r.type}" is not accepted.`}),a&&o.push({code:t.REJECTION_CODES.FILE_TOO_LARGE,message:`File size ${r.size} exceeds the maximum size of ${this.maxSize}.`}),s&&o.push({code:t.REJECTION_CODES.FILE_TOO_SMALL,message:`File size ${r.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:r,errors:o})}else o.push(r)}this.#i("drop",{acceptedFiles:o,rejectedFiles:i}),o.length>0&&this.#i("drop-accepted",{acceptedFiles:o}),i.length>0&&this.#i("drop-rejected",{rejectedFiles:i}),this.#m&&(this.#m.value=this.#m.defaultValue)}openFileDialog(){if(!(this.disabled||!this.#m)){if("showPicker"in HTMLInputElement.prototype&&"function"==typeof this.#m.showPicker){try{this.#m.showPicker()}catch(e){this.#E(t.ERROR_CODES.FILE_DIALOG_OPEN_FAILED,e)}return}this.#m.click()}}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=M){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var D=document.createElement("template");D.innerHTML=`
  <style>:host { display: contents; }</style>
  <slot></slot>
`,(class t extends HTMLElement{#t=null;#m=null;#e=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(D.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&(this.disabled?this.#r():this.#i())}connectedCallback(){this.#p("disabled"),"ResizeObserver"in window&&(this.#m=new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}),this.disabled||this.#i(),this.#t?.addEventListener("slotchange",this.#a))}disconnectedCallback(){this.#r(),this.#t?.removeEventListener("slotchange",this.#a)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}#i(){this.#t&&this.#m&&(this.#e.forEach(t=>this.#m?.unobserve(t)),this.#e=[],this.#t.assignedElements().forEach(t=>{this.#m?.observe(t),this.#e.push(t)}))}#r(){this.#m?.disconnect()}#a=()=>{this.disabled||this.#i()};#p(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="resize-observer"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var B=[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],F={duration:300,easing:"cubic-bezier(0.2, 0, 0.38, 0.9)"},q=`
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
`,P=document.createElement("template");P.innerHTML=`
  <style>${q}</style>

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
`,(class t extends HTMLElement{static CLOSE_REQUEST_REASONS={CLOSE_BUTTON:"close-button",ESCAPE_KEY:"escape-key",BACKDROP_CLICK:"backdrop-click",EXTERNAL_INVOKER:"external-invoker"};#t=null;#a=null;#i=null;#r=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(P.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#a=this.shadowRoot.querySelector('slot[name="footer"]'),this.#i=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(t,e,o){if(null!==this.#t){if("open"===t&&e!==o&&(this.open?(this.#t.classList.toggle("dialog--no-animations",this.noAnimations),this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===t&&e!==o){let t=this.#t.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#t.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}"close-label"===t&&e!==o&&this.#E()}}connectedCallback(){this.#m("open"),this.#m("staticBackdrop"),this.#m("noHeader"),this.#m("noAnimations"),this.#m("noCloseButton"),this.#m("fullscreen"),this.#m("preserveOverflow"),this.#m("placement"),this.#m("closeLabel"),this.#t?.addEventListener("click",this.#c),this.#t?.addEventListener("close",this.#o),this.#t?.addEventListener("cancel",this.#p),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#a?.addEventListener("slotchange",this.#s),this.#i?.addEventListener("slotchange",this.#L),this.addEventListener("command",this.#d)}disconnectedCallback(){this.#t?.removeEventListener("click",this.#c),this.#t?.removeEventListener("close",this.#o),this.#t?.removeEventListener("cancel",this.#p),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#a?.removeEventListener("slotchange",this.#s),this.#i?.removeEventListener("slotchange",this.#L),this.removeEventListener("command",this.#d),this.#r&&(this.#r?.cancel(),this.#r=null)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){this.toggleAttribute("static-backdrop",!!t)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){this.toggleAttribute("no-header",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){this.toggleAttribute("no-close-button",!!t)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){this.toggleAttribute("fullscreen",!!t)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(t){this.toggleAttribute("preserve-overflow",!!t)}get placement(){return this.getAttribute("placement")||"center"}set placement(t){this.setAttribute("placement",null!=t?t.toString():t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}#E(){if(null===this.#t)return;let t=this.#t.querySelector(".dialog__close");null!==t&&((this.#i?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?t.removeAttribute("aria-label"):t.setAttribute("aria-label",this.closeLabel))}#e(){let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(this.noAnimations||t||this.#r)return;let e=this.#t;e&&"function"==typeof e.animate&&(this.#r=e.animate(B,F),this.#r.finished.catch(()=>{}).finally(()=>{this.#r=null}))}#o=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#p=e=>{let o=this.#y(t.CLOSE_REQUEST_REASONS.ESCAPE_KEY);this.dispatchEvent(o),o.defaultPrevented&&(e.preventDefault(),this.#e())};#h=e=>{let o=this.#y(t.CLOSE_REQUEST_REASONS.CLOSE_BUTTON);this.dispatchEvent(o),o.defaultPrevented&&(e.preventDefault(),this.#e())};#c=e=>{let{target:o,currentTarget:i}=e,r=o===i,a=o instanceof HTMLElement&&null!==o.closest("[data-me-close]");if(!r&&!a)return;let s=r?t.CLOSE_REQUEST_REASONS.BACKDROP_CLICK:t.CLOSE_REQUEST_REASONS.EXTERNAL_INVOKER,n=this.#y(s);(this.dispatchEvent(n),n.defaultPrevented||r&&this.staticBackdrop)?this.#e():this.hide()};#d=e=>{switch(e.command){case"--me-open":if(this.open)return;this.show();return;case"--me-close":{if(!this.open)return;let e=this.#y(t.CLOSE_REQUEST_REASONS.EXTERNAL_INVOKER);if(this.dispatchEvent(e),e.defaultPrevented)return void this.#e();this.hide();return}default:return}};#s=()=>{if(null===this.#t)return;let t=this.#t.querySelector(".dialog__footer");if(null===t)return;let e=this.#a?.assignedNodes();t.hidden=!(e&&e.length>0)};#L=()=>{this.#E()};#y(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#m(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var H=String.raw,V=class t extends EventTarget{#i=!1;#m=0;#t=0;#y=0;#a=0;#o=0;constructor(t){super();let{elapsed:e,duration:o}={elapsed:0,duration:1/0,...t};if("number"!=typeof e||Number.isNaN(e))throw TypeError("elapsed option must be a number");if("number"!=typeof o||Number.isNaN(o))throw TypeError("duration option must be a number");this.#i=!1,this.#m=Math.max(0,o),this.#t=Math.min(Math.max(0,e),this.#m),this.#y=this.#t,this.#a=0,this.#o=this.#t}#r(t){this.dispatchEvent(new Event(t))}#e=()=>{if(!this.#i)return;let e=t.now()-this.#a+this.#o;this.#t=Math.min(e,this.#m),this.#r("tick"),e<this.#m?requestAnimationFrame(this.#e):(this.#i=!1,this.#o=this.#t,this.#r("finish"))};on(t,e,o){return this.addEventListener(t,e,o),this}off(t,e,o){return this.removeEventListener(t,e,o),this}start(){return this.#i||this.#t>=this.#m||(this.#i=!0,this.#a=t.now(),this.#r("start"),requestAnimationFrame(this.#e)),this}stop(){return this.#i&&(this.#i=!1,this.#o=this.#t,this.#r("stop")),this}reset(){return this.#i=!1,this.#t=this.#y,this.#o=this.#y,this.#a=0,this.#r("reset"),this}time(){return{elapsed:this.#t,remaining:this.remaining}}get elapsed(){return this.#t}get remaining(){return Math.max(0,this.#m-this.#t)}get running(){return this.#i}static now(){return"performance"in window?performance.now():Date.now()}},j="alert-after-show",$="alert-after-hide",U=String.raw,Y=String.raw,G=((t=Object.assign(document.createElement("div"),{className:"alert-toast-stack"})).attachShadow({mode:"open"}).innerHTML=H`
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
  `,t),Z=Y`
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
`,K=document.createElement("template");K.innerHTML=U`
  <style>
    ${Z}
  </style>

  <div class="alert" part="base" hidden>
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
`,(class t extends HTMLElement{#i=!1;#m=null;#t=null;#y=null;#a=null;#o;static customAnimations;#r="api";#e=null;#v=null;#c=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(K.content.cloneNode(!0))}static get observedAttributes(){return["open","duration","announce","close-label","countdown","focusable"]}attributeChangedCallback(t,e,o){if(!(!this.#i||e===o))switch(t){case"open":this.open?(this.duration!==1/0&&this.#e?.start(),this.#m?.removeAttribute("hidden"),this.#c?.style.setProperty("transform","scaleX(1)"),this.#l("alert-show"),this.#C(this.#m)?.finished.finally(()=>{this.#l(j)})):(this.duration!==1/0&&this.#e?.reset(),this.#l("alert-hide",{reason:this.#r}),this.#k(this.#m)?.finished.finally(()=>{this.#m?.setAttribute("hidden",""),this.#l($,{reason:this.#r}),this.#r="api"}));break;case"duration":this.#e?.stop().off("tick",this.#h).off("finish",this.#p),this.#e=new V({duration:this.duration}).on("tick",this.#h).on("finish",this.#p),this.open&&this.duration!==1/0&&!this.#A()&&this.#e.start(),this.duration===1/0&&this.#c?.style.setProperty("transform","scaleX(1)");break;case"close-label":this.#n();break;case"announce":"none"!==this.announce?this.#m?.setAttribute("role",this.announce):this.#m?.removeAttribute("role");break;case"countdown":this.#v?.toggleAttribute("hidden",!this.countdown);break;case"focusable":this.focusable?this.#m?.setAttribute("tabindex","0"):this.#m?.removeAttribute("tabindex")}}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get variant(){return this.getAttribute("variant")||""}set variant(t){this.setAttribute("variant",t)}get announce(){let t=this.getAttribute("announce")??"";return this.#f(t)?t:"none"}set announce(t){this.setAttribute("announce",null!=t?t.toString():t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}get duration(){let t=this.getAttribute("duration");if(null===t||""===t)return 1/0;let e=Number(t);return e<=0?10:Number.isNaN(e)?1/0:e}set duration(t){this.setAttribute("duration",null!=t?t.toString():t)}get countdown(){return this.hasAttribute("countdown")}set countdown(t){this.toggleAttribute("countdown",!!t)}get focusable(){return this.hasAttribute("focusable")}set focusable(t){this.toggleAttribute("focusable",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get customAnimations(){return this.#o}set customAnimations(t){this.#o=t}connectedCallback(){this.#E("open"),this.#E("variant"),this.#E("announce"),this.#E("closable"),this.#E("closeLabel"),this.#E("duration"),this.#E("countdown"),this.#E("focusable"),this.#E("noAnimations"),this.#E("customAnimations"),this.#m=this.shadowRoot?.querySelector(".alert")??null,this.#t=this.shadowRoot?.querySelector(".alert__close")??null,this.#y=this.shadowRoot?.querySelector('slot[name="close"]')??null,this.#v=this.shadowRoot?.querySelector(".alert__countdown")??null,this.#c=this.shadowRoot?.querySelector(".alert__countdown-elapsed")??null,this.#t?.addEventListener("click",this.#u),this.#y?.addEventListener("slotchange",this.#s),this.addEventListener("mouseenter",this.#L),this.addEventListener("mouseleave",this.#d),this.addEventListener("focusin",this.#L),this.addEventListener("focusout",this.#d),this.addEventListener("command",this.#b),this.#e=new V({duration:this.duration}).on("tick",this.#h).on("finish",this.#p),this.open?(this.duration!==1/0&&this.#e?.start(),this.#m?.removeAttribute("hidden")):this.#m?.setAttribute("hidden",""),this.closeLabel&&this.#n(),"none"!==this.announce?this.#m?.setAttribute("role",this.announce):this.#m?.removeAttribute("role"),this.focusable?this.#m?.setAttribute("tabindex","0"):this.#m?.removeAttribute("tabindex"),this.#v?.toggleAttribute("hidden",!this.countdown),this.#i=!0}disconnectedCallback(){this.#i=!1,this.#e?.stop().off("tick",this.#h).off("finish",this.#p),this.#e=null,this.#t?.removeEventListener("click",this.#u),this.#y?.removeEventListener("slotchange",this.#s),this.removeEventListener("mouseenter",this.#L),this.removeEventListener("mouseleave",this.#d),this.removeEventListener("focusin",this.#L),this.removeEventListener("focusout",this.#d),this.removeEventListener("command",this.#b)}connectedMoveCallback(){}#f(t){return"none"===t||"status"===t||"alert"===t||"alertdialog"===t}#h=t=>{if(!this.countdown||!this.#c)return;let{remaining:e}=t.currentTarget,o=e/this.duration;this.#c.style.transform=`scaleX(${o})`};#p=()=>{this.#r="timeout",this.open=!1};#u=()=>{this.closable&&(this.#r="user",this.open=!1)};#L=()=>{this.open&&this.duration!==1/0&&this.#e?.stop()};#d=()=>{!this.open||this.duration===1/0||this.#A()||this.#e?.start()};#s=()=>{this.#n()};#b=t=>{switch(t.command){case"--alert-show":this.open=!0;break;case"--alert-hide":this.#r="api",this.open=!1}};#n(){this.#t&&((this.#y?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?this.#t.removeAttribute("aria-label"):this.#t.setAttribute("aria-label",this.closeLabel))}#x(){let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o={show:{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}},hide:{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:250,easing:"ease"}}},i=this.customAnimations||t.customAnimations||{},r=e||this.noAnimations||null===this.customAnimations||null===t.customAnimations,a=t=>{let e=i[t]?.options??{},a=o[t].options;return{...a,...e,duration:r?0:e.duration??a.duration}};return{show:{keyframes:i.show?.keyframes??o.show.keyframes,options:a("show")},hide:{keyframes:i.hide?.keyframes??o.hide.keyframes,options:a("hide")}}}#C(t){let{keyframes:e,options:o}=this.#x().show;return t?.animate(e,o)}#k(t){let{keyframes:e,options:o}=this.#x().hide;return t?.animate(e,o)}#l(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}#w(t,e){return new Promise(o=>{t.addEventListener(e,e=>{e.target===t&&o()},{once:!0})})}#A(){return this.matches(":focus-within")}show(){return this.open?Promise.resolve():(this.open=!0,this.#w(this,j))}hide(){return this.open?(this.open=!1,this.#w(this,$)):Promise.resolve()}toast(t={}){if(t={forceRestart:!1,...t},this.#a){if(!t.forceRestart)return this.#a.promise;this.#a.resolve(),this.#a.cleanup()}let e=()=>{},o=new Promise(t=>e=t),i=()=>{this.#a?.resolve(),this.#a?.cleanup()};this.#a={promise:o,resolve:e,cleanup:()=>{this.removeEventListener($,i),this.parentNode===G&&G.removeChild(this),0===G.childElementCount&&G.remove(),this.open=!1,this.#a=null}},G.parentElement||document.body.append(G),G.appendChild(this),this.#m?.setAttribute("data-toast",""),this.open=!0;let r=G.shadowRoot?.querySelector(".stack");return r?.scrollTo({top:r.scrollHeight}),this.addEventListener($,i,{once:!0}),o}#E(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static define(e="alert-element"){typeof window>"u"||window.customElements.get(e)||window.customElements.define(e,t)}}).define();let W=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: border-box; }
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,X=document.createElement("template");X.innerHTML=`
  <style>${W}</style>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;class J extends HTMLElement{#_={};#S=null;#z=null;constructor(){super(),this.#_=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(X.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(t,e,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("zoom"===t&&e!==o&&"zoom"in this.#_){let t=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&t&&this.#T("zoom",this.zoom)}"torch"===t&&e!==o&&"torch"in this.#_&&this.#T("torch",this.torch)}async connectedCallback(){if(this.#R("autoPlay"),this.#R("facingMode"),this.#R("zoom"),this.#R("torch"),this.#O(),this.#z?.addEventListener("loadedmetadata",this.#M),!J.isSupported())return this.#N("initialization","not-supported",Error("MediaDevices.getUserMedia() is not supported in this browser"));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#z?.removeEventListener("loadedmetadata",this.#M)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get facingMode(){let t=this.getAttribute("facing-mode");return"user"!==t?"environment":t}set facingMode(t){this.setAttribute("facing-mode",t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get torch(){return this.hasAttribute("torch")}set torch(t){this.toggleAttribute("torch",!!t)}get loading(){return this.hasAttribute("loading")}#O(){if(this.#z)return;let t=document.createElement("video");t.setAttribute("part","video"),t.setAttribute("playsinline",""),t.setAttribute("muted",""),t.setAttribute("disablepictureinpicture",""),this.shadowRoot?.prepend(t),this.#z=t}#N(t,e,o){this.#I("video-capture-error",{source:t,reason:e,error:o})}#M=async t=>{let e=t.target;try{await e.play(),this.#I("video-capture-play",{video:e})}catch(e){let t=e instanceof DOMException&&"NotAllowedError"===e.name?"user-gesture-required":"playback-failed";this.#N("playback",t,e)}finally{this.removeAttribute("loading")}};#T(t,e){var o,i,r;if(!this.#S)return;let[a]=this.#S.getVideoTracks(),s=this.getTrackCapabilities(),n=this.getTrackSettings(),l="pan"===t||"tilt"===t||"zoom"===t?(o=Number(e),i=s[t]?.min||1,r=s[t]?.max||1,Number.isNaN(i)&&(i=0),Number.isNaN(r)&&(r=0),Math.min(Math.max(o,Math.min(i,r)),Math.max(i,r))):e;t in n&&a.applyConstraints({advanced:[{[t]:l}]}).catch(()=>{})}#I(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}#R(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(t){if(!J.isSupported()||this.#S)return!1;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof t&&t.trim().length>0&&(e.video.deviceId={exact:t}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(t=>Number(t));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{return this.#S=await navigator.mediaDevices.getUserMedia(e),this.#z&&(this.#z.srcObject=this.#S),this.#T("pan",this.pan),this.#T("tilt",this.tilt),this.#T("zoom",this.zoom),!0}catch(e){let t=e instanceof DOMException&&"NotAllowedError"===e.name?"camera-access-denied":"camera-failed";return this.#N("camera",t,e),this.removeAttribute("loading"),!1}}restartVideoStream(t){this.#S&&this.#z&&this.stopVideoStream(),this.startVideoStream(t)}stopVideoStream(){if(!this.#z||!this.#S)return;let[t]=this.#S.getVideoTracks();t?.stop(),this.#z.srcObject=null,this.#S=null}async playVideo(t={}){let{emit:e=!1}=t;if(this.#z&&this.#S)try{await this.#z.play(),e&&this.#I("video-capture-play",{video:this.#z})}catch(e){let t=e instanceof DOMException&&"NotAllowedError"===e.name?"user-gesture-required":"playback-failed";this.#N("playback",t,e)}}stopVideo(){this.#z&&this.#S&&this.#z.pause()}getSupportedConstraints(){return J.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#S)return{};let[t]=this.#S.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#S)return{};let[t]=this.#S.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(t=>"videoinput"===t.kind&&!!t.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static define(t="video-capture"){"u">typeof window&&!window.customElements.get(t)&&window.customElements.define(t,J)}}function Q(t,e={}){var o;let i,r={duration:5e3,variant:"neutral",countdown:!1,announce:"status",icon:"",...e},a={info:`
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
    `}[r.icon||r.variant]||"";return Object.assign(document.createElement("alert-element"),{closable:!0,duration:r.duration,variant:r.variant,countdown:r.countdown,announce:r.announce,innerHTML:`${a?`<span slot="icon">${a}</span>`:""}${r.trustDangerousInnerHTML?t:(o=t,(i=document.createElement("div")).textContent=o,i.innerHTML)}`}).toast()}function tt(t={}){let{el:e,isTorchOn:o}={...{el:document.getElementById("torchButton"),isTorchOn:!1},...t},i=e.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",e.setAttribute("aria-label",`Turn ${o?"off":"on"} flash`))}let te=(...t)=>{},to=(...t)=>{};J.define();let ti=`
  :host {
    --scan-frame-color: rgba(255 255 255 / 0.75);
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

  button {
    color: var(--text-main);
    font-family: inherit;
    font-size: inherit;
    padding: 0.625rem;
    border: none;
    border-radius: var(--border-radius);
    outline-color: var(--accent);
  }

  button:not(:disabled) {
    cursor: pointer;
  }

  button,
  select {
    outline-color: var(--accent);
  }

  .camera-select {
    padding-block: 0.75rem;
    padding-inline: 0.75rem 2.25rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    background: var(--background-input) var(--select-arrow) calc(100% - 0.75rem) 50% / 0.75rem no-repeat;
    color: var(--form-text);
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  :dir(rtl) .camera-select {
    background-position: calc(0.75rem) 50%;
  }

  .camera-select:disabled {
    cursor: not-allowed;
  }

  .scanner-container {
    position: relative;
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  .scanner-container:has(video-capture[loading]) .scan-frame {
    display: none;
  }

  .scanner-container:has(video-capture[loading]) .loading-spinner {
    display: block;
  }

  .scan-frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.95);
    pointer-events: none;
  }

  .scan-frame__svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .scan-frame__line {
    animation: animated-scan-frame-line 2s linear infinite alternate;
  }

  @keyframes animated-scan-frame-line {
    from { transform: translateY(0); }
    to   { transform: translateY(200px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .scan-frame__line {
      animation: none;
      display: none;
    }
  }

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  video-capture {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    overflow: hidden;
    border: var(--capture-border-width) solid var(--border);
    border-radius: var(--border-radius);
    background-color: #000000;
  }

  video-capture[loading]::part(video) {
    aspect-ratio: 16/9;
  }

  video-capture::part(video) {
    width: 100%;
    background-color: #000000;
  }

  video-capture [slot='actions'] {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.375rem;
    padding: 0.375rem;
  }

  video-capture[loading] [slot='actions'] {
    display: none;
  }

  .camera-select {
    width: 100%;
    padding-block: 0.5rem;
    border-radius: calc(var(--border-radius) / 2);
    background-color: var(--camera-actions-background);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
  }

  .zoom-controls {
    display: flex;
  }

  .torch-button,
  .zoom-controls button,
  .zoom-controls label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-block: 0.5rem;
    border: none;
    border-radius: 0;
    background-color: var(--camera-actions-background);
    backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    color: var(--text-main);
  }

  .torch-button {
    border: 1px solid var(--border);
    border-radius: calc(var(--border-radius) / 2);
  }

  .zoom-controls button {
    border: 1px solid var(--border);
  }

  .zoom-controls button[data-action='zoom-in'] {
    border-start-end-radius: calc(var(--border-radius) / 2);
    border-end-end-radius: calc(var(--border-radius) / 2);
    border-inline-start: none;
  }

  .zoom-controls button[data-action='zoom-out'] {
    border-start-start-radius: calc(var(--border-radius) / 2);
    border-end-start-radius: calc(var(--border-radius) / 2);
    border-inline-end: none;
  }

  .zoom-controls label {
    min-width: 2rem;
    border-block: 1px solid var(--border);
    border-inline: none;
    overflow: hidden;
    font-size: 0.9rem;
  }

  .play-video-button {
    position: absolute;
    inset: var(--capture-border-width);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
  }

  .play-video-button svg {
    font-size: 3.5rem;
  }

  @media (min-width: 37.5rem) {
    video-capture {
      max-width: var(--container-max-width);
    }
  }
`,tr=document.createElement("template");tr.innerHTML=`
  <style>${ti}</style>

  <div class="scanner-container">
    <resize-observer>
      <video-capture auto-play id="video-capture">
        <div slot="actions">
          <button type="button" class="torch-button" id="torchButton" aria-label="Turn on flash" hidden>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1.25em" height="1.25em" aria-hidden="true">
              <path d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
              <!-- torch disabled -->
              <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM294.34 84.28l-22.08 120.84a16 16 0 006.17 15.71 16.49 16.49 0 009.93 3.17h94.12l-38.37 47.42a4 4 0 00.28 5.34l17.07 17.07a4 4 0 005.94-.31l60.8-75.16a16.37 16.37 0 003.3-14.36 16 16 0 00-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 00302.73 23l-92.58 114.46a4 4 0 00.28 5.35l17.07 17.06a4 4 0 005.94-.31zM217.78 427.57l22-120.71a16 16 0 00-6.19-15.7 16.54 16.54 0 00-9.92-3.16h-94.1l38.36-47.42a4 4 0 00-.28-5.34l-17.07-17.07a4 4 0 00-5.93.31L83.8 293.64A16.37 16.37 0 0080.5 308 16 16 0 0096 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0032.5 14.53l92.61-114.46a4 4 0 00-.28-5.35l-17.07-17.06a4 4 0 00-5.94.31z" fill="currentColor" style="display: none;"/>
              <!-- torch enabled -->
            </svg>
          </button>

          <select id="cameraSelect" class="camera-select" aria-label="Select camera" hidden>
            <option value="" disabled selected>--Select Camera--</option>
          </select>

          <div class="zoom-controls" id="zoomControls" hidden>
            <button type="button" aria-label="Zoom out" data-action="zoom-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </button>

            <label id="zoomLevel"></label>

            <button type="button" aria-label="Zoom in" data-action="zoom-in">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </video-capture>
    </resize-observer>

    <div class="loading-spinner">
      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
        <path opacity="0.2" fill="white" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
        <path fill="white" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>

    <button id="playVideoButton" class="play-video-button" aria-label="Start camera preview" hidden>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
      </svg>
    </button>

    <div id="scanFrame" class="scan-frame" hidden>
      <svg class="scan-frame__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
        <path
          d="M368 448h40a40 40 0 0 0 40-40v-40 M448 144v-40a40 40 0 0 0-40-40h-40 M144 448h-40a40 40 0 0 1-40-40v-40 M64 144v-40a40 40 0 0 1 40-40h40"
          fill="none"
          stroke="var(--scan-frame-color)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="8"
        />
        <line
          class="scan-frame__line"
          x1="120"
          y1="156"
          x2="392"
          y2="156"
          stroke="var(--scan-frame-color)"
          stroke-linecap="round"
          stroke-width="6"
        />
      </svg>
    </div>
  </div>
`;class ta extends HTMLElement{#D=null;#B=null;#F=null;#q=null;#P=null;#H=null;#V=null;#j=null;#$=!0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tr.content.cloneNode(!0))}get barcodeReader(){return this.#V}set barcodeReader(t){this.#V=t}connectedCallback(){this.#R("barcodeReader"),this.#D=this.shadowRoot?.getElementById("video-capture"),this.#B=this.shadowRoot?.getElementById("playVideoButton"),this.#F=this.shadowRoot?.getElementById("torchButton"),this.resizeObserverEl=this.shadowRoot?.querySelector("resize-observer"),this.#q=this.shadowRoot?.getElementById("scanFrame"),this.#P=this.shadowRoot?.getElementById("cameraSelect"),this.#H=this.#D.shadowRoot?.querySelector("video"),this.addEventListener("camera-scanner-visibility-change",this.#U),this.#B.addEventListener("click",this.#Y),this.resizeObserverEl.addEventListener("resize-observer:resize",this.#G),this.#D.addEventListener("video-capture-play",this.#Z,{once:!0}),this.#D.addEventListener("video-capture-error",this.#K,{once:!0})}disconnectedCallback(){this.removeEventListener("camera-scanner-visibility-change",this.#U),this.#B.removeEventListener("click",this.#Y),this.resizeObserverEl.removeEventListener("resize-observer:resize",this.#G),this.#D.removeEventListener("video-capture-play",this.#Z,{once:!0}),this.#D.removeEventListener("video-capture-error",this.#K,{once:!0})}#W(){this.#$=!0,null===this.#j&&this.#X()}#J(){this.#$=!1,null!==this.#j&&(clearTimeout(this.#j),this.#j=null)}async #X(){if(this.#$&&null!=this.barcodeReader){te("Scanning...");try{let t=await this.barcodeReader.detect(this.#H),e=t?.rawValue??"";if(!e)throw Error("No barcode detected");this.#I("barcode-detect-success",{barcodeValue:e,source:"camera-scanner"})}catch{}this.#$&&(this.#j=setTimeout(()=>{this.#j=null,this.#X()},1e3))}}#G=()=>{ts(this.#D.shadowRoot.querySelector("video"),this.#q)};#Z=async t=>{this.#B.setAttribute("hidden",""),this.#q.removeAttribute("hidden"),ts(t.detail.video,this.#q),this.#W();let e=t.target.getTrackSettings(),o=t.target.getTrackCapabilities(),i=this.shadowRoot.getElementById("zoomLevel");if(o?.torch&&(this.#F.addEventListener("click",this.#Q),this.#F.removeAttribute("hidden"),this.#D.hasAttribute("torch")&&tt({el:this.#F,isTorchOn:!0})),e?.zoom&&o?.zoom){let t=this.shadowRoot?.getElementById("zoomControls"),r=o?.zoom?.min||0,a=o?.zoom?.max||10,s=e?.zoom||1,n=t=>{let e=t.target.closest('[data-action="zoom-in"]'),o=t.target.closest('[data-action="zoom-out"]');e&&s<a&&(s+=.5),o&&s>r&&(s-=.5),i.textContent=s.toFixed(1),this.#D.zoom=s};t.addEventListener("click",n),t.removeAttribute("hidden"),i.textContent=s.toFixed(1)}let r=await J.getVideoInputDevices();r.forEach((t,e)=>{let o=this.ownerDocument.createElement("option");o.value=t.deviceId,o.textContent=t.label||`Camera ${e+1}`,this.#P.appendChild(o)}),r.length>1&&(this.#P.addEventListener("change",this.#tt),this.#P.removeAttribute("hidden"))};#K=t=>{let{source:e,reason:o,error:i}=t.detail;if("playback"===e&&"user-gesture-required"===o)return void this.#B.removeAttribute("hidden");let r="<strong>Unable to start camera</strong><br>An unexpected error occurred while starting the video stream.";"NotFoundError"===i.name?r="<strong>No camera found</strong><br>No compatible camera is available.":"camera"===e&&"camera-access-denied"===o&&(r="<strong>Error accessing camera</strong><br>Permission to use the camera was denied. Please enable camera access in your browser settings."),Q(r,{duration:1/0,variant:"danger",announce:"alert",trustDangerousInnerHTML:!0})};#Q=t=>{this.#D.torch=!this.#D.torch,tt({el:t.currentTarget,isTorchOn:this.#D.hasAttribute("torch")})};#tt=t=>{let e=t.target.value||void 0;this.#D.restartVideoStream?.(e)};#Y=()=>{!this.#D||this.#D.loading||(this.#D.playVideo?.({emit:!0}),this.#B.setAttribute("hidden",""))};#U=async t=>{let{visibility:e}=t.detail;if("visible"===e){let t=this.#P.value||void 0;await this.#D.startVideoStream?.(t)&&this.#W()}else this.#J(),this.#D.stopVideoStream?.()};#I(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}#R(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static define(t="camera-scanner"){"u"<typeof window||window.customElements.get(t)||window.customElements.define(t,ta)}}function ts(t,e){if(!t||!e)return;let o=t.getBoundingClientRect();e.style.cssText=`width: ${o.width}px; height: ${o.height}px`}let tn=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"],tl=`
  :host {
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

  .dropzone {
    --dropzone-focus-box-shadow: inset 0 0 0 2px var(--focus);
    --dropzone-transition-duration: var(--animation-duration);
    --dropzone-border-color: var(--border);
    --dropzone-border-color-dragover: var(--accent);
    --dropzone-border-color-hover: var(--accent);
    --dropzone-background-color: var(--dropzone-background);
    --dropzone-background-color-dragover: var(--dropzone-background-dragover);
    --dropzone-background-color-hover: var(--dropzone-background-hover);
    --dropzone-body-color: var(--text-main);
  }

  .dropzone::part(dropzone) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    min-height: 17.625rem;
    border-radius: var(--border-radius);
  }

  .dropzone-preview {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .dropzone-preview__image-wrapper {
    max-width: 200px;
    margin: 0 auto;
  }

  .dropzone-preview__image-wrapper img {
    max-width: 100%;
    height: auto;
  }

  .dropzone-preview__file-name {
    font-size: 0.9rem;
    color: var(--text-main);
  }

  .dropzone-instructions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`,td=document.createElement("template");td.innerHTML=`
  <style>${tl}</style>

  <files-dropzone id="dropzone" class="dropzone">
    <span class="dropzone-instructions">
      <svg width="3.125em" height="3.125em" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-850.000000, -2681.000000)">
            <g transform="translate(100.000000, 2626.000000)">
              <g transform="translate(748.000000, 54.000000)">
                <g>
                  <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                  <path d="M10.21,16.83 L12.96,13.29 L16.5,18 L5.5,18 L8.25,14.47 L10.21,16.83 Z M20,4 L23,4 L23,6 L20,6 L20,8.99 L18,8.99 L18,6 L15,6 L15,4 L18,4 L18,1 L20,1 L20,4 Z M18,20 L18,10 L20,10 L20,20 C20,21.1 19.1,22 18,22 L4,22 C2.9,22 2,21.1 2,20 L2,6 C2,4.9 2.9,4 4,4 L14,4 L14,6 L4,6 L4,20 L18,20 Z" fill="currentColor"></path>
                  <path d="M16.5,18 L5.5,18 L8.25,14.47 L10.21,16.83 L12.96,13.29 L16.5,18 Z M17,7 L14,7 L14,6 L4,6 L4,20 L18,20 L18,10 L17,10 L17,7 Z"></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      Click or drop an image to scan
    </span>
  </files-dropzone>
`;class tc extends HTMLElement{#te=null;#V=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(td.content.cloneNode(!0))}get barcodeReader(){return this.#V}set barcodeReader(t){this.#V=t}connectedCallback(){this.#R("barcodeReader"),this.#te=this.shadowRoot?.getElementById("dropzone"),this.#te.accept=tn.join(","),this.#te.addEventListener("files-dropzone-drop",this.#to)}disconnectedCallback(){this.#te.removeEventListener("files-dropzone-drop",this.#to)}#ti=async t=>{if(!t)return;let e=new Image,o=new FileReader;o.onload=o=>{let i=o.target.result;e.onload=async()=>{try{let t=await this.barcodeReader.detect(e),o=t?.rawValue??"";if(!o)throw Error("No barcode detected");this.#I("barcode-detect-success",{barcodeValue:o,source:"file-scanner"})}catch(t){this.#I("barcode-detect-error",{error:t,source:"file-scanner"})}},e.src=i,e.alt="Image preview",this.#te.replaceChildren();let r=document.createElement("div");r.className="dropzone-preview";let a=document.createElement("div");a.className="dropzone-preview__image-wrapper";let s=document.createElement("div");s.className="dropzone-preview__file-name",s.textContent=t.name,a.appendChild(e),r.appendChild(a),r.appendChild(s),this.#te.prepend(r)},o.readAsDataURL(t)};#to=t=>{let e=t.detail.acceptedFiles[0];this.#ti(e)};#I(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}#R(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static define(t="file-scanner"){"u"<typeof window||window.customElements.get(t)||window.customElements.define(t,tc)}}function th(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}let tu=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});function tp(t){return new Promise(function(e,o){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return o(t.error)}})}function tm(){var t,o,i;return e||(t="keyval",i=function(){if(o)return o;var e=indexedDB.open("keyval-store");return e.onupgradeneeded=function(){return e.result.createObjectStore(t)},(o=tp(e)).then(function(t){t.onclose=function(){return o=void 0}},function(){}),o},e=function(e,o){return i().then(function(i){return o(i.transaction(t,e).objectStore(t))})}),e}let tb=async t=>{try{return[null,await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:tm();return e("readonly",function(e){return tp(e.get(t))})}(t)]}catch(t){return[t,void 0]}},tg=async(t,e)=>{try{return await function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:tm();return o("readwrite",function(o){return o.put(e,t),tp(o.transaction)})}(t,e),[null]}catch(t){return[t]}},tv="barcode-scanner/settings",tf=async()=>tb(tv),tw=async t=>tg(tv,t),ty=`
  :host {
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
  .result clipboard-copy::part(button) {
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

  .result clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .result clipboard-copy::part(button--error) {
    color: var(--danger-color);
  }
`,tE=document.createElement("template");tE.innerHTML=`
  <style>${ty}</style>

  <div class="result" part="result">
    <div class="result__content">
      <div class="result__datetime"></div>
    </div>

    <div class="result__actions">
      <clipboard-copy only-icon></clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
        </button>
      </web-share>
    </div>
  </div>
`;class tA extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tE.content.cloneNode(!0))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,o){"value"===t&&e!==o&&this.#tr(this.value)}connectedCallback(){if(this.#R("value"),this.#ta(),!th()){let t=this.shadowRoot.querySelector("web-share");t&&(t.hidden=!0)}}async #tr(t){let e,o=this.shadowRoot.querySelector(".result"),i=o?.querySelector(".result__content"),r=o?.querySelector(".result__datetime"),a=o?.querySelector(".result__item");a&&a?.remove();try{let[,o]=await tf();new URL(t),(e=document.createElement("a")).href=t,o?.openWebPageSameTab||(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")),o?.openWebPage?e.click():window.requestAnimationFrame(()=>e.focus())}catch{e=document.createElement("span")}e.className="result__item",e.part="result__item",e.textContent=t,r.textContent=tu.format(new Date),i?.insertBefore(e,r);let s=o?.querySelector("clipboard-copy"),n=o?.querySelector("web-share");if(s){let e=s.shadowRoot?.querySelector("button");s.setAttribute("value",t),e?.setAttribute("aria-label","Copy scan result to clipboard"),s.hidden=!1}if(n&&th()){let e=n.querySelector("button");n.setAttribute("share-text",t),n.hidden=!1,e?.setAttribute("aria-label","Share scan result")}}#ta(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=this.shadowRoot.querySelector(".result");t?.animate([{backgroundColor:"var(--highlight)"},{backgroundColor:"transparent"}],{duration:400,easing:"ease-out"})}#R(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static define(t="scan-result"){"u"<typeof window||window.customElements.get(t)||window.customElements.define(t,tA)}}class tx extends HTMLElement{#ts=null;#tn=null;#tl=null;#td=[];#tc;constructor(){super()}get supportedFormats(){return this.#td}set supportedFormats(t){this.#td=t,this.#th()}async connectedCallback(){this.#R("supportedFormats"),this.#ts=this.querySelector("#formatsList"),this.#tn=this.querySelector("#formatItemTemplate"),this.#tl=this.querySelector("form");let[,t]=await tf();this.#tc=t??{},this.#tl?.querySelectorAll('[name="general-settings"]').forEach(t=>{t.checked=this.#tc[t.value]})}#th(){if(!this.#ts||!this.#tn)return;let t=this.#tc?.formats,e=this.ownerDocument.createDocumentFragment();this.supportedFormats.forEach(o=>{let i=this.#tn.content.firstElementChild.cloneNode(!0),r=i.querySelector("input");r.value=o,r.checked=null==t||t.includes(o),i.querySelector("[data-format-label]").textContent=o,e.appendChild(i)}),this.#ts.replaceChildren(e)}#R(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static define(t="scan-settings"){"u"<typeof window||window.customElements.get(t)||window.customElements.define(t,tx)}}let tL="barcode-scanner/history",tC=async()=>tb(tL),tk=async t=>tg(tL,t),t_=`
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
  .actions clipboard-copy::part(button) {
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

  .actions clipboard-copy::part(button--success) {
    color: var(--success-color);
  }

  .actions clipboard-copy::part(button--error) {
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
`,tS=document.createElement("template");tS.innerHTML=`
  <style>${t_}</style>
  <ul id="historyList"></ul>
  <footer>
    <div>There are no saved items in history.</div>
    <button type="button" id="emptyHistoryButton">Empty history</button>
  </footer>
`;class tz extends HTMLElement{#tu=null;#tp=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tS.content.cloneNode(!0))}async connectedCallback(){this.#tu=this.shadowRoot?.getElementById("historyList"),this.#tp=this.shadowRoot?.getElementById("emptyHistoryButton"),this.#tm((await tC())[1]||[]),this.#tu?.addEventListener("click",this.#tb),this.#tp?.addEventListener("click",this.#tg)}disconnectedCallback(){this.#tu?.removeEventListener("click",this.#tb),this.#tp?.removeEventListener("click",this.#tg)}async add(t){if(!t)return;let e={type:"add",message:"Error adding barcode to history"},[o,i=[]]=await tC();if(o||!Array.isArray(i))return this.#I("scan-history-error",e),o;if(i.find(e=>e===t))return;let r=[...i,t],[a]=await tk(r);return a?(to("Error setting history",a),this.#I("scan-history-error",e),a):(this.#tu?.insertBefore(this.#tv(t),this.#tu.firstElementChild),this.#I("scan-history-success",{type:"add",message:"Barcode added to history"}),null)}async remove(t){if(!t)return;let e={type:"remove",message:"Error removing barcode from history"},[o,i=[]]=await tC();if(o||!Array.isArray(i))return to("Error getting history before removal",o),this.#I("scan-history-error",e),o;let r=i.filter(e=>e!==t),[a]=await tk(r);if(a)return to("Error setting history after removal",a),this.#I("scan-history-error",e),a;let s=this.#tu?.querySelector(`li[data-value="${t}"]`);return s?.remove(),this.#I("scan-history-success",{type:"remove",message:"Barcode removed from history"}),null}async empty(){let[t]=await tk([]);return t?(to("Error setting history",t),this.#I("scan-history-error",{type:"empty",message:"Error emptying history"}),t):(this.#tu?.replaceChildren(),this.#I("scan-history-success",{type:"empty",message:"History emptied successfully"}),null)}#tm(t){if(!this.#tu)return;this.#tu.replaceChildren();let e=document.createDocumentFragment();[...t].reverse().forEach(t=>e.appendChild(this.#tv(t))),this.#tu.appendChild(e)}#tv(t){let e,o=document.createElement("li");o.setAttribute("data-value",t);try{new URL(t),(e=document.createElement("a")).href=t,e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")}catch{e=document.createElement("span")}e.textContent=t;let i=document.createElement("div");i.className="actions";let r=document.createElement("clipboard-copy"),a=r.shadowRoot?.querySelector("button");r.setAttribute("only-icon",""),r.setAttribute("value",t),a?.setAttribute("aria-label",`Copy to clipboard ${t}`),i.appendChild(r);let s=document.createElement("button");return s.type="button",s.className="delete-action",s.setAttribute("data-action","delete"),s.setAttribute("aria-label",`Remove from history ${t}`),s.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `,i.appendChild(s),o.appendChild(e),o.appendChild(i),o}#tb=async t=>{let e=t.target;if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;window.confirm(`Delete history item ${t}?`)&&this.remove(t)}};#tg=async()=>{window.confirm("Empty history? This action cannot be undone.")&&this.empty()};#I(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}static define(t="scan-history"){"u"<typeof window||window.customElements.get(t)||window.customElements.define(t,tz)}}var tT="clipboard-copy",tR="success",tO="error",tM=document.createElement("template"),tN=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;tM.innerHTML=`
  <style>${tN}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;var tI=class t extends HTMLElement{#t=void 0;#m=null;#e=null;#i=null;#r=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tM.content.cloneNode(!0)),this.shadowRoot&&(this.#m=this.shadowRoot.querySelector("button"),this.#e=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#r=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#m&&(this.#m.disabled=this.disabled,this.#m.setAttribute("aria-disabled",this.disabled.toString()),this.#m.part.contains("button")&&this.#m.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#a("value"),this.#a("from"),this.#a("disabled"),this.#a("feedbackDuration"),this.#m?.addEventListener("click",this.#E)}disconnectedCallback(){this.#m?.removeEventListener("click",this.#E),this.#y()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",null!=t?t.toString():t)}get from(){return this.getAttribute("from")||""}set from(t){this.setAttribute("from",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",null!=t?t.toString():t)}async #p(){if(!(!this.value&&!this.from))try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#m?.getRootNode({composed:!0}):this.#m?.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let o=e.querySelector(this.from);if(!o)return;t=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?o.href:o.textContent||""}await navigator.clipboard.writeText(t),this.#c(tR),this.dispatchEvent(new CustomEvent(`${tT}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tO),this.dispatchEvent(new CustomEvent(`${tT}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#E=t=>{t.preventDefault(),this.disabled||this.#t||this.#p()};#c(t){this.#e&&(this.#e.hidden=!0),this.#i&&(this.#i.hidden=t!==tR),this.#r&&(this.#r.hidden=t!==tO),this.#m?.part.remove("button--success"),this.#m?.part.remove("button--error"),this.#m?.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#m?.part.remove(`button--${t}`),this.#t=void 0},this.feedbackDuration)}#y(){this.#t&&clearTimeout(this.#t),this.#t=void 0,this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#m?.part.remove("button--success"),this.#m?.part.remove("button--error")}#a(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=tT){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};class tD extends tI{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]');t.innerHTML=`
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
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"only-icon"===t&&e!==o){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]'),i=t.querySelector(".text"),r=e.querySelector(".text"),a=o.querySelector(".text");i?.toggleAttribute("hidden",this.onlyIcon),r?.toggleAttribute("hidden",this.onlyIcon),a?.toggleAttribute("hidden",this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#R("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#R(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static define(t="clipboard-copy"){"u"<typeof window||window.customElements.get(t)||window.customElements.define(t,tD)}}let tB=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e"];class tF{static async polyfill(){if("BarcodeDetector"in window)te("Using the native BarcodeDetector API.");else try{await a("3jPiW"),te("Using BarcodeDetector polyfill.")}catch(t){throw Error("BarcodeDetector API is not supported by your browser.",{cause:t})}}static async getSupportedFormats(){let t=await window.BarcodeDetector.getSupportedFormats()||[];return tB.filter(e=>t.includes(e))}static async create(t){let e=Array.isArray(t)&&t.length>0?t:await tF.getSupportedFormats();return new tF(e)}static async setup(){try{return await tF.polyfill(),{barcodeReaderError:null}}catch(t){return{barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0){let t=e[0];return te({rawValue:t.rawValue,format:t.format}),t}throw Error("Could not detect barcode from provided source.")}}function tq(t,e=document){let o=e.querySelector(t);if(!o)throw Error(`Required element not found: ${t}`);return o}async function tP(t,e){if(!t||!e)return;let o=Array.from(t.querySelectorAll("scan-result")).find(t=>t.getAttribute("value")===e);o&&o.remove();let i=document.createElement("scan-result");i.setAttribute("value",e),i.setAttribute("role","alert"),t.insertBefore(i,t.firstElementChild),t.scrollTop=0}let tH=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:o,frequency:i,volume:r,type:a,onEnded:s}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),r&&(l.gain.value=r),i&&(n.frequency.value=i),a&&(n.type=a),"function"==typeof s&&(n.onended=s),n.start(t.currentTime),n.stop(t.currentTime+(o||500)/1e3)}})();async function tV(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}let tj=0;async function t$(t={}){let{success:e=!0}=t,[,o]=await tf();if(!o)return;let i=Date.now();i-tj<1e3||(o.beep&&tH(e?{duration:200,frequency:860,volume:.03,type:"square"}:{duration:300,frequency:200,volume:.05,type:"sawtooth"}),o.vibrate&&tV(e?100:200),tj=i)}async function tU(){let{tabsEl:t,cameraScannerEl:e,cameraScannerResultsEl:o,fileScannerEl:i,fileScannerResultsEl:r,historyEl:a,historyButtonEl:s,historyDialogEl:n,scanSettingsEl:l,settingsButtonEl:d,settingsDialogEl:c,settingsFormEl:h,appActionsEl:u}={tabsEl:tq("a-tab-group"),cameraScannerEl:tq("camera-scanner"),cameraScannerResultsEl:tq("#cameraScannerResults"),fileScannerEl:tq("file-scanner"),fileScannerResultsEl:tq("#fileScannerResults"),historyEl:tq("scan-history"),historyButtonEl:tq("#historyButton"),historyDialogEl:tq("#historyDialog"),scanSettingsEl:tq("scan-settings"),settingsButtonEl:tq("#settingsButton"),settingsDialogEl:tq("#settingsDialog"),settingsFormEl:tq("#settingsForm"),appActionsEl:tq("#appActions")};"function"==typeof HTMLDialogElement&&(u.removeAttribute("hidden"),n.removeAttribute("hidden"),c.removeAttribute("hidden"));let{barcodeReaderError:p}=await tF.setup();if(p){u.setAttribute("hidden",""),t.setAttribute("hidden",""),Q(`
      <strong>Barcode Detector API not supported</strong>
      <br>
      Your browser does not support the Barcode Detector API, which is required for this application to work.
    `,{variant:"danger",announce:"alert",trustDangerousInnerHTML:!0,duration:1/0});return}let m=await tF.getSupportedFormats(),[,b]=await tf(),g=b?.formats||m,v=await tF.create(g);e.barcodeReader=v,i.barcodeReader=v,l.supportedFormats=m,function({tabsEl:t,cameraScannerEl:e}){function o(t,e){t.dispatchEvent(new CustomEvent("camera-scanner-visibility-change",{bubbles:!0,composed:!0,detail:e}))}t.addEventListener("a-tab-show",function(t){let i=t.detail.tabId;"cameraTab"===i&&o(e,{reason:"tab-change",visibility:"visible"}),"fileTab"===i&&o(e,{reason:"tab-change",visibility:"hidden"})}),document.addEventListener("visibilitychange",function(){"cameraTab"===t.querySelector("[selected]").getAttribute("id")&&o(e,{reason:"page-visibility-change",visibility:"hidden"===document.visibilityState?"hidden":"visible"})})}({tabsEl:t,cameraScannerEl:e}),function({cameraScannerEl:t,cameraScannerResultsEl:e,fileScannerEl:o,fileScannerResultsEl:i,historyEl:r}){async function a(t){let{barcodeValue:o,source:a}=t.detail;tP("camera-scanner"===a?e:i,o);let[,s]=await tf();s?.addToHistory&&r.add(o),t$()}async function s(t){let{error:e}=t.detail;to(e),Q("<strong>No barcode detected</strong><br><small>Please try again with a different image.</small>",{variant:"danger",announce:"alert",trustDangerousInnerHTML:!0}),t$({success:!1})}t.addEventListener("barcode-detect-success",a),o.addEventListener("barcode-detect-success",a),o.addEventListener("barcode-detect-error",s)}({cameraScannerEl:e,cameraScannerResultsEl:o,fileScannerEl:i,fileScannerResultsEl:r,historyEl:a}),function({historyButtonEl:t,historyDialogEl:e}){t.addEventListener("click",function(){e.open=!0}),document.addEventListener("scan-history-error",function(t){let{type:o,message:i}=t.detail;("remove"===o||"empty"===o)&&e.hide(),Q(i,{variant:"danger",announce:"alert"})})}({historyButtonEl:s,historyDialogEl:n}),function({settingsDialogEl:t,settingsButtonEl:e,settingsFormEl:o,onFormatsChange:i}){async function r(t){t.preventDefault();let e={},r=new FormData(o),a=r.getAll("general-settings"),s=r.getAll("formats-settings");a.forEach(t=>{e[t]=!0}),e.formats=s,await tw(e),"formats-settings"===t.target.name&&await i(s)}e.addEventListener("click",function(){t.open=!0}),o.addEventListener("change",function(t,e=0,o=!1){let i=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...r)=>{clearTimeout(i),o&&!i&&t(...r),i=setTimeout(()=>{i=null,o||t(...r)},e)}}(r,500))}({settingsDialogEl:c,settingsButtonEl:d,settingsFormEl:h,onFormatsChange:async t=>{e.barcodeReader=v=await tF.create(t),i.barcodeReader=v}})}ta.define(),tc.define(),tA.define(),tx.define(),tz.define(),tD.define(),tU();
//# sourceMappingURL=barcode-scanner.eb827bde.js.map
