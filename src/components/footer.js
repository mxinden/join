import React, { PropTypes } from 'react';
import { Navigator } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Badge } from 'native-base';
import routes from '../lib/routes.js';

const FooterComponent = (props) => {
  console.log(routes.getTopLevel());
  return (
    <Footer>
      <FooterTab>
        {routes.getTopLevel().map(route => (
          <Button
            key={route.name}
            onPress={() => props.navigator.replace({ name: route.name })}
            active={route.name === props.route.name}
          >
            {route.title}
          </Button>
          ))
        }
      </FooterTab>
    </Footer>
  );
}

FooterComponent.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default FooterComponent;
