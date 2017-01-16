import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';

const EventDetails = ({ event }) => (
  <View style={{ paddingTop: 56 }} >
    <View>
      <Text>Name: {event.name}</Text>
    </View>
    <View>
      <Text>Details: {event.details}</Text>
    </View>
    <View>
      <Text>Date: {event.date.toDateString()}</Text>
    </View>
  </View>
);

EventDetails.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default EventDetails;
