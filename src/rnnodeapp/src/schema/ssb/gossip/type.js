const Gossip=`
  type Duration {
    mean: Float
    stdev: Float
    count: Int
    sum: Int
    sqsum: Int
  }
  type Peer {
    host: String
    port: Int
    key: String
    source: String
    state: String!
    announcers: Int
    duration: Duration
    stateChange: Int
    failure: Int
    client: Boolean
  }
  type Gossip {
    type: String!
    peer: Peer
  }
`

module.exports = [Gossip]