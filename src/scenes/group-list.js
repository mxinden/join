import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Footer from '../components/footer.js';
import TitleBar from '../components/title-bar.js';

const GroupList = () => (
  <Container>
    {TitleBar()}
    <Content>
    </Content>
    {Footer()}
  </Container>
);

GroupList.propTypes = {
};

export default GroupList;
