import Mock from 'better-mock'

// 采用自动导入Mock文件的方式，你应该把Mock文件放在当前目录下的其它的文件中，则Mock 文件会自动导入
const collectionModules = window.$hub.api.collectionModules
const context = require.context('.', false, /\.js$/) // 采集当前目录下以.js 结尾的文件
collectionModules([], context, {
  append: false
})

// export default routes;
export default Mock