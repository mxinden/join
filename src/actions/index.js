let nextId = 0;

export const createGroup = (userId) => ({
  type: 'CREATE_GROUP',
  id: (nextId++).toString(),
});

export const saveNewGroup = (userId, name) => ({
  type: 'SAVE_NEW_GROUP', 
  name,
  userId,
});

export const selectGroup = groupId => ({
  type: 'SELECT_GROUP',
  groupId,
});

export const createEvent = name => ({
  type: 'CREATE_EVENT',
  id: (nextId++).toString(),
  name,
});
