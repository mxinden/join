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
      ]
    default:
      return groupsService.get();
  }
}

export default groups
