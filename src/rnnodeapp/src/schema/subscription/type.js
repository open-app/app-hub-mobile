const Subscription=`
  type Counter {
    count: Int!
    countStr: String
  }
  type Subscription {
    counter: Counter!
    gossip(connected: Boolean): Gossip!
  }
`

module.exports = () => [Subscription]