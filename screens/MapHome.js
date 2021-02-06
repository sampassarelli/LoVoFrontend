import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import MapView from 'react-native-maps'
import Marker from 'react-native-maps'

import Screen from '../components/Screen'

function MapHome(props) {
  return (
  
      <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          longitude: -87.629799,
          latitude: 41.878113,
          longitudeDelta: 0.4,
          latitudeDelta: 0.8
        }}
      >
        <Marker
        coordinate
        >
         
       
          </Marker>
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
  }
});

export default MapHome;