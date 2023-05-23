"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(y,l(l({ref:t},m),{},{components:n})):a.createElement(y,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"useDeleteMany",title:"useDeleteMany","example-title":"Ant Design useDeleteMany Hook","example-tags":["table","antd"]},l=void 0,i={unversionedId:"examples/table/antd/useDeleteMany",id:"examples/table/antd/useDeleteMany",title:"useDeleteMany",description:"The useDeleteMany is one of refine's data hooks. It removes more than one data from the database. We used the useDeleteMany hook to remove more than one record from our table in this scenario. On your table, you may remove multiple records by selecting them and pressing delete. You can get more information by examining the example.",source:"@site/docs/examples/table/antd/useDeleteMany.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useDeleteMany",permalink:"/docs/examples/table/antd/useDeleteMany",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/antd/useDeleteMany.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1684838106,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{id:"useDeleteMany",title:"useDeleteMany","example-title":"Ant Design useDeleteMany Hook","example-tags":["table","antd"]},sidebar:"someSidebar",previous:{title:"Table Filter",permalink:"/docs/examples/table/antd/tableFilter"},next:{title:"useEditableTable",permalink:"/docs/examples/table/antd/useEditableTable"}},s={},p=[],m=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," is one of ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s data hooks. It removes more than one data from the database. We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," hook to remove more than one record from our table in this scenario. On your table, you may remove multiple records by selecting them and pressing delete. You can get more information by examining the example."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDeleteMany/"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useDeleteMany data hook documentation for more information. \u2192")),(0,r.kt)(m,{path:"table-antd-use-delete-many",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);