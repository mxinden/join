import React, { PropTypes } from 'react';
import { View } from 'react-native';
import EventList from '../../components/event-list.js';
import { Text, H1, Card, CardItem, Content, Container, Icon, InputGroup, List, ListItem, Input, Header } from 'native-base';

const GroupDetails = ({ group, owner }) => (
  <Container style={{ paddingTop: 56 }} >
    <Content>
      <List>
        <ListItem iconLeft >
          <Icon name="ios-contact" />
          <Text>{owner.name}</Text>
        </ListItem>
      </List>
      <View style={{paddingTop: 20 }}>
        <H1>Events</H1>
        <EventList events={group.events} />
      </View>
    </Content>
  </Container>
);

GroupDetails.propTypes = {
};

export default GroupDetails;
