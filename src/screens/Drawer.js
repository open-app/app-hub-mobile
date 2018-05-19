import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
// import { Subscription } from 'react-apollo'
// import { gql } from 'apollo-boost'
import theme from '../utils/theme'

// const SUBSCRIPTION = gql`
//   subscription Subscription {
//     gossip {
//       type
//       peer {
//         host
//       }
//     }
//   }
// `

export default class Drawer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Hello</Text>
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