require('react-native-ssb-shims')
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

const Root = () => (
  <App />
)

AppRegistry.registerComponent('p2pboilerplate', () => Root)
