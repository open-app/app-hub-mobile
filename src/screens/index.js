import { Navigation } from 'react-native-navigation'
import Loading from './Loading'
import Profile from './Profile'
import Applications from './Applications'
import Network from './Network'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('loading', () => Loading)
  Navigation.registerComponent('profile', () => Profile)
  Navigation.registerComponent('network', () => Network)
  Navigation.registerComponent('applications', () => Applications)
}
