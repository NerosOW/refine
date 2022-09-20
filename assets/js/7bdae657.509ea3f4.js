"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/list-page-87cc21dde7677a2821004f2434ecc4f7.png",i=n.p+"assets/images/create-form-e44a3b7e0c204519f8f09659d2b8c13b.gif",l=n.p+"assets/images/edit-form-116054ab2bb4d32122fbf563b6e3fa6f.gif",s={id:"useStepsForm",title:"useStepsForm"},p=void 0,d={unversionedId:"packages/documentation/react-hook-form/useStepsForm",id:"packages/documentation/react-hook-form/useStepsForm",title:"useStepsForm",description:"useStepsForm allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc.",source:"@site/docs/packages/documentation/react-hook-form/useStepsForm.md",sourceDirName:"packages/documentation/react-hook-form",slug:"/packages/documentation/react-hook-form/useStepsForm",permalink:"/docs/packages/documentation/react-hook-form/useStepsForm",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/packages/documentation/react-hook-form/useStepsForm.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"useStepsForm",title:"useStepsForm"},sidebar:"someSidebar",previous:{title:"useModalForm",permalink:"/docs/packages/documentation/react-hook-form/useModalForm"},next:{title:"Examples",permalink:"/docs/examples"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Create Form",id:"create-form",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return values",id:"return-values",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],m={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," allows you to manage a form with multiple steps. It provides features such as which step is currently active, the ability to go to a specific step and validation when changing steps etc."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook is extended from ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine/tree/master/packages/react-hook-form"},(0,a.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-hook-form"))," package.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used in both."),(0,a.kt)("p",null,"Let's create our ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," to redirect to create and edit pages."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"PostList"),(0,a.kt)("div",null,(0,a.kt)("p",null,"In this component we will use ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation"},(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation"))," to redirect to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostCreate>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostEdit>")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'//highlight-next-line\nimport { useTable, useNavigation, useMany } from "@pankod/refine-core";\n\nimport { ICategory, IPost } from "interfaces";\n\nexport const PostList: React.FC = () => {\n    const { tableQueryResult } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "desc",\n            },\n        ],\n    });\n    //highlight-next-line\n    const { edit, create } = useNavigation();\n\n    const categoryIds =\n        tableQueryResult?.data?.data.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <div>\n            //highlight-next-line\n            <button onClick={() => create("posts")}>Create Post</button>\n            <table>\n                <thead>\n                    <tr>\n                        <th>ID</th>\n                        <th>Title</th>\n                        <th>Category</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    {tableQueryResult.data?.data.map((post) => (\n                        <tr key={post.id}>\n                            <td>{post.id}</td>\n                            <td>{post.title}</td>\n                            <td>\n                                {isLoading\n                                    ? "Loading"\n                                    : data?.data.find(\n                                          (item) => item.id == post.category.id,\n                                      )?.title}\n                            </td>\n                            <td>{post.status}</td>\n                            <td>\n                                //highlight-start\n                                <button onClick={() => edit("posts", post.id)}>\n                                    Edit\n                                </button>\n                                //highlight-end\n                            </td>\n                        </tr>\n                    ))}\n                </tbody>\n            </table>\n        </div>\n    );\n};\n')))),(0,a.kt)("div",{class:"img-container",style:{"max-width":"800px"}},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o,alt:"List Page"})),(0,a.kt)("h3",{id:"create-form"},"Create Form"),(0,a.kt)("p",null,"In this component you can see how ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used to manage the steps and form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/create.tsx"',title:'"src/pages/posts/create.tsx"'},'//highlight-next-line\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\nimport { useSelect } from "@pankod/refine-core";\n\nconst stepTitles = ["Title", "Status", "Content"];\n\nexport const PostCreate: React.FC = () => {\n    //highlight-start\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n        formState: { errors },\n        steps: { currentStep, gotoStep },\n    } = useStepsForm();\n    //highlight-end\n\n    const { options } = useSelect({\n        resource: "categories",\n        defaultValue: queryResult?.data?.data.category.id,\n    });\n\n    // Where buttons are shown and where the form is submitted\n    const renderFormByStep = (step: number) => {\n        switch (step) {\n            case 0:\n                return (\n                    <>\n                        <label>Title: </label>\n                        <input\n                            {...register("title", {\n                                required: "This field is required",\n                            })}\n                        />\n                        {errors.title && <span>{errors.title.message}</span>}\n                    </>\n                );\n            case 1:\n                return (\n                    <>\n                        <label>Status: </label>\n                        <select {...register("status")}>\n                            <option value="published">published</option>\n                            <option value="draft">draft</option>\n                            <option value="rejected">rejected</option>\n                        </select>\n                    </>\n                );\n            case 2:\n                return (\n                    <>\n                        <label>Category: </label>\n                        <select\n                            {...register("category.id", {\n                                required: "This field is required",\n                            })}\n                        >\n                            {options?.map((category) => (\n                                <option\n                                    key={category.value}\n                                    value={category.value}\n                                >\n                                    {category.label}\n                                </option>\n                            ))}\n                        </select>\n                        {errors.category && (\n                            <span>{errors.category.message}</span>\n                        )}\n                        <br />\n                        <br />\n                        <label>Content: </label>\n                        <textarea\n                            {...register("content", {\n                                required: "This field is required",\n                            })}\n                            rows={10}\n                            cols={50}\n                        />\n                        {errors.content && (\n                            <span>{errors.content.message}</span>\n                        )}\n                    </>\n                );\n        }\n    };\n\n    if (formLoading) {\n        return <div>Loading...</div>;\n    }\n\n    return (\n        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n            // Where step titles are shown\n            <div style={{ display: "flex", gap: 36 }}>\n                {stepTitles.map((title, index) => (\n                    <button\n                        key={index}\n                        onClick={() => gotoStep(index)}\n                        style={{\n                            backgroundColor:\n                                currentStep === index ? "lightgray" : "initial",\n                        }}\n                    >\n                        {index + 1} - {title}\n                    </button>\n                ))}\n            </div>\n            //highlight-next-line\n            <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n            // Where buttons are shown\n            <div style={{ display: "flex", gap: 8 }}>\n                {currentStep > 0 && (\n                    <button\n                        onClick={() => {\n                            gotoStep(currentStep - 1);\n                        }}\n                    >\n                        Previous\n                    </button>\n                )}\n                {currentStep < stepTitles.length - 1 && (\n                    <button\n                        onClick={() => {\n                            gotoStep(currentStep + 1);\n                        }}\n                    >\n                        Next\n                    </button>\n                )}\n                {currentStep === stepTitles.length - 1 && (\n                    <button onClick={handleSubmit(onFinish)}>Save</button>\n                )}\n            </div>\n        </div>\n    );\n};\n')),(0,a.kt)("div",{class:"img-container",style:{"max-width":"800px"}},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:i,alt:"Create Form"})),(0,a.kt)("h3",{id:"edit-page"},"Edit Page"),(0,a.kt)("p",null,"Magic, ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostCreate>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostEdit>")," pages are almost the same. So how are the form's default values set? ",(0,a.kt)("inlineCode",{parentName:"p"},"useStepsForm")," does this with te ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," parameter it reads from the URL and fetches the data from the server."),(0,a.kt)("p",null,"You can change the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as you want with the ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," that comes out of ",(0,a.kt)("inlineCode",{parentName:"p"},"refineCore"),"."),(0,a.kt)("p",null,"Another part that is different from ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostCreate>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostEdit>")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultValue")," value passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook and the ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," element."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useSelect"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for detailed information. ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'//highlight-next-line\nimport { useStepsForm } from "@pankod/refine-react-hook-form";\nimport { useSelect } from "@pankod/refine-core";\n\nconst stepTitles = ["Title", "Status", "Category and content"];\n\nexport const PostEdit: React.FC = () => {\n    //highlight-start\n    const {\n        refineCore: { onFinish, formLoading, queryResult },\n        register,\n        handleSubmit,\n        formState: { errors },\n        steps: { currentStep, gotoStep },\n    } = useStepsForm();\n    //highlight-end\n\n    const { options } = useSelect({\n        resource: "categories",\n        //highlight-next-line\n        defaultValue: queryResult?.data?.data.category.id,\n    });\n\n    // It handles which form elements render at which step.\n    const renderFormByStep = (step: number) => {\n        switch (step) {\n            case 0:\n                return (\n                    <>\n                        <label>Title: </label>\n                        <input\n                            {...register("title", {\n                                required: "This field is required",\n                            })}\n                        />\n                        {errors.title && <span>{errors.title.message}</span>}\n                    </>\n                );\n            case 1:\n                return (\n                    <>\n                        <label>Status: </label>\n                        <select {...register("status")}>\n                            <option value="published">published</option>\n                            <option value="draft">draft</option>\n                            <option value="rejected">rejected</option>\n                        </select>\n                    </>\n                );\n            case 2:\n                return (\n                    <>\n                        <label>Category: </label>\n                        <select\n                            {...register("category.id", {\n                                required: "This field is required",\n                            })}\n                            //highlight-next-line\n                            defaultValue={queryResult?.data?.data.category.id}\n                        >\n                            {options?.map((category) => (\n                                <option\n                                    key={category.value}\n                                    value={category.value}\n                                >\n                                    {category.label}\n                                </option>\n                            ))}\n                        </select>\n                        {errors.category && (\n                            <span>{errors.category.message}</span>\n                        )}\n                        <br />\n                        <br />\n                        <label>Content: </label>\n                        <textarea\n                            {...register("content", {\n                                required: "This field is required",\n                            })}\n                            rows={10}\n                            cols={50}\n                        />\n                        {errors.content && (\n                            <span>{errors.content.message}</span>\n                        )}\n                    </>\n                );\n        }\n    };\n\n    if (formLoading) {\n        return <div>Loading...</div>;\n    }\n\n    return (\n        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>\n            // Where step titles are shown\n            <div style={{ display: "flex", gap: 36 }}>\n                {stepTitles.map((title, index) => (\n                    <button\n                        key={index}\n                        onClick={() => gotoStep(index)}\n                        style={{\n                            backgroundColor:\n                                currentStep === index ? "lightgray" : "initial",\n                        }}\n                    >\n                        {index + 1} - {title}\n                    </button>\n                ))}\n            </div>\n            //highlight-next-line\n            <form autoComplete="off">{renderFormByStep(currentStep)}</form>\n            // Where buttons are shown\n            <div style={{ display: "flex", gap: 8 }}>\n                {currentStep > 0 && (\n                    <button\n                        onClick={() => {\n                            gotoStep(currentStep - 1);\n                        }}\n                    >\n                        Previous\n                    </button>\n                )}\n                {currentStep < stepTitles.length - 1 && (\n                    <button\n                        onClick={() => {\n                            gotoStep(currentStep + 1);\n                        }}\n                    >\n                        Next\n                    </button>\n                )}\n                {currentStep === stepTitles.length - 1 && (\n                    <button onClick={handleSubmit(onFinish)}>Save</button>\n                )}\n            </div>\n        </div>\n    );\n};\n')),(0,a.kt)("div",{class:"img-container",style:{"max-width":"800px"}},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:l,alt:"Edit Form"})),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stepsProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the steps"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#stepspropstype"},(0,a.kt)("inlineCode",{parentName:"a"},"StepsPropsType")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCoreProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Configuration object for the core of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormProps")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"React Hook Form Properties"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform"},"React Hook Form")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"stepspropstype"},"StepsPropsType"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"defaultStep"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to set the initial step"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"isBackValidate"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to validation the current step when going back."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")))))),(0,a.kt)("h3",{id:"return-values"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"steps"),(0,a.kt)("td",{parentName:"tr",align:null},"Relevant state and method to control the steps"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#stepsreturnvalues"},(0,a.kt)("inlineCode",{parentName:"a"},"StepsReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refineCore"),(0,a.kt)("td",{parentName:"tr",align:null},"The return values of the ",(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," in the core"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api-reference/core/hooks/useForm#return-values"},(0,a.kt)("inlineCode",{parentName:"a"},"UseFormReturnValues")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"React Hook Form Return Values"),(0,a.kt)("td",{parentName:"tr",align:null},"See ",(0,a.kt)("a",{parentName:"td",href:"https://react-hook-form.com/api/useform"},"React Hook Form")," documentation"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"stepsreturnvalues"},"StepsReturnValues"))),(0,a.kt)("table",{parentName:"blockquote"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentStep"),(0,a.kt)("td",{parentName:"tr",align:null},"Current step"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gotoStep"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to go to a specific step."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(step: number) => void")))))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/form/reactHookForm/useStepsForm/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-react-hook-form-example"}))}k.isMDXComponent=!0}}]);