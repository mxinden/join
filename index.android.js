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
} from 'react-native';

import { Container, Content } from 'native-base';

import Footer from './src/components/footer.js';
import TitleBar from './src/components/title-bar.js';


export default class join extends Component {
  render() {
    return (
      <Container>
        {TitleBar()}
        <Content>
        </Content>
        <TitleBar />
        <ScrollView />
        {Footer()}
      </Container>
    );
  }
}

AppRegistry.registerComponent('join', () => join);
