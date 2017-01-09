import groupsService from '../services/groups.js';

const group = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        id: action.id,
        name: 'New Group',
      }
    default:
      return state
  }
}

const groups = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      return [
        ...state,
        group(undefined, action)
      ];
    default:
      return state;
  }
};

const selectedGroup = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_GROUP':
      return action.groupId;
    default:
      return state;
  }
};

export { groups, selectedGroup };
