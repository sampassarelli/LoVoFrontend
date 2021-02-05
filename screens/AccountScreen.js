import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparatorComponent from '../components/ListItemSeparator'
import colors from '../config/colors'
import Icon from '../components/Icon';
import routes from "../navigation/routes";

function AccountScreen({ navigation }) {

  const menuItems = [
    {
      title: "Edit Account",
      icon: {
        name: "account",
        backgroundColor: colors.secondary,
      },
      targetScreen: "AccountEdit"

    },
    {
      title: "My Destinations",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
      targetScreen: "DestinationList"
    },
    
  ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="User's Name"
          subTitle="Sample Email Address"
          image={require("../assets/profile-pic.jpeg")}
          onPress={() => navigation.navigate(routes.ACCOUNT_SHOW)}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent = {ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen, item)}
              IconComponent={
                <Icon 
                name={item.icon.name} 
                backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Logout"
        IconComponent ={<Icon name="logout" backgroundColor={colors.medium}/>}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen:{
    backgroundColor: colors.light
  },
});

export default AccountScreen;