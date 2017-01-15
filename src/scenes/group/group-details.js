import React, { PropTypes } from 'react';
import { View } from 'react-native';
import EventList from '../../components/event-list.js';
import { Text, H1, Card, CardItem, Content, Container, Icon, InputGroup } from 'native-base';

const GroupDetails = ({ group, owner }) => (
  <Container style={{ paddingTop: 56 }} >
    <Content>
      <Card style={{ flex: 0 }} >
        <CardItem>
          <Icon name="ios-contact" />
          <Text>{owner.name}</Text>
        </CardItem>
        <CardItem>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <Icon name="ios-calendar" />
            <Text>Events</Text>
          </View>
          <View>
            <EventList events={group.events} />
          </View>
        </CardItem>
      </Card>
    </Content>
  </Container>
);

GroupDetails.propTypes = {
};

export default GroupDetails;
