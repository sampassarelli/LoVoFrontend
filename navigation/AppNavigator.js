import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from 'react-native';

import MapHome from '../screens/MapHome';
import AccountScreen from '../screens/AccountScreen';
import DestinationListScreen from '../screens/DestinationListScreen';
import DestinationNewScreen from '../screens/DestinationNewScreen';
import DestinationListNavigator from './DestinationListNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapHome}/>
      <Tab.Screen name="DestinationNew" component={DestinationNewScreen}/>
      <Tab.Screen name="DestinationList" component={DestinationListNavigator}/>
      <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppNavigator;