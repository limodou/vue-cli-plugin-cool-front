// 采用自动导入API文件的方式，你应该把API 文件放在当前目录下，则API会自动导入, 
// 使用文件主名作为 key 插入结果对象中，如： users.js 会变成 {users: {...}}
// 使用时可以：
// import api from '@/api'
// api.users.method

const collectionModules = window.$hub.api.collectionModules
const context = require.context('.', false, /\.js$/) // 采集当前目录下以.js 结尾的文件
let apis = collectionModules({}, context, {
  expand: false
})

export default apis
