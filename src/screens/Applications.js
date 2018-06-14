import React, { Component } from 'react'
import {
  View,
} from 'react-native'

import theme from '../utils/theme'
import DatsQuery from '../components/DatsQuery'
import ApplicationsQuery from '../components/ApplicationsQuery'
import ApplicationsView from '../components/ApplicationsView'

export default class Applications extends Component {

  render() {
    return (
      <DatsQuery>
        { datData => (
          <ApplicationsQuery>
              { appsData => {
                return <ApplicationsView {...datData} {...appsData} />
              }}
          </ApplicationsQuery>
        )}
      </DatsQuery>
    )
  }
}
