import React, { PropTypes } from 'react';
import { View } from 'react-native';
import EventList from '../components/event-list.js';
import { Text, H1 } from 'native-base';

const GroupDetails = ({ group }) => (
  <View style={{ paddingTop: 56 }} >
    <Text>{group.id}</Text>
    <Text>{group.name}</Text>
    <Text>{group.userId}</Text>
    <H1>Events</H1>
    <EventList events={group.events} />
  </View>
);

GroupDetails.propTypes = {
};

export default GroupDetails;
