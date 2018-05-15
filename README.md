# Open App Application Hub

This is the mobile application serving as entrance to the Open App Ecosystem for communities.

## Usage

`git clone https://github.com/open-app/app-hub-mobile.git`

`npm i`

Open the `android` folder in Android Studio to download necessary dependencies.

`npm run build-nodejs-app`

`react-native run-android`

`npm run log` to log

## Deep linking URL schema
[Learn more](https://developer.android.com/training/app-links/deep-linking)

- `apphub://app/appID`


## Built with

* [nodejs-mobile-react-native](https://github.com/janeasystems/nodejs-mobile-react-native/)
* [open-app-graphql-server](https://github.com/open-app/open-app-graphql-server)
  * [scuttlebot](https://github.com/ssbc/scuttlebot)
  * [dat-node](https://github.com/datproject/dat-node)
  * [Apollo GraphQL](https://www.apollographql.com/)
* [react-native-navigation](https://github.com/wix/react-native-navigation)
* [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)

### Feature list

- [ ] Desktop and CLI versions
- [ ] Switch between multiple networks
- [ ] Edit Network Keys, Sign Keys
- [ ] Easy interface for .ssb/config
- [ ] Multiple users with emoji password
- [ ] View and update profile/about
- [ ] View gossiping/network
- [ ] View and manage space usage
- [ ] Explore apps with reddit like UI/UX
- [ ] Install apps/sbot plugins
- [ ] Explore app repos/git-ssb UI

### Inspirations

- https://github.com/soapdog/patchfox
- https://github.com/jeswin/ssb-helm
- https://www.npmjs.com/package/ssb-afterparty