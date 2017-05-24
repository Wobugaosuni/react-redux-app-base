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

## 相关文档参考
[React Webpack小书](https://fakefish.github.io/react-webpack-cookbook/Getting-started.html)
[Eslint配置](http://eslint.cn/docs/user-guide/configuring)
