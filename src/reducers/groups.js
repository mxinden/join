const group = (newGroup, action) => {
  console.log(newGroup);
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...newGroup,
        id: action.id,
      };
    default:
      return state
  }
}

const groups = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...state,
        all: state.all.concat([group(state.newGroup, action)]),
        newGroup: undefined,
      };
    case 'SAVE_NEW_GROUP':
      return {
        ...state,
        newGroup: {
          ...state.newGroup,
          name: action.name,
          userId: action.userId,
        },
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
