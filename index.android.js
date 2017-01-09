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
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import GroupList from './src/scenes/group-list.js';
import EventList from './src/scenes/event-list.js';
import GroupDetails from './src/scenes/group-details.js';



const TabIcon = (props) => (
  <Text
    style={{ color: props.selected ? 'red' : 'black' }}
  >
    {props.title}
  </Text>
);


export default class join extends Component {
  render() {
    console.log(Navigator.NavigationBar.Styles.General.NavBarHeight);
    return (
      <Router
      >
        <Scene key="root"
        >
          <Scene key="main" tabs={true}
          >
            <Scene key="groups" 
               icon={TabIcon}
               title="Groups"
             >
              <Scene key="groupList" component={GroupList} title="Group List" initial />
              <Scene key="groupDetails" component={GroupDetails} title="Group Details" />
            </Scene>
            <Scene
              key="events"
              icon={TabIcon}
              title="Events"
            >
              <Scene key="eventList" component={EventList} title="Event List" />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('join', () => join);
