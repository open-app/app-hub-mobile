import React, { Component } from "react"
import { ApolloProvider} from "react-apollo"
import { ApolloClient } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-boost'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-boost'

function getApolloClient() {  
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/subscriptions`,
    options: {
      reconnect: true
    }
  })
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
  
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink,
  )
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })
  return client;
}

export default function ApolloWrapper(CMP) {
  return class HomeWrapped extends Component {
    constructor() {
      super()
      this.apolloClient = getApolloClient()
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <CMP {...this.props} />
        </ApolloProvider>
      )
    }
  }
}
