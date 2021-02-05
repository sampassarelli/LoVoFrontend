import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import AccountScreen from '../screens/AccountScreen';
import AccountEditScreen from '../screens/AccountEditScreen';
import DestinationListScreen from '../screens/DestinationListScreen';
import DestinationShowScreen from '../screens/DestinationShowScreen';
import AccountShowScreen from '../screens/AccountShowScreen';


const Stack = createStackNavigator();

function AccountNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen}/>
      <Stack.Screen name="AccountShow" component={AccountShowScreen} options={{ title: "Account Details"}}/>
      <Stack.Screen name="AccountEdit" component={AccountEditScreen} options={{ title: "Edit Account"}}/>
      <Stack.Screen name="DestinationList" component={DestinationListScreen} options={{ title: "Destinations"}}/>
      <Stack.Screen name="DestinationShow" component={DestinationShowScreen} options={{ title: false}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AccountNavigator;