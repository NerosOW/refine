"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(82897),i=n(74398),l=n(82520);const p={id:"multipart-upload",title:"Multipart Upload"},s=void 0,d={unversionedId:"advanced-tutorials/upload/multipart-upload",id:"advanced-tutorials/upload/multipart-upload",title:"Multipart Upload",description:"We will show you how to multipart upload with refine.",source:"@site/docs/advanced-tutorials/upload/multipart-upload.md",sourceDirName:"advanced-tutorials/upload",slug:"/advanced-tutorials/upload/multipart-upload",permalink:"/docs/advanced-tutorials/upload/multipart-upload",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/advanced-tutorials/upload/multipart-upload.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"multipart-upload",title:"Multipart Upload"},sidebar:"someSidebar",previous:{title:"Base64 Upload",permalink:"/docs/advanced-tutorials/upload/base64-upload"},next:{title:"Sign in with Ethereum Web3 Wallet",permalink:"/docs/advanced-tutorials/web3/ethereum-signin"}},m={},u=[{value:"Create Form",id:"create-form",level:3},{value:"Edit Form",id:"edit-form",level:3},{value:"Uploading State",id:"uploading-state",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],c={toc:u};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will show you how to multipart upload with ",(0,r.kt)("strong",{parentName:"p"},"refine"),"."),(0,r.kt)("p",null,"Let's start with the ",(0,r.kt)("inlineCode",{parentName:"p"},"creation form")," first."),(0,r.kt)("h3",{id:"create-form"},"Create Form"),(0,r.kt)("p",null,"Let's add the image field to the post ",(0,r.kt)("inlineCode",{parentName:"p"},"creation form"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { \n    // highlight-start\n    useApiUrl \n    // highlight-end\n} from "@pankod/refine-core";\nimport { \n// highlight-start\n    Upload,\n    getValueFromEvent,\n// highlight-end\n    Create,\n    Form,\n    Input,\n    useForm,\n} from "@pankod/refine-antd";\n\nexport const PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n// highlight-next-line\n    const apiUrl = useApiUrl();\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Image">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n// highlight-next-line\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                    >\n// highlight-start\n                        <Upload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n// highlight-end\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    image: [\n        {\n            uid: string;\n            name: string;\n            url: string;\n            status: "error" | "success" | "done" | "uploading" | "removed";\n        },\n    ];\n}\n')),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We can reach the API URL by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useApiUrl")," hook.")),(0,r.kt)("p",null,"It will look like this."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:o.Z,alt:"multipart upload in a create page"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"What we need now is an upload end-point that accepts multipart uploads. We write this address in the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Upload")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/media/upload"',title:'"[POST]','https://api.fake-rest.refine.dev/media/upload"':!0},'{\n    "file": "binary"\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"This end-point should be ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-type: multipart/form-data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Form Data: file: binary"),"?.")),(0,r.kt)("p",null,"This end-point should respond similarly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/media/upload"',title:'"[POST]','https://api.fake-rest.refine.dev/media/upload"':!0},'{\n    "url": "https://example.com/uploaded-file.jpeg"\n}\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:i.Z,alt:"multipart upload uploaded item"})),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"We have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"getValueFromEvent")," method to convert the uploaded files to ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/upload/#UploadFile"},"Antd UploadFile")," object.")),(0,r.kt)("p",null,"This data is sent to the API when form submitted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[POST] https://api.fake-rest.refine.dev/posts"',title:'"[POST]','https://api.fake-rest.refine.dev/posts"':!0},'{\n    "title": "Test",\n    "image": [\n        {\n            "uid": "rc-upload-1620630541327-7",\n            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n            "type": "image/jpeg",\n            "size": 70922,\n            "percent": 100,\n            "status": "done"\n        }\n    ]\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The following data are required for the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/upload"},"Antd Upload")," component and all should be saved.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"File Name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"Download URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"error, success, done, uploading, removed")))),(0,r.kt)("h3",{id:"edit-form"},"Edit Form"),(0,r.kt)("p",null,"Let's add the image field to the post editing form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/edit.tsx"',title:'"pages/posts/edit.tsx"'},'import { \n    // highlight-start\n    useApiUrl \n    // highlight-end\n} from "@pankod/refine-core";\nimport { \n// highlight-start\n    Upload,\n    getValueFromEvent,\n// highlight-end\n    Edit,\n    Form,\n    Input,\n    useForm,\n} from "@pankod/refine-antd";\n\nexport const PostEdit: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n// highlight-next-line\n    const apiUrl = useApiUrl();\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Image">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n// highlight-next-line\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                    >\n// highlight-start\n                        <Upload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n// highlight-end\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:l.Z,alt:"multipart upload in edit page"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"A request, like the one below, is sent for edit form."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[GET] https://api.fake-rest.refine.dev/posts/1"',title:'"[GET]','https://api.fake-rest.refine.dev/posts/1"':!0},'{\n    "id": 1,\n    "title": "Test",\n    "image": [\n        {\n            "uid": "rc-upload-1620630541327-7",\n            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n            "type": "image/jpeg",\n            "size": 70922,\n            "percent": 100,\n            "status": "done"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"This data is sent to the API when form is submitted."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="[PUT] https://api.fake-rest.refine.dev/posts/1"',title:'"[PUT]','https://api.fake-rest.refine.dev/posts/1"':!0},'{\n    "title": "Test",\n    "image": [\n        {\n            "uid": "rc-upload-1620630541327-7",\n            "name": "greg-bulla-6RD0mcpY8f8-unsplash.jpg",\n            "url": "https://refine.ams3.digitaloceanspaces.com/78c82c0b2203e670d77372f4c20fc0e2",\n            "type": "image/jpeg",\n            "size": 70922,\n            "percent": 100,\n            "status": "done"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"uploading-state"},"Uploading State"),(0,r.kt)("p",null,'You may want to disable the "Save" button in the form while the upload is going on. To do this, you can use the ',(0,r.kt)("inlineCode",{parentName:"p"},"useFileUploadState")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx"',title:'"pages/posts/create.tsx"'},'import { useApiUrl } from "@pankod/refine-core";\nimport {\n    Upload,\n    getValueFromEvent,\n// highlight-next-line\n    useFileUploadState,\n    Create,\n    Form,\n    Input,\n    useForm,\n} from "@pankod/refine-antd";\n\nexport const PostCreate: React.FC = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n// highlight-next-line\n    const { isLoading, onChange } = useFileUploadState();\n\n    const apiUrl = useApiUrl();\n\n    return (\n        <Create\n// highlight-start\n            saveButtonProps={{\n                ...saveButtonProps,\n                disabled: isLoading,\n            }}\n// highlight-end\n        >\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Image">\n                    <Form.Item\n                        name="image"\n                        valuePropName="fileList"\n                        getValueFromEvent={getValueFromEvent}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            action={`${apiUrl}/media/upload`}\n                            listType="picture"\n                            maxCount={5}\n                            multiple\n// highlight-next-line\n                            onChange={onChange}\n                        >\n                            <p className="ant-upload-text">\n                                Drag & drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')),(0,r.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,r.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/upload/antd/multipart?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-multipart-upload-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}g.isMDXComponent=!0},82897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-1f2305f328a72a111a42d715d4a08f4e.png"},82520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-8cfa57412cd2f21abc00b4daba58e17f.png"},74398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uploaded-95ffa22caa8021e61d53ffd0e7e62c63.png"}}]);