let nextId = 0;

export const createGroup = (userId) => ({
  type: 'CREATE_GROUP',
  id: (nextId++).toString(),
  userId,
});

export const selectGroup = groupId => ({
  type: 'SELECT_GROUP',
  groupId,
});
