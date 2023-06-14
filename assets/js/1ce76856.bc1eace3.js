"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88689],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"lerna",title:"Monorepo with Lerna","example-tags":["build-systems"]},s=void 0,i={unversionedId:"examples/build-systems/lerna",id:"examples/build-systems/lerna",title:"Monorepo with Lerna",description:"Lerna is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository. In this example, you'll see how to use Lerna to setup a monorepo with refine.",source:"@site/docs/examples/build-systems/lerna.md",sourceDirName:"examples/build-systems",slug:"/examples/build-systems/lerna",permalink:"/docs/examples/build-systems/lerna",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/build-systems/lerna.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1686731335,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"lerna",title:"Monorepo with Lerna","example-tags":["build-systems"]},sidebar:"someSidebar",previous:{title:"Monorepo with Turbo",permalink:"/docs/examples/build-systems/turbo"},next:{title:"Using Nx",permalink:"/docs/examples/build-systems/nx"}},p={},l=[{value:"Using <code>bootstrap</code>",id:"using-bootstrap",level:2}],m=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org"},"Lerna")," is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository. In this example, you'll see how to use Lerna to setup a monorepo with ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("p",null,"If you're going to use ",(0,o.kt)("strong",{parentName:"p"},"refine")," in your monorepo setup or create one from scratch, you can use this example as a starting point."),(0,o.kt)(m,{path:"monorepo-with-lerna",hideSandbox:!0,mdxType:"CodeSandboxExample"}),(0,o.kt)("h2",{id:"using-bootstrap"},"Using ",(0,o.kt)("inlineCode",{parentName:"h2"},"bootstrap")),(0,o.kt)("p",null,"Lerna provides a ",(0,o.kt)("a",{parentName:"p",href:"https://lerna.js.org/docs/features/legacy-package-management#legacy-bootstrap-command"},(0,o.kt)("inlineCode",{parentName:"a"},"bootstrap"))," command that links packages together. This is useful when you want to use packages from the same monorepo in your application before publishing them to a registry."),(0,o.kt)("p",null,"In this example, you'll find a basic setup of ",(0,o.kt)("inlineCode",{parentName:"p"},"lerna")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap")," command. "),(0,o.kt)(m,{path:"monorepo-with-lerna-bootstrap",hideSandbox:!0,mdxType:"CodeSandboxExample"}))}d.isMDXComponent=!0}}]);