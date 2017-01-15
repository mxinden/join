import { connect } from 'react-redux';
import CreateGroup from './create-group';

const mapStateToProps = state => ({ currentUser: state.users.current });

export default connect(mapStateToProps, {})(CreateGroup);
