"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[44669],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(o),g=r,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||n;return o?a.createElement(h,i(i({ref:t},p),{},{components:o})):a.createElement(h,i({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<n;m++)i[m]=o[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},64407:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var a=o(87462),r=(o(67294),o(3905));const n={title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["lighthouse","seo","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/lighthouse-google-chrome",source:"@site/blog/2022-08-31-google-lighthouse.md",title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",date:"2022-08-31T00:00:00.000Z",formattedDate:"August 31, 2022",tags:[{label:"lighthouse",permalink:"/blog/tags/lighthouse"},{label:"seo",permalink:"/blog/tags/seo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:15.625,hasTruncateMarker:!0,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["lighthouse","seo","performance"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social.png",hide_table_of_contents:!1},prevItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},nextItem:{title:"CSS Grid vs Flexbox - A brief guide",permalink:"/blog/css-grid-vs-flexbox"},relatedPosts:[{title:"React memo guide with examples",permalink:"/blog/react-memo-guide",formattedDate:"September 13, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.01,date:"2022-09-13T00:00:00.000Z"},{title:"React useMemo hook guide with examples",permalink:"/blog/react-usememo",formattedDate:"September 16, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.335,date:"2022-09-16T00:00:00.000Z"},{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide",formattedDate:"September 20, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:5.37,date:"2022-09-20T00:00:00.000Z"}],authorPosts:[{title:"Comparing the best headless CMS solutions",permalink:"/blog/best-headless-cms",formattedDate:"February 8, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:10.145,date:"2023-02-08T00:00:00.000Z"},{title:"How to Build a React Admin Panel with Mantine and Strapi",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.12,date:"2023-02-23T00:00:00.000Z"},{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",permalink:"/blog/react-hook-form-vs-formik",formattedDate:"January 30, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:7.99,date:"2023-01-30T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"As websites and web applications become more complex, it is necessary to measure and track their overall quality to provide a seamless browsing experience to your clients. Though several other tools exist for this purpose, Google lighthouse is quite popular among web developers mainly because it is part of the Chrome DevTools."),(0,r.kt)("p",null,"If it doesn't meet your needs as part of Chrome DevTools, Google lighthouse is also readily available as a Node package or command line utility. You can use it for auditing a website for performance, best practices, accessibility, progressive web app (PWA), and search engine optimization(SEO)."),(0,r.kt)("p",null,"You will explore the different ways of using Google Lighthouse in this article. You will also learn how to remedy some of the issues highlighted in the performance measurement and use Google lighthouse in continuous integration(CI) workflow."))}u.isMDXComponent=!0}}]);