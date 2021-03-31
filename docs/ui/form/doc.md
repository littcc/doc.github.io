---
title: FORM 表单
---

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

## 何时使用

- 用于创建一个实体或收集信息，用于提交。
- 用于展示一组数据回显。

## 代码演示

### **基本使用 (fields)**

默认做按钮不做任何配置时，将会默认渲染确定按钮

```tsx
import { Form } from 'y-taro-ui'

const example = ()=> {

	return (
		<Form
		    onFinish={values => {
		        console.log(values)
		    }}
		    fields={[
		        {
		            type: 'INPUT',
		            name: 'name',
		            label: '姓名',
		            componentProps: {
		                placeholder: '请输入你的的姓名'
		            }
		        },
		        {
		            type: 'PICKER',
		            name: 'birthday',
		            label: '生日',
		            componentProps: {
		                placeholder: '请选择你的生日'
		            }
		        }
		    ]}
		/>
	)
}
```

### 基本使用 (JSX)

使用Children的JSX写法

```tsx
import { Form } from 'y-taro-ui'

const example = ()=> {

	return (
		<Form
        onFinish={values => {
            console.log('values :', values)
        }}
    >
        <Form.Field
            type='INPUT'
            name='name'
            label='姓名'
            componentProps={{ placeholder: '请输入你的的姓名' }}
        />
        <Form.Field
            type='PICKER'
            name='birthday'
            label='生日'
            componentProps={{ placeholder: '请选择你的生日' }}
        />
    </Form>
	)
}
```

### **基本使用 (混合)**

使用Children的 配置+JSX混合写法，可任意搭配

```tsx
import { Form } from 'y-taro-ui'

const example = ()=> {

	return (
		<Form
        onFinish={values => {
            console.log('values :', values)
        }}
    >
        {{
            type: 'INPUT',
            name: 'name',
            label: '姓名',
            componentProps: {
                placeholder: '请输入你的的姓名'
            }
        }}
        <Form.Field
            type='PICKER'
            name='birthday'
            label='生日'
            componentProps={{ placeholder: '请选择你的生日' }}
        />
        {[{
            type: 'PICKER',
            name: 'sleep',
            label: '睡觉时间',
            componentProps: {
                placeholder: '请选择你的睡觉时间',
								mode: 'time'
            }
        }, {
            type: 'PICKER',
            name: 'food',
            label: '喜爱的食物',
            componentProps: {
								placeholder: '请选择喜爱的食物',
                mode: 'selector',
                range: ['香蕉', '番茄']
            }
        }]}
    </Form>
	)
}
```

### **使用自定义的受控组件**

部分情况下，我们现有的表单组件不能满足需求时，我们需要定制化一些表单项组件，使用Field 组件包裹的自定义组件，将会获得传入的 onChange & value Props，用于处理内部的受控逻辑

```tsx
import { Form, YInput, YPicker } from 'y-taro-ui'
import { CustomComponent } from 'CustomComponent';

const example = ()=> {

	return (
		<Form
        onFinish={valus => {
            console.log('valus :', valus)
        }}
    >
        <Form.Field name='name' label='姓名'>
            <YInput placeholder='请输入你的的姓名' />
        </Form.Field>
        <Form.Field
            name='birthday'
            label='生日'
            componentProps={{
                placeholder: '请选择你的生日'
            }}
        >
            <YPicker />
        </Form.Field>
        <Form.Field name='food' label='食物'>
            <YPicker placeholder='请选择喜爱的食物' mode='selector' range={['香蕉', '番茄']} />
        </Form.Field>        
				<Form.Field name='sex' label='自定义'>
            <CustomComponent />
        </Form.Field>
    </Form>
	)
}
```

### **自定义的表单按钮**

默认情况，我们会主动渲染出一个提交按钮，不需要做额外的工作，某些情况下我们需要一些定制化的按钮配置或一些特殊的按钮组合效果时，可以使用手写的方式实现，Form内部会主动将 form-type 等于 submit | reset 值的按钮增加 submit 和 reset 效果。

```tsx
import { Form, YInput, YPicker } from 'y-taro-ui'
import { Button } from '@tarojs/components'

const example = ()=> {

	return (
		<Form
		    onFinish={valus => {
		        console.log('valus :', valus)
		    }}
		>
		    <Form.Field name='name' label='姓名'>
		        <YInput placeholder='请输入你的的姓名' />
		    </Form.Field>
		    <Form.Field name='food' label='食物'>
		        <YPicker placeholder='请选择喜爱的食物' mode='selector' range={['香蕉', '番茄']} />
		    </Form.Field>
		    <Button
		        form-type='submit'
		        type='primary'
		        onClick={() => {
		            console.log('一些操作')
		        }}
		    >
		        确定
		    </Button>
		    <Button form-type='reset'>重置</Button>
		</Form>
	)
}
```

### **配置的表单按钮**

