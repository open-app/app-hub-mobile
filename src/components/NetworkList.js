import React, { Component } from 'react'
import {
  SectionList,
  Text,
  StyleSheet,
  View,
} from 'react-native'
import theme from '../utils/theme'
import Avatar from './Avatar'

export default class NetworkList extends Component {
  state = {
    peers: [
      { local: []},
      { pub: []},
      { stored: []},
    ],
  }

  addHost = (peer) => {
    console.log('Adding peer')
    this.setState({
      peers: [
        ...this.state.peers,
        peer
      ]
    })
  }

  removeHost = (key) => {
    console.log('Removing peer')
    const filtered = this.state.peers.filter(i => i.key !== key)
    this.setState({
      peers: filtered
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(this.props.data) {
      const { data: { gossip: { type, peer } } } = this.props
      const peerExists = (this.state.peers.filter(i => i.key === peer.key).length > 0)
      if (!peerExists && (type === 'connect')) this.addHost(peer)
      if (peerExists && type === 'remove') this.removeHost(peer.key)
    }
  }

  render () {
    const { peers } = this.state
    const { loading, error, data } = this.props
    // console.log('Gossip', data)
    return (
      <View style={styles.wrapper}>
        {(loading || error) && <Text>No peers</Text>}
        {data && <SectionList
          renderItem={({item, index, section}) => <Avatar key={index} userId={item.key} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          sections={[
            {title: 'Local', data: peers.filter(i => i.source === 'local')},
            {title: 'Pubs', data: peers.filter(i => i.source === 'pub')},
            {title: 'Stored', data: peers.filter(i => i.source === 'stored')},
          ]}
          // keyExtractor={(item, index) => item + index}
        />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 30,
  },
  text: {
    fontSize: 22,
    color: theme.dark,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  text: {
    color: theme.dark,
    textAlign: 'center',

  },
})