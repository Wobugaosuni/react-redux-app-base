# react + webpack脚手架

## 目录
1. 安装使用
2. 技术选型
3. 项目目录结构
4. 相关插件
5. 与其他脚手架对比
6. webpack 1.x VS webpack 2.x
7. 相关文档参考

<br />

## 1. 安装使用
**全局安装** <br />
`$ npm install -g react-redux-app-cli`

**使用**
```bash
## 1
react init

## 2
cd [projece name]

## 3
npm install

## 4
npm start
```

<br />

## 2. 技术选型
**Javascript**
- Language: ES6
- Loader: Babel
- Framework: React + Redux

**CSS/Preprocessors**
- Stylus
- Postcss
- Normalize.css

**Module loader**
- Webpack

**Package manage**
- npm

**Others**
- Eslint

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

**项目用到的插件(-D)**
- 处理样式: style-loader css-loader postcss postcss-loader autoprefixer stylus stylus-loader normalize.css
- 处理图片: url-loader file-loader
- 处理js: babel-core babel-polyfill babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
- 处理eslint: eslint babel-eslint eslint-plugin-react

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

## 7. 相关文档参考
- [Webpack文档](https://webpack.js.org/)
- [React Webpack小书](https://fakefish.github.io/react-webpack-cookbook/Getting-started.html)
- [Eslint配置](http://eslint.cn/docs/user-guide/configuring)
- [Postcss配置](https://github.com/michael-ciniawsky/postcss-load-config)
