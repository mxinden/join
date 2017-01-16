const groups = {};

const sampleGroups = [
  { id: '1808934', name: 'Pre group', creatorId: '890103948718' },
  { id: '0183208', name: 'First awesome group', creatorId: '990103948718' },
  { id: '1032405', name: 'Second awesome group', creatorId: '190103948718' },
];

groups.get = () => sampleGroups;

groups.getById = id => sampleGroups.find(group => group.id === id);

export default groups;
