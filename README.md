# react + webpack脚手架

## 目录
1. 技术选型
2. 项目目录结构
3. 相关插件
4. ...

<br />

## 1. 技术选型
**Javascript**
- Language: ES6
- Loader: Babel
- Framework: React

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

## 2. 项目目录结构

```
.
└── app  ------------------------------ 项目级代码，前端代码
    ├── components  ------------------- 木偶组件目录
    ├── containers  ------------------- 智能组件目录
    ├── index.js  --------------------- 页面入口文件
    ├── index.tmpl.html  -------------- 页面模板文件
├── .babelrc  ------------------------- babel编译工具的文件
├── .postcssrc.js  -------------------- postcss配置文件
├── .eslintrc  ------------------------ 语法校验工具
├── .eslintignore  -------------------- 语法校验忽略的目录
├── .gitignore  ----------------------- git忽略文件
├── LICENSE  -------------------------- 许可
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── webpack.config.js  ---------------- webpack配置
└── webpack.production.config.js  ----- webpack生产环境配置
```

<br />

## 3. 相关插件
**项目底层插件**
- 项目运行时必须依赖的插件(-S): react react-dom
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

## 4. 与其他脚手架对比
github上有很多优秀的脚手架，例如：
- [react-redux-starter-kit](https://github.com/olegakbarov/react-redux-starter-kit)
- [react-webpack-generators](https://github.com/react-webpack-generators/generator-react-webpack)

利用脚手架可以快速地搭建起项目，支持eslint语法校验、postcss自动补全等
但也有一些不好的方面，例如
- 查看package.json，包版本比较低，更新较慢，需要进行维护
- 打包编译时，没有分离js和css代码，没有将第三方依赖单独打包，不利于系统性能的优化，包括加载速度、缓存等

借此，自己搭建了一个脚手架，使用的技术栈如上。

<br />

## webpack 1.x VS webpack 2.x
**postcss**
在webpack 1.x，webpack.config.js是支持postcss字段的，例如：
```
postcss: [
    require('autoprefixer')  // 调用autoprefixer插件
],
```

但在webpack 2.x，就会出现报错：
`configuration has an unknown property 'postcss'.`

解决方法：
在根目录下新建postcss.config.js or .postcssrc.js，进行配置

<br />

## 相关文档参考
- [React Webpack小书](https://fakefish.github.io/react-webpack-cookbook/Getting-started.html)
- [Eslint配置](http://eslint.cn/docs/user-guide/configuring)
- [Postcss配置](https://github.com/michael-ciniawsky/postcss-load-config)
