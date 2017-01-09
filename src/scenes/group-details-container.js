import { connect } from 'react-redux';
import GroupDetails from './group-details.js';

const mapStateToProps = state => {
  console.log(state);
  return { group: state.groups.find(group => group.id === state.selectedGroup)};
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);
