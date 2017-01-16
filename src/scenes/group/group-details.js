import React, { PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Text, H1, Container, Icon, List, ListItem, Button, Content } from 'native-base';
import EventList from '../../components/event-list.js';
import PaddedView from '../../components/padded-view.js';

const GroupDetails = ({ group, creator, events }) => (
  <Container style={{ paddingTop: 56 }} >
    <Content>
      <List>
        <ListItem iconLeft >
          <Icon name="ios-contact" />
          <Text>{creator.name}</Text>
        </ListItem>
      </List>
      <View style={{ paddingTop: 20 }}>
        <H1>Events</H1>
        <EventList events={events} />
        <PaddedView>
          <Button
            block
            onPress={() => Actions.createEvent({ type: 'push', creator, group })}
          >
            Create Event
          </Button>
        </PaddedView>
      </View>
    </Content>
  </Container>
);

GroupDetails.propTypes = {
  group: PropTypes.object,
  events: PropTypes.array,
  creator: PropTypes.object,
};

export default GroupDetails;
