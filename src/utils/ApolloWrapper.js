import React, { Component } from 'react'
import { AsyncStorage, ActivityIndicator } from 'react-native'
import { CachePersistor } from 'apollo-cache-persist'
import { ApolloProvider} from 'react-apollo'
import { ApolloClient } from 'apollo-boost'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-boost'
import { getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-boost'
import { RetryLink } from 'apollo-link-retry'
const SCHEMA_VERSION = '1' // Must be a string.
const SCHEMA_VERSION_KEY = 'apphub-cache'

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
}

async function getApolloClient() {
  const cache = new InMemoryCache()
  const persistor = new CachePersistor({
    cache,
    storage: AsyncStorage,
    trigger: 'background',
  })
  const currentVersion = await AsyncStorage.getItem(SCHEMA_VERSION_KEY)
  if (currentVersion === SCHEMA_VERSION) {
    await persistor.restore()
  } else {
    await persistor.purge()
    await AsyncStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
  }
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/subscriptions`,
    options: {
      reconnect: true
    }
  })
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  })
  
  const link = new RetryLink().split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink,
  )
  const client = new ApolloClient({
    link,
    cache,
    defaultOptions,
  })
  return client
}

export default function ApolloWrapper(CMP) {
  return class ComponentWrapped extends Component {
    constructor(props) {
      super(props)
      this.state = {
        client: undefined
      }
    }
    
    async componentDidMount() {
      const client = await getApolloClient()
      this.setState({
        client
      })
    }

    render() {
      const { client } = this.state
      if (client) {
        return (
          <ApolloProvider client={client}>
            <CMP {...this.props} />
          </ApolloProvider>
        )
      } else {
        return <ActivityIndicator />
      }
    }
  }
}
