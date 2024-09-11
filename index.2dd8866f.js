!function(){var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=e.parcelRequirea202;null==s&&((s=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return i[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequirea202=s);var r=s.register;r("bkcP3",function(t,e){t.exports=s("4WKyX")(s("iE7OH").resolve("iqysf")).then(()=>s("dZsGG"))}),r("4WKyX",function(t,e){var i=s("2prpb");t.exports=i(function(t){return new Promise(function(e,i){if([].concat(document.getElementsByTagName("script")).some(function(e){return e.src===t})){e();return}var o=document.createElement("link");o.href=t,o.rel="preload",o.as="script",document.head.appendChild(o);var s=document.createElement("script");s.async=!0,s.type="text/javascript",s.src=t,s.onerror=function(e){var o=TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));s.onerror=s.onload=null,s.remove(),i(o)},s.onload=function(){s.onerror=s.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(s)})})}),r("2prpb",function(t,e){var i={},o={},s={};t.exports=function(t,e){return function(r){var a=function(t){switch(t){case"preload":return o;case"prefetch":return s;default:return i}}(e);return a[r]?a[r]:a[r]=t.apply(null,arguments).catch(function(t){throw delete a[r],t})}}});/*!
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
`,p=document.createElement("template");p.innerHTML=`
  <style>
    ${u}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(p.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=a("panel",(++h).toString()))}static defineCustomElement(e="a-tab-panel"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var b={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},m={LTR:"ltr",RTL:"rtl"},g=Object.entries(b).map(([,t])=>t),f={AUTO:"auto",MANUAL:"manual"},v={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},w=`
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

  :host([dir="${m.RTL}"]) .tab-group__scroll-button--start,
  :host(:dir(${m.RTL})) .tab-group__scroll-button--start {
    right: var(--scroll-button-inline-offset);
    left: auto;
    transform: translateY(-50%) rotate(180deg);
  }

  :host([dir="${m.RTL}"]) .tab-group__scroll-button--end,
  :host(:dir(${m.RTL})) .tab-group__scroll-button--end {
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
  :host([placement="${b.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${b.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${b.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${b.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${b.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${b.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${b.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${b.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${b.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${b.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,y=document.createElement("template");y.innerHTML=`
  <style>${w}</style>

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
`,(class t extends HTMLElement{#t=null;#e=null;#i=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(y.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,i){"placement"===t&&e!==i&&this.#o(),"no-scroll-controls"===t&&e!==i&&this.#o()}get placement(){return this.getAttribute("placement")||b.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||f.AUTO}set activation(t){this.setAttribute("activation",t||f.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#s("placement"),this.#s("noScrollControls"),this.#s("scrollDistance"),this.#s("activation"),this.#s("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),i=this.shadowRoot?.querySelector(".tab-group__tabs"),o=this.shadowRoot?.querySelector(".tab-group__nav"),s=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#r),e?.addEventListener("slotchange",this.#r),i?.addEventListener("click",this.#a),i?.addEventListener("keydown",this.#n),s.forEach(t=>t.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#t=new ResizeObserver(t=>{this.#e=window.requestAnimationFrame(()=>{let e=t?.[0]?.target,i=e?.scrollWidth>e?.clientWidth;s.forEach(t=>t.toggleAttribute("hidden",!i)),o?.part.toggle("nav--has-scroll-controls",i),o?.classList.toggle("tab-group__nav--has-scroll-controls",i)})})),this.#c(),this.#o()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),i=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#r),e?.removeEventListener("slotchange",this.#r),i?.removeEventListener("click",this.#a),i?.removeEventListener("keydown",this.#n),o.forEach(t=>t.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#t)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#t.unobserve(t),this.#t.observe(t))}#h(){this.#t&&(this.#t.disconnect(),null!==this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null))}#p(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?m.LTR:m.RTL:window.getComputedStyle(this).direction||m.LTR}#c(){this.hidden=0===this.#b().length}#m(){let t=this.#b();this.#c(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#b(){return Array.from(this.querySelectorAll("a-tab"))}#f(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#v(){return this.#b().find(t=>!t.disabled)||null}#w(){let t=this.#b();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#y(){let t=this.#b(),e=this.activation===f.MANUAL?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#E(){let t=this.#b(),e=this.activation===f.MANUAL?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#A(){let t=this.#b(),e=this.#g();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#o(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===b.START||this.placement===b.END?(this.#h(),i.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls"),e?.setAttribute("aria-orientation","vertical")):(this.#u(),i.forEach(t=>t.hidden=!1),e?.setAttribute("aria-orientation","horizontal"))}#x(){let t=this.#b(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#i&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#T(e))}#T(t){this.#A(),t&&(t.selected=!0);let e=this.#f(t);e&&(e.hidden=!1)}#r=t=>{this.#m(),this.#o(),this.#x(),"tab"===t.target.name&&(this.#i=!0)};#n=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=g.includes(this.placement||"")?this.placement:b.TOP,i=[b.TOP,b.BOTTOM].includes(e||"")?"horizontal":"vertical",o=this.#p(),s=null;switch(t.key){case v.LEFT:"horizontal"===i&&(s=o===m.LTR?this.#y():this.#E())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.RIGHT:"horizontal"===i&&(s=o===m.LTR?this.#E():this.#y())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.UP:"vertical"===i&&(s=this.#y())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.DOWN:"vertical"===i&&(s=this.#E())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.HOME:(s=this.#v())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.END:(s=this.#w())&&(this.activation===f.MANUAL?s.focus():this.selectTab(s));break;case v.ENTER:case v.SPACE:(s=t.target)&&this.selectTab(s);break;default:return}t.preventDefault()};#a=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#l=t=>{let e=t.target.closest(".tab-group__scroll-button"),i=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!i)return;let o=e.classList.contains("tab-group__scroll-button--start"),s=this.#p()===m.LTR,r=i.scrollLeft;i.scrollTo({left:r+(o?s?-1:1:s?1:-1)*this.scrollDistance})};#d=t=>{let e=t.target,i=this.#f(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),i&&"a-tab-panel"===i.tagName.toLowerCase()&&i.remove()};#s(t){return n(t,this)}selectTabByIndex(t){let e=this.#b()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#b().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#b().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#T(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(e="a-tab-group"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
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
`,(class t extends HTMLElement{#t;#b;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(A.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#b=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&this.#b&&(this.#b.toggleAttribute("disabled",this.disabled),this.#b.setAttribute("aria-disabled",this.disabled.toString()),this.#b.part&&this.#b.part.contains("button")&&this.#b.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#e("shareUrl"),this.#e("shareTitle"),this.#e("shareText"),this.#e("shareFiles"),this.#e("disabled"),this.#t?.addEventListener("slotchange",this.#y),this.#b?.addEventListener("click",this.#o)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#y),this.#b?.removeEventListener("click",this.#o)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#E}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#E=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#o=t=>{t.preventDefault(),this.disabled||this.share()};#y=t=>{t.target&&"button"===t.target.name&&(this.#b?.removeEventListener("click",this.#o),this.#b=this.#c(),this.#b&&(this.#b.addEventListener("click",this.#o),"BUTTON"===this.#b.nodeName||this.#b.hasAttribute("role")||this.#b.setAttribute("role","button")))};#c(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#e(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="web-share"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var x=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),T=[".DS_Store","Thumbs.db"],z=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let i=(e.split(".").pop()||"").toLowerCase(),o=x.get(i);o&&Object.defineProperty(t,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return t},S=(t,e)=>{let i=z(t);if("string"!=typeof i.path){let{webkitRelativePath:o}=t;Object.defineProperty(i,"path",{value:"string"==typeof e?e:o||t.name,writable:!1,configurable:!1,enumerable:!0})}return i},C=async t=>await new Promise((e,i)=>{t.readEntries(e,i)}),L=async t=>{let e=[],i=await C(t);for(;i.length>0;)e.push(...i),i=await C(t);return e},k=t=>new Promise((e,i)=>{t.file(i=>e(S(i,t.fullPath)),i)}),_=async t=>{let e=[],i=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();i.push(t)}for(;i.length>0;){let t=i.shift();if(t){if(t.isFile){let i=await k(t);-1===T.indexOf(i.name)&&e.push(i)}else t.isDirectory&&i.push(...await L(t.createReader()))}}return e},R=async t=>{let e=[];for(let i of t)-1===T.indexOf(i.name)&&e.push(S(i));return e},N=async t=>t.dataTransfer?t.dataTransfer.items?await _(t.dataTransfer.items):await R(t.dataTransfer.files):await R(t.target.files),M="files-dropzone",O="TOO_MANY_FILES",q=document.createElement("template"),I=`
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
`;/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function $(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}q.innerHTML=`
  <style>
    ${I}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`,(class t extends HTMLElement{#b=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(q.content.cloneNode(!0)),this.shadowRoot&&(this.#b=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,i){"accept"===t&&e!==i&&this.#b&&(this.#b.accept=this.accept),"disabled"===t&&e!==i&&this.#b&&(this.#b.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==i&&this.#b&&(this.#b.multiple=this.multiple)}connectedCallback(){this.#s("accept"),this.#s("disabled"),this.#s("maxFiles"),this.#s("maxSize"),this.#s("minSize"),this.#s("multiple"),this.#s("autoFocus"),this.#s("noStyle"),this.#b?.addEventListener("change",this.#o),this.#t?.addEventListener("dragenter",this.#E),this.#t?.addEventListener("dragover",this.#e),this.#t?.addEventListener("dragleave",this.#r),this.#t?.addEventListener("drop",this.#y),this.#t?.addEventListener("click",this.#p),this.#t?.addEventListener("keyup",this.#i),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#b?.removeEventListener("change",this.#o),this.#t?.removeEventListener("dragenter",this.#E),this.#t?.removeEventListener("dragover",this.#e),this.#t?.removeEventListener("dragleave",this.#r),this.#t?.removeEventListener("drop",this.#y),this.#t?.removeEventListener("click",this.#p),this.#t?.removeEventListener("keyup",this.#i)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#o=async t=>{try{this.#h(await N(t))}catch(t){this.dispatchEvent(new CustomEvent(`${M}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#E=()=>{this.disabled||this.dispatchEvent(new Event(`${M}-dragenter`,{bubbles:!0,composed:!0}))};#e=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${M}-dragover`,{bubbles:!0,composed:!0}))};#r=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${M}-dragleave`,{bubbles:!0,composed:!0})))};#y=async t=>{if(!this.disabled){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#h(await N(t))}catch(t){this.dispatchEvent(new CustomEvent(`${M}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#p=()=>{this.disabled||this.#b?.click()};#i=t=>{this.disabled||(" "===t.key||"Enter"===t.key)&&this.#b?.click()};#h(t){if(!Array.isArray(t)||!t.length)return;let e=[],i=[],o=t.length;if(!this.multiple&&o>1)for(let e of t)i.push({file:e,errors:[{code:O,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&o>this.maxFiles)for(let e of t)i.push({file:e,errors:[{code:O,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let o of t){let t=/*!
 * @georapbox/files-dropzone-element
 * A custom element that creates a drag and drop zone for files
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/files-dropzone-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function(t,e=""){if(!e)return!0;let i=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],o=t.type,s=o.replace(/\/.*$/,"");for(let e of i)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(s===e.replace(/\/.*$/,""))return!0}else if(o===e)return!0;return!1}(o,this.accept),s=o.size>this.maxSize,r=o.size<this.minSize;if(!t||s||r){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${o.type}" is not accepted.`}),s&&e.push({code:"FILE_TOO_LARGE",message:`File size ${o.size} exceeds the maximum size of ${this.maxSize}.`}),r&&e.push({code:"FILE_TOO_SMALL",message:`File size ${o.size} is smaller than the minimum size of ${this.minSize}.`}),i.push({file:o,errors:e})}else e.push(o)}this.dispatchEvent(new CustomEvent(`${M}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:i}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${M}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),i.length>0&&this.dispatchEvent(new CustomEvent(`${M}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:i}})),this.#b&&(this.#b.value=this.#b.defaultValue)}openFileDialog(){this.disabled||this.#b?.click()}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=M){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/resize-observer-element
 * A custom element that offers a declarative interface to the ResizeObserver API.
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/resize-observer-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var B=document.createElement("template");B.innerHTML=`
  <style>:host { display: contents; }</style>
  <slot></slot>
`,(class t extends HTMLElement{#t=null;#b=null;#e=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(B.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&(this.disabled?this.#s():this.#o())}connectedCallback(){this.#p("disabled"),"ResizeObserver"in window&&(this.#b=new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}),this.disabled||this.#o(),this.#t?.addEventListener("slotchange",this.#r))}disconnectedCallback(){this.#s(),this.#t?.removeEventListener("slotchange",this.#r)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}#o(){this.#t&&this.#b&&(this.#e.forEach(t=>this.#b?.unobserve(t)),this.#e=[],this.#t.assignedElements().forEach(t=>{this.#b?.observe(t),this.#e.push(t)}))}#s(){this.#b?.disconnect()}#r=()=>{this.disabled||this.#o()};#p(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="resize-observer"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/capture-photo-element
 * A custom element that implements the MediaDevices.getUserMedia() method of the MediaDevices interface to capture a photo in the browser.
 *
 * @version 4.1.0
 * @homepage https://github.com/georapbox/capture-photo-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var F=(t,e,i)=>(Number.isNaN(e)&&(e=0),Number.isNaN(i)&&(i=0),Math.min(Math.max(t,Math.min(e,i)),Math.max(e,i))),D="capture-photo",j=`
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
`,H=document.createElement("template");H.innerHTML=`
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
`;var P=class t extends HTMLElement{#E={};#b=null;#c=null;#i=null;#t=null;#h=null;#o=null;#r=null;#e=null;constructor(){super(),this.#E=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(H.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom","torch"]}attributeChangedCallback(t,e,i){if(!this.isConnected)return;let o=this.getTrackCapabilities(),s=this.getTrackSettings();if("no-image"===t&&e!==i&&this.#a(),"facing-mode"===t&&e!==i&&"facingMode"in this.#E){let t=["user","environment"].includes(this.facingMode||"");"facingMode"in s&&t&&this.#v()}if("camera-resolution"===t&&e!==i&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,e=0]=this.cameraResolution.split("x").map(t=>Number(t));if(t>0&&e>0&&"width"in o&&"height"in o){let i=!!(o.width?.min&&o.width?.max)&&t>=o?.width?.min&&t<=o?.width?.max,r=!!(o.height?.min&&o.height?.max)&&e>=o?.height?.min&&e<=o?.height?.max;"width"in s&&"height"in s&&i&&r&&this.#v()}}if("pan"===t&&e!==i&&"pan"in this.#E){let t=!!("pan"in o&&o.pan?.min&&o.pan?.max)&&this.pan>=o.pan.min&&this.pan<=o.pan.max;"number"==typeof this.pan&&t&&this.#y("pan",this.pan)}if("tilt"===t&&e!==i&&"tilt"in this.#E){let t=!!("tilt"in o&&o.tilt?.min&&o.tilt?.max)&&this.tilt>=o.tilt.min&&this.tilt<=o.tilt.max;"number"==typeof this.tilt&&t&&this.#y("tilt",this.tilt)}if("zoom"===t&&e!==i&&"zoom"in this.#E){let t=!!("zoom"in o&&o.zoom?.min&&o.zoom?.max)&&this.zoom>=o.zoom.min&&this.zoom<=o.zoom.max;"number"==typeof this.zoom&&t&&this.#y("zoom",this.zoom)}"torch"===t&&e!==i&&"torch"in this.#E&&this.#y("torch",this.torch)}connectedCallback(){if(this.#s("autpoPlay"),this.#s("noImage"),this.#s("facingMode"),this.#s("cameraResolution"),this.#s("pan"),this.#s("tilt"),this.#s("zoom"),this.#s("torch"),this.#s("calculateFileSize"),this.#c=this.shadowRoot?.querySelector("canvas")||null,this.#i=this.shadowRoot?.getElementById("output")||null,this.#t=this.shadowRoot?.querySelector("video")||null,this.#h=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#o=this.#u(),this.#r=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#e=this.#f(),this.#t?.addEventListener("loadedmetadata",this.#d),this.#h?.addEventListener("slotchange",this.#n),this.#o?.addEventListener("click",this.#p),this.#r?.addEventListener("slotchange",this.#l),this.#e?.addEventListener("click",this.#T),!t.isSupported())return this.dispatchEvent(new CustomEvent(`${D}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#e?.removeEventListener("click",this.#T),this.#o?.removeEventListener("click",this.#p),this.#t?.removeEventListener("canplay",this.#d),this.#h?.removeEventListener("slotchange",this.#n),this.#r?.removeEventListener("slotchange",this.#l)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get noImage(){return this.hasAttribute("no-image")}set noImage(t){this.toggleAttribute("no-image",!!t)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(t){this.setAttribute("facing-mode",t)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(t){this.setAttribute("camera-resolution",t)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(t){this.setAttribute("pan",null!=t?t.toString():t)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(t){this.setAttribute("tilt",null!=t?t.toString():t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get torch(){return this.hasAttribute("torch")}set torch(t){this.toggleAttribute("torch",!!t)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(t){this.toggleAttribute("calculate-file-size",!!t)}#T=t=>{t.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#p=t=>{t.preventDefault(),this.capture()};#d=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${D}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${D}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#a(){this.#i&&Array.from(this.#i.childNodes).forEach(t=>t.remove())}#y(t,e){if(!this.#b)return;let[i]=this.#b.getVideoTracks(),o=this.getTrackCapabilities(),s=this.getTrackSettings(),r="pan"===t||"tilt"===t||"zoom"===t?F(Number(e),o[t]?.min||1,o[t]?.max||1):e;t in s&&i.applyConstraints({advanced:[{[t]:r}]}).catch(()=>{})}#n=t=>{t.target?.name==="capture-button"&&(this.#o?.removeEventListener("click",this.#p),this.#o=this.#u(),this.#o&&(this.#o.addEventListener("click",this.#p),"BUTTON"===this.#o.nodeName||this.#o.hasAttribute("role")||this.#o.setAttribute("role","button")))};#l=t=>{t.target?.name==="facing-mode-button"&&(this.#e?.removeEventListener("click",this.#T),this.#e=this.#f(),this.#e&&(this.#e.addEventListener("click",this.#T),"BUTTON"===this.#e.nodeName||this.#e.hasAttribute("role")||this.#e.setAttribute("role","button")))};#f(){return this.#r&&this.#r.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"facing-mode-button"===t.getAttribute("slot"))||null}#u(){return this.#h&&this.#h.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"capture-button"===t.getAttribute("slot"))||null}#v(){this.stopVideoStream(),this.startVideoStream()}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(){if(!t.isSupported()||this.#b)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,i=0]=this.cameraResolution.split("x").map(t=>Number(t));t>0&&i>0&&(e.video.width=t,e.video.height=i)}try{this.#b=await navigator.mediaDevices.getUserMedia(e),this.#t&&(this.#t.srcObject=this.#b),this.#y("pan",this.pan),this.#y("tilt",this.tilt),this.#y("zoom",this.zoom),"facingMode"in this.getTrackSettings()&&this.#r&&(this.#r.hidden=!1)}catch(t){this.dispatchEvent(new CustomEvent(`${D}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#t||!this.#b)return;let[t]=this.#b.getVideoTracks();t?.stop(),this.#t.srcObject=null,this.#b=null}async capture(){if(!(this.loading||!this.#c||!this.#t))try{let t=this.#c.getContext("2d"),e=this.#t.videoWidth,i=this.#t.videoHeight;this.#c.width=e,this.#c.height=i,t?.drawImage(this.#t,0,0,e,i);let o=this.#c.toDataURL("image/png");if("string"==typeof o&&o.includes("data:image")){if(!this.noImage){let t=new Image;t.src=o,t.width=e,t.height=i,t.alt="Captured photo",t.setAttribute("part","output-image"),this.#a(),this.#i?.appendChild(t)}let t={dataURI:o,width:e,height:i};if(this.calculateFileSize)try{let e=(await (await fetch(o)).blob()).size;e&&(t.size=e)}catch{}this.dispatchEvent(new CustomEvent(`${D}:success`,{bubbles:!0,composed:!0,detail:t}))}}catch(t){this.dispatchEvent(new CustomEvent(`${D}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}getSupportedConstraints(){return t.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#b)return{};let[t]=this.#b.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#b)return{};let[t]=this.#b.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=D){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};let U="No barcode detected",V=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function W(t){return new Promise(function(e,i){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return i(t.error)}})}function G(){if(!t){var e,i,o,s;e="keyval-store",i="keyval",(o=indexedDB.open(e)).onupgradeneeded=function(){return o.result.createObjectStore(i)},s=W(o),t=function(t,e){return s.then(function(o){return e(o.transaction(i,t).objectStore(i))})}}return t}let Z="barcode-scanner/",Y="settings",K="history",X=async t=>{try{return{value:await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G();return e("readonly",function(e){return W(e.get(t))})}(t),error:void 0}}catch(t){return{value:void 0,error:t}}},J=async(t,e)=>{try{return await function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:G();return i("readwrite",function(i){return i.put(e,t),W(i.transaction)})}(t,e),{error:void 0}}catch(t){return{error:t}}},Q=async()=>X(Z+Y),tt=async t=>J(Z+Y,t),te=async()=>X(Z+K),ti=async t=>J(Z+K,t),to=(t,e=0,i=!1)=>{let o=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...s)=>{clearTimeout(o),i&&!o&&t(...s),o=setTimeout(()=>{o=null,i||t(...s)},e)}};function ts(t){let e=document.getElementById("historyList"),i=document.getElementById("emptyHistoryBtn");e.innerHTML="",Array.isArray(t)&&0!==t.length?(i.hidden=!1,t.forEach(t=>{let i;let o=document.createElement("li");o.setAttribute("data-value",t);try{new URL(t),(i=document.createElement("a")).href=t,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener")}catch{i=document.createElement("span")}i.textContent=t,i.setAttribute("title",t);let s=document.createElement("div");s.className="history-modal__actions";let r=document.createElement("custom-clipboard-copy");r.title="Copy to clipboard",r.setAttribute("only-icon",""),r.setAttribute("value",t),s.appendChild(r);let a=document.createElement("button");a.type="button",a.className="history-modal__delete-action",a.title="Remove from history",a.setAttribute("data-action","delete"),a.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `,s.appendChild(a),o.appendChild(i),o.appendChild(s),e.appendChild(o)})):(e.innerHTML="<li>There are no saved items in history.</li>",i.hidden=!0)}async function tr(t){let{value:e}=await Q();if(!t||!e?.addToHistory)return;let{value:i=[],error:o}=await te();if(!o&&!i.find(e=>e===t)){let e=[...i,t],{error:o}=await ti(e);o||ts(e)}}async function ta(t){if(!t)return;let{value:e=[],error:i}=await te();if(!i){let i=e.filter(e=>e!==t),{error:o}=await ti(i);o||ts(i)}}async function tn(){let{error:t}=await ti([]);t||ts([])}async function tl(t,e){let i;if(!t||!e)return;e.querySelector(".results__item")?.remove();try{let{value:e}=await Q();new URL(t),(i=document.createElement("a")).href=t,e?.openWebPageSameTab||(i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener")),e?.openWebPage&&i.click()}catch{i=document.createElement("span")}i.className="results__item",i.classList.toggle("results__item--no-barcode",t===U),i.textContent=t,e.insertBefore(i,e.querySelector(".results__actions"));let o=e.querySelector("custom-clipboard-copy"),s=e.querySelector("web-share"),r=t!==U;o&&(o.disabled=!r,o.hidden=!r),s&&$()&&(s.disabled=!r,s.hidden=!r,r?s.setAttribute("share-text",t):s.removeAttribute("share-text")),e.show()}let td=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:i,frequency:o,volume:s,type:r,onEnded:a}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),s&&(l.gain.value=s),o&&(n.frequency.value=o),r&&(n.type=r),"function"==typeof a&&(n.onended=a),n.start(t.currentTime),n.stop(t.currentTime+(i||500)/1e3)}})();async function tc(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}async function th(){let{value:t}=await Q();t&&(t.beep&&td({duration:200,frequency:860,volume:.03,type:"square"}),t.vibrate&&tc(100))}function tu(t,e){if(!t||!e)return;let i=t.getBoundingClientRect();e.style.cssText=`width: ${i.width}px; height: ${i.height}px`}class tp{static async polyfill(){if(!("BarcodeDetector"in window))try{await s("bkcP3")}catch{throw Error("BarcodeDetector API is not supported by your browser.")}}static async getSupportedFormats(){return await window.BarcodeDetector.getSupportedFormats()}static async create(){return new tp(await window.BarcodeDetector.getSupportedFormats())}static async init(){try{await tp.polyfill();let t=await tp.create(),e=await tp.getSupportedFormats();return{barcodeReader:t,barcodeFormats:e,barcodeReaderError:null}}catch(t){return{barcodeReader:null,barcodeFormats:[],barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0)return e[0];throw Error("Could not detect barcode from provided source.")}}async function tb(t){let{value:e={}}=await Q();Object.entries(e).forEach(([e,i])=>{let o=t.querySelector(`[name="${e}"]`);o&&(o.checked=i)})}function tm(t={}){let{el:e,isTorchOn:i}={el:document.getElementById("torchButton"),isTorchOn:!1,...t};console.log(e,i);let o=e.querySelectorAll("svg path");2===o.length&&(o[0].style.display=i?"none":"block",o[1].style.display=i?"block":"none",e.setAttribute("title",`Turn ${i?"off":"on"} flash`))}/*!
 * @georapbox/clipboard-copy-element
 * A custom element that implements the Clipboard API to copy text content from elements or input values to the clipboard.
 *
 * @version 3.0.2
 * @homepage https://github.com/georapbox/clipboard-copy-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var tg="clipboard-copy",tf="success",tv="error",tw=document.createElement("template"),ty=`
  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }
`;tw.innerHTML=`
  <style>${ty}</style>
  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;var tE=class t extends HTMLElement{#t=void 0;#b=null;#e=null;#o=null;#s=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tw.content.cloneNode(!0)),this.shadowRoot&&(this.#b=this.shadowRoot.querySelector("button"),this.#e=this.shadowRoot.querySelector('slot[name="copy"]'),this.#o=this.shadowRoot.querySelector('slot[name="success"]'),this.#s=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,i){"disabled"===t&&e!==i&&this.#b&&(this.#b.disabled=this.disabled,this.#b.setAttribute("aria-disabled",this.disabled.toString()),this.#b.part.contains("button")&&this.#b.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#r("value"),this.#r("from"),this.#r("disabled"),this.#r("feedbackDuration"),this.#b?.addEventListener("click",this.#E)}disconnectedCallback(){this.#b?.removeEventListener("click",this.#E),this.#y()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",null!=t?t.toString():t)}get from(){return this.getAttribute("from")||""}set from(t){this.setAttribute("from",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",null!=t?t.toString():t)}async #p(){if(!(!this.value&&!this.from))try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#b?.getRootNode({composed:!0}):this.#b?.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let i=e.querySelector(this.from);if(!i)return;i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement?t=i.value:i instanceof HTMLAnchorElement&&i.hasAttribute("href")?t=i.href:t=i.textContent||""}await navigator.clipboard.writeText(t),this.#c(tf),this.dispatchEvent(new CustomEvent(`${tg}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tv),this.dispatchEvent(new CustomEvent(`${tg}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#E=t=>{t.preventDefault(),this.disabled||this.#t||this.#p()};#c(t){this.#e&&(this.#e.hidden=!0),this.#o&&(this.#o.hidden=t!==tf),this.#s&&(this.#s.hidden=t!==tv),this.#b?.part.remove("button--success"),this.#b?.part.remove("button--error"),this.#b?.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#e&&(this.#e.hidden=!1),this.#o&&(this.#o.hidden=!0),this.#s&&(this.#s.hidden=!0),this.#b?.part.remove(`button--${t}`),this.#t=void 0},this.feedbackDuration)}#y(){this.#t&&clearTimeout(this.#t),this.#t=void 0,this.#e&&(this.#e.hidden=!1),this.#o&&(this.#o.hidden=!0),this.#s&&(this.#s.hidden=!0),this.#b?.part.remove("button--success"),this.#b?.part.remove("button--error")}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=tg){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};class tA extends tE{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]');t.innerHTML=`
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
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"only-icon"===t&&e!==i){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),i=t.querySelector(".text"),o=e.querySelector(".text");i&&(i.hidden=this.onlyIcon),o&&(o.hidden=this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#z("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#z(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tA)}}tA.defineCustomElement(),async function(){let t;let e=document.querySelector("a-tab-group"),i=document.getElementById("cameraPanel"),o=document.querySelector("capture-photo"),s=document.getElementById("cameraResults"),r=document.getElementById("fileResults"),a=document.getElementById("scanInstructions"),n=document.getElementById("scanBtn"),l=document.getElementById("dropzone"),d=document.querySelector("resize-observer"),c=document.getElementById("scanFrame"),h=document.getElementById("torchButton"),u=document.getElementById("globalActions"),p=document.getElementById("historyBtn"),b=document.getElementById("historyDialog"),m=document.getElementById("settingsBtn"),g=document.getElementById("settingsDialog"),f=document.forms["settings-form"],v=!0,{barcodeReader:w,barcodeFormats:y,barcodeReaderError:E}=await tp.init();if(E){let t=document.getElementById("barcodeReaderError");v=!1,u.hidden=!0,e.hidden=!0,t.hidden=!1,t.textContent=E?.message;return}o.addEventListener("capture-photo:video-play",function(t){c.hidden=!1,tu(t.detail.video,c),x();let e=t.target.getTrackSettings(),i=t.target.getTrackCapabilities(),s=document.getElementById("zoomLevel");if(i?.torch&&(h.hidden=!1,o.hasAttribute("torch")&&tm({el:h,isTorchOn:!0})),e?.zoom&&i?.zoom){let t=document.getElementById("zoomControls"),r=i?.zoom?.min||0,a=i?.zoom?.max||10,n=e?.zoom||1;t.hidden=!1,s.textContent=n,t.addEventListener("click",t=>{let e=t.target.closest('[data-action="zoom-in"]'),i=t.target.closest('[data-action="zoom-out"]');e&&n<a&&(n+=.5),i&&n>r&&(n-=.5),s.textContent=n,o.zoom=n})}},{once:!0}),o.addEventListener("capture-photo:error",function(t){let e=t.detail.error;if("NotFoundError"===e.name)return;let o="NotAllowedError"===e.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;i.innerHTML=`<div class="alert alert-danger" role="alert" style="margin: 0;">${o}</div>`},{once:!0}),P.defineCustomElement();let A=o?.shadowRoot?.querySelector("video");async function x(){a.hidden=!1;try{let e=await w.detect(A),i=e?.rawValue??"";if(!i)throw Error(U);window.cancelAnimationFrame(t),tl(i,s),tr(i),a.hidden=!0,n.hidden=!1,c.hidden=!0,th();return}catch{}v&&(t=window.requestAnimationFrame(()=>x()))}l.accept=V.join(","),tb(f),function(t){if(!Array.isArray(t)||0===t.length)return;let e=document.getElementById("supportedFormats");e&&(e.textContent=`Supported formats: ${t.join(", ")}`)}(y),ts((await te()).value||[]),$()||document.querySelectorAll("web-share").forEach(t=>{t.hidden=!0,t.disabled=!0}),n.addEventListener("click",function(){n.hidden=!0,c.hidden=!1,s&&(s.querySelector(".results__item")?.remove(),s.close()),x()}),e.addEventListener("a-tab-show",to(function(t){let e=t.detail.tabId,i=document.querySelector("capture-photo");switch(e){case"cameraTab":if(v=!0,!i)return;i.loading||s.querySelector(".results__item")||x(),"function"==typeof i.startVideoStream&&i.startVideoStream();break;case"fileTab":v=!1,null!=i&&"function"==typeof i.stopVideoStream&&i.stopVideoStream()}},250)),l.addEventListener("files-dropzone-drop",function(t){!function(t){if(!t)return;let e=new Image,i=new FileReader;i.onload=i=>{let o=i.target.result;e.onload=async()=>{try{let t=await w.detect(e),i=t?.rawValue??"";if(!i)throw Error(U);tl(i,r),tr(i),th()}catch(t){tl(U,r)}},e.src=o,e.alt="Image preview",l.replaceChildren();let s=document.createElement("div");s.className="dropzone-preview";let a=document.createElement("div");a.className="dropzone-preview__image-wrapper";let n=document.createElement("div");n.className="dropzone-preview__file-name",n.textContent=t.name,a.appendChild(e),s.appendChild(a),s.appendChild(n),l.prepend(s)},i.readAsDataURL(t)}(t.detail.acceptedFiles[0])}),d.addEventListener("resize-observer:resize",function(){tu(o.shadowRoot.querySelector("video"),c)}),m.addEventListener("click",function(){g.showModal()}),g.addEventListener("click",function(t){t.target===t.currentTarget&&g.close()}),f.addEventListener("change",function(t){let e={};t.currentTarget.querySelectorAll('input[type="checkbox"]').forEach(t=>e[t.name]=t.checked),tt(e)}),p.addEventListener("click",function(){b.showModal()}),b.addEventListener("click",function(t){let e=t.target;if(e===t.currentTarget){b.close();return}if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;if(window.confirm(`Delete ${t}?`)){ta(t);return}}if(e.closest("#emptyHistoryBtn")&&window.confirm("Are you sure you want to empty history?")){tn();return}}),h.addEventListener("click",function(t){o.torch=!o.torch,tm({el:t.currentTarget,isTorchOn:o.hasAttribute("torch")})}),document.addEventListener("visibilitychange",function(){if("cameraTab"===e.querySelector("[selected]").getAttribute("id")){if("hidden"===document.visibilityState)v=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream();else{v=!0;let t=document.querySelector("capture-photo");if(!t)return;t.loading||s.querySelector(".results__item")||x(),"function"==typeof t.startVideoStream&&t.startVideoStream()}}}),document.addEventListener("keydown",function(t){"Escape"===t.key&&function(){let t=e.querySelector("#cameraTab").hasAttribute("selected"),i=!n.hidden,o=g.hasAttribute("open"),s=b.hasAttribute("open");i&&t&&!(o||s)&&n.click()}()})}()}();
//# sourceMappingURL=index.2dd8866f.js.map
