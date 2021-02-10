import React, { useContext, useEffect } from 'react';
import { View, StyleSheet,Text } from 'react-native';
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
      destinations.map((destination) => {
      <Marker
        key={destination.id}
        coordinate={{latitude: destination.latitude, longitude: destination.longitude}}
        title={destination.name}
        description={destination.address}
      >
      </Marker>
    })
  }
  return (
  
      <MapView
        style={styles.map}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          longitude: -87.629799,
          latitude: 41.878113,
          longitudeDelta: 0.4,
          latitudeDelta: 0.8
        }}
      >
        {/* <Marker
          coordinate={{latitude: 41.781570, longitude: -87.887780}}
          title="Palmer Place"
          description="Not Visited"
          pinColor={'turquoise'}
        >
          </Marker> */}
        {mapMarkers()}
      </MapView>

    // <Screen>
    //   <View style={styles.container}><Text>Hello From the Map Home Screen</Text></View>
    // </Screen>
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