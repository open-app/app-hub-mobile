import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import theme from '../utils/theme'

const QUERY = gql`
  query Query {
    getDats {
      name
    }
  }
`

export default class Network extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Query
          query={QUERY}
        >
          {({ data, loading, error }) => {
            console.log('DATA', data)
            if (error) return <Text style={styles.text}>Error</Text>
            if (loading || !data) return <Text style={styles.text}>Loading</Text>
            if (data.getDats[0]) return data.getDats.map(i => <Text key={i.name}>{i.name}</Text>)
            return <Text>Nothing yet</Text> 
            // if (data && data.gossip) return <Text style={styles.text}>{data.gossip.peer.host}</Text>
            // else return <Text style={styles.text}>Not connected to any peers</Text>
          }}
        </Query>
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