(()=>{var e={};e.id=404,e.ids=[404],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3122:e=>{"use strict";e.exports=require("undici")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},7282:e=>{"use strict";e.exports=require("process")},2781:e=>{"use strict";e.exports=require("stream")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},3128:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c}),r(7791),r(5116),r(5866);var s=r(3191),o=r(8716),i=r(7922),l=r.n(i),a=r(5231),n={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>a[e]);r.d(t,n);let c=["",{children:["blog",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7791)),"D:\\Developing\\web-development\\React\\portfolio-nextjs\\portfolio\\src\\app\\blog\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5116)),"D:\\Developing\\web-development\\React\\portfolio-nextjs\\portfolio\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],d=["D:\\Developing\\web-development\\React\\portfolio-nextjs\\portfolio\\src\\app\\blog\\page.tsx"],p="/blog/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/blog/page",pathname:"/blog",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},99:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},3134:(e,t,r)=>{Promise.resolve().then(r.bind(r,5777))},6490:(e,t,r)=>{Promise.resolve().then(r.bind(r,8927))},8927:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(326),o=r(434);let i=({blogs:e})=>s.jsx("div",{className:"p-4 space-y-4",children:e.map(e=>(0,s.jsxs)("div",{className:"flex justify-between items-center p-4 border rounded-lg hover:shadow-lg",children:[s.jsx(o.default,{href:`/blog/${e.id}`,className:"text-xl font-bold text-blue-600",children:e.title}),s.jsx("span",{className:"text-gray-500",children:e.date.toDate().toDateString()})]},e.id))});var l=r(7577);r(76),r(3866);var a=r(9594);let n=function(){let[e,t]=(0,l.useState)([]),[r,o]=(0,l.useState)(!0);return r?s.jsx(a.Z,{}):0===e.length?s.jsx("p",{className:"flex justify-center mt-5",children:"Blogs Not Found."}):s.jsx("div",{className:"container mx-auto",children:s.jsx("div",{className:"mx-auto mt-3",children:s.jsx(i,{blogs:e})})})}},5777:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(326),o=r(434),i=r(5047),l=r(983),a=r(3866);function n(){let e=(0,i.usePathname)(),[t]=(0,l.F_)(a.I);return(0,s.jsxs)("header",{className:"flex flex-col p-10 justify-between items-center bg-black text-white",children:[s.jsx("h1",{className:`text-2xl font-bold ${t?"text-blue-600":"text-white"}`,children:"bugrayuksel.dev"}),s.jsx("nav",{children:(0,s.jsxs)("ul",{className:"flex space-x-4 mt-10",children:[s.jsx("li",{children:s.jsx(o.default,{className:`relative pb-2 ${"/"===e?"border-b-2 border-blue-500":""}`,href:"/",children:"/home"})}),s.jsx("li",{children:s.jsx(o.default,{className:`relative pb-2 ${"/projects"===e?"border-b-2 border-blue-500":""}`,href:"/projects",children:"/projects"})}),s.jsx("li",{children:s.jsx(o.default,{className:`relative pb-2 ${"/blog"===e?"border-b-2 border-blue-500":""}`,href:"/blog",children:"/blog"})}),s.jsx("li",{children:s.jsx(o.default,{className:`relative pb-2 ${"/contact"===e?"border-b-2 border-blue-500":""}`,href:"/contact",children:"/contact"})})]})})]})}},9594:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(326);r(7577);let o=()=>s.jsx("div",{className:"flex justify-center items-center p-32",children:s.jsx("div",{className:"border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"})})},3866:(e,t,r)=>{"use strict";r.d(t,{I:()=>n,db:()=>a});var s=r(2585),o=r(76),i=r(8967);let l=(0,s.C6)().lenght?(0,s.Mq)():(0,s.ZF)({apiKey:"AIzaSyDtOwaZiwkojo1JB3EDgrAitMhrWrhynjU",authDomain:"portfolio-4ec6c.firebaseapp.com",projectId:"portfolio-4ec6c",storageBucket:"portfolio-4ec6c.appspot.com",messagingSenderId:"54652163419",appId:"1:54652163419:web:1ab3e143f3e816e423367e"}),a=(0,o.ad)(l),n=(0,i.v0)(l)},7791:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>a});var s=r(8570);let o=(0,s.createProxy)(String.raw`D:\Developing\web-development\React\portfolio-nextjs\portfolio\src\app\blog\page.tsx`),{__esModule:i,$$typeof:l}=o;o.default;let a=(0,s.createProxy)(String.raw`D:\Developing\web-development\React\portfolio-nextjs\portfolio\src\app\blog\page.tsx#default`)},5116:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>p});var s=r(9510),o=r(7424),i=r.n(o);r(5023);var l=r(8570);let a=(0,l.createProxy)(String.raw`D:\Developing\web-development\React\portfolio-nextjs\portfolio\src\components\Header.tsx`),{__esModule:n,$$typeof:c}=a;a.default;let d=(0,l.createProxy)(String.raw`D:\Developing\web-development\React\portfolio-nextjs\portfolio\src\components\Header.tsx#default`),p={title:"bugrayuksel | dev",description:"Generated by create next app"};function u({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:i().className,children:[s.jsx("header",{children:s.jsx(d,{})}),s.jsx("main",{children:e})]})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[852],()=>r(3128));module.exports=s})();