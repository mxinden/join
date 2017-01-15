import React from 'react';
import {
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Scene, Router, Actions } from 'react-native-router-flux';
import GroupList from './scenes/group/group-list-container.js';
import EventScene from './scenes/event/event-scene-container.js';
import GroupDetails from './scenes/group/group-details-container.js';
import groupService from './services/groups.js';
import usersService from './services/users.js';
import eventsService from './services/events.js';
import Profile from './scenes/profile-container.js';
import CreateGroup from './scenes/group/create-group-container.js';

import joinApp from './reducers';

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

const App = () => (
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
          <Scene key="createGroup" component={CreateGroup} title="Create Group" />
        </Scene>
        <Scene
          key="events"
          icon={TabIcon}
          title="Events"
        >
          <Scene key="eventList" component={EventScene} title="Event List" />
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

const store = createStore(joinApp, {
  groups: groupService.get(),
  users: {
    current: usersService.getCurrentUser(),
    all: usersService.get(),
  },
  events: eventsService.get(),
}, applyMiddleware(thunk));

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
