import React, { Component } from "react"
import { ApolloProvider} from "react-apollo"
import { ApolloClient } from 'apollo-client'
import { WebSocketLink } from 'apollo-link-ws'
// import { SubscriptionClient } from "subscriptions-transport-ws"
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { onError } from "apollo-link-error"

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent

function getApolloClient() {  
  // // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/subscriptions`,
    options: {
      reconnect: true
    }
  })
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
  // const subClient = new SubscriptionClient('ws://localhost:4000/subscriptions', {
  //   reconnect: true
  // });
  
  // const link = new WebSocketLink(subClient);
  
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink,
  )
  // console.log("I am trying to connect to GRAPHQL_SERVER");
  // console.log("all ok with network", link);
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
