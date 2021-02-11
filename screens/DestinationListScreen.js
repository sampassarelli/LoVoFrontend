import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import CardItemDeleteAction from "../components/CardItemDeleteAction";
import UserContext from "../components/contexts/UserContext";
import DestinationContext from "../components/contexts/DestinationContext";
import AppTextInput from '../components/AppTextInput'
import defaultStyles from "../config/styles";
import PullDownBar from "../components/PullDownBar";


// const initialDestinations = [
//   {
//     id: 1,
//     title: "Destination 1 his is sample text to see what and how far the lines go",
//     description: "This Destination is amazing this is sample text to see what and how far the lines go",
//     image: require('../assets/seed-destination-image.jpg'),
//   },
//   {
//     id: 2,
//     title: "Destination 2",
//     description: "This Destination is ass",
//     // image: require('../assets/seed-destination-image.jpg'),
//   },
//   {
//     id: 3,
//     title: "Destination 3",
//     description: "This Destination is ok",
//     // image: require('../assets/seed-destination-image.jpg'),
//   },
//   {
//     id: 4,
//     title: "Destination 4",
//     description: "This Destination is the best",
//     image: require('../assets/seed-destination-image.jpg'),
//   },
// ];

function DestinationListScreen({ navigation }) {
  const [user, setUser] = useContext(UserContext)
  const [destinations, setDestinations] = useContext(DestinationContext);
  
  // useEffect(() => {
  //   setDestinations(destinations)
  //   // console.log(user.user.destinations);
  // },[])

  // const loadDestinations = async () => {
  //   await fetch(`http://localhost:3000/api/v1/users/${user.id}`)
  //   .then(resp => resp.json())
  //   .then(fetchedUser => setDestinations(fetchedUser.destinations))
  // }  

  const handleDelete = (destination) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destination.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(deletedDestination => {
      setDestinations(destinations.filter((d) => d.id !== destination.id));
    })
  };
  
  return (
    <Screen style={styles.screen}>
      <ScrollView>

        <AppTextInput
          style={styles.search}
          autoCorrect={false}
          icon="magnify"
          placeholder="SEARCH DESTINATIONS"
        />

        <Text>{!destinations ? "Add Your First Destination" : null }</Text>

        <FlatList
          data={destinations}
          keyExtractor={(destination) => destination.id.toString()}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              // address={item.address}
              image={item.image}
              visited={item.visited}
              onPress={() => navigation.navigate("DestinationShow", item)}
              renderRightActions={() => (
                <CardItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              
            />
          )}
        />
      </ScrollView>
    </Screen>
   
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 0,
    backgroundColor: colors.light
  },
  search:{
    marginVertical: 0,
    backgroundColor: defaultStyles.colors.light
  },
});

export default DestinationListScreen;