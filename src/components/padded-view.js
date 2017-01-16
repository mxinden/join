import React from 'react';
import { View } from 'react-native';

const PaddedView = props => (
  <View style={{ padding: 10 }}>
    {props.children}
  </View>
);

export default PaddedView;
