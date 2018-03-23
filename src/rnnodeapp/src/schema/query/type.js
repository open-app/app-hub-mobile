const Query = `
  type Query {
    listApplications(sortBy: String): Application
    connectedPeers: [Peer]
    history(id: String! sequence: Int): [Message]
    profile(id: String!): User
    whoami: String
  }
`
module.exports = () => [Query]
