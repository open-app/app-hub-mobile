const { GraphQLServer, PubSub } = require('graphql-yoga')
const { resolvers, typeDefs } = require('./schema')
// const typeDefs = `
//   type Query {
//     hello: String!
//   }
//   type Counter {
//     count: Int!
//     countStr: String
//   }
//   type Subscription {
//     counter: Counter!
//   }
// `

  // const resolvers = {
  //   Query: {
  //     hello: () => `Hello`,
  //   },
  //   Counter: {
  //     countStr: counter => `Current count: ${counter.count}`,
  //   },
  //   Subscription: {
  //     counter: {
  //       subscribe: (parent, args, { pubsub }) => {
  //         const channel = Math.random().toString(36).substring(2, 15) // random channel name
  //         let count = 0
  //         setInterval(() => pubsub.publish(channel, { counter: { count: count++ } }), 2000)
  //         return pubsub.asyncIterator(channel)
  //       },
  //     }
  //   },
  // }

module.exports = (sbot) => {
  console.log('Starting server with sbot', sbot)
  
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