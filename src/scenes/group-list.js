import React, { PropTypes } from 'react';
import { Text, View, Navigator } from 'react-native';
import { List, ListItem, Container, Content } from 'native-base';
import GroupsService from '../services/groups.js';
import joinTheme from '../../Themes/join-theme.js';

const GroupList = (props) => {
  return (
    <List>
      {GroupsService.get().map(group => (
        <ListItem
          key={group.id}
          onPress={() => props.navigator.push({ name: 'groupDetails', details: { groupId: group.id } })}
        >
          <Text>{group.name}</Text>
        </ListItem>
        ))
      }
    </List>
  );
};

GroupList.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default GroupList;
