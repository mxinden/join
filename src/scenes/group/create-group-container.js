import { connect } from 'react-redux';
import CreateGroup from './create-group';
import { createGroup } from '../../actions/index.js';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = state => ({ currentUser: state.users.current });

const handleCreate = ({ name }) => (dispatch, getState) => {
  dispatch(createGroup({ creatorId: getState().users.current.id, name }));
  Actions.pop();
};

export default connect(mapStateToProps, { handleCreate })(CreateGroup);
