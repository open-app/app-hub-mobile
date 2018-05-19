import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../utils/theme'

export default class ApplicationNavbar extends Component {
  openDrawer = () => {
    // this.props.navigator.toggleDrawer({
    //   side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
    //   animated: true, // does the toggle have transition animation or does it happen immediately (optional)
    //   to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
    // });    
  }
  render() {
    return (
      <View>
        {/* <Icon.Button name="menu" backgroundColor={theme.color1} onPress={this.openDrawer} /> */}
      </View>
    )
  }
}