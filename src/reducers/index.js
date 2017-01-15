import { combineReducers } from 'redux';
import { groups } from './groups';
import { users } from './users.js';
import { events } from './events.js';

const joinApp = combineReducers({
  groups,
  users,
  events,
});

export default joinApp;
