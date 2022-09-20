"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={id:"useAuthenticated",title:"useAuthenticated",siderbar_label:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations"},o=void 0,s={unversionedId:"api-references/hooks/auth/useAuthenticated",id:"version-2.xx.xx/api-references/hooks/auth/useAuthenticated",title:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/auth/useAuthenticated.md",sourceDirName:"api-references/hooks/auth",slug:"/api-references/hooks/auth/useAuthenticated",permalink:"/docs/2.xx.xx/api-references/hooks/auth/useAuthenticated",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/auth/useAuthenticated.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"useAuthenticated",title:"useAuthenticated",siderbar_label:"useAuthenticated",description:"useAuthenticated data hook from refine is a modified version of react-query's useMutation for create mutations"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useCheckError",permalink:"/docs/2.xx.xx/api-references/hooks/auth/useCheckError"},next:{title:"useGetIdentity",permalink:"/docs/2.xx.xx/api-references/hooks/auth/useGetIdentity"}},c={},u=[{value:"Usage",id:"usage",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAuth")," method from the",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. "),(0,a.kt)("p",null,"It returns the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,a.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"isError"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Data that is resolved from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," will be returned as the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useAuthenticated")," can be useful when you want to ask for authentication to grant access to ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/guides-and-concepts/custom-pages"},"custom pages")," manually."),(0,a.kt)("p",null,"We have used this hook in refine's ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/auth/authenticated"},(0,a.kt)("inlineCode",{parentName:"a"},"<Authenticated>"))," component which allows only authenticated users to access the page or any part of the code."),(0,a.kt)("p",null,"We will demonstrate a similar basic implementation below. Imagine that you have public page but you want to make some specific fields private."),(0,a.kt)("p",null,"We have a logic in ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/providers/auth-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAuth")," method like below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n  ...\n    // highlight-start\n    checkAuth: () => {\n        localStorage.getItem("username")\n                ? Promise.resolve()\n                : Promise.reject(),\n    },\n    // highlight-end\n  ...\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Let's create a wrapper component that renders children if ",(0,a.kt)("inlineCode",{parentName:"p"},"checkAuth")," method returns the Promise resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/authenticated.tsx"',title:'"components/authenticated.tsx"'},'// highlight-next-line\nimport { useAuthenticated, useNavigation } from "@pankod/refine";\n\nexport const Authenticated: React.FC<AuthenticatedProps> = ({\n    children,\n    fallback,\n    loading,\n}) => {\n    // highlight-next-line\n    const { isSuccess, isLoading, isError } = useAuthenticated();\n\n    const { replace } = useNavigation();\n\n    if (isLoading) {\n        return <>{loading}</> || null;\n    }\n\n    if (isError) {\n        if (!fallback) {\n            replace("/");\n            return null;\n        }\n\n        return <>{fallback}</>;\n    }\n\n    if (isSuccess) {\n        return <>{children}</>;\n    }\n\n    return null;\n};\n\ntype AuthenticatedProps = {\n    fallback?: React.ReactNode;\n    loading?: React.ReactNode;\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now, only authenticated users can see the price field."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/postShow"',title:'"components/postShow"'},'import { Typography, Show } from "@pankod/refine";\n\n// highlight-next-line\nimport { Authenticated } from "components/authenticated"\n\nconst { Title, Text } = Typography;\n\nexport const PostShow: React.FC = () => (\n    <Show>\n        <Title>Status</Title>\n        <Text>Approved</Text>\n        // highlight-start\n        <Authenticated>\n            <Title>Price</Title>\n            <Text>20</Text>\n        </Authenticated>\n        // highlight-end\n    </Show>\n)\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,a.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}p.isMDXComponent=!0}}]);