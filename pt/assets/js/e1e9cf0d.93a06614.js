"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5435],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),s=a,f=u["".concat(c,".").concat(s)]||u[s]||m[s]||o;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(2081),a=r(4604),o=(r(9496),r(9613)),p=["components"],i={id:"patch",title:"pnpm patch <pkg>"},c=void 0,l={unversionedId:"cli/patch",id:"cli/patch",title:"pnpm patch <pkg>",description:"Adicionado em: v7.4.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/patch.md",sourceDirName:"cli",slug:"/cli/patch",permalink:"/pt/next/cli/patch",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"patch",title:"pnpm patch <pkg>"},sidebar:"docs",previous:{title:"pnpm install-test",permalink:"/pt/next/cli/install-test"},next:{title:"pnpm patch-commit <path>",permalink:"/pt/next/cli/patch-commit"}},d={},m=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--edit-dir &lt;dir&gt;",id:"--edit-dir-dir",level:3}],u={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Adicionado em: v7.4.0"),(0,o.kt)("p",null,"Prepara um pacote para aplica\xe7\xe3o de patches (inspirado em um comando semelhante no Yarn)."),(0,o.kt)("p",null,"Este comando far\xe1 com que um pacote seja extra\xeddo em um diret\xf3rio tempor\xe1rio destinado a ser edit\xe1vel \xe0 vontade."),(0,o.kt)("p",null,"Quando terminar de fazer as altera\xe7\xf5es, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm patch-commit <path>")," (com ",(0,o.kt)("inlineCode",{parentName:"p"},"<path>")," sendo o diret\xf3rio tempor\xe1rio que voc\xea recebeu) para gerar um arquivo de patch e registr\xe1-lo em seu manifesto raiz por meio do campo ",(0,o.kt)("a",{parentName:"p",href:"/pt/next/package_json#pnpmpatcheddependencies"},(0,o.kt)("inlineCode",{parentName:"a"},"patchedDependencies")),"."),(0,o.kt)("p",null,"Uso:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm patch <pkg name>@<version>\n")),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/0GjLqRGRbcY",title:"A demonstra\xe7\xe3o do comando de patch do pnpm",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,o.kt)("h3",{id:"--edit-dir-dir"},"--edit-dir ","<","dir>"),(0,o.kt)("p",null,"Added in v7.11.0"),(0,o.kt)("p",null,"The package that needs to be patched will be extracted to this directory."))}s.isMDXComponent=!0}}]);