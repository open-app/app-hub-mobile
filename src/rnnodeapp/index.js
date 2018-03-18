const graphqlServer = require('./lib/graphqlServer')
const ssbClient = require('./lib/ssbClient')
  
ssbClient()
  .then(sbot => graphqlServer(sbot))