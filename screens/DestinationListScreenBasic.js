import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialDestinations = [
  {
    id: 1,
    title: "Destination 1",
    description: "This Destination is amazing",
  },
  {
    id: 2,
    title: "Destination 2",
    description: "This Destination is ass",
  },
];

function DestinationListScreenBasic(props) {
  const [destinations, setDestinations] = useState(initialDestinations);
  // const [refreshing, setRefreshing] = useState(false);


  const handleDelete = (destination) => {
    // Delete the message from messages
    setDestinations(destinations.filter((d) => d.id !== destination.id));
  };

  return (
    <Screen>
      <FlatList
        data={destinations}
        keyExtractor={(destination) => destination.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log("Destination selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        // refreshing={refreshing}
        // onRefresh={() => {
        //   setDestinations([
        //     {
        //       id: 1,
        //       title: "Destination 1",
        //       description: "This Destination is amazing",
        //     },
        //     {
        //       id: 2,
        //       title: "Destination 2",
        //       description: "This Destination is ass",
        //     },
        //   ]);
        // }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default DestinationListScreenBasic;
