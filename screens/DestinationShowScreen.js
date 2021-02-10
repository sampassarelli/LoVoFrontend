import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';


import Screen from "../components/Screen";
import CardShow from "../components/CardShow";
import colors from "../config/colors";
import AppButton from '../components/AppButton';
import routes from '../navigation/routes'


function DestinationShowScreen({ route, navigation }) {
  const destination = route.params
  
  // const [destination, setDestination] = useState(singleDestination);
  
  return(
    <Screen style={styles.screen}>
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
    padding: 20,
    backgroundColor: colors.light
  },
});

export default DestinationShowScreen;