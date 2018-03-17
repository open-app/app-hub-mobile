# P2P Boilerplate

An as easy as possible to use boilerplate for creating peer-to-peer applications using [Secure Scuttlebot](https://scuttlebot.io/) and [Dat](https://datproject.org) protocols.

Based heavily on [mmmmm](https://github.com/staltz/mmmmm-mobile) and [dat-installer](https://github.com/staltz/dat-installer).


## Install dependencies

Use node `v8.9.x` and npm `v5.6.x`.

**Mac OS note**: You might need `realpath`, install it through coreutils:

```
brew update
brew install coreutils
```


## Usage

Doesn't work well on emulators, so make sure you have [react-native]() installed and your device ready.

Clone and install:
```
git clone https://github.com/luandro/p2pboilerplate.git
cd p2pboilerplate
npm i
npm run build
```

Install and build whole application, which will also run `react-native run-android`.

## Todo

- Scuttlebot Server :white_check_mark:
- Scuttlebot Client running on another thread :white_check_mark:
- Pull/Push Scuttlebot data :x:
- Dat Node :x:
- Pull/Push Dat data :x:
- Dat syncing on background :x:
- GraphQL layer :x:

## Important Dependencies

- React Native
- TypeScript
- Cycle.js with xstream
- Pull streams
- react-native-scuttlebot
  - Uses react-native-node under the hood
    - Which in turn uses NodeBase (node.js v7 compiled for android arm devices)
- react-native-workers (fork by staltz)
- react-native-ssb-client
- Patchcore (with depject)