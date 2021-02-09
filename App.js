import React, { useContext, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";


import navigationTheme from "./navigation/navigationTheme";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from './navigation/AppNavigator';
import ContextStore from './ContextStore'
import UserContext from './components/contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DestinationContext from './components/contexts/DestinationContext'

export default function App() {
  const [user, setUser] = useState()
  const [destinations, setDestinations] = useState([])
  // console.log(user)

  return (
    <UserContext.Provider value={[ user, setUser ]}>
      <DestinationContext.Provider value={[destinations, setDestinations]}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator/> : <AuthNavigator />}
        </NavigationContainer>
      </DestinationContext.Provider>
    </UserContext.Provider>
  );
}


