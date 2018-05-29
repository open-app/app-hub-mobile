import { Navigation } from 'react-native-navigation'
import Loading from './Loading'
import Profile from './Profile'
import ProfileEdit from './ProfileEdit'
import Applications from './Applications'
import ApplicationsNavbar from '../components/ApplicationsNavbar'
import NetworkSsb from './NetworkSsb'
import NetworkDat from './NetworkDat'
import Drawer from './Drawer'
import ApolloWrapper from '../utils/ApolloWrapper'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('loading', () => Loading)
  Navigation.registerComponent('profileEdit', () => ApolloWrapper(ProfileEdit))
  Navigation.registerComponent('profile', () => ApolloWrapper(Profile))
  Navigation.registerComponent('networkSsb', () => ApolloWrapper(NetworkSsb))
  Navigation.registerComponent('networkDat', () => ApolloWrapper(NetworkDat))
  Navigation.registerComponent('applications', () => ApolloWrapper(Applications))
  Navigation.registerComponent('applicationsNavbar', () => ApplicationsNavbar)
  Navigation.registerComponent('drawer', () => Drawer)
}
