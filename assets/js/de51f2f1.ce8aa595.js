"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"useExport",title:"useExport"},i=void 0,l={unversionedId:"api-reference/core/hooks/import-export/useExport",id:"api-reference/core/hooks/import-export/useExport",title:"useExport",description:"useExport hook allows you to make your resources exportable.",source:"@site/docs/api-reference/core/hooks/import-export/useExport.md",sourceDirName:"api-reference/core/hooks/import-export",slug:"/api-reference/core/hooks/import-export/useExport",permalink:"/docs/api-reference/core/hooks/import-export/useExport",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/core/hooks/import-export/useExport.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"useExport",title:"useExport"},sidebar:"someSidebar",previous:{title:"useForm",permalink:"/docs/api-reference/core/hooks/useForm"},next:{title:"useImport",permalink:"/docs/api-reference/core/hooks/import-export/useImport"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"<code>useExport</code> Options",id:"useexport-options",level:3},{value:"<code>useExport</code> Return Values",id:"useexport-return-values",level:3},{value:"Type Parameters",id:"type-parameters",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useExport")," hook allows you to make your resources exportable."),(0,r.kt)("p",null,"This hook accepts ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},(0,r.kt)("inlineCode",{parentName:"a"},"export-to-csv")),"'s options to create ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useExport } from "@pankod/refine-core";\n\nconst { triggerExport, isLoading } = useExport(options);\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's say that we have an endpoint like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts"',title:'"https://api.fake-rest.refine.dev/posts"'},'[\n    {\n        "id": 1,\n        "title": "Tempora nesciunt sunt temporibus.",\n        "slug": "quisquam-in-dolore",\n        "content": "Id qui nostrum hic nostrum voluptatem...",\n        "status": "rejected",\n    },\n    {\n        "id": 2,\n        "title": "Omnis est quis reiciendis blanditiis.",\n        "slug": "deleniti-voluptas-tempore",\n        "content": "Laudantium eos ut consequuntur dignissimos...",\n        "status": "published",\n    },\n    ...\n]\n')),(0,r.kt)("p",null,"To enable export functionality for this endpoint, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useExport")," hook to create an export button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'import {\n// highlight-start\n    useExport,\n    ExportButton,\n// highlight-end\n} from "@pankod/refine-core";\n\nimport {\n    List,\n    Table,\n    useTable,\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n// highlight-next-line\n    const { triggerExport, isLoading } = useExport<IPost>();\n\n    return (\n        <List\n            pageHeaderProps={{\n                extra: (\n// highlight-next-line\n                    <ExportButton onClick={triggerExport} loading={isLoading} />\n                ),\n            }}\n        >\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    slug: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the examples, instead of ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},"<Button",">"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/export-button"},"<ExportButton",">")," is used. ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/export-button"},"<ExportButton",">")," is nothing more than a default Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},"<Button",">")," with an icon and a default text.  "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/buttons/export-button"},"Refer to ExportButton docs for more detailed information. ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)("p",null,"When the user clicks this button, ",(0,r.kt)("inlineCode",{parentName:"p"},"triggerExport")," fetches all the data in the resource and downloads it as a ",(0,r.kt)("inlineCode",{parentName:"p"},"CSV")," file with these contents in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Posts-2021-06-29-14-40-14.csv"',title:'"Posts-2021-06-29-14-40-14.csv"'},'id,title,slug,content,status,categoryId,userId\n1,"Tempora nesciunt sunt temporibus.","quisquam-in-dolore","Id qui nostrum hic nostrum voluptatem...","rejected",2,1\n2,"Omnis est quis reiciendis blanditiis.","deleniti-voluptas-tempore","Laudantium eos ut consequuntur dignissimos...","published",24,39\n...\n')),(0,r.kt)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,r.kt)("p",null,"You can run a mapping function for all entries before they are saved. This is useful in cases of being required to reference relational data or saving files in a specific way to process them in different applications etc.\nThis mapping function is similar to the mapping function of ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useImport#handling-relational-data"},(0,r.kt)("inlineCode",{parentName:"a"},"useImport")),"."),(0,r.kt)("p",null,"Let's assume that we have this endpoint with some relational data in it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n {\n    "id": 2,\n    "title": "Et architecto et aut ex.",\n    "slug": "dolorum-et-quia",\n    "content": "Reprehenderit qui voluptatem in cum qui odio et.",\n    "category": {\n      "id": 35\n    },\n    "user": {\n      "id": 10\n    },\n    "status": "published",\n  },\n  {\n    "id": 3,\n    "title": "Quam maiores officia suscipit quia vel asperiores nisi non excepturi.",\n    "slug": "delectus-laborum-provident",\n    "content": "Placeat eos esse.",\n    "category": {\n      "id": 4\n    },\n    "user": {\n      "id": 50\n    },\n    "status": "published",\n  },\n  ...\n]\n')),(0,r.kt)("p",null,"We have the ",(0,r.kt)("inlineCode",{parentName:"p"},"category")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," fields as possible relational data keys. Their data is out of the responsibility of this export operation. We want to save their id's without any other related data. It may be required to export and backup those entities separately."),(0,r.kt)("p",null,"We can save ",(0,r.kt)("inlineCode",{parentName:"p"},"category.id")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"categoryId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"user.id")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),". Thus using a mapping function that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const { triggerExport, isLoading } = useExport<IPost>({\n    mapData: (item) => {\n        return {\n            id: item.id,\n            title: item.title,\n            slug: item.slug,\n            content: item.content,\n            status: item.status,\n            categoryId: item.category.id,\n            userId: item.user.id,\n        };\n    },\n});\n\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IUser {\n    id: number;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    slug: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n    user: IUser;\n}\n')),(0,r.kt)("p",null,"Such an ",(0,r.kt)("inlineCode",{parentName:"p"},"IPost")," may should work fine:"),(0,r.kt)("p",null,"This is all you need to handle mapping."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can pass more options to further customize the exporting process.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexcaza/export-to-csv"},"Refer to export-to-csv docs for more detailed information. ","\u2192"))),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"useexport-options"},(0,r.kt)("inlineCode",{parentName:"h3"},"useExport")," Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,r.kt)("td",{parentName:"tr",align:null},"Default resource name this button imports to. Inferred from route by default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mapData"),(0,r.kt)("td",{parentName:"tr",align:null},"A mapping function that runs for every record. Mapped data will be included in the file contents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<TItem, TVariables>(item: TItem, index?: number, items?: TItem[]): TVariables;"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Requests to fetch data are made as batches by page size. By default, it is 20. Used for ",(0,r.kt)("inlineCode",{parentName:"td"},"getList")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"DataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sorter"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorts  records"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#crudsorting"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudSorting"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter"),(0,r.kt)("td",{parentName:"tr",align:null},"Filters records"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#crudfilters"},(0,r.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exportOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"Used for exporting options"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/alexcaza/export-to-csv#api"},(0,r.kt)("inlineCode",{parentName:"a"},"Options"))," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metaData"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#metadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataProviderName"),(0,r.kt)("td",{parentName:"tr",align:null},"If there is more than one ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onError"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback to handle error events of this hook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(error: any) => void"))))),(0,r.kt)("h3",{id:"useexport-return-values"},(0,r.kt)("inlineCode",{parentName:"h3"},"useExport")," Return Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows true when there is an export process"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"triggerExport"),(0,r.kt)("td",{parentName:"tr",align:null},"When invoked, starts the exporting process"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"async () => void"))))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for params"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any"))))))}u.isMDXComponent=!0}}]);