import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  AppState,
  Linking,
} from 'react-native'
import RNFS from 'react-native-fs'
import ApkInstaller from 'react-native-apk-installer'
import { pushNotification } from '../utils/pushNotification'
import theme from '../utils/theme'
import getApkPath from '../utils/getApkPath'
import ApplicationList from './ApplicationList'
import Loading from './Loading'

export default class ApplicationsView extends Component {
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
    console.log('Opening URL --------->', event.url)
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

  render () {
    const {
      loadingApplications,
      getDats,
      getApplications,
      refetch,
      startPolling,
      stopPolling
    } = this.props

    if (getApplications && getDats) {
      if (getApplications.length > 0) {
        stopPolling()
        return (
          <View style={styles.appContainer}>
              <ApplicationList
                dats={getDats}
                applications={getApplications}
                handleInstall={this.handleInstall}
                refetch={refetch}
                refreshing={loadingApplications}
              />
          </View>
        )
      } else {
        startPolling(500)
        return <Loading />
      }
    } else {
      return <Loading />
    }
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