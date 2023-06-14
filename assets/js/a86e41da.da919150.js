"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"command-palette",title:"Command Palette",sidebar_label:"Command Palette"},i=void 0,s={unversionedId:"packages/documentation/command-palette",id:"packages/documentation/command-palette",title:"Command Palette",description:"refine supports the command palette feature and use the",source:"@site/docs/packages/documentation/command-palette.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/command-palette",permalink:"/docs/packages/documentation/command-palette",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/documentation/command-palette.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1686731335,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"command-palette",title:"Command Palette",sidebar_label:"Command Palette"},sidebar:"someSidebar",previous:{title:"Inferencer",permalink:"/docs/packages/documentation/inferencer"},next:{title:"React Table",permalink:"/docs/packages/documentation/react-table"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Access Control",id:"access-control",level:2},{value:"Actions",id:"actions",level:2},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Example",id:"example",level:2}],l=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," supports the command palette feature and use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("strong",{parentName:"a"},"kbar")),". ",(0,r.kt)("strong",{parentName:"p"},"kbar")," is a fully extensible ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows) interface for your site."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},"@refinedev/kbar")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @refinedev/kbar\n")),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",null,"First of all, you need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/kbar")," library and we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineKbarProvider")," to wrap the whole application."),(0,r.kt)("p",null,"After that, we should mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineKbar")," component inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'tile="src/App.tsx"',tile:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\n// highlight-next-line\nimport { RefineKbarProvider } from "@refinedev/kbar";\n\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\nimport { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";\nimport {\n    CategoriesList,\n    CategoriesCreate,\n    CategoriesEdit,\n} from "pages/categories";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <RefineKbarProvider>\n                <Refine\n                    resources={[\n                        {\n                            name: "posts",\n                            list: "/posts",\n                            create: "/posts/create",\n                            edit: "/posts/edit/:id",\n                            show: "/posts/show/:id",\n                            meta: {\n                                icon: <Icons.StarOutlined />,\n                                canDelete: true,\n                            }\n                        },\n                        {\n                            name: "categories",\n                            list: "/categories",\n                            create: "/categories/create",\n                            edit: "/categories/edit/:id",\n                            meta: {\n                                canDelete: true,\n                            }\n                        },\n                    ]}\n                >\n                    {/* highlight-next-line */}\n                    <RefineKbar />\n                    <Routes>\n                        <Route path="categories">\n                            <Route index element={<CategoriesList />} />\n                            <Route path="create" element={<CategoriesCreate />} />\n                            <Route path="edit/:id" element={<CategoriesEdit />} />\n                        </Route>\n                        <Route path="posts">\n                            <Route index element={<PostList />} />\n                            <Route path="create" element={<PostCreate />} />\n                            <Route path="edit/:id" element={<PostEdit />} />\n                            <Route path="show/:id" element={<PostShow />} />\n                        </Route>\n                    </Routes>\n                </Refine>\n            </RefineKbarProvider>\n        </BrowserRouter>\n    );\n};\n')),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/packages/command-palette/kbar/refine-kbar-example.gif",alt:"Refine Kbar Example"}),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"access-control"},"Access Control"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," respects the access control settings of your App. To learn more about access control, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"Access Control Provider")," section of the documentation. Also, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"canDelete")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," to check the delete accessibility of the command palette.",(0,r.kt)("br",null),"\nFor more information check out the source code of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-kbar"))," package"),(0,r.kt)("h2",{id:"actions"},"Actions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," uses your resources to create default actions. Which includes; ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),". It will hide the current action of the page you are in."),(0,r.kt)("h2",{id:"custom-actions"},"Custom Actions"),(0,r.kt)("p",null,"If we want to add custom actions to the command palette, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar"),".\ncheck the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/finefoods-material-ui/src/hooks/useOrderCustomKbarActions/index.tsx"},(0,r.kt)("inlineCode",{parentName:"a"},"refine-finefoods"))," example. Also you can find more information about actions in the ",(0,r.kt)("a",{parentName:"p",href:"https://kbar.vercel.app/docs/concepts/actions"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar"))," package."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAction")," to create a new action and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useRegisterActions")," to register the action to the command palette."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Custom action example"',title:'"Custom',action:!0,'example"':!0},'import { createAction, useRegisterActions } from "@refinedev/kbar";\n\nconst customAction = createAction({\n    name: "my custom action",\n    section: "custom-actions",\n    perform: () => {\n        console.log("onSelect my custom action");\n    },\n    priority: Priority.HIGH,\n});\n\nuseRegisterActions(customAction);\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"refine-kbar")," exports the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar")),". You can use all ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.kt)("inlineCode",{parentName:"a"},"kbar"))," features.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(l,{path:"command-palette-kbar",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);