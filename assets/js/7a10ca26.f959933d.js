"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"antd-custom-layout",title:"Layout"},i=void 0,p={unversionedId:"api-reference/antd/customization/antd-custom-layout",id:"api-reference/antd/customization/antd-custom-layout",title:"Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/docs/api-reference/antd/customization/layout.md",sourceDirName:"api-reference/antd/customization",slug:"/api-reference/antd/customization/antd-custom-layout",permalink:"/docs/api-reference/antd/customization/antd-custom-layout",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/antd/customization/layout.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1663689776,formattedLastUpdatedAt:"Sep 20, 2022",frontMatter:{id:"antd-custom-layout",title:"Layout"},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/api-reference/antd/customization/antd-custom-theme"},next:{title:"Sider",permalink:"/docs/api-reference/antd/customization/antd-custom-sider"}},c={},l=[{value:"Creating a Custom Layout",id:"creating-a-custom-layout",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],s={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can create custom layouts using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,o.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#footer"},(0,o.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#header"},(0,o.kt)("inlineCode",{parentName:"a"},"Header"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#offlayoutarea"},(0,o.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"Title")))),(0,o.kt)("h2",{id:"creating-a-custom-layout"},"Creating a Custom Layout"),(0,o.kt)("p",null,"Let's look at an example of modifying the default layout to have a top menu layout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/App.tsx"',title:'"/src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine-antd/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n// highlight-next-line\nimport { CustomSider } from "components";\n\nconst { Link } = routerProvider;\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            // highlight-start\n            Layout={({ children, Footer, OffLayoutArea }) => (\n                <AntdLayout>\n                    <AntdLayout.Header>\n                        <CustomSider />\n                    </AntdLayout.Header>\n                    <AntdLayout.Content>\n                        <AntdLayout.Content>\n                            <div style={{ padding: 24, minHeight: 360 }}>\n                                {children}\n                            </div>\n                        </AntdLayout.Content>\n                        {Footer && <Footer />}\n                    </AntdLayout.Content>\n                    {OffLayoutArea && <OffLayoutArea />}\n                </AntdLayout>\n            )}\n            // highlight-end\n            Title={() => (\n                <Link to="/" style={{ float: "left", marginRight: "10px" }}>\n                    <img src="/refine.svg" alt="Refine" />\n                </Link>\n            )}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"Here, we override the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"<Title>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>"))," components. When we override ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>")),", we put the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CustomSider>")," (insted of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>"))," that was provided to ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#layout"},(0,o.kt)("inlineCode",{parentName:"a"},"<Layout>"))," to render it by default) on top of ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/"},(0,o.kt)("inlineCode",{parentName:"a"},"<AntdLayout>")),"."),(0,o.kt)("p",null,"So, we just provided a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>")),". Here's our custom sider that looks horizontal, instead of the default vertical one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/components/sider/index.tsx"',title:'"/src/components/sider/index.tsx"'},'import { useTitle, useMenu } from "@pankod/refine-core";\nimport { Menu } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nconst { Link } = routerProvider;\n\nexport const CustomSider: React.FC = () => {\n    // highlight-start\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n    // highlight-end\n\n    return (\n        <>\n            // highlight-start\n            {Title && <Title collapsed={false} />}\n            <Menu selectedKeys={[selectedKey]} mode="horizontal">\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route ?? ""}>{label}</Link>\n                    </Menu.Item>\n                ))}\n            </Menu>\n            // highlight-end\n        </>\n    );\n};\n')),(0,o.kt)("p",null,"Here, we use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/ui/useMenu"},(0,o.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By default, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#sider"},(0,o.kt)("inlineCode",{parentName:"a"},"<Sider>"))," is responsible for rendering ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#title"},(0,o.kt)("inlineCode",{parentName:"a"},"<Title>")),". It gets this component (configured by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and/or ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")),") by ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/refine/useTitle"},(0,o.kt)("inlineCode",{parentName:"a"},"useTitle"))," hook.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/layout-wrapper"},"refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("p",null,"Here's how it looks in the end:"),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/customization/topMenuLayout?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-top-menu-layout-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}d.isMDXComponent=!0}}]);