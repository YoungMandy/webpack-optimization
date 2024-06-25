const { chunk } = require('lodash');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;// 分析打包资源的体积
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 先把本地已有的打包后的资源清空

module.exports = {
  entry: {
    app: '../src/index.js',
    a: '../src/a.js',
    b: '../src/b.js',
    vendor: ['lodash']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),// __dirname是node环境的全局变量,指向当前文件的绝对目录路径
    filename: '[name]-[fullhash].js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
  ]
}