const groups = {};

const sampleGroups = [
  { id: '1808934', name: 'Pre group' },
  { id: '0183208', name: 'First awesome group' },
  { id: '1032405', name: 'Second awesome group' },
];

groups.get = () => sampleGroups;

groups.getById = id => sampleGroups.find(group => group.id === id);

export default groups;
