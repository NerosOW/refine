"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88838],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(k,r(r({ref:t},c),{},{components:a})):n.createElement(k,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},95381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const i={id:"mutation-mode",title:"Mutation Mode"},r=void 0,s={unversionedId:"advanced-tutorials/mutation-mode",id:"version-3.xx.xx/advanced-tutorials/mutation-mode",title:"Mutation Mode",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/mutation-mode.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/mutation-mode",permalink:"/docs/3.xx.xx/advanced-tutorials/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/mutation-mode.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1684838106,formattedLastUpdatedAt:"May 23, 2023",frontMatter:{id:"mutation-mode",title:"Mutation Mode"},sidebar:"someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/strapi-v4"},next:{title:"List Search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/list-search"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Modes",id:"modes",level:2},{value:"<code>pessimistic</code>",id:"pessimistic",level:3},{value:"<code>optimistic</code>",id:"optimistic",level:3},{value:"<code>undoable</code>",id:"undoable",level:3},{value:"Usage",id:"usage",level:2},{value:"Supported data hooks",id:"supported-data-hooks",level:3},{value:"Example",id:"example",level:2}],c=(u="CodeSandboxExample",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const p={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,o.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"undoable"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Each mode corresponds to a different type of user experience."),(0,o.kt)("h2",{id:"modes"},"Modes"),(0,o.kt)("p",null,"We'll show usages of modes with editing a record examples."),(0,o.kt)("h3",{id:"pessimistic"},(0,o.kt)("inlineCode",{parentName:"h3"},"pessimistic")),(0,o.kt)("p",null,"The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly."),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/pessimistic.gif",alt:"pessimistic mode"})),(0,o.kt)("br",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"optimistic"},(0,o.kt)("inlineCode",{parentName:"h3"},"optimistic")),(0,o.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation."),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/optimistic.gif",alt:"optimistic mode"})),(0,o.kt)("br",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"undoable"},(0,o.kt)("inlineCode",{parentName:"h3"},"undoable")),(0,o.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly."),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/undoable.gif",alt:"undoable mode"})),(0,o.kt)("br",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled, locally applied edit is undone.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Mutation mode can be set application-wide in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#mutationmode"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n    ...\n    options={{ mutationMode: "optimistic" }}\n/>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Its default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"pessimistic"),".")),(0,o.kt)("br",null),(0,o.kt)("p",null,"It can also be set in supported ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate#mutation-mode"},"data hooks")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm#properties"},"form hooks")," for fine-grained configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@pankod/refine-core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "categories",\n    id: "2",\n    values: { title: "New Category Title" },\n    // highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Mutation mode passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," will be overriden by the mutation mode passed to data or form hooks and components.")),(0,o.kt)("h3",{id:"supported-data-hooks"},"Supported data hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useUpdate/"},(0,o.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useUpdateMany/"},(0,o.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,o.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useDeleteMany/"},(0,o.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(c,{path:"mutation-mode",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);