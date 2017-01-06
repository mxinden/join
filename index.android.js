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

import routes from './src/lib/routes.js';

const renderScene = (route, navigator) => {
  const selectedRoute = routes.find((iteratedRoute) => iteratedRoute.name === route.name)
  return selectedRoute.component({
    route: selectedRoute,
    navigator,
  });
};

export default class join extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'group-list', index: 0 }}
        renderScene={renderScene}
        style={{ flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('join', () => join);
