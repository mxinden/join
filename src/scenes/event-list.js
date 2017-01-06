import React, { PropTypes } from 'react';
import { Text, View, Navigator } from 'react-native';
import { Container, Content } from 'native-base';
import Footer from '../components/footer.js';
import TitleBar from '../components/title-bar.js';
import joinTheme from '../../Themes/join-theme.js';

const EventList = (props) => {
  return (
    <Container theme={joinTheme} >
      {TitleBar({ navigator: props.navigator, route: props.route })}
      <Content>
        <Text> Event List </Text>
      </Content>
      {Footer({ navigator: props.navigator, route: props.route } )}
    </Container>
  );
};

EventList.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default EventList;
