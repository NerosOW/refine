"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,b=s["".concat(p,".").concat(d)]||s[d]||l[d]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},35706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={id:"mui-breadcrumb",title:"Breadcrumb"},i=void 0,c={unversionedId:"api-reference/mui/components/mui-breadcrumb",id:"api-reference/mui/components/mui-breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Material UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/api-reference/mui/components/breadcrumb.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/mui-breadcrumb",permalink:"/docs/api-reference/mui/components/mui-breadcrumb",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mui/components/breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"mui-breadcrumb",title:"Breadcrumb"},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/mui/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/api-reference/mui/components/buttons/clone-button"}},p={},m=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u={toc:m};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," components using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,a.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/blob/master/packages/mui/src/components/breadcrumb/index.tsx"},"source-code")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to see how it is built. You can also create your custom breadcrumb component inspired by the source code.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"breadcrumbprops"},(0,a.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," component so it can be configured with the ",(0,a.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}>\n            ...\n        </List>\n    );\n};\n')),(0,a.kt)("h3",{id:"showhome"},(0,a.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,a.kt)("p",null,"If your application has a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#dashboardpage"},"DashboardPage"),", the home button is shown to the top of the hierarchy by default. If you don't want to show the home button, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return <List breadcrumb={<Breadcrumb showHome={false} />}>...</List>;\n};\n')),(0,a.kt)("h3",{id:"hideicons"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,a.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb hideIcons />}>...</List>;\n    );\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"breadcrumbProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Passes properties for ",(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},(0,a.kt)("inlineCode",{parentName:"a"},"<Breadcrumb>"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/react-breadcrumbs/#api"},"BreadcrumbProps")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"showHome"),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the home button if application has ",(0,a.kt)("inlineCode",{parentName:"td"},"DashboardPage")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideIcons"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide resource icons"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))))}l.isMDXComponent=!0}}]);