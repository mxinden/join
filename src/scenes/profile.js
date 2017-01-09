import React, { PropTypes } from 'react';
import { List, ListItem, InputGroup, Input } from 'native-base';
import { View } from 'react-native';

const Profile = ({ currentUser }) => (
  <View style={{ paddingTop: 56 }} >
    <List>
      <ListItem>
        <InputGroup>
          <Input inlineLabel label="Name" placeholder={currentUser.name} />
        </InputGroup>
      </ListItem>
    </List>
  </View>
);

Profile.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Profile;
