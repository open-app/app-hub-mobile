import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
} from 'react-native'
import theme from '../utils/theme'

export default class ApplicationItemDownload extends Component {
  render() {
    const { icon, installed, handleInstall, handleOpen } = this.props
    return (
      <View>
        <Image
          style={{ width: 100, height: 50, resizeMode: Image.resizeMode.contain }}
          source={{uri: icon}}
        />
        <Button
          title={installed ? 'Open' : 'Install' }
          disabled={installed}
          color={theme.color1}
          onPress={installed ? handleOpen : handleInstall}
        />
      </View>
    )
  }
}