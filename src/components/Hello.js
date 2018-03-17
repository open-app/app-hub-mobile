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

export default class Hello extends Component<{}> {
  state = { messages: [] }

  componentDidMount() {
    console.log('Component state', this.props)
  }

  handlePress = () => {
    console.log(this.props)
  }

  render() {
    const { whoami } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Peer-to-Peer Boilerplate!
        </Text>

        <Button title="Profile" onPress={() => {
          console.log('pinging!')
          this.handlePress()
        }} />

        <View>
          {/* {loading && <Text>Loading</Text>} */}
          <Text>{whoami}</Text>
          {/* {!loading && <Text>{counter.countStr || null}</Text>} */}
        </View>
      </View>
    );
  }
}

// const profileQuery = gql`
//   query Query {
//     history(id: $id) {
//       content
//     }
//   }
// `

// export default graphql(profileQuery, {
//   options: (props) => ({
//     variables: {
//       id: '@2RNGJafZtMHzd76gyvqH6EJiK7kBnXeak5mBWzoO/iU=.ed25519'
//     }
//   })  
// })(Hello);


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