if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const s=e=>c(e,n),f={module:{uri:n},exports:r,require:s};i[n]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.cbfc4d72.png",revision:"032bc7d807514f1eb6efb000f9fdff26"},{url:"camera-scanner.42ef82b0.png",revision:"6379ba2fd5e1e6b16874979a282077b8"},{url:"es.ca5c1521.js",revision:"bdeced2ed83be1a8eb203ed157815830"},{url:"es.ca5c1521.js.map",revision:"968d20e007cc9032d81b9cca55598b26"},{url:"es.f464ecf6.js",revision:"de7f0cea08c219da2a74aebe279d0ee9"},{url:"es.f464ecf6.js.map",revision:"b529129d5c3dae342f534ca5db5596ec"},{url:"favicon.a05bdb0a.ico",revision:"ece89efb9e6bf43b4a1a4bddc3e6c0ee"},{url:"icon-large.cd373832.png",revision:"52b2012c4056f0da66ea3ed518dd8e10"},{url:"icon-medium.ede1e868.png",revision:"03ee967b5d869e1ae1e8e63ed13edbf2"},{url:"icon-small.81a93e10.png",revision:"70955d3c62fbbfeec3ce088f908d6f57"},{url:"image-scanner.82276613.png",revision:"c878ced18794653941259faa24e9d41c"},{url:"index.89fea2df.js",revision:"e766b86ea95dd26bdc209d9546647a22"},{url:"index.89fea2df.js.map",revision:"f5cdc0d925ea779272df41845f8b5cac"},{url:"index.98a7b582.js",revision:"3fa2ad8d96c4c904414f858a549cdb14"},{url:"index.98a7b582.js.map",revision:"075a517ce0210c3eb84f9da7e2f21645"},{url:"index.ab108a6f.js",revision:"de406a8ab20562ce9d4a64988945abb3"},{url:"index.ab108a6f.js.map",revision:"4994e5d820efec33a01de43a4c42dc56"},{url:"index.bb1ce697.js",revision:"82f689cbc7405307d1eb42c297e81360"},{url:"index.bb1ce697.js.map",revision:"a581e787ac4468ce653d4028ea2d6f76"},{url:"index.bfd81d9e.css",revision:"13717f2261e5c8211f6855a2b40d1826"},{url:"index.bfd81d9e.css.map",revision:"8fbeaad434822960c6bab805569a4a9b"},{url:"index.html",revision:"a6368caf7611c3faa03588ca2c8454b5"},{url:"index.runtime.9e2a33c6.js",revision:"ed3a080759bde8d341be28e7342a99bf"},{url:"index.runtime.9e2a33c6.js.map",revision:"5fde3562314e598576cb5809cf8e197e"},{url:"index.runtime.cd583fab.js",revision:"23940e6d09cc0da65485335aed6a3387"},{url:"index.runtime.cd583fab.js.map",revision:"19e4891a9ecbc4788c9d347848c815d4"},{url:"manifest.webmanifest",revision:"d7bd1470f20cc3f518b91def065661ae"},{url:"spinner-light.4452ed29.svg",revision:"609c6274c68c19f6badaf5488b6aeef2"}],{})}));
//# sourceMappingURL=service-worker.js.map
