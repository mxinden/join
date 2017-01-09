import { combineReducers } from 'redux';
import { groups, selectedGroup } from './groups';
import { users } from './users.js';
import { events } from './events.js';

const joinApp = combineReducers({
  groups,
  selectedGroup,
  users,
  events,
});

export default joinApp;
