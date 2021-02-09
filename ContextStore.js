import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import UserContext from './components/contexts/UserContext'
import MapMarkerContext from './components/contexts/MapMarkerContext'
import DestinationContext from './components/contexts/DestinationContext'


function ContextStore({children}) {
  
  // const userSettings = {
  //   user_id: null,
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   username: '',
  //   password: '',
  //   isLoggedin: false,
  //   error: null
  // }

  const destinationSettings = {
    user_id: '',
    address: '',
    name: '',
    category: '',
    visited: false,
    date_visited: '',
    comment: '',
    attendees: '',
    cost: '',
    longitude: '',
    latitude: '',
    error: null
  }

  const markerSettings = {
    longitude: '',
    latitude: '',
  }

  const [user, setUser] = useState(null)
  const [destinations, setDestinations] = useState([])
  const [marker, setMarker] = useState(markerSettings)
  const [isLoading, setLoading] = useState(true)


  return (
    <UserContext.Provider value={[ user, setUser ]}>
      <DestinationContext.Provider value={[destinations, setDestinations]}>
        <MapMarkerContext.Provider value={[marker, setMarker]}>
          {children}
        </MapMarkerContext.Provider>
      </DestinationContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ContextStore;