---
title: 介绍
---

Created: Mar 27, 2021 9:49 PM
Tags: DOCU

## 为什么设计？

PC端我们使用[ANTD](https://ant.design/)作为UI框架，强大的[ANTD](https://ant.design/)给我带来了好用的[FORM](https://ant.design/components/form-cn/)组件，其优秀的API设计大大的提高了工作效率，但移动端（小程序 | H5）表单这块一直缺少这样的组件，各个项目中还是采用原始的逻辑组合方式编写表单，在公司的几个Taro项目，我们已经有一些表单逻辑沉淀，为了提高表单页面的开发效率，统一表单逻辑，我们需要一款Taro版的移动端的表单解决方案。

## 为什么是现在才开始设计？

Taro的发展经历了3个版本，前两个版本使用的类React语法的 [Nervjs](https://github.com/NervJS/nerv) 库来 编写，由于微信小程序端的限制，有部分 JSX 的优秀用法暂时不能得到很好地支持，同时，为了遵循 React 语法，Taro 在写法上也有一些自己的规范，[具体可以点击参考](https://taro-docs.jd.com/taro/docs/2.x/best-practice) ，但是升级到Taro3 之后，由于重新设计了Taro底层架构，（[新的架构](https://juejin.cn/post/6844904036743774216)）让我们可以完全使用React来设计一款我们的表单组件。

## 流程图

![流程图1](/ui/ui-1.png)

![流程图2](/ui/ui-2.png)

## 设计思路

在经历过几个版本的迭代之后，加上使用反馈，基本参考了设计[rc-field-form](https://github.com/react-component/field-form)的思路。因为[rc-field-form](https://github.com/react-component/field-form) 的设计思路整理来说已经是很完善了，并且相关的api和概念在ANTD的使用中，都比较熟悉，基本上没什么学习成本，但是 [rc-field-form](https://github.com/react-component/field-form) 内部代码比较复杂，功能提供的非常丰富，在实现**`FormStore`**  类的时候我们实现了简版[rc-field-form](https://github.com/react-component/field-form) 来驱动我们整个form的生命周期。

### useForm & FormStore

`hooks useForm`初始化内部返回的是一个`FormStore` 实例的部分方法，通过这些方法，将外部组件与内部的状态能够很好的通讯，并且我们也能够在Form之外使用该实例的方法，提高使用的灵活度。

```tsx
export interface FormInstance<T = StoreValues> {
    getFieldValue: (name: Name) => StoreValue
    getFieldsValue(names: Name[] | true, filterFunc?: (fieldEntity: FieldEntity) => boolean): any
    setFieldsValue: (value: RecursivePartial<T>) => void
    getFields: () => FieldData[]
    getField: (name: Name) => FieldData
    submit: () => void
    reset: () => void
}
```

### FORM

FORM表单开始加载时，先从 `useForm hooks`中获取表单方法类(**`FormStore`**)的实例，包含了表单项的**`注册，查找，设值，校验，提交，重置`**等等方法，并将改实例挂在表单的 `context` 中，方便其他子组件消费。

### 表单项描述

```tsx
// 配置描述
{{
    type: 'INPUT',
    name: 'age',
    label: '年龄',
    initialValue: 30,
}}
```

```tsx
// 使用内置TYPE
<Form.Field name='age' label='年龄' type='INPUT' initialValue={30} />
```

```tsx
// 受控组件
<Form.Field name='age' label='年龄'>
    <YInput />
</Form.Field>
```

### Fields

接管Form组件的`children`渲染以及 `props.fields` 的配置渲染，本身逻辑很简单，循环`props.fields`或者`children`，根据不同的`ReactElement`或`FieldProps`，创建不同的子元素

### Field

核心思路就是接管所有包裹的元素的 `onChange & value` 属性，使他们变成受控组件。

生命周期 Did Mount后，将组件的元信息使用`FormStore` 提供的 `registerField` 方法注册到 `FormStore` 中统一管理，元信息包含了`（name, label, rules, initialValue, onStoreChange...等）` `onStoreChange` 是一个由`Field` 自身提供的reRender组件的方法，将在`onChange`时调用。

内部支持`isShow` 属性，会在`Boolean | Function`  时工作，会触发组件的`unRegisterField`

`Field`目前内置5种类型**`TYPE`**（`INPUT | PICKER | RADIO | TEXTAREA | UPLOAD`）可直接使用。支持 `horizontal | vertical` 两种布局方式

## 后记

Form只是众多移动端组件中的一个，未来将会在现有的项目中提取足够普适的组件，加入到`Y-TARO-UI` 项目中来。