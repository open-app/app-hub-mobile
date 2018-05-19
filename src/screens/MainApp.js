import { Navigation } from 'react-native-navigation'
import i18n from '../locales'
import theme from '../utils/theme'

function navigatorStyle (props) {
  return {
    navBarBackgroundColor: theme.color1,
    navBarCustomView: 'applicationsNavbar',
    navBarCustomViewInitialProps: props,
    topBarCollapseOnScroll: true,
    // navBarTextFontSize: 8,
  }
}

export default (props) => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: i18n.t('applications'),
        screen: 'applications', // this is a registered name for a screen
        icon: require('../assets/applications.png'),
        navigatorStyle: navigatorStyle(props),
        navigatorButtons: {
          leftButtons: [
            {
              id: "sideMenu"
            }
          ]
        },        
        topTabs: [
          {
            screenId: 'applications',
            title: 'Popular',
            passProps: props,
          },
          {
            screenId: 'profile',
            title: 'Hot',
            passProps: props,
          },
          {
            screenId: 'network',
            title: 'New',
            passProps: props,
          }
        ]
      },
      {
        label: i18n.t('profile'),
        screen: 'profile', // this is a registered name for a screen
        icon: require('../assets/profile.png'),
        navigatorStyle: navigatorStyle(props),
        topTabs: [
          {
            screenId: 'profile',
            title: 'Bio',
            passProps: props,
          },
          {
            screenId: 'profile',
            title: 'Gallery',
            passProps: props,
          },
          {
            screenId: 'network',
            title: 'Repos',
            passProps: props,
          },
          {
            screenId: 'network',
            title: 'Network',
            passProps: props,
          }
        ]
      },
      {
        label: 'Messages',
        screen: 'messages', // this is a registered name for a screen
        icon: require('../assets/messages.png'),
        navigatorStyle: navigatorStyle(props),
      },
      {
        label: 'Git',
        screen: 'git', // this is a registered name for a screen
        icon: require('../assets/git.png'),
        navigatorStyle: navigatorStyle(props),
        topTabs: [
          {
            screenId: 'network',
            title: 'Activity',
            passProps: props,
          },
          {
            screenId: 'profile',
            title: 'Issues',
            passProps: props,
          },
          {
            screenId: 'network',
            title: 'Pull Requests',
            passProps: props,
          },
          {
            screenId: 'network',
            title: 'Contributions',
            passProps: props,
          }
        ]
      },
      {
        label: i18n.t('network'),
        screen: 'network', // this is a registered name for a screen
        icon: require('../assets/network.png'),
        navigatorStyle: navigatorStyle(props),
        topTabs: [
          {
            screenId: 'network',
            title: 'Secure Scuttlebutt',
            passProps: props,
          },
          {
            screenId: 'profile',
            title: 'DAT',
            passProps: props,
          },
        ]
      },
    ],
    passProps: props,
    // animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
    animationType: 'fade',
    tabsStyle: {
      tabBarBackgroundColor: theme.light,
    },
    drawer: {
      left: {
        screen: 'drawer'
      }
    },
    appStyle: {
      tabBarButtonColor: theme.dark,
      tabBarSelectedButtonColor: theme.color1,
      initialTabIndex: 0,
    },
  })
}