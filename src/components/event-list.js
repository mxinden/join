import React from 'react';
import { List, ListItem, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const EventList = ({ events }) => (
  <List>
    {events.map(event => (
      <ListItem
        key={event.id}
        iconLeft
        onPress={() => Actions.eventDetails({ event })}
      >
        <Icon name="ios-calendar-outline" />
        <Text>
          {event.name}
        </Text>
        <Text>
          {event.date}
        </Text>
      </ListItem>
      ))
    }
  </List>
);

EventList.propTypes = {
  events: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    id: React.PropTypes.string,
  })),
};

export default EventList;
