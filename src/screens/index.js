import { Navigation } from 'react-native-navigation'
import Loading from './Loading'
import Profile from './Profile'
import Applications from './Applications'
import Network from './Network'
import ApolloWrapper from '../utils/ApolloWrapper'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('loading', () => Loading)
  Navigation.registerComponent('profile', () => ApolloWrapper(Profile))
  Navigation.registerComponent('network', () => ApolloWrapper(Network))
  Navigation.registerComponent('applications', () => ApolloWrapper(Applications))
}
