import { Navigation } from 'react-native-navigation'
import i18n from '../locales'
import theme from '../utils/theme'

export default (props) => {
  console.log('Running ', props)
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: i18n.t('applications'),
        screen: 'applications', // this is a registered name for a screen
        icon: require('./icon.png'),
        navigatorStyle: { navBarHidden: true },
      },
      {
        label: i18n.t('profile'),
        screen: 'profile', // this is a registered name for a screen
        icon: require('./icon.png'),
        navigatorStyle: { navBarHidden: true },
      },
      {
        label: i18n.t('network'),
        screen: 'network', // this is a registered name for a screen
        icon: require('./icon.png'),
        navigatorStyle: { navBarHidden: true },
      },
    ],
    passProps: props,
    animationType: 'fade',
    tabsStyle: {
      tabBarBackgroundColor: theme.light,
    },
    appStyle: {
      tabBarButtonColor: theme.dark,
      tabBarSelectedButtonColor: theme.color1,
      initialTabIndex: 1,
    },
  })
}