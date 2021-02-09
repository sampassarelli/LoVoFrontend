import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen';
import UserContext from '../components/contexts/UserContext';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';


function AccountShowScreen(props) {
  const [user, setUser] = useContext(UserContext)
  return (
    <Screen style={styles.container}>
      <View>
        <Text>Hello, {user.user.first_name} {user.user.last_name}</Text>
        <AppText>Username:</AppText>
        <ListItem title={user.user.username}/>
        <Text></Text>
      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

export default AccountShowScreen;