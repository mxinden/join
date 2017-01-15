import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text, Icon } from 'native-base';

const EventList = ({ events }) => (
    <List>
      {events.map(event => (
        <ListItem key={event.id} iconLeft >
          <Icon name="ios-calendar-outline" />
          <Text>
            {event.name}
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
