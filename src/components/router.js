import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Icon } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';
import GroupList from './../scenes/group/group-list-container.js';
import EventScene from './../scenes/event/event-scene-container.js';
import CreateEvent from './../scenes/event/create-event-container.js';
import GroupDetails from './../scenes/group/group-details-container.js';
import Profile from './../scenes/profile-container.js';
import CreateGroup from './../scenes/group/create-group-container.js';
import EventDetails from './../scenes/event/event-details-container.js';

const TabIcon = props => (
  <Icon
    style={{ color: props.selected ? 'black' : 'grey' }}
    name={props.iconName}
  />
);

TabIcon.propTypes = {
  selected: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
};

const RouterComponent = props => (
  <Router
      navigationBarStyle={{
        backgroundColor: 'yellowgreen',
      }}
  >
    <Scene
      key="root"
    >
      <Scene key="main" tabs>
        <Scene
          key="groups"
          icon={TabIcon}
          iconName="ios-contacts-outline"
          title="Groups"
        >
          <Scene
            key="groupList"
            component={GroupList}
            title="Group List"
            initial
          />
        </Scene>
        <Scene
          key="events"
          icon={TabIcon}
          title="Events"
          iconName="ios-calendar-outline"
        >
          <Scene key="eventList" component={EventScene} title="Event List" />
        </Scene>
        <Scene
          key="profileTab"
          icon={TabIcon}
          title="Profile"
          iconName="ios-contact-outline"
        >
          <Scene key="profile" component={Profile} title="Profile" />
        </Scene>
      </Scene>
      <Scene key="groupDetails" component={GroupDetails} title="Group Details" />
      <Scene
        key="createGroup"
        component={CreateGroup}
        title="Create Group"
      />
      <Scene key="eventDetails" component={EventDetails} title="Event Details" />
      <Scene key="createEvent" component={CreateEvent} title="Create Event" />
    </Scene>
  </Router>
);

RouterComponent.propTypes = {
  handleSaveGroup: PropTypes.func.isRequired,
};

export default RouterComponent;
