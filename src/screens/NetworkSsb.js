import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import { Subscription } from 'react-apollo'
import { gql } from 'apollo-boost'
import theme from '../utils/theme'

const SUBSCRIPTION = gql`
  subscription Subscription {
    gossip {
      type
      peer {
        host
        key
        source
        duration
      }
    }
  }
`

export default class Network extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Subscription
          subscription={SUBSCRIPTION}
          shouldResubscribe={true}
        >
          {({ data, loading, error }) => {
            if (data && data.gossip) {
              console.log('CONNECTED', data.gossip.peer)
              const { source, key, host } = data.gossip.peer
              if (source === 'local') {
                return <Text>Local: {key}</Text>
              } else if (source === 'pub') {
                return <Text>Pub: {host}</Text>
              }
            } 
            if (error) return <Text style={styles.text}>Error</Text>
            if (loading) return <Text style={styles.text}>No connections</Text>
            return <Text style={styles.text}>Not connected to any peers</Text>
          }}
        </Subscription>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.light,
  },

  text: {
    fontSize: 22,
    color: theme.dark,
  }
})