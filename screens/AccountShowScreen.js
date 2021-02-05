import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Screen from '../components/Screen';


function AccountShowScreen(props) {
  return (
    <Screen>
      <View style={styles.container}><Text>Hello from the Account Show Page</Text></View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AccountShowScreen;