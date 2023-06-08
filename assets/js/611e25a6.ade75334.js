"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(c,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34272:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"breadcrumb",title:"Breadcrumb",swizzle:!0},i=void 0,s={unversionedId:"api-reference/antd/components/breadcrumb",id:"version-3.xx.xx/api-reference/antd/components/breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Ant Design's Breadcrumb components using the useBreadcrumb` hook.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/breadcrumb.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/breadcrumb",permalink:"/docs/3.xx.xx/api-reference/antd/components/breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/breadcrumb.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1686222297,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{id:"breadcrumb",title:"Breadcrumb",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/antd/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/clone-button"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=(l="PropsTable",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Ant Design's ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," components using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"},(0,o.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/show/123 previewHeight=280px disableScroll",live:!0,url:"http://localhost:3000/posts/show/123",previewHeight:"280px",disableScroll:!0},'// visible-block-start\nimport { Show, Breadcrumb } from "@pankod/refine-antd";\n\nconst PostShow: React.FC = () => {\n    return (\n        <Show\n            // highlight-next-line\n            breadcrumb={<Breadcrumb />}\n        >\n            <p>Content of your show page...</p>\n        </Show>\n    );\n};\n// visible-block-end\n\nconst PostList = () => {\n    return (\n        <RefineAntd.List>\n            <p>Content of your list page...</p>\n        </RefineAntd.List>\n    )\n};\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/show/123"]}\n        resources={[\n            {\n                name: "posts",\n                icon: <RefineAntd.Icons.ProfileOutlined style={{ width: "18px", height: "18px" }} />,\n                show: PostShow,\n                list: PostList,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"breadcrumbprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/breadcrumb"},"Breadcrumb")," component so it can be configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"showhome"},(0,o.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,o.kt)("p",null,"If your application has a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#dashboardpage"},"DashboardPage"),", the home button is shown to the top of the hierarchy by default. If you don't want to show the home button, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb showHome={false} />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"hideicons"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,o.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-next-line\n            breadcrumb={<Breadcrumb hideIcons />}\n        >\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(d,{module:"@pankod/refine-antd/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://ant.design/components/breadcrumb/#API)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://ant.design/components/breadcrumb/#Breadcrumb)",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);