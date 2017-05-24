## 使用webpack构建react项目
工程化的目录结构，支持本地调试、热加载等


## 技术选型
**Javascript**
- Language: ES6
- Framework: React

**CSS**
- Language: Stylus

**Build Tool**
- Webpack

**Dependency manage**
- npm

**Others**
- Eslint


## 目录结构

```
.
└── app  ------------------------------ 项目级代码，前端代码
    ├── index.js  --------------------- 页面入口文件
    ├── index.tmpl.html  -------------- 页面模板文件
├── .babelrc  ------------------------- babel编译工具的文件
├── .eslintrc  ------------------------ 语法校验工具
├── .gitignore  ----------------------- git忽略文件
├── LICENSE  -------------------------- 许可
├── package.json  --------------------- 项目配置
├── README.md  ------------------------ 说明文件
├── webpack.config.js  ---------------- webpack配置
└── webpack.production.config.js  ----- webpack生产环境配置
```

## 与其他脚手架对比
github上有很多优秀的脚手架，例如：
- [react-redux-starter-kit](https://github.com/olegakbarov/react-redux-starter-kit)
- [react-webpack-generators](https://github.com/react-webpack-generators/generator-react-webpack)

利用脚手架可以快速地搭建起项目，支持eslint语法校验、postcss自动补全等
但也有一些不好的方面，例如
- 查看package.json，包版本比较低，更新较慢，需要进行维护
- 打包编译时，没有分离js和css代码，没有将第三方依赖单独打包，不利于系统性能的优化，包括加载速度、缓存等

借此，自己搭建了一个脚手架，使用的技术栈如上。

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


## 相关文档参考
- [React Webpack小书](https://fakefish.github.io/react-webpack-cookbook/Getting-started.html)
- [Eslint配置](http://eslint.cn/docs/user-guide/configuring)
- [Postcss配置](https://github.com/michael-ciniawsky/postcss-load-config)
