let nextId = 0;
export const createGroup = () => ({
  type: 'CREATE_GROUP',
  id: nextId++,
});
