import { registerScreens } from './src/screens'
import App from './src/screens/App'
import nodejs from 'nodejs-mobile-react-native'
nodejs.start('index.js')

registerScreens()
App()