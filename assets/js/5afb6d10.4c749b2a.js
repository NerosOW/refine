"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),h=i,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>u});n(67294);var r=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const c={title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-invoice-generator",authors:"melih",tags:["refine","react","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/refine-invoice-generator",source:"@site/blog/2022-03-01-refine-invoice-genarator-p2.md",title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:13.67,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",slug:"refine-invoice-generator",authors:"melih",tags:["refine","react","strapi"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks"},nextItem:{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator"},relatedPosts:[{title:"refine Open Source Hackathon 2",description:"The second refine Open Source Hackathon is an excellent opportunity for developers to showcase their skills, learn refine and win prizes!",permalink:"/blog/refine-hackathon-2",formattedDate:"June 14, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.22,date:"2023-06-14T00:00:00.000Z"},{title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",permalink:"/blog/react-tooltip",formattedDate:"May 23, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:13.47,date:"2023-05-23T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.935,date:"2022-09-29T00:00:00.000Z"}],authorPosts:[{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",description:"In this article, we will learn how we can create a full-featured customizable Web / B2B application with **refine** in just a few hours.",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.095,date:"2022-04-29T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.255,date:"2022-02-22T00:00:00.000Z"},{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",description:"This web application will  us to create issue and tasks for your team members. You will also be able to choose the priority of these tasks, their tags, and which person to assign them to.",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase",formattedDate:"November 12, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:17.175,date:"2021-11-12T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[],m={toc:u};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,r.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,r.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,r.kt)("p",{parentName:"admonition"},"You should know that ",(0,r.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),"."),(0,r.kt)("p",{parentName:"admonition"},"Just be aware that the source code example in this post have been updated to version 4.x.x.")),(0,r.kt)("p",null,"Looking for an invoice generator that is easy to use and lets you customize your invoices? With ",(0,r.kt)("strong",{parentName:"p"},"refine")," simple and intuitive interface, you can create your own invoices in few hours. Plus, we offer a wide range of templates and customization options so you can get the exact look you want. Learn more about our invoice generator here!"))}h.isMDXComponent=!0}}]);