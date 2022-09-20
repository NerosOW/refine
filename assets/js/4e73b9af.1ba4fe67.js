"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/save-mui-b3dfd091b1665e3a5f50b4d364ab13fa.png",i={id:"save-button",title:"Save"},l=void 0,p={unversionedId:"api-reference/mui/components/buttons/save-button",id:"api-reference/mui/components/buttons/save-button",title:"Save",description:"` uses Material UI ` component. It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.",source:"@site/docs/api-reference/mui/components/buttons/save.md",sourceDirName:"api-reference/mui/components/buttons",slug:"/api-reference/mui/components/buttons/save-button",permalink:"/docs/api-reference/mui/components/buttons/save-button",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/mui/components/buttons/save.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"save-button",title:"Save"},sidebar:"someSidebar",previous:{title:"Refresh",permalink:"/docs/api-reference/mui/components/buttons/refresh-button"},next:{title:"Show",permalink:"/docs/api-reference/mui/components/buttons/show-button"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Material UI ",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-button/"},(0,a.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that ",(0,a.kt)("strong",{parentName:"p"},"refine")," has adds features to this button."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"For example, let's add logic to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/edit.tsx"',title:'"src/pages/posts/edit.tsx"'},'// highlight-next-line\nimport { useForm } from "@pankod/refine-react-hook-form";\nimport { Edit, Box, TextField } from "@pankod/refine-mui";\n\nexport const PostEdit: React.FC = () => {\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n        formState: { errors },\n    } = useForm<ICategory>();\n\n    return (\n        <Edit\n            isLoading={formLoading}\n            saveButtonProps={{ onClick: handleSubmit(onFinish) }}\n        >\n            <Box component="form">\n                <TextField\n                    {...register("title", { required: true })}\n                    error={!!errors?.title}\n                    helperText={errors?.title?.message}\n                    margin="normal"\n                    required\n                    fullWidth\n                    id="title"\n                    label="Title"\n                    name="title"\n                    defaultValue={" "}\n                />\n            </Box>\n        </Edit>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n')),(0,a.kt)("p",null,"Will look like this:"),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:o,alt:"Default save button"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," to be passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component which includes submitting the form action, button loading, and disable states."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"hidetext"},(0,a.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,a.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SaveButton } from "@pankod/refine-mui";\n\nexport const MySaveComponent = () => {\n    return <SaveButton hideText />;\n};\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"props"),(0,a.kt)("td",{parentName:"tr",align:null},"Material UI button props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/button/"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonProps"))),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hideText"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to hide button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"children"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the button text"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"Save"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"startIcon"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the icon component of button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/material-icons/?theme=Outlined&query=save&selected=SaveOutlined"},(0,a.kt)("inlineCode",{parentName:"a"},"<SaveOutlinedIcon />")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"svgIconProps"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows to set icon props"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mui.com/material-ui/api/svg-icon/#props"},(0,a.kt)("inlineCode",{parentName:"a"},"SvgIconProps"))),(0,a.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);