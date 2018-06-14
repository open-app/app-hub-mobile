import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'
import theme from '../utils/theme'

export default ({ imageBlob, name, description, self, navigator, handlePress, refetch }) => (
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.topInfo}>  
          {imageBlob && <Image
            style={{ width: 75, height: 75, resizeMode: Image.resizeMode.contain }}
            source={{uri: `data:image/png;base64,${JSON.parse(imageBlob)}`}}
          />}
          {!imageBlob && <View style={styles.CircleShapeView} />}
          <View style={styles.title}>
            {name && <Text style={styles.name}>{name}</Text>}
            {/* <Text style={styles.id}>Public key: {whoami}</Text> */}
          </View>
        </View>
        <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Description</Text>
            {description && <Text>{description}</Text>}
        </View>
        {(self && navigator.push) && <Button
          style={styles.button}
          title="Edit"
          color={theme.color1}
          onPress={handlePress}
        />}
      </View>
    </View>
  </View>
)

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