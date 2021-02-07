import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import AppButton from '../components/AppButton';



function DestinationShowScreen({ route }) {
  const destination = route.params
  
  // const [destination, setDestination] = useState(singleDestination);
  
  return(
    <Screen style={styles.screen}>
      <Card
        name={destination.name}
        address={destination.address}
        category={destination.category}
        dateVisited={destination.dateVisited}
        comment={destination.comment}
        cost={destination.cost}
        attendees={destination.attendees}
        image={destination.image}
      />
      <AppButton title="Edit" onPress={()=>console.log(destination)}/>
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