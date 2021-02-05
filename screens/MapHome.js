import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

import Screen from '../components/Screen'

function MapHome(props) {
  return (
    <Screen>
      <View style={styles.container}><Text>Hello From the Map Home Screen</Text></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center"
  }
});

export default MapHome;