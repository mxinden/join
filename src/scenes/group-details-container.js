import { connect } from 'react-redux';
import GroupDetails from './group-details.js';

const mapStateToProps = (state) => {
  const group = state.groups.find(iterGroup => iterGroup.id === state.selectedGroup);
  group.events = state.events.filter(event => event.groupId === state.selectedGroup);
  console.log(group);
  return { group };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
