import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppForm from "../components/forms/AppForm"
import AppFormField from "../components/forms/AppFormField"
import SubmitButton from "../components/forms/SubmitButton"
import colors from "../config/colors"
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  // name: Yup.string().required().label("Name of Destination"),
  // username: Yup.string().required().label("Username"),
  // email: Yup.string().required().email().label("Email"),
  // password: Yup.string().required().min(4).label("Password"),
});

function DestinationNewScreen() {
  const [visited, setVisited] = useState(false)
  
  {/* This const below is So that the Longitude and Latitude fields are always hidden */}
  const hiddenFields = false

  return (
    <Screen style={styles.container}>
      <ScrollView>
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
          <AppFormField
            autoCorrect
            name="comment"
            placeholder="Memories, Comments, Notes, etc. "
          />
          <AppText style={styles.visited}>
            Have You Visited Here Yet?
          </AppText>
          <Switch 
            name="visited"
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
                name="date"
                placeholder="Date Visited - MM/DD/YYYY"
              />
              <AppFormField
                autoCorrect
                name="cost"
                placeholder="Money Spent"
              />
              <AppFormField
                autoCorrect
                name="attendees"
                placeholder="Attendees"
              />
              </View>
              :
              null
            }
          </View>
          {/* This View Below is So that the Longitude and Latitude fields are always hidden */}
          <View>
            {
              hiddenFields 
              ? 
              <View>
                <AppFormField
                  autoCorrect
                  name="longitude"
                />
                <AppFormField
                  autoCorrect
                  name="latitude"
                />
              </View>
              :
              null
            }
          </View>
          <SubmitButton title="Add Destination" onSubmit={() => console.log("Add Destination Button Touched")} />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
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
