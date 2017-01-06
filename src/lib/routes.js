import GroupList from '../scenes/group-list.js';
import EventList from '../scenes/event-list.js';

const routes = [
  { name: 'group-list', title: 'Groups', component: GroupList, topLevel: true },
  { name: 'event-list', title: 'Events', component: EventList, topLevel: true },
];

routes.getTopLevel = () => routes.filter(route => route.topLevel);

export default routes;
