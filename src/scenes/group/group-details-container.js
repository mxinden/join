import { connect } from 'react-redux';
import GroupDetails from './group-details.js';

const mapStateToProps = (state) => {
  const group = state.groups.all.find(iterGroup => iterGroup.id === state.groups.selectedGroup);
  group.events = state.events.all.filter(event => event.groupId === state.groups.selectedGroup);
  const owner = state.users.all.find(user => user.id === group.userId);
  return { group, owner };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
