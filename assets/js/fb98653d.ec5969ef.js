"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"general-concepts",title:"General Concepts"},i=void 0,s={unversionedId:"api-reference/general-concepts",id:"api-reference/general-concepts",title:"General Concepts",description:"refine core is fully independent of UI, meaning that you can use core components and hooks without any UI dependency. All of the data-related hooks, such as useTable, useForm, useList, of refine can also be given some common properties like resource, meta, queryOptions etc. that are independent of UI.",source:"@site/docs/api-reference/general-concepts.md",sourceDirName:"api-reference",slug:"/api-reference/general-concepts",permalink:"/docs/api-reference/general-concepts",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/general-concepts.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1686222297,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{id:"general-concepts",title:"General Concepts"},sidebar:"someSidebar",previous:{title:"API Reference",permalink:"/docs/api-reference"},next:{title:"Core API",permalink:"/docs/api-reference/core"}},p={},l=[{value:"<code>resource</code>",id:"resource",level:2},{value:"How does <strong>refine</strong> know what the value of <code>resource</code> is?",id:"how-does-refine-know-what-the-value-of-resource-is",level:3},{value:"<code>meta</code>",id:"meta",level:2},{value:"Passing a global <code>meta</code> specific to a resource",id:"passing-a-global-meta-specific-to-a-resource",level:3},{value:"Passing <code>meta</code> with hook-specific properties",id:"passing-meta-with-hook-specific-properties",level:3},{value:"Using URL query parameters as <code>meta</code> properties",id:"using-url-query-parameters-as-meta-properties",level:3},{value:"Using <code>meta</code> to generate GraphQL queries",id:"using-meta-to-generate-graphql-queries",level:3},{value:"Passing <code>meta</code> to your existing <code>dataProvider</code> methods",id:"passing-meta-to-your-existing-dataprovider-methods",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," core is fully independent of UI, meaning that you can use core components and hooks without any UI dependency. All of the ",(0,a.kt)("strong",{parentName:"p"},"data"),"-related hooks, such as ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useList"},(0,a.kt)("inlineCode",{parentName:"a"},"useList")),", of refine can also be given some common properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"meta"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," etc. that are independent of UI."),(0,a.kt)("h2",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h2"},"resource")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is a prop that gets passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a paremeter by ",(0,a.kt)("strong",{parentName:"p"},"refine"),". It is usually used as an API endpoint path but it all depends on how you hanlde it in your ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For an example, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},(0,a.kt)("inlineCode",{parentName:"a"},"Creating a data provider from scratch part of the tutorial")))),(0,a.kt)("h3",{id:"how-does-refine-know-what-the-value-of-resource-is"},"How does ",(0,a.kt)("strong",{parentName:"h3"},"refine")," know what the value of ",(0,a.kt)("inlineCode",{parentName:"h3"},"resource")," is?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," automatically determines the value from the active route where the component or the hook is used."),(0,a.kt)("p",null,"For example, if you are using the hook in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," component, the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," value defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},'"posts"')," because the active route is ",(0,a.kt)("inlineCode",{parentName:"p"},"/posts")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To make the inference work, you need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"routerProvider")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from your router package choice.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nimport { PostList } from "pages/posts/list.tsx";\n\nconst App: React.FC = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "posts",\n                        list: "/posts",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route path="/posts" element={<PostList />} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nexport default App;\n')),(0,a.kt)("p",null,"This value however can be overriden by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," prop to the hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { useTable } from "@refinedev/core";\n\nconst PostList: React.FC = () => {\n    const result = useTable({\n        //highlight-next-line\n        resource: "users",\n    });\n\n    return <div>...</div>;\n};\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The value passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," property is also used to determine the active ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," array, which is optional for API interactions, but enables useful ",(0,a.kt)("inlineCode",{parentName:"p"},"refine")," features such as redirecting to the list page after create and update operations.")),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," with nested routes, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-can-i-request-an-api-with-nested-route"},"related section in FAQ ","\u2192"))),(0,a.kt)("h2",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h2"},"meta")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,a.kt)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON)."),(0,a.kt)("li",{parentName:"ul"},"Filling additional parameters in target routes when occurs redirection.")),(0,a.kt)("h3",{id:"passing-a-global-meta-specific-to-a-resource"},"Passing a global ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," specific to a resource"),(0,a.kt)("p",null,"You can define a global ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," specific to a resource, which will be passed to all the data provider methods whenever the resource is matched."),(0,a.kt)("p",null,"For instance, to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"role")," property to all data provider methods for the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "posts",\n                    // highlight-start\n                    meta: {\n                        role: "editor",\n                    },\n                    // highlight-end\n                },\n            ]}\n        />\n    );\n};\n')),(0,a.kt)("h3",{id:"passing-meta-with-hook-specific-properties"},"Passing ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," with hook-specific properties"),(0,a.kt)("p",null,"You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property with hook-specific properties to data provider methods, which will override the global ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," of the resource."),(0,a.kt)("p",null,"For example, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," hook:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'    useOne({\n        resource: "posts",\n        id: 1,\n        // highlight-start\n        meta: {\n            headers: { "x-meta-data": "true" },\n        },\n        // highlight-end\n    });\n\n    const myDataProvider = {\n        ...\n        getOne: async ({ resource, id, meta }) => {\n            // highlight-next-line\n            const headers = meta?.headers ?? {};\n            const url = `${apiUrl}/${resource}/${id}`;\n\n            //highlight-next-line\n            const { data } = await httpClient.get(url, { headers });\n\n            return {\n                data,\n            };\n        },\n        ...\n    };\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You can pass any property to handle your specific use cases with the same logic")),(0,a.kt)("h3",{id:"using-url-query-parameters-as-meta-properties"},"Using URL query parameters as ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," properties"),(0,a.kt)("p",null,"Query parameters on the URL can also be used as ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," properties for data provider methods, which is very useful when you want to customize them based on query parameters."),(0,a.kt)("p",null,"For example, if the URL is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://example.com/posts?foo=bar"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," property will be passed to the data provider methods as a ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const dataProvider = {\n    getList: async ({ resource, meta }) => {\n        console.log(meta); // { foo: "bar" }\n    },\n    ...\n};\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The order of precedence for creating the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," is as follows: first, it is passed to the hook; second, it is defined in the URL query parameters; and third, it is defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," property defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," is passed to the data provider methods only via the following hooks and their derivatives:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useTable/"},(0,a.kt)("inlineCode",{parentName:"a"},"useTable"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useForm/"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/useSelect/"},(0,a.kt)("inlineCode",{parentName:"a"},"useSelect"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/show/useShow/"},(0,a.kt)("inlineCode",{parentName:"a"},"useShow"))))),(0,a.kt)("h3",{id:"using-meta-to-generate-graphql-queries"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," to generate GraphQL queries"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/data-providers/graphql/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"GraphQL")," guide","\u2192")),(0,a.kt)("h3",{id:"passing-meta-to-your-existing-dataprovider-methods"},"Passing ",(0,a.kt)("inlineCode",{parentName:"h3"},"meta")," to your existing ",(0,a.kt)("inlineCode",{parentName:"h3"},"dataProvider")," methods"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/faq#how-i-can-override-specific-function-of-data-providers"},"Refer to the related section in FAQ","\u2192")))}c.isMDXComponent=!0}}]);