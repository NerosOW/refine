"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(89543),i=n(69504);const l={id:"useShow",title:"useShow"},s=void 0,d={unversionedId:"api-reference/core/hooks/show/useShow",id:"api-reference/core/hooks/show/useShow",title:"useShow",description:"useShow hook allows you to fetch the desired record. It uses getOne method as query function from the dataProvider that is passed to ``.",source:"@site/docs/api-reference/core/hooks/show/useShow.md",sourceDirName:"api-reference/core/hooks/show",slug:"/api-reference/core/hooks/show/useShow",permalink:"/docs/api-reference/core/hooks/show/useShow",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/core/hooks/show/useShow.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"useShow",title:"useShow"},sidebar:"someSidebar",previous:{title:"useResourceWithRoute",permalink:"/docs/api-reference/core/hooks/resource/useResourceWithRoute"},next:{title:"useTable",permalink:"/docs/api-reference/core/hooks/useTable"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook allows you to fetch the desired record. It uses ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method as query function from the dataProvider that is passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { queryResult } = useShow();\n")),(0,a.kt)("p",null,"When no property is given, it tries to read the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information from the route."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"First, we'll create a page to show the records. Then we'll use this page for the show property of the resource."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/show.tsx"',title:'"src/pages/posts/show.tsx"'},'// highlight-next-line\nimport { useShow } from "@pankod/refine-core";\nimport { Show, Typography } from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => {\n// highlight-next-line\n    const { queryResult } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n    const record = data?.data;\n\n    return (\n        <Show isLoading={isLoading}>\n            <Title level={5}>Id</Title>\n            <Text>{record?.id}</Text>\n\n            <Title level={5}>Title</Title>\n            <Text>{record?.title}</Text>\n        </Show>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n')),(0,a.kt)("p",null,"We didn't give any property to ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," because it can read ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information from the route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-json-server";\n\n// highlight-next-line\nimport { PostShow } from "./pages/posts";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-next-line\n            resources={[{ name: "posts", show: PostShow }]}\n        />\n    );\n};\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o.Z,alt:"useShow Basic Usage"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"In the next example, we'll show how it is used for the modal."),(0,a.kt)("p",null,"Let's simply create a post list showing posts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import { List, Table, useTable } from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n')),(0,a.kt)("p",null,"Let's add our modal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'// highlight-next-line\nimport { List, Table, useTable } from "@pankod/refine-core";\nimport {\n    List,\n    Table,\n    useTable,\n// highlight-start\n    Modal,\n    Show,\n    ShowButton,\n    Typography,\n// highlight-end\n} from "@pankod/refine-antd";\n\nconst { Title, Text } = Typography;\n\nexport const PostList: React.FC = () => {\n    const [visible, setVisible] = useState(false);\n\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { queryResult, showId, setShowId } = useShow<IPost>();\n    const { data, isLoading } = queryResult;\n// highlight-next-line\n    const record = data?.data;\n\n    return (\n        <>\n            <List>\n                <Table {...tableProps} rowKey="id">\n                    <Table.Column dataIndex="id" title="ID" />\n                    <Table.Column dataIndex="title" title="Title" />\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n// highlight-start\n                        render={(_, record) => (\n                            <ShowButton\n                                size="small"\n                                recordItemId={record.id}\n                                onClick={() => {\n                                    setShowId(record.id);\n                                    setVisible(true);\n                                }}\n                            />\n                        )}\n// highlight-end\n                    />\n                </Table>\n            </List>\n// highlight-start\n            <Modal visible={visible} onCancel={() => setVisible(false)}>\n                <Show isLoading={isLoading} recordItemId={showId}>\n                    <Title level={5}>Id</Title>\n                    <Text>{record?.id}</Text>\n\n                    <Title level={5}>Title</Title>\n                    <Text>{record?.title}</Text>\n                </Show>\n            </Modal>\n// highlight-end\n        </>\n    );\n};\n')),(0,a.kt)("p",null,"Finally, let's pass this page to the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," as a list component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-json-server";\n\n// highlight-next-line\nimport { PostList } from "./pages/posts";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-next-line\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i.Z,alt:"useShow Modal Usage"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To show data in the drawer, you can do it by simply replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"<Modal>")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"<Drawer>"),".")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resource"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the url")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Record id for fetching"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseKey"))),(0,a.kt)("td",{parentName:"tr",align:null},"Id that it reads from the URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metaData"),(0,a.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#metadataquery"},(0,a.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,a.kt)("td",{parentName:"tr",align:null},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,a.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,a.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"default"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,a.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,a.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#livemodeprops"},(0,a.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,a.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,a.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,a.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#livemodeprops"},(0,a.kt)("inlineCode",{parentName:"a"},"{ ids?: BaseKey[]; [key: string]: any; }"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,a.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#livemodeprops"},(0,a.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"showId"),(0,a.kt)("td",{parentName:"tr",align:null},"Record id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setShowId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"showId")," setter"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction< string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined>>"))))))}m.isMDXComponent=!0},69504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/modal-usage-0ace0a98706bb2cf500fce399a7e4241.png"},89543:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/show-usage-f1fe5bbd294ab7fe19b311e2d86d397d.png"}}]);