import setPublicPath from './public-path'
import routes from './router'
import store from './store'

// 启用 mock
if (process.env.VUE_APP_USE_MOCK) require('@/mock')

export default {
  routes,
  store,
  setPublicPath
}
