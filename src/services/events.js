const service = {};

const sampleEvents = [
  { id: '11948023', name: 'Really cool event', groupId: '1808934' },
  { id: '22948023', name: 'Second really cool event', groupId: '1808934' },
  { id: '34948023', name: 'Third really cool event', groupId: '0183208' },
];

service.get = () => sampleEvents;

export default service;
