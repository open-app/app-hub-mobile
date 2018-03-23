const graphqlServer = require('./lib/graphqlServer')
const ssb = require('./lib/ssb')
  
ssb()
  .then(sbot => graphqlServer(sbot))