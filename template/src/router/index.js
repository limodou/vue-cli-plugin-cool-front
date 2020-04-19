// 采用自动导入路由文件的方式，你应该把路由放在当前目录下的其它的文件中，则路由会自动导入

const collectionModules = window.$hub.api.collectionModules
const context = require.context('.', false, /\.js$/) // 采集当前目录下以.js 结尾的文件
let routes = collectionModules([], context)

export default routes;