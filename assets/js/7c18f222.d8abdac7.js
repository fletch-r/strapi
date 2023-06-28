"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[267],{7337:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=t(3117),o=(t(7294),t(3905));const s={title:"useAdminUsers",description:"API reference for the useAdminUsers hook",tags:["admin","hooks","users"]},a=void 0,i={unversionedId:"docs/core/admin/hooks/use-admin-users",id:"docs/core/admin/hooks/use-admin-users",title:"useAdminUsers",description:"API reference for the useAdminUsers hook",source:"@site/docs/docs/01-core/admin/04-hooks/use-admin-users.mdx",sourceDirName:"docs/01-core/admin/04-hooks",slug:"/docs/core/admin/hooks/use-admin-users",permalink:"/docs/core/admin/hooks/use-admin-users",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/04-hooks/use-admin-users.mdx",tags:[{label:"admin",permalink:"/tags/admin"},{label:"hooks",permalink:"/tags/hooks"},{label:"users",permalink:"/tags/users"}],version:"current",frontMatter:{title:"useAdminUsers",description:"API reference for the useAdminUsers hook",tags:["admin","hooks","users"]},sidebar:"docs",previous:{title:"Review Workflows",permalink:"/settings/review-workflows"},next:{title:"useEnterprise",permalink:"/docs/core/admin/hooks/use-enterprise"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Typescript",id:"typescript",level:2},{value:"Fetch all users",id:"fetch-all-users",level:3},{value:"Fetch one user",id:"fetch-one-user",level:3}],l={toc:u};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An abstraction around ",(0,o.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It can be used to fetch one ore more admin users."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The hooks can receive two optional parameters:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"query params: an object containing the query params to be sent to the API. They are going to be\nstringified by ",(0,o.kt)("inlineCode",{parentName:"li"},"qs"),". All params are equal except ",(0,o.kt)("inlineCode",{parentName:"li"},"id"),", which is used to fetch a single users, if\nit is passed."),(0,o.kt)("li",{parentName:"ol"},"options: an object containing the options to be passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"useQuery"),".")),(0,o.kt)("p",null,"It returns an object containing some of the react-query attributes."),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { UseQueryOptions } from 'react-query'\n\ntype User = object;\n\nuseAdminUsers(queryParams: object, reactQueryOptions: UseQueryOptions): {\n    users: User[];\n    pagination: {\n        page: number,\n        pageSize: number,\n        total: number,\n    } | null;\n    isLoading: boolean;\n    isError: boolean;\n    refetch: () => Promise<void>;\n};\n")),(0,o.kt)("h3",{id:"fetch-all-users"},"Fetch all users"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useAdminUsers } from 'path/to/hooks';\n\nconst MyComponent = ({ onMoveItem }) => {\n  const { users, isLoading, refetch } = useAdminUsers();\n\n  return /* ... */;\n};\n")),(0,o.kt)("h3",{id:"fetch-one-user"},"Fetch one user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Box } from '@strapi/design-system';\n\nimport { useAdminUsers } from 'path/to/hooks';\n\nconst MyComponent = ({ onMoveItem }) => {\n  const { users: [user], isLoading, refetch } = useAdminUsers({ id: 1 });\n\n  return /* ... */;\n};\n")))}p.isMDXComponent=!0},3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);