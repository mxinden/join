const groups = {};

const sampleGroups = [
  { id: '1808934', name: 'Pre group', userId: '890103948718' },
  { id: '0183208', name: 'First awesome group', userId: '890103948718' },
  { id: '1032405', name: 'Second awesome group', userId: '890103948718' },
];

groups.get = () => sampleGroups;

groups.getById = id => sampleGroups.find(group => group.id === id);

export default groups;
