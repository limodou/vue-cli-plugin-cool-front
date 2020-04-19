// 路由示例

const routes = [{
  path: "/",
  name: "<%= appName %>",
  meta: {
    title: 'Demo',
    noaccess: true
  },
  component: () => import("@/views/demo")
}]
export default routes;