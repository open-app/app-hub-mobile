const server = require('open-app-graphql-server')
const ssbDefaults = require('ssb-graphql-defaults')
const datTypes = require('dat-graphql')

console.log('NodeJS is starting!')

server([
  ssbDefaults,
  datTypes
])