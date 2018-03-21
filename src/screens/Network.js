import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import graphFetch from '../utils/graphFetch'

export default class Network extends Component {
  state = {
    text: 'Your name',
    name: null
  }
  componentDidMount() {
    this.getProfile()
  }

  getProfile = () => {
    const profileQuery = `
      query Query {
        profile(id: "${this.props.whoami}") {
          name
        }
      }
    `
    graphFetch(this.props.uri, profileQuery)
      .then(res => {
        console.log('PROFILE', res)
        const { data: { profile: { name } } } = res
        if (name) {
          this.setState({
            name
          })
        } else {
          
        }
      })
      .catch(err => console.log('error', err))
  }

  publishAbout = () => {
    const mutation = `
      mutation Mutation {
        aboutMessage(input: {
          id: "${this.props.whoami}"
          name: "${this.state.text}"
        }) {
          name
        }
      }
    `
    graphFetch(this.props.uri, mutation)
      .then(res => {
        console.log('mutation data', res)
        this.setState({
          text: 'Your name',
          name: this.state.text
        })
      })
      .catch(err => {
        console.log('ERRR', err)
      })
  }

  render() {
      return (
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Text>Network</Text>
          </View>   
        </View>
      )
    // }
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011627',
  },
  container: {
    maxWidth: '87%',
  },
  main: {
    fontSize: 22,
    color: '#F71735',
    paddingBottom: 30
  },
  text: {
    color: '#FDFFFC',
    paddingBottom: 30
  },
  input: {
    height: 50,
    backgroundColor: '#FDFFFC',
    borderWidth: 1,
  },
  button: {
    marginTop: 30,
    paddingTop: 30,
    color: '#FDFFFC'
  }
})