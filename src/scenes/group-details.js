import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const GroupDetails = ({ group }) => (
  <View style={{ paddingTop: 56 }} >
    <Text>{group.id}</Text>
    <Text>{group.name}</Text>
    <Text>{group.userId}</Text>
  </View>
);

GroupDetails.propTypes = {
};

export default GroupDetails;
