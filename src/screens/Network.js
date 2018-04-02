import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import { Query, Subscription } from 'react-apollo'
import gql from 'graphql-tag'

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

const QUERY = gql`
  query Query($userId: String!) {
    profile(id: $userId) {
      name
    }
  }
`

export default class Network extends Component {
  handlePres = () => {
    console.log(this.props)
  }
  render() {
    return (
      <Subscription
        // query={QUERY}
        // variables={{ userId: this.props.whoami }}
        subscription={SUBSCRIPTION}
        shouldResubscribe={true}
      >
        {({ data, loading, error }) => {
          if (error) return <Text>Error</Text>
          if (loading || !data) return <Text>Loading</Text>
          console.log('DATA', data)
          return <Text style={styles.main} onPress={this.handlePres}>DATA</Text>
        }}
      </Subscription>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011627',
  },
  container: {
    maxWidth: '87%',
  },
  main: {
    fontSize: 22,
    color: '#F71735',
    paddingBottom: 30
  },
  text: {
    color: '#FDFFFC',
    paddingBottom: 30
  },
  input: {
    height: 50,
    backgroundColor: '#FDFFFC',
    borderWidth: 1,
  },
  button: {
    marginTop: 30,
    paddingTop: 30,
    color: '#FDFFFC'
  }
})