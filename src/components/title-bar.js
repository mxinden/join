import React, { PropTypes } from 'react';
import { Header, Title, Button, Icon } from 'native-base';
import groupsService from '../services/groups.js';

const TitleBar = (props) => {
  let title = props.route.title;
  if (props.route.name === 'groupDetails') {
    title = groupsService.getById(props.details.groupId).name;
  }

  return (
    <Header>
      {props.navigator.getCurrentRoutes().length !== 1 &&
        <Button transparent
          onPress={() => props.navigator.pop(0)}
        >
          <Icon name="ios-arrow-back" />
        </Button>
      }
      <Title>{title}</Title>
    </Header>

  );
};

TitleBar.propTypes = {
  route: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default TitleBar;
