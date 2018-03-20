import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import { Navigation } from 'react-native-navigation'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import graphFetch from '../utils/graphFetch'
// import css from 'react-native-css'

// const styles = css`
//   text {
//     text-transform: uppercase;
//   }
// `
const whoamiQuery = `
  query Query {
    whoami
  }
`
let fetched = false

export default class Loading extends Component {
  componentDidMount() {
      this.getWhoami()
  }

  getWhoami = () => {
    graphFetch(this.props.uri, whoamiQuery)
      .then(res => {
        fetched = true
        console.log('Reply', res.data.whoami)
        this.startMainApp(res.data.whoami)
      })
      .catch(err => {
        setTimeout(() => {
          if (!fetched) this.getWhoami()
        }, 1000)
      })
  }

  startMainApp = (whoami) => {
    const { uri } = this.props
    console.log('Starting appppp!!!!!', uri, whoami)
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Profile',
          screen: 'profile', // this is a registered name for a screen
          icon: require('./icon.png'),
          title: whoami
        },
      ],
      passProps: { whoami, uri },
      animationType: 'slide-down'
    })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ color: 'white' }}>Loading server</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  container: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})