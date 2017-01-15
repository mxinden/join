import { connect } from 'react-redux';
import Router from './router.js';
import { createGroup } from './../actions/index.js';

const handleSaveGroup = () => (dispatch) => {
  dispatch(createGroup());
};

export default connect(() => ({}), { handleSaveGroup })(Router);
