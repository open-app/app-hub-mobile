import { Navigation } from 'react-native-navigation'
import i18n from '../locales'
import theme from '../utils/theme'

const navigatorStyle = {
  navBarBackgroundColor: theme.color1,
  navBarCustomView: 'applicationsNavbar',
  topBarCollapseOnScroll: true,
  navBarTextFontSize: 8,
}

export default (props) => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: i18n.t('applications'),
        screen: 'applications', // this is a registered name for a screen
        icon: require('../assets/applications.png'),
        navigatorStyle,
        topTabs: [
          {
            screenId: 'network',
            title: 'Popular'
          },
          {
            screenId: 'profile',
            title: 'Hot'
          },
          {
            screenId: 'network',
            title: 'New'
          }
        ]
      },
      {
        label: i18n.t('profile'),
        screen: 'profile', // this is a registered name for a screen
        icon: require('../assets/profile.png'),
        navigatorStyle,
        topTabs: [
          {
            screenId: 'network',
            title: 'Bio'
          },
          {
            screenId: 'profile',
            title: 'Gallery'
          },
          {
            screenId: 'network',
            title: 'Repos'
          },
          {
            screenId: 'network',
            title: 'Network'
          }
        ]
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
        topTabs: [
          {
            screenId: 'network',
            title: 'Activity'
          },
          {
            screenId: 'profile',
            title: 'Issues'
          },
          {
            screenId: 'network',
            title: 'Pull Requests'
          },
          {
            screenId: 'network',
            title: 'Contributions'
          }
        ]
      },
      {
        label: i18n.t('network'),
        screen: 'network', // this is a registered name for a screen
        icon: require('../assets/network.png'),
        navigatorStyle,
        topTabs: [
          {
            screenId: 'network',
            title: 'Secure Scuttlebutt'
          },
          {
            screenId: 'profile',
            title: 'DAT'
          },
        ]
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
      initialTabIndex: 0,
    },
  })
}