import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MultiServer from 'multiserver';
const workerPlugin = require('multiserver-worker');
const pull = require('pull-stream');
import { Worker } from '@staltz/react-native-workers';

export default class App extends Component<{}> {
  state = { messages: [] }

  worker = null;

  componentDidMount() {
    // We need this because react-native-workers constructor
    // is non-standard and uses 3 arguments.
    // function OneArgWorker() {
    //   Worker.call(this, path, path, 8091);
    // }
    // OneArgWorker.prototype = Object.create(Worker.prototype);
    // OneArgWorker.prototype.constructor = OneArgWorker;
    // var ms = MultiServer([
    //   workerPlugin({ path: 'worker', ctor: OneArgWorker })
    // ]);
    
    // ms.client('worker:worker', (err, stream) => {
    //   if (err) console.log('Error', err)
    //   console.log(stream)
      // pull(
      //   pull.values(['alice', 'bob']),
      //   stream,
      //   pull.drain(x => {
      //     console.log(x); // ALICE
      //                     // BOB
      //   })
      // );
    // });
    // this.worker = new Worker('worker.thread', 'worker.thread', 8082);
    // this.worker.onmessage = this.handleMessage;
  }

  // componentWillUnmount() {
  //   this.worker.terminate();
  //   this.worker = null;
  // }

  handleMessage = message => {
    console.log(`APP: got message ${message}`);

    // this.setState(state => {
    //   return { messages: [...state.messages, message] };
    // });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Peer-to-Peer Boilerplate
        </Text>

        {/* <Button title="Send Message To Worker Thread" onPress={() => {
          console.log('posting hello!')
          this.worker.postMessage('Hello')
        }} /> */}

        {/* <View>
          <Text>Messages:</Text>
          {this.state.messages.map((message, i) => <Text key={i}>{message}</Text>)}
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});