import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNSensors from 'react-native-sensors';

function SensorView(props) {
  const Component = RNSensors.decorator({
    ...props,
  })(SensorsDisplay);

  return (
    <Component />
  )
}

const SensorDisplay = ({
  value: {
    x = 0,
    y = 0,
    z = 0,
  } = {},
  name,
}) => {
  return (
      <Text style={styles.welcome}>{name}: {x} / {y} / {z}</Text>
  )
};

class SensorsDisplay extends Component {
  render() {
    const {
      Accelerometer,
      Gyroscope,
      Magnetometer,
    } = this.props;

    // console.debug(this.props);

    return (
      <View style={styles.container}>
        <SensorDisplay name="Accelerometer" value={Accelerometer} />
        <SensorDisplay name="Gyroscope" value={Gyroscope} />
        <SensorDisplay name="Magnetometer" value={Magnetometer} />
      </View>
    );
  }
}

export default class DecoratorExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SensorView Accelerometer Gyroscope Magnetometer />
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
