module.exports = [{
    name: 'appName',
    message: 'Used for store sub app name:'
  },
  {
    name: 'baseURL',
    message: 'Used for sub app baseURL for router:',
    default(answers) {
      return '/' + answers.appName
    }
  },
  {
    name: 'port',
    type: 'input',
    default: 8080,
    message: 'Input test server port:'
  }
]