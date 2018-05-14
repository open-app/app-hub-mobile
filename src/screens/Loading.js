import React, { Component } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
// import graphFetch from '../utils/graphFetch'
import i18n from '../locales'
import theme from '../utils/theme'
// import runMainApp from './MainApp'

// const whoamiQuery = `
//   query Query {
//     whoami
//   }
// `
// let fetched = false

export default class Loading extends Component {
  // componentDidMount() {
  //     this.getWhoami()
  // }

  // getWhoami = () => {
  //   graphFetch(this.props.uri, whoamiQuery)
  //     .then(res => {
  //       fetched = true
  //       console.log('Reply', res.data.whoami)
  //       this.startMainApp(res.data.whoami)
  //     })
  //     .catch(err => {
  //       setTimeout(() => {
  //         if (!fetched) this.getWhoami()
  //       }, 1000)
  //     })
  // }

  // startMainApp = (whoami) => {
  //   const { uri } = this.props
  //   runMainApp({ whoami, uri })
  // }

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
    backgroundColor: theme.dark,
  },
  loadingText: {
    color: theme.light,
    paddingBottom: 60,
    fontSize: 16,
  },
})