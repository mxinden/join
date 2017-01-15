import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import GroupList from './../scenes/group/group-list-container.js';
import EventScene from './../scenes/event/event-scene-container.js';
import CreateEvent from './../scenes/event/create-event-container.js';
import GroupDetails from './../scenes/group/group-details-container.js';
import Profile from './../scenes/profile-container.js';
import CreateGroup from './../scenes/group/create-group-container.js';

const TabIcon = props => (
  <Text
    style={{ color: props.selected ? 'red' : 'black' }}
  >
    {props.title}
  </Text>
);

TabIcon.propTypes = {
  selected: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
};

const RouterComponent = props => (
  <Router>
    <Scene key="root">
      <Scene key="main" tabs>
        <Scene
          key="groups"
          icon={TabIcon}
          title="Groups"
        >
          <Scene
            key="groupList"
            component={GroupList}
            title="Group List"
            initial
            getRightTitle={() => 'Create'}
            onRight={() => Actions.createGroup()}
          />
          <Scene key="groupDetails" component={GroupDetails} title="Group Details" />
          <Scene
            key="createGroup"
            component={CreateGroup}
            title="Create Group"
            getRightTitle={() => 'Save'}
            onRight={() => {
              props.handleSaveGroup();
              Actions.groupList({ type: 'back' });
            }}
          />
        </Scene>
        <Scene
          key="events"
          icon={TabIcon}
          title="Events"
        >
          <Scene key="eventList" component={EventScene} title="Event List" />
          <Scene key="createEvent" component={CreateEvent} title="Create Event" />
        </Scene>
        <Scene
          key="profileTab"
          icon={TabIcon}
          title="Profile"
        >
          <Scene key="profile" component={Profile} title="Profile" />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);

RouterComponent.propTypes = {
  handleSaveGroup: PropTypes.func.isRequired,
};

export default RouterComponent;
