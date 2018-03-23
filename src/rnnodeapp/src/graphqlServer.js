const { GraphQLServer, PubSub } = require('graphql-yoga')
const { resolvers, typeDefs } = require('./schema')

module.exports = (sbot) => {
  console.log('Starting server with sbot')
  const pubsub = new PubSub()
  const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub, sbot } })
  
  const options = {
    port: 4000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }
  server.start(options, ({ port }) => console.log(`Server started, listening on port ${port} for incoming requests.`))
}