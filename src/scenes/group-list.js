import React, { PropTypes } from 'react';
import { Text, View, Navigator } from 'react-native';
import { List, ListItem, Container, Content } from 'native-base';
import GroupsService from '../services/groups.js';
import joinTheme from '../../Themes/join-theme.js';
import { Actions } from 'react-native-router-flux';

const GroupList = (props) => {
  return (
    <View style={{ paddingTop: 56 }} >
      <List>
        {GroupsService.get().map(group => (
          <ListItem
            key={group.id}
            onPress={() => Actions.groupDetails({ groupId: group.id })}
          >
            <Text>{group.name}</Text>
          </ListItem>
          ))
        }
      </List>
    </View>
  );
};

GroupList.propTypes = {
};

export default GroupList;
