(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return y}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,y=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(y,s(s({ref:t},i),{},{components:a})):r.a.createElement(y,s({ref:t},i))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},115:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),o=a(107),l=a(109),s=a(56),c=a.n(s);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(o.a)(c.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},116:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=a(0),l={Prism:n.a,theme:r};function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},p=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=c({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=c({},a,{backgroundColor:null}),r};function d(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?p(e.theme,e.language):void 0;return t.themeDict=a})),s(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=c({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?c({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),s(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},s=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=c({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?c({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),s(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,s=[],c=[s];l>-1;){for(;(o=n[l]++)<r[l];){var p=void 0,d=t[l],y=a[l][o];if("string"==typeof y?(d=l>0?d:["plain"],p=y):(d=u(d,y.type),y.alias&&(d=u(d,y.alias)),p=y.content),"string"==typeof p){var g=p.split(i),h=g.length;s.push({types:d,content:g[0]});for(var f=1;f<h;f++)m(s),c.push(s=[]),s.push({types:d,content:g[f]})}else l++,t.push(d),a.push(p),n.push(0),r.push(p.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return m(s),c}(void 0!==l?this.tokenize(t,n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=y},120:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},121:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(107),l=a(105),s=a(108),c=a(109),i=a(122),m=a(119),u=a(87),p=a.n(u),d=a(106);t.a=function(e){const t=function(){const{selectMessage:e}=Object(d.usePluralForm)();return t=>{const a=Math.ceil(t);return e(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:n,metadata:u,truncated:y,isBlogPostPage:g=!1}=e,{date:h,formattedDate:f,permalink:b,tags:v,readingTime:k}=u,{author:E,title:j,image:O,keywords:N}=n,T=n.author_url||n.authorURL,w=n.author_title||n.authorTitle,x=n.author_image_url||n.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{keywords:N,image:O}),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(()=>{const e=g?"h1":"h2";return r.a.createElement("header",null,r.a.createElement(e,{className:Object(o.a)("margin-bottom--sm",p.a.blogPostTitle)},g?j:r.a.createElement(c.a,{to:b},j)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:p.a.blogPostDate},f,k&&r.a.createElement(r.a.Fragment,null," \xb7 ",t(k)))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:T},r.a.createElement("img",{src:x,alt:E})),r.a.createElement("div",{className:"avatar__intro"},E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:T},E)),r.a.createElement("small",{className:"avatar__subtitle"},w)))))})(),r.a.createElement("div",{className:"markdown"},r.a.createElement(l.a,{components:i.a},a)),(v.length>0||y)&&r.a.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((({label:e,permalink:t})=>r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},e)))),y&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:u.permalink,"aria-label":`Read more about ${j}`},r.a.createElement("strong",null,r.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},122:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(109),l=a(3),s=a(107),c=a(116);var i=a(120),m=a.n(i),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=a(113),d=a(106);var y=()=>{const{prism:e}=Object(d.useThemeConfig)(),{isDarkTheme:t}=Object(p.a)(),a=e.theme||u,n=e.darkTheme||a;return t?n:a},g=a(108),h=a(59),f=a.n(h);const b=/{([\d,-]+)}/,v=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},k=/(?:title=")(.*)(?:")/;function E({children:e,className:t,metastring:a}){const{prism:o}=Object(d.useThemeConfig)(),[i,u]=Object(n.useState)(!1),[p,h]=Object(n.useState)(!1);Object(n.useEffect)((()=>{h(!0)}),[]);const E=Object(n.useRef)(null);let j=[],O="";const N=y(),T=Array.isArray(e)?e.join(""):e;if(a&&b.test(a)){const e=a.match(b)[1];j=m()(e).filter((e=>e>0))}a&&k.test(a)&&(O=a.match(k)[1]);let w=t&&t.replace(/language-/,"");!w&&o.defaultLanguage&&(w=o.defaultLanguage);let x=T.replace(/\n$/,"");if(0===j.length&&void 0!==w){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}})(w),a=T.replace(/\n$/,"").split("\n");let n;for(let r=0;r<a.length;){const o=r+1,l=a[r].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${o},`;break;case"highlight-start":n=o;break;case"highlight-end":e+=`${n}-${o-1},`}a.splice(r,1)}else r+=1}j=m()(e),x=a.join("\n")}const P=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus()}(x),u(!0),setTimeout((()=>u(!1)),2e3)};return r.a.createElement(c.a,Object(l.a)({},c.b,{key:String(p),theme:N,code:x,language:w}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:o})=>r.a.createElement("div",{className:f.a.codeBlockContainer},O&&r.a.createElement("div",{style:t,className:f.a.codeBlockTitle},O),r.a.createElement("div",{className:Object(s.a)(f.a.codeBlockContent,w)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,f.a.codeBlock,"thin-scrollbar",{[f.a.codeBlockWithTitle]:O})},r.a.createElement("div",{className:f.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return j.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),r.a.createElement("div",Object(l.a)({key:t},a),e.map(((e,t)=>r.a.createElement("span",Object(l.a)({key:t},o({token:e,key:t}))))))})))),r.a.createElement("button",{ref:E,type:"button","aria-label":Object(g.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(f.a.copyButton),onClick:P},i?r.a.createElement(g.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(g.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(60);var j=a(61),O=a.n(j);var N=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(d.useThemeConfig)();return t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[O.a.enhancedAnchor]:!n}),id:t}),a.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(g.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,a)};const T={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(E,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(o.a,e),pre:e=>{const{children:t}=e;return r.a.createElement(E,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:N("h1"),h2:N("h2"),h3:N("h3"),h4:N("h4"),h5:N("h5"),h6:N("h6")};t.a=T}}]);