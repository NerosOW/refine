"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o=n.p+"assets/images/cardHeaderPropsTitle-5b796ca313e435d0279b259e60cdd2cb.png",i={id:"list",title:"List",sidebar_label:"List"},p=void 0,l={unversionedId:"api-reference/mui/components/basic-views/list",id:"api-reference/mui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/docs/api-reference/mui/components/basic-views/list.md",sourceDirName:"api-reference/mui/components/basic-views",slug:"/api-reference/mui/components/basic-views/list",permalink:"/docs/api-reference/mui/components/basic-views/list",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mui/components/basic-views/list.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"list",title:"List",sidebar_label:"List"},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/api-reference/mui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/api-reference/mui/components/basic-views/show"}},d={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"<del><code>cardProps</code></del>",id:"cardprops",level:3},{value:"<del><code>cardHeaderProps</code></del>",id:"cardheaderprops",level:3},{value:"<del><code>cardContentProps</code></del>",id:"cardcontentprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,r.kt)("p",null,"We will show what ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h3"},"title")),(0,r.kt)("p",null,"It allows adding title inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props it uses the plural resource name by default. For example, for the ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts"),' resource, it will be "Posts".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return <List title="Custom Title">...</List>;\n};\n')),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport { List } from "@pankod/refine-mui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <List resource="posts">...</List>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,r.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,r.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,r.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { usePermissions } from "@pankod/refine-core";\n// highlight-next-line\nimport { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <List\n            // highlight-start\n            canCreate={data === "admin"}\n            createButtonProps={{ size: "small" }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/auth/usePermissions"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,r.kt)("h3",{id:"breadcrumb"},(0,r.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,r.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-mui")," package."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/mui-breadcrumb"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            breadcrumb={null}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"wrapperprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,r.kt)("p",null,"If you want to customize the wrapper of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Card")," documentation from Material UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            wrapperProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"headerprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,r.kt)("p",null,"If you want to customize the header of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"CardHeader")," documentation from Material UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            headerProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"contentprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,r.kt)("p",null,"If you want to customize the content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"CardContent")," documentation from Material UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            contentProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"headerbuttons"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,r.kt)("p",null,"You can customize the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,r.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Button } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button type="primary">Custom Button</Button>\n                </>\n            )}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"headerbuttonprops"},(0,r.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,r.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/box/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Material UI for detailed usage. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List } from "@pankod/refine-mui";\n\nexport const ListPage: React.FC = () => {\n    return (\n        <List\n            /* ... */\n            headerButtonProps={{\n                sx: {\n                    backgroundColor: "snow",\n                },\n            }}\n            /* ... */\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("h3",{id:"cardprops"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"cardProps"))),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"wrapperProps")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-card/#main-content"},(0,r.kt)("inlineCode",{parentName:"a"},"<Card>"))," components so you can customize with the props of ",(0,r.kt)("inlineCode",{parentName:"p"},"cardProps"),"."),(0,r.kt)("h3",{id:"cardheaderprops"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"cardHeaderProps"))),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"headerProps")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-header/"},(0,r.kt)("inlineCode",{parentName:"a"},"<CardHeader>"))," components so you can customize with the props of ",(0,r.kt)("inlineCode",{parentName:"p"},"cardHeaderProps"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'// highlight-next-line\nimport { List, Typography } from "@pankod/refine-mui";\n\nexport const CreatePage: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            cardHeaderProps={{\n                title: <Typography variant="h5">Custom Title</Typography>,\n            }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n')),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:o,alt:"Card Header Props Usage"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"cardcontentprops"},(0,r.kt)("del",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"del"},"cardContentProps"))),(0,r.kt)("admonition",{title:"Deprecated",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"contentProps")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<List>")," uses the Material UI ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/api/card-content/"},(0,r.kt)("inlineCode",{parentName:"a"},"<CardContent>"))," components so you can customize with the props of ",(0,r.kt)("inlineCode",{parentName:"p"},"cardContentProps"),"."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds title"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},"Plural of ",(0,r.kt)("inlineCode",{parentName:"td"},"resource.name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"canCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a ",(0,r.kt)("inlineCode",{parentName:"td"},"<CreateButton>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,r.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Adds props for ",(0,r.kt)("inlineCode",{parentName:"td"},"<CreateButton>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<SaveButton>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"breadcrumb"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom breadcrumb element"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<Breadcrumb/>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wrapperProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Wrapper element props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"CardProps"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Header element props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card-header/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"CardHeaderProps"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contentProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Content wrapper element props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card-content/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"CardContentProps"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerButtons"),(0,r.kt)("td",{parentName:"tr",align:null},"Header buttons element or render function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"({ defaultButtons: React.ReactNode }) => React.ReactNode")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerButtonProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Header buttons wrapper element props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/box/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"BoxProps"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"cardProps")," ",(0,r.kt)("div",{className:" required"},"deprecated"))),(0,r.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,r.kt)("inlineCode",{parentName:"td"},"<Card>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"CardProps"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,r.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"cardHeaderProps")," ",(0,r.kt)("div",{className:" required"},"deprecated"))),(0,r.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,r.kt)("inlineCode",{parentName:"td"},"<CardHeader>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card-header/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"CardHeaderProps"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"required-block"},(0,r.kt)("div",null,"cardContentProps")," ",(0,r.kt)("div",{className:" required"},"deprecated"))),(0,r.kt)("td",{parentName:"tr",align:null},"Passes the props for ",(0,r.kt)("inlineCode",{parentName:"td"},"<CardContent>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/card-content/#props"},(0,r.kt)("inlineCode",{parentName:"a"},"CardContentProps"))),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);