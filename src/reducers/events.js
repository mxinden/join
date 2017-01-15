const events = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'CREATE_EVENT':
      return [
        ...state,
        { id: action.id, name: action.name },
      ];
    default:
      return state;
  }
};

export { events };
