import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const GroupDetails = (props) => (
  <View style={{ paddingTop: 56 }} >
    <Text> Group details </Text>
    <Text> {props.groupId} </Text>
  </View>
);

GroupDetails.propTypes = {
};

export default GroupDetails;
