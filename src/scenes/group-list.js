import React from 'react';
import { Text, View } from 'react-native';
import { List, ListItem, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import GroupsService from '../services/groups.js';

const GroupList = ({ groups }) => {
  return (
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
};

const mapStateToProps = state => ({ groups: state.groups });

const mapDispatchToProps = () => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);

