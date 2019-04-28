const API_PREFIX = '/inteGration/api'

const config = {
  development: {
    API_BASE: '',
    API_PREFIX,
  },
  production: {
    API_BASE: '',
    API_PREFIX,
  },
}

const path = require('path')

console.log(path.resolve(path.__dirname, '../.env'), 'hhhh')
const result = require('dotenv').config({
  path: path.resolve(path.__dirname, '../.env'),
})

if (result.error) {
  throw result.error
}

console.log(result.parsed)

export default config[process.env.NODE_ENV]
