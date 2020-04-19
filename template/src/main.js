import setPublicPath from './public-path'
import routes from './router'
import store from './store'

// 启用 mock
if (process.env.NODE_ENV === 'mock') require('@/mock')

export default {
  routes,
  store,
  setPublicPath
}
