(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(n,e,o){"use strict";o.d(e,"a",(function(){return u})),o.d(e,"b",(function(){return b}));var r=o(0),t=o.n(r);function l(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function a(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,r)}return o}function i(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){l(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function m(n,e){if(null==n)return{};var o,r,t=function(n,e){if(null==n)return{};var o,r,t={},l=Object.keys(n);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||(t[o]=n[o]);return t}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)o=l[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(t[o]=n[o])}return t}var c=t.a.createContext({}),s=function(n){var e=t.a.useContext(c),o=e;return n&&(o="function"==typeof n?n(e):i(i({},e),n)),o},u=function(n){var e=s(n.components);return t.a.createElement(c.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},d=t.a.forwardRef((function(n,e){var o=n.components,r=n.mdxType,l=n.originalType,a=n.parentName,c=m(n,["components","mdxType","originalType","parentName"]),u=s(o),d=r,b=u["".concat(a,".").concat(d)]||u[d]||p[d]||l;return o?t.a.createElement(b,i(i({ref:e},c),{},{components:o})):t.a.createElement(b,i({ref:e},c))}));function b(n,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=o.length,a=new Array(l);a[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=n,i.mdxType="string"==typeof n?n:r,a[1]=i;for(var c=2;c<l;c++)a[c]=o[c];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},72:function(n,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return a})),o.d(e,"metadata",(function(){return i})),o.d(e,"toc",(function(){return m})),o.d(e,"default",(function(){return s}));var r=o(3),t=o(7),l=(o(0),o(105)),a={title:"FORM \u8868\u5355"},i={unversionedId:"ui/form/doc",id:"ui/form/doc",isDocsHomePage:!1,title:"FORM \u8868\u5355",description:"\u9ad8\u6027\u80fd\u8868\u5355\u63a7\u4ef6\uff0c\u81ea\u5e26\u6570\u636e\u57df\u7ba1\u7406\u3002\u5305\u542b\u6570\u636e\u5f55\u5165\u3001\u6821\u9a8c\u4ee5\u53ca\u5bf9\u5e94\u6837\u5f0f\u3002",source:"@site/docs/ui/form/doc.md",slug:"/ui/form/doc",permalink:"/doc.github.io/docs/ui/form/doc",version:"current",sidebar:"ui",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/doc.github.io/docs/ui/getting-started"}},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[]},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",children:[{value:"<strong>\u57fa\u672c\u4f7f\u7528 (fields)</strong>",id:"\u57fa\u672c\u4f7f\u7528-fields",children:[]},{value:"\u57fa\u672c\u4f7f\u7528 (JSX)",id:"\u57fa\u672c\u4f7f\u7528-jsx",children:[]},{value:"<strong>\u57fa\u672c\u4f7f\u7528 (\u6df7\u5408)</strong>",id:"\u57fa\u672c\u4f7f\u7528-\u6df7\u5408",children:[]},{value:"<strong>\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u53d7\u63a7\u7ec4\u4ef6</strong>",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u53d7\u63a7\u7ec4\u4ef6",children:[]},{value:"<strong>\u81ea\u5b9a\u4e49\u7684\u8868\u5355\u6309\u94ae</strong>",id:"\u81ea\u5b9a\u4e49\u7684\u8868\u5355\u6309\u94ae",children:[]},{value:"<strong>\u914d\u7f6e\u7684\u8868\u5355\u6309\u94ae</strong>",id:"\u914d\u7f6e\u7684\u8868\u5355\u6309\u94ae",children:[]},{value:"\u521d\u59cb\u5316\u53d8\u5355\u503c",id:"\u521d\u59cb\u5316\u53d8\u5355\u503c",children:[]},{value:"<strong>\u901a\u8fc7 useForm \u5bf9\u8868\u5355\u6570\u636e\u57df\u8fdb\u884c\u4ea4\u4e92</strong>",id:"\u901a\u8fc7-useform-\u5bf9\u8868\u5355\u6570\u636e\u57df\u8fdb\u884c\u4ea4\u4e92",children:[]}]},{value:"API",id:"api",children:[{value:"Form",id:"form",children:[]}]}],c={toc:m};function s(n){var e=n.components,o=Object(t.a)(n,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,o,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u9ad8\u6027\u80fd\u8868\u5355\u63a7\u4ef6\uff0c\u81ea\u5e26\u6570\u636e\u57df\u7ba1\u7406\u3002\u5305\u542b\u6570\u636e\u5f55\u5165\u3001\u6821\u9a8c\u4ee5\u53ca\u5bf9\u5e94\u6837\u5f0f\u3002"),Object(l.b)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f53\u6216\u6536\u96c6\u4fe1\u606f\uff0c\u7528\u4e8e\u63d0\u4ea4\u3002"),Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u5c55\u793a\u4e00\u7ec4\u6570\u636e\u56de\u663e\u3002")),Object(l.b)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),Object(l.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528-fields"},Object(l.b)("strong",{parentName:"h3"},"\u57fa\u672c\u4f7f\u7528 (fields)")),Object(l.b)("p",null,"\u9ed8\u8ba4\u505a\u6309\u94ae\u4e0d\u505a\u4efb\u4f55\u914d\u7f6e\u65f6\uff0c\u5c06\u4f1a\u9ed8\u8ba4\u6e32\u67d3\u786e\u5b9a\u6309\u94ae"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from 'y-taro-ui'\n\nconst example = ()=> {\n\n    return (\n        <Form\n            onFinish={values => {\n                console.log(values)\n            }}\n            fields={[\n                {\n                    type: 'INPUT',\n                    name: 'name',\n                    label: '\u59d3\u540d',\n                    componentProps: {\n                        placeholder: '\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d'\n                    }\n                },\n                {\n                    type: 'PICKER',\n                    name: 'birthday',\n                    label: '\u751f\u65e5',\n                    componentProps: {\n                        placeholder: '\u8bf7\u9009\u62e9\u4f60\u7684\u751f\u65e5'\n                    }\n                }\n            ]}\n        />\n    )\n}\n")),Object(l.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528-jsx"},"\u57fa\u672c\u4f7f\u7528 (JSX)"),Object(l.b)("p",null,"\u4f7f\u7528Children\u7684JSX\u5199\u6cd5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from 'y-taro-ui'\n\nconst example = ()=> {\n\n    return (\n        <Form\n        onFinish={values => {\n            console.log('values :', values)\n        }}\n    >\n        <Form.Field\n            type='INPUT'\n            name='name'\n            label='\u59d3\u540d'\n            componentProps={{ placeholder: '\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d' }}\n        />\n        <Form.Field\n            type='PICKER'\n            name='birthday'\n            label='\u751f\u65e5'\n            componentProps={{ placeholder: '\u8bf7\u9009\u62e9\u4f60\u7684\u751f\u65e5' }}\n        />\n    </Form>\n    )\n}\n")),Object(l.b)("h3",{id:"\u57fa\u672c\u4f7f\u7528-\u6df7\u5408"},Object(l.b)("strong",{parentName:"h3"},"\u57fa\u672c\u4f7f\u7528 (\u6df7\u5408)")),Object(l.b)("p",null,"\u4f7f\u7528Children\u7684 \u914d\u7f6e+JSX\u6df7\u5408\u5199\u6cd5\uff0c\u53ef\u4efb\u610f\u642d\u914d"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form } from 'y-taro-ui'\n\nconst example = ()=> {\n\n    return (\n        <Form\n        onFinish={values => {\n            console.log('values :', values)\n        }}\n    >\n        {{\n            type: 'INPUT',\n            name: 'name',\n            label: '\u59d3\u540d',\n            componentProps: {\n                placeholder: '\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d'\n            }\n        }}\n        <Form.Field\n            type='PICKER'\n            name='birthday'\n            label='\u751f\u65e5'\n            componentProps={{ placeholder: '\u8bf7\u9009\u62e9\u4f60\u7684\u751f\u65e5' }}\n        />\n        {[{\n            type: 'PICKER',\n            name: 'sleep',\n            label: '\u7761\u89c9\u65f6\u95f4',\n            componentProps: {\n                placeholder: '\u8bf7\u9009\u62e9\u4f60\u7684\u7761\u89c9\u65f6\u95f4',\n                                mode: 'time'\n            }\n        }, {\n            type: 'PICKER',\n            name: 'food',\n            label: '\u559c\u7231\u7684\u98df\u7269',\n            componentProps: {\n                                placeholder: '\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269',\n                mode: 'selector',\n                range: ['\u9999\u8549', '\u756a\u8304']\n            }\n        }]}\n    </Form>\n    )\n}\n")),Object(l.b)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u53d7\u63a7\u7ec4\u4ef6"},Object(l.b)("strong",{parentName:"h3"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u53d7\u63a7\u7ec4\u4ef6")),Object(l.b)("p",null,"\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u73b0\u6709\u7684\u8868\u5355\u7ec4\u4ef6\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u5236\u5316\u4e00\u4e9b\u8868\u5355\u9879\u7ec4\u4ef6\uff0c\u4f7f\u7528Field \u7ec4\u4ef6\u5305\u88f9\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u5c06\u4f1a\u83b7\u5f97\u4f20\u5165\u7684 onChange & value Props\uff0c\u7528\u4e8e\u5904\u7406\u5185\u90e8\u7684\u53d7\u63a7\u903b\u8f91"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form, YInput, YPicker } from 'y-taro-ui'\nimport { CustomComponent } from 'CustomComponent';\n\nconst example = ()=> {\n\n    return (\n        <Form\n        onFinish={valus => {\n            console.log('valus :', valus)\n        }}\n    >\n        <Form.Field name='name' label='\u59d3\u540d'>\n            <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d' />\n        </Form.Field>\n        <Form.Field\n            name='birthday'\n            label='\u751f\u65e5'\n            componentProps={{\n                placeholder: '\u8bf7\u9009\u62e9\u4f60\u7684\u751f\u65e5'\n            }}\n        >\n            <YPicker />\n        </Form.Field>\n        <Form.Field name='food' label='\u98df\u7269'>\n            <YPicker placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269' mode='selector' range={['\u9999\u8549', '\u756a\u8304']} />\n        </Form.Field>        \n                <Form.Field name='sex' label='\u81ea\u5b9a\u4e49'>\n            <CustomComponent />\n        </Form.Field>\n    </Form>\n    )\n}\n")),Object(l.b)("h3",{id:"\u81ea\u5b9a\u4e49\u7684\u8868\u5355\u6309\u94ae"},Object(l.b)("strong",{parentName:"h3"},"\u81ea\u5b9a\u4e49\u7684\u8868\u5355\u6309\u94ae")),Object(l.b)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\uff0c\u6211\u4eec\u4f1a\u4e3b\u52a8\u6e32\u67d3\u51fa\u4e00\u4e2a\u63d0\u4ea4\u6309\u94ae\uff0c\u4e0d\u9700\u8981\u505a\u989d\u5916\u7684\u5de5\u4f5c\uff0c\u67d0\u4e9b\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u5b9a\u5236\u5316\u7684\u6309\u94ae\u914d\u7f6e\u6216\u4e00\u4e9b\u7279\u6b8a\u7684\u6309\u94ae\u7ec4\u5408\u6548\u679c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u624b\u5199\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0cForm\u5185\u90e8\u4f1a\u4e3b\u52a8\u5c06 form-type \u7b49\u4e8e submit | reset \u503c\u7684\u6309\u94ae\u589e\u52a0 submit \u548c reset \u6548\u679c\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form, YInput, YPicker } from 'y-taro-ui'\nimport { Button } from '@tarojs/components'\n\nconst example = ()=> {\n\n    return (\n        <Form\n            onFinish={valus => {\n                console.log('valus :', valus)\n            }}\n        >\n            <Form.Field name='name' label='\u59d3\u540d'>\n                <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d' />\n            </Form.Field>\n            <Form.Field name='food' label='\u98df\u7269'>\n                <YPicker placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269' mode='selector' range={['\u9999\u8549', '\u756a\u8304']} />\n            </Form.Field>\n            <Button\n                form-type='submit'\n                type='primary'\n                onClick={() => {\n                    console.log('\u4e00\u4e9b\u64cd\u4f5c')\n                }}\n            >\n                \u786e\u5b9a\n            </Button>\n            <Button form-type='reset'>\u91cd\u7f6e</Button>\n        </Form>\n    )\n}\n")),Object(l.b)("h3",{id:"\u914d\u7f6e\u7684\u8868\u5355\u6309\u94ae"},Object(l.b)("strong",{parentName:"h3"},"\u914d\u7f6e\u7684\u8868\u5355\u6309\u94ae")),Object(l.b)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u914d\u7f6e\u7684\u65b9\u5f0f\uff0c\u5bf9\u6309\u94ae\u505a\u7b80\u5355\u4fee\u6539"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form, YInput, YPicker } from 'y-taro-ui'\nimport { Button } from '@tarojs/components'\n\nconst example = ()=> {\n\n    return (\n        <Form\n            onFinish={valus => {\n                console.log('valus :', valus)\n            }}\n            submitter={{\n                submitButton: {\n                    text: '\u6211\u8981\u63d0\u4ea4\u4e86'\n                },\n                resetButton: {\n                    text: '\u91cd\u7f6e\u4e00\u4e0b\u8868\u5355'\n                }\n            }}\n        >\n            <Form.Field name='name' label='\u59d3\u540d'>\n                <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d' />\n            </Form.Field>\n            <Form.Field name='food' label='\u98df\u7269'>\n                <YPicker placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269' mode='selector' range={['\u9999\u8549', '\u756a\u8304']} />\n            </Form.Field>\n        </Form>\n    )\n}\n")),Object(l.b)("h3",{id:"\u521d\u59cb\u5316\u53d8\u5355\u503c"},"\u521d\u59cb\u5316\u53d8\u5355\u503c"),Object(l.b)("p",null,"\u521b\u5efa\u6216\u7f16\u8f91\u9875\u9762\u65f6\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u5c55\u793a\u4e00\u4e9b\u9ed8\u8ba4\u503c\uff0c\u8fd9\u4e9b\u503c\u53ef\u80fd\u662f\u672c\u5730\u7684\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u5f02\u6b65\u83b7\u53d6\u8fc7\u6765\u7684\uff0c\u4e0b\u9762\u6211\u4eec\u5c06\u6f14\u793a\u5f02\u6b65\u548c\u540c\u6b65\u65f6\u5982\u4f55\u8bbe\u503c\uff0c\u540c\u6b65\u65f6\u6211\u4eec\u76f4\u63a5\u4f7f\u7528 initialValues \u8bbe\u7f6e\u8be5\u503c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import { Form, YInput, YPicker } from 'y-taro-ui'\nimport { Button } from '@tarojs/components'\n\n// \u540c\u6b65\nconst example = ()=> {\n    return (\n        <Form\n        onFinish={valus => {\n            console.log('valus :', valus)\n        }}\n        initialValues={{\n            name: '\u5218\u5c0f\u5c0f',\n            food: '\u9999\u8549'\n        }}\n    >\n        <Form.Field name='name' label='\u59d3\u540d'>\n            <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d' />\n        </Form.Field>\n        <Form.Field name='food' label='\u98df\u7269'>\n            <YPicker placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269' mode='selector' range={['\u9999\u8549', '\u756a\u8304']} />\n        </Form.Field>\n    </Form>\n    )\n}\n\n// \u5f02\u6b65 form \u589e\u52a0loading\u65f6\uff0c\u5c06\u91c7\u7528 loading \u4e3a false \u65f6\u624d\u6e32\u67d3\u521d\u59cb\u5316\u8868\u5355\n\nconst example = ()=> {\n    const [loading, setLoading] = setState(true)\n    const [initialValues, setInitialValues] = setState({})\n\n    useEffect(()=> {\n        setTimeout(()=> {\n            setInitialValues({\n        name: '\u5218\u5c0f\u5c0f',\n        food: '\u9999\u8549'\n      })\n            setLoading(false)\n        })\n    })\n\n    return (\n        <Form\n                loading={loading}\n        onFinish={valus => {\n            console.log('valus :', valus)\n        }}\n        initialValues={initialValues}\n    >\n        <Form.Field name='name' label='\u59d3\u540d'>\n            <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u7684\u7684\u59d3\u540d' />\n        </Form.Field>\n        <Form.Field name='food' label='\u98df\u7269'>\n            <YPicker placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269' mode='selector' range={['\u9999\u8549', '\u756a\u8304']} />\n        </Form.Field>\n    </Form>\n    )\n}\n")),Object(l.b)("h3",{id:"\u901a\u8fc7-useform-\u5bf9\u8868\u5355\u6570\u636e\u57df\u8fdb\u884c\u4ea4\u4e92"},Object(l.b)("strong",{parentName:"h3"},"\u901a\u8fc7 useForm \u5bf9\u8868\u5355\u6570\u636e\u57df\u8fdb\u884c\u4ea4\u4e92")),Object(l.b)("p",null,"\u6ce8\u610f useForm \u662f React Hooks \u7684\u5b9e\u73b0\uff0c\u53ea\u80fd\u7528\u4e8e\u51fd\u6570\u7ec4\u4ef6\uff0cclass \u7ec4\u4ef6\u8bf7\u67e5\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"// function\nimport { Form, YInput, YPicker\uff0cuseForm } from 'y-taro-ui'\nimport { Button } from '@tarojs/components'\n\nconst example = ()=> {\n\n    const form = useForm();\n\n    return (\n        <Form\n        onFinish={valus => {\n            console.log('valus :', valus)\n        }}\n    >\n        <Form.Field name='food' label='\u98df\u7269'>\n            <YPicker\n                placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269'\n                mode='selector'\n                range={['\u9999\u8549', '\u756a\u8304']}\n                onChange={value => {\n                    form?.setFieldsValue({\n                        like: `\u4eca\u5929\u60f3\u5403${value}\u5566`\n                    })\n                }}\n            />\n        </Form.Field>\n        <Form.Field name='like' label='\u5403\u4ec0\u4e48\u5462'>\n            <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u60f3\u5403\u4ec0\u4e48' />\n        </Form.Field>\n        <Button\n            onClick={() => {\n                form?.submit()\n            }}\n        >\n            \u81ea\u5df1\u63d0\u4ea4\n        </Button>\n    </Form>\n    )\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"// class\nimport React from 'react'\nimport { Form, YInput, YPicker\uff0cuseForm } from 'y-taro-ui'\nimport { Button } from '@tarojs/components'\nimport { FormInstance } from 'y-taro-ui/lib/components/Form/interface'\n\nclass Example extends Component {\n\n    formRef = React.createRef<FormInstance>()\n\n    return (\n        <Form\n            ref={this.formRef}\n            onFinish={valus => {\n                console.log('valus :', valus)\n            }}\n        >\n            <Form.Field name='food' label='\u98df\u7269'>\n                <YPicker\n                    placeholder='\u8bf7\u9009\u62e9\u559c\u7231\u7684\u98df\u7269'\n                    mode='selector'\n                    range={['\u9999\u8549', '\u756a\u8304']}\n                    onChange={value => {\n                        this.formRef.current?.setFieldsValue({\n                            like: `\u4eca\u5929\u60f3\u5403${value}\u5566`\n                        })\n                    }}\n                />\n            </Form.Field>\n            <Form.Field name='like' label='\u5403\u4ec0\u4e48\u5462'>\n                <YInput placeholder='\u8bf7\u8f93\u5165\u4f60\u60f3\u5403\u4ec0\u4e48' />\n            </Form.Field>\n            <Button\n                onClick={() => {\n                    this.formRef.current?.submit()\n                }}\n            >\n                \u81ea\u5df1\u63d0\u4ea4\n            </Button>\n        </Form>\n    )\n}\n")),Object(l.b)("h2",{id:"api"},"API"),Object(l.b)("h3",{id:"form"},"Form"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.notion.so/2eff61c481be4d8192d2b5a1fe11ca2d?v=a657601ad9f4447ebc66cb3b8f2a5efa"},"Form")))}s.isMDXComponent=!0}}]);