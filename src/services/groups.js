const groups = {};

const sampleGroups = [
  { id: '0', name: 'First awesome group' },
  { id: '1', name: 'Second awesome group' },
];

groups.get = () => sampleGroups;

groups.getById = id => sampleGroups.find(group => group.id === id);

export default groups;
