import React, { PropTypes } from 'react';
import { Button, Text, Container, Content, List, ListItem, InputGroup, Input } from 'native-base';

class CreateGroup extends React.Component {
  constructor () {
    super();
    this.state = { name: 'New Group' };
  }
  render () {
    return (
      <Container style={{ paddingTop: 56 }} >
        <Content>
          <List>
            <ListItem>
              <InputGroup>
                <Input
                  placeholder="Group name"
                  onChangeText={name => this.setState({ name })}
                />
              </InputGroup>
            </ListItem>
          </List>
          <Button
            block
            onPress={() => this.props.handleCreate({ name: this.state.name })}
          >
            Save
          </Button>
        </Content>
      </Container>
    );
  }
}

CreateGroup.propTypes = {
  handleCreate: PropTypes.func,
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default CreateGroup;
