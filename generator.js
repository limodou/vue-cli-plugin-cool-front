module.exports = (api, options) => {
  const {
    port,
    appName,
    baseURL
  } = api.options

  // 添加启动命令
  if (port !== 8080) {
    api.extendPackage({
      scripts: {
        serve: `vue-cli-service serve --port ${port}`
      }
    })
  }
  const projectName = require(api.resolve('package.json')).name;

  api.render('./template', {
    appName,
    baseURL
  })

  api.extendPackage({
    name: appName,
    dependencies: {
      "vue-router": "^3.1.3",
      "vuex": '^3.1.2'
    },
    devDependencies: {
      'better-mock': '^0.2.3',
      "less": "^3.10.3",
      "less-loader": "^5.0.0",
    }
  })
}