import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import SensorExample from './SensorExample';
import DecoratorExample from './DecoratorExample';

export default class Example extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        renderTabBar={() => <DefaultTabBar />}
      >
        <SensorExample tabLabel="Sensors" />
        <DecoratorExample tabLabel="SensorAwareView" />
      </ScrollableTabView>
    );
  }
}
