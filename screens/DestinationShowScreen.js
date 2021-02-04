import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function DestinationShowScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hello from the DestinationShowScreen</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
});

export default DestinationShowScreen;