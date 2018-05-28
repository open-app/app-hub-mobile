import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  Linking,
  ActivityIndicator,
} from 'react-native'
import { Subscription } from 'react-apollo'
import { gql } from 'apollo-boost'
import theme from '../utils/theme'
const DOWNLOAD_DAT = gql`
subscription Subscriptions($datHash: String!) {
  downloadDat(hash: $datHash) {
    done
    peers
  }
}
`

class Finished extends Component {
  componentDidMount() {
    this.props.finishDownload()
  }
  render() {
    return <View />
  }
}

export default class ApplicationDownloading extends Component {
  render() {
    const { finishDownload, datHash, appurl } = this.props
    return (
      <Subscription
      subscription={DOWNLOAD_DAT}
      shouldResubscribe={true}
      variables={{ datHash }}
    >
      {({ data, loading, error }) => {
        if (loading) return <ActivityIndicator />
        if (error) console.warn(error)
        if (data) {
          const { downloadDat: { done, peers } } = data
          if (done) return <Finished finishDownload={finishDownload} />
          return (
            <View>
              <ActivityIndicator />
              <Text>{peers} peers</Text>
            </View>
          )
        }
        return <Text>???</Text>
      }}
    </Subscription>
    )
  }
}