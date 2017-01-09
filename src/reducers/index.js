import { combineReducers } from 'redux';
import groups from './groups';

const joinApp = combineReducers({
  groups,
});

export default joinApp;