我们也可以使用配置的方式，对按钮做简单修改

```tsx
import { Form, YInput, YPicker } from 'y-taro-ui'
import { Button } from '@tarojs/components'

const example = ()=> {

	return (
		<Form
		    onFinish={valus => {
		        console.log('valus :', valus)
		    }}
		    submitter={{
		        submitButton: {
		            text: '我要提交了'
		        },
		        resetButton: {
		            text: '重置一下表单'
		        }
		    }}
		>
		    <Form.Field name='name' label='姓名'>
		        <YInput placeholder='请输入你的的姓名' />
		    </Form.Field>
		    <Form.Field name='food' label='食物'>
		        <YPicker placeholder='请选择喜爱的食物' mode='selector' range={['香蕉', '番茄']} />
		    </Form.Field>
		</Form>
	)
}
```

### 初始化变单值

创建或编辑页面时，我们常常会展示一些默认值，这些值可能是本地的，也有可能是异步获取过来的，下面我们将演示异步和同步时如何设值，同步时我们直接使用 initialValues 设置该值

```tsx
import { Form, YInput, YPicker } from 'y-taro-ui'
import { Button } from '@tarojs/components'

// 同步
const example = ()=> {
	return (
		<Form
        onFinish={valus => {
            console.log('valus :', valus)
        }}
        initialValues={{
            name: '刘小小',
            food: '香蕉'
        }}
    >
        <Form.Field name='name' label='姓名'>
            <YInput placeholder='请输入你的的姓名' />
        </Form.Field>
        <Form.Field name='food' label='食物'>
            <YPicker placeholder='请选择喜爱的食物' mode='selector' range={['香蕉', '番茄']} />
        </Form.Field>
    </Form>
	)
}

// 异步 form 增加loading时，将采用 loading 为 false 时才渲染初始化表单

const example = ()=> {
	const [loading, setLoading] = setState(true)
	const [initialValues, setInitialValues] = setState({})

	useEffect(()=> {
		setTimeout(()=> {
			setInitialValues({
        name: '刘小小',
        food: '香蕉'
      })
			setLoading(false)
		})
	})

	return (
		<Form
				loading={loading}
        onFinish={valus => {
            console.log('valus :', valus)
        }}
        initialValues={initialValues}
    >
        <Form.Field name='name' label='姓名'>
            <YInput placeholder='请输入你的的姓名' />
        </Form.Field>
        <Form.Field name='food' label='食物'>
            <YPicker placeholder='请选择喜爱的食物' mode='selector' range={['香蕉', '番茄']} />
        </Form.Field>
    </Form>
	)
}
```

### **通过 useForm 对表单数据域进行交互**

注意 useForm 是 React Hooks 的实现，只能用于函数组件，class 组件请查看下面的例子。

```tsx
// function
import { Form, YInput, YPicker，useForm } from 'y-taro-ui'
import { Button } from '@tarojs/components'

const example = ()=> {

	const form = useForm();

	return (
		<Form
        onFinish={valus => {
            console.log('valus :', valus)
        }}
    >
        <Form.Field name='food' label='食物'>
            <YPicker
                placeholder='请选择喜爱的食物'
                mode='selector'
                range={['香蕉', '番茄']}
                onChange={value => {
                    form?.setFieldsValue({
                        like: `今天想吃${value}啦`
                    })
                }}
            />
        </Form.Field>
        <Form.Field name='like' label='吃什么呢'>
            <YInput placeholder='请输入你想吃什么' />
        </Form.Field>
        <Button
            onClick={() => {
                form?.submit()
            }}
        >
            自己提交
        </Button>
    </Form>
	)
}
```

```tsx
// class
import React from 'react'
import { Form, YInput, YPicker，useForm } from 'y-taro-ui'
import { Button } from '@tarojs/components'
import { FormInstance } from 'y-taro-ui/lib/components/Form/interface'

class Example extends Component {

	formRef = React.createRef<FormInstance>()

	return (
		<Form
		    ref={this.formRef}
		    onFinish={valus => {
		        console.log('valus :', valus)
		    }}
		>
		    <Form.Field name='food' label='食物'>
		        <YPicker
		            placeholder='请选择喜爱的食物'
		            mode='selector'
		            range={['香蕉', '番茄']}
		            onChange={value => {
		                this.formRef.current?.setFieldsValue({
		                    like: `今天想吃${value}啦`
		                })
		            }}
		        />
		    </Form.Field>
		    <Form.Field name='like' label='吃什么呢'>
		        <YInput placeholder='请输入你想吃什么' />
		    </Form.Field>
		    <Button
		        onClick={() => {
		            this.formRef.current?.submit()
		        }}
		    >
		        自己提交
		    </Button>
		</Form>
	)
}
```

## API

### Form

[Form](https://www.notion.so/2eff61c481be4d8192d2b5a1fe11ca2d?v=a657601ad9f4447ebc66cb3b8f2a5efa)