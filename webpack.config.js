var path = require('path');  // node.js自带的库
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'), // 入口文件

  output: {
    filename: 'bundle.js' // 出口文件
  },

  // 定义能够被打包的文件，文件后缀名
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // webpack将所有的资源都看做是模块，而模块就需要加载器；主要定义一些loaders,定义哪些后缀名的文件应该用哪些loader
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,   // test: 检测哪些文件需要此loader，是一个正则表达式
        exclude: /node_modules/,  // exclude: 忽略哪些文件
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'  // 相当于：`style-loader!css-loader!postcss-loader!stylus-loader`
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,  // 加载node_modules里的normalize.css
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp)$/i,
        loader: 'url-loader?limit=5000'  // 小于5kb的图片资源转换成base64格式
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: 'url-loader?limit=5000'
      }
    ]
  },

  // does not work with webpack 2
  // postcss: [
  //   require('autoprefixer')  // 调用autoprefixer插件
  // ],

  plugins: [
    // html模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),

    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    //  打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8000'
    }),

    // 设置环境变量
    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'dev') || 'false')
    })
  ],

  // 对 webpack-dev-server 的配置
  devServer: {
    // colors: true,  // 终端输出结果为彩色
    historyApiFallback: true,  // 不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true,  // 实时刷新
    hot: true,  // 使用热加载插件 HotModuleReplacementPlugin
    port: 8000,
    proxy: {  // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
};
