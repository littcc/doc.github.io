(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(d,c(c({ref:t},b),{},{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(105)),o={title:"\u5f00\u59cb\u4f7f\u7528"},c={unversionedId:"request/introduction",id:"request/introduction",isDocsHomePage:!1,title:"\u5f00\u59cb\u4f7f\u7528",description:"\u4ecb\u7ecd",source:"@site/docs/request/introduction.md",slug:"/request/introduction",permalink:"/doc.github.io/docs/request/introduction",version:"current"},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u4e3a\u4f55\u9009\u62e9Mobx\u505a\u72b6\u6001\u7ba1\u7406",id:"\u4e3a\u4f55\u9009\u62e9mobx\u505a\u72b6\u6001\u7ba1\u7406",children:[]},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",children:[]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[]},{value:"Taro CLI \u914d\u7f6e\u7528\u6cd5",id:"taro-cli-\u914d\u7f6e\u7528\u6cd5",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(i.b)("p",null,"\u4f7f\u7528\u672c\u9879\u76ee\u521d\u59cb\u5316\u9879\u76ee,\u5c06\u8282\u7ea6\u5927\u91cf\u524d\u671f\u914d\u7f6e\u6210\u672c, \u672c\u9879\u76ee\u96c6\u6210\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"eslint pre-commit prettier stylelint")," \u7b49\u9879\u76ee\u521d\u59cb\u5316\u5de5\u4f5c, \u5e76\u589e\u52a0\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"taro-request taro-utils y-taro-ui")," \u7b49\u5de5\u5177, \u63d0\u4f9b\u4e86 ",Object(i.b)("inlineCode",{parentName:"p"},"mobx taro-request")," \u7684\u9875\u9762\u4f7f\u7528\u8303\u4f8b, \u5f00\u7bb1\u5373\u98df."),Object(i.b)("p",null,"\u9879\u76ee\u9ed8\u8ba4\u9009\u7528 React + Typescript + Mobx + less \u6765\u521d\u59cb\u5316"),Object(i.b)("h2",{id:"\u4e3a\u4f55\u9009\u62e9mobx\u505a\u72b6\u6001\u7ba1\u7406"},"\u4e3a\u4f55\u9009\u62e9Mobx\u505a\u72b6\u6001\u7ba1\u7406"),Object(i.b)("p",null,"Mobx\u662f\u4e00\u6b3e\u5b66\u4e60\u7b80\u5355\uff0c\u6269\u5c55\u65b9\u4fbf\u7684\u72b6\u6001\u7ba1\u7406\uff0c\u5b83\u901a\u8fc7\u8fd0\u7528\u900f\u660e\u7684\u51fd\u6570\u5f0f\u54cd\u5e94\u7f16\u7a0b\uff08Transparent Functional Reactive Programming\uff0cTFRP\uff09\u4f7f\u72b6\u6001\u7ba1\u7406\u53d8\u5f97\u7b80\u5355\u548c\u53ef\u6269\u5c55\u3002 \u975e\u5e38\u9002\u5408\u4f5c\u4e3a\u5c0f\u7a0b\u5e8f\u7684\u72b6\u6001\u7ba1\u7406. ",Object(i.b)("a",{parentName:"p",href:"https://zh.mobx.js.org/README.html"},"Mobx\u5b66\u4e60")),Object(i.b)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),Object(i.b)("p",null,"\u6a21\u677f\u57fa\u4e8etaro\u7248\u672c\u4e3a3.x.x\u4fee\u6539, \u8bf7\u52a1\u5fc5\u4fdd\u6301\u9879\u76ee\u662f3.x.x\u7248\u672c"),Object(i.b)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u6a21\u677f\u6e90 ",Object(i.b)("inlineCode",{parentName:"li"},"taro config set templateSource gitlab:code.yunzhanghu.com:fe/y-taro-template#master")),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"taro init --clone https://code.yunzhanghu.com/fe/y-taro-template.git")," \u521d\u59cb\u5316\u9879\u76ee"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"Typescript")," \u4f5c\u4e3a\u5f00\u53d1\u8bed\u8a00"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"React")," \u6846\u67b6"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"mobx")," \u6a21\u677f"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"less")," CSS \u9884\u5904\u7406\u5668"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"\u672c\u5730\u6a21\u677f\u6e90\uff1agitlab:code.yunzhanghu.com:fe/y-taro-template#master")," \u6a21\u677f\u6e90"),Object(i.b)("li",{parentName:"ul"},"\u9009\u62e9 ",Object(i.b)("inlineCode",{parentName:"li"},"YZH")," \u6a21\u677f")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u521d\u59cb\u5316\u521b\u5efa\u5b8c\u9879\u76ee\u540e\u5c06\u76ee\u5f55 pkg \u6587\u4ef6\u4fee\u6539\u4e3a package.json \u6267\u884c yarn install \u5f00\u59cb\u5f00\u53d1")),Object(i.b)("h2",{id:"taro-cli-\u914d\u7f6e\u7528\u6cd5"},"Taro CLI \u914d\u7f6e\u7528\u6cd5"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"1.3.9")," \u5f00\u59cb Taro \u4f1a\u5728\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u521b\u5efa .taro \u6587\u4ef6\u5939\uff0c\u5176\u4e2d .taro/index.json \u7528\u4e8e\u5b58\u653e CLI \u76f8\u5173\u914d\u7f6e\n\u6a21\u677f\u6e90\u4e3a CLI \u914d\u7f6e\u9879\u7684 ",Object(i.b)("inlineCode",{parentName:"p"},"templateSource")," \u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"taro config")," \u547d\u4ee4\u5bf9\u5176\u8fdb\u884c\u64cd\u4f5c"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"# \u67e5\u770b\u7528\u6cd5\n$ taro config --help\n# \u8bbe\u7f6e\u914d\u7f6e\u9879<key>\u7684\u503c\u4e3a<value>\n$ taro config set <key> <value>\n# \u8bfb\u53d6\u914d\u7f6e\u9879<key>\n$ taro config get <key>\n# \u5220\u9664\u914d\u7f6e\u9879<key>\n$ taro config delete <key>\n# \u6253\u5370\u6240\u6709\u914d\u7f6e\u9879\n$ taro config list [--json]\n")),Object(i.b)("h1",{id:"\u5f00\u53d1\u8ba1\u5212"},"\u5f00\u53d1\u8ba1\u5212"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",{parentName:"ul"},"[\u2714\ufe0f]"," eslint"),Object(i.b)("li",{parentName:"ul"},"[\u2714\ufe0f]"," git pre-commit and commit-msg hooks "),Object(i.b)("li",{parentName:"ul"},"[\u2714\ufe0f]"," prettier"),Object(i.b)("li",{parentName:"ul"},"[\u2714\ufe0f]"," stylelint"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","app update check integration"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","sentry integration"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","growingio integration")))}p.isMDXComponent=!0}}]);