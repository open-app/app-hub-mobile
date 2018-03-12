import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

// Handle Apollo errors
const errorLink = onError(({ networkError }) => {
  if (networkError.statusCode === 401) {
    console.log(networkError)
  }
let errorMessage = networkError.statusCode === 401 ? 'Network error 104, handled' : 'link sucess'
console.log(errorMessage, networkError)
})

// Split subscriptions and normal queries

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


// Apollo client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent('p2pboilerplate', () => Root);
