import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';



function AccountEditScreen(props) {
  return (
    <Screen>
      <View style={styles.container}><Text>Hello from the Edit Account Screen</Text></View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AccountEditScreen;