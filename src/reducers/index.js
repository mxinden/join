import { combineReducers } from 'redux';
import { groups, selectedGroup } from './groups';
import { users } from './users.js';

const joinApp = combineReducers({
  groups,
  selectedGroup,
  users,
});

export default joinApp;
