const User = `
  type User {
    channels: [Channel]
    id: String!
    name: String
  }
`

module.exports = () => [User]
