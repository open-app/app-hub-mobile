const Mutation = `
  input postInput {
    text: String
  }
  input aboutInput {
    id: String
    name: String
    description: String
  }
  type Mutation {
    postMessage(input: postInput): PostMessage
    aboutMessage(input: aboutInput): AboutMessage
  }
`
module.exports = () => [Mutation]
