const Channel = `
  type Channel {
    name: String!
    subscribed: Boolean
  }
`
module.exports = () => [Channel]