import React from 'react';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { createGroup } from '../actions/index.js';

const AddGroupButton = ({ handlePush }) => (
  <Button
    onPress={handlePush}
  >Add</Button>
);

AddGroupButton.propTypes = {
  handlePush: React.PropTypes.func.isRequired,
};

const handlePush = () => {
  return (dispatch, getState) => {
    dispatch(createGroup(getState().users.current.id));
  };
};

export default connect(() => ({}), { handlePush })(AddGroupButton);
