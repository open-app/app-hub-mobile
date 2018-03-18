const MessageInput = `
  input MessageInput {
    text: String
  }
`

const Mutation = `
  input MessageInput {
    text: String
  }
  type Mutation {
    postMessage(input: MessageInput): PostMessage
  }
`
module.exports = () => [Mutation]
