import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, LogBox } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import CardItemDeleteAction from "../components/CardItemDeleteAction";
import UserContext from "../components/contexts/UserContext";
import DestinationContext from "../components/contexts/DestinationContext";
import AppTextInput from '../components/AppTextInput'
import defaultStyles from "../config/styles";
import PullDownBar from "../components/PullDownBar";

function DestinationListScreen({ navigation }) {
  LogBox.ignoreLogs(['VirtualizedLists'])
  const [user, setUser] = useContext(UserContext)
  const [destinations, setDestinations] = useContext(DestinationContext);

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