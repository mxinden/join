/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';


import GroupList from './src/scenes/group-list.js';


export default class join extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) => GroupList() }
        style={{ flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('join', () => join);
