import React, { PropTypes } from 'react';
import { Text, View, Navigator } from 'react-native';
import { Container, Content } from 'native-base';
import Footer from '../components/footer.js';
import TitleBar from '../components/title-bar.js';
import joinTheme from '../../Themes/join-theme.js';

const EventList = (props) => {
  return (
    <View style={{ paddingTop: 56 }} >
      <Text> Event List </Text>
    </View>
  );
};

EventList.propTypes = {
};

export default EventList;
