let nextId = 0;

export const createGroup = ({ creatorId, name }) => ({
  type: 'CREATE_GROUP',
  id: (nextId++).toString(),
  name,
  creatorId,
});

export const selectGroup = groupId => ({
  type: 'SELECT_GROUP',
  groupId,
});

export const createEvent = ({ name, userId, groupId, date, description }) => ({
  type: 'CREATE_EVENT',
  id: (nextId++).toString(),
  name,
  userId,
  groupId,
  date,
  description,
});
