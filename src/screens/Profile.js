import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import theme from '../utils/theme'

const GET_PROFILE = gql`
  query Query($userId: String!) {
    profile(id: $userId) {
      name
    }
  }
`

const PUBLISH_ABOUT = gql`
  mutation Mutation($userId: String!, $newName: String!) {
    aboutMessage(input: { id: $userId, name: $newName }) {
      name
    }
  }
`
export default class Profile extends Component {
  state = {
    text: 'Your name',
  }

  render() {
    const { text } = this.state
    const { whoami } = this.props
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Query query={GET_PROFILE} variables={{ userId: whoami }}>
            {({ loading, error, data }) => {
              if (error) return <Text style={styles.text}>Error</Text>
              if (!error) {
                return (
                  <View>
                    {(data && data.profile && data.profile.name) && <Text style={styles.main}>Welcome {data.profile.name}</Text>}
                    <Text style={styles.id}>Public key: {whoami}</Text>
                    <Mutation
                      mutation={PUBLISH_ABOUT}
                      update={(cache, { data: publishAbout }) => {
                        cache.writeQuery({
                          query: GET_PROFILE,
                          variables: { userId: whoami },
                          data: { profile: {name : publishAbout.aboutMessage.name, __typename: publishAbout.aboutMessage.__typename } }
                        });
                      }}
                    >
                      {(publishAbout, { loading, error }) => (
                        <View>
                          <TextInput
                            placeholderTextColor={theme.dark}
                            style={styles.input}
                            onChangeText={(text) => this.setState({ text })}
                            value={text}
                          />
                          <View style={styles.button}>
                            <Button
                              title="Change your name"
                              color={theme.color3}
                              onPress={() => {
                                publishAbout({ variables: { userId: whoami, newName: text } })
                                this.setState({
                                  name: ''
                                })
                              }}
                            />
                            {loading && <Text style={styles.text}>Loading...</Text>}
                            {error && <Text style={styles.text}>Error :( Try again</Text>}
                          </View>
                        </View>
                      )}
                    </Mutation>
                  </View>
                )
              }
            }}
          </Query>
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
    backgroundColor: theme.dark,
  },
  container: {
    maxWidth: '87%',
  },
  main: {
    fontSize: 22,
    color: theme.light,
    paddingBottom: 30
  },
  text: {
    color: theme.light,
    paddingBottom: 10
  },
  id: {
    color: 'grey',
    fontSize: 14,
    paddingBottom: 20,

  },
  input: {
    height: 50,
    backgroundColor: theme.light,
    borderWidth: 1,
  },
  button: {
    paddingTop: 12,
  }
})