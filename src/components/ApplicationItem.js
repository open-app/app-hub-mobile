import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import theme from '../utils/theme'
import Download from './ApplicationItemDownload'
import WithDat from './ApplicationItemWithDat'

export default class ApplicationItem extends Component {
  state = {
    startedDownload: false,
  }

  startDownload = () => {
    this.setState({
      startedDownload: true
    })
  }

  handleInstall = () => {
    const { datHash, handleInstall } = this.props
    handleInstall(datHash)
  }

  render() {
    const { name, author, repository, description, datHash } = this.props
    const { startedDownload, downloaded } = this.state
    return (
      <View style={styles.wrapper}>
        <Text>{name}</Text>
        <Text>{description}</Text>
        <Text>{author}</Text>
        {!startedDownload && <Download handlePress={this.startDownload} />}
        {startedDownload && <WithDat datHash={datHash} handleInstall={this.handleInstall} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    backgroundColor: theme.light,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,

  },

  text: {
    fontSize: 22,
    color: theme.dark,
  }
})