import pull from 'pull-stream'

export const getConnectedPeers = (sbot, pubsub, channel, connected) => {
  if (!sbot) {
    console.log('ERROR! Pass sbot to the function')
  }
  return pull(
    sbot.gossip.changes(),
    pull.filter(peers => {
      if (connected) {
        return peers.type === 'connect'
      }
      return peers
    }),
    pull.drain(gossip => {
      return pubsub.publish(channel, { gossip })
    })
  )
}