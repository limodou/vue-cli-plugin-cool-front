import {
  mock
} from './utils'

mock('/applications/list', {
  'data|1-10': [{
    appname: '@cword(5,10)',
    description: '@ctitle',
    submitter: '@cname',
    telephone: '@integer',
    submit_date: '@date'
  }]
})
