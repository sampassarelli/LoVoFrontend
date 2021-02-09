import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import CardItemDeleteAction from "../components/CardItemDeleteAction";
import UserContext from "../components/contexts/UserContext";
import DestinationContext from "../components/contexts/DestinationContext";

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
  const [destinations, setDestinations] = useState(DestinationContext);
  
  useEffect(() => {
    setDestinations(user.user.destinations)
    // loadDestinations()
  },[])

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
      <FlatList
        data={destinations}
        keyExtractor={(destination) => destination.id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            address={item.address}
            image={item.image}
            onPress={() => navigation.navigate("DestinationShow", item)}
            renderRightActions={() => (
              <CardItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            
          />
        )}
      />
    </Screen>
   
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: colors.light
  }
});

export default DestinationListScreen;