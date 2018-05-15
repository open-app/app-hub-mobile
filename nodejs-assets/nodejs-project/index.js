const server = require('open-app-graphql-server')
const ssbDefaults = require('ssb-graphql-defaults')
// const datTypes = require('dat-graphql')

server([
  ssbDefaults,
  // datTypes
])