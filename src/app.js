import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import groupService from './services/groups.js';
import usersService from './services/users.js';
import eventsService from './services/events.js';
import Router from './components/router-container.js';

import joinApp from './reducers';

const store = createStore(joinApp, {
  groups: {
    all: groupService.get(),
  },
  users: {
    current: usersService.getCurrentUser(),
    all: usersService.get(),
  },
  events: eventsService.get(),
}, applyMiddleware(thunk));


export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
