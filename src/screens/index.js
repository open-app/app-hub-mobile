import { Navigation } from 'react-native-navigation'
import Loading from './Loading'
import Profile from './Profile'
import Applications from './Applications'
import ApplicationsNavbar from '../components/ApplicationsNavbar'
import Network from './Network'
import Git from './Git'
import Messages from './Messages'
import Drawer from './Drawer'
import ApolloWrapper from '../utils/ApolloWrapper'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('loading', () => Loading)
  Navigation.registerComponent('profile', () => ApolloWrapper(Profile))
  Navigation.registerComponent('network', () => ApolloWrapper(Network))
  Navigation.registerComponent('git', () => ApolloWrapper(Git))
  Navigation.registerComponent('messages', () => ApolloWrapper(Messages))
  Navigation.registerComponent('applications', () => ApolloWrapper(Applications))
  Navigation.registerComponent('applicationsNavbar', () => ApplicationsNavbar)
  Navigation.registerComponent('drawer', () => Drawer)
}
