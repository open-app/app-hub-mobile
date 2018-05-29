import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  NativeModules,
  Linking,
} from 'react-native'
import RNFS from 'react-native-fs'
import theme from '../utils/theme'
import getApkPath from '../utils/getApkPath'
import Download from './ApplicationDownload'
import Downloading from './ApplicationDownloading'
import Downloaded from './ApplicationDownloaded'

const PackageInfo = NativeModules.PackageInfo

export default class ApplicationItem extends Component {
  state = {
    startedDownload: false,
    finishedDownload: false,
    packageInfo: null,
    installed: false,
  }

  componentDidMount() {
    this.getPackageInfo()
  }

  componentDidUpdate() {
    // console.log('ReactNativeAPK', ReactNativeAPK)
    // ReactNativeAPK.getApps(apps => {
    //   console.log(apps)
    // })
    
    if (this.state.finishedDownload) {
      this.getPackageInfo()
    }
  }

  getPackageInfo = () => {
    const { datHash } = this.props
    const assetsPath = `${RNFS.DocumentDirectoryPath}/assets`
    getApkPath(datHash)
      .then(apkPath => {
        if (apkPath) {
          PackageInfo.getPackageInfo(apkPath, assetsPath)
            .then(info => {
              // console.log("User packages", InstalledApps.getNonSystemApps())
              Linking.canOpenURL(info.package).then(supported => {
                if (supported) {
                  this.setState({
                    installed: true,
                  })
                }
              })
              const iconFilePath = `${assetsPath}/${info.package}.png`
              RNFS.readFile(iconFilePath, 'base64')
                .then(blob => {
                  const base64Icon = `data:image/pngbase64,${blob}`
                  this.setState({
                    packageInfo: {
                      ...info,
                      icon: base64Icon
                    }
                  })
                })
            })
        }
      })
  }

  startDownload = () => {
    this.setState({
      startedDownload: true
    })
  }

  finishDownload = () => {
    console.log('FInihsed')
    this.setState({
      finishedDownload: true
    })
  }

  handleOpen = () => {
    Linking.openURL(this.props.packageInfo.package)
  }

  handleInstall = () => {
    const { datHash, handleInstall } = this.props
    handleInstall(datHash)
  }

  render() {
    // console.log(this.state.packageInfo)
    const { name, author, repository, description, datHash, dats } = this.props
    const hasDat = () => (dats.filter(dat => dat.name === datHash).length > 0)
    const { startedDownload, finishedDownload, installed, packageInfo } = this.state
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.actions}>
            {(!startedDownload && !hasDat()) && <Download handlePress={this.startDownload} />}
            {(startedDownload) && <Downloading datHash={datHash} finishDownload={this.finishDownload} />}
            {(finishedDownload || hasDat()) &&  <Downloaded
              handleInstall={this.handleInstall}
              handleOpen={this.handleOpen}
              installed={installed}
              {...packageInfo}
              />}
          </View>
          <View styles={styles.info}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>posted by {author}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 130,
    backgroundColor: theme.light,
    elevation: 10,
    borderBottomWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  container: {
    flex: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20%',
    marginRight: 15,
  },
  info: {
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.dark,
  },
  text: {
    fontSize: 12,
    maxWidth: '80%',
    color: theme.dark,
  }
})