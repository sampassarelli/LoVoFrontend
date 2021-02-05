import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import DestinationShowScreen from '../screens/DestinationShowScreen';
import DestinationListScreen from '../screens/DestinationListScreen';

const Stack = createStackNavigator();

function DestinationListNavigator(props) {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false}}>
      <Stack.Screen name="DestinationList" component={DestinationListScreen}/>
      <Stack.Screen name="DestinationShow" component={DestinationShowScreen}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DestinationListNavigator;