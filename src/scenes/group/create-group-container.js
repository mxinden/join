import { connect } from 'react-redux';
import CreateGroup from './create-group';
import { saveNewGroup } from '../../actions/index.js';

const mapStateToProps = state => ({ currentUser: state.users.current });

const handleNameChange = (userId, name) => (dispatch) => {
  dispatch(saveNewGroup(userId, name));
};

export default connect(mapStateToProps, { handleNameChange })(CreateGroup);
