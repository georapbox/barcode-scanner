let t,e,o;var i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},n=r.parcelRequirea202;null==n&&((n=function(t){if(t in s)return s[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return s[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},r.parcelRequirea202=n),(0,n.register)("3jPiW",function(t,e){var o;t.exports=(o="6z40I",import("./"+(o=n.i?.[o]||o))).then(()=>n("aexh3"))}),Object.assign(n.i??={},{"6z40I":"es.e18d237c.js"});var l=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},d=(t,e)=>{if(Object.prototype.hasOwnProperty.call(e,t)){let o=e[t];delete e[t],e[t]=o}},c=0,h=`
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
`,u=document.createElement("template");u.innerHTML=`
  <style>
    ${h}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(u.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(t,e,o){if("selected"===t&&e!==o&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===t&&e!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===t&&e!==o)if(this.closable){let t=document.createElement("span");t.className="tab__close",t.setAttribute("part","close-tab"),t.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(t),t.addEventListener("click",this.#t)}else{let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t),t?.remove()}}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=l("tab",(++c).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#t)}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}#t=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(t){return d(t,this)}static defineCustomElement(e="a-tab"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var m=0,p=`
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
`,b=document.createElement("template");b.innerHTML=`
  <style>
    ${p}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(b.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=l("panel",(++m).toString()))}static defineCustomElement(e="a-tab-panel"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var g={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},v={LTR:"ltr",RTL:"rtl"},f=Object.entries(g).map(([,t])=>t),y={AUTO:"auto",MANUAL:"manual"},w={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},E=`
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

  :host([dir="${v.RTL}"]) .tab-group__scroll-button--start,
  :host(:dir(${v.RTL})) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="${v.RTL}"]) .tab-group__scroll-button--end,
  :host(:dir(${v.RTL})) .tab-group__scroll-button--end {
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
  :host([placement="${g.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${g.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${g.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${g.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${g.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${g.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${g.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${g.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${g.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${g.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,A=document.createElement("template");A.innerHTML=`
  <style>${E}</style>

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
`,(class t extends HTMLElement{#t=null;#e=null;#o=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(A.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,o){"placement"===t&&e!==o&&this.#i(),"no-scroll-controls"===t&&e!==o&&this.#i()}get placement(){return this.getAttribute("placement")||g.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||y.AUTO}set activation(t){this.setAttribute("activation",t||y.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#r("placement"),this.#r("noScrollControls"),this.#r("scrollDistance"),this.#r("activation"),this.#r("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),r=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#s),e?.addEventListener("slotchange",this.#s),o?.addEventListener("click",this.#a),o?.addEventListener("keydown",this.#n),r.forEach(t=>t.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#t=new ResizeObserver(t=>{this.#e=window.requestAnimationFrame(()=>{let e=t?.[0]?.target,o=e?.scrollWidth>e?.clientWidth;r.forEach(t=>t.toggleAttribute("hidden",!o)),i?.part.toggle("nav--has-scroll-controls",o),i?.classList.toggle("tab-group__nav--has-scroll-controls",o)})})),this.#c(),this.#i()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#s),e?.removeEventListener("slotchange",this.#s),o?.removeEventListener("click",this.#a),o?.removeEventListener("keydown",this.#n),i.forEach(t=>t.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#t)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#t.unobserve(t),this.#t.observe(t))}#h(){this.#t&&(this.#t.disconnect(),null!==this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null))}#m(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?v.LTR:v.RTL:window.getComputedStyle(this).direction||v.LTR}#c(){this.hidden=0===this.#p().length}#b(){let t=this.#p();this.#c(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#p(){return Array.from(this.querySelectorAll("a-tab"))}#v(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#f(){return this.#p().find(t=>!t.disabled)||null}#y(){let t=this.#p();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#w(){let t=this.#p(),e=this.activation===y.MANUAL?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#E(){let t=this.#p(),e=this.activation===y.MANUAL?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#A(){let t=this.#p(),e=this.#g();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#i(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===g.START||this.placement===g.END?(this.#h(),o.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls"),e?.setAttribute("aria-orientation","vertical")):(this.#u(),o.forEach(t=>t.hidden=!1),e?.setAttribute("aria-orientation","horizontal"))}#x(){let t=this.#p(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#o&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#k(e))}#k(t){this.#A(),t&&(t.selected=!0);let e=this.#v(t);e&&(e.hidden=!1)}#s=t=>{this.#b(),this.#i(),this.#x(),"tab"===t.target.name&&(this.#o=!0)};#n=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=f.includes(this.placement||"")?this.placement:g.TOP,o=[g.TOP,g.BOTTOM].includes(e||"")?"horizontal":"vertical",i=this.#m(),r=null;switch(t.key){case w.LEFT:"horizontal"===o&&(r=i===v.LTR?this.#w():this.#E())&&(this.activation===y.MANUAL?r.focus():this.selectTab(r));break;case w.RIGHT:"horizontal"===o&&(r=i===v.LTR?this.#E():this.#w())&&(this.activation===y.MANUAL?r.focus():this.selectTab(r));break;case w.UP:"vertical"===o&&(r=this.#w())&&(this.activation===y.MANUAL?r.focus():this.selectTab(r));break;case w.DOWN:"vertical"===o&&(r=this.#E())&&(this.activation===y.MANUAL?r.focus():this.selectTab(r));break;case w.HOME:(r=this.#f())&&(this.activation===y.MANUAL?r.focus():this.selectTab(r));break;case w.END:(r=this.#y())&&(this.activation===y.MANUAL?r.focus():this.selectTab(r));break;case w.ENTER:case w.SPACE:(r=t.target)&&this.selectTab(r);break;default:return}t.preventDefault()};#a=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#l=t=>{let e=t.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!o)return;let i=e.classList.contains("tab-group__scroll-button--start"),r=this.#m()===v.LTR,s=o.scrollLeft;o.scrollTo({left:s+(i?r?-1:1:r?1:-1)*this.scrollDistance})};#d=t=>{let e=t.target,o=this.#v(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#r(t){return d(t,this)}selectTabByIndex(t){let e=this.#p()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#p().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#p().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#k(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(e="a-tab-group"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var x=`
  :host {
    display: inline-block;
  }
`,k=document.createElement("template");k.innerHTML=`
  <style>${x}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class t extends HTMLElement{#t;#p;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(k.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#p=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#p&&(this.#p.toggleAttribute("disabled",this.disabled),this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part&&this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#e("shareUrl"),this.#e("shareTitle"),this.#e("shareText"),this.#e("shareFiles"),this.#e("disabled"),this.#t?.addEventListener("slotchange",this.#w),this.#p?.addEventListener("click",this.#i)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#w),this.#p?.removeEventListener("click",this.#i)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#E}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#E=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name)return void this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#i=t=>{t.preventDefault(),this.disabled||this.share()};#w=t=>{t.target&&"button"===t.target.name&&(this.#p?.removeEventListener("click",this.#i),this.#p=this.#c(),this.#p&&(this.#p.addEventListener("click",this.#i),"BUTTON"===this.#p.nodeName||this.#p.hasAttribute("role")||this.#p.setAttribute("role","button")))};#c(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#e(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="web-share"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var L=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),C=[".DS_Store","Thumbs.db"],_=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=L.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t},S=(t,e)=>{let o=_(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},z=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),T=async t=>{let e=[],o=await z(t);for(;o.length>0;)e.push(...o),o=await z(t);return e},R=t=>new Promise((e,o)=>{t.file(o=>e(S(o,t.fullPath)),o)}),M=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t)if(t.isFile){let o=await R(t);-1===C.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await T(t.createReader()))}return e},q=async t=>{let e=[];for(let o of t)-1===C.indexOf(o.name)&&e.push(S(o));return e},N=async t=>t.dataTransfer?t.dataTransfer.items?await M(t.dataTransfer.items):await q(t.dataTransfer.files):await q(t.target.files),O="files-dropzone",H="TOO_MANY_FILES",B=document.createElement("template"),D=`
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
`;B.innerHTML=`
  <style>
    ${D}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`,(class t extends HTMLElement{#p=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(B.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#p&&(this.#p.accept=this.accept),"disabled"===t&&e!==o&&this.#p&&(this.#p.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==o&&this.#p&&(this.#p.multiple=this.multiple)}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("autoFocus"),this.#r("noStyle"),this.#p?.addEventListener("change",this.#i),this.#t?.addEventListener("dragenter",this.#E),this.#t?.addEventListener("dragover",this.#e),this.#t?.addEventListener("dragleave",this.#s),this.#t?.addEventListener("drop",this.#w),this.#t?.addEventListener("click",this.#m),this.#t?.addEventListener("keyup",this.#o),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#p?.removeEventListener("change",this.#i),this.#t?.removeEventListener("dragenter",this.#E),this.#t?.removeEventListener("dragover",this.#e),this.#t?.removeEventListener("dragleave",this.#s),this.#t?.removeEventListener("drop",this.#w),this.#t?.removeEventListener("click",this.#m),this.#t?.removeEventListener("keyup",this.#o)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i=async t=>{try{this.#h(await N(t))}catch(t){this.dispatchEvent(new CustomEvent(`${O}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#E=()=>{this.disabled||this.dispatchEvent(new Event(`${O}-dragenter`,{bubbles:!0,composed:!0}))};#e=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${O}-dragover`,{bubbles:!0,composed:!0}))};#s=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${O}-dragleave`,{bubbles:!0,composed:!0})))};#w=async t=>{if(!this.disabled){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#h(await N(t))}catch(t){this.dispatchEvent(new CustomEvent(`${O}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#m=()=>{this.disabled||this.#p?.click()};#o=t=>{this.disabled||(" "===t.key||"Enter"===t.key)&&this.#p?.click()};#h(t){if(!Array.isArray(t)||!t.length)return;let e=[],o=[],i=t.length;if(!this.multiple&&i>1)for(let e of t)o.push({file:e,errors:[{code:H,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let e of t)o.push({file:e,errors:[{code:H,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of t){let t=function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,r=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(r===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(i,this.accept),r=i.size>this.maxSize,s=i.size<this.minSize;if(!t||r||s){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),r&&e.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),s&&e.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:e})}else e.push(i)}this.dispatchEvent(new CustomEvent(`${O}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:o}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${O}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${O}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#p&&(this.#p.value=this.#p.defaultValue)}openFileDialog(){this.disabled||this.#p?.click()}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=O){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var $=document.createElement("template");$.innerHTML=`
  <style>:host { display: contents; }</style>
  <slot></slot>
`,(class t extends HTMLElement{#t=null;#p=null;#e=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild($.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&(this.disabled?this.#r():this.#i())}connectedCallback(){this.#m("disabled"),"ResizeObserver"in window&&(this.#p=new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}),this.disabled||this.#i(),this.#t?.addEventListener("slotchange",this.#s))}disconnectedCallback(){this.#r(),this.#t?.removeEventListener("slotchange",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}#i(){this.#t&&this.#p&&(this.#e.forEach(t=>this.#p?.unobserve(t)),this.#e=[],this.#t.assignedElements().forEach(t=>{this.#p?.observe(t),this.#e.push(t)}))}#r(){this.#p?.disconnect()}#s=()=>{this.disabled||this.#i()};#m(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="resize-observer"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var I=document.createElement("template"),P=`
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
`;I.innerHTML=`
  <style>${P}</style>

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
`,(class t extends HTMLElement{#t=null;#w=null;#e=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(I.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#w=this.shadowRoot.querySelector('slot[name="footer"]'),this.#e=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(t,e,o){if(null!==this.#t){if("open"===t&&e!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===t&&e!==o){let t=this.#t.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#t.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}"close-label"===t&&e!==o&&this.#E()}}connectedCallback(){this.#p("open"),this.#p("staticBackdrop"),this.#p("noHeader"),this.#p("noAnimations"),this.#p("noCloseButton"),this.#p("fullscreen"),this.#p("preserveOverflow"),this.#p("placement"),this.#p("closeLabel"),this.#t?.addEventListener("click",this.#c),this.#t?.addEventListener("close",this.#o),this.#t?.addEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#w?.addEventListener("slotchange",this.#a),this.#e?.addEventListener("slotchange",this.#k),this.addEventListener("command",this.#d)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#t?.addEventListener("click",this.#c),this.#t?.removeEventListener("close",this.#o),this.#t?.removeEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#w?.removeEventListener("slotchange",this.#a),this.#e?.removeEventListener("slotchange",this.#k),this.removeEventListener("command",this.#d)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){this.toggleAttribute("static-backdrop",!!t)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){this.toggleAttribute("no-header",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){this.toggleAttribute("no-close-button",!!t)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){this.toggleAttribute("fullscreen",!!t)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(t){this.toggleAttribute("preserve-overflow",!!t)}get placement(){return this.getAttribute("placement")||"center"}set placement(t){this.setAttribute("placement",null!=t?t.toString():t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}#E(){if(null===this.#t)return;let t=this.#t.querySelector(".dialog__close");null!==t&&((this.#e?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?t.removeAttribute("aria-label"):t.setAttribute("aria-label",this.closeLabel))}#i(){this.#r||(this.#t?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#o=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#m=t=>{let e=this.#s("escape-key");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#i())};#h=t=>{let e=this.#s("close-button");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#i())};#c=t=>{let e=t.target;if(e===t.currentTarget){let t=this.#s("backdrop-click");this.dispatchEvent(t),t.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#i():this.hide()}if(e instanceof HTMLElement&&null!==e.closest("[data-me-close]")){let t=this.#s("external-invoker");this.dispatchEvent(t),t.defaultPrevented?this.noAnimations||this.#i():this.hide()}};#d=t=>{if("--me-open"!==t.command||this.open||this.show(),"--me-close"===t.command&&this.open){let t=this.#s("external-invoker");this.dispatchEvent(t),t.defaultPrevented?this.noAnimations||this.#i():this.hide()}};#a=()=>{if(null===this.#t)return;let t=this.#t.querySelector(".dialog__footer");if(null===t)return;let e=this.#w?.assignedNodes();t.hidden=!(e&&e.length>0)};#k=()=>{this.#E()};#s(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#p(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var F="alert-element",j="alert-after-show",V="alert-after-hide",U=(e=(t=Object.assign(document.createElement("div"),{className:"alert-toast-stack"})).attachShadow({mode:"open"}),o=`
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
  `,e.innerHTML=`
    <style>${o}</style>
    <div class="stack" part="base"><slot></slot></div>
  `,t),W=`
  :host {
    display: contents;
    box-sizing: border-box;

    --alert-border-radius: 0.25rem;
    --alert-fg-color: #3f3f46;
    --alert-bg-color: #ffffff;
    --alert-border-color: #e4e4e7;
    --alert-info-variant-color: #0584c7;
    --alert-success-variant-color: #16a34a;
    --alert-neutral-variant-color: #52525b;
    --alert-warning-variant-color: #d87708;
    --alert-danger-variant-color: #dc2626;
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
    display: flex;
    align-items: center;
    margin: inherit;
    border: 1px solid var(--alert-border-color);
    border-top-width: 3px;
    border-radius: var(--alert-border-radius);
    background-color: var(--alert-bg-color);
  }

  :host([variant='info']) .alert {
    border-top-color: var(--alert-info-variant-color);
  }

  :host([variant='success']) .alert {
    border-top-color: var(--alert-success-variant-color);
  }

  :host([variant='neutral']) .alert {
    border-top-color: var(--alert-neutral-variant-color);
  }

  :host([variant='warning']) .alert {
    border-top-color: var(--alert-warning-variant-color);
  }

  :host([variant='danger']) .alert {
    border-top-color: var(--alert-danger-variant-color);
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--alert-fg-color);
    font-size: inherit;
    line-height: 0;
  }

  .alert__icon ::slotted(*) {
    margin-inline-start: 1rem;
  }

  :host([variant='info']) .alert__icon {
    color: var(--alert-info-variant-color);
  }

  :host([variant='success']) .alert__icon {
    color: var(--alert-success-variant-color);
  }

  :host([variant='neutral']) .alert__icon {
    color: var(--alert-neutral-variant-color);
  }

  :host([variant='warning']) .alert__icon {
    color: var(--alert-warning-variant-color);
  }

  :host([variant='danger']) .alert__icon {
    color: var(--alert-danger-variant-color);
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
    margin-inline-end:  1rem;
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
`,Z=document.createElement("template");Z.innerHTML=`
  <style>${W}</style>
  <div class="alert" part="base" role="alert" hidden>
    <div class="alert__icon" part="icon">
      <slot name="icon"></slot>
    </div>
    <div class="alert__message" part="message" aria-live="polite">
      <slot></slot>
    </div>
    <button type="button" class="alert__close" part="close" aria-label="Close">
      <slot name="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      </slot>
    </button>
  </div>
`,(class t extends HTMLElement{#p=null;#r=null;#w=null;#s=void 0;#t=null;#k;static customAnimations;#e="api";constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(Z.content.cloneNode(!0))}static get observedAttributes(){return["open","duration","close-label"]}attributeChangedCallback(t,e,o){if(!(!this.isConnected||e===o))switch(t){case"open":this.#A();break;case"duration":this.#i(),this.#h()&&this.#o();break;case"close-label":this.#m()}}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get duration(){let t=this.getAttribute("duration");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set duration(t){this.setAttribute("duration",null!=t?t.toString():t)}get variant(){return this.getAttribute("variant")||""}set variant(t){this.setAttribute("variant",t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}get customAnimations(){return this.#k}set customAnimations(t){this.#k=t}connectedCallback(){this.#E("closable"),this.#E("open"),this.#E("duration"),this.#E("variant"),this.#E("closeLabel"),this.#E("customAnimations"),this.#p=this.shadowRoot?.querySelector(".alert")??null,this.#r=this.shadowRoot?.querySelector(".alert__close")??null,this.#w=this.shadowRoot?.querySelector('slot[name="close"]')??null,this.#r?.addEventListener("click",this.#d),this.#w?.addEventListener("slotchange",this.#u),this.addEventListener("mouseenter",this.#l),this.addEventListener("mouseleave",this.#n),this.addEventListener("command",this.#v),this.open?(this.#p?.removeAttribute("hidden"),this.#h()&&this.#o()):this.#p?.setAttribute("hidden",""),this.closeLabel&&this.#m()}disconnectedCallback(){this.#i(),this.#r?.removeEventListener("click",this.#d),this.#w?.removeEventListener("slotchange",this.#u),this.removeEventListener("mouseenter",this.#l),this.removeEventListener("mouseleave",this.#n),this.removeEventListener("command",this.#v)}#A(){this.#i(),this.open?(this.#h()&&this.#o(),this.#p?.removeAttribute("hidden"),this.#c("alert-show"),this.#y(this.#p)?.finished.finally(()=>{this.#c(j)})):(this.#c("alert-hide",{reason:this.#e}),this.#b(this.#p)?.finished.finally(()=>{this.#p?.setAttribute("hidden",""),this.#c(V,{reason:this.#e}),this.#e="api"}))}#i(){void 0!==this.#s&&(clearTimeout(this.#s),this.#s=void 0)}#o(){this.#s=window.setTimeout(()=>{this.#e="timeout",this.open=!1},this.duration)}#h(){return this.open&&this.duration!==1/0}#d=()=>{this.closable&&(this.#e="user",this.open=!1)};#l=()=>{this.#i()};#n=()=>{this.#i(),this.#h()&&this.#o()};#u=()=>{this.#m()};#v=t=>{switch(t.command){case"--alert-show":this.open=!0;break;case"--alert-hide":this.#e="api",this.open=!1}};#m(){this.#r&&((this.#w?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?this.#r.removeAttribute("aria-label"):this.#r.setAttribute("aria-label",this.closeLabel))}#x(){let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o={show:{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}},hide:{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:250,easing:"ease"}}},i=this.customAnimations||t.customAnimations||{},r=r=>{let s=i[r]?.options??{},a=o[r].options;return{...a,...s,duration:e||null===this.customAnimations||null===t.customAnimations?0:s.duration??a.duration}};return{show:{keyframes:i.show?.keyframes??o.show.keyframes,options:r("show")},hide:{keyframes:i.hide?.keyframes??o.hide.keyframes,options:r("hide")}}}#y(t){let{keyframes:e,options:o}=this.#x().show;return t?.animate(e,o)}#b(t){let{keyframes:e,options:o}=this.#x().hide;return t?.animate(e,o)}#c(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}#a(t,e){return new Promise(o=>{t.addEventListener(e,e=>{e.target===t&&o()},{once:!0})})}show(){return this.open?Promise.resolve():(this.open=!0,this.#a(this,j))}hide(){return this.open?(this.open=!1,this.#a(this,V)):Promise.resolve()}toast(t={}){if(t={forceRestart:!1,...t},this.#t){if(!t.forceRestart)return this.#t.promise;this.#t.resolve(),this.#t.cleanup()}let e=()=>{},o=new Promise(t=>e=t),i=()=>{this.#t?.resolve(),this.#t?.cleanup()};this.#t={promise:o,resolve:e,cleanup:()=>{this.removeEventListener(V,i),this.parentNode===U&&U.removeChild(this),U.querySelector(F)||U.remove(),this.open=!1,this.#t=null}},U.parentElement||document.body.append(U),U.appendChild(this),this.#p?.setAttribute("data-toast",""),this.open=!0;let r=U.shadowRoot?.querySelector(".stack");return r?.scrollTo({top:r.scrollHeight}),this.addEventListener(V,i,{once:!0}),o}#E(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=F){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();const G=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function Y(t){return new Promise(function(e,o){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return o(t.error)}})}function K(){var t,e,o,r;return i||(t="keyval-store",e="keyval",r=function(){if(o)return o;var i=indexedDB.open(t);return i.onupgradeneeded=function(){return i.result.createObjectStore(e)},(o=Y(i)).then(function(t){t.onclose=function(){return o=void 0}},function(){}),o},i=function(t,o){return r().then(function(i){return o(i.transaction(e,t).objectStore(e))})}),i}const X="barcode-scanner/",J="settings",Q="history",tt=async t=>{try{return[null,await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K();return e("readonly",function(e){return Y(e.get(t))})}(t)]}catch(t){return[t,void 0]}},te=async(t,e)=>{try{return await function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K();return o("readwrite",function(o){return o.put(e,t),Y(o.transaction)})}(t,e),[null]}catch(t){return[t]}},to=async()=>tt(X+J),ti=async t=>te(X+J,t),tr=async()=>tt(X+Q),ts=async t=>te(X+Q,t);function ta(t,e=0,o=!1){let i=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...r)=>{clearTimeout(i),o&&!i&&t(...r),i=setTimeout(()=>{i=null,o||t(...r)},e)}}const tn={info:(...t)=>{},error:(...t)=>{}};async function tl(t,e){if(!t||!e)return;let o=t.querySelector(`bs-result[value="${e}"]`);o&&o.remove();let i=document.createElement("bs-result");i.setAttribute("value",e),i.setAttribute("role","alert"),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),t.insertBefore(i,t.firstElementChild),t.scrollTop=0}const td=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:o,frequency:i,volume:r,type:s,onEnded:a}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),r&&(l.gain.value=r),i&&(n.frequency.value=i),s&&(n.type=s),"function"==typeof a&&(n.onended=a),n.start(t.currentTime),n.stop(t.currentTime+(o||500)/1e3)}})();async function tc(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}let th=0;async function tu(t={}){let{success:e=!0}=t,[,o]=await to();if(!o)return;let i=Date.now();i-th<1e3||(o.beep&&td(e?{duration:200,frequency:860,volume:.03,type:"square"}:{duration:300,frequency:200,volume:.05,type:"sawtooth"}),o.vibrate&&tc(e?100:200),th=i)}function tm(t,e){if(!t||!e)return;let o=t.getBoundingClientRect();e.style.cssText=`width: ${o.width}px; height: ${o.height}px`}const tp=["aztec","code_128","code_39","code_93","codabar","data_matrix","ean_13","ean_8","itf","pdf417","qr_code","upc_a","upc_e"];class tb{static async polyfill(){if("BarcodeDetector"in window)tn.info("Using the native BarcodeDetector API.");else try{await n("3jPiW"),tn.info("Using BarcodeDetector polyfill.")}catch(t){throw Error("BarcodeDetector API is not supported by your browser.",{cause:t})}}static async getSupportedFormats(){let t=await window.BarcodeDetector.getSupportedFormats()||[];return tp.filter(e=>t.includes(e))}static async create(t){let e=Array.isArray(t)&&t.length>0?t:await tb.getSupportedFormats();return new tb(e)}static async setup(){try{return await tb.polyfill(),{barcodeReaderError:null}}catch(t){return{barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0){let t=e[0];return tn.info({rawValue:t.rawValue,format:t.format}),t}throw Error("Could not detect barcode from provided source.")}}function tg(t={}){let{el:e,isTorchOn:o}={...{el:document.getElementById("torchButton"),isTorchOn:!1},...t},i=e.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",e.setAttribute("aria-label",`Turn ${o?"off":"on"} flash`))}function tv(t,e={}){e={duration:5e3,variant:"neutral",icon:"",...e};let o={info:`
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
    `}[e.icon||e.variant]||"";return Object.assign(document.createElement("alert-element"),{closable:!0,duration:e.duration,variant:e.variant,innerHTML:`${o?`<span slot="icon">${o}</span>`:""}${e.trustDangerousInnerHTML?t:function(t){let e=document.createElement("div");return e.textContent=t,e.innerHTML}(t)}`}).toast()}const tf="video-capture",ty=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,tw=document.createElement("template");tw.innerHTML=`
  <style>${ty}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;class tE extends HTMLElement{#L={};#C=null;#_=null;constructor(){super(),this.#L=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tw.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(t,e,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("zoom"===t&&e!==o&&"zoom"in this.#L){let t=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&t&&this.#S("zoom",this.zoom)}"torch"===t&&e!==o&&"torch"in this.#L&&this.#S("torch",this.torch)}async connectedCallback(){if(this.#z("autoPlay"),this.#z("facingMode"),this.#z("zoom"),this.#z("torch"),this.#_=this.shadowRoot?.querySelector("video")||null,this.#_?.addEventListener("loadedmetadata",this.#T),!tE.isSupported())return this.dispatchEvent(new CustomEvent(`${tf}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#_?.removeEventListener("loadedmetadata",this.#T)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get facingMode(){let t=this.getAttribute("facing-mode");return"user"!==t?"environment":t}set facingMode(t){this.setAttribute("facing-mode",t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get torch(){return this.hasAttribute("torch")}set torch(t){this.toggleAttribute("torch",!!t)}get loading(){return this.hasAttribute("loading")}#T=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${tf}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${tf}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#S(t,e){var o,i,r;if(!this.#C)return;let[s]=this.#C.getVideoTracks(),a=this.getTrackCapabilities(),n=this.getTrackSettings(),l="pan"===t||"tilt"===t||"zoom"===t?(o=Number(e),i=a[t]?.min||1,r=a[t]?.max||1,Number.isNaN(i)&&(i=0),Number.isNaN(r)&&(r=0),Math.min(Math.max(o,Math.min(i,r)),Math.max(i,r))):e;t in n&&s.applyConstraints({advanced:[{[t]:l}]}).catch(()=>{})}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(t){if(!tE.isSupported()||this.#C)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof t&&t.trim().length>0&&(e.video.deviceId={exact:t}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(t=>Number(t));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{this.#C=await navigator.mediaDevices.getUserMedia(e),this.#_&&(this.#_.srcObject=this.#C),this.#S("pan",this.pan),this.#S("tilt",this.tilt),this.#S("zoom",this.zoom)}catch(t){this.dispatchEvent(new CustomEvent(`${tf}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}restartVideoStream(t){this.#C&&this.#_&&this.stopVideoStream(),this.startVideoStream(t)}stopVideoStream(){if(!this.#_||!this.#C)return;let[t]=this.#C.getVideoTracks();t?.stop(),this.#_.srcObject=null,this.#C=null}getSupportedConstraints(){return tE.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#C)return{};let[t]=this.#C.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#C)return{};let[t]=this.#C.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(t=>"videoinput"===t.kind&&!!t.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=tf){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tE)}}var tA="clipboard-copy",tx="success",tk="error",tL=document.createElement("template"),tC=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;tL.innerHTML=`
  <style>${tC}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;var t_=class t extends HTMLElement{#t=void 0;#p=null;#e=null;#i=null;#r=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tL.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.querySelector("button"),this.#e=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#r=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#p&&(this.#p.disabled=this.disabled,this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#s("value"),this.#s("from"),this.#s("disabled"),this.#s("feedbackDuration"),this.#p?.addEventListener("click",this.#E)}disconnectedCallback(){this.#p?.removeEventListener("click",this.#E),this.#w()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",null!=t?t.toString():t)}get from(){return this.getAttribute("from")||""}set from(t){this.setAttribute("from",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",null!=t?t.toString():t)}async #m(){if(!(!this.value&&!this.from))try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#p?.getRootNode({composed:!0}):this.#p?.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let o=e.querySelector(this.from);if(!o)return;t=o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?o.href:o.textContent||""}await navigator.clipboard.writeText(t),this.#c(tx),this.dispatchEvent(new CustomEvent(`${tA}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tk),this.dispatchEvent(new CustomEvent(`${tA}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#E=t=>{t.preventDefault(),this.disabled||this.#t||this.#m()};#c(t){this.#e&&(this.#e.hidden=!0),this.#i&&(this.#i.hidden=t!==tx),this.#r&&(this.#r.hidden=t!==tk),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error"),this.#p?.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove(`button--${t}`),this.#t=void 0},this.feedbackDuration)}#w(){this.#t&&clearTimeout(this.#t),this.#t=void 0,this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error")}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=tA){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};class tS extends t_{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]');t.innerHTML=`
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
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"only-icon"===t&&e!==o){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=this.shadowRoot.querySelector('slot[name="error"]'),i=t.querySelector(".text"),r=e.querySelector(".text"),s=o.querySelector(".text");i?.toggleAttribute("hidden",this.onlyIcon),r?.toggleAttribute("hidden",this.onlyIcon),s?.toggleAttribute("hidden",this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#z("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tS)}}function tz(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}tS.defineCustomElement();const tT=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}),tR=`
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
  <style>${tR}</style>

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
`;class tq extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tM.content.cloneNode(!0))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,o){"value"===t&&e!==o&&this.#R(this.value)}connectedCallback(){if(this.#z("value"),window.matchMedia("(prefers-reduced-motion: no-preference)").matches){let t=this.shadowRoot.querySelector(".result");t?.animate([{backgroundColor:"var(--color-flash)"},{backgroundColor:"transparent"}],{duration:400,easing:"ease-out"})}if(!tz()){let t=this.shadowRoot.querySelector("web-share");t&&(t.hidden=!0)}}async #R(t){let e,o=this.shadowRoot.querySelector(".result"),i=o?.querySelector(".result__content"),r=o?.querySelector(".result__datetime"),s=o?.querySelector(".result__item");s&&s?.remove();try{let[,o]=await to();new URL(t),(e=document.createElement("a")).href=t,o?.openWebPageSameTab||(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")),o?.openWebPage?e.click():window.requestAnimationFrame(()=>e.focus())}catch{e=document.createElement("span")}e.className="result__item",e.part="result__item",e.textContent=t,r.textContent=tT.format(new Date),i?.insertBefore(e,r);let a=o?.querySelector("custom-clipboard-copy"),n=o?.querySelector("web-share");if(a){let e=a.shadowRoot?.querySelector("button");a.setAttribute("value",t),e?.setAttribute("aria-label",`Copy to clipboard ${t}`),a.hidden=!1}if(n&&tz()){let e=n.querySelector("button");n.setAttribute("share-text",t),n.hidden=!1,e?.setAttribute("aria-label",`Share ${t}`)}}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="bs-result"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tq)}}tq.defineCustomElement();class tN extends HTMLElement{#M=null;#q=null;#N=[];#O;constructor(){super()}get supportedFormats(){return this.#N}set supportedFormats(t){this.#N=t,this.#H()}async connectedCallback(){this.#z("supportedFormats"),this.#M=this.querySelector("#formatsList"),this.#q=this.querySelector("form");let[,t]=await to();this.#O=t??{},this.#q?.querySelectorAll('[name="general-settings"]').forEach(t=>{t.checked=this.#O[t.value]})}#H(){if(!this.#M)return;let t=this.#O?.formats;this.#M.replaceChildren(),this.supportedFormats.forEach(e=>{let o=document.createElement("li"),i=document.createElement("label"),r=document.createElement("input");r.type="checkbox",r.name="formats-settings",r.value=e,r.checked=null==t||t.includes(e),i.appendChild(r),i.appendChild(document.createTextNode(e)),o.appendChild(i),this.#M.appendChild(o)})}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="bs-settings"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tN)}}tN.defineCustomElement();const tO=`
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
`,tH=document.createElement("template");tH.innerHTML=`
  <style>${tO}</style>
  <ul id="historyList"></ul>
  <footer>
    <div>There are no saved items in history.</div>
    <button type="button" id="emptyHistoryBtn">Empty history</button>
  </footer>
`;class tB extends HTMLElement{#B=null;#D=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tH.content.cloneNode(!0))}async connectedCallback(){this.#B=this.shadowRoot?.getElementById("historyList"),this.#D=this.shadowRoot?.getElementById("emptyHistoryBtn"),this.#$((await tr())[1]||[]),this.#B?.addEventListener("click",this.#I),this.#D?.addEventListener("click",this.#P)}disconnectedCallback(){this.#B?.removeEventListener("click",this.#I),this.#D?.removeEventListener("click",this.#P)}async add(t){if(!t)return;let e={type:"add",message:"Error adding barcode to history"},[o,i=[]]=await tr();if(o||!Array.isArray(i))return console.log("?????????????????"),this.#F("bs-history-error",e),o;if(i.find(e=>e===t))return;let r=[...i,t],[s]=await ts(r);return s?(tn.error("Error setting history",s),this.#F("bs-history-error",e),s):(this.#B?.insertBefore(this.#j(t),this.#B.firstElementChild),this.#F("bs-history-success",{type:"add",message:"Barcode added to history"}),null)}async remove(t){if(!t)return;let e={type:"remove",message:"Error removing barcode from history"},[o,i=[]]=await tr();if(o||!Array.isArray(i))return this.#F("bs-history-error",e),o;let r=i.filter(e=>e!==t),[s]=await ts(r);if(s)return tn.error("Error setting history",s),this.#F("bs-history-error",e),s;let a=this.#B?.querySelector(`li[data-value="${t}"]`);return a?.remove(),this.#F("bs-history-success",{type:"remove",message:"Barcode removed from history"}),null}async empty(){let[t]=await ts([]);return t?(tn.error("Error setting history",t),this.#F("bs-history-error",{type:"empty",message:"Error emptying history"}),t):(this.#B?.replaceChildren(),this.#F("bs-history-success",{type:"empty",message:"History emptied successfully"}),null)}#$(t){if(!this.#B)return;this.#B.replaceChildren();let e=document.createDocumentFragment();[...t].reverse().forEach(t=>e.appendChild(this.#j(t))),this.#B.appendChild(e)}#j(t){let e,o=document.createElement("li");o.setAttribute("data-value",t);try{new URL(t),(e=document.createElement("a")).href=t,e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")}catch{e=document.createElement("span")}e.textContent=t;let i=document.createElement("div");i.className="actions";let r=document.createElement("custom-clipboard-copy"),s=r.shadowRoot?.querySelector("button");r.setAttribute("only-icon",""),r.setAttribute("value",t),s?.setAttribute("aria-label",`Copy to clipboard ${t}`),i.appendChild(r);let a=document.createElement("button");return a.type="button",a.className="delete-action",a.setAttribute("data-action","delete"),a.setAttribute("aria-label",`Remove from history ${t}`),a.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>
    `,i.appendChild(a),o.appendChild(e),o.appendChild(i),o}#I=async t=>{let e=t.target;if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;window.confirm(`Delete history item ${t}?`)&&this.remove(t)}};#P=async()=>{window.confirm("Empty history? This action cannot be undone.")&&this.empty()};#F(t,e=null){let o=new CustomEvent(t,{bubbles:!0,composed:!0,detail:e});this.dispatchEvent(o)}static defineCustomElement(t="bs-history"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tB)}}tB.defineCustomElement(),async function(){let t=document.querySelector("a-tab-group"),e=document.querySelector("video-capture"),o=document.querySelector("bs-settings"),i=document.querySelector("bs-history"),r=document.getElementById("cameraPanel"),s=r.querySelector(".results"),a=document.getElementById("filePanel").querySelector(".results"),n=document.getElementById("scanInstructions"),l=document.getElementById("scanBtn"),d=document.getElementById("dropzone"),c=document.querySelector("resize-observer"),h=document.getElementById("scanFrame"),u=document.getElementById("torchButton"),m=document.getElementById("globalActions"),p=document.getElementById("historyBtn"),b=document.getElementById("historyDialog"),g=document.getElementById("settingsBtn"),v=document.getElementById("settingsDialog"),f=document.getElementById("settingsForm"),y=document.getElementById("cameraSelect"),w=null,E=!0;"function"==typeof HTMLDialogElement&&(m?.removeAttribute("hidden"),b?.removeAttribute("hidden"),v?.removeAttribute("hidden"));let{barcodeReaderError:A}=await tb.setup();if(A){let e=document.getElementById("barcodeReaderError");E=!1,m?.setAttribute("hidden",""),t?.setAttribute("hidden",""),e?.setAttribute("open","");return}let x=await tb.getSupportedFormats(),[,k]=await to(),L=k?.formats||x,C=await tb.create(L);e.addEventListener("video-capture:video-play",M,{once:!0}),e.addEventListener("video-capture:error",function(t){let e=t.detail.error;if("NotFoundError"===e.name)return;let o="NotAllowedError"===e.name?"<strong>Error accessing camera</strong><br>Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;r.innerHTML=`
      <alert-element variant="danger" open>
        <span slot="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </span>
        ${o}
      </alert-element>
    `},{once:!0}),tE.defineCustomElement();let _=e?.shadowRoot,S=_?.querySelector("video"),z=_?.querySelector('[part="actions-container"]');async function T(){if(E){tn.info("Scanning..."),n?.removeAttribute("hidden");try{let[,t]=await to(),e=await C.detect(S),o=e?.rawValue??"";if(!o)throw Error("No barcode detected");if(tl(s,o),t?.addToHistory&&i?.add(o),tu(),!t?.continueScanning){w&&(clearTimeout(w),w=null),l?.removeAttribute("hidden"),h?.setAttribute("hidden",""),z?.setAttribute("hidden","");return}}catch{}E&&(w=setTimeout(()=>T(),1e3))}}async function R(t){if(!t)return;let[,e]=await to(),o=new Image,r=new FileReader;r.onload=r=>{let s=r.target.result;o.onload=async()=>{try{let t=await C.detect(o),r=t?.rawValue??"";if(!r)throw Error("No barcode detected");tl(a,r),e?.addToHistory&&i?.add(r),tu()}catch(t){tn.error(t),tv("<strong>No barcode detected</strong><br><small>Please try again with a different image.</small>",{variant:"danger",trustDangerousInnerHTML:!0}),tu({success:!1})}},o.src=s,o.alt="Image preview",d.replaceChildren();let n=document.createElement("div");n.className="dropzone-preview";let l=document.createElement("div");l.className="dropzone-preview__image-wrapper";let c=document.createElement("div");c.className="dropzone-preview__file-name",c.textContent=t.name,l.appendChild(o),n.appendChild(l),n.appendChild(c),d.prepend(n)},r.readAsDataURL(t)}async function M(t){h?.removeAttribute("hidden"),tm(t.detail.video,h),T();let o=t.target.getTrackSettings(),i=t.target.getTrackCapabilities(),r=document.getElementById("zoomLevel");if(i?.torch&&(u?.addEventListener("click",N),u?.removeAttribute("hidden"),e.hasAttribute("torch")&&tg({el:u,isTorchOn:!0})),o?.zoom&&i?.zoom){let t=document.getElementById("zoomControls"),s=i?.zoom?.min||0,a=i?.zoom?.max||10,n=o?.zoom||1;t?.addEventListener("click",t=>{let o=t.target.closest('[data-action="zoom-in"]'),i=t.target.closest('[data-action="zoom-out"]');o&&n<a&&(n+=.5),i&&n>s&&(n-=.5),r.textContent=n.toFixed(1),e.zoom=n}),t?.removeAttribute("hidden"),r.textContent=n.toFixed(1)}let s=await tE.getVideoInputDevices();s.forEach((t,e)=>{let o=document.createElement("option");o.value=t.deviceId,o.textContent=t.label||`Camera ${e+1}`,y.appendChild(o)}),s.length>1&&(y?.addEventListener("change",O),y?.removeAttribute("hidden"))}async function q(t){t.preventDefault();let e={},o=new FormData(f),i=o.getAll("general-settings"),r=o.getAll("formats-settings");i.forEach(t=>e[t]=!0),e.formats=r,ti(e),"formats-settings"===t.target.name&&(C=await tb.create(r))}function N(t){e.torch=!e.torch,tg({el:t.currentTarget,isTorchOn:e.hasAttribute("torch")})}function O(t){if("function"!=typeof e.restartVideoStream)return;let o=t.target.value||void 0;e.restartVideoStream(o)}d.accept=G.join(","),o.supportedFormats=x,l.addEventListener("click",function(){l?.setAttribute("hidden",""),h?.removeAttribute("hidden"),z?.removeAttribute("hidden"),T()}),t.addEventListener("a-tab-show",ta(function(t){let e=t.detail.tabId,o=document.querySelector("video-capture");if("cameraTab"===e){if(E=!0,!o)return;if(!o.loading&&l.hasAttribute("hidden")&&(h?.removeAttribute("hidden"),z?.removeAttribute("hidden"),T()),"function"==typeof o.startVideoStream){let t=y?.value||void 0;o.startVideoStream(t)}}else"fileTab"===e&&(E=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream(),h?.setAttribute("hidden",""),z?.setAttribute("hidden",""))},250)),d.addEventListener("files-dropzone-drop",function(t){R(t.detail.acceptedFiles[0])}),c.addEventListener("resize-observer:resize",function(){tm(e.shadowRoot.querySelector("video"),h)}),g.addEventListener("click",function(){v.open=!0}),f.addEventListener("change",ta(q,500)),p.addEventListener("click",function(){b.open=!0}),document.addEventListener("visibilitychange",function(){if("cameraTab"===t.querySelector("[selected]").getAttribute("id"))if("hidden"===document.visibilityState)E=!1,null!=e&&"function"==typeof e.stopVideoStream&&e.stopVideoStream();else{E=!0;let t=document.querySelector("video-capture");if(!t)return;if(!t.loading&&l.hasAttribute("hidden")&&T(),"function"==typeof t.startVideoStream){let e=y?.value||void 0;t.startVideoStream(e)}}}),document.addEventListener("keydown",function(e){"Escape"===e.key&&function(){let e=t.querySelector("#cameraTab").hasAttribute("selected"),o=!l.hidden,i=v.hasAttribute("open"),r=b.hasAttribute("open");o&&e&&!(i||r)&&l.click()}()}),document.addEventListener("bs-history-success",function(t){let{type:e,message:o}=t.detail;"add"===e&&tv(o,{variant:"success"})}),document.addEventListener("bs-history-error",function(t){let{type:e,message:o}=t.detail;("remove"===e||"empty"===e)&&b?.hide(),tv(o,{variant:"danger"})})}();
//# sourceMappingURL=barcode-scanner.19138f51.js.map
