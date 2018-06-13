import React, { Component } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import i18n from '../locales'
import theme from '../utils/theme'


export default class Loading extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.loadingText}>{i18n.t('loadingServer')}</Text>
        <ActivityIndicator size="large" color={theme.color3} />
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
  loadingText: {
    color: theme.dark,
    paddingBottom: 60,
    fontSize: 16,
  },
})