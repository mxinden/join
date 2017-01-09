import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

const GroupList = ({ groups }) => (
  <View style={{ paddingTop: 56 }} >
    <List>
      {groups.map(group => (
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

GroupList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default GroupList;
