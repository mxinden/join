import { connect } from 'react-redux';
import GroupList from './group-list';
import { selectGroup } from '../actions/index.js';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = state => ({ groups: state.groups });

const mapDispatchToProps = (dispatch) => ({ selectGroup: (groupId, title) => {
  dispatch(selectGroup(groupId));
  Actions.groupDetails({ title });
}});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
