import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/screens'
import nodejs from 'nodejs-mobile-react-native'
nodejs.start('index.js')
const uri = 'http://localhost:4000/graphql'

registerScreens()
Navigation.startSingleScreenApp({
  screen: {
    screen: 'loading', // unique ID registered with Navigation.registerScreen
    navigatorStyle: { navBarHidden: true }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  passProps: { uri }, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
})