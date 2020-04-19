/** 使用基座提供的 mock 函数
 * 第一个参数是 URI
 * 第二个参数是 Mock 的模板或回调函数
 * Mock 模板的使用参数 mockjs.com 网站示例
 * 回调函数应返回预期的结果
 * 
 * 回调函数的格式可以是：
 * 
 *  (req, Mock) => {}
 * 
 * 其中 req 是请求报文，上传的内容在 req.body 中。所以可以使用 
 * 
 *  let data = JSON.parse(req.body)
 * 
 *  第二个参数 Mock 可以在需要时，通过 Mock.Random.xxx 来生成随机数据
 */
const mock = window.$hub.api.mock

mock('/applications/list', {
  'data|1-10': [{
    appname: '@cword(5,10)',
    description: '@ctitle',
    submitter: '@cname',
    telephone: '@integer',
    submit_date: '@date'
  }]
})
