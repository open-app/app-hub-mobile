import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  ActivityIndicator
} from 'react-native'
import graphFetch from './utils/graphFetch'
const uri = 'http://localhost:4000/graphql'
const whoamiQuery = `
  query Query {
    whoami
  }
`

// import Hello from './components/Hello'

export default class App extends Component {
  state = {
    whoami: null,
    text: 'Your name',
    name: null
  }
  componentDidMount() {
    this.getWhoami()
  }

  getWhoami = () => {
    graphFetch(uri, whoamiQuery)
      .then(res => {
        console.log('who data', res.data)
        this.setState({
          whoami: res.data.whoami
        })
        this.getProfile()
      })
      .catch(err => {
        console.log('ERRR', err)
        this.getWhoami()
      })
  }

  getProfile = () => {
    const profileQuery = `
      query Query {
        profile(id: "${this.state.whoami}") {
          name
        }
      }
    `
    graphFetch(uri, profileQuery)
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
          id: "${this.state.whoami}"
          name: "${this.state.text}"
        }) {
          name
        }
      }
    `
    graphFetch(uri, mutation)
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
            {this.state.name && <Text style={styles.main}>Welcome {this.state.name}</Text>}
            {this.state.whoami && 
              <View>
                {!this.state.name && <Text style={styles.text}>Public key: {this.state.whoami}</Text>}
                <TextInput
                  placeholderTextColor='#000'
                  style={styles.input}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <Button
                  style={styles.button}
                  title="Change your name"
                  color="#FF9F1C"
                  onPress={() => this.publishAbout()}
                />
              </View>
              }
            {!this.state.whoami && <ActivityIndicator size='large' color='#41EAD4' />}       
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
    height: 40,
    backgroundColor: '#FDFFFC',
    borderWidth: 1,
    paddingBottom: 30,
    zIndex: 1
  },
  button: {
    paddingTop: 30,
    color: '#FDFFFC'
  }
})