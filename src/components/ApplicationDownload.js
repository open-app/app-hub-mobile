import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import theme from '../utils/theme'

export default class ApplicationItemDownload extends Component {
  render() {
    return (
      <View>
        <Button
          title={'Download'}
          color={theme.color1}
          onPress={this.props.handlePress}
        />
      </View>
    )
  }
}