import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";


import navigationTheme from "./navigation/navigationTheme";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from './navigation/AppNavigator';
import ContextStore from './ContextStore'
import UserContext from './components/contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const token = AsyncStorage.token
  // console.log(user);
  const user = useContext(UserContext)
  // console.log(user);
  return (
    <ContextStore>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator />}
      </NavigationContainer>
    </ContextStore>
  );
}


