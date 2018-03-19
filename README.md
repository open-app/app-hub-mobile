# P2P Boilerplate

An as easy as possible to use boilerplate for creating peer-to-peer [React Native](https://facebook.github.io/react-native/) applications using [Secure Scuttlebot](https://scuttlebot.io/) and [Dat](https://datproject.org) protocols behind a [GraphQL](http://graphql.org/) layer.

Based on [MMMMM](https://github.com/staltz/mmmmm-mobile), [dat-installer](https://github.com/staltz/dat-installer) and [ssb-graphql](https://github.com/stanleyjones/ssb-graphql).

- Scuttlebot Server :white_check_mark:
- Scuttlebot Client :white_check_mark:
- GraphQL SSB :white_check_mark:
- Pull/Push Scuttlebot data :white_check_mark:
- GraphQL Dat :x:
- Set Dat storage path :x:
- Pull/Push Dat data :x:

## Install dependencies

Use node `v8.9.x` and npm `v5.6.x`.

**Mac OS note**: You might need `realpath`, install it through coreutils:

```
brew update
brew install coreutils
```


## Usage

Doesn't work well on emulators, so make sure you have [react-native](https://facebook.github.io/react-native/) setup and your device ready.

Clone and install:

```
git clone https://github.com/luandro/p2pboilerplate.git
cd p2pboilerplate
npm i
```

We also need to run `npm run prepare` in order to patch the necessary packages. We should fork these instead of using the hack.

Now run `npm run build` which takes care of building back-end and front-end, will also run `react-native run-android` to start emulation and logging.

In case you want to play with the back-end, run `npm run node` which will concurrently run Babel watch and nodemon for the application. You can check the GraphQL playground at [http://localhost:4000/playground](http://localhost:4000/playground).

## Troubleshooting

1. Check Android files for duplicate declarations:
- `android/settings.gradle`
- `android/app/build.gradle`
- `android/app/src/main/java/com/p2pboilerplate/MainApplication.java`

2. Use `adb logcat *:S nodejs:V ReactNative:V ReactNati
veJS:V` to log NodeJS applications.

3. Use `adb reverse tcp:8081 tcp:8081` to reconnect to the server