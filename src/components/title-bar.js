import React, { PropTypes } from 'react';
import { Header, Title } from 'native-base';

const TitleBar = (props) => {
  console.log(props.navigator.getCurrentRoutes());
  return (
  <Header>
    <Title>{props.route.title}</Title>
  </Header>

  );
};

TitleBar.propTypes = {
  route: PropTypes.object.isRequired,
};

export default TitleBar;
