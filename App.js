import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


import DestinationListScreen from './screens/DestinationListScreen';
import DestinationShowScreen from './screens/DestinationShowScreen';
import WelcomeScreen from "./screens/WelcomeScreen";
import DestinationListScreenBasic from './screens/DestinationListScreenBasic';
import AccountScreen from './screens/AccountScreen';
import Screen from './components/Screen';
import AppTextInput from './components/AppTextInput'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import navigationTheme from "./navigation/navigationTheme";
import AuthNavigator from "./navigation/AuthNavigator";
import MapHome from './screens/MapHome';
import DestinationNewScreen from './screens/DestinationNewScreen';
import AppNavigator from './navigation/AppNavigator';



export default function App() {
  return (
    // <DestinationNewScreen/>
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}


