import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import AboutQuery from '../components/AboutQuery'
import Blob from '../components/Blob'
import theme from '../utils/theme'

export default class Avatar extends Component {
  render () {
    const { userId } = this.props
    return (
      <AboutQuery userId={userId}>
        {({ about, loadingAbout, errorAbout }) => {
          const { name, image } = about
          return (
            <View style={styles.wrapper}>
              {!image && <View style={styles.CircleShapeView} />}
              {!name && <Text style={styles.id}>{userId}</Text>}
              {(about && image) && <Blob hash={image} />}
              {(about && name) && <Text style={styles.text}>{name}</Text>}
            </View>
          )
        }}
      </AboutQuery>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.light,
    height: 75,
  },
  text: {
    fontSize: 14,
    color: theme.dark,  
    width: '50%',
    paddingLeft: 15,
  },
  id: {
    fontSize: 10,
    color: 'gray',  
    width: '50%',
    paddingLeft: 15,
  },
  image: {
    borderWidth: 1,
    // borderRadius: 75/2,
    width: 35,
    height: 35,
    resizeMode: Image.resizeMode.contain,
  },
  CircleShapeView: {
    width: 35,
    height: 35,
    borderRadius: 35/2,
    backgroundColor: theme.color1,
  },
})