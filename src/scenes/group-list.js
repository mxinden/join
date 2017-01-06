import React, { PropTypes } from 'react';
import { Text, View, Navigator } from 'react-native';
import { List, ListItem, Container, Content } from 'native-base';
import Footer from '../components/footer.js';
import TitleBar from '../components/title-bar.js';
import GroupsService from '../services/groups.js';
import joinTheme from '../../Themes/join-theme.js';

const GroupList = (props) => {
  return (
    <Container theme={joinTheme} >
      {TitleBar({ navigator: props.navigator, route: props.route })}
      <Content>
        <Text> Group List </Text>
        <List>
          {GroupsService.get().map(group => (
            <ListItem key={group.id}>
              <Text>{group.name}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
      {Footer({ navigator: props.navigator, route: props.route } )}
    </Container>
  );
};

GroupList.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default GroupList;
