"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16497],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),m=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=m(a),u=r,g=h["".concat(c,".").concat(u)]||h[u]||s[u]||n;return a?i.createElement(g,o(o({ref:t},p),{},{components:a})):i.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<n;m++)o[m]=a[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var i=a(87462),r=(a(67294),a(3905));const n={title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",source:"@site/blog/2022-02-14-refine-ecommerce-blog.md",title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"e-commerce",permalink:"/blog/tags/e-commerce"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"chakra-ui",permalink:"/blog/tags/chakra-ui"},{label:"next.js",permalink:"/blog/tags/next-js"}],readingTime:10.915,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},nextItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},relatedPosts:[{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.495,date:"2022-09-22T00:00:00.000Z"},{title:"Web3 with Refine",permalink:"/blog/web3-with-refine",formattedDate:"December 13, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:1.68,date:"2021-12-13T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.64,date:"2022-07-21T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.39,date:"2022-03-29T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:10.955,date:"2022-02-22T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.51,date:"2022-03-16T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-02-14-refine-ecommerce-blog/basket.gif",alt:"basket"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"In this article, we will create the e-commerce client of our ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/multi-tenancy/strapi-v4"},"Strapi-Multitenancy")," admin panel that we have done before."),(0,r.kt)("p",null,"It is now used ",(0,r.kt)("strong",{parentName:"p"},"headless")," with the ",(0,r.kt)("strong",{parentName:"p"},"refine")," 3 version. You can use any UI library you want with the ",(0,r.kt)("strong",{parentName:"p"},"headless")," feature."),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," and ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra-UI")," together with ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/ssr/nextjs/"},(0,r.kt)("strong",{parentName:"a"},"Next.js"))," in our E-commerce client example application."))}s.isMDXComponent=!0}}]);