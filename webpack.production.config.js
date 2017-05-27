var packageJson = require('./package.json');
var path = require('path');  // node.js自带的库
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');  // 分离css和js文件


module.exports = {
  entry: {
    // 将 业务代码 打包为 app.js
    app: path.resolve(__dirname, 'app/index.js'),

    // 将 第三方依赖（node_modules中的） 单独打包成 vendor.js
    // 有助于缓存
    vendor: Object.keys(packageJson.dependencies)
  },

  output: {
    path: __dirname + '/build',

    // md5后缀
    // 为每个打包出来的文件都加md5后缀，可使文件强缓存
    filename: './js/[name].[chunkhash:8].js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!stylus-loader'
        })  // 将css单独打包成一个文件
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader'
        })
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

  // postcss: [
  //   require('autoprefixer')  // 调用autoprefixer插件
  // ],

  plugins: [
    // Copyright
    // webpack 内置的 banner-plugin: 可以写公司名称、产权相关等的信息
    new webpack.BannerPlugin('Copyright by Ann Huang'),

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

    // 为组件分配ID，通过这个插件，webpack可以分析和优先考虑使用最多的模块，并为他们分配长度最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    // 代码压缩
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    // 分离css和js文件
    new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

    // 分模块，提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV == 'dev') || 'false')
    })
  ]
};
