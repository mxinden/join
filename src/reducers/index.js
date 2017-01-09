import { combineReducers } from 'redux';
import { groups, selectedGroup } from './groups';

const joinApp = combineReducers({
  groups,
  selectedGroup,
});

export default joinApp;
