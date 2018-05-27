import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
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

export default class ApplicationItemWithDat extends Component {
  render() {
    const { handleInstall, datHash } = this.props
    return (
      <Subscription
      subscription={DOWNLOAD_DAT}
      shouldResubscribe={true}
      variables={{ datHash: this.props.datHash }}
    >
      {({ data, loading, error }) => {
        console.log('DATA', data)
        console.log('loading', loading)
        if (loading) return <ActivityIndicator />
        if (error) console.warn(error)
        if (data) {
          const { downloadDat: { done, peers } } = data
          return (
            <View>
              {done
                ? <Button title='Install' onPress={handleInstall} color={theme.dark} />
                : <ActivityIndicator />
              }
              <Text>{peers}</Text>
            </View>
          )
        }
        return <Text>What else?</Text>
      }}
    </Subscription>
    )
  }
}