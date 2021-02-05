import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';


import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";



function DestinationShowScreen(props) {
  const singleDestination = [
    {
      id: 1,
      title: "Destination 1 his is sample text to see what and how far the lines go",
      description: "This Destination is amazing this is sample text to see what and how far the lines go",
      image: require('../assets/seed-destination-image.jpg'),
    },
  ];
  
  // const [destination, setDestination] = useState(singleDestination);
  
  return(
    <Screen style={styles.screen}>
      <Card
        title={singleDestination.title}
        subTitle={singleDestination.description}
        image={singleDestination.image}
      />
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