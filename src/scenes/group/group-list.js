import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { List, ListItem, Text, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const GroupList = ({ groups, selectGroup }) => (
  <View style={{ paddingTop: 56 }} >
    <List>
      {groups.map(group => (
        <ListItem
          key={group.id}
          onPress={() => selectGroup(group.id, group.name)}
          iconLeft
        >
          <Icon name="ios-contacts-outline" />
          <Text>{group.name}</Text>
        </ListItem>
        ))
      }
    </List>
    <Button
      block
      onPress={() => Actions.createGroup({ type: 'push' })}
    >
      Create Group
    </Button>
  </View>
);

GroupList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default GroupList;
