import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  ActivityIndicator,
  Image,
} from 'react-native'
// import { Navigation } from 'react-native-navigation'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import theme from '../utils/theme'

const PUBLISH_ABOUT = gql`
  mutation Mutation($userId: String!, $newName: String, $newDescription: String) {
    aboutMessage(input: { id: $userId, name: $newName, description: $newDescription }) {
      name
      description
    }
  }
`

export default class ProfileEdit extends Component {
  state = {
    nameInput: 'Your name',
    descriptionInput: 'A short description about yourself.'
  }
  componentDidMount() {
    const { name, description } = this.props
    if (name) this.setState({ nameInput: name })
    if (description) this.setState({ descriptionInput: description })
  }
  publish = (publishAbout) => {
    const { nameInput, descriptionInput } = this.state
    const { whoami } = this.props
    console.log(whoami, nameInput, descriptionInput)
    publishAbout({variables: {
      userId: whoami,
      newName: nameInput,
      newDescription: descriptionInput
    }})
  }
  render() {
    const { nameInput, descriptionInput } = this.state
    const { whoami, imageBlob } = this.props
    return(
      <Mutation
        mutation={PUBLISH_ABOUT}
        update={(cache, { data: publishAbout }) => {
          cache.writeQuery({
            query: GET_PROFILE,
            variables: { userId: whoami },
            data: { profile: {
              name : publishAbout.aboutMessage.name,
              description : publishAbout.aboutMessage.description,
              __typename: publishAbout.aboutMessage.__typename } }
          })
        }}
        >
        {(publishAbout, { loading, error }) => (
          <View style={styles.wrapper}>
             {imageBlob && <Image
                style={{ width: 75, height: 75, resizeMode: Image.resizeMode.contain }}
                source={{uri: `data:image/png;base64,${JSON.parse(imageBlob)}`}}
              />}
              {!imageBlob && <View style={styles.CircleShapeView} />}
            <TextInput
              placeholderTextColor={theme.dark}
              style={styles.input}
              onChangeText={(nameInput) => this.setState({ nameInput })}
              value={nameInput}
            />
            <TextInput
              placeholderTextColor={theme.dark}
              style={styles.longInput}
              onChangeText={(descriptionInput) => this.setState({ descriptionInput })}
              value={descriptionInput}
              // multiline = {true}
              numberOfLines={4}
              autoCorrect={true}
            />
            <View style={styles.button}>
              <Button
                title="Update profile"
                color={theme.color1}
                onPress={() => this.publish(publishAbout)}
              />
            </View>
            {loading && <Text style={styles.text}>Loading...</Text>}
            {error && <Text style={styles.text}>Error :( Try again</Text>}
          </View>
        )}
      </Mutation>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.light,
    paddingTop: 50,
  },
  input: {
    width: '70%',
    height: 50,
    backgroundColor: theme.light,
    borderWidth: 0,
  },
  longInput: {
    borderColor: theme.dark,
  },
  button: {
    paddingTop: 12,
  },
  CircleShapeView: {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    backgroundColor: theme.color3,
    marginBottom: 30,
  },
})