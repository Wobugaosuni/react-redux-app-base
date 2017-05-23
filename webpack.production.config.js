import packageJson from './package.json';
import path from 'path';  // node.js自带的库
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';  // 分离css和js文件

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),

    // 将 第三方依赖（node_modules中的） 单独打包成 vendor.js
    vendor: Object.keys(packageJson.dependencies)
  },

  output: {
    path: __dirname + '/build',
    filename: "/js/[name].[chunkhash:8].js"
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', "css!postcss!stylus")  // 将css单独打包成一个文件
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', "css!postcss")
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp)$/i,
        loader: 'url-loader?limit=5000&name=imgs/[name].[chunkhash:8].[ext]'  // 将打包后的图片放到imgs目录下
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: 'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'  // 将打包后的字体放到fonts目录下
      }
    ]
  },

  postcss: [
    require('autoprefixer')  // 调用autoprefixer插件
  ],

  plugin: [
    // webpack 内置的 banner-plugin: 可以写公司名称、产权相关等的信息
    new webpack.BannerPlugin("Copyright by Ann Huang"),

    // html模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小(即把开发环境中的一些提示、警告、判断通通去掉
    new webpack.DefinePlugin({
      'process.env': {
        'NODE.ENV': JSON.stringify(process.env.NODE.ENV)
      }
    }),

    // 为组件分配ID，通过这个插件，webpack可以分析和优先考虑使用最多的模块，并为他们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // 分离css和js文件
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __Dev__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __Dev__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'dev') || 'false')
    })
  ]
}
