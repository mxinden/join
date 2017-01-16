import React, { PropTypes } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Button, Icon, Text } from 'native-base';
import DatePicker from 'react-native-datepicker';

class CreateEvent extends React.Component {
  constructor(props) {
    super();
    this.state = { name: 'New Event', userId: props.creator.id, groupId: props.group.id };
  }

  render() {
    return (
      <Container style={{ paddingTop: 56 }} >
        <Content>
          <List>
            <ListItem iconLeft >
              <Icon name="ios-contact" />
              <Text>{this.props.creator.name}</Text>
            </ListItem>
            <ListItem iconLeft >
              <Icon name="ios-contacts-outline" />
              <Text>{this.props.group.name}</Text>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  placeholder="Event name"
                  onChangeText={name => this.setState({ name })}
                />
              </InputGroup>
            </ListItem>
            <ListItem iconLeft >
              <Icon name="ios-time-outline" />
              <DatePicker
                style={{ width: 200 }}
                date={new Date()}
                mode="datetime"
                placeholder="Select date"
                format="DD.MM.YYYY h:mm:ss a"
                showIcon={false}
                onDateChange={date => this.setState({ date })}
              />
            </ListItem>
            <ListItem >
              <InputGroup>
                <Icon name="ios-information-outline" />
                <Input
                  placeholder="Description"
                  onChangeText={description => this.setState({ description })}
                  multiline
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
