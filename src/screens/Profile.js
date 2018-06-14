import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  ActivityIndicator,
  Image,
} from 'react-native'
import Loading from '../components/Loading'
import WhoamiQuery from '../components/WhoamiQuery'
import ProfileQuery from '../components/ProfileQuery'
import ProfileView from '../components/ProfileView'

import theme from '../utils/theme'

export default class Profile extends Component {
  handlePress = (profile, whoami, refetchProfile) => this.props.navigator.push({
    screen: 'profileEdit',
    title: 'Go back',
    passProps: {profile, whoami, refetchProfile},
    animated: true,
    animationType: 'slide-horizontal',
    backButtonTitle: 'go back',
    navigatorStyle: { navBarBackgroundColor: theme.color1, navBarTextColor: theme.light, navBarButtonColor: theme.light }
  })

  render() {
    const { navigator, userId } = this.props
    if (!userId) {
      return (
        <WhoamiQuery>
          {({ whoami, errorWhoami }) => {
            if (whoami && !errorWhoami) return (
              <ProfileQuery userId={whoami}>
                {({ profile, errorProfile, refetchProfile }) => {
                  console.log('profile', profile)
                  if (profile && !errorProfile) return <ProfileView
                    self
                    {...profile}
                    navigator={navigator}
                    handlePress={() => this.handlePress(profile, whoami, refetchProfile )}
                  />
                  else return <Loading />
                }}
              </ProfileQuery>
            )
            else return <Loading />
          }}
        </WhoamiQuery>
      )
    } else {
      return (
        <ProfileQuery userId={userId}>
          {({ profile }) => {
            if (profile) return <ProfileView
              {...profile}
              navigator={navigator}
            />
            else return <Loading />
          }}
        </ProfileQuery>
      )
    }
  }
}
