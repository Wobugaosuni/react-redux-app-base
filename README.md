# react + webpack脚手架

## 目录
1. 安装使用
2. 技术选型
3. 项目目录结构
4. 相关插件
5. 与其他脚手架对比
6. webpack 1.x VS webpack 2.x
7. eslint with pre-commiit
8. 相关文档参考

<br />

## 1. 安装使用
**全局安装** <br />
`$ npm install -g react-redux-app-cli`

**使用**
```bash
## 1. 脚手架初始化
react-redux-app init

## 2. 建立自己的项目
cd [projece name]

## 3. 安装项目依赖
npm install

## 4. 开启mock服务，使用的是3000的端口
npm run mock

## 5. 启动项目，使用的是8000的端口
npm start
```

<br />

## 2. 技术选型
**Javascript**
- Language: ES6
- Loader: Babel
- Framework: React + Redux + React-router-dom

**CSS/Preprocessors**
- Stylus
- Postcss
- Normalize.css

**Module loader**
- Webpack

**Package manage**
- npm

**Data Mock**
- Koa

**Data Manipulation**
- Fetch

**Others**
- Eslint
- pre-commit

<br />

## 3. 项目目录结构

**目录结构设计原则** <br />
遵循组件设计的 就近原则 : 每个组件对应一个工程目录，组件所需要的各种资源(html、css、js等)在这个目录下就近维护

**组件设计原则** <br />
使用 es6 的模块管理规范将组件进行拆分 <br />
整体分为`智能组件`和`木偶组件` <br />

- 智能组件(页面)，存放在 ./app/containers 下  <br />
  职能：获取数据 + 定义好数据操作的相关函数，然后将这些数据、函数直接传递给具体实现的组件即可

- 木偶组件，存放在 ./app/components 下  <br />
  职能: 把拿到的数据展示给用户，函数操作开放给用户
<br />

目录结构：
```
.
└── app  ------------------------------ 项目级代码，前端代码
│   ├── reducers  --------------------- 存放数据规则(redux)
    ├── actions  ---------------------- 存放触发的动作(redux)
    ├── store  ------------------------ 存放store(redux)
    ├── constants  -------------------- 存放常量(redux)
    ├── fetch  ------------------------ ajax请求
    ├── common  ----------------------- 公共库
    │   └── js  ----------------------- 公共js
    │   └── fonts  -------------------- 公共字体，如iconfonts
    │   └── stylus  ------------------- 公共样式
    │       ├── base.styl  ------------ 基础样式
    │       ├── iconfont.styl  -------- 引进的iconfonts样式
    │       ├── index.styl  ----------- 样式入口文件
    │       └── mixin.styl  ----------- 样式mixin
    ├── components  ------------------- 木偶组件目录
    │   ├── Input  -------------------- 单个组件
    │   │   ├── index.js  ------------- 组件对应的js
    │   │   └── index.styl  ----------- 组件对应的样式
    ├── containers  ------------------- 智能组件目录(相当于页面)
    │   └── Todo  --------------------- 单个组件
    │       ├── index.js  ------------- 组件对应的js
    │       └── index.styl  ----------- 组件对应的样式
    ├── index.js  --------------------- 页面入口文件
    ├── index.tmpl.html  -------------- 页面模板文件
├── data  ----------------------------- 模拟服务器数据目录
│   └── data.json  -------------------- 模拟服务器数据
├── mock  ----------------------------- 模拟服务器数据api目录
│   └── server.js  -------------------- 模拟服务器数据api
├── .babelrc  ------------------------- babel编译工具的文件
├── .postcssrc.js  -------------------- postcss配置文件
├── .eslintrc  ------------------------ 语法校验工具
├── .eslintignore  -------------------- 语法校验忽略的目录
├── .gitignore  ----------------------- git忽略文件
├── .editorconfig  -------------------- 编辑配置文件
├── LICENSE  -------------------------- 许可
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── webpack.config.js  ---------------- webpack配置
└── webpack.production.config.js  ----- webpack生产环境配置
```

<br />

## 4. 相关插件
**项目底层插件**
- 项目运行时必须依赖的插件(-S): react react-dom redux react-redux
- 开发过程中使用的插件(-D): webpack webpack-dev-server

**项目用到的插件**
- 处理样式(-D): style-loader css-loader postcss postcss-loader autoprefixer stylus stylus-loader
- 处理样式(-S): normalize.css
- 处理图片(-D): url-loader file-loader
- 处理js(-D): babel-core babel-polyfill babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
- 处理eslint(-D): eslint babel-eslint eslint-plugin-react pre-commit

**Webpack配置相关插件(-D)**
- html模板: html-webpack-plugin
- 自动打开浏览器: open-browser-webpack-plugin
- css和js代码分离: extract-text-webpack-plugin

**Webpack自带的，不用安装**
- 热加载: HotModuleReplacementPlugin
- 设置环境变量: DefinePlugin
- 给经常使用的模块分配最小长度的id: OccurrenceOrderPlugin
- 代码压缩: UglifyJsPlugin
- 分模块: CommonsChunkPlugin

**性能检测(-S)**
- react-addons-perf

**性能优化(-S)**
- react-addons-pure-render-mixin

<br />

## 5. 与其他脚手架对比
github上有很多优秀的脚手架，例如：
- [react-redux-starter-kit](https://github.com/olegakbarov/react-redux-starter-kit)
- [react-webpack-generators](https://github.com/react-webpack-generators/generator-react-webpack)

利用脚手架可以快速地搭建起项目，支持eslint语法校验、postcss自动补全等  <br />
但也有一些不好的方面，例如
- 查看package.json，包版本比较低，更新较慢，需要进行维护
- 打包编译时，没有分离js和css代码，没有将第三方依赖单独打包，不利于系统性能的优化，包括加载速度、缓存等

借此，自己搭建了一个脚手架，使用的技术栈如上。

<br />

## 6. webpack 1.x VS webpack 2.x
**postcss**
在webpack 1.x，webpack.config.js是支持postcss字段的，例如：
```
postcss: [
    require('autoprefixer')  // 调用autoprefixer插件
],
```

但在webpack 2.x，就会出现报错：
`configuration has an unknown property 'postcss'.`

解决方法： <br />
在根目录下新建`postcss.config.js` or `.postcssrc.js`，进行配置

<br />

## 7. eslint with pre-commit
团队协作中，每个人都有偏好的IDE，虽然项目里使用了eslint进行校验，但还是不能保证在Pull Request之前解决所有的校验问题。
因此，本项目里使用node模块的`pre-commit`去解决这个问题。`pre-commit`属于`git hook`，将代码检查强制做到git-hook里面，即git commit之前必须要检查通过，否则无法提交。
<br />

## 8. 相关文档参考
- [Webpack文档](https://webpack.js.org/)
- [React Webpack小书](https://fakefish.github.io/react-webpack-cookbook/Getting-started.html)
- [Eslint配置](http://eslint.cn/docs/user-guide/configuring)
- [Postcss配置](https://github.com/michael-ciniawsky/postcss-load-config)
- [eslint with pre-commit](http://elijahmanor.com/npm-precommit-scripts/)
