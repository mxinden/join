let nextId = 0;

export const createGroup = () => ({
  type: 'CREATE_GROUP',
  id: (nextId++).toString(),
});

export const selectGroup = groupId => ({
  type: 'SELECT_GROUP',
  groupId,
});
