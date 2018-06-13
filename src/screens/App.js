import { Navigation } from 'react-native-navigation'
import i18n from '../locales'
import theme from '../utils/theme'

function navigatorStyle (props) {
  return {
    navBarBackgroundColor: theme.color1,
    navBarCustomView: 'mainNavbar',
    navBarCustomViewInitialProps: props,
    topBarCollapseOnScroll: true,
    navBarButtonColor: theme.dark
  }
}

export default () => Navigation.startTabBasedApp({
  tabs: [
    {
      label: i18n.t('applications'),
      screen: 'applications',
      icon: require('../assets/applications.png'),
      navigatorStyle: navigatorStyle({}),
      navigatorButtons: {
        leftButtons: [
          {
            id: "sideMenu"
          }
        ]
      },
    },
    {
      label: i18n.t('profile'),
      screen: 'profile',
      icon: require('../assets/profile.png'),
      navigatorStyle: navigatorStyle({}),
      navigatorButtons: {
        leftButtons: [
          {
            id: "sideMenu"
          }
        ]
      },      
      // topTabs: [
      //   {
      //     screenId: 'profile',
      //     title: 'Bio',
      //     passProps: props,
      //   },
      //   {
      //     screenId: 'profile',
      //     title: 'Gallery',
      //     passProps: props,
      //   },
      //   {
      //     screenId: 'network',
      //     title: 'Repos',
      //     passProps: props,
      //   },
      //   {
      //     screenId: 'network',
      //     title: 'Network',
      //     passProps: props,
      //   }
      // ]
    },
    // {
    //   label: i18n.t('network'),
    //   screen: 'networkSsb',
    //   icon: require('../assets/network.png'),
    //   navigatorStyle: navigatorStyle({}),
    //   navigatorButtons: {
    //     leftButtons: [
    //       {
    //         id: "sideMenu"
    //       }
    //     ]
    //   },
    //   topTabs: [
    //     {
    //       screenId: 'networkSsb',
    //       title: 'Secure Scuttlebutt',
    //       passProps: {},
    //     },
    //     {
    //       screenId: 'networkDat',
    //       title: 'DAT',
    //       passProps: {},
    //     },
    //   ]
    // },
  ],
  // passProps: whoami,
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
