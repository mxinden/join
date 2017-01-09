import { connect } from 'react-redux';
import GroupList from './group-list';

const mapStateToProps = state => ({ groups: state.groups });

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
