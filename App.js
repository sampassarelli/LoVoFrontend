import React, { useContext, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";


import navigationTheme from "./navigation/navigationTheme";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from './navigation/AppNavigator';
import ContextStore from './ContextStore'
import UserContext from './components/contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [user, setUser] = useState(null)


  return (
    <UserContext.Provider value={[ user, setUser ]}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator/> : <AuthNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
}


