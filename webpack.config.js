import path from 'path';  // node.js自带的库
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';

module.export = {
  entry: path.resolve(__dirname, 'app/index.js'), // 入口文件

  output: {
    filename: "bundle.js" // 出口文件
  },

  resolve: {
    extensions: ['', '.js', '.styl']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!stylus'  // 相当于：`style-loader!css-loader!postcss-loader!stylus-loader`
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp)$/i,
        loader: 'url-loader?limit=5000'  // 限制大小为5kb
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: 'url-loader?limit=5000'  // 限制大小为5kb
      }
    ]
  },

  postcss: [
    require('autoprefixer')  // 调用autoprefixer插件
  ],

  plugins: [
    // html模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index/tmpl.html'
    }),

    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    //  打开浏览器
    new OpenBrowserPlugin({
      url: 'http://localhost:8080'
    }),

    // 可在业务 js 代码中使用 __Dev__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __Dev__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'dev') || 'false')
    })
  ],

  devServer: {
    colors: true,  // 终端输出结果为彩色
    historyApiFallback: true,  // 不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true,  // 实时刷新
    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
  }
};
