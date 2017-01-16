const group = (newGroup, action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...newGroup,
        id: action.id,
        name: action.name,
        creatorId: action.creatorId
      };
    default:
      return state
  }
}

const groups = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...state,
        all: state.all.concat([group(state.newGroup, action)]),
      };
    case 'SELECT_GROUP':
      return {
        ...state,
        selectedGroup: action.groupId,
      };
    default:
      return state;
  }
};

export { groups };
