"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"create-button",title:"Create",swizzle:!0},i=void 0,s={unversionedId:"api-reference/mui/components/buttons/create-button",id:"api-reference/mui/components/buttons/create-button",title:"Create",description:"` uses Material UI  component. It uses the create method from useNavigation` under the hood. It can be useful to redirect the app to the create page route of resource.",source:"@site/docs/api-reference/mui/components/buttons/create.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/create-button",permalink:"/docs/api-reference/mui/components/buttons/create-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/create.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1680659365,formattedLastUpdatedAt:"Apr 5, 2023",frontMatter:{id:"create-button",title:"Create",swizzle:!0},sidebar:"someSidebar",previous:{title:"Clone",permalink:"/docs/api-reference/mui/components/buttons/clone-button"},next:{title:"Delete",permalink:"/docs/api-reference/mui/components/buttons/delete-button"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"<del><code>resourceNameOrRouteName</code></del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=l("PropTag"),d=l("PropsTable"),m={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<CreateButton>")," uses Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,o.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method from ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the create page route of resource."),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'const { Create } = RefineMui;\n// visible-block-start\nimport {\n    useDataGrid,\n    List,\n    // highlight-next-line\n    CreateButton,\n} from "@refinedev/mui";\nimport { DataGrid, GridColumns } from "@mui/x-data-grid";\n\nconst columns: GridColumns = [\n    { field: "id", headerName: "ID", type: "number" },\n    { field: "title", headerName: "Title", minWidth: 400, flex: 1 },\n];\n\nconst PostsList: React.FC = () => {\n    const { dataGridProps } = useDataGrid<IPost>();\n\n    return (\n        // highlight-next-line\n        <List headerButtons={<CreateButton />}>\n            <DataGrid {...dataGridProps} columns={columns} autoHeight />\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineMuiDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostsList,\n                create: () => <Create>Rest of the page here...</Create>,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"It is used to redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," action path of the given resource name. By default, the app redirects to the inferred resource's ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," action path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/mui";\n\nconst MyCreateComponent = () => {\n    return (\n        <CreateButton\n            // highlight-next-line\n            resource="categories"\n        />\n    );\n};\n\n// visible-block-end\n\nconst CreatePage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n                create: CreatePage,\n            },\n        ]}\n        DashboardPage={MyCreateComponent}\n    />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," action path of the resource, filling the necessary parameters in the route."),(0,o.kt)("h3",{id:"meta"},(0,o.kt)("inlineCode",{parentName:"h3"},"meta")),(0,o.kt)("p",null,"It is used to pass additional parameters to the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method. You can pass additional parameters or override the existing ones using the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," action route is defined by the pattern: ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/create"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n    return (\n        <CreateButton meta={{ authorId: "10" }} />\n    );\n};\n')),(0,o.kt)("h3",{id:"hidetext"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,o.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/mui";\n\nconst MyCreateComponent = () => {\n    return (\n        <CreateButton\n            // highlight-next-line\n            hideText={true}\n        />\n    );\n};\n\n// visible-block-end\n\nconst CreatePage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MyCreateComponent,\n                create: CreatePage,\n            },\n        ]}\n    />,\n);\n')),(0,o.kt)("h3",{id:"accesscontrol"},(0,o.kt)("inlineCode",{parentName:"h3"},"accessControl")),(0,o.kt)("p",null,"This prop can be used to skip access control check with its ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CreateButton } from "@refinedev/mui";\n\nexport const MyListComponent = () => {\n    return (\n        <CreateButton\n            accessControl={{ enabled: true, hideIfUnauthorized: true }}\n        />\n    );\n};\n')),(0,o.kt)("h3",{id:"resourcenameorroutename-"},(0,o.kt)("del",{parentName:"h3"},(0,o.kt)("inlineCode",{parentName:"del"},"resourceNameOrRouteName"))," ",(0,o.kt)(u,{deprecated:!0,mdxType:"PropTag"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," prop is deprecated. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,o.kt)("p",null,"It is used to redirect the app to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/create")," endpoint of the given resource name. By default, the app redirects to a URL with ",(0,o.kt)("inlineCode",{parentName:"p"},"/create")," defined by the name property of resource object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/mui";\n\nconst MyCreateComponent = () => {\n    return (\n        <CreateButton\n            // highlight-next-line\n            resourceNameOrRouteName="categories"\n        />\n    );\n};\n\n// visible-block-end\n\nconst CreatePage = () => {\n    const params = useRouterContext().useParams();\n    return <div>{JSON.stringify(params)}</div>;\n};\n\nrender(\n    <RefineMuiDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n            },\n            {\n                name: "categories",\n                create: CreatePage,\n            },\n        ]}\n        DashboardPage={MyCreateComponent}\n    />,\n);\n')),(0,o.kt)("p",null,"Clicking the button will trigger the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method of ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect to ",(0,o.kt)("inlineCode",{parentName:"p"},"/posts/create"),"."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(d,{module:"@refinedev/mui/CreateButton",mdxType:"PropsTable"}),(0,o.kt)("admonition",{title:"External Props",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},"Button"),".")))}h.isMDXComponent=!0}}]);