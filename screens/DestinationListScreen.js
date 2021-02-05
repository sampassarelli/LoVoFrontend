import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import CardItemDeleteAction from "../components/CardItemDeleteAction";

const initialDestinations = [
  {
    id: 1,
    title: "Destination 1 his is sample text to see what and how far the lines go",
    description: "This Destination is amazing this is sample text to see what and how far the lines go",
    image: require('../assets/seed-destination-image.jpg'),
  },
  {
    id: 2,
    title: "Destination 2",
    description: "This Destination is ass",
    // image: require('../assets/seed-destination-image.jpg'),
  },
  {
    id: 3,
    title: "Destination 3",
    description: "This Destination is ok",
    // image: require('../assets/seed-destination-image.jpg'),
  },
  {
    id: 4,
    title: "Destination 4",
    description: "This Destination is the best",
    image: require('../assets/seed-destination-image.jpg'),
  },
];

function DestinationListScreen({ navigation }) {
  const [destinations, setDestinations] = useState(initialDestinations);
  
  const handleDelete = (destination) => {
    // Delete the destination from destinations
    setDestinations(destinations.filter((d) => d.id !== destination.id));
  };
  
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={destinations}
        keyExtractor={(destination) => destination.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.description}
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