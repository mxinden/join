const event = (state, action) => ({
  id: action.id,
  name: action.name,
  userId: action.userId,
  groupId: action.groupId,
  description: action.description,
  date: action.date,
});

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      return {
        ...state,
        all: state.all.concat([event(state, action)]),
      };
    default:
      return state;
  }
};

export { events };
