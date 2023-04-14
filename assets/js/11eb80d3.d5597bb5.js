"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"filter",title:"Table Filter","example-title":"Filtering on Material UI Table","example-tags":["table","filter","mui","react-router"]},l=void 0,i={unversionedId:"examples/table/mui/filter",id:"examples/table/mui/filter",title:"Table Filter",description:"The Table Filter option allows you to apply filters to the data in your table. The example below demonstrates how you might filter and display data in your table based on certain field parameters.",source:"@site/docs/examples/table/mui/filter.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/filter",permalink:"/docs/examples/table/mui/filter",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/mui/filter.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681457752,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{id:"filter",title:"Table Filter","example-title":"Filtering on Material UI Table","example-tags":["table","filter","mui","react-router"]},sidebar:"someSidebar",previous:{title:"Cursor Pagination",permalink:"/docs/examples/table/mui/cursor-pagination"},next:{title:"useDataGrid",permalink:"/docs/examples/table/mui/useDataGrid"}},p={},s=[],u=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const m={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Table Filter")," option allows you to apply filters to the data in your table. The example below demonstrates how you might filter and display data in your table based on certain field parameters.\nBy filtering your table's data you may only see the fields you want."),(0,n.kt)(u,{path:"table-mui-table-filter",mdxType:"CodeSandboxExample"}))}d.isMDXComponent=!0}}]);