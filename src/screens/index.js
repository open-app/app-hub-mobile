import { Navigation } from 'react-native-navigation'
import Loading from './Loading'
import Profile from './Profile'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('profile', () => Profile)
  Navigation.registerComponent('loading', () => Loading)
  // Navigation.registerComponent('example.PushedScreen', () => PushedScreen)
}
