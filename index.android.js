require('react-native-ssb-shims')
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/screens'
import RNNode from "react-native-node"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const uri = 'http://localhost:4000/graphql'

RNNode.start()
registerScreens()
Navigation.startSingleScreenApp({
  screen: {
    screen: 'loading', // unique ID registered with Navigation.registerScreen
    // title: 'Profile', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: { navBarHidden: true }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  passProps: { uri }, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
})
