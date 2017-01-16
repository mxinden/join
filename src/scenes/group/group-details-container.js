import { connect } from 'react-redux';
import GroupDetails from './group-details.js';
import { joinGroup } from '../../actions/index.js';

const enrichMembers = (memberIds, users) => users.filter(user => memberIds.indexOf(user.id) !== -1);

const mapStateToProps = (state) => {
  const group = state.groups.all.find(iterGroup => iterGroup.id === state.groups.selectedGroup);
  const events = state.events.all.filter(event => event.groupId === state.groups.selectedGroup);
  const creator = state.users.all.find(user => user.id === group.creatorId);
  const members = enrichMembers(group.memberIds, state.users.all);
  const isMember = !!members.find(member => member.id === state.users.current.id);
  return { group, creator, events, members, isMember };
};

const handleJoinGroup = (groupId) =>
(dispatch, getState) => dispatch(joinGroup({ groupId, userId: getState().users.current.id }));

export default connect(mapStateToProps, { handleJoinGroup })(GroupDetails);
