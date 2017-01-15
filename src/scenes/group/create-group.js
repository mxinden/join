import React, { PropTypes } from 'react';
import { Text, Container, Content, List, ListItem, InputGroup, Input } from 'native-base';

const CreateGroup = props => (
  <Container style={{ paddingTop: 56 }} >
    <Content>
      <List>
        <ListItem>
          <InputGroup>
            <Input
              inlineLabel
              label="Name"
              onChangeText={text => props.handleNameChange(props.currentUser.id, text)}
            />
          </InputGroup>
        </ListItem>
      </List>
    </Content>
  </Container>
);

CreateGroup.propTypes = {
  handleNameChange: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default CreateGroup;
