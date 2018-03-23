import { getConnectedPeers } from '../ssb/gossip/helpers'

export default {
  counter: {
    subscribe: (parent, args, { pubsub }) => {
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      let count = 0
      setInterval(() => pubsub.publish(channel, { counter: { count: count++ } }), 2000)
      return pubsub.asyncIterator(channel)
    },
  },
  gossip: {
    subscribe: (parent, args, { pubsub, sbot }) => {
      const { connected } = args
      const channel = Math.random().toString(36).substring(2, 15) // random channel name
      getConnectedPeers(sbot, pubsub, channel, connected)
      return pubsub.asyncIterator(channel)
    },
  }
}