require('react-native-ssb-shims')
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { split, ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
const cache = new InMemoryCache()
// Handle Apollo errors
// const errorLink = onError(({ networkError }) => {
//   if (networkError.statusCode === 401) {
//     console.log('Got network error: ', networkError)
//   }
// let errorMessage = networkError.statusCode === 401 ? 'Network error 104, handled' : 'link sucess'
// console.log("Got some cowry error: ", errorMessage, networkError)
// })

const errorLink = onError(({ response, operation, networkError, graphQLErrors }) => {
  console.log('RESSSSS', response)
  console.log('OPPPPPP', operation)
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
});

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/subscriptions`,
  options: {
    reconnect: true
  }
});

// Split subscriptions and normal queries
// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

// App state
const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: {
            __typename: 'NetworkStatus',
            isConnected
          },
        };
        cache.writeData({ data });
        return null
      },
    },
  }
});



// Apollo client
const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    stateLink,
    link
  ]),
  cache
})

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent('p2pboilerplate', () => Root);
