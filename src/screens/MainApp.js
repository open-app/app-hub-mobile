import { Navigation } from 'react-native-navigation'
import i18n from '../locales'
import theme from '../utils/theme'

const navigatorStyle = {
  navBarBackgroundColor: theme.color1,
  navBarCustomView: 'applicationsNavbar'
}

export default (props) => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: i18n.t('applications'),
        screen: 'applications', // this is a registered name for a screen
        icon: require('../assets/applications.png'),
        navigatorStyle,
      },
      {
        label: i18n.t('profile'),
        screen: 'profile', // this is a registered name for a screen
        icon: require('../assets/profile.png'),
        navigatorStyle,
      },
      {
        label: 'Messages',
        screen: 'messages', // this is a registered name for a screen
        icon: require('../assets/messages.png'),
        navigatorStyle,
      },
      {
        label: 'Git',
        screen: 'git', // this is a registered name for a screen
        icon: require('../assets/git.png'),
        navigatorStyle,
      },
      {
        label: i18n.t('network'),
        screen: 'network', // this is a registered name for a screen
        icon: require('../assets/network.png'),
        navigatorStyle,
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