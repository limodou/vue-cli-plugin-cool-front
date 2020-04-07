const routes = [{
  path: "<%= baseURL %>",
  name: "<%= appName %>",
  meta: {
    title: 'Demo',
    access: ['user']
  },
  component: () => import("@/views/demo")
}]
export default routes;