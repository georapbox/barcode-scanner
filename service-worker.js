if(!self.define){let e,c={};const i=(i,d)=>(i=new URL(i+".js",d).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let a={};const s=e=>i(e,r),f={module:{uri:r},exports:a,require:s};c[r]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(n(...e),a)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"camera-scanner.42ef82b0.png",revision:"6379ba2fd5e1e6b16874979a282077b8"},{url:"es.ca5c1521.js",revision:"bdeced2ed83be1a8eb203ed157815830"},{url:"es.ca5c1521.js.map",revision:"968d20e007cc9032d81b9cca55598b26"},{url:"es.f464ecf6.js",revision:"de7f0cea08c219da2a74aebe279d0ee9"},{url:"es.f464ecf6.js.map",revision:"b529129d5c3dae342f534ca5db5596ec"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"image-scanner.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"index.0a6e9ff0.js",revision:"e66adafae53cc475830c0df99c0a55c1"},{url:"index.0a6e9ff0.js.map",revision:"1c55cd36137e39c07084be23655015f1"},{url:"index.65ac40f6.js",revision:"797a08c9ecd0ba2c3bdb16996eac9d85"},{url:"index.65ac40f6.js.map",revision:"c94ecb2828ba5141d9e715b7148ea5f1"},{url:"index.98a7b582.js",revision:"3fa2ad8d96c4c904414f858a549cdb14"},{url:"index.98a7b582.js.map",revision:"075a517ce0210c3eb84f9da7e2f21645"},{url:"index.bb1ce697.js",revision:"82f689cbc7405307d1eb42c297e81360"},{url:"index.bb1ce697.js.map",revision:"a581e787ac4468ce653d4028ea2d6f76"},{url:"index.f9910dec.css",revision:"e74c361efd14b6bd66529ceb2d0509c8"},{url:"index.f9910dec.css.map",revision:"4d910ee564cda4bf75e25d0e5b921b3d"},{url:"index.html",revision:"a3054a7a99d2a78b22dd6c26f8dc15bd"},{url:"index.runtime.0705da47.js",revision:"ca64393056c1696fdef5b80d35de93b6"},{url:"index.runtime.0705da47.js.map",revision:"b3e90ecd36d81a97cdc773cb87b3161d"},{url:"index.runtime.e2efd653.js",revision:"19e66cd660e72f384683f025433508b4"},{url:"index.runtime.e2efd653.js.map",revision:"3858bf935d67ce2f94f33ae650ed4938"},{url:"manifest.webmanifest",revision:"d7bd1470f20cc3f518b91def065661ae"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
