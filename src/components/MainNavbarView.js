import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'
import theme from '../utils/theme'
import Pulse from 'react-native-pulse'

const Feed = ({ data }) => {
  const { rate, feeds, incompleteFeeds, progress, total } = data
  return (
    <View>
      <Text>Feeds: {feeds}</Text>
      <Progress.Bar progress={progress*100/total} width={200} />
      <Text>{progress}/{total}</Text>
    </View>
  )
}

export default ({ data, loading, error }) => {
    return (
      <View style={styles.wrapper}>
        {loading || error && <Text>Loading</Text>}
        <View style={styles.feedContainer}>
          {data && <Feed data={data.progress} />}
        </View>
        <View style={{
          width: 12,
          height: 12,
          borderRadius: 12/2,
          backgroundColor: data ? theme.color3 : theme.color2,
        }} />
        {/* <Pulse style={styles.pulse} color={theme.color2} numPulses={3} diameter={12} speed={50} duration={2000} /> */}
      </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  
  },
  feedContainer: {
    width: 200,
  },
  pulse: {
    position: 'absolute',
    right: 10
  }
})