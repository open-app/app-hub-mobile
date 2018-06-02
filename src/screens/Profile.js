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
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import theme from '../utils/theme'

const GET_PROFILE = gql`
  query Query($userId: String!) {
    profile(id: $userId) {
      name
      description
      imageBlob
    }
  }
`

export default class Profile extends Component {
  handlePress = (profile, whoami) => this.props.navigator.push({
    screen: 'profileEdit',
    title: 'Go back',
    passProps: {...profile, whoami},
    animated: true,
    animationType: 'slide-horizontal',
    backButtonTitle: 'go back',
    navigatorStyle: { navBarBackgroundColor: theme.color1, navBarTextColor: theme.light, navBarButtonColor: theme.light }
  })

  render() {
    const { whoami, navigator } = this.props
    let userId = this.props.userId
    if (!userId) userId = whoami
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Query query={GET_PROFILE} variables={{ userId }}>
            {({ loading, error, data }) => {
              if (error) return <Text style={styles.text}>Error</Text>
              if (data && data.profile) {
                const { imageBlob, name, description } = data.profile
                return (
                  <View style={styles.infoContainer}>
                    <View style={styles.topInfo}>  
                      {imageBlob && <Image
                        style={{ width: 75, height: 75, resizeMode: Image.resizeMode.contain }}
                        source={{uri: `data:image/png;base64,${JSON.parse(imageBlob)}`}}
                      />}
                      {!imageBlob && <View style={styles.CircleShapeView} />}
                      <View style={styles.title}>
                        {name && <Text style={styles.name}>{name}</Text>}
                        <Text style={styles.id}>Public key: {whoami}</Text>
                      </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>Description</Text>
                        {description && <Text>{data.profile.description}</Text>}
                    </View>
                    {(userId === whoami && navigator.push) && <Button
                      style={styles.button}
                      title="Edit"
                      color={theme.color1}
                      onPress={() => this.handlePress(data.profile, whoami)}
                    />}
                  </View>
                )
              } else {
                return <ActivityIndicator />
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
    backgroundColor: theme.light,
    paddingTop: 50,
  },
  container: {

  },
  infoContainer: {
    flex: 1,
    maxWidth: '95%',
    height: '100%',
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  topInfo: {
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // alignSelf: 'flex-start'
  },
  title: {
    width: '75%',
    flexDirection: 'column',
    paddingLeft: 15,
  },
  name: {
    fontSize: 16,
    color: theme.dark,
    // paddingBottom: 5
  },
  text: {
    color: theme.dark,
    paddingBottom: 10
  },
  description: {
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 15,
    height: '60%',
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.dark,
    paddingBottom: 10,
  },
  id: {
    color: 'grey',
    fontSize: 8,
    paddingBottom: 20,

  },
  CircleShapeView: {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    backgroundColor: theme.color3,
  },
  button: {
    width: '100%',
    padding: 30,
    alignSelf: 'flex-end',
  }
})