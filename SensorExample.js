import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNSensors from 'react-native-sensors';
const { Accelerometer, Gyroscope } = RNSensors;
const accelerationObservable = new Gyroscope({
  updateInterval: 100, // defaults to 100ms
});

export default class SensorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceleration: {
        x: 'unknown',
        y: 'unknown',
        z: 'unknown',
      },
    };
  }
  componentWillMount() {
    accelerationObservable
      .subscribe(acceleration => this.setState({
        acceleration,
      }));
  }
  render() {
    const {
      acceleration,
    } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Acceleration
        </Text>
        <Text style={styles.instructions}>
          {acceleration.x + '/' + acceleration.y + '/' + acceleration.z}
        </Text>
      </View>
    );
  }

  componentWillUnmount() {
    accelerationObservable.stop();
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
