const TerserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  publicPath: './',
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          parallel: true  // 开启多进程打包 js
        })
      ]
    }
  }
}
