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
import Footer from './src/components/footer.js';
import TitleBar from './src/components/title-bar.js';
import { List, ListItem, Container, Content } from 'native-base';
import joinTheme from './Themes/join-theme.js';

import routes from './src/lib/routes.js';

const renderScene = (route, navigator) => {
  console.log('render scene');
  const selectedRoute = routes.find((iteratedRoute) => iteratedRoute.name === route.name)
  return (
    <Container theme={joinTheme} >
      {TitleBar({ navigator, route: selectedRoute })}
      <Content>
        <selectedRoute.component route={selectedRoute} navigator={navigator} />
      </Content>
      {Footer({ navigator, route: selectedRoute })}
    </Container>
  );
};

export default class join extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'groupList', index: 0 }}
        renderScene={renderScene}
        style={{ flex: 1}}
        />
    );
  }
}

AppRegistry.registerComponent('join', () => join);
