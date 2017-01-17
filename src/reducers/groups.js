const createGroup = (newGroup, action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...newGroup,
        id: action.id,
        name: action.name,
        creatorId: action.creatorId,
        memberIds: [action.creatorId],
      };
    default:
      return state
  }
};

const joinGroup = (groups, action) => {
  const group = groups.find(iteratedGroup => iteratedGroup.id === action.groupId);
  group.memberIds.push(action.userId);
  return groups.filter(iteratedGroup => iteratedGroup.id !== action.groupId).concat([group]);
};

const groups = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...state,
        all: state.all.concat([createGroup(state.newGroup, action)]),
      };
    case 'JOIN_GROUP':
      return {
        ...state,
        all: joinGroup(state.all, action),
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
