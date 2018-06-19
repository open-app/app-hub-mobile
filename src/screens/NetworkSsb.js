import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import GossipSubscription from '../components/GossipSubscription'
import NetworkList from '../components/NetworkList'

export default class Network extends Component {
  render() {
    return (
      <GossipSubscription>
        {({ dataGossip, errorGossip, loadingGossip }) => <NetworkList
          loading={loadingGossip}
          error={errorGossip}
          data={dataGossip}
        />}
      </GossipSubscription>
    )
  }
}