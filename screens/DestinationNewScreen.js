import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen'

function DestinationNewScreen(props) {
  return (
    <Screen>
      <View style={styles.container}><Text>Hello From the Destination Form Screen</Text></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DestinationNewScreen;