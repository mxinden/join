import React, { PropTypes } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Button } from 'native-base';

class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = { name: 'New Event' };
  }

  render() {
    return (
      <Container style={{ paddingTop: 56 }} >
        <Content>
          <List>
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
            onPress={() => this.props.handleCreate(this.state.name)}
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
