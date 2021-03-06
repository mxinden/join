import { connect } from 'react-redux';
import EventScene from './event-scene.js';

const mapStateToProps = state => ({ events: state.events.all });

export default connect(mapStateToProps, {})(EventScene);
