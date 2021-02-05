import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MapHome from '../screens/MapHome';
import AccountScreen from '../screens/AccountScreen';
import DestinationListScreen from '../screens/DestinationListScreen';
import DestinationNewScreen from '../screens/DestinationNewScreen';
import DestinationListNavigator from './DestinationListNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Map" 
        component={MapHome}
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-radius" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen 
        name="DestinationNew" 
        component={DestinationNewScreen}
        options={{
          title: "New",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen 
        name="DestinationList" 
        component={DestinationListNavigator}
        options={{
          title: "Destinations",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted-square" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen 
        name="Account" 
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default AppNavigator;