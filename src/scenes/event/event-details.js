import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { Text } from 'native-base';
import PaddedView from '../../components/padded-view.js';

const EventDetails = ({ event }) => (
  <View style={{ paddingTop: 56 }} >
    <PaddedView>
      <View>
        <Text>Name: {event.name}</Text>
      </View>
      <View>
        <Text>Description: {event.description}</Text>
      </View>
      <View>
        <Text>Date: {event.date}</Text>
      </View>
    </PaddedView>
  </View>
);

EventDetails.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default EventDetails;
