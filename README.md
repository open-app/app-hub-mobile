# P2P Boilerplate

An as easy as possible to use boilerplate for creating peer-to-peer applications using [Secure Scuttlebot](https://scuttlebot.io/) and [Dat](https://datproject.org) protocols behind a [GraphQL](http://graphql.org/) layer.

Based on [MMMMM](https://github.com/staltz/mmmmm-mobile), [dat-installer](https://github.com/staltz/dat-installer) and [ssb-graphql](https://github.com/stanleyjones/ssb-graphql)


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

Installs and builds the application, will also run `react-native run-android` to start emulation and logging.

## Todo


- Scuttlebot Server :white_check_mark:
- Scuttlebot Client :white_check_mark:
- GraphQL SSB :white_check_mark:
- Pull/Push Scuttlebot data :white_check_mark:
- GraphQL Dat :x:
- Set Dat storage path :x:
- Pull/Push Dat data :x:
