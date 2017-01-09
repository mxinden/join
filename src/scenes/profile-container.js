import { connect } from 'react-redux';
import Profile from './profile.js';

const mapStateToProps = state => ({ currentUser: state.users.current });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
