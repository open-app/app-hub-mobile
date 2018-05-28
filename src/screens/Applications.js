import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  AppState,
  Linking,
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import RNFS from 'react-native-fs'
import ApkInstaller from 'react-native-apk-installer'
import { Query, compose } from 'react-apollo'
import { gql } from 'apollo-boost'
import { pushNotification } from '../utils/pushNotification'
import theme from '../utils/theme'
import getApkPath from '../utils/getApkPath'
import ApplicationList from '../components/ApplicationList'

const GET_APPLICATIONS = gql`
  query Query {
    getApplications {
      name
      author
      appUrl
      datHash
      repository
      description
    }
  }
`

const GET_DATS = gql`
  query Query {
    getDats {
      name
    }
  }
`

export default class Applications extends Component {
  state = {
    appState: AppState.currentState,
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange)
    Linking.addEventListener('url', this._handleOpenURL)
    RNFS.mkdir(`${RNFS.ExternalStorageDirectoryPath}/AppHub`)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
    Linking.removeEventListener('url', this._handleOpenURL)

  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      pushNotification.cancelAllNotifications()
    } else if (nextAppState === 'background') {
      console.log('Gone to background!')
      pushNotification.localNotification()
    }
    this.setState({appState: nextAppState})
  }

  _handleOpenURL(event) {
    console.log('---------', event.url)
  }
  handleInstall = (datHash) => {
    try {
      const dest = `${RNFS.ExternalStorageDirectoryPath}/AppHub/${datHash}`
      RNFS.mkdir(dest)
      .then(() => {
        getApkPath(datHash)
        .then(apkPath => {
          if(apkPath) {
            const publicPath = `${dest}${datHash}.apk`
            RNFS.exists(publicPath)
            .then(exists => {
              if(!exists) {
                RNFS.copyFile(apkPath, publicPath)
              }
              ApkInstaller.install(publicPath)
            })
          } else {
            console.warn('APK not found')
          }
        })
      })
    }
    catch(error) {
        console.warn(error)
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Query query={GET_DATS}>
          {({ loading: loadingDat, data: { getDats } }) => (
            <Query
              style={styles.wrapper}
              query={GET_APPLICATIONS}
            >
              {({ loading, error, data, refetch, startPolling, stopPolling }) => {
                if (error) return <Text style={styles.text}>Error</Text>
                if (loading) {
                  return (
                    <View style={styles.textContainer}>
                      <Progress.Circle size={30} indeterminate={true} />
                    </View>
                  )
                }
                if (data) {
                  if (data.getApplications.length > 0) {
                    stopPolling()
                    return (
                      <View style={styles.appContainer}>
                          <ApplicationList
                            dats={getDats}
                            data={data.getApplications}
                            handleInstall={this.handleInstall}
                            refetch={refetch}
                            refreshing={loading}
                          />
                      </View>
                    )
                  } else {
                    startPolling(500)
                    return (
                      <View style={styles.textContainer}>
                        <Text style={styles.text}>No data yet, make sure there's another device running ssb on your local network.</Text>
                        <Progress.Circle size={30} indeterminate={true} style={{ paddingTop: 30 }} />
                      </View>
                    )
                  }
                }
              }}
            </Query>
          )}
        </Query>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})