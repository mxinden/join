import React, { PropTypes } from 'react';
import { Text, View, Navigator } from 'react-native';
import { Container, Content } from 'native-base';
import Footer from '../components/footer.js';
import TitleBar from '../components/title-bar.js';
import joinTheme from '../../Themes/join-theme.js';

const EventList = (props) => {
  return (
    <Text> Event List </Text>
  );
};

EventList.propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default EventList;
