import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import DestinationShowScreen from '../screens/DestinationShowScreen';
import DestinationListScreen from '../screens/DestinationListScreen';
import DestinationEditScreen from '../screens/DestinationEditScreen'

const Stack = createStackNavigator();

function DestinationListNavigator(props) {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="DestinationList" component={DestinationListScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="DestinationShow" component={DestinationShowScreen} options={{ headerShown: false, title: "Cancel"}}/>
      <Stack.Screen name="DestinationEdit" component={DestinationEditScreen} options={{title: false,}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DestinationListNavigator;