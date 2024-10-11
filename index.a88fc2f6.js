!function(){var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=e.parcelRequirea202;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return o[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequirea202=r);var s=r.register;s("bkcP3",function(t,e){t.exports=r("4WKyX")(r("iE7OH").resolve("iqysf")).then(()=>r("dZsGG"))}),s("4WKyX",function(t,e){var o=r("2prpb");t.exports=o(function(t){return new Promise(function(e,o){if([].concat(document.getElementsByTagName("script")).some(function(e){return e.src===t})){e();return}var i=document.createElement("link");i.href=t,i.rel="preload",i.as="script",document.head.appendChild(i);var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.src=t,r.onerror=function(e){var i=TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));r.onerror=r.onload=null,r.remove(),o(i)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})})}),s("2prpb",function(t,e){var o={},i={},r={};t.exports=function(t,e){return function(s){var a=function(t){switch(t){case"preload":return i;case"prefetch":return r;default:return o}}(e);return a[s]?a[s]:a[s]=t.apply(null,arguments).catch(function(t){throw delete a[s],t})}}});/*!
 * @georapbox/a-tab-group
 * A custom element to create a group of tabs and tab panels.
 *
 * @version 2.4.1
 * @homepage https://github.com/georapbox/a-tab-group#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var a=(t="",e="")=>{let o=Math.random().toString(36).substring(2,8);return`${"string"==typeof t&&""!==t?t+"-":""}${o}${"string"==typeof e&&""!==e?"-"+e:""}`},n=(t,e)=>{if(Object.prototype.hasOwnProperty.call(e,t)){let o=e[t];delete e[t],e[t]=o}},l=0,d=`
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
`,(class t extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(c.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(t,e,o){if("selected"===t&&e!==o&&(this.setAttribute("aria-selected",this.selected.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"disabled"===t&&e!==o&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")),"closable"===t&&e!==o){if(this.closable){let t=document.createElement("span");t.className="tab__close",t.setAttribute("part","close-tab"),t.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(t),t.addEventListener("click",this.#t)}else{let t=this.shadowRoot?.querySelector(".tab__close");t?.removeEventListener("click",this.#t),t?.remove()}}}connectedCallback(){this.#e("selected"),this.#e("disabled"),this.#e("closable"),this.id||(this.id=a("tab",(++l).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled||!this.selected?"-1":"0")}disconnectedCallback(){this.shadowRoot?.querySelector(".tab__close")?.removeEventListener("click",this.#t)}get selected(){return this.hasAttribute("selected")}set selected(t){this.toggleAttribute("selected",!!t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get closable(){return this.hasAttribute("closable")}set closable(t){this.toggleAttribute("closable",!!t)}#t=t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#e(t){return n(t,this)}static defineCustomElement(e="a-tab"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var h=0,u=`
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
`,(class t extends HTMLElement{#t=null;#e=null;#o=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(w.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(t,e,o){"placement"===t&&e!==o&&this.#i(),"no-scroll-controls"===t&&e!==o&&this.#i()}get placement(){return this.getAttribute("placement")||p.TOP}set placement(t){null!=t&&this.setAttribute("placement",t)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(t){this.toggleAttribute("no-scroll-controls",!!t)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(t){this.setAttribute("scroll-distance",Math.abs(t).toString()||"200")}get activation(){return this.getAttribute("activation")||f.AUTO}set activation(t){this.setAttribute("activation",t||f.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(t){this.toggleAttribute("no-tab-cycling",!!t)}connectedCallback(){this.#r("placement"),this.#r("noScrollControls"),this.#r("scrollDistance"),this.#r("activation"),this.#r("noTabCycling");let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=this.shadowRoot?.querySelector(".tab-group__nav"),r=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.addEventListener("slotchange",this.#s),e?.addEventListener("slotchange",this.#s),o?.addEventListener("click",this.#a),o?.addEventListener("keydown",this.#n),r.forEach(t=>t.addEventListener("click",this.#l)),this.addEventListener("a-tab-close",this.#d),"ResizeObserver"in window&&(this.#t=new ResizeObserver(t=>{this.#e=window.requestAnimationFrame(()=>{let e=t?.[0]?.target,o=e?.scrollWidth>e?.clientWidth;r.forEach(t=>t.toggleAttribute("hidden",!o)),i?.part.toggle("nav--has-scroll-controls",o),i?.classList.toggle("tab-group__nav--has-scroll-controls",o)})})),this.#c(),this.#i()}disconnectedCallback(){let t=this.shadowRoot?.querySelector("slot[name=tab]"),e=this.shadowRoot?.querySelector("slot[name=panel]"),o=this.shadowRoot?.querySelector(".tab-group__tabs"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);t?.removeEventListener("slotchange",this.#s),e?.removeEventListener("slotchange",this.#s),o?.removeEventListener("click",this.#a),o?.removeEventListener("keydown",this.#n),i.forEach(t=>t.removeEventListener("click",this.#l)),this.removeEventListener("a-tab-close",this.#d),this.#h()}#u(){if(!this.#t)return;let t=this.shadowRoot?.querySelector(".tab-group__tabs");t&&(this.#t.unobserve(t),this.#t.observe(t))}#h(){this.#t&&(this.#t.disconnect(),null!==this.#e&&(window.cancelAnimationFrame(this.#e),this.#e=null))}#m(){return window.CSS.supports("selector(:dir(ltr))")?this.matches(":dir(ltr)")?b.LTR:b.RTL:window.getComputedStyle(this).direction||b.LTR}#c(){this.hidden=0===this.#p().length}#b(){let t=this.#p();this.#c(),t.forEach(t=>{let e=t.nextElementSibling;if(!e||"a-tab-panel"!==e.tagName.toLowerCase())return console.error(`Tab #${t.id} is not a sibling of a <a-tab-panel>`);t.setAttribute("aria-controls",e.id),e.setAttribute("aria-labelledby",t.id)})}#g(){return Array.from(this.querySelectorAll("a-tab-panel"))}#p(){return Array.from(this.querySelectorAll("a-tab"))}#f(t){let e=t.getAttribute("aria-controls");return this.querySelector(`#${e}`)}#v(){return this.#p().find(t=>!t.disabled)||null}#y(){let t=this.#p();for(let e=t.length-1;e>=0;e--)if(!t[e].disabled)return t[e];return null}#w(){let t=this.#p(),e=this.activation===f.MANUAL?t.findIndex(t=>t.matches(":focus"))-1:t.findIndex(t=>t.selected)-1;for(;t[(e+t.length)%t.length].disabled;)e--;return this.noTabCycling&&e<0?null:t[(e+t.length)%t.length]}#E(){let t=this.#p(),e=this.activation===f.MANUAL?t.findIndex(t=>t.matches(":focus"))+1:t.findIndex(t=>t.selected)+1;for(;t[e%t.length].disabled;)e++;return this.noTabCycling&&e>=t.length?null:t[e%t.length]}#A(){let t=this.#p(),e=this.#g();t.forEach(t=>t.selected=!1),e.forEach(t=>t.hidden=!0)}#i(){let t=this.shadowRoot?.querySelector(".tab-group__nav"),e=this.shadowRoot?.querySelector(".tab-group__tabs"),o=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===p.START||this.placement===p.END?(this.#h(),o.forEach(t=>t.hidden=!0),t?.part.remove("nav--has-scroll-controls"),t?.classList.remove("tab-group__nav--has-scroll-controls"),e?.setAttribute("aria-orientation","vertical")):(this.#u(),o.forEach(t=>t.hidden=!1),e?.setAttribute("aria-orientation","horizontal"))}#x(){let t=this.#p(),e=t.find(t=>t.selected&&!t.disabled)||t.find(t=>!t.disabled);e&&(this.#o&&!e.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.#k(e))}#k(t){this.#A(),t&&(t.selected=!0);let e=this.#f(t);e&&(e.hidden=!1)}#s=t=>{this.#b(),this.#i(),this.#x(),"tab"===t.target.name&&(this.#o=!0)};#n=t=>{if("a-tab"!==t.target.tagName.toLowerCase()||t.altKey)return;let e=g.includes(this.placement||"")?this.placement:p.TOP,o=[p.TOP,p.BOTTOM].includes(e||"")?"horizontal":"vertical",i=this.#m(),r=null;switch(t.key){case v.LEFT:"horizontal"===o&&(r=i===b.LTR?this.#w():this.#E())&&(this.activation===f.MANUAL?r.focus():this.selectTab(r));break;case v.RIGHT:"horizontal"===o&&(r=i===b.LTR?this.#E():this.#w())&&(this.activation===f.MANUAL?r.focus():this.selectTab(r));break;case v.UP:"vertical"===o&&(r=this.#w())&&(this.activation===f.MANUAL?r.focus():this.selectTab(r));break;case v.DOWN:"vertical"===o&&(r=this.#E())&&(this.activation===f.MANUAL?r.focus():this.selectTab(r));break;case v.HOME:(r=this.#v())&&(this.activation===f.MANUAL?r.focus():this.selectTab(r));break;case v.END:(r=this.#y())&&(this.activation===f.MANUAL?r.focus():this.selectTab(r));break;case v.ENTER:case v.SPACE:(r=t.target)&&this.selectTab(r);break;default:return}t.preventDefault()};#a=t=>{let e=t.target.closest("a-tab");e&&this.selectTab(e)};#l=t=>{let e=t.target.closest(".tab-group__scroll-button"),o=this.shadowRoot?.querySelector(".tab-group__tabs");if(!e||!o)return;let i=e.classList.contains("tab-group__scroll-button--start"),r=this.#m()===b.LTR,s=o.scrollLeft;o.scrollTo({left:s+(i?r?-1:1:r?1:-1)*this.scrollDistance})};#d=t=>{let e=t.target,o=this.#f(e);e&&(e.remove(),e.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}}))),o&&"a-tab-panel"===o.tagName.toLowerCase()&&o.remove()};#r(t){return n(t,this)}selectTabByIndex(t){let e=this.#p()[t];e&&this.selectTab(e)}selectTabById(t){let e=this.#p().find(e=>e.id===t);e&&this.selectTab(e)}selectTab(t){let e=this.#p().find(t=>t.selected);!t||t.disabled||t.selected||"a-tab"!==t.tagName.toLowerCase()||(this.#k(t),window.requestAnimationFrame(()=>{t.scrollIntoView({inline:"nearest",block:"nearest"}),t.focus()}),e&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:e.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})))}static defineCustomElement(e="a-tab-group"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
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
`,(class t extends HTMLElement{#t;#p;#E=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(A.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#p=this.#c()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#p&&(this.#p.toggleAttribute("disabled",this.disabled),this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part&&this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#e("shareUrl"),this.#e("shareTitle"),this.#e("shareText"),this.#e("shareFiles"),this.#e("disabled"),this.#t?.addEventListener("slotchange",this.#w),this.#p?.addEventListener("click",this.#i)}disconnectedCallback(){this.#t?.removeEventListener("slotchange",this.#w),this.#p?.removeEventListener("click",this.#i)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(t){this.setAttribute("share-url",t)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(t){this.setAttribute("share-title",t)}get shareText(){return this.getAttribute("share-text")||""}set shareText(t){this.setAttribute("share-text",t)}get shareFiles(){return this.#E}set shareFiles(t){Array.isArray(t)&&t.length>0&&(this.#E=t)}async share(){if(!this.disabled)try{let t={};this.shareUrl&&(t.url=this.shareUrl),this.shareTitle&&(t.title=this.shareTitle),this.shareText&&(t.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(t.files=this.shareFiles),await navigator.share(t),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:t}}))}catch(t){if(t instanceof Error&&"AbortError"===t.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:t}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:t}}))}}#i=t=>{t.preventDefault(),this.disabled||this.share()};#w=t=>{t.target&&"button"===t.target.name&&(this.#p?.removeEventListener("click",this.#i),this.#p=this.#c(),this.#p&&(this.#p.addEventListener("click",this.#i),"BUTTON"===this.#p.nodeName||this.#p.hasAttribute("role")||this.#p.setAttribute("role","button")))};#c(){return this.#t&&this.#t.assignedElements({flatten:!0}).find(t=>"BUTTON"===t.nodeName||"button"===t.getAttribute("slot"))||null}#e(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="web-share"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();var x=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),k=[".DS_Store","Thumbs.db"],C=t=>{let{name:e}=t;if(e&&-1!==e.lastIndexOf(".")&&!t.type){let o=(e.split(".").pop()||"").toLowerCase(),i=x.get(o);i&&Object.defineProperty(t,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return t},S=(t,e)=>{let o=C(t);if("string"!=typeof o.path){let{webkitRelativePath:i}=t;Object.defineProperty(o,"path",{value:"string"==typeof e?e:i||t.name,writable:!1,configurable:!1,enumerable:!0})}return o},T=async t=>await new Promise((e,o)=>{t.readEntries(e,o)}),z=async t=>{let e=[],o=await T(t);for(;o.length>0;)e.push(...o),o=await T(t);return e},L=t=>new Promise((e,o)=>{t.file(o=>e(S(o,t.fullPath)),o)}),_=async t=>{let e=[],o=[];for(let e of t){if("file"!==e.kind)continue;let t=e.getAsEntry?e.getAsEntry():e.webkitGetAsEntry();o.push(t)}for(;o.length>0;){let t=o.shift();if(t){if(t.isFile){let o=await L(t);-1===k.indexOf(o.name)&&e.push(o)}else t.isDirectory&&o.push(...await z(t.createReader()))}}return e},R=async t=>{let e=[];for(let o of t)-1===k.indexOf(o.name)&&e.push(S(o));return e},M=async t=>t.dataTransfer?t.dataTransfer.items?await _(t.dataTransfer.items):await R(t.dataTransfer.files):await R(t.target.files),N="files-dropzone",q="TOO_MANY_FILES",O=document.createElement("template"),I=`
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
`;O.innerHTML=`
  <style>
    ${I}
  </style>

  <input type="file" id="file-input" hidden>

  <div part="dropzone" class="dropzone" id="dropzone" tabindex="0" role="button" aria-disabled="false">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`,(class t extends HTMLElement{#p=null;#t=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(O.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.getElementById("file-input"),this.#t=this.shadowRoot.getElementById("dropzone"))}static get observedAttributes(){return["accept","disabled","multiple"]}attributeChangedCallback(t,e,o){"accept"===t&&e!==o&&this.#p&&(this.#p.accept=this.accept),"disabled"===t&&e!==o&&this.#p&&(this.#p.disabled=this.disabled,this.disabled?(this.#t?.removeAttribute("tabindex"),this.#t?.setAttribute("aria-disabled","true")):(this.#t?.setAttribute("tabindex","0"),this.#t?.setAttribute("aria-disabled","false"))),"multiple"===t&&e!==o&&this.#p&&(this.#p.multiple=this.multiple)}connectedCallback(){this.#r("accept"),this.#r("disabled"),this.#r("maxFiles"),this.#r("maxSize"),this.#r("minSize"),this.#r("multiple"),this.#r("autoFocus"),this.#r("noStyle"),this.#p?.addEventListener("change",this.#i),this.#t?.addEventListener("dragenter",this.#E),this.#t?.addEventListener("dragover",this.#e),this.#t?.addEventListener("dragleave",this.#s),this.#t?.addEventListener("drop",this.#w),this.#t?.addEventListener("click",this.#m),this.#t?.addEventListener("keyup",this.#o),this.autoFocus&&this.#t?.focus()}disconnectedCallback(){this.#p?.removeEventListener("change",this.#i),this.#t?.removeEventListener("dragenter",this.#E),this.#t?.removeEventListener("dragover",this.#e),this.#t?.removeEventListener("dragleave",this.#s),this.#t?.removeEventListener("drop",this.#w),this.#t?.removeEventListener("click",this.#m),this.#t?.removeEventListener("keyup",this.#o)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get maxFiles(){let t=Number(this.getAttribute("max-files"))||0;return t<=0?1/0:Math.floor(Math.abs(t))}set maxFiles(t){this.setAttribute("max-files",null!=t?t.toString():t)}get maxSize(){let t=this.getAttribute("max-size");if(null===t)return 1/0;let e=Number(t);return Number.isNaN(e)?1/0:e}set maxSize(t){this.setAttribute("max-size",null!=t?t.toString():t)}get minSize(){let t=this.getAttribute("min-size");if(null===t)return 0;let e=Number(t);return Number.isNaN(e)?0:e}set minSize(t){this.setAttribute("min-size",null!=t?t.toString():t)}get multiple(){return this.hasAttribute("multiple")}set multiple(t){this.toggleAttribute("multiple",!!t)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(t){this.toggleAttribute("auto-focus",!!t)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(t){this.toggleAttribute("no-style",!!t)}#i=async t=>{try{this.#h(await M(t))}catch(t){this.dispatchEvent(new CustomEvent(`${N}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}};#E=()=>{this.disabled||this.dispatchEvent(new Event(`${N}-dragenter`,{bubbles:!0,composed:!0}))};#e=t=>{if(t.preventDefault(),this.disabled){t.dataTransfer.dropEffect="none";return}t.dataTransfer.dropEffect="copy",this.#t&&(this.#t.classList.add("dropzone--dragover"),this.#t.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${N}-dragover`,{bubbles:!0,composed:!0}))};#s=()=>{this.disabled||(this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${N}-dragleave`,{bubbles:!0,composed:!0})))};#w=async t=>{if(!this.disabled){t.preventDefault(),this.#t&&(this.#t.classList.remove("dropzone--dragover"),this.#t.part.remove("dropzone--dragover"));try{this.#h(await M(t))}catch(t){this.dispatchEvent(new CustomEvent(`${N}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}};#m=()=>{this.disabled||this.#p?.click()};#o=t=>{this.disabled||(" "===t.key||"Enter"===t.key)&&this.#p?.click()};#h(t){if(!Array.isArray(t)||!t.length)return;let e=[],o=[],i=t.length;if(!this.multiple&&i>1)for(let e of t)o.push({file:e,errors:[{code:q,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&i>this.maxFiles)for(let e of t)o.push({file:e,errors:[{code:q,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let i of t){let t=/*!
 * @georapbox/files-dropzone-element
 * A custom element that creates a drag and drop zone for files
 *
 * @version 2.0.1
 * @homepage https://github.com/georapbox/files-dropzone-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function(t,e=""){if(!e)return!0;let o=[...new Set(e.split(",").map(t=>t.trim()).filter(Boolean))],i=t.type,r=i.replace(/\/.*$/,"");for(let e of o)if("."===e.charAt(0)){if(-1!==t.name.toLowerCase().indexOf(e.toLowerCase(),t.name.length-e.length))return!0}else if(/\/\*$/.test(e)){if(r===e.replace(/\/.*$/,""))return!0}else if(i===e)return!0;return!1}(i,this.accept),r=i.size>this.maxSize,s=i.size<this.minSize;if(!t||r||s){let e=[];t||e.push({code:"INVALID_MIME_TYPE",message:`File type "${i.type}" is not accepted.`}),r&&e.push({code:"FILE_TOO_LARGE",message:`File size ${i.size} exceeds the maximum size of ${this.maxSize}.`}),s&&e.push({code:"FILE_TOO_SMALL",message:`File size ${i.size} is smaller than the minimum size of ${this.minSize}.`}),o.push({file:i,errors:e})}else e.push(i)}this.dispatchEvent(new CustomEvent(`${N}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e,rejectedFiles:o}})),e.length>0&&this.dispatchEvent(new CustomEvent(`${N}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:e}})),o.length>0&&this.dispatchEvent(new CustomEvent(`${N}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:o}})),this.#p&&(this.#p.value=this.#p.defaultValue)}openFileDialog(){this.disabled||this.#p?.click()}#r(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=N){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
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
`,(class t extends HTMLElement{#t=null;#p=null;#e=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild($.content.cloneNode(!0)),this.#t=this.shadowRoot?.querySelector("slot")??null}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&(this.disabled?this.#r():this.#i())}connectedCallback(){this.#m("disabled"),"ResizeObserver"in window&&(this.#p=new ResizeObserver(t=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:t}}))}),this.disabled||this.#i(),this.#t?.addEventListener("slotchange",this.#s))}disconnectedCallback(){this.#r(),this.#t?.removeEventListener("slotchange",this.#s)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}#i(){this.#t&&this.#p&&(this.#e.forEach(t=>this.#p?.unobserve(t)),this.#e=[],this.#t.assignedElements().forEach(t=>{this.#p?.observe(t),this.#e.push(t)}))}#r(){this.#p?.disconnect()}#s=()=>{this.disabled||this.#i()};#m(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e="resize-observer"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();/*!
 * @georapbox/modal-element
 * A custom element to create a modal, using the native dialog element under the hood.
 *
 * @version 1.8.0
 * @homepage https://github.com/georapbox/modal-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */var B=document.createElement("template"),D=`
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
  <style>${D}</style>

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
`,(class t extends HTMLElement{#t=null;#i=null;#w=null;#r=void 0;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(B.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.querySelector("dialog"),this.#i=this.shadowRoot.querySelector('slot[name="footer"]'),this.#w=this.shadowRoot.querySelector('slot[name="close"]'))}static get observedAttributes(){return["open","no-header","no-animations","no-close-button","close-label"]}attributeChangedCallback(t,e,o){if(null!==this.#t){if("open"===t&&e!==o&&(this.open?(this.#t.showModal(),this.dispatchEvent(new CustomEvent("me-open",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="hidden")):this.#t.close()),"no-header"===t&&e!==o){let t=this.#t.querySelector(".dialog__header");null!==t&&(t.hidden=this.noHeader)}if("no-animations"===t&&e!==o&&this.#t.classList.toggle("dialog--no-animations",this.noAnimations),"no-close-button"===t&&e!==o){let t=this.#t.querySelector(".dialog__close");null!==t&&(t.hidden=this.noCloseButton)}"close-label"===t&&e!==o&&this.#E()}}connectedCallback(){this.#p("open"),this.#p("staticBackdrop"),this.#p("noHeader"),this.#p("noAnimations"),this.#p("noCloseButton"),this.#p("fullscreen"),this.#p("preserveOverflow"),this.#p("placement"),this.#p("closeLabel"),this.#t?.addEventListener("click",this.#c),this.#t?.addEventListener("close",this.#o),this.#t?.addEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.addEventListener("submit",this.#h),this.#i?.addEventListener("slotchange",this.#d),this.#w?.addEventListener("slotchange",this.#a)}disconnectedCallback(){this.#r&&clearTimeout(this.#r),this.#t?.addEventListener("click",this.#c),this.#t?.removeEventListener("close",this.#o),this.#t?.removeEventListener("cancel",this.#m),this.#t?.querySelector('form[method="dialog"]')?.removeEventListener("submit",this.#h),this.#i?.removeEventListener("slotchange",this.#d),this.#w?.removeEventListener("slotchange",this.#a)}get open(){return this.hasAttribute("open")}set open(t){this.toggleAttribute("open",!!t)}get staticBackdrop(){return this.hasAttribute("static-backdrop")}set staticBackdrop(t){this.toggleAttribute("static-backdrop",!!t)}get noHeader(){return this.hasAttribute("no-header")}set noHeader(t){this.toggleAttribute("no-header",!!t)}get noAnimations(){return this.hasAttribute("no-animations")}set noAnimations(t){this.toggleAttribute("no-animations",!!t)}get noCloseButton(){return this.hasAttribute("no-close-button")}set noCloseButton(t){this.toggleAttribute("no-close-button",!!t)}get fullscreen(){return this.hasAttribute("fullscreen")}set fullscreen(t){this.toggleAttribute("fullscreen",!!t)}get preserveOverflow(){return this.hasAttribute("preserve-overflow")}set preserveOverflow(t){this.toggleAttribute("preserve-overflow",!!t)}get placement(){return this.getAttribute("placement")||"center"}set placement(t){this.setAttribute("placement",null!=t?t.toString():t)}get closeLabel(){return this.getAttribute("close-label")||"Close"}set closeLabel(t){this.setAttribute("close-label",null!=t?t.toString():t)}#E(){if(null===this.#t)return;let t=this.#t.querySelector(".dialog__close");null!==t&&((this.#w?.assignedElements()||[])?.some(t=>t.textContent?.replace(/\s/g,"")!=="")?t.removeAttribute("aria-label"):t.setAttribute("aria-label",this.closeLabel))}#s(){this.#r||(this.#t?.classList.add("dialog--pulse"),this.#r=setTimeout(()=>{this.#t?.classList.remove("dialog--pulse"),clearTimeout(this.#r),this.#r=void 0},300))}#o=()=>{this.open=!1,this.dispatchEvent(new CustomEvent("me-close",{bubbles:!0,composed:!0,detail:{element:this}})),document.body&&!this.preserveOverflow&&(document.body.style.overflow="")};#m=t=>{let e=this.#e("escape-key");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#s())};#h=t=>{let e=this.#e("close-button");this.dispatchEvent(e),e.defaultPrevented&&(t.preventDefault(),this.noAnimations||this.#s())};#c=t=>{let e=t.target;if(e===t.currentTarget){let t=this.#e("backdrop-click");this.dispatchEvent(t),t.defaultPrevented||this.staticBackdrop?this.noAnimations||this.#s():this.hide()}if(e instanceof HTMLElement&&null!==e.closest("[data-me-close]")){let t=this.#e("external-invoker");this.dispatchEvent(t),t.defaultPrevented?this.noAnimations||this.#s():this.hide()}};#d=()=>{if(null===this.#t)return;let t=this.#t.querySelector(".dialog__footer");if(null===t)return;let e=this.#i?.assignedNodes(),o=!!e&&e.length>0;t.hidden=!o};#a=()=>{this.#E()};#e(t){return new CustomEvent("me-request-close",{bubbles:!0,composed:!0,cancelable:!0,detail:{reason:t,element:this}})}#p(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}show(){this.open||(this.open=!0)}hide(){this.open&&(this.open=!1)}static defineCustomElement(e="modal-element"){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}}).defineCustomElement();let F="No barcode detected",H=["image/jpg","image/jpeg","image/png","image/apng","image/gif","image/webp","image/avif"];function P(t){return new Promise(function(e,o){t.oncomplete=t.onsuccess=function(){return e(t.result)},t.onabort=t.onerror=function(){return o(t.error)}})}function j(){if(!t){var e,o,i,r;e="keyval-store",o="keyval",(i=indexedDB.open(e)).onupgradeneeded=function(){return i.result.createObjectStore(o)},r=P(i),t=function(t,e){return r.then(function(i){return e(i.transaction(o,t).objectStore(o))})}}return t}let V="barcode-scanner/",U="settings",W="history",Z=async t=>{try{return[null,await function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j();return e("readonly",function(e){return P(e.get(t))})}(t)]}catch(t){return[t,void 0]}},G=async(t,e)=>{try{return await function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j();return o("readwrite",function(o){return o.put(e,t),P(o.transaction)})}(t,e),[null]}catch(t){return[t]}},Y=async()=>Z(V+U),K=async t=>G(V+U,t),X=async()=>Z(V+W),J=async t=>G(V+W,t),Q=(t,e=0,o=!1)=>{let i=null;if("function"!=typeof t)throw TypeError("Expected a function for first argument");return(...r)=>{clearTimeout(i),o&&!i&&t(...r),i=setTimeout(()=>{i=null,o||t(...r)},e)}},tt=()=>"function"==typeof HTMLDialogElement;function te(t){let e=document.getElementById("historyList");if(!e)return;let o=document.getElementById("emptyHistoryBtn");e.replaceChildren(),Array.isArray(t)&&0!==t.length?(o.hidden=!1,t.forEach((t,o)=>{let i;let r=document.createElement("li");r.setAttribute("data-value",t);try{new URL(t),(i=document.createElement("a")).href=t,i.setAttribute("target","_blank"),i.setAttribute("rel","noreferrer noopener")}catch{i=document.createElement("span")}i.textContent=t,i.setAttribute("id",`historyItem-${o}`);let s=document.createElement("div");s.className="history-modal__actions";let a=document.createElement("custom-clipboard-copy");a.setAttribute("id",`copyHistoryItem-${o}`),a.setAttribute("aria-label","Copy to clipboard"),a.setAttribute("aria-labelledby",`copyHistoryItem-${o} historyItem-${o}`),a.setAttribute("only-icon",""),a.setAttribute("value",t),s.appendChild(a);let n=document.createElement("button");n.type="button",n.className="history-modal__delete-action",n.setAttribute("data-action","delete"),n.setAttribute("id",`removeHistoryItem-${o}`),n.setAttribute("aria-label","Remove from history"),n.setAttribute("aria-labelledby",`removeHistoryItem-${o} historyItem-${o}`),n.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="1.125em" height="1.125em" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `,s.appendChild(n),r.appendChild(i),r.appendChild(s),e.appendChild(r)})):(e.innerHTML="<li>There are no saved items in history.</li>",o.hidden=!0)}async function to(t){let[,e]=await Y();if(!t||!e?.addToHistory)return;let[o,i=[]]=await X();if(!o&&Array.isArray(i)&&!i.find(e=>e===t)){let e=[...i,t],[o]=await J(e);o||te(e)}}async function ti(t){if(!t)return;let[e,o=[]]=await X();if(!e&&Array.isArray(o)){let e=o.filter(e=>e!==t),[i]=await J(e);i||te(e)}}async function tr(){let[t]=await J([]);t||te([])}async function ts(t,e){if(!t||!e)return;let o=t.querySelector("scan-result");if(o)o.setAttribute("value",e);else{let o=document.createElement("scan-result");o.setAttribute("value",e),o.setAttribute("role","alert"),o.setAttribute("aria-live","assertive"),o.setAttribute("aria-atomic","true"),t.appendChild(o)}}let ta=(()=>{let t=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(t)return e=>{let{duration:o,frequency:i,volume:r,type:s,onEnded:a}=e,n=t.createOscillator(),l=t.createGain();n.connect(l),l.connect(t.destination),r&&(l.gain.value=r),i&&(n.frequency.value=i),s&&(n.type=s),"function"==typeof a&&(n.onended=a),n.start(t.currentTime),n.stop(t.currentTime+(o||500)/1e3)}})();async function tn(t=0){if("function"==typeof window.navigator.vibrate)try{window.navigator.vibrate(t)}catch{}}async function tl(t={}){let{success:e=!0}=t,[,o]=await Y();o&&(o.beep&&ta(e?{duration:200,frequency:860,volume:.03,type:"square"}:{duration:300,frequency:200,volume:.05,type:"sawtooth"}),o.vibrate&&tn(e?100:200))}function td(t,e){if(!t||!e)return;let o=t.getBoundingClientRect();e.style.cssText=`width: ${o.width}px; height: ${o.height}px`}class tc{static async polyfill(){if(!("BarcodeDetector"in window))try{await r("bkcP3")}catch{throw Error("BarcodeDetector API is not supported by your browser.")}}static async getSupportedFormats(){return await window.BarcodeDetector.getSupportedFormats()}static async create(){return new tc(await window.BarcodeDetector.getSupportedFormats())}static async init(){try{await tc.polyfill();let t=await tc.create(),e=await tc.getSupportedFormats();return{barcodeReader:t,barcodeFormats:e,barcodeReaderError:null}}catch(t){return{barcodeReader:null,barcodeFormats:[],barcodeReaderError:t}}}constructor(t){this.barcodeReader=new window.BarcodeDetector({formats:t})}async detect(t){if(!this.barcodeReader)throw Error("BarcodeReader is not initialized.");let e=await this.barcodeReader.detect(t);if(Array.isArray(e)&&e.length>0)return e[0];throw Error("Could not detect barcode from provided source.")}}async function th(t){let[,e={}]=await Y();Object.entries(e).forEach(([e,o])=>{let i=t.querySelector(`[name="${e}"]`);i&&(i.checked=o)})}function tu(t={}){let{el:e,isTorchOn:o}={el:document.getElementById("torchButton"),isTorchOn:!1,...t},i=e.querySelectorAll("svg path");2===i.length&&(i[0].style.display=o?"none":"block",i[1].style.display=o?"block":"none",e.setAttribute("title",`Turn ${o?"off":"on"} flash`))}let tm=(t,e,o)=>(Number.isNaN(e)&&(e=0),Number.isNaN(o)&&(o=0),Math.min(Math.max(t,Math.min(e,o)),Math.max(e,o))),tp="video-capture",tb=`
  :host { display: block; box-sizing: border-box; }
  :host *, :host *::before, :host *::after { box-sizing: inherit;}
  :host([hidden]), [hidden], ::slotted([hidden]) { display: none; }
  video { display: block; }
  #output:empty { display: none; }
`,tg=document.createElement("template");tg.innerHTML=`
  <style>${tb}</style>
  <video part="video" playsinline></video>
  <div part="actions-container"><slot name="actions"></slot></div>
  <slot></slot>
`;class tf extends HTMLElement{#C={};#S=null;#T=null;constructor(){super(),this.#C=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tg.content.cloneNode(!0))}static get observedAttributes(){return["no-image","pan","tilt","zoom","torch"]}attributeChangedCallback(t,e,o){if(!this.isConnected)return;let i=this.getTrackCapabilities();if("zoom"===t&&e!==o&&"zoom"in this.#C){let t=!!("zoom"in i&&i.zoom?.min&&i.zoom?.max)&&this.zoom>=i.zoom.min&&this.zoom<=i.zoom.max;"number"==typeof this.zoom&&t&&this.#z("zoom",this.zoom)}"torch"===t&&e!==o&&"torch"in this.#C&&this.#z("torch",this.torch)}async connectedCallback(){if(this.#L("autoPlay"),this.#L("facingMode"),this.#L("zoom"),this.#L("torch"),this.#T=this.shadowRoot?.querySelector("video")||null,this.#T?.addEventListener("loadedmetadata",this.#_),!tf.isSupported())return this.dispatchEvent(new CustomEvent(`${tp}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#T?.removeEventListener("loadedmetadata",this.#_)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(t){this.toggleAttribute("auto-play",!!t)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(t){this.setAttribute("facing-mode",t)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(t){this.setAttribute("zoom",null!=t?t.toString():t)}get torch(){return this.hasAttribute("torch")}set torch(t){this.toggleAttribute("torch",!!t)}get loading(){return this.hasAttribute("loading")}#_=t=>{let e=t.target;e.play().then(()=>{this.dispatchEvent(new CustomEvent(`${tp}:video-play`,{bubbles:!0,composed:!0,detail:{video:e}}))}).catch(t=>{this.dispatchEvent(new CustomEvent(`${tp}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}).finally(()=>{this.removeAttribute("loading")})};#z(t,e){if(!this.#S)return;let[o]=this.#S.getVideoTracks(),i=this.getTrackCapabilities(),r=this.getTrackSettings(),s="pan"===t||"tilt"===t||"zoom"===t?tm(Number(e),i[t]?.min||1,i[t]?.max||1):e;t in r&&o.applyConstraints({advanced:[{[t]:s}]}).catch(()=>{})}#L(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}async startVideoStream(t){if(!tf.isSupported()||this.#S)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0,torch:this.torch},audio:!1};if("string"==typeof t&&t.trim().length>0&&(e.video.deviceId={exact:t}),"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,o=0]=this.cameraResolution.split("x").map(t=>Number(t));t>0&&o>0&&(e.video.width=t,e.video.height=o)}try{this.#S=await navigator.mediaDevices.getUserMedia(e),this.#T&&(this.#T.srcObject=this.#S),this.#z("pan",this.pan),this.#z("tilt",this.tilt),this.#z("zoom",this.zoom)}catch(t){this.dispatchEvent(new CustomEvent(`${tp}:error`,{bubbles:!0,composed:!0,detail:{error:t}}))}finally{this.removeAttribute("loading")}}restartVideoStream(t){this.#S&&this.#T&&this.stopVideoStream(),this.startVideoStream(t)}stopVideoStream(){if(!this.#T||!this.#S)return;let[t]=this.#S.getVideoTracks();t?.stop(),this.#T.srcObject=null,this.#S=null}getSupportedConstraints(){return tf.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#S)return{};let[t]=this.#S.getVideoTracks();return t&&"function"==typeof t.getCapabilities&&t.getCapabilities()||{}}getTrackSettings(){if(!this.#S)return{};let[t]=this.#S.getVideoTracks();return t&&"function"==typeof t.getSettings&&t.getSettings()||{}}static async getVideoInputDevices(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?(await navigator.mediaDevices.enumerateDevices()||[]).filter(t=>"videoinput"===t.kind&&!!t.deviceId):[]}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(t=tp){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tf)}}/*!
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
`;var tx=class t extends HTMLElement{#t=void 0;#p=null;#e=null;#i=null;#r=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tE.content.cloneNode(!0)),this.shadowRoot&&(this.#p=this.shadowRoot.querySelector("button"),this.#e=this.shadowRoot.querySelector('slot[name="copy"]'),this.#i=this.shadowRoot.querySelector('slot[name="success"]'),this.#r=this.shadowRoot.querySelector('slot[name="error"]'))}static get observedAttributes(){return["disabled"]}attributeChangedCallback(t,e,o){"disabled"===t&&e!==o&&this.#p&&(this.#p.disabled=this.disabled,this.#p.setAttribute("aria-disabled",this.disabled.toString()),this.#p.part.contains("button")&&this.#p.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#s("value"),this.#s("from"),this.#s("disabled"),this.#s("feedbackDuration"),this.#p?.addEventListener("click",this.#E)}disconnectedCallback(){this.#p?.removeEventListener("click",this.#E),this.#w()}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",null!=t?t.toString():t)}get from(){return this.getAttribute("from")||""}set from(t){this.setAttribute("from",null!=t?t.toString():t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",!!t)}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(t){this.setAttribute("feedback-duration",null!=t?t.toString():t)}async #m(){if(!(!this.value&&!this.from))try{let t="";if(this.value)t=this.value;else if(this.from){let e="getRootNode"in Element.prototype?this.#p?.getRootNode({composed:!0}):this.#p?.ownerDocument;if(!e||!(e instanceof Document||e instanceof ShadowRoot))return;let o=e.querySelector(this.from);if(!o)return;o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement?t=o.value:o instanceof HTMLAnchorElement&&o.hasAttribute("href")?t=o.href:t=o.textContent||""}await navigator.clipboard.writeText(t),this.#c(ty),this.dispatchEvent(new CustomEvent(`${tv}-success`,{bubbles:!0,composed:!0,detail:{value:t}}))}catch(t){this.#c(tw),this.dispatchEvent(new CustomEvent(`${tv}-error`,{bubbles:!0,composed:!0,detail:{error:t}}))}}#E=t=>{t.preventDefault(),this.disabled||this.#t||this.#m()};#c(t){this.#e&&(this.#e.hidden=!0),this.#i&&(this.#i.hidden=t!==ty),this.#r&&(this.#r.hidden=t!==tw),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error"),this.#p?.part.add(`button--${t}`),this.#t&&clearTimeout(this.#t),this.#t=setTimeout(()=>{this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove(`button--${t}`),this.#t=void 0},this.feedbackDuration)}#w(){this.#t&&clearTimeout(this.#t),this.#t=void 0,this.#e&&(this.#e.hidden=!1),this.#i&&(this.#i.hidden=!0),this.#r&&(this.#r.hidden=!0),this.#p?.part.remove("button--success"),this.#p?.part.remove("button--error")}#s(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(e=tv){"u">typeof window&&!window.customElements.get(e)&&window.customElements.define(e,t)}};class tk extends tx{constructor(){super();let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]');t.innerHTML=`
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
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(t,e,o){if(super.attributeChangedCallback(t,e,o),"only-icon"===t&&e!==o){let t=this.shadowRoot.querySelector('slot[name="copy"]'),e=this.shadowRoot.querySelector('slot[name="success"]'),o=t.querySelector(".text"),i=e.querySelector(".text");o&&(o.hidden=this.onlyIcon),i&&(i.hidden=this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(t){t?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#L("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#L(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tk)}}/*!
 * @georapbox/web-share-element
 * A custom element that implements the Web Share API to share user-defined data.
 *
 * @version 3.1.1
 * @homepage https://github.com/georapbox/web-share-element#readme
 * @author George Raptis <georapbox@gmail.com>
 * @license MIT
 */function tC(t){return null!==t&&"object"==typeof t?"share"in navigator&&"canShare"in navigator&&navigator.canShare(t):"share"in navigator}tk.defineCustomElement();let tS=`
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
  <style>${tS}</style>

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
`;class tz extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(tT.content.cloneNode(!0))}get value(){return this.getAttribute("value")}set value(t){this.setAttribute("value",t)}static get observedAttributes(){return["value"]}attributeChangedCallback(t,e,o){"value"===t&&e!==o&&this.#R(this.value)}connectedCallback(){if(this.#L("value"),!tC()){let t=this.shadowRoot.querySelector("web-share");t&&(t.hidden=!0)}}async #R(t){let e;let o=this.shadowRoot.querySelector(".result"),i=o?.querySelector(".result__actions"),r=o?.querySelector(".result__item");r&&r.remove();try{let[,o]=await Y();new URL(t),(e=document.createElement("a")).href=t,window.requestAnimationFrame(()=>e.focus()),o?.openWebPageSameTab||(e.setAttribute("target","_blank"),e.setAttribute("rel","noreferrer noopener")),o?.openWebPage&&e.click()}catch{e=document.createElement("span")}e.className="result__item",e.classList.toggle("result__item--no-barcode",t===F),e.textContent=t,o?.insertBefore(e,i);let s=t!==F,a=o?.querySelector("custom-clipboard-copy"),n=o?.querySelector("web-share");a&&s?(a.setAttribute("value",t),a.hidden=!1):(a.hidden=!0,a.removeAttribute("value")),n&&tC()&&s?(n.setAttribute("share-text",t),n.hidden=!1):(n.hidden=!0,n.removeAttribute("share-text"))}#L(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}static defineCustomElement(t="scan-result"){"undefined"==typeof window||window.customElements.get(t)||window.customElements.define(t,tz)}}tz.defineCustomElement(),async function(){let t;let e=new URLSearchParams(window.location.search).has("experimental"),o=document.querySelector("a-tab-group"),i=document.querySelector("video-capture"),r=document.getElementById("cameraPanel"),s=document.getElementById("filePanel"),a=document.getElementById("scanInstructions"),n=document.getElementById("scanBtn"),l=document.getElementById("dropzone"),d=document.querySelector("resize-observer"),c=document.getElementById("scanFrame"),h=document.getElementById("facingModeButton"),u=document.getElementById("torchButton"),m=document.getElementById("globalActions"),p=document.getElementById("historyBtn"),b=document.getElementById("historyDialog"),g=document.getElementById("settingsBtn"),f=document.getElementById("settingsDialog"),v=document.forms["settings-form"],y=document.getElementById("cameraSelect"),w=!0;tt()&&(m.hidden=!1,b.hidden=!1,f.hidden=!1);let{barcodeReader:E,barcodeFormats:A,barcodeReaderError:x}=await tc.init();if(x){let t=document.getElementById("barcodeReaderError");w=!1,m.hidden=!0,o.hidden=!0,t.hidden=!1,t.textContent=x?.message;return}i.addEventListener("video-capture:video-play",S,{once:!0}),i.addEventListener("video-capture:error",function(t){let e=t.detail.error;if("NotFoundError"===e.name)return;let o="NotAllowedError"===e.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":e.message;r.innerHTML=`<div class="alert alert-danger" role="alert" style="margin: 0;">${o}</div>`},{once:!0}),tf.defineCustomElement();let k=i?.shadowRoot?.querySelector("video");async function C(){a.hidden=!1;try{let e=await E.detect(k),o=e?.rawValue??"";if(!o)throw Error(F);window.cancelAnimationFrame(t),ts(r,o),to(o),a.hidden=!0,n.hidden=!1,c.hidden=!0,tl();return}catch{}w&&(t=window.requestAnimationFrame(()=>C()))}async function S(t){c.hidden=!1,td(t.detail.video,c),C();let o=t.target.getTrackSettings(),r=t.target.getTrackCapabilities(),s=document.getElementById("zoomLevel");if("facingMode"in o&&(h.hidden=!1),r?.torch&&(u.hidden=!1,i.hasAttribute("torch")&&tu({el:u,isTorchOn:!0})),o?.zoom&&r?.zoom){let t=document.getElementById("zoomControls"),e=r?.zoom?.min||0,a=r?.zoom?.max||10,n=o?.zoom||1;t.hidden=!1,s.textContent=n,t.addEventListener("click",t=>{let o=t.target.closest('[data-action="zoom-in"]'),r=t.target.closest('[data-action="zoom-out"]');o&&n<a&&(n+=.5),r&&n>e&&(n-=.5),s.textContent=n,i.zoom=n})}if(e){let t=await tf.getVideoInputDevices();t.forEach((t,e)=>{let o=document.createElement("option");o.value=t.deviceId,o.textContent=t.label||`Camera ${e+1}`,y.appendChild(o)}),t.length>1&&(y.hidden=!1)}}l.accept=H.join(","),th(v),function(t){if(!Array.isArray(t)||0===t.length)return;let e=document.getElementById("supportedFormats");e&&(e.textContent=`Supported formats: ${t.join(", ")}`)}(A),te((await X())[1]||[]),n.addEventListener("click",function(){n.hidden=!0,c.hidden=!1,function(t){if(!t)return;let e=t.querySelector("scan-result");e?.remove()}(r),C()}),o.addEventListener("a-tab-show",Q(function(t){let e=t.detail.tabId,o=document.querySelector("video-capture");if("cameraTab"===e){if(w=!0,!o)return;o.loading||r.querySelector("scan-result")||C(),"function"==typeof o.startVideoStream&&o.startVideoStream()}else"fileTab"===e&&(w=!1,null!=o&&"function"==typeof o.stopVideoStream&&o.stopVideoStream())},250)),l.addEventListener("files-dropzone-drop",function(t){!function(t){if(!t)return;let e=new Image,o=new FileReader;o.onload=o=>{let i=o.target.result;e.onload=async()=>{try{let t=await E.detect(e),o=t?.rawValue??"";if(!o)throw Error(F);ts(s,o),to(o),tl()}catch(t){ts(s,F),tl({success:!1})}},e.src=i,e.alt="Image preview",l.replaceChildren();let r=document.createElement("div");r.className="dropzone-preview",r.setAttribute("aria-hidden","true");let a=document.createElement("div");a.className="dropzone-preview__image-wrapper";let n=document.createElement("div");n.className="dropzone-preview__file-name",n.textContent=t.name,a.appendChild(e),r.appendChild(a),r.appendChild(n),l.prepend(r)},o.readAsDataURL(t)}(t.detail.acceptedFiles[0])}),d.addEventListener("resize-observer:resize",function(){td(i.shadowRoot.querySelector("video"),c)}),g.addEventListener("click",function(){f.open=!0}),v.addEventListener("change",function(t){let e={};t.currentTarget.querySelectorAll('input[type="checkbox"]').forEach(t=>e[t.name]=t.checked),K(e)}),p.addEventListener("click",function(){b.open=!0}),b.addEventListener("click",function(t){let e=t.target;if(e.closest('[data-action="delete"]')){let t=e.closest("li").dataset.value;if(window.confirm(`Delete history item ${t}?`)){ti(t);return}}if(e.closest("#emptyHistoryBtn")&&window.confirm("Empty history? This action cannot be undone.")){tr();return}}),h.addEventListener("click",function(){let t="user"===i.facingMode?"environment":"user";i.facingMode=t,"function"==typeof i.restartVideoStream&&i.restartVideoStream(y?.value||void 0)}),u.addEventListener("click",function(t){i.torch=!i.torch,tu({el:t.currentTarget,isTorchOn:i.hasAttribute("torch")})}),e&&y.addEventListener("change",function(t){let e=t.target.value||void 0;"function"==typeof i.restartVideoStream&&i.restartVideoStream(e)}),document.addEventListener("visibilitychange",function(){if("cameraTab"===o.querySelector("[selected]").getAttribute("id")){if("hidden"===document.visibilityState)w=!1,null!=i&&"function"==typeof i.stopVideoStream&&i.stopVideoStream();else{w=!0;let t=document.querySelector("video-capture");if(!t)return;t.loading||r.querySelector("scan-result")||C(),"function"==typeof t.startVideoStream&&t.startVideoStream()}}}),document.addEventListener("keydown",function(t){"Escape"===t.key&&function(){let t=o.querySelector("#cameraTab").hasAttribute("selected"),e=!n.hidden,i=f.hasAttribute("open"),r=b.hasAttribute("open");e&&t&&!(i||r)&&n.click()}()})}()}();
//# sourceMappingURL=index.a88fc2f6.js.map
