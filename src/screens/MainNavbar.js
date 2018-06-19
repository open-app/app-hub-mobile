import React, { Component } from 'react'
import { Text } from 'react-native'
import ProgressSubscription from '../components/ProgressSubscription'
import MainNavbarView from '../components/MainNavbarView'

export default class MainNavbar extends Component {
  render() {
    return (
      <ProgressSubscription>
        {({ dataProgress, loadingProgress, errorProgress}) => <MainNavbarView
          data={dataProgress}
          loading={loadingProgress}
          error={errorProgress}
        />}
      </ProgressSubscription>
    )
  }
}