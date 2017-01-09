import React from 'react';
import {
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Scene, Router } from 'react-native-router-flux';
import GroupList from './scenes/group-list-container.js';
import EventList from './scenes/event-list.js';
import GroupDetails from './scenes/group-details-container.js';

import joinApp from './reducers';
import AddGroupButton from './components/add-group-button.js';


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
            renderRightButton={() => <AddGroupButton />}
          />
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

const store = createStore(joinApp);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
