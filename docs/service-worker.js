if(!self.define){let e,d={};const i=(i,a)=>(i=new URL(i+".js",a).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let c={};const n=e=>i(e,r),s={module:{uri:r},exports:c,require:n};d[r]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(f(...e),c)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"es.92f45a66.js",revision:"72002a25658e465522780223e501d6e3"},{url:"es.92f45a66.js.map",revision:"232294df53391e02bcdf838832a9e154"},{url:"es.d4e77c4a.js",revision:"859b102f57b9121dcfbad4a09cbbb45b"},{url:"es.d4e77c4a.js.map",revision:"2fc09d0a5d66fe799a1bbc94312ffa33"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"index.6681d96c.js",revision:"23789d062c9a7fb30b4591027ead1915"},{url:"index.6681d96c.js.map",revision:"a8550c47c9857e7ac3198d9949705ccd"},{url:"index.74eb6ae8.css",revision:"ff7ff2a832f9f2f5da58c254f2304b20"},{url:"index.74eb6ae8.css.map",revision:"7b0c99243e43638ff7fd7b68a642e1b6"},{url:"index.b48009fa.js",revision:"8a2ef51d227eb6e4459321da0302d3c5"},{url:"index.b48009fa.js.map",revision:"7fc1aa85a77c5ec3613701e05bddb4ff"},{url:"index.e89179bb.js",revision:"2e8c363f65ffc2a3e3863b368030de7b"},{url:"index.e89179bb.js.map",revision:"f2460e1eaffc2e2aa556ab7108ab72c0"},{url:"index.f08266a1.js",revision:"2e7959b913adb23622d2a7d496331430"},{url:"index.f08266a1.js.map",revision:"916380262d400a26dadf63d16596811b"},{url:"index.f7dd4fad.css",revision:"1c45add9d2c03819dbba14870a2279f5"},{url:"index.f7dd4fad.css.map",revision:"0309ebe386dba98921d6ca9326cdd347"},{url:"index.html",revision:"1613d08110757b3ceb6d3571b6db596f"},{url:"index.runtime.4582cef4.js",revision:"bd8abc1b94cbd762950f782277a2b91a"},{url:"index.runtime.4582cef4.js.map",revision:"a06e7638b5f6f221c5d028e7d747c2c2"},{url:"index.runtime.d330ff4a.js",revision:"9bb38bfaf60ba47c93d4cd078d7c6d44"},{url:"index.runtime.d330ff4a.js.map",revision:"f3210d69c88e752502b699ad52a5a4cd"},{url:"manifest.webmanifest",revision:"f68f9dd2c9446d231a3238e515681a14"},{url:"screenshot-dark.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"screenshot-light.508f6fd6.png",revision:"7fc24a5f18e0bd76c0ca44fa6d054f5f"},{url:"spinner-dark.b333552b.svg",revision:"6cfd3a61069a549a059354e0ec0202dc"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
