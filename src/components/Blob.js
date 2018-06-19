import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import RNFS from 'react-native-fs'
import theme from '../utils/theme'
import BlobQuery from './BlobQuery'

class Blob extends Component {
  state = {
    uri: false
  }
  componentDidUpdate() {
    const { data } = this.props
    const { uri } = this.state
    if (data.blob && !uri) {
      RNFS.readFile(data.blob.path, 'base64')
        .then(blob => {
          const base64Icon = `data:image/png;base64,${blob}`
          this.setState({
            uri: base64Icon
          })
        })
        .catch(err => console.log('ERROR on opening blob', err))
    }
  }
  render() {
    const { uri } = this.state
    const { size = 35, color = theme.color3 } = this.props
    if (!uri) return <View style={{
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: size/2
    }} />
    if (uri) return <Image source={{ uri }} style={{
      width: size,
      height: size,
      resizeMode: Image.resizeMode.contain,
      borderRadius: size/2
    }} />
  }
}

export default ({ hash, size }) => (
  <BlobQuery hash={hash}>
    {({ loadingBlob, dataBlob, errorBlob }) => (
      <Blob data={dataBlob} loading={(loadingBlob || errorBlob)} size={size} />
    )}
  </BlobQuery>
)

const styles = StyleSheet.create({
  CircleShapeView: {
    width: 35,
    height: 35,
    borderRadius: 35/2,
    backgroundColor: theme.color1,
  },
})