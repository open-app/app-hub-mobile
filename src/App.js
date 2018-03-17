import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RNNode from "react-native-node"
import Hello from './components/Hello'

class App extends Component<{}> {
  state = { whoami: null }

  componentDidMount() {
    RNNode.start()
  }
  
  render() {
    const { data: { loading, whoami }} = this.props
    return (
      <View style={styles.container}>
        <Hello whoami={whoami} />
      </View>
    )
  }
}

export default graphql(gql`
  query Query {
    whoami
  }
`)(App)


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