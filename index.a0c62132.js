var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=e.parcelRequirea202;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequirea202=s);var r=s.register;r("cw9o9",function(t,e){var i=s("hffE7");t.exports=i("6z40I").then(()=>s("aexh3"))}),r("hffE7",function(t,e){t.exports=function(t){return import(s("kyEFX").resolve(t))}});/*!
 * @georapbox/a-tab-group
 * A custom element to create a group of tabs and tab panels.
 *
 * @version 2.4.1
 * @homepage https://github.com/georapbox/a-tab-group#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var a=(t="",e="")=>{let i=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${i}${"string"==typeof e&&""!==e?"-"+e:""}`},n=(t,e)=>{if(Object.prototype.hasOwnProperty.call(e,t)){let i=e[t];delete e[t],e[t]=i}},l=0,d=`
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
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(c.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(t,e,i){if("selected"===t&&e!==i&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===t&&e!==i&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===t&&e!==i){if(this.closable){let t=document.createElement("span");t.className="tab__close",t.setAttribute("part","close-tab"),t.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(t),t.addEventListener("click",this.#t)}else{let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t),t?.remove()}}}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=a("tab",(++l).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#t)}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}#t=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(t){return n(t,this)}static defineCustomElement(e="a-tab"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var h=0,u=`
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
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(m.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=a("panel",(++h).toString()))}static defineCustomElement(e="a-tab-panel"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var p={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},b={LTR:"ltr",RTL:"rtl"},g=Object.entries(p).map(([,t])=>t),f={AUTO:"auto",MANUAL:"manual"},v={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},y=`
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

  :host([dir="${b.RTL}"]) .tab-group__scroll-button--start,
  :host(:dir(${b.RTL})) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="${b.RTL}"]) .tab-group__scroll-button--end,
  :host(:dir(${b.RTL})) .tab-group__scroll-button--end {
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
`,w=document.createElement("template");w.innerHTML=`
  <style>${y}</style>

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
`,(class t extends HTMLElement{#t=null;#e=null;#i=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(w.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,i){"placement"===t&&e!==i&&this.#o(),"no-scroll-controls"===t&&e!==i&&this.#o()}get placement(){return this.getAttribute("placement")||p.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||f.AUTO}set activation(t){this.setAttribute("activation",t||f.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#s("placement"),this.#s("noScrollControls"),this.#s("scrollDistance"),this.#s("activation"),this.#s("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),i=this.shadowRoot?.querySelector(".tab-group__tabs"),o=this.shadowRoot?.querySelector(".tab-group__nav"),s=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#r),e?.addEventListener("slotchange",this.#r),i?.addEventListener("click",this.#a),i?.addEventListener("keydown",this.#n),s.forEach(t=>t.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#t=new ResizeObserver(t=>{this.#e=window.requestAnimationFrame(()=>{let e=t?.[0]?.target,i=e?.scrollWidth>e?.clientWidth;s.forEach(t=>t.toggleAttribute("hidden",!i)),o?.part.toggle("nav--has-scroll-controls",i),o?.classList.toggle("tab-group__nav--has-scroll-controls",i)})})),this.#c(),this.#o()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),i=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#r),e?.removeEventListener("slotchange",this.#r),i?.removeEventListener("click",this.#a),i?.removeEventListener("keydown",this.#n),o.forEach(t=>t.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#t)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#t.unobserve(t),this.#t.observe(t))}#h(){this.#t&&(this.#t.disconnect(),null!==this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null))}#m(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?b.LTR:b.RTL:window.getComputedStyle(this).direction||b.LTR}#c(){this.hidden=0===this.#p().length}#b(){let t=this.#p();this.#c(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#p(){return Array.from(this.querySelectorAll("a-tab"))}#f(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#v(){return this.#p().find(t=>!t.disabled)||null}#y(){let t=this.#p();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#w(){let t=this.#p(),e=this.activation===f.MANUAL?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#E(){let t=this.#p(),e=this.activation===f.MANUAL?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#A(){let t=this.#p(),e=this.#g();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#o(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===p.START||this.placement===p.END?(this.#h(),i.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls"),e?.setAttribute("aria-orientation","vertical")):(this.#u(),i.forEach(t=>t.hidden=!1),e?.setAttribute("aria-orientation","horizontal"))}#x(){let t=this.#p(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#i&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#k(e))}#k(t){this.#A(),t&&(t.selected=!0);let e=this.#f(t);e&&(e.hidden=!1)}#r=t=>{this.#b(),this.#o(),this.#x(),"tab"===t.target.name&&(this.#i=!0)};#n=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=g.includes(this.placement||"")?this.placement:p.TOP,i=[p.TOP,p.BOTTOM].includes(e||"")?"horizontal":"vertical",o=this.#m(),s=null;switch(t.key){case v.LEFT:"horizontal"===i&&(s=o===b.LTR?this.#w():this.#E())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.RIGHT:"horizontal"===i&&(s=o===b.LTR?this.#E():this.#w())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.UP:"vertical"===i&&(s=this.#w())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.DOWN:"vertical"===i&&(s=this.#E())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.HOME:(s=this.#v())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.END:(s=this.#y())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.ENTER:case v.SPACE:(s=t.target)&&this.selectTab(s);break;default:return}t.preventDefault()};#a=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#l=t=>{let e=t.target.closest(".tab-group__scroll-button"),i=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!i)return;let o=e.classList.contains("tab-group__scroll-button--start"),s=this.#m()===b.LTR,r=i.scrollLeft;i.scrollTo({left:r+(o?s?-1:1:s?1:-1)*this.scrollDistance})};#d=t=>{let e=t.target,i=this.#f(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),i&&"a-tab-panel"===i.tagName.toLowerCase()&&i.remove()};#s(t){return n(t,this)}selectTabByIndex(t){let e=this.#p()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#p().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#p().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#k(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(e="a-tab-group"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var E=`
  :host {
    display: inline-block;
  }
`,A=document.createElement("template");A.innerHTML=`
  <style>${E}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`,(class t extends HTMLElement{#t;#p;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(A.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#p=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&this.#p&&(this.#p.toggleAttribute("disabled",this.disabled),this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part&&this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#e("shareUrl"),this.#e("shareTitle"),this.#e("shareText"),this.#e("shareFiles"),this.#e("disabled"),this.#t?.addEventListener("slotchange",this.#w),this.#p?.addEventListener("click",this.#o)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#w),this.#p?.removeEventListener("click",this.#o)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#E}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#E=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#o=t=>{t.preventDefault(),this.disabled||this.share()};#w=t=>{t.target&&"button"===t.target.name&&(this.#p?.removeEventListener("click",this.#o),this.#p=this.#c(),this.#p&&(this.#p.addEventListener("click",this.#o),"BUTTON"===this.#p.nodeName||this.#p.hasAttribute("role")||this.#p.setAttribute("role","button")))};#c(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#e(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="web-share"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var x=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),k=[".DS_Store","Thumbs.db"],S=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let i=(e.split(".").pop()||"").toLowerCase(),o=x.get(i);o&&Object.defineProperty(t,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return t},z=(t,e)=>{let i=S(t);if("string"!=typeof i.path){let{webkitRelativePath:o}=t;Object.defineProperty(i,"path",{value:"string"==typeof e?e:o||t.name,writable:!1,configurable:!1,enumerable:!0})}return i},T=async t=>await new Promise((e,i)=>{t.readEntries(e,i)}),C=async t=>{let e=[],i=await T(t);for(;i.length>0;)e.push(...i),i=await T(t);return e},L=t=>new Promise((e,i)=>{t.file(i=>e(z(i,t.fullPath)),i)}),_=async t=>{let e=[],i=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();i.push(t)}for(;i.length>0;){let t=i.shift();if(t){if(t.isFile){let i=await L(t);-1===k.indexOf(i.name)&&e.push(i)}else t.isDirectory&&i.push(...await C(t.createReader()))}}return e},R=async t=>{let e=[];for(let i of t)-1===k.indexOf(i.name)&&e.push(z(i));return e},N=async t=>t.dataTransfer?t.dataTransfer.items?await _(t.dataTransfer.items):await R(t.dataTransfer.files):await R(t.target.files),M="files-dropzone",O="TOO_MANY_FILES",q=document.createElement("template"),I=`
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
`;q.innerHTML=`
  <style>
    ${I}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`,(class t extends HTMLElement{#p=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(q.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,i){"accept"===t&&e!==i&&this.#p&&(this.#p.accept=this.accept),"disabled"===t&&e!==i&&this.#p&&(this.#p.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==i&&this.#p&&(this.#p.multiple=this.multiple)}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("autoFocus"),this.#s("noStyle"),this.#p?.addEventListener("change",this.#o),this.#t?.addEventListener("dragenter",this.#E),this.#t?.addEventListener("dragover",this.#e),this.#t?.addEventListener("dragleave",this.#r),this.#t?.addEventListener("drop",this.#w),this.#t?.addEventListener("click",this.#m),this.#t?.addEventListener("keyup",this.#i),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#p?.removeEventListener("change",this.#o),this.#t?.removeEventListener("dragenter",this.#E),this.#t?.removeEventListener("dragover",this.#e),this.#t?.removeEventListener("dragleave",this.#r),this.#t?.removeEventListener("drop",this.#w),this.#t?.removeEventListener("click",this.#m),this.#t?.removeEventListener("keyup",this.#i)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#o=async t=>{try{this.#h(await N(t))}catch(t){this.dispatchEvent(new CustomEvent(`${M}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#E=()=>{this.disabled||this.dispatchEvent(new Event(`${M}-dragenter`,{bubbles:!0,composed:!0}))};#e=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${M}-dragover`,{bubbles:!0,composed:!0}))};#r=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${M}-dragleave`,{bubbles:!0,composed:!0})))};#w=async t=>{if(!this.disabled){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#h(await N(t))}catch(t){this.dispatchEvent(new CustomEvent(`${M}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#m=()=>{this.disabled||this.#p?.click()};#i=t=>{this.disabled||(" "===t.key||"Enter"===t.key)&&this.#p?.click()};#h(t){if(!Array.isArray(t)||!t.length)return;let e=[],i=[],o=t.length;if(!this.multiple&&o>1)for(let e of t)i.push({file:e,errors:[{code:O,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&o>this.maxFiles)for(let e of t)i.push({file:e,errors:[{code:O,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let o of t){let t=/*!
 * @georapbox/files-dropzone-element
 * A custom element that creates a drag and drop zone for files
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/files-dropzone-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function(t,e=""){if(!e)return!0;let i=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],o=t.type,s=o.replace(/\/.*$/,"");for(let e of i)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(s===e.replace(/\/.*$/,""))return!0}else if(o===e)return!0;return!1}(o,this.accept),s=o.size>this.maxSize,r=o.size<this.minSize;if(!t||s||r){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${o.type}" is not accepted.`}),s&&e.push({code:"FILE_TOO_LARGE",message:`File size ${o.size} exceeds the maximum size of ${this.maxSize}.`}),r&&e.push({code:"FILE_TOO_SMALL",message:`File size ${o.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:o,errors:e})}else e.push(o)}this.dispatchEvent(new CustomEvent(`${M}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:i}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${M}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),i.length>0&&this.dispatchEvent(new CustomEvent(`${M}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:i}})),this.#p&&(this.#p.value=this.#p.defaultValue)}openFileDialog(){this.disabled||this.#p?.click()}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=M){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/resize-observer-element
 * A custom element that offers a declarative interface to the ResizeObserver API.
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/resize-observer-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var $=document.createElement("template");$.innerHTML=`
  <style>:host { display: contents; }</style>
  <slot></slot>
`,(class t extends HTMLElement{#t=null;#p=null;#e=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild($.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&(this.disabled?this.#s():this.#o())}connectedCallback(){this.#m("disabled"),"ResizeObserver"in window&&(this.#p=new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}),this.disabled||this.#o(),this.#t?.addEventListener("slotchange",this.#r))}disconnectedCallback(){this.#s(),this.#t?.removeEventListener("slotchange",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}#o(){this.#t&&this.#p&&(this.#e.forEach(t=>this.#p?.unobserve(t)),this.#e=[],this.#t.assignedElements().forEach(t=>{this.#p?.observe(t),this.#e.push(t)}))}#s(){this.#p?.disconnect()}#r=()=>{this.disabled||this.#o()};#m(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="resize-observer"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/modal-element
 * A custom element to create a modal, using the native dialog element under the hood.
 *
 * @version 1.8.0
 * @homepage https://github.com/georapbox/modal-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var B=document.createElement("template"),F=`
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
    .dialog[open] {
      transform: scale(1);
      opacity: 1;
    }

    /* 2. EXIT STATE */
    .dialog {
      transform: scale(0.95);
      opacity: 0;
    }

    /* 0. BEFORE-OPEN STATE */
    @starting-style {
      .dialog[open] {
        transform: scale(0.95);
        opacity: 0;
      }

      .dialog[open]::backdrop {
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
`;B.innerHTML=`
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
`,(class t extends HTMLElement{#t=null;#o=null;#w=null;#s=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(B.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#o=this.shadowRoot.querySelector('slot[name="footer"]'),this.#w=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(t,e,i){if(null!==this.#t){if("open"===t&&e!==i&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===t&&e!==i){let t=this.#t.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==i&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==i){let t=this.#t.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}"close-label"===t&&e!==i&&this.#E()}}connectedCallback(){this.#p("open"),this.#p("staticBackdrop"),this.#p("noHeader"),this.#p("noAnimations"),this.#p("noCloseButton"),this.#p("fullscreen"),this.#p("preserveOverflow"),this.#p("placement"),this.#p("closeLabel"),this.#t?.addEventListener("click",this.#c),this.#t?.addEventListener("close",this.#i),this.#t?.addEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#o?.addEventListener("slotchange",this.#d),this.#w?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#s&&clearTimeout(this.#s),this.#t?.addEventListener("click",this.#c),this.#t?.removeEventListener("close",this.#i),this.#t?.removeEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#o?.removeEventListener("slotchange",this.#d),this.#w?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){this.toggleAttribute("static-backdrop",!!t)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){this.toggleAttribute("no-header",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){this.toggleAttribute("no-close-button",!!t)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){this.toggleAttribute("fullscreen",!!t)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(t){this.toggleAttribute("preserve-overflow",!!t)}get placement(){return this.getAttribute("placement")||"center"}set placement(t){this.setAttribute("placement",null!=t?t.toString():t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}#E(){if(null===this.#t)return;let t=this.#t.querySelector(".dialog__close");null!==t&&((this.#w?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?t.removeAttribute("aria-label"):t.setAttribute("aria-label",this.closeLabel))}#r(){this.#s||(this.#t?.classList.add("dialog--pulse"),this.#s=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#s),this.#s=void 0},300))}#i=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#m=t=>{let e=this.#e("escape-key");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#r())};#h=t=>{let e=this.#e("close-button");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#r())};#c=t=>{let e=t.target;if(e===t.currentTarget){let t=this.#e("backdrop-click");this.dispatchEvent(t),t.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#r():this.hide()}if(e instanceof HTMLElement&&null!==e.closest("[data-me-close]")){let t=this.#e("external-invoker");this.dispatchEvent(t),t.defaultPrevented?this.noAnimations||this.#r():this.hide()}};#d=()=>{if(null===this.#t)return;let t=this.#t.querySelector(".dialog__footer");if(null===t)return;let e=this.#o?.assignedNodes(),i=!!e&&e.length>0;t.hidden=!i};#a=()=>{this.#E()};#e(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#p(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/capture-photo-element
 * A custom element that implements the MediaDevices.getUserMedia() method of the MediaDevices interface to capture a photo in the browser.
 *
 * @version 4.1.0
 * @homepage https://github.com/georapbox/capture-photo-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var D=(t,e,i)=>(Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Math.min(Math.max(t,Math.min(e,i)),Math.max(e,i))),H="capture-photo",j=`
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
`,P=document.createElement("template");P.innerHTML=`
  <style>${j}</style>

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
`;var U=class t extends HTMLElement{#E={};#p=null;#c=null;#i=null;#t=null;#h=null;#o=null;#r=null;#e=null;constructor(){super(),this.#E=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(P.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom","torch"]}attributeChangedCallback(t,e,i){if(!this.isConnected)return;let o=this.getTrackCapabilities(),s=this.getTrackSettings();if("no-image"===t&&e!==i&&this.#a(),"facing-mode"===t&&e!==i&&"facingMode"in this.#E){let t=["user","environment"].includes(this.facingMode||"");"facingMode"in s&&t&&this.#v()}if("camera-resolution"===t&&e!==i&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,e=0]=this.cameraResolution.split("x").map(t=>Number(t));if(t>0&&e>0&&"width"in o&&"height"in o){let i=!!(o.width?.min&&o.width?.max)&&t>=o?.width?.min&&t<=o?.width?.max,r=!!(o.height?.min&&o.height?.max)&&e>=o?.height?.min&&e<=o?.height?.max;"width"in s&&"height"in s&&i&&r&&this.#v()}}if("pan"===t&&e!==i&&"pan"in this.#E){let t=!!("pan"in o&&o.pan?.min&&o.pan?.max)&&this.pan>=o.pan.min&&this.pan<=o.pan.max;"number"==typeof this.pan&&t&&this.#w("pan",this.pan)}if("tilt"===t&&e!==i&&"tilt"in this.#E){let t=!!("tilt"in o&&o.tilt?.min&&o.tilt?.max)&&this.tilt>=o.tilt.min&&this.tilt<=o.tilt.max;"number"==typeof this.tilt&&t&&this.#w("tilt",this.tilt)}if("zoom"===t&&e!==i&&"zoom"in this.#E){let t=!!("zoom"in o&&o.zoom?.min&&o.zoom?.max)&&this.zoom>=o.zoom.min&&this.zoom<=o.zoom.max;"number"==typeof this.zoom&&t&&this.#w("zoom",this.zoom)}"torch"===t&&e!==i&&"torch"in this.#E&&this.#w("torch",this.torch)}connectedCallback(){if(this.#s("autpoPlay"),this.#s("noImage"),this.#s("facingMode"),this.#s("cameraResolution"),this.#s("pan"),this.#s("tilt"),this.#s("zoom"),this.#s("torch"),this.#s("calculateFileSize"),this.#c=this.shadowRoot?.querySelector("canvas")||null,this.#i=this.shadowRoot?.getElementById("output")||null,this.#t=this.shadowRoot?.querySelector("video")||null,this.#h=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#o=this.#u(),this.#r=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#e=this.#f(),this.#t?.addEventListener("loadedmetadata",this.#d),this.#h?.addEventListener("slotchange",this.#n),this.#o?.addEventListener("click",this.#m),this.#r?.addEventListener("slotchange",this.#l),this.#e?.addEventListener("click",this.#k),!t.isSupported())return this.dispatchEvent(new CustomEvent(`${H}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#e?.removeEventListener("click",this.#k),this.#o?.removeEventListener("click",this.#m),this.#t?.removeEventListener("canplay",this.#d),this.#h?.removeEventListener("slotchange",this.#n),this.#r?.removeEventListener("slotchange",this.#l)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get noImage(){return this.hasAttribute("no-image")}set noImage(t){this.toggleAttribute("no-image",!!t)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(t){this.setAttribute("pan",null!=t?t.toString():t)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(t){this.setAttribute("tilt",null!=t?t.toString():t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get torch(){return this.hasAttribute("torch")}set torch(t){this.toggleAttribute("torch",!!t)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){this.toggleAttribute("calculate-file-size",!!t)}#k=t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#m=t=>{t.preventDefault(),this.capture()};#d=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${H}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${H}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#a(){this.#i&&Array.from(this.#i.childNodes).forEach(t=>t.remove())}#w(t,e){if(!this.#p)return;let[i]=this.#p.getVideoTracks(),o=this.getTrackCapabilities(),s=this.getTrackSettings(),r="pan"===t||"tilt"===t||"zoom"===t?D(Number(e),o[t]?.min||1,o[t]?.max||1):e;t in s&&i.applyConstraints({advanced:[{[t]:r}]}).catch(()=>{})}#n=t=>{t.target?.name==="capture-button"&&(this.#o?.removeEventListener("click",this.#m),this.#o=this.#u(),this.#o&&(this.#o.addEventListener("click",this.#m),"BUTTON"===this.#o.nodeName||this.#o.hasAttribute("role")||this.#o.setAttribute("role","button")))};#l=t=>{t.target?.name==="facing-mode-button"&&(this.#e?.removeEventListener("click",this.#k),this.#e=this.#f(),this.#e&&(this.#e.addEventListener("click",this.#k),"BUTTON"===this.#e.nodeName||this.#e.hasAttribute("role")||this.#e.setAttribute("role","button")))};#f(){return this.#r&&this.#r.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))||null}#u(){return this.#h&&this.#h.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))||null}#v(){this.stopVideoStream(),this.startVideoStream()}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(){if(!t.isSupported()||this.#p)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,i=0]=this.cameraResolution.split("x").map(t=>Number(t));t>0&&i>0&&(e.video.width=t,e.video.height=i)}try{this.#p=await navigator.mediaDevices.getUserMedia(e),this.#t&&(this.#t.srcObject=this.#p),this.#w("pan",this.pan),this.#w("tilt",this.tilt),this.#w("zoom",this.zoom),"facingMode"in this.getTrackSettings()&&this.#r&&(this.#r.hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${H}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#t||!this.#p)return;let[t]=this.#p.getVideoTracks();t?.stop(),this.#t.srcObject=null,this.#p=null}async capture(){if(!(this.loading||!this.#c||!this.#t))try{let t=this.#c.getContext("2d"),e=this.#t.videoWidth,i=this.#t.videoHeight;this.#c.width=e,this.#c.height=i,t?.drawImage(this.#t,0,0,e,i);let o=this.#c.toDataURL("image/png");if("string"==typeof o&&o.includes("data:image")){if(!this.noImage){let t=new Image;t.src=o,t.width=e,t.height=i,t.alt="Captured photo",t.setAttribute("part","output-image"),this.#a(),this.#i?.appendChild(t)}let t={dataURI:o,width:e,height:i};if(this.calculateFileSize)try{let e=(await (await fetch(o)).blob()).size;e&&(t.size=e)}catch{}this.dispatchEvent(new CustomEvent(`${H}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${H}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return t.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#p)return{};let[t]=this.#p.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#p)return{};let[t]=this.#p.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=H){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};const V="No barcode detected",W=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function Z(t){return new Promise(function(e,i){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return i(t.error)}})}function G(){if(!t){var e,i,o,s;e="keyval-store",i="keyval",(o=indexedDB.open(e)).onupgradeneeded=function(){return o.result.createObjectStore(i)},s=Z(o),t=function(t,e){return s.then(function(o){return e(o.transaction(i,t).objectStore(i))})}}return t}const Y="barcode-scanner/",X="settings",K="history",J=async t=>{try{return[null,await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G();return e("readonly",function(e){return Z(e.get(t))})}(t)]}catch(t){return[t,void 0]}},Q=async(t,e)=>{try{return await function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G();return i("readwrite",function(i){return i.put(e,t),Z(i.transaction)})}(t,e),[null]}catch(t){return[t]}},tt=async()=>J(Y+X),te=async t=>Q(Y+X,t),ti=async()=>J(Y+K),to=async t=>Q(Y+K,t),ts=(t,e=0,i=!1)=>{let o=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...s)=>{clearTimeout(o),i&&!o&&t(...s),o=setTimeout(()=>{o=null,i||t(...s)},e)}},tr=()=>"function"==typeof HTMLDialogElement;function ta(t){let e=document.getElementById("historyList");if(!e)return;let i=document.getElementById("emptyHistoryBtn");e.replaceChildren(),Array.isArray(t)&&0!==t.length?(i.hidden=!1,t.forEach((t,i)=>{let o;let s=document.createElement("li");s.setAttribute("data-value",t);try{new URL(t),(o=document.createElement("a")).href=t,o.setAttribute("target","_blank"),o.setAttribute("rel","noreferrer noopener")}catch{o=document.createElement("span")}o.textContent=t,o.setAttribute("id",`historyItem-${i}`);let r=document.createElement("div");r.className="history-modal__actions";let a=document.createElement("custom-clipboard-copy");a.setAttribute("id",`copyHistoryItem-${i}`),a.setAttribute("aria-label","Copy to clipboard"),a.setAttribute("aria-labelledby",`copyHistoryItem-${i} historyItem-${i}`),a.setAttribute("only-icon",""),a.setAttribute("value",t),r.appendChild(a);let n=document.createElement("button");n.type="button",n.className="history-modal__delete-action",n.setAttribute("data-action","delete"),n.setAttribute("id",`removeHistoryItem-${i}`),n.setAttribute("aria-label","Remove from history"),n.setAttribute("aria-labelledby",`removeHistoryItem-${i} historyItem-${i}`),n.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `,r.appendChild(n),s.appendChild(o),s.appendChild(r),e.appendChild(s)})):(e.innerHTML="<li>There are no saved items in history.</li>",i.hidden=!0)}async function tn(t){let[,e]=await tt();if(!t||!e?.addToHistory)return;let[i,o=[]]=await ti();if(!i&&Array.isArray(o)&&!o.find(e=>e===t)){let e=[...o,t],[i]=await to(e);i||ta(e)}}async function tl(t){if(!t)return;let[e,i=[]]=await ti();if(!e&&Array.isArray(i)){let e=i.filter(e=>e!==t),[o]=await to(e);o||ta(e)}}async function td(){let[t]=await to([]);t||ta([])}async function tc(t,e){if(!t||!e)return;let i=t.querySelector("scan-result");if(i)i.setAttribute("value",e);else{let i=document.createElement("scan-result");i.setAttribute("value",e),i.setAttribute("role","alert"),i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),t.appendChild(i)}}const th=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:i,frequency:o,volume:s,type:r,onEnded:a}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),s&&(l.gain.value=s),o&&(n.frequency.value=o),r&&(n.type=r),"function"==typeof a&&(n.onended=a),n.start(t.currentTime),n.stop(t.currentTime+(i||500)/1e3)}})();async function tu(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}async function tm(t={}){let{success:e=!0}=t,[,i]=await tt();i&&(i.beep&&th(e?{duration:200,frequency:860,volume:.03,type:"square"}:{duration:300,frequency:200,volume:.05,type:"sawtooth"}),i.vibrate&&tu(e?100:200))}function tp(t,e){if(!t||!e)return;let i=t.getBoundingClientRect();e.style.cssText=`width: ${i.width}px; height: ${i.height}px`}class tb{static async polyfill(){if(!("BarcodeDetector"in window))try{await s("cw9o9")}catch{throw Error("BarcodeDetector API is not supported by your browser.")}}static async getSupportedFormats(){return await window.BarcodeDetector.getSupportedFormats()}static async create(){return new tb(await window.BarcodeDetector.getSupportedFormats())}static async init(){try{await tb.polyfill();let t=await tb.create(),e=await tb.getSupportedFormats();return{barcodeReader:t,barcodeFormats:e,barcodeReaderError:null}}catch(t){return{barcodeReader:null,barcodeFormats:[],barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0)return e[0];throw Error("Could not detect barcode from provided source.")}}async function tg(t){let[,e={}]=await tt();Object.entries(e).forEach(([e,i])=>{let o=t.querySelector(`[name="${e}"]`);o&&(o.checked=i)})}function tf(t={}){let{el:e,isTorchOn:i}={el:document.getElementById("torchButton"),isTorchOn:!1,...t};console.log(e,i);let o=e.querySelectorAll("svg path");2===o.length&&(o[0].style.display=i?"none":"block",o[1].style.display=i?"block":"none",e.setAttribute("title",`Turn ${i?"off":"on"} flash`))}/*!
 * @georapbox/clipboard-copy-element
 * A custom element that implements the Clipboard API to copy text content from elements or input values to the clipboard.
 *
 * @version 3.0.2
 * @homepage https://github.com/georapbox/clipboard-copy-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var tv="clipboard-copy",ty="success",tw="error",tE=document.createElement("template"),tA=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;tE.innerHTML=`
  <style>${tA}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;var tx=class t extends HTMLElement{#t=void 0;#p=null;#e=null;#o=null;#s=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tE.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.querySelector("button"),this.#e=this.shadowRoot.querySelector('slot[name="copy"]'),this.#o=this.shadowRoot.querySelector('slot[name="success"]'),this.#s=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&this.#p&&(this.#p.disabled=this.disabled,this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#r("value"),this.#r("from"),this.#r("disabled"),this.#r("feedbackDuration"),this.#p?.addEventListener("click",this.#E)}disconnectedCallback(){this.#p?.removeEventListener("click",this.#E),this.#w()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",null!=t?t.toString():t)}get from(){return this.getAttribute("from")||""}set from(t){this.setAttribute("from",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",null!=t?t.toString():t)}async #m(){if(!(!this.value&&!this.from))try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#p?.getRootNode({composed:!0}):this.#p?.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let i=e.querySelector(this.from);if(!i)return;i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?t=i.value:i instanceof HTMLAnchorElement&&i.hasAttribute("href")?t=i.href:t=i.textContent||""}await navigator.clipboard.writeText(t),this.#c(ty),this.dispatchEvent(new CustomEvent(`${tv}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tw),this.dispatchEvent(new CustomEvent(`${tv}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#E=t=>{t.preventDefault(),this.disabled||this.#t||this.#m()};#c(t){this.#e&&(this.#e.hidden=!0),this.#o&&(this.#o.hidden=t!==ty),this.#s&&(this.#s.hidden=t!==tw),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error"),this.#p?.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#e&&(this.#e.hidden=!1),this.#o&&(this.#o.hidden=!0),this.#s&&(this.#s.hidden=!0),this.#p?.part.remove(`button--${t}`),this.#t=void 0},this.feedbackDuration)}#w(){this.#t&&clearTimeout(this.#t),this.#t=void 0,this.#e&&(this.#e.hidden=!1),this.#o&&(this.#o.hidden=!0),this.#s&&(this.#s.hidden=!0),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error")}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=tv){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};class tk extends tx{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]');t.innerHTML=`
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
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"only-icon"===t&&e!==i){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),i=t.querySelector(".text"),o=e.querySelector(".text");i&&(i.hidden=this.onlyIcon),o&&(o.hidden=this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#S("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#S(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tk)}}/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function tS(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}tk.defineCustomElement();const tz=`
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
    position: relative;
    width: 100%;
    border: 1px solid var(--focus);
    border-radius: 6px;
    margin: 1.5rem 0 0 0;
    padding: 1rem;
    background-color: var(--background-alt);
    text-align: center;
  }

  .result__item {
    word-wrap: break-word;
    word-break: break-word;
  }

  a.result__item {
    color: var(--links);
    text-decoration: none;
  }

  a.result__item:hover {
    text-decoration: underline;
  }

  .result__item--no-barcode {
    color: var(--error-color);
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
    margin: 0.75rem 0 0 0;
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
`,tT=document.createElement("template");tT.innerHTML=`
  <style>${tz}</style>

  <div class="result">
    <div class="result__actions">
      <custom-clipboard-copy></custom-clipboard-copy>

      <web-share>
        <button slot="button" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
          </svg>
          Share
        </button>
      </web-share>
    </div>
  </div>
`;class tC extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tT.content.cloneNode(!0))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,i){"value"===t&&e!==i&&this.#z(this.value)}connectedCallback(){if(this.#S("value"),!tS()){let t=this.shadowRoot.querySelector("web-share");t&&(t.hidden=!0)}}async #z(t){let e;let i=this.shadowRoot.querySelector(".result"),o=i?.querySelector(".result__actions"),s=i?.querySelector(".result__item");s&&s.remove();try{let[,i]=await tt();new URL(t),(e=document.createElement("a")).href=t,window.requestAnimationFrame(()=>e.focus()),i?.openWebPageSameTab||(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")),i?.openWebPage&&e.click()}catch{e=document.createElement("span")}e.className="result__item",e.classList.toggle("result__item--no-barcode",t===V),e.textContent=t,i?.insertBefore(e,o);let r=t!==V,a=i?.querySelector("custom-clipboard-copy"),n=i?.querySelector("web-share");a&&r?(a.setAttribute("value",t),a.hidden=!1):(a.hidden=!0,a.removeAttribute("value")),n&&tS()&&r?(n.setAttribute("share-text",t),n.hidden=!1):(n.hidden=!0,n.removeAttribute("share-text"))}#S(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="scan-result"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tC)}}tC.defineCustomElement(),async function(){let t;let e=document.querySelector("a-tab-group"),i=document.querySelector("capture-photo"),o=document.getElementById("cameraPanel"),s=document.getElementById("filePanel"),r=document.getElementById("scanInstructions"),a=document.getElementById("scanBtn"),n=document.getElementById("dropzone"),l=document.querySelector("resize-observer"),d=document.getElementById("scanFrame"),c=document.getElementById("torchButton"),h=document.getElementById("globalActions"),u=document.getElementById("historyBtn"),m=document.getElementById("historyDialog"),p=document.getElementById("settingsBtn"),b=document.getElementById("settingsDialog"),g=document.forms["settings-form"],f=!0;tr()&&(h.hidden=!1,m.hidden=!1,b.hidden=!1);let{barcodeReader:v,barcodeFormats:y,barcodeReaderError:w}=await tb.init();if(w){let t=document.getElementById("barcodeReaderError");f=!1,h.hidden=!0,e.hidden=!0,t.hidden=!1,t.textContent=w?.message;return}i.addEventListener("capture-photo:video-play",function(t){d.hidden=!1,tp(t.detail.video,d),A();let e=t.target.getTrackSettings(),o=t.target.getTrackCapabilities(),s=document.getElementById("zoomLevel");if(o?.torch&&(c.hidden=!1,i.hasAttribute("torch")&&tf({el:c,isTorchOn:!0})),e?.zoom&&o?.zoom){let t=document.getElementById("zoomControls"),r=o?.zoom?.min||0,a=o?.zoom?.max||10,n=e?.zoom||1;t.hidden=!1,s.textContent=n,t.addEventListener("click",t=>{let e=t.target.closest('[data-action="zoom-in"]'),o=t.target.closest('[data-action="zoom-out"]');e&&n<a&&(n+=.5),o&&n>r&&(n-=.5),s.textContent=n,i.zoom=n})}},{once:!0}),i.addEventListener("capture-photo:error",function(t){let e=t.detail.error;if("NotFoundError"===e.name)return;let i="NotAllowedError"===e.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;o.innerHTML=`<div class="alert alert-danger" role="alert" style="margin: 0;">${i}</div>`},{once:!0}),U.defineCustomElement();let E=i?.shadowRoot?.querySelector("video");async function A(){r.hidden=!1;try{let e=await v.detect(E),i=e?.rawValue??"";if(!i)throw Error(V);window.cancelAnimationFrame(t),tc(o,i),tn(i),r.hidden=!0,a.hidden=!1,d.hidden=!0,tm();return}catch{}f&&(t=window.requestAnimationFrame(()=>A()))}n.accept=W.join(","),tg(g),function(t){if(!Array.isArray(t)||0===t.length)return;let e=document.getElementById("supportedFormats");e&&(e.textContent=`Supported formats: ${t.join(", ")}`)}(y),ta((await ti())[1]||[]),a.addEventListener("click",function(){a.hidden=!0,d.hidden=!1,function(t){if(!t)return;let e=t.querySelector("scan-result");e?.remove()}(o),A()}),e.addEventListener("a-tab-show",ts(function(t){let e=t.detail.tabId,i=document.querySelector("capture-photo");switch(e){case"cameraTab":if(f=!0,!i)return;i.loading||o.querySelector("scan-result")||A(),"function"==typeof i.startVideoStream&&i.startVideoStream();break;case"fileTab":f=!1,null!=i&&"function"==typeof i.stopVideoStream&&i.stopVideoStream()}},250)),n.addEventListener("files-dropzone-drop",function(t){!function(t){if(!t)return;let e=new Image,i=new FileReader;i.onload=i=>{let o=i.target.result;e.onload=async()=>{try{let t=await v.detect(e),i=t?.rawValue??"";if(!i)throw Error(V);tc(s,i),tn(i),tm()}catch(t){tc(s,V),tm({success:!1})}},e.src=o,e.alt="Image preview",n.replaceChildren();let r=document.createElement("div");r.className="dropzone-preview",r.setAttribute("aria-hidden","true");let a=document.createElement("div");a.className="dropzone-preview__image-wrapper";let l=document.createElement("div");l.className="dropzone-preview__file-name",l.textContent=t.name,a.appendChild(e),r.appendChild(a),r.appendChild(l),n.prepend(r)},i.readAsDataURL(t)}(t.detail.acceptedFiles[0])}),l.addEventListener("resize-observer:resize",function(){tp(i.shadowRoot.querySelector("video"),d)}),p.addEventListener("click",function(){b.open=!0}),g.addEventListener("change",function(t){let e={};t.currentTarget.querySelectorAll('input[type="checkbox"]').forEach(t=>e[t.name]=t.checked),te(e)}),u.addEventListener("click",function(){m.open=!0}),m.addEventListener("click",function(t){let e=t.target;if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;if(window.confirm(`Delete history item ${t}?`)){tl(t);return}}if(e.closest("#emptyHistoryBtn")&&window.confirm("Empty history? This action cannot be undone.")){td();return}}),c.addEventListener("click",function(t){i.torch=!i.torch,tf({el:t.currentTarget,isTorchOn:i.hasAttribute("torch")})}),document.addEventListener("visibilitychange",function(){if("cameraTab"===e.querySelector("[selected]").getAttribute("id")){if("hidden"===document.visibilityState)f=!1,null!=i&&"function"==typeof i.stopVideoStream&&i.stopVideoStream();else{f=!0;let t=document.querySelector("capture-photo");if(!t)return;t.loading||o.querySelector("scan-result")||A(),"function"==typeof t.startVideoStream&&t.startVideoStream()}}}),document.addEventListener("keydown",function(t){"Escape"===t.key&&function(){let t=e.querySelector("#cameraTab").hasAttribute("selected"),i=!a.hidden,o=b.hasAttribute("open"),s=m.hasAttribute("open");i&&t&&!(o||s)&&a.click()}()})}();
//# sourceMappingURL=index.a0c62132.js.map
