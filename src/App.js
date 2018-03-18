import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RNNode from "react-native-node"
import Hello from './components/Hello'

class App extends Component<{}> {
  componentDidMount() {
    RNNode.start()
  }
  
  componentDidUpdate () {
    const { data: { error, refetch }} = this.props
    if (error) {
      refetch()
    }
  }

  render() {
    const { data: { loading, whoami, refetch, error }} = this.props
    if (loading) {
      return <ActivityIndicator />
    } else if (error) {
      console.log('ERROR', error)
      return <ActivityIndicator />
    } else {
      return (
        <View style={styles.container}>
          <Hello whoami={whoami} refetch={refetch} />
        </View>
      )
    }
  }
}

const whoamiQuery = gql`
  query Query {
    whoami
  }
`

export default graphql(whoamiQuery)(App)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})