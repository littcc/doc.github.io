---
title: 开始使用
---

## 介绍
使用本项目初始化项目,将节约大量前期配置成本, 本项目集成了 `eslint pre-commit prettier stylelint` 等项目初始化工作, 并增加了 `taro-request taro-utils y-taro-ui` 等工具, 提供了 `mobx taro-request` 的页面使用范例, 开箱即食.

项目默认选用 React + Typescript + Mobx + less 来初始化

## 为何选择Mobx做状态管理
Mobx是一款学习简单，扩展方便的状态管理，它通过运用透明的函数式响应编程（Transparent Functional Reactive Programming，TFRP）使状态管理变得简单和可扩展。 非常适合作为小程序的状态管理. [Mobx学习](https://zh.mobx.js.org/README.html)

## 依赖
模板基于taro版本为3.x.x修改, 请务必保持项目是3.x.x版本

## 使用
* 设置自定义模板源 `taro config set templateSource gitlab:code.yunzhanghu.com:fe/y-taro-template#master`
* 使用 `taro init --clone https://code.yunzhanghu.com/fe/y-taro-template.git` 初始化项目
* 选择 `Typescript` 作为开发语言
* 选择 `React` 框架
* 选择 `mobx` 模板
* 选择 `less` CSS 预处理器
* 选择 `本地模板源：gitlab:code.yunzhanghu.com:fe/y-taro-template#master` 模板源
* 选择 `YZH` 模板

**初始化创建完项目后将目录 pkg 文件修改为 package.json 执行 yarn install 开始开发**


## Taro CLI 配置用法
`1.3.9` 开始 Taro 会在用户根目录下创建 .taro 文件夹，其中 .taro/index.json 用于存放 CLI 相关配置
模板源为 CLI 配置项的 `templateSource` 字段，可以使用 `taro config` 命令对其进行操作
```
# 查看用法
$ taro config --help
# 设置配置项<key>的值为<value>
$ taro config set <key> <value>
# 读取配置项<key>
$ taro config get <key>
# 删除配置项<key>
$ taro config delete <key>
# 打印所有配置项
$ taro config list [--json]
```

# 开发计划

* [✔️] eslint
* [✔️] git pre-commit and commit-msg hooks 
* [✔️] prettier
* [✔️] stylelint
* [X] app update check integration
* [X] sentry integration
* [X] growingio integration