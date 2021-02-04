import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function DestinationListScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Hello from the DestinationListScreen</Text>
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

export default DestinationListScreen;