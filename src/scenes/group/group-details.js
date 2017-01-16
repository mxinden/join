import React, { PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { Text, H1, Container, Icon, List, ListItem, Button, Content } from 'native-base';
import EventList from '../../components/event-list.js';
import PaddedView from '../../components/padded-view.js';

const GroupDetails = ({ group, creator, events, members, handleJoinGroup, isMember }) => (
  <Container style={{ paddingTop: 56 }} >
    <Content>
      <PaddedView>
        <Text>Creator: {creator.name}</Text>
      </PaddedView>
      <PaddedView>
        <H1>Members</H1>
        <List>
          {members.map(member => (
            <ListItem key={member.id} >
              <Text>{member.name}</Text>
            </ListItem>
            ))
          }
        </List>
        {isMember || <Button
          block
          onPress={() => handleJoinGroup(group.id)}
        >
          Join
        </Button>
        }
      </PaddedView>
      <View style={{ paddingTop: 20, padding: 10 }}>
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
  group: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  creator: PropTypes.object.isRequired,
  members: PropTypes.array.isRequired,
  handleJoinGroup: PropTypes.func.isRequired,
  isMember: PropTypes.bool.isRequired,
};

export default GroupDetails;
