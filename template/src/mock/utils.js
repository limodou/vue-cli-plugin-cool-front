import Mock from 'better-mock'

// 导入 mock 函数对应的模块
// import * as cf from './function'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 500
})

const wrap = (url, func) => {
  if (typeof func === 'function') {
    return (req) => {
      let res = func(req)
      console.log('Mock result =====>', url, req, {
        result: res
      })
      return {
        result: res
      }
    }
  } else {
    return (req) => {
      let res = Mock.mock(func)
      console.log('Mock result =====>', url, req, {
        result: res
      })
      return {
        result: res
      }
    }
  }
}

const getPattern = (pattern) => {
  return typeof pattern == "string" ? new RegExp(pattern) : pattern
}

export const mock = (pattern, func) => {
  Mock.mock(getPattern(pattern), wrap(pattern, func))
}