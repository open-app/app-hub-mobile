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
import AboutQuery from '../components/AboutQuery'
import ProfileView from '../components/ProfileView'

import theme from '../utils/theme'

export default class Profile extends Component {
  handlePress = (about, whoami, refetchAbout) => this.props.navigator.push({
    screen: 'profileEdit',
    title: 'Go back',
    passProps: {about, whoami, refetchAbout},
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
              <AboutQuery userId={whoami}>
                {({ about, errorAbout, refetchAbout }) => {
                  if (about && !errorAbout) return <ProfileView
                    self
                    {...about}
                    navigator={navigator}
                    whoami={whoami}
                    handlePress={() => this.handlePress(about, whoami, refetchAbout )}
                  />
                  else return <Loading />
                }}
              </AboutQuery>
            )
            else return <Loading />
          }}
        </WhoamiQuery>
      )
    } else {
      return (
        <AboutQuery userId={userId}>
          {({ about }) => {
            if (about) return <ProfileView
              {...about}
              navigator={navigator}
            />
            else return <Loading />
          }}
        </AboutQuery>
      )
    }
  }
}
