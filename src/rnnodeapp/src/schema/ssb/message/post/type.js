const PostMessage = `
  type PostMessage implements Message {
    content: String
    key: String!
    sequence: Int!
    text: String
    timestamp: Float!
    type: String!
    author: String!
  }
`
module.exports = () => [PostMessage]