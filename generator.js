module.exports = (api, options) => {
  const {
    port,
    appName,
  } = api.options

  // 添加启动命令
  api.extendPackage({
    scripts: {
      serve: `vue-cli-service serve --port ${port}`,
      "serve:mock": `vue-cli-service serve --port ${port} --mode mock`,
    }
  })
  const projectName = require(api.resolve('package.json')).name;

  api.render('./template', {
    appName,
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