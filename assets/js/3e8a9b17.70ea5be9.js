"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"/packages/core/src/hooks/auth/useLogin/index.ts"},l=void 0,c={unversionedId:"api-reference/core/hooks/authentication/useLogin",id:"api-reference/core/hooks/authentication/useLogin",title:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"@site/docs/api-reference/core/hooks/authentication/useLogin.md",sourceDirName:"api-reference/core/hooks/authentication",slug:"/api-reference/core/hooks/authentication/useLogin",permalink:"/docs/api-reference/core/hooks/authentication/useLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/authentication/useLogin.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1687979008,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{id:"useLogin",title:"useLogin",siderbar_label:"useLogin",description:"useLogin data hook from refine is a modified version of react-query's useMutation for authentication.",source:"/packages/core/src/hooks/auth/useLogin/index.ts"},sidebar:"someSidebar",previous:{title:"useGetIdentity",permalink:"/docs/api-reference/core/hooks/authentication/useGetIdentity"},next:{title:"useLogout",permalink:"/docs/api-reference/core/hooks/authentication/useLogout"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Redirection after login",id:"redirection-after-login",level:2},{value:"Error handling",id:"error-handling",level:2}],d={toc:p};function m(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," calls ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being ",(0,r.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"isError"),"."),(0,r.kt)("p",null,"Data that is resolved from ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,r.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values: ",(0,r.kt)("inlineCode",{parentName:"li"},'{ name: "Login Error", message: "Invalid credentials" }'),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If it has a value, the app will be redirected to the given URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": If it has a value, a notification will be shown with the error message and name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides a default login page which handles the login flow manually."),(0,r.kt)("p",null,"If you want to use a custom login page however, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customLoginPage"',title:'"pages/customLoginPage"'},'import { useLogin } from "@refinedev/core";\nimport { Form } from "antd";\n\ntype LoginVariables = {\n    username: string;\n    password: string;\n};\n\nexport const LoginPage = () => {\n    const { mutate: login } = useLogin<LoginVariables>();\n\n    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n        e.preventDefault();\n\n        const values = {\n            username: e.currentTarget.username.value,\n            password: e.currentTarget.password.value,\n        };\n\n        login(values);\n    };\n\n    return <Form onFinish={onSubmit}>// rest of the login form</Form>;\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," can accept any kind of object for values since ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method from ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: login } = useLogin<{ username: string; password: string }>();\n"))),(0,r.kt)("h2",{id:"redirection-after-login"},"Redirection after login"),(0,r.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\nconst { mutate: login } = useLogin();\n\nlogin({ redirectPath: "/custom-url" });\n')),(0,r.kt)("p",null,"Then, you can handle this URL in your ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    login: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"Since the methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," value in the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogin } from "@refinedev/core";\n\nconst { mutate: login } = useLogin();\n\nlogin(\n    {\n        email: "refine@example.com",\n        password: "refine",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook will not be called if ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". This is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," methods always return a resolved promise, and the callback is only triggered when the promise is rejected.")))}m.isMDXComponent=!0}}]);