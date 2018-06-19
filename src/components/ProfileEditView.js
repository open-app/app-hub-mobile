import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native'
import theme from '../utils/theme'

export default class ProfileEditView extends Component {
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
    const { userId } = this.props
    console.log(nameInput, descriptionInput)
    publishAbout({variables: {
      userId,
      newName: nameInput,
      newDescription: descriptionInput
    }})
  }
  render () {
    const { nameInput, descriptionInput } = this.state
    const { publishAbout, loadingPublishAbout, errorPublishAbout, imageBlob } = this.props
    return (
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
        {loadingPublishAbout && <Text style={styles.text}>Loading...</Text>}
        {errorPublishAbout && <Text style={styles.text}>Error :( Try again</Text>}
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