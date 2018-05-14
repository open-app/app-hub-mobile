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
            if (error) return <Text style={styles.text}>Error</Text>
            if (loading || !data) return <Text style={styles.text}>Loading</Text>
            if (data && data.gossip.type === 'connected') return <Text style={styles.text}>{data.gossip.peer.host}</Text>
            else return <Text style={styles.text}>Not connected to any peers</Text>
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
    backgroundColor: theme.dark,
  },

  text: {
    fontSize: 22,
    color: theme.light,
  }
})