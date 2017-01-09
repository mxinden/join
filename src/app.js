import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';
import Footer from './components/footer.js';
import TitleBar from './components/title-bar.js';
import { List, ListItem, Container, Content } from 'native-base';
import joinTheme from './../Themes/join-theme.js';

import routes from './lib/routes.js';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import GroupList from './scenes/group-list.js';
import EventList from './scenes/event-list.js';
import GroupDetails from './scenes/group-details.js';



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
