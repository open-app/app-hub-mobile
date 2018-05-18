import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  AppState,
} from 'react-native'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import RNFS from 'react-native-fs'
import ApkInstaller from 'react-native-apk-installer'
import { pushNotification } from '../utils/pushNotification';
import theme from '../utils/theme'
// import { Navigation } from 'react-native-navigation'

// export default (props) => {
//   Navigation.startTabBasedApp({
//     tabs: [
//       {
//         label: 'Popular',
//         screen: 'applications', // this is a registered name for a screen
//         icon: require('../assets/applications.png'),
//       },
//       {
//         label: 'Hot',
//         screen: 'profile', // this is a registered name for a screen
//         icon: require('../assets/profile.png'),
//       }
//     ],
//     passProps: props,
//     animationType: 'fade',
//     tabsStyle: {
//       tabBarBackgroundColor: theme.light,
//     },
//     appStyle: {
//       tabBarButtonColor: theme.dark,
//       tabBarSelectedButtonColor: theme.color1,
//       initialTabIndex: 1,
//     },
//   })
// }

export default class Applications extends Component {
  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      pushNotification.cancelAllNotifications()
    } else if (nextAppState === 'background') {
      console.log('Gone to background!')
      pushNotification.localNotification();
    }
    this.setState({appState: nextAppState});
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {/* <Progress.Circle size={30} indeterminate={true} /> */}
          <ActionButton
            position="right"
            buttonColor="rgba(231,76,60,1)"
            onPress={() => { console.log("hi")}}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.light,
  },
  container: {
    maxWidth: '87%',
  },
  text: {
    color: theme.dark
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
})