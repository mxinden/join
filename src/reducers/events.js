const events = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'CREATE_EVENT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          userId: action.userId,
          groupId: action.groupId,
        },
      ];
    default:
      return state;
  }
};

export { events };
