import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DestinationListScreen from './screens/DestinationListScreen';
import DestinationShowScreen from './screens/DestinationShowScreen';
import WelcomeScreen from "./screens/WelcomeScreen";
import DestinationListScreenBasic from './screens/DestinationListScreenBasic';
import AccountScreen from './screens/AccountScreen';


export default function App() {
  return (
    <AccountScreen/>
  );
}


