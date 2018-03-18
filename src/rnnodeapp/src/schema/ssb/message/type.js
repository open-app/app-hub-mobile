const Message = `
  interface Message {
    content: String
    key: String!
    sequence: Int!
    timestamp: Float!
    type: String!
}
`

module.exports = () => [Message]