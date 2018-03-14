import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import RNNode from "react-native-node";

class App extends Component<{}> {
  state = { messages: [] }

  componentDidMount() {
    RNNode.start();
  }

  handlePress = () => {
    console.log(this.props)
    // this.props.data.refetch()
  }

  render() {
    const { data: { loading, profile }} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Peer-to-Peer Boilerplate
        </Text>

        <Button title="Ping" onPress={() => {
          console.log('pinging!')
          this.handlePress()
        }} />

        <View>
          {loading && <Text>Loading</Text>}
          {/* {!loading && <Text>{counter.countStr || null}</Text>} */}
        </View>
      </View>
    );
  }
}

export default graphql(gql`
  query Query {
    profile (key: "iL6NzQoOLFP18pCpprkbY80DMtiG4JFFtVSVUaoGsOQ") {
      name
      messages { key }
      channels { name }
    }
  }
`)(App);


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
});