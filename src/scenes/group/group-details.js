import React, { PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import EventList from '../../components/event-list.js';
import { Text, H1, Container, Icon, List, ListItem, Button, Content } from 'native-base';

const GroupDetails = ({ group, owner }) => (
  <Container style={{ paddingTop: 56 }} >
    <Content>
      <List>
        <ListItem iconLeft >
          <Icon name="ios-contact" />
          <Text>{owner.name}</Text>
        </ListItem>
      </List>
      <View style={{ paddingTop: 20 }}>
        <H1>Events</H1>
        <EventList events={group.events} />
        <Button
          block
          onPress={() => Actions.createEvent({ type: 'push', owner, group })}
        >
          Create Event
        </Button>
      </View>
    </Content>
  </Container>
);

GroupDetails.propTypes = {
};

export default GroupDetails;
