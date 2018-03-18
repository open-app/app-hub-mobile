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

  handlePress() {
    this.props.mutate({
      variables: { id: this.props.whoami }
    })
      .then(({ data }) => {
        console.log('got data', data);
      }).catch((error) => {
        console.log('there was an error sending the query', error);
      });
  }

  render() {
    const { whoami } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Peer-to-Peer Boilerplate!
        </Text>

        <Button title="Profile" onPress={() => {
          console.log(this.props)
          this.props.refetch()
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

const submitAbout = gql`
  mutation submitAbout($repoFullName: String!) {
    submitAbout(repoFullName: $repoFullName) {
      createdAt
    }
  }
`

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