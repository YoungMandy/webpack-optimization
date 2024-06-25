const { chunk } = require('lodash');
const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;// 分析打包资源的体积
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 先把本地已有的打包后的资源清空
const TerserPlugin = require('terser-webpack-plugin');// 压缩js代码,TreeSharking删除无用的代码
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');// 分享预处理器和插件等花费的时间
const smp = new SpeedMeasurePlugin();

const config = {
  entry: {
    app: './src/index.js',
    // a:'./src/a.js',
    // b:'./src/b.js',
    // vendor:['lodash']
    
  },
  parallelism: require('os').cpus().length,//设置并行处理的线程数量
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      } 
    ]
  },
  mode:'development',
  output: {
    path: path.resolve(__dirname, 'dist'),// __dirname是node环境的全局变量,指向当前文件的绝对目录路径
    filename:'[name]-[fullhash].js',
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest:require(path.join(__dirname, 'dll/manifest.json'))
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin()], // 压缩js代码并且做TreeSharking
    usedExports: true, // 开启标注未使用部分的功能(方便做TreeSharking)
    splitChunks: {
      chunks: 'all',// initial(只从入口文件处提取代码)，async(默认，从动态加载的内容提取代码)，all(从入口及动态加载的文件中提取代码),
      minSize: 1 * 1024,
    },
  },
  cache: {
    type: 'filesystem',//(如果是memory,还表示会将打包生成的资源放到内存中)
  }
}


module.exports = smp.wrap(config);