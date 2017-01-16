const service = {};

const sampleEvents = [
  {
    id: '11948023',
    name: 'Really cool event',
    groupId: '1808934',
    date: new Date(),
    details: 'The details of the really cool event. Make sure you bring a football',
  },
  {
    id: '22948023',
    name: 'Second really cool event',
    groupId: '1808934',
    date: new Date(),
    details: 'The details of the second really cool event. Make sure you are ready to run a lot.',
  },
  {
    id: '34948023',
    name: 'Third really cool event',
    groupId: '0183208',
    date: new Date(),
    details: 'The details of the third really cool event. This is going to be a lot of fun!',
  },
];

service.get = () => sampleEvents;

export default service;
