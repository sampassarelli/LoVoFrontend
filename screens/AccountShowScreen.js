import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen';
import UserContext from '../components/contexts/UserContext';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import CardAccountShow from '../components/CardAccountShow';
import colors from '../config/colors'
import AppButton from '../components/AppButton'
import routes from '../navigation/routes'

function AccountShowScreen({navigation}) {
  const [user, setUser] = useContext(UserContext)
  console.log(user)

  return (
    <Screen style={styles.container}>
      <CardAccountShow
        name={user.user.first_name}
        address={user.user.username}
        category={user.user.email}
      />
      <View style={styles.buttonsContainer}>
      <AppButton 
        title="Edit Account" 
        onPress={() => navigation.navigate(routes.ACCOUNT_EDIT)}
      />
      <AppButton 
        title="Logout" 
        color="danger" 
        onPress={() => setUser(null)}
        />
      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.light
  },

});

export default AccountShowScreen;