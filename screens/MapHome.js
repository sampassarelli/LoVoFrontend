import React, { useContext, useEffect } from 'react';
import { View, StyleSheet,Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import {Marker} from 'react-native-maps'

import Screen from '../components/Screen'
import DestinationContext from '../components/contexts/DestinationContext'
import colors from '../config/colors';
import UserContext from '../components/contexts/UserContext'

function MapHome(props) {
  const [user, setUser] = useContext(UserContext)
  const [destinations, setDestinations] = useContext(DestinationContext)

  console.log(destinations);

  mapMarkers = () => {
      return destinations.map((destination) => {
      return <Marker
        key={destination.id}
        coordinate={{latitude: destination.latitude, longitude: destination.longitude}}
        title={destination.name}
        description={ destination.visited ? "Visited" : "Not Visited"}
        pinColor={ destination.visited ? "turquoise" : "red"}
      >
        {/* {destination.visited 
        ? 
        <Image source={require('../assets/BlueTrimmed.png')}  />
        :
        <Image source={require('../assets/RedTrimmed.png')}  />
      } */}
      </Marker>
    })
  }
  return (
  
      <MapView
        style={styles.map}
        showsUserLocation={true}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          longitude: -87.629799,
          latitude: 41.878113,
          longitudeDelta: 0.2,
          latitudeDelta: 0.5
        }}
      >
        {mapMarkers()}
      </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center"
  },
  map:{
    flex: 1,
    marginTop: 0
  },
  marker:{
    color: colors.primary
  }
});

export default MapHome;