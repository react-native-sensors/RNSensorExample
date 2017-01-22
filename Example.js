import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import SensorExample from './SensorExample';
import SensorAwareViewExample from './SensorAwareViewExample';

export default class Example extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        renderTabBar={() => <DefaultTabBar />}
      >
        <SensorExample tabLabel="Sensors" />
        <SensorAwareViewExample tabLabel="SensorAwareView" />
      </ScrollableTabView>
    );
  }
}
