import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, LogBox } from 'react-native';


import Screen from "../components/Screen";
import CardShow from "../components/CardShow";
import colors from "../config/colors";
import AppButton from '../components/AppButton';
import routes from '../navigation/routes'
import PullDownBar from '../components/PullDownBar';
import MapView from 'react-native-maps';


function DestinationShowScreen({ route, navigation }) {
  const destination = route.params
  console.log(destination);
  
  // const [destination, setDestination] = useState(singleDestination);
  
  return(
    <Screen style={styles.screen}>
      <PullDownBar style={styles.pull}></PullDownBar>
      <ScrollView>
        <CardShow
          name={destination.name}
          address={destination.address}
          category={destination.category}
          dateVisited={destination.date_visited}
          comment={destination.comment}
          cost={destination.cost}
          attendees={destination.attendees}
          image={destination.image}
        />
        <AppButton title="Edit" onPress={() => navigation.navigate(routes.DESTINATION_EDIT, destination)}/>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 20,
    backgroundColor: colors.light
  },
  pull:{
    alignSelf: "center"
  },
});

export default DestinationShowScreen;