// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ?
  './' :
  './'

module.exports = {
  publicPath: BASE_URL,
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    },
    extract: false
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    // 移除 preload 插件
    config.plugins.delete('preload')
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`[name].js`)
    }
    // 静态资源大小
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 4096
      }))
  },
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0]
      const terserOptions = terserWebpackPlugin.options.terserOptions
      terserOptions.compress['drop_console'] = true
    }
    Object.assign(config, {
      externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        iview: 'iview',
        vuecoms: 'vuecoms'
      }
    })
  },
  productionSourceMap: true,

  filenameHashing: true,
}