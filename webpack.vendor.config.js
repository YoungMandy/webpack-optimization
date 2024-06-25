// webpack.vendor.config.js

const path = require('path');
const webpack = require('webpack');

const dllAssetPath = path.join(__dirname, 'dll');

const dllLibraryName = 'dllExample';

module.exports = {
  mode: 'development',
  entry: ['react'],
  output: {
    path: dllAssetPath,
    filename: 'vendor.js',
    library: dllLibraryName,
  },
  plugins: [
    new webpack.DllPlugin({
      name: dllLibraryName,
      path:path.join(dllAssetPath, 'manifest.json'),
    }),
    new webpack.ids.HashedModuleIdsPlugin(),// 把id的生成算法改为根据模块的引用路径生成一个字符串hash,解决数字id潜在的bug
  ]
}
