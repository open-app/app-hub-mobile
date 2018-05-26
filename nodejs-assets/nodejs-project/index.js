const server = require('open-app-graphql-server')
const ssbDefaults = require('ssb-graphql-defaults')
const dat = require('dat-graphql')
const apphub = require('apphub-graphql')
const os = require('os')
const path = require('path')
console.log('Starting GraphQL Server')
console.log('homedir ', os.homedir())
const writablePath = path.join(__dirname, '..')
const ssbPath = path.join(writablePath, '.ssb')
const datPath = path.join(writablePath, 'dat')

server([
  ssbDefaults,
  dat,
  apphub,
], {
  writablePath
})