import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import RNFS from 'react-native-fs'
import ApkInstaller from 'react-native-apk-installer'
import theme from '../utils/theme'

export default class Applications extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>Application list under construction</Text>
          <Progress.Circle size={30} indeterminate={true} />
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
              <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.dark,
  },
  container: {
    maxWidth: '87%',
  },
  text: {
    color: theme.light
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})