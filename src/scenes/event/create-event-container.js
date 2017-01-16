import { connect } from 'react-redux';
import CreateEvent from './create-event';
import { createEvent } from '../../actions/index.js';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = () => ({});

const handleCreate = event => dispatch => {
  dispatch(createEvent(event));
  Actions.pop();
};

export default connect(mapStateToProps, { handleCreate })(CreateEvent);
