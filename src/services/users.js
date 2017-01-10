const sampleUsers = [
  { id: '890103948718', name: 'Max Inden' },
  { id: '990103948718', name: 'Tim' },
  { id: '190103948718', name: 'Simon' },
];

const service = {};

service.get = () => sampleUsers;

service.getCurrentUser = () => sampleUsers[0];

export default service;
