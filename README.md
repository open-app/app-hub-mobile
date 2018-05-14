# Open App Application Hub



## Built with

- [nodejs-mobile-react-native](https://github.com/janeasystems/nodejs-mobile-react-native/)
- [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server)
- - [scuttlebot](https://github.com/ssbc/scuttlebot)
- - [dat-node](https://github.com/datproject/dat-node)
- [react-native-navigation](https://github.com/wix/react-native-navigation)
- [react-native-push-notification](https://github.com/zo0r/react-native-push-notification)
- [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)

## Troubleshooting

1. Check Android files for duplicate declarations:
- `android/settings.gradle`
- `android/app/build.gradle`
- `android/app/src/main/java/com/p2pboilerplate/MainApplication.java`

2. Use `adb logcat *:S nodejs:V ReactNative:V ReactNati
veJS:V` to log NodeJS applications.

3. Use `adb reverse tcp:8081 tcp:8081` to reconnect to the server