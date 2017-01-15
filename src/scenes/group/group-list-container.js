import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import GroupList from './group-list';
import { selectGroup } from '../../actions/index.js';

const mapStateToProps = state => ({ groups: state.groups.all });

const mapDispatchToProps = dispatch => ({ selectGroup: (groupId, title) => {
  dispatch(selectGroup(groupId));
  Actions.groupDetails({ title });
} });

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
