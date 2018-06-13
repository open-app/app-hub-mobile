import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import * as Progress from 'react-native-progress'
import theme from '../utils/theme'

export default ({ children }) => (
  <View style={styles.textContainer}>
    <Text style={styles.text}>No data yet, make sure there's another device running ssb on your local network.</Text>
    <Progress.Circle size={30} indeterminate={true} style={{ paddingTop: 30 }} />
  </View>
)

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  text: {
    color: theme.dark,
    textAlign: 'center',

  },
})