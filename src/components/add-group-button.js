import React from 'react';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { createGroup } from '../actions/index.js';

const AddGroupButton = ({ dispatch }) => (
  <Button
    onPress={() => dispatch(createGroup())}
  >Add</Button>
);

AddGroupButton.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect()(AddGroupButton);
