"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",slug:"refine-pixels-6",authors:"abdullah_numan",tags:["refine-week","refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-19-refine-pixels-6%2Fsocial.png",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/refine-pixels-6",source:"@site/blog/2023-02-19-refine-pixels-6.md",title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",date:"2023-02-19T00:00:00.000Z",formattedDate:"February 19, 2023",tags:[{label:"refine-week",permalink:"/blog/tags/refine-week"},{label:"refine",permalink:"/blog/tags/refine"},{label:"supabase",permalink:"/blog/tags/supabase"}],readingTime:11.76,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"Implementing Role Based Access Control",description:"We'll implement Role Based Access Control (RBAC)",slug:"refine-pixels-6",authors:"abdullah_numan",tags:["refine-week","refine","supabase"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-19-refine-pixels-6%2Fsocial.png",hide_table_of_contents:!1},prevItem:{title:"Audit Log With refine",permalink:"/blog/refine-pixels-7"},nextItem:{title:"Creating an Admin Dashboard with refine",permalink:"/blog/refine-pixels-5"},relatedPosts:[{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.425,date:"2022-05-05T00:00:00.000Z"},{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.075,date:"2021-11-29T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:18.205,date:"2021-11-12T00:00:00.000Z"}],authorPosts:[{title:"Setting Up the Client App",permalink:"/blog/refine-pixels-2",formattedDate:"February 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:13.255,date:"2023-02-15T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.37,date:"2022-09-20T00:00:00.000Z"},{title:"Adding CRUD Actions and Authentication",permalink:"/blog/refine-pixels-3",formattedDate:"February 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:28.405,date:"2023-02-16T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"refineWeek series",id:"refineweek-series",level:3},{value:"Overview",id:"overview",level:2},{value:"Casbin with <strong>refine</strong>",id:"casbin-with-refine",level:2},{value:"Casbin Model and Policies",id:"casbin-model-and-policies",level:3},{value:"Browser Fallbacks for Casbin",id:"browser-fallbacks-for-casbin",level:3},{value:"<code>&lt;Refine /&gt;</code>&#39;s <code>accessControlProvider</code>",id:"refine-s-accesscontrolprovider",level:2},{value:"<strong>refine</strong> <code>can</code> Method",id:"refine-can-method",level:3},{value:"User Permissions with Supabase in Refine",id:"user-permissions-with-supabase-in-refine",level:2},{value:"Setting Up User Roles with Supabase Custom Claims",id:"setting-up-user-roles-with-supabase-custom-claims",level:3},{value:"<strong>refine</strong> <code>getPermissions()</code> with Supabase Custom Claims",id:"refine-getpermissions-with-supabase-custom-claims",level:3},{value:"refine <code>can</code> Method for Supabase Custom Roles",id:"refine-can-method-for-supabase-custom-roles",level:2},{value:"Low Level Inspection",id:"low-level-inspection",level:2},{value:"Summary",id:"summary",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this post, we implement Role Based Access Control (RBAC) on our ",(0,i.kt)("strong",{parentName:"p"},"Pixels Admin")," app. ",(0,i.kt)("strong",{parentName:"p"},"Pixels Admin")," serves as the admin dashboard of our ",(0,i.kt)("strong",{parentName:"p"},"Pixels")," client app that we built previously in the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/week-of-refine/"},(0,i.kt)("strong",{parentName:"a"},"refineWeek"))," series."),(0,i.kt)("p",null,"This is Day 6, and ",(0,i.kt)("strong",{parentName:"p"},"refineWeek")," is a seven-part tutorial that aims to help developers learn the ins-and-outs of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},(0,i.kt)("strong",{parentName:"a"},"refine"),"'"),"s powerful capabilities and get going with ",(0,i.kt)("strong",{parentName:"p"},"refine")," within a week."),(0,i.kt)("h3",{id:"refineweek-series"},"refineWeek series"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Day 1 - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-1/"},"Pilot & refine architecture")),(0,i.kt)("li",{parentName:"ul"},"Day 2 - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-2/"},"Setting Up the Client App")),(0,i.kt)("li",{parentName:"ul"},"Day 3 - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-3/"},"Adding CRUD Actions and Authentication")),(0,i.kt)("li",{parentName:"ul"},"Day 4 - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-4/"},"Adding Realtime Collaboration")),(0,i.kt)("li",{parentName:"ul"},"Day 5 - ",(0,i.kt)("a",{parentName:"li",href:"https://refine.dev/blog/refine-pixels-5/"},"Creating an Admin Dashboard with refine"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"On Day 5, we implemented CRUD functionalities on our dashboard resources: ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"canvases"),"."),(0,i.kt)("p",null,"Taking it farther today, we add authorization for actions related to ",(0,i.kt)("inlineCode",{parentName:"p"},"canvases")," resource at ",(0,i.kt)("inlineCode",{parentName:"p"},"/canvases")," route. We have have two roles that seek authorization: ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),". An ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," is allowed to only promote and unpromote a ",(0,i.kt)("inlineCode",{parentName:"p"},"canvas"),", whereas  an ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," is free to promote / unpromote a ",(0,i.kt)("inlineCode",{parentName:"p"},"canvas")," as well as delete it. Here's a short description of the specs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"editor")," can promote and unpromote a canvas."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"editor")," cannot perform any other action."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"admin")," can promote and unpromote a canvas."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"admin")," can delete a canvas."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"admin")," cannot perform any other action.")),(0,i.kt)("p",null,"We manage RBAC and authorization using ",(0,i.kt)("a",{parentName:"p",href:"https://casbin.org/docs/overview"},(0,i.kt)("strong",{parentName:"a"},"Casbin"))," models and policies. We then make use of ",(0,i.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," and associated hooks to enforce policies for these roles."),(0,i.kt)("p",null,"For the backend, we set and store ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," roles with the help of ",(0,i.kt)("strong",{parentName:"p"},"Supabase Custom Claims"),". ",(0,i.kt)("strong",{parentName:"p"},"Supabase Custom Claims")," are a handy mechanism to store user roles information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.users")," table."),(0,i.kt)("p",null,"We also dig into some low level code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<DeleteButton />")," component that ",(0,i.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,i.kt)("strong",{parentName:"p"},"Ant Design")," package gives us to see how authorization comes baked into some of the related components."),(0,i.kt)("p",null,"Let's start with ",(0,i.kt)("strong",{parentName:"p"},"Casbin"),"."),(0,i.kt)("h2",{id:"casbin-with-refine"},"Casbin with ",(0,i.kt)("strong",{parentName:"h2"},"refine")),(0,i.kt)("p",null,"In this app, we are implementing Role Based Access Control model with ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," so we assume you are at least familiar with the RBAC related models and policies."),(0,i.kt)("p",null,"If you are not familiar with ",(0,i.kt)("strong",{parentName:"p"},"Casbin"),", please feel free to go through ",(0,i.kt)("a",{parentName:"p",href:"https://casbin.org/docs/how-it-works"},"how it works"),". For a complete beginner, I recommend understanding the following sections in the ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," docs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/get-started"},"Get Started")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/how-it-works"},"How It Works")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/supported-models"},"Supported Models")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/syntax-for-models"},"Syntax for Models")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/model-storage"},"Model Storage")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/policy-storage"},"Policy Storage")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/enforcers"},"Enforcers")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/adapters"},"Adapters")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/role-managers"},"Role Managers")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://casbin.org/docs/rbac"},"RBAC"))),(0,i.kt)("p",null,"If / when you are familiar, lovely yay! Be with me, go ahead and install ",(0,i.kt)("strong",{parentName:"p"},"Casbin"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add casbin\n")),(0,i.kt)("h3",{id:"casbin-model-and-policies"},"Casbin Model and Policies"),(0,i.kt)("p",null,"We are using the following ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," and policy ",(0,i.kt)("inlineCode",{parentName:"p"},"adapter")," for our RBAC implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/casbin/accessControl.ts"',title:'"src/casbin/accessControl.ts"'},'import { newModel, StringAdapter } from "casbin";\n\nexport const model = newModel(`\n  [request_definition]\n  r = sub, obj, act\n\n  [policy_definition]\n  p = sub, obj, act\n\n  [role_definition]\n  g = _, _\n\n  [policy_effect]\n  e = some(where (p.eft == allow))\n\n  [matchers]\n  m = g(r.sub, p.sub) && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n`);\n\nexport const adapter = new StringAdapter(`\n  p, admin, users, list\n  p, admin, canvases, (list)|(edit)|(delete)\n\n  p, editor, users, list\n  p, editor, canvases, (list)|(edit)\n`);\n')),(0,i.kt)("p",null,"A quick run down of the ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"with the request definition in ",(0,i.kt)("inlineCode",{parentName:"li"},"r = sub, obj, act"),", ",(0,i.kt)("strong",{parentName:"li"},"Casbin")," scans the request for the subject (",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"admin"),"), object (the ",(0,i.kt)("inlineCode",{parentName:"li"},"resource"),") and the action (",(0,i.kt)("inlineCode",{parentName:"li"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"edit"),", etc.)."),(0,i.kt)("li",{parentName:"ul"},"with the same parameters in ",(0,i.kt)("inlineCode",{parentName:"li"},"p = sub, obj, act"),", it compares the request parameters with those in the policy instances declared in the policy adapter"),(0,i.kt)("li",{parentName:"ul"},"with the two level grouping in ",(0,i.kt)("inlineCode",{parentName:"li"},"g = _, _"),", we are declaring user role inheritance can go two levels deep, i.e. an ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"user"),".")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"adapter")," holds our instances of policies produced from ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),". The policies above basically allows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," users."),(0,i.kt)("li",{parentName:"ul"},"an admin to ",(0,i.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"edit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"delete")," canvases."),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," users."),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"editor")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"edit")," canvases.")),(0,i.kt)("h3",{id:"browser-fallbacks-for-casbin"},"Browser Fallbacks for Casbin"),(0,i.kt)("p",null,"We need to configure polyfills for ",(0,i.kt)("inlineCode",{parentName:"p"},"casbin")," to work in a browser environment. We are using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-app-rewired")," to override some of the configurations of our app. So, let's first add the following to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-node"},"yarn add react-app-rewired\n")),(0,i.kt)("p",null,"And update the scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n    "start": "react-app-rewired start",\n    "build": "react-app-rewired build",\n    "eject": "react-scripts eject",\n    "refine": "refine"\n },\n')),(0,i.kt)("p",null,"After that add the following packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add assert buffer crypto-browserify stream-browserify\n\nyarn add -D https-browserify os-browserify path stream-http\n")),(0,i.kt)("p",null,"And then include this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/anewman15/refine/blob/pixels-admin/examples/pixels-admin/config-overrides.js"},(0,i.kt)("inlineCode",{parentName:"a"},"config-overrides.js"))," file to the root of the app folder."),(0,i.kt)("p",null,"Without these overrides, ",(0,i.kt)("inlineCode",{parentName:"p"},"casbin")," versions ",(0,i.kt)("inlineCode",{parentName:"p"},">5")," is known to throw errors."),(0,i.kt)("p",null,"With this out of the way and the ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," model policies ready, it's time for us to define the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),"."),(0,i.kt)("h2",{id:"refine-s-accesscontrolprovider"},(0,i.kt)("inlineCode",{parentName:"h2"},"<Refine />"),"'s ",(0,i.kt)("inlineCode",{parentName:"h2"},"accessControlProvider")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"<Refine />"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," is responsible for enforcing authorization on every request sent from the app. If we look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"<App />")," component, we can see that it comes passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine />")," component with the boilerplate code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"...\n<Refine\n    accessControlProvider={accessControlProvider}\n/>\n...\n")),(0,i.kt)("h3",{id:"refine-can-method"},(0,i.kt)("strong",{parentName:"h3"},"refine")," ",(0,i.kt)("inlineCode",{parentName:"h3"},"can")," Method"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," implements only one method named ",(0,i.kt)("inlineCode",{parentName:"p"},"can"),". It has the following type signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type CanParams = {\n    resource: string;\n    action: string;\n    params?: {\n        resource?: IResourceItem;\n        id?: BaseKey;\n        [key: string]: any;\n    };\n};\n")),(0,i.kt)("p",null,"Let's now work on the ",(0,i.kt)("inlineCode",{parentName:"p"},"can")," method. We can see from the type definition that ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," are compulsory. Initially we define our ",(0,i.kt)("inlineCode",{parentName:"p"},"can")," method like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/providers/accessControlProvider.ts"',title:'"src/providers/accessControlProvider.ts"'},'import { newEnforcer } from "casbin";\nimport { CanParams, CanReturnType } from "@pankod/refine-core";\nimport { adapter, model } from "../casbin/accessControl";\nimport { supabaseClient } from "utility";\n\nexport const accessControlProvider = {\n  can: async ({ resource, action }: CanParams): Promise<CanReturnType> => {\n    const enforcer = await newEnforcer(model, adapter);\n    const can = await enforcer.enforce("admin", resource, action);\n\n    return Promise.resolve({\n      can,\n    });\n  }\n};\n')),(0,i.kt)("p",null,"We will modify this gradually to witness the functionality facilitated out-of-the-box by ",(0,i.kt)("strong",{parentName:"p"},"refine")," for each role defined in the policies. We will finalize it after we update the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," method in ",(0,i.kt)("strong",{parentName:"p"},"Supabase")," ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,i.kt)("p",null,"But for now, notice in the above definition that we are passing the compulsory ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," parameters to ",(0,i.kt)("inlineCode",{parentName:"p"},"can"),". We expect the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCan()")," access control hook to take these two arguments."),(0,i.kt)("p",null,"For more use cases and implementations of ",(0,i.kt)("inlineCode",{parentName:"p"},"can"),", feel free to go through the elaborate examples in ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/advanced-tutorials/access-control/"},"this definitive and guiding post"),"."),(0,i.kt)("p",null,"In the above code, we are initializing a ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Enforcer")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"adapter"),". We want this ",(0,i.kt)("inlineCode",{parentName:"p"},"enforcer")," to enforce the policies with its accepted arguments. At the end, we get the ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean")," decision based on the model's policy effect."),(0,i.kt)("p",null,"From inside a component, the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider.can")," method will be invoked via the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/hooks/accessControl/useCan/"},(0,i.kt)("inlineCode",{parentName:"a"},"useCan()")," hook"),"."),(0,i.kt)("p",null,"With this code now, there should be no change in our UI. That is, we should be able to view the contents of both our ",(0,i.kt)("inlineCode",{parentName:"p"},"/users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/canvases")," resources like they were before. When we visit the ",(0,i.kt)("inlineCode",{parentName:"p"},"/canvases")," route, we should have all the buttons displayed."),(0,i.kt)("p",null,"We expect this behavior to change when we change the role. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"can")," method above let's set the first argument of ",(0,i.kt)("inlineCode",{parentName:"p"},"enforcer.enforce()")," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"editor"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const can = await enforcer.enforce("editor", resource, action);\n')),(0,i.kt)("p",null,"And if we refresh at ",(0,i.kt)("inlineCode",{parentName:"p"},"/canvases"),", we can see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," button on each row gets disabled."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-19-refine-pixels-6%2Ffirst.png",alt:"react admin dashboard"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"This is because now our policy for ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," has taken effect."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," button gets disabled because ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"'s special buttons like the ",(0,i.kt)("inlineCode",{parentName:"p"},"<DeleteButton />")," are enabled or disabled based on the result of access control enforcement. Our ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," policies do not allow a ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," action on ",(0,i.kt)("inlineCode",{parentName:"p"},"canvases")," resource, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," button is disabled."),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/accessControl-provider/#buttons"},"this section")," of the ",(0,i.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/core/providers/accessControl-provider/"},(0,i.kt)("inlineCode",{parentName:"a"},"accessControlProvider")," API reference")," for the complete list of buttons that check for and depend on user authorization state in ",(0,i.kt)("strong",{parentName:"p"},"refine"),"."),(0,i.kt)("p",null,"At this point, we have manipulated the role with changes in our code. This should, however, come from the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," method."),(0,i.kt)("p",null,"So, let's look how to get the roles from our ",(0,i.kt)("strong",{parentName:"p"},"Supabase")," database next."),(0,i.kt)("h2",{id:"user-permissions-with-supabase-in-refine"},"User Permissions with Supabase in Refine"),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"refine"),", user roles are fetched by ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," method. It is already defined for us by ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-supabase"),". Right now, it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/providers/authProvider.ts"',title:'"src/providers/authProvider.ts"'},"getPermissions: async () => {\n    const user = supabaseClient.auth.user();\n\n    if (user) {\n        return Promise.resolve(user.role);\n    }\n},\n")),(0,i.kt)("p",null,"However, ",(0,i.kt)("strong",{parentName:"p"},"Supabase")," in itself does not support ",(0,i.kt)("strong",{parentName:"p"},"setting")," user roles to ",(0,i.kt)("inlineCode",{parentName:"p"},"user"),"s in the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.users")," table. So, it is not possible to set ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," roles we need for our designated users. And only two role options are available to the front end app: ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticated")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"anon"),"."),(0,i.kt)("p",null,"So, before we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," method, we have to set up custom user roles. One way to implement this is with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/supabase-custom-claims"},(0,i.kt)("strong",{parentName:"a"},"Supabase Custom Claims")),"."),(0,i.kt)("h3",{id:"setting-up-user-roles-with-supabase-custom-claims"},"Setting Up User Roles with Supabase Custom Claims"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supabase Custom Claims")," is a community contribution that enables setting additional data to the access token that a user receives from ",(0,i.kt)("strong",{parentName:"p"},"Supabase"),". These claims are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.users.raw_app_meta_data")," field and is sent to the client with the access token. We are going to use these custom claims to set and retrieve user roles for our app."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supabase")," does not support custom claims on its own. Due credits to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/burggraf"},"@burggraf"),", they are enabled by installing a number of functions on our database. These functions allow us to set and get custom claims for a particular user in the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth.users")," table."),(0,i.kt)("p",null,"Here are two crucial particulars on how they work:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only a user with a ",(0,i.kt)("inlineCode",{parentName:"li"},"{ claims_admin: true }")," claim can set claims data on others. So we need to bootstrap a ",(0,i.kt)("inlineCode",{parentName:"li"},"claims_admin")," role for a first user using the ",(0,i.kt)("strong",{parentName:"li"},"Supabase")," SQL Editor."),(0,i.kt)("li",{parentName:"ul"},"Our app can access the getter and setter functions via ",(0,i.kt)("strong",{parentName:"li"},"Supabase")," Remote Procedure Calls (RPCs) with the ",(0,i.kt)("inlineCode",{parentName:"li"},"supabaseClient.rpc()")," method.")),(0,i.kt)("p",null,"With these in mind, let's go ahead and set up ",(0,i.kt)("strong",{parentName:"p"},"Supabase Custom Claims")," on our database."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Installing Custom Claims Functions")),(0,i.kt)("p",null,"Let's start with installing the custom claims SQL functions. Copy, paste and run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/supabase-custom-claims/blob/main/install.sql"},"install.sql")," script in your ",(0,i.kt)("strong",{parentName:"p"},"Supabase")," SQL Editor."),(0,i.kt)("p",null,"Take a note of the function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_my_claims()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="https://github.com/supabase-community/supabase-custom-claims/blob/main/install.sql"',title:'"https://github.com/supabase-community/supabase-custom-claims/blob/main/install.sql"'},"CREATE OR REPLACE FUNCTION get_my_claims() RETURNS \"jsonb\"\n    LANGUAGE \"sql\" STABLE\n    AS $$\n  select\n    coalesce(nullif(current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata', '{}'::jsonb)::jsonb\n")),(0,i.kt)("p",null,"This SQL function will help us to remotely get user roles for our app. And we are going to call it from our ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," method. To understand the details, please read through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/supabase-custom-claims#getting-claims-data-from-the-server"},(0,i.kt)("strong",{parentName:"a"},"Supabhase Custom Claims")," page"),"."),(0,i.kt)("br",null),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Bootstrapping Claims Admin Role")),(0,i.kt)("p",null,"We then have to bootstrap a ",(0,i.kt)("inlineCode",{parentName:"p"},"claims_admin")," role because only users with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ claims_admin: true }")," can set claims data for other users. This is necessary for security of the claims admin feature, and not for our app code. So, in the ",(0,i.kt)("strong",{parentName:"p"},"Supabase")," SQL Editor run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select set_claim('designated-user-uuid', 'claims_admin', 'true');\n")),(0,i.kt)("p",null,"This will allow the user with id ",(0,i.kt)("inlineCode",{parentName:"p"},"designated-user-uuid")," to set roles for other users from inside our app."),(0,i.kt)("p",null,"We can also set other data from the SQL Editor, such as the role itself. Let's use the following SQL query to set roles for some of our designated users. Doing so will help us in the coming sections:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select set_claim('designated-user-uuid', 'role', '\"editor\"');\nselect set_claim('another-designated-user-uuid', 'role', '\"admin\"');\n")),(0,i.kt)("p",null,"We need to take special care about using the correct quotations. More on this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/supabase-community/supabase-custom-claims#set_claimuid-uuid-claim-text-value-jsonb-returns-text"},"in this section"),"."),(0,i.kt)("p",null,"With these done, we are ready to update our ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"can")," methods."),(0,i.kt)("h3",{id:"refine-getpermissions-with-supabase-custom-claims"},(0,i.kt)("strong",{parentName:"h3"},"refine")," ",(0,i.kt)("inlineCode",{parentName:"h3"},"getPermissions()")," with Supabase Custom Claims"),(0,i.kt)("p",null,"Here's the adjusted ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="providers/dataProvider.ts"',title:'"providers/dataProvider.ts"'},"getPermissions: async () => {\n    const user = supabaseClient.auth.user();\n\n    if (!user) {\n        return Promise.reject();\n    }\n\n    const { data } = await supabaseClient.rpc('get_my_claim', { claim: 'role' });\n    return Promise.resolve(data);\n},\n")),(0,i.kt)("p",null,"Here, we are basically using the ",(0,i.kt)("inlineCode",{parentName:"p"},"supabaseClient.rpc()")," method to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_my_claims")," SQL function remotely."),(0,i.kt)("h2",{id:"refine-can-method-for-supabase-custom-roles"},"refine ",(0,i.kt)("inlineCode",{parentName:"h2"},"can")," Method for Supabase Custom Roles"),(0,i.kt)("p",null,"And now, we can finalize our ",(0,i.kt)("inlineCode",{parentName:"p"},"can")," method with ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," received from ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider.getPermissions()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="providers/accessControlProvider.ts"',title:'"providers/accessControlProvider.ts"'},"export const accessControlProvider = {\n    can: async ({ resource, action }: CanParams): Promise<CanReturnType> => {\n        const role = await authProvider.getPermissions();\n\n        const enforcer = await newEnforcer(model, adapter);\n        const can = await enforcer.enforce(role, resource, action);\n\n        return Promise.resolve({\n            can,\n        });\n    }\n};\n")),(0,i.kt)("p",null,"Earlier on, we have set ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," roles for a few designated users using the ",(0,i.kt)("strong",{parentName:"p"},"Supabase")," SQL Editor. Now, logging into their respective accounts will display the dashboard with ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," policies applied."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"/canvases")," route, an ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," account should have the ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," buttons disabled because we don't have it in our policies."),(0,i.kt)("p",null,"In contrast, it is enabled for an ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," role:"),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog%2F2023-02-19-refine-pixels-6%2Fsecond.png",alt:"react admin dashboard"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"But, wait! We haven't used the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCan()")," hook or the ",(0,i.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," component anywhere yet. How does ",(0,i.kt)("strong",{parentName:"p"},"refine")," get the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," to decide whether to enable or disable the button? Let's find out next!"),(0,i.kt)("h2",{id:"low-level-inspection"},"Low Level Inspection"),(0,i.kt)("p",null,"If we dig into the ",(0,i.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," package for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<DeleteButton />")," component, we can see that ",(0,i.kt)("inlineCode",{parentName:"p"},"useCan()")," hook is used to decide the authorization status:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="node_modules/@pankod/refine-antd/src/components/buttons/delete/index.ts"',title:'"node_modules/@pankod/refine-antd/src/components/buttons/delete/index.ts"'},'export const DeleteButton: React.FC<DeleteButtonProps> = ({\n    ...\n}) => {\n    ...\n\n    const { data } = useCan({\n        resource: resourceName,\n        action: "delete",\n        params: { id, resource },\n        queryOptions: {\n                enabled: accessControlEnabled,\n        },\n    });\n\n    if (accessControlEnabled && hideIfUnauthorized && !data?.can) {\n        return null;\n    }\n\n    ...\n};\n')),(0,i.kt)("p",null,"Since authorization comes baked in with ",(0,i.kt)("inlineCode",{parentName:"p"},"<DeleteButton />"),", we didn't have to worry about it in our case."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this post, we implemented Role Based Access Control on ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"canvases")," resources using ",(0,i.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," in our ",(0,i.kt)("strong",{parentName:"p"},"Pixels Admin")," app."),(0,i.kt)("p",null,"We used ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," model and policies to enforce authorization for ",(0,i.kt)("inlineCode",{parentName:"p"},"editor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," roles. We saw how the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessControlProvider.can")," method is used to enforce ",(0,i.kt)("strong",{parentName:"p"},"Casbin")," policies based on roles fetched from the backend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider.getPermissions")," method. We also learned how ",(0,i.kt)("strong",{parentName:"p"},"refine-antd")," buttons like the ",(0,i.kt)("inlineCode",{parentName:"p"},"<DeleteButton />")," implements access control via the ",(0,i.kt)("inlineCode",{parentName:"p"},"useCan()")," access hook."),(0,i.kt)("p",null,"In the next episode, we will explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"auditLogProvider")," prop and add audit logging for ",(0,i.kt)("inlineCode",{parentName:"p"},"pixels")," activities to both our ",(0,i.kt)("strong",{parentName:"p"},"Pixels")," and ",(0,i.kt)("strong",{parentName:"p"},"Pixels Admin")," apps."))}m.isMDXComponent=!0}}]);