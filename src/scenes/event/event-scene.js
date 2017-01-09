import React from 'react';
import { View } from 'react-native';
import EventList from '../../components/event-list.js';

const EventScene = ({ events }) => (
  <View style={{ paddingTop: 56 }} >
    <EventList events={events} />
  </View>
);

EventScene.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    id: React.PropTypes.string,
  })),
};

export default EventScene;
