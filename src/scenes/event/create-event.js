import React, { PropTypes } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Button, Icon, Text } from 'native-base';

class CreateEvent extends React.Component {
  constructor(props) {
    super();
    this.state = { name: 'New Event', userId: props.owner.id, groupId: props.group.id };
  }

  render() {
    return (
      <Container style={{ paddingTop: 56 }} >
        <Content>
          <List>
            <ListItem iconLeft >
              <Icon name="ios-contact" />
              <Text>{this.props.owner.name}</Text>
            </ListItem>
            <ListItem iconLeft >
              <Icon name="ios-contacts-outline" />
              <Text>{this.props.group.name}</Text>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  inlineLabel
                  label="Name"
                  placeholder={this.state.name}
                  onChangeText={name => this.setState({ name })}
                />
              </InputGroup>
            </ListItem>
          </List>
          <Button
            block
            onPress={() => this.props.handleCreate(this.state)}
          >
            Create
          </Button>
        </Content>
      </Container>
    );
  }
}

CreateEvent.propTypes = {
  handleCreate: PropTypes.func.isRequired,
};

export default CreateEvent;
