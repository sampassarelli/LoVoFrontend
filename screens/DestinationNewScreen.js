import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"
import colors from "../config/colors"
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function DestinationNewScreen() {
  const [visited, setVisited] = useState(false)

  return (
    <Screen style={styles.container}>
      <Text style={styles.header}>Where to Next?</Text>
      <AppForm
        initialValues={{ 
          address: "", 
          name: "", 
          category: "", 
          visited: visited,
          date_visited: "",
          cost: 0,
          attendees: "",
          latitude: 0.0,
          longitude: 0.0,
           }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="magnify"
          name="google"
          placeholder="GOOGLE SEARCH"
        />
        <AppFormField
          autoCorrect
          name="name"
          placeholder="Name"
        />
         <AppFormField
          autoCorrect
          name="address"
          placeholder="Address"
        />
        <AppFormField
          autoCorrect
          name="address"
          placeholder="Category"
        />
        <AppText style={styles.visited}>
          Have You Visited Here Yet?
        </AppText>
        <Switch 
          style={styles.switch} 
          value={visited}
          onValueChange={newValue => setVisited(newValue)}
          />
        <View>
          {
          visited ?
          <View>
            <Text style={styles.optional}>
            Optional Fields Below
            </Text>
            <AppFormField
              autoCorrect
              name="address"
              placeholder="Category"
            />
            </View>
            :
            null
          }
        </View>
        <SubmitButton title="Add Destination" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "500",
    paddingVertical: 20,
    color: colors.primary,
  },
  optional: {
    paddingLeft: 10
  },
  switch:{
    alignSelf: "center",
    paddingVertical: 30
  },
  visited: {
    alignSelf: "center"
  },
});

export default DestinationNewScreen;
