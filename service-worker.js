if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const s=e=>c(e,n),f={module:{uri:n},exports:r,require:s};i[n]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"camera-scanner.42ef82b0.png",revision:"6379ba2fd5e1e6b16874979a282077b8"},{url:"es.ca5c1521.js",revision:"bdeced2ed83be1a8eb203ed157815830"},{url:"es.ca5c1521.js.map",revision:"968d20e007cc9032d81b9cca55598b26"},{url:"es.f464ecf6.js",revision:"de7f0cea08c219da2a74aebe279d0ee9"},{url:"es.f464ecf6.js.map",revision:"b529129d5c3dae342f534ca5db5596ec"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"image-scanner.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"index.877386eb.css",revision:"6d4a4687821d4f0c0317a00a1b45a0aa"},{url:"index.877386eb.css.map",revision:"7a31f711c08d51bb0e1f1b39b20b2224"},{url:"index.98a7b582.js",revision:"3fa2ad8d96c4c904414f858a549cdb14"},{url:"index.98a7b582.js.map",revision:"075a517ce0210c3eb84f9da7e2f21645"},{url:"index.a88fc2f6.js",revision:"231653580a328102ada7f548b073e4ae"},{url:"index.a88fc2f6.js.map",revision:"0852c74d18ef34a6f97e11a87e54239e"},{url:"index.bb1ce697.js",revision:"82f689cbc7405307d1eb42c297e81360"},{url:"index.bb1ce697.js.map",revision:"a581e787ac4468ce653d4028ea2d6f76"},{url:"index.e93d0af3.js",revision:"443fe6705dc3ba2b1b6ac6a6b2735a5e"},{url:"index.e93d0af3.js.map",revision:"4c37bd3298ca286f6b6f6eb052fac6ef"},{url:"index.html",revision:"d6f798be2e35b74352d5fc6be874de7f"},{url:"index.runtime.6396ce86.js",revision:"18bc07404f9e6bce0a0e72564da49825"},{url:"index.runtime.6396ce86.js.map",revision:"8008d4dda6d221149430cbaba6223cb8"},{url:"index.runtime.a8de4955.js",revision:"cb02d76f38cec6eeccbcb4c29cd07039"},{url:"index.runtime.a8de4955.js.map",revision:"98db81f2f90d5aa183fdd83bc3c53fc8"},{url:"manifest.webmanifest",revision:"d7bd1470f20cc3f518b91def065661ae"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
