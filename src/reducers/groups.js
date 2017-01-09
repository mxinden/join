import groupsService from '../services/groups.js';

const group = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const groups = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        group(undefined, action)
      ]
    default:
      return groupsService.get();
  }
}

export default groups
