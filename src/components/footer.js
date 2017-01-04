import React, { PropTypes } from 'react';
import { Container, Content, Footer, FooterTab, Button, Badge } from 'native-base';

const FooterComponent = (props) => (
  <Footer>
    <FooterTab>
      <Button>
        Groups
      </Button>
      <Button>
        Events
      </Button>
      <Button>
        Messages
      </Button>
      <Button active>
        Profile
      </Button>
    </FooterTab>
  </Footer>
);

FooterComponent.propTypes = {
};

export default FooterComponent;
