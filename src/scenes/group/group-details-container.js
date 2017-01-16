import { connect } from 'react-redux';
import GroupDetails from './group-details.js';

const mapStateToProps = (state) => {
  const group = state.groups.all.find(iterGroup => iterGroup.id === state.groups.selectedGroup);
  const events = state.events.all.filter(event => event.groupId === state.groups.selectedGroup);
  const creator = state.users.all.find(user => user.id === group.creatorId);
  return { group, creator, events };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
