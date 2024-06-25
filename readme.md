### 全局安装和本地安装的区别
全局安装webpack的好处是npm会帮我们绑定一个命令行环境变量，一次安装、处处运行;本地安装webpack则会添加其为项目中的依赖，只能在项目内部使用。


### webpack的安装指令
```js
yarn add webpack webpack-cli -D
```
webpack是核心模块，webpack-cli是webpack的命令行工具，-D是将其安装为开发依赖。

### 检查是否安装成功
```js
npx webpack -v
npx webpack-cli -v
```
可显示版本号即证明安装成功


### 分析打包体积
```js
yarn add webpack-bundle-analyzer -D
```

在`webpack.config.js`中引入`const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;`,配置使用
```js
 plugins: [
    new BundleAnalyzerPlugin()
  ]
```

### webpack的打包流程
chunk字面的意思是代码块，在webpack中可以理解成被抽象和包装后的一些模块。它就像一个装着很多文件的文件袋，里面的文件就是各个模块，webpack在外面加了一层包裹，从而形成了chunk。
从入口文件开始检索，并将具有依赖关系的模块生成一个依赖树，最终得到一个chunk。我们一般将由这个chunk得到的打包产物称为bundle.

在一些特殊情况下，一个入口也可能产生多个chunk并生成多个bundle。
