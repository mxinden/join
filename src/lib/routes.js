import GroupList from '../scenes/group-list.js';
import EventList from '../scenes/event-list.js';
import GroupDetails from '../scenes/group-details.js';

const routes = [
  { name: 'groupList', title: 'Groups', component: GroupList, topLevel: true },
  { name: 'eventList', title: 'Events', component: EventList, topLevel: true },
  { name: 'groupDetails', title: 'Group Details', component: GroupDetails, topLevel: false },
];

routes.getTopLevel = () => routes.filter(route => route.topLevel);

export default routes;
